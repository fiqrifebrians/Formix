let currentUser = JSON.parse(localStorage.getItem('formix_currentUser'));
let activeCW = null;
let isStarted = false;
let isEditMode = false;
let progress = {}; 
let selectedExerciseDataAct = null;

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
                        <span>${progress[idx]} / ${totalRounds} Rounds</span>
                        <button class="btn-icon" onclick="updateRound(${idx}, 1)" ${isComplete?'disabled':''}>+</button>
                    </div>
                `;
            } else {
                const totalTime = parseInt(ex.timer) || 0;
                isComplete = progress[idx] >= 1;
                trackUI = `
                    <div class="tracker-row">
                        <button class="btn-primary ${isComplete ? 'btn-success' : ''}" onclick="completeTimer(${idx})" ${isComplete?'disabled':''}>
                            ${isComplete ? '✓ DONE' : 'MARK DONE ('+totalTime+'s)'}
                        </button>
                    </div>
                `;
            }
            controlHtml = `
                <div style="padding:1rem; border-left:1px solid var(--black); background: ${isComplete ? '#dcfce7' : 'transparent'}; flex: 0.5; display:flex; align-items:center; justify-content:center;">
                    ${trackUI}
                </div>
            `;
        }

        card.innerHTML = `
            <div class="video-container" style="flex:0.8"><img src="${fullExData.media_url}" onerror="this.src='assets/mini-logo.png';"></div>
            <div class="workout-details" style="flex:1.5">
                <h3>${ex.name}</h3>
                <h4 style="color:var(--primary); margin:0;">Target: ${ex.info}</h4>
            </div>
            ${controlHtml}
        `;
        container.appendChild(card);
    });
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
        if (ex.type === "timer" && progress[idx] < 1) allDone = false;
    });
    if (allDone) document.getElementById('finishModal').style.display = 'flex';
}

/* Modal Add Exercise Logic */
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
    document.getElementById('timer-config-act').style.display = t === 'timer' ? 'block' : 'none';
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
        infoStr = `${sec} Seconds`;
    }

    activeCW.exercises.push({ baseId: selectedExerciseDataAct.id, name: wName, type: t, reps: document.getElementById('ex-reps-act').value, rounds: document.getElementById('ex-rounds-act').value, timer: document.getElementById('ex-timer-act').value, info: infoStr });
    progress[activeCW.exercises.length - 1] = 0; // set track zero
    updateDB(); closeAddModal(); renderActiveList();
    document.getElementById('ex-config-act').style.display = 'none'; selectedExerciseDataAct = null;
}