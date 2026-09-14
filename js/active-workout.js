let currentUser = JSON.parse(localStorage.getItem('formix_currentUser'));
let activeCW = null;
let currentLogId = null; 
let currentExerciseIndex = 0;
let totalExercises = 0;
let workoutFinished = false;
let progress = {}; 
let runningTimers = {};
const workoutDB = [...upperWorkouts, ...lowerWorkouts, ...cardioWorkouts];

document.addEventListener("DOMContentLoaded", () => {
    if(!currentUser) return window.location.href = 'login.html';
    
    const params = new URLSearchParams(window.location.search);
    const cwId = params.get('id');
    currentLogId = params.get('logId'); 
    
    const baseCW = currentUser.customWorkouts.find(w => w.id === cwId);
    if(!baseCW || baseCW.exercises.length === 0) {
        alert("Workout program is invalid or empty.");
        window.location.href = 'workout-log.html';
        return;
    }

    // CLONE SNAPSHOT DATA UTUH SAAT INISIALISASI
    activeCW = JSON.parse(JSON.stringify(baseCW));
    totalExercises = activeCW.exercises.length;

    if (currentLogId) {
        const todayStr = getTodayStr();
        const logs = JSON.parse(localStorage.getItem('formix_workout_logs') || '{}');
        if (logs[currentUser.username] && logs[currentUser.username][todayStr]) {
            let savedLog = logs[currentUser.username][todayStr].find(l => l.logId == currentLogId);
            if (savedLog) {
                currentExerciseIndex = savedLog.savedIndex || 0;
                if(savedLog.savedProgressObj) progress = savedLog.savedProgressObj;
                if(savedLog.snapshot) activeCW.exercises = savedLog.snapshot; 
            }
        }
    } else {
        activeCW.exercises.forEach((ex, idx) => { progress[idx] = 0; });
        currentLogId = Date.now(); 
    }

    history.pushState(null, null, location.href);
    window.onpopstate = function () { handleNavigationInterruption(); };

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

function checkExerciseComplete(idx) {
    const ex = activeCW.exercises[idx];
    if (ex.type === "reps") return progress[idx] >= parseInt(ex.rounds);
    if (ex.type === "timer") return progress[idx] >= parseInt(ex.laps);
    return false;
}

function renderCurrentExercise() {
    updateProgress();
    
    const btnPrev = document.getElementById('btn-prev');
    const btnNext = document.getElementById('btn-next');
    const btnFinish = document.getElementById('btn-finish');
    
    const ex = activeCW.exercises[currentExerciseIndex];
    const fullExData = workoutDB.find(w => w.id == ex.baseId);
    
    document.getElementById('aw-name').innerText = ex.name;
    document.getElementById('aw-target').innerText = ex.info;
    document.getElementById('aw-img').src = fullExData ? fullExData.media_url : 'assets/mini-logo.png';

    btnPrev.disabled = (currentExerciseIndex === 0);
    
    const isDone = checkExerciseComplete(currentExerciseIndex);
    
    if (currentExerciseIndex >= totalExercises - 1) {
        btnNext.style.display = 'none';
        btnFinish.style.display = 'inline-block';
        btnFinish.disabled = !isDone;
    } else {
        btnNext.style.display = 'inline-block';
        btnFinish.style.display = 'none';
        btnNext.disabled = !isDone; 
    }

    renderControls(ex, isDone);
}

// LOGIKA DUAL SISTEM: MANUAL RONDE / AUTO TIMER
function renderControls(ex, isDone) {
    const container = document.getElementById('active-controls');
    let trackUI = '';
    let idx = currentExerciseIndex;

    if (ex.type === "reps") {
        const totalRounds = parseInt(ex.rounds) || 0;
        trackUI = `
            <div class="tracker-row">
                <button class="btn-icon" onclick="updateRound(${idx}, -1)" ${isDone?'disabled':''}>-</button>
                <span><input type="number" value="${progress[idx]}" onchange="manualUpdateRound(${idx}, this.value)" style="width:70px; text-align:center; font-size:1.5rem; font-weight:900; border:2px solid var(--black); padding:0.2rem;" ${isDone?'disabled':''}> / ${totalRounds} Rnd</span>
                <button class="btn-icon" onclick="updateRound(${idx}, 1)" ${isDone?'disabled':''}>+</button>
            </div>
            ${isDone ? `<div style="color:var(--success); font-weight:900; margin-top:1rem; font-size:1.2rem;">✓ TARGET MET</div>` : ''}
        `;
    } else {
        const totalLaps = parseInt(ex.laps) || 1;
        if (isDone) {
            trackUI = `<div style="font-weight:900; font-size:2rem; color:var(--success);">✓ COMPLETED</div>`;
        } else {
            const isRunning = runningTimers[idx] !== undefined;
            const displayTime = isRunning ? runningTimers[idx].timeLeft : parseInt(ex.timer);
            const currentLap = progress[idx] + 1;
            trackUI = `
                <div style="display:flex; flex-direction:column; align-items:center; gap:0.5rem;">
                    <span style="font-size:3.5rem; font-weight:900; font-variant-numeric: tabular-nums; color:var(--black);" id="time-disp-${idx}">${displayTime}s</span>
                    <span style="font-weight:800; color:var(--gray-text); font-size:1.2rem; text-transform:uppercase;">Lap ${currentLap} of ${totalLaps}</span>
                    <button class="btn-primary" id="btn-time-${idx}" onclick="startCountdown(${idx}, ${parseInt(ex.timer)})" ${isRunning?'disabled':''} style="margin-top:10px; width:200px;">
                        ${isRunning ? 'RUNNING...' : 'START TIMER'}
                    </button>
                </div>
            `;
        }
    }
    container.innerHTML = trackUI;
}

window.manualUpdateRound = function(idx, val) {
    let v = parseInt(val) || 0;
    const totalRounds = parseInt(activeCW.exercises[idx].rounds) || 0;
    if(v < 0) v = 0;
    if(v > totalRounds) v = totalRounds;
    progress[idx] = v;
    renderCurrentExercise();
}

function updateRound(idx, val) {
    const totalRounds = parseInt(activeCW.exercises[idx].rounds) || 0;
    progress[idx] += val;
    if (progress[idx] < 0) progress[idx] = 0;
    if (progress[idx] > totalRounds) progress[idx] = totalRounds;
    renderCurrentExercise();
}

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
            renderCurrentExercise(); // Unlock tombol next
        }
    }, 1000);
}

function navExercise(dir) {
    currentExerciseIndex += dir;
    if (currentExerciseIndex < 0) currentExerciseIndex = 0;
    if (currentExerciseIndex >= totalExercises) currentExerciseIndex = totalExercises - 1;
    renderCurrentExercise();
}

// LOGIKA INTERUPSI & SNAPSHOT RIWAYAT
function attemptExit(e) {
    if(e) e.preventDefault();
    handleNavigationInterruption();
}

function handleNavigationInterruption() {
    if (workoutFinished) {
        window.location.href = 'workout-log.html';
        return;
    }
    history.pushState(null, null, location.href); 
    document.getElementById('exitModal').style.display = 'flex';
}

function closeExitModal() {
    document.getElementById('exitModal').style.display = 'none';
}

function confirmExit() {
    let percent = Math.round((currentExerciseIndex / totalExercises) * 100);
    saveLog('incomplete', percent, currentExerciseIndex);
    window.location.href = 'workout-log.html';
}

function completeWorkout() {
    workoutFinished = true;
    document.getElementById('progress-fill').style.width = '100%';
    document.getElementById('progress-text').innerText = '100%';
    saveLog('completed', 100, totalExercises);
    document.getElementById('finishModal').style.display = 'flex';
}

function saveLog(status, percent, savedIdx) {
    const todayStr = getTodayStr();
    let logs = JSON.parse(localStorage.getItem('formix_workout_logs') || '{}');
    
    if (!logs[currentUser.username]) logs[currentUser.username] = {};
    if (!logs[currentUser.username][todayStr]) logs[currentUser.username][todayStr] = [];

    const snapshotData = JSON.parse(JSON.stringify(activeCW.exercises));
    let existingLogIndex = logs[currentUser.username][todayStr].findIndex(l => l.logId == currentLogId);

    if (existingLogIndex !== -1) {
        if (logs[currentUser.username][todayStr][existingLogIndex].status === 'completed' && status === 'incomplete') {
            // Abaikan jika sudah pernah complete
        } else {
            logs[currentUser.username][todayStr][existingLogIndex].status = status;
            logs[currentUser.username][todayStr][existingLogIndex].progress = percent;
            logs[currentUser.username][todayStr][existingLogIndex].savedIndex = savedIdx;
            logs[currentUser.username][todayStr][existingLogIndex].savedProgressObj = progress;
            logs[currentUser.username][todayStr][existingLogIndex].snapshot = snapshotData;
        }
    } else {
        logs[currentUser.username][todayStr].push({
            logId: currentLogId,
            workoutId: activeCW.id,
            workoutName: activeCW.name,
            status: status,
            progress: percent,
            savedIndex: savedIdx,
            savedProgressObj: progress,
            snapshot: snapshotData,
            timestamp: new Date().getTime()
        });
    }

    localStorage.setItem('formix_workout_logs', JSON.stringify(logs));
}