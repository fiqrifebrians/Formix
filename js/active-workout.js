let currentUser = JSON.parse(localStorage.getItem('formix_currentUser'));
let activeCW = null;
let isStarted = false;
let isEditMode = false;
let progress = {}; 
let selectedExerciseDataAct = null;
let runningTimers = {}; 

document.addEventListener("DOMContentLoaded", () => {
    if(!currentUser) return window.location.href = 'signup.html';
    const cwId = new URLSearchParams(window.location.search).get('id');
    activeCW = currentUser.customWorkouts.find(w => w.id === cwId);
    
    if(!activeCW) {
        document.getElementById('active-title').innerText = "NOT FOUND";
        return;
    }
    document.getElementById('active-title').innerText = activeCW.name;
    activeCW.exercises.forEach((ex, idx) => { progress[idx] = 0; });
    
    renderActiveList();
    populateSelectsAct();
});

function toggleEditMode() {
    if(isStarted) return alert("Cannot edit while workout is in progress!");
    isEditMode = !isEditMode;
    document.getElementById('btn-edit-workout').innerText = isEditMode ? "FINISH EDITING" : "EDIT WORKOUT";
    document.getElementById('btn-start-workout').style.display = isEditMode ? 'none' : 'inline-block';
    document.getElementById('btn-add-ex').style.display = isEditMode ? 'inline-block' : 'none';
    renderActiveList();
}

function renderActiveList() {
    const container = document.getElementById('active-list');
    container.innerHTML = "";

    const lang = localStorage.getItem('formix_lang') || 'en';
    const langDict = translations[lang];

    activeCW.exercises.forEach((ex, idx) => {
        const fullExData = workoutDB.find(w => w.id == ex.baseId);
        const card = document.createElement("div");
        card.className = "workout-card fade-in";
        
        let controlHtml = "";
        
        if (isEditMode) {
            controlHtml = `
                <div class="edit-controls">
                    <button class="btn-icon" onclick="moveUp(${idx})">&#9650;</button>
                    <button class="btn-icon" onclick="moveDown(${idx})">&#9660;</button>
                    <button class="btn-icon btn-danger" style="margin-top:auto;" onclick="deleteActiveExercise(${idx})">X</button>
                </div>
            `;
        } else if (isStarted) {
            let isComplete = false; let trackUI = "";
            if (ex.type === "reps") {
                const totalRounds = parseInt(ex.rounds) || 0;
                isComplete = progress[idx] >= totalRounds;
                trackUI = `
                    <div class="tracker-row">
                        <button class="btn-icon" onclick="updateRound(${idx}, -1)" ${isComplete?'disabled':''}>-</button>
                        <span>${progress[idx]} / ${totalRounds} Rnd</span>
                        <button class="btn-icon" onclick="updateRound(${idx}, 1)" ${isComplete?'disabled':''}>+</button>
                    </div>
                `;
            } else {
                const totalLaps = parseInt(ex.laps) || 1;
                isComplete = progress[idx] >= totalLaps;
                
                if (isComplete) {
                    trackUI = `<div style="font-weight:800; font-size:1.2rem; color:#16a34a;">✓ DONE</div>`;
                } else {
                    const isRunning = runningTimers[idx] !== undefined;
                    const displayTime = isRunning ? runningTimers[idx].timeLeft : parseInt(ex.timer);
                    const currentLap = progress[idx] + 1;
                    
                    trackUI = `
                        <div style="display:flex; flex-direction:column; align-items:center; gap:0.5rem;">
                            <span style="font-size:2.5rem; font-weight:900; font-variant-numeric: tabular-nums;" id="time-disp-${idx}">${displayTime}s</span>
                            <span style="font-weight:600; color:var(--gray-text);">Lap ${currentLap} of ${totalLaps}</span>
                            <button class="btn-primary" id="btn-time-${idx}" onclick="startCountdown(${idx}, ${parseInt(ex.timer)})" ${isRunning?'disabled':''}>
                                ${isRunning ? 'RUNNING...' : 'START LAP'}
                            </button>
                        </div>
                    `;
                }
            }
            controlHtml = `
                <div style="padding:1.5rem; border-left:1px solid var(--black); background: ${isComplete ? '#dcfce7' : 'transparent'}; flex: 0.8; display:flex; align-items:center; justify-content:center;">
                    ${trackUI}
                </div>
            `;
        }

        // Ambil data instruksi bahasa dari DB
        const stepsArr = lang === 'id' && fullExData.steps_id ? fullExData.steps_id : fullExData.steps;
        const sHtml = stepsArr.map(s => `<li>${s}</li>`).join('');

        card.innerHTML = `
            <div class="video-container" style="flex:0.8"><img src="${fullExData.media_url}" onerror="this.src='assets/mini-logo.png';"></div>
            <div class="workout-details" style="flex:1.5">
                <h3>${ex.name}</h3>
                <div class="target-badge">${ex.info}</div>
                <br>
                <button id="btn-inst-${idx}" class="btn-toggle-inst" onclick="toggleInst(${idx})">${langDict.btn_show_inst}</button>
                <div id="inst-${idx}" class="exec-instructions" style="display:none;">
                    <h4>${langDict.label_execution}</h4>
                    <ol class="steps">${sHtml}</ol>
                </div>
            </div>
            ${controlHtml}
        `;
        container.appendChild(card);
    });
}

window.toggleInst = function(idx) {
    const instDiv = document.getElementById(`inst-${idx}`);
    const btn = document.getElementById(`btn-inst-${idx}`);
    const lang = localStorage.getItem('formix_lang') || 'en';
    
    if (instDiv.style.display === 'none' || instDiv.style.display === '') {
        instDiv.style.display = 'block';
        btn.innerText = translations[lang].btn_hide_inst;
    } else {
        instDiv.style.display = 'none';
        btn.innerText = translations[lang].btn_show_inst;
    }
};

function startCountdown(idx, totalSec) {
    if(runningTimers[idx]) return;
    
    runningTimers[idx] = { timeLeft: totalSec };
    const btn = document.getElementById(`btn-time-${idx}`);
    if(btn) { btn.innerText = "RUNNING..."; btn.disabled = true; }
    
    runningTimers[idx].interval = setInterval(() => {
        runningTimers[idx].timeLeft--;
        const disp = document.getElementById(`time-disp-${idx}`);
        if(disp) disp.innerText = runningTimers[idx].timeLeft + "s";
        
        if (runningTimers[idx].timeLeft <= 0) {
            clearInterval(runningTimers[idx].interval);
            delete runningTimers[idx];
            progress[idx]++; 
            renderActiveList();
            checkAllComplete();
        }
    }, 1000);
}

function moveUp(idx) {
    if(idx === 0) return;
    const temp = activeCW.exercises[idx];
    activeCW.exercises[idx] = activeCW.exercises[idx-1];
    activeCW.exercises[idx-1] = temp;
    updateDB(); renderActiveList();
}

function moveDown(idx) {
    if(idx === activeCW.exercises.length - 1) return;
    const temp = activeCW.exercises[idx];
    activeCW.exercises[idx] = activeCW.exercises[idx+1];
    activeCW.exercises[idx+1] = temp;
    updateDB(); renderActiveList();
}

function deleteActiveExercise(idx) {
    activeCW.exercises.splice(idx, 1);
    updateDB(); renderActiveList();
}

function updateDB() {
    const users = JSON.parse(localStorage.getItem('formix_users'));
    users[currentUser.username] = currentUser;
    localStorage.setItem('formix_users', JSON.stringify(users));
    localStorage.setItem('formix_currentUser', JSON.stringify(currentUser));
}

function startWorkout() {
    if(activeCW.exercises.length === 0) return alert("Add exercises first!");
    isStarted = true;
    document.getElementById('btn-start-workout').style.display = 'none';
    document.getElementById('btn-edit-workout').style.display = 'none';
    renderActiveList();
}

function updateRound(idx, val) {
    const totalRounds = parseInt(activeCW.exercises[idx].rounds) || 0;
    progress[idx] += val;
    if (progress[idx] < 0) progress[idx] = 0;
    if (progress[idx] > totalRounds) progress[idx] = totalRounds;
    renderActiveList(); checkAllComplete();
}

function completeTimer(idx) {
    progress[idx] = 1;
    renderActiveList(); checkAllComplete();
}

function checkAllComplete() {
    let allDone = true;
    activeCW.exercises.forEach((ex, idx) => {
        if (ex.type === "reps" && progress[idx] < parseInt(ex.rounds)) allDone = false;
        if (ex.type === "timer" && progress[idx] < (parseInt(ex.laps) || 1)) allDone = false;
    });
    if (allDone) document.getElementById('finishModal').style.display = 'flex';
}

function populateSelectsAct() {
    const mSel = document.getElementById('filter-muscle-act');
    const eSel = document.getElementById('filter-equip-act');
    const lang = localStorage.getItem('formix_lang') || 'en';
    muscles.forEach(m => { mSel.innerHTML += `<option value="${m.id}">${lang==='id'&&m.name_id?m.name_id:m.name}</option>`; });
    equipments.forEach(e => { eSel.innerHTML += `<option value="${e.id}">${lang==='id'&&e.name_id?e.name_id:e.name}</option>`; });
}

function openAddModal() { document.getElementById('addModal').style.display = 'flex'; filterModalExercisesAct(); }
function closeAddModal() { document.getElementById('addModal').style.display = 'none'; }

function filterModalExercisesAct() {
    const nQ = document.getElementById('filter-name-act').value.toLowerCase();
    const mQ = document.getElementById('filter-muscle-act').value;
    const eQ = document.getElementById('filter-equip-act').value;
    const list = document.getElementById('modal-ex-list-act');
    const lang = localStorage.getItem('formix_lang') || 'en';

    let filtered = workoutDB.filter(w => {
        const wName = lang === 'id' && w.name_id ? w.name_id : w.name;
        let passName = wName.toLowerCase().includes(nQ) || w.name.toLowerCase().includes(nQ);
        return passName && (mQ === "all" || w.muscle === mQ) && (eQ === "all" || w.equipment === eQ);
    });

    list.innerHTML = "";
    filtered.forEach(w => {
        const wName = lang === 'id' && w.name_id ? w.name_id : w.name;
        const div = document.createElement("div"); div.className = "ex-list-item"; div.innerText = wName;
        div.onclick = () => selectExerciseForPlanAct(w);
        list.appendChild(div);
    });
}

function selectExerciseForPlanAct(wObj) {
    selectedExerciseDataAct = wObj;
    const lang = localStorage.getItem('formix_lang') || 'en';
    const wName = lang === 'id' && wObj.name_id ? wObj.name_id : wObj.name;
    document.getElementById('ex-config-act').style.display = 'block';
    document.getElementById('selected-ex-name-act').innerText = "Selected: " + wName;
}

function toggleExTypeAct() {
    const t = document.getElementById('ex-type-act').value;
    document.getElementById('reps-config-act').style.display = t === 'reps' ? 'flex' : 'none';
    document.getElementById('timer-config-act').style.display = t === 'timer' ? 'flex' : 'none';
}

function addExerciseToActivePlan() {
    if(!selectedExerciseDataAct) return alert("Select an exercise!");
    const t = document.getElementById('ex-type-act').value;
    const lang = localStorage.getItem('formix_lang') || 'en';
    const wName = lang === 'id' && selectedExerciseDataAct.name_id ? selectedExerciseDataAct.name_id : selectedExerciseDataAct.name;
    
    let infoStr = "";
    if (t === "reps") {
        const r = document.getElementById('ex-reps-act').value || 0;
        const rnd = document.getElementById('ex-rounds-act').value || 0;
        infoStr = `${r} Reps x ${rnd} Rounds`;
    } else {
        const sec = document.getElementById('ex-timer-act').value || 0;
        const laps = document.getElementById('ex-laps-act').value || 1;
        infoStr = `${sec}s x ${laps} Laps`;
    }

    activeCW.exercises.push({ baseId: selectedExerciseDataAct.id, name: wName, type: t, reps: document.getElementById('ex-reps-act').value, rounds: document.getElementById('ex-rounds-act').value, timer: document.getElementById('ex-timer-act').value, laps: document.getElementById('ex-laps-act').value || 1, info: infoStr });
    progress[activeCW.exercises.length - 1] = 0; 
    updateDB(); closeAddModal(); renderActiveList();
    document.getElementById('ex-config-act').style.display = 'none'; selectedExerciseDataAct = null;
}