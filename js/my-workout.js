let currentUser = JSON.parse(localStorage.getItem('formix_currentUser'));
let tempExercises = [];
let selectedExerciseData = null;

document.addEventListener("DOMContentLoaded", () => {
    if(!currentUser) { window.location.href = 'signup.html'; return; }
    loadMyWorkouts();
    populateSelects();
});

function loadMyWorkouts() {
    const container = document.getElementById('my-workout-list');
    container.innerHTML = "";

    if (!currentUser.customWorkouts || currentUser.customWorkouts.length === 0) {
        container.innerHTML = `<p style="text-align:center; color:var(--gray-text);">No custom workouts found. Create one!</p>`;
        return;
    }

    currentUser.customWorkouts.forEach((cw, idx) => {
        container.innerHTML += `
            <div class="cw-item fade-in" style="animation-delay:${idx*0.1}s">
                <div>
                    <h3>${cw.name}</h3>
                    <div class="cw-details">${cw.exercises.length} Exercises</div>
                </div>
                <div style="display:flex; gap:10px;">
                    <button class="btn-primary" onclick="window.location.href='active-workout.html?id=${cw.id}'">View</button>
                    <button class="btn-primary btn-danger" onclick="deleteWorkout('${cw.id}')">X</button>
                </div>
            </div>
        `;
    });
}

function openCreateModal() { 
    document.getElementById('createModal').style.display = 'flex'; 
    filterModalExercises(); 
}

function closeModal() { document.getElementById('createModal').style.display = 'none'; }

function populateSelects() {
    const mSel = document.getElementById('filter-muscle');
    const eSel = document.getElementById('filter-equip');
    const lang = localStorage.getItem('formix_lang') || 'en';
    
    muscles.forEach(m => {
        let name = lang === 'id' && m.name_id ? m.name_id : m.name;
        mSel.innerHTML += `<option value="${m.id}">${name}</option>`;
    });
    equipments.forEach(e => {
        let name = lang === 'id' && e.name_id ? e.name_id : e.name;
        eSel.innerHTML += `<option value="${e.id}">${name}</option>`;
    });
}

function filterModalExercises() {
    const nQ = document.getElementById('filter-name').value.toLowerCase();
    const mQ = document.getElementById('filter-muscle').value;
    const eQ = document.getElementById('filter-equip').value;
    const list = document.getElementById('modal-ex-list');
    const lang = localStorage.getItem('formix_lang') || 'en';

    let filtered = workoutDB.filter(w => {
        const wName = lang === 'id' && w.name_id ? w.name_id : w.name;
        let passName = wName.toLowerCase().includes(nQ) || w.name.toLowerCase().includes(nQ);
        let passMusc = mQ === "all" ? true : w.muscle === mQ;
        let passEquip = eQ === "all" ? true : w.equipment === eQ;
        return passName && passMusc && passEquip;
    });

    list.innerHTML = "";
    filtered.forEach(w => {
        const wName = lang === 'id' && w.name_id ? w.name_id : w.name;
        const div = document.createElement("div");
        div.className = "ex-list-item";
        div.innerText = wName;
        div.onclick = () => selectExerciseForPlan(w);
        list.appendChild(div);
    });
}

function selectExerciseForPlan(wObj) {
    selectedExerciseData = wObj;
    const lang = localStorage.getItem('formix_lang') || 'en';
    const wName = lang === 'id' && wObj.name_id ? wObj.name_id : wObj.name;
    document.getElementById('ex-config').style.display = 'block';
    document.getElementById('selected-ex-name').innerText = "Selected: " + wName;
}

function toggleExType() {
    const t = document.getElementById('ex-type').value;
    document.getElementById('reps-config').style.display = t === 'reps' ? 'flex' : 'none';
    document.getElementById('timer-config').style.display = t === 'timer' ? 'block' : 'none';
}

function addExerciseToPlan() {
    if(!selectedExerciseData) return alert("Select an exercise!");
    const t = document.getElementById('ex-type').value;
    const lang = localStorage.getItem('formix_lang') || 'en';
    const wName = lang === 'id' && selectedExerciseData.name_id ? selectedExerciseData.name_id : selectedExerciseData.name;
    
    let infoStr = "";
    if (t === "reps") {
        const r = document.getElementById('ex-reps').value || 0;
        const rnd = document.getElementById('ex-rounds').value || 0;
        infoStr = `${r} Reps x ${rnd} Rounds`;
    } else {
        const sec = document.getElementById('ex-timer').value || 0;
        infoStr = `${sec} Seconds`;
    }

    tempExercises.push({ 
        baseId: selectedExerciseData.id, 
        name: wName, 
        type: t,
        reps: document.getElementById('ex-reps').value,
        rounds: document.getElementById('ex-rounds').value,
        timer: document.getElementById('ex-timer').value,
        info: infoStr
    });
    
    renderTempExercises();
    document.getElementById('ex-config').style.display = 'none';
    selectedExerciseData = null;
}

function renderTempExercises() {
    document.getElementById('temp-exercises').innerHTML = tempExercises.map(e => `<li>${e.name} — <span style="color:var(--primary)">${e.info}</span></li>`).join('');
}

function saveCustomWorkout() {
    const name = document.getElementById('cw-name').value;
    if(!name || tempExercises.length === 0) return alert("Name and at least 1 exercise required.");

    const newWorkout = { id: 'cw_'+Date.now(), name: name, exercises: tempExercises };
    currentUser.customWorkouts.push(newWorkout);
    
    updateUserInDB();
    closeModal();
    tempExercises = [];
    document.getElementById('cw-name').value = '';
    renderTempExercises();
    loadMyWorkouts();
}

function deleteWorkout(id) {
    currentUser.customWorkouts = currentUser.customWorkouts.filter(cw => cw.id !== id);
    updateUserInDB();
    loadMyWorkouts();
}

function updateUserInDB() {
    const users = JSON.parse(localStorage.getItem('formix_users'));
    users[currentUser.username] = currentUser;
    localStorage.setItem('formix_users', JSON.stringify(users));
    localStorage.setItem('formix_currentUser', JSON.stringify(currentUser));
}