let currentUser = JSON.parse(localStorage.getItem('formix_currentUser'));
let activeCW = null;
let currentExerciseIndex = 0;
let totalExercises = 0;
let workoutFinished = false;
const workoutDB = [...upperWorkouts, ...lowerWorkouts, ...cardioWorkouts];

document.addEventListener("DOMContentLoaded", () => {
    if(!currentUser) return window.location.href = 'login.html';
    
    const params = new URLSearchParams(window.location.search);
    const cwId = params.get('id');
    const isResume = params.get('resume') === 'true';
    
    activeCW = currentUser.customWorkouts.find(w => w.id === cwId);
    if(!activeCW || activeCW.exercises.length === 0) {
        alert("Workout invalid or empty.");
        window.location.href = 'workout-log.html';
        return;
    }

    totalExercises = activeCW.exercises.length;

    // Load state from Log if resuming
    if (isResume) {
        const todayStr = getTodayStr();
        const logs = JSON.parse(localStorage.getItem('formix_workout_logs') || '{}');
        if (logs[currentUser.username] && logs[currentUser.username][todayStr]) {
            let savedLog = logs[currentUser.username][todayStr];
            if (savedLog.workoutId === cwId && savedLog.savedIndex !== undefined) {
                currentExerciseIndex = savedLog.savedIndex;
            }
        }
    }

    // Intersepsi Tombol Back Asli Browser
    history.pushState(null, null, location.href);
    window.onpopstate = function () {
        handleNavigationInterruption();
    };

    renderCurrentExercise();
});

function getTodayStr() {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
}

function updateProgress() {
    let percent = Math.round((currentExerciseIndex / totalExercises) * 100);
    if(percent > 100) percent = 100;
    
    document.getElementById('progress-fill').style.width = percent + '%';
    document.getElementById('progress-text').innerText = percent + '%';
}

function renderCurrentExercise() {
    updateProgress();
    
    const btnPrev = document.getElementById('btn-prev');
    const btnNext = document.getElementById('btn-next');
    const btnFinish = document.getElementById('btn-finish');
    
    btnPrev.disabled = (currentExerciseIndex === 0);
    
    if (currentExerciseIndex >= totalExercises - 1) {
        btnNext.style.display = 'none';
        btnFinish.style.display = 'inline-block';
    } else {
        btnNext.style.display = 'inline-block';
        btnFinish.style.display = 'none';
    }

    const ex = activeCW.exercises[currentExerciseIndex];
    const fullExData = workoutDB.find(w => w.id == ex.baseId);
    
    document.getElementById('aw-name').innerText = ex.name;
    document.getElementById('aw-target').innerText = ex.info;
    document.getElementById('aw-img').src = fullExData ? fullExData.media_url : 'assets/mini-logo.png';
}

function navExercise(dir) {
    currentExerciseIndex += dir;
    if (currentExerciseIndex < 0) currentExerciseIndex = 0;
    if (currentExerciseIndex >= totalExercises) currentExerciseIndex = totalExercises - 1;
    renderCurrentExercise();
}

// === LOGIC INTERUPSI (KEMBALI / BACK) ===
function attemptExit(e) {
    if(e) e.preventDefault();
    handleNavigationInterruption();
}

function handleNavigationInterruption() {
    if (workoutFinished) {
        window.location.href = 'workout-log.html';
        return;
    }
    
    // Tahan state dan tampilkan modal konfirmasi
    if (currentExerciseIndex >= 0) {
        history.pushState(null, null, location.href); 
        document.getElementById('exitModal').style.display = 'flex';
    }
}

function closeExitModal() {
    document.getElementById('exitModal').style.display = 'none';
}

function confirmExit() {
    // Hitung persentase dan simpan sebagai incomplete
    let percent = Math.round((currentExerciseIndex / totalExercises) * 100);
    saveLog('incomplete', percent, currentExerciseIndex);
    window.location.href = 'workout-log.html';
}

// === LOGIC SELESAI WORKOUT ===
function completeWorkout() {
    workoutFinished = true;
    document.getElementById('progress-fill').style.width = '100%';
    document.getElementById('progress-text').innerText = '100%';
    saveLog('completed', 100, totalExercises);
    document.getElementById('finishModal').style.display = 'flex';
}

// === SAVE TO LOCALSTORAGE ===
function saveLog(status, percent, savedIdx) {
    const todayStr = getTodayStr();
    let logs = JSON.parse(localStorage.getItem('formix_workout_logs') || '{}');
    
    if (!logs[currentUser.username]) {
        logs[currentUser.username] = {};
    }

    // Jika sebelumnya sudah selesai di hari ini, jangan di-override oleh status incomplete jika user memainkan workout lain
    if (logs[currentUser.username][todayStr] && logs[currentUser.username][todayStr].status === 'completed' && status === 'incomplete') {
        // Jangan turun kasta di kalender
    } else {
        logs[currentUser.username][todayStr] = {
            workoutId: activeCW.id,
            workoutName: activeCW.name,
            status: status,
            progress: percent,
            savedIndex: savedIdx,
            timestamp: new Date().getTime()
        };
    }

    localStorage.setItem('formix_workout_logs', JSON.stringify(logs));
}