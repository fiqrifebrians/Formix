let currentUser = JSON.parse(localStorage.getItem('formix_currentUser'));
let tempExercises = [];
let selectedExerciseData = null;
let editModeId = null;
const workoutDB = [...upperWorkouts, ...lowerWorkouts, ...cardioWorkouts];

document.addEventListener("DOMContentLoaded", () => {
    if(!currentUser) { window.location.href = 'login.html'; return; }
    loadMyWorkouts();
    populateSelects();
});

function loadMyWorkouts() {
    const container = document.getElementById('my-workout-list');
    container.innerHTML = "";
    if (!currentUser.customWorkouts || currentUser.customWorkouts.length === 0) {
        container.innerHTML = `<p style="text-align:center; color:var(--gray-text); font-weight:800; padding: 2rem; border: 2px dashed var(--gray-border);">No custom workouts found. Create your first program!</p>`;
        return;
    }
    currentUser.customWorkouts.forEach((cw, idx) => {
        container.innerHTML += `
            <div class="cw-item fade-in" style="animation-delay:${idx*0.1}s">
                <div>
                    <h3>${cw.name}</h3>
                    <div class="cw-details">${cw.exercises.length} Exercises Built</div>
                </div>
                <div style="display:flex; gap:10px;">
                    <button class="btn-primary" onclick="openEditModal('${cw.id}')">Edit</button>
                    <button class="btn-primary btn-danger" onclick="deleteWorkout('${cw.id}')">Delete</button>
                </div>
            </div>
        `;
    });
}

function openCreateModal() { 
    editModeId = null;
    document.getElementById('modal-title').innerText = "CREATE WORKOUT";
    document.getElementById('cw-name').value = "";
    tempExercises = [];
    renderTempExercises();
    document.getElementById('createModal').style.display = 'flex'; 
    filterModalExercises(); 
}

function openEditModal(id) {
    const cw = currentUser.customWorkouts.find(w => w.id === id);
    if(!cw) return;
    editModeId = id;
    document.getElementById('modal-title').innerText = "EDIT WORKOUT";
    document.getElementById('cw-name').value = cw.name;
    tempExercises = [...cw.exercises];
    renderTempExercises();
    document.getElementById('createModal').style.display = 'flex';
    filterModalExercises();
}

function closeModal() { document.getElementById('createModal').style.display = 'none'; }

function populateSelects() {
    const mSel = document.getElementById('filter-muscle');
    const eSel = document.getElementById('filter-equip');
    muscles.forEach(m => { mSel.innerHTML += `<option value="${m.id}">${m.name}</option>`; });
    equipments.forEach(e => { eSel.innerHTML += `<option value="${e.id}">${e.name}</option>`; });
}

function filterModalExercises() {
    const nQ = document.getElementById('filter-name').value.toLowerCase();
    const mQ = document.getElementById('filter-muscle').value;
    const eQ = document.getElementById('filter-equip').value;
    const list = document.getElementById('modal-ex-list');

    let filtered = workoutDB.filter(w => {
        let passName = w.name.toLowerCase().includes(nQ);
        let passMusc = mQ === "all" ? true : w.muscle === mQ;
        let passEquip = eQ === "all" ? true : w.equipment === eQ;
        return passName && passMusc && passEquip;
    });

    list.innerHTML = "";
    filtered.forEach(w => {
        const div = document.createElement("div");
        div.className = "ex-list-item";
        div.innerText = w.name;
        div.onclick = () => selectExerciseForPlan(w);
        list.appendChild(div);
    });
}

function selectExerciseForPlan(wObj) {
    selectedExerciseData = wObj;
    document.getElementById('ex-config').style.display = 'block';
    document.getElementById('selected-ex-name').innerText = wObj.name;
}

function toggleExType() {
    const t = document.getElementById('ex-type').value;
    document.getElementById('reps-config').style.display = t === 'reps' ? 'flex' : 'none';
    document.getElementById('timer-config').style.display = t === 'timer' ? 'flex' : 'none';
}

function addExerciseToPlan() {
    if(!selectedExerciseData) return alert("Select an exercise first!");
    const t = document.getElementById('ex-type').value;
    
    let infoStr = "";
    if (t === "reps") {
        const r = document.getElementById('ex-reps').value || 1;
        const rnd = document.getElementById('ex-rounds').value || 1;
        infoStr = `${r} Reps x ${rnd} Rounds`;
    } else {
        const sec = document.getElementById('ex-timer').value || 30;
        const laps = document.getElementById('ex-laps').value || 1;
        infoStr = `${sec}s x ${laps} Laps`;
    }

    tempExercises.push({ 
        baseId: selectedExerciseData.id, 
        name: selectedExerciseData.name, 
        type: t,
        reps: document.getElementById('ex-reps').value,
        rounds: document.getElementById('ex-rounds').value,
        timer: document.getElementById('ex-timer').value,
        laps: document.getElementById('ex-laps').value,
        info: infoStr
    });
    
    renderTempExercises();
    document.getElementById('ex-config').style.display = 'none';
    selectedExerciseData = null;
}

function removeTempExercise(idx) {
    tempExercises.splice(idx, 1);
    renderTempExercises();
}

function renderTempExercises() {
    const listHtml = tempExercises.map((e, idx) => `
        <li style="display:flex; justify-content:space-between; margin-bottom:0.5rem; align-items:center;">
            <span>${e.name} — <span style="color:var(--gray-text)">${e.info}</span></span>
            <button class="btn-icon" style="padding: 2px 6px; font-size:0.7rem;" onclick="removeTempExercise(${idx})">X</button>
        </li>
    `).join('');
    document.getElementById('temp-exercises').innerHTML = listHtml;
}

function saveCustomWorkout() {
    const name = document.getElementById('cw-name').value;
    if(!name || tempExercises.length === 0) return alert("Please provide a name and add at least 1 exercise.");

    if (editModeId) {
        let target = currentUser.customWorkouts.find(w => w.id === editModeId);
        target.name = name;
        target.exercises = [...tempExercises];
    } else {
        const newWorkout = { id: 'cw_'+Date.now(), name: name, exercises: tempExercises };
        currentUser.customWorkouts.push(newWorkout);
    }
    
    updateUserInDB();
    closeModal();
    loadMyWorkouts();
}

function deleteWorkout(id) {
    if(confirm("Delete this workout program?")) {
        currentUser.customWorkouts = currentUser.customWorkouts.filter(cw => cw.id !== id);
        updateUserInDB();
        loadMyWorkouts();
    }
}

function updateUserInDB() {
    const users = JSON.parse(localStorage.getItem('formix_users') || '{}');
    users[currentUser.username] = currentUser;
    localStorage.setItem('formix_users', JSON.stringify(users));
    localStorage.setItem('formix_currentUser', JSON.stringify(currentUser));
}