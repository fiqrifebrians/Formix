let currentUser = JSON.parse(localStorage.getItem('formix_currentUser'));
let currentDisplayDate = new Date();
let selectedDateStr = "";

document.addEventListener("DOMContentLoaded", () => {
    if(!currentUser) { window.location.href = 'login.html'; return; }

    const today = new Date();
    selectedDateStr = formatDateStr(today);
    renderCalendar();
    selectDate(today.getFullYear(), today.getMonth(), today.getDate());
});

function formatDateStr(dateObj) {
    const y = dateObj.getFullYear();
    const m = String(dateObj.getMonth() + 1).padStart(2, '0');
    const d = String(dateObj.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
}

function getLogs() {
    const logs = JSON.parse(localStorage.getItem('formix_workout_logs') || '{}');
    if (!logs[currentUser.username]) logs[currentUser.username] = {};
    return logs[currentUser.username];
}

function changeMonth(dir) {
    currentDisplayDate.setMonth(currentDisplayDate.getMonth() + dir);
    renderCalendar();
}

function renderCalendar() {
    const year = currentDisplayDate.getFullYear();
    const month = currentDisplayDate.getMonth();
    const monthNames = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
    
    document.getElementById('month-year-display').innerText = `${monthNames[month]} ${year}`;
    
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const grid = document.getElementById('calendar-grid');
    grid.innerHTML = "";
    
    const userLogs = getLogs();
    const todayStr = formatDateStr(new Date());

    for (let i = 0; i < firstDay; i++) { grid.innerHTML += `<div class="cal-day empty"></div>`; }

    for (let i = 1; i <= daysInMonth; i++) {
        const loopDateStr = formatDateStr(new Date(year, month, i));
        let classes = "cal-day fade-in";
        
        if (loopDateStr === todayStr) classes += " today";
        
        if (userLogs[loopDateStr] && userLogs[loopDateStr].length > 0) {
            classes += " has-log";
        }

        if (loopDateStr === selectedDateStr) classes += " selected";

        const delay = (i * 0.01).toFixed(2);
        grid.innerHTML += `<div class="${classes}" style="animation-delay:${delay}s" onclick="selectDate(${year}, ${month}, ${i})">${i}</div>`;
    }
}

function selectDate(y, m, d) {
    selectedDateStr = formatDateStr(new Date(y, m, d));
    renderCalendar(); 
    
    const userLogs = getLogs();
    const dayLogs = userLogs[selectedDateStr] || [];
    const todayStr = formatDateStr(new Date());
    
    const historyPanel = document.getElementById('history-log-status');
    const workoutPanel = document.getElementById('today-workout-list');

    historyPanel.style.display = "none";
    workoutPanel.style.display = "none";
    historyPanel.innerHTML = "";

    // 1. RENDER MULTI-SESSION LOGS DENGAN GRID PRESISI
    if (dayLogs.length > 0) {
        historyPanel.style.display = "flex";
        dayLogs.forEach(log => {
            let btnAction = '';
            let statusHtml = '';
            
            if (log.status === 'completed') {
                statusHtml = `<div class="status-box completed"><span>✓</span> ${log.workoutName}</div>`;
                btnAction = `<button class="btn-primary btn-sm" onclick="viewSnapshot(${log.logId}, '${selectedDateStr}')" style="box-shadow:none;">VIEW DETAILS</button>`;
            } else {
                statusHtml = `<div class="status-box incomplete"><span>⚠</span> ${log.workoutName} (${log.progress}%)</div>`;
                if (selectedDateStr === todayStr) {
                    btnAction = `<button class="btn-primary btn-sm btn-warning" onclick="window.location.href='active-workout.html?id=${log.workoutId}&logId=${log.logId}&resume=true'" style="box-shadow:none;">CONTINUE</button>`;
                }
            }
            
            // Struktur Grid Dinamis untuk menjaga blok warna sama panjangnya
            historyPanel.innerHTML += `
                <div class="history-log-item fade-in">
                    ${statusHtml}
                    <div class="action-box">
                        ${btnAction}
                        <button class="btn-trash" onclick="deleteLog('${selectedDateStr}', ${log.logId})" title="Delete History">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                        </button>
                    </div>
                </div>
            `;
        });
    } else if (selectedDateStr < todayStr) {
        historyPanel.style.display = "block";
        historyPanel.innerHTML = `<div style="color:var(--gray-text); font-weight:800; font-size:1.2rem;">REST DAY / NO LOGS</div>`;
    }

    // 2. SELALU RENDER MENU LAUNCH HANYA UNTUK HARI INI
    if (selectedDateStr === todayStr) {
        workoutPanel.style.display = "flex";
        const pContainer = document.getElementById('programs-container');
        pContainer.innerHTML = "";
        
        if (!currentUser.customWorkouts || currentUser.customWorkouts.length === 0) {
            pContainer.innerHTML = `<p style="color:var(--gray-text); font-weight:800;">No programs created yet. Go to My Workouts to build one.</p>`;
            return;
        }

        currentUser.customWorkouts.forEach(cw => {
            let incompleteLog = [...dayLogs].reverse().find(l => l.workoutId === cw.id && l.status === 'incomplete');
            
            let btnText = incompleteLog ? "CONTINUE WORKOUT" : "START NEW SESSION";
            let btnClass = incompleteLog ? "btn-warning" : "btn-success";
            let link = incompleteLog ? `active-workout.html?id=${cw.id}&logId=${incompleteLog.logId}&resume=true` : `active-workout.html?id=${cw.id}`;

            pContainer.innerHTML += `
                <div class="workout-list-item">
                    <h4>${cw.name}</h4>
                    <button class="btn-primary btn-sm ${btnClass}" onclick="window.location.href='${link}'">${btnText}</button>
                </div>
            `;
        });
    }
}

function viewSnapshot(logId, dateStr) {
    const logs = getLogs();
    const dayLogs = logs[dateStr];
    const log = dayLogs.find(l => l.logId === logId);
    
    document.getElementById('snapshot-title').innerText = log.workoutName;
    const list = document.getElementById('snapshot-list');
    list.innerHTML = "";
    
    log.snapshot.forEach(ex => {
        list.innerHTML += `
            <li style="margin-bottom:10px; padding:15px; border:2px solid var(--black); background:var(--white); box-shadow:3px 3px 0px var(--black);">
                <div style="font-size:1.1rem; color:var(--black); text-transform:uppercase;">${ex.name}</div>
                <div style="color:var(--gray-text); font-size:0.9rem;">${ex.info}</div>
            </li>`;
    });
    
    document.getElementById('snapshotModal').style.display = "flex";
}

function deleteLog(dateStr, logId) {
    if(!confirm("Are you sure you want to permanently delete this workout history?")) return;
    const logs = JSON.parse(localStorage.getItem('formix_workout_logs') || '{}');
    if(logs[currentUser.username] && logs[currentUser.username][dateStr]) {
        logs[currentUser.username][dateStr] = logs[currentUser.username][dateStr].filter(l => l.logId !== logId);
        
        if(logs[currentUser.username][dateStr].length === 0) {
            delete logs[currentUser.username][dateStr];
        }
        
        localStorage.setItem('formix_workout_logs', JSON.stringify(logs));
        renderCalendar();
        const d = new Date(dateStr);
        selectDate(d.getFullYear(), d.getMonth(), d.getDate());
    }
}