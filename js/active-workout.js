let currentUser = JSON.parse(localStorage.getItem('formix_currentUser'));
let activeCW = null;
let isStarted = false;
let progress = {}; // Menyimpan progress tiap exercise (round done)

document.addEventListener("DOMContentLoaded", () => {
    if(!currentUser) return window.location.href = 'signup.html';
    const cwId = new URLSearchParams(window.location.search).get('id');
    activeCW = currentUser.customWorkouts.find(w => w.id === cwId);
    
    if(!activeCW) {
        document.getElementById('active-title').innerText = "NOT FOUND";
        return;
    }

    document.getElementById('active-title').innerText = activeCW.name;
    
    // Inisialisasi progress 0
    activeCW.exercises.forEach((ex, idx) => {
        progress[idx] = 0;
    });

    renderActiveList();
});

function renderActiveList() {
    const container = document.getElementById('active-list');
    container.innerHTML = "";

    activeCW.exercises.forEach((ex, idx) => {
        const fullExData = workoutDB.find(w => w.id == ex.baseId);
        const card = document.createElement("div");
        card.className = "workout-card fade-in";
        
        let controlHtml = "";
        
        if (!isStarted) {
            // Reordering Controls
            controlHtml = `
                <div style="display:flex; flex-direction:column; gap:5px; padding:1rem; border-left:1px solid var(--black);">
                    <button class="btn-icon" onclick="moveUp(${idx})">&#9650;</button>
                    <button class="btn-icon" onclick="moveDown(${idx})">&#9660;</button>
                </div>
            `;
        } else {
            // Tracking Controls
            let isComplete = false;
            let trackUI = "";

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
                isComplete = progress[idx] >= 1; // 1 means timer done
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

function updateDB() {
    const users = JSON.parse(localStorage.getItem('formix_users'));
    users[currentUser.username] = currentUser;
    localStorage.setItem('formix_users', JSON.stringify(users));
    localStorage.setItem('formix_currentUser', JSON.stringify(currentUser));
}

function startWorkout() {
    isStarted = true;
    document.getElementById('btn-start-workout').style.display = 'none';
    document.getElementById('active-status').innerText = "Status: IN PROGRESS (Reordering Disabled)";
    renderActiveList();
}

function updateRound(idx, val) {
    const totalRounds = parseInt(activeCW.exercises[idx].rounds) || 0;
    progress[idx] += val;
    if (progress[idx] < 0) progress[idx] = 0;
    if (progress[idx] > totalRounds) progress[idx] = totalRounds;
    renderActiveList();
    checkAllComplete();
}

function completeTimer(idx) {
    progress[idx] = 1;
    renderActiveList();
    checkAllComplete();
}

function checkAllComplete() {
    let allDone = true;
    activeCW.exercises.forEach((ex, idx) => {
        if (ex.type === "reps" && progress[idx] < parseInt(ex.rounds)) allDone = false;
        if (ex.type === "timer" && progress[idx] < 1) allDone = false;
    });

    if (allDone) {
        document.getElementById('active-status').innerText = "Status: COMPLETED";
        document.getElementById('finishModal').style.display = 'flex';
    }
}