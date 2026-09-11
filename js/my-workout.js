let currentUser = JSON.parse(localStorage.getItem('formix_currentUser'));

function loadMyWorkouts() {
    if(!currentUser) { window.location.href = 'login.html'; return; }
    const container = document.getElementById('my-workout-list');
    container.innerHTML = "";

    if (!currentUser.customWorkouts || currentUser.customWorkouts.length === 0) {
        container.innerHTML = `<p>No custom workouts found. Create one!</p>`;
        return;
    }

    currentUser.customWorkouts.forEach((cw, idx) => {
        container.innerHTML += `
            <div class="cw-item fade-in" style="animation-delay:${idx*0.1}s">
                <div>
                    <h3>${cw.name}</h3>
                    <div class="cw-details">${cw.exercises.length} Exercises</div>
                </div>
                <div>
                    <button class="btn-primary" onclick="viewWorkout('${cw.id}')">View</button>
                    <button class="btn-primary btn-danger" onclick="deleteWorkout('${cw.id}')">X</button>
                </div>
            </div>
        `;
    });
}

function openCreateModal() { document.getElementById('createModal').style.display = 'flex'; loadExerciseOptions(); }
function closeModal() { document.getElementById('createModal').style.display = 'none'; }

function loadExerciseOptions() {
    const select = document.getElementById('exercise-select');
    select.innerHTML = '<option value="">Select Exercise...</option>';
    workoutDB.forEach(w => {
        select.innerHTML += `<option value="${w.id}">${w.name}</option>`;
    });
}

let tempExercises = [];
function addExerciseToPlan() {
    const exId = document.getElementById('exercise-select').value;
    const reps = document.getElementById('ex-reps').value;
    const timer = document.getElementById('ex-timer').value;
    if(!exId) return alert("Select an exercise!");
    
    const exData = workoutDB.find(w => w.id == exId);
    tempExercises.push({ id: exId, name: exData.name, reps: reps, timer: timer });
    renderTempExercises();
}

function renderTempExercises() {
    const list = document.getElementById('temp-exercises');
    list.innerHTML = tempExercises.map(e => `<li>${e.name} - ${e.reps ? e.reps + ' Reps' : e.timer + ' Sec'}</li>`).join('');
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

document.addEventListener("DOMContentLoaded", loadMyWorkouts);