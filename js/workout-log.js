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

    // Padding empty cells
    for (let i = 0; i < firstDay; i++) { grid.innerHTML += `<div class="cal-day empty"></div>`; }

    // Render Days
    for (let i = 1; i <= daysInMonth; i++) {
        const loopDateStr = formatDateStr(new Date(year, month, i));
        let classes = "cal-day fade-in";
        
        if (loopDateStr === todayStr) classes += " today";
        
        // INDIKATOR VISUAL ORANYE PENUH JIKA ADA LOG APAPUN
        if (userLogs[loopDateStr]) {
            classes += " has-log";
        }

        if (loopDateStr === selectedDateStr) classes += " selected";

        const delay = (i * 0.01).toFixed(2);
        grid.innerHTML += `<div class="${classes}" style="animation-delay:${delay}s" onclick="selectDate(${year}, ${month}, ${i})">${i}</div>`;
    }
}

function selectDate(y, m, d) {
    selectedDateStr = formatDateStr(new Date(y, m, d));
    renderCalendar(); // Memindahkan bingkai 'selected'
    
    const dateObj = new Date(y, m, d);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('selected-date-title').innerText = dateObj.toLocaleDateString('en-US', options).toUpperCase();

    const userLogs = getLogs();
    const log = userLogs[selectedDateStr];
    const todayStr = formatDateStr(new Date());
    
    const historyPanel = document.getElementById('history-log-status');
    const workoutPanel = document.getElementById('today-workout-list');

    historyPanel.style.display = "none";
    workoutPanel.style.display = "none";

    // LABEL STATUS LOG (COMPLETED / INCOMPLETE)
    if (log) {
        historyPanel.style.display = "block";
        if (log.status === 'completed') {
            historyPanel.innerHTML = `<div class="log-status-completed">✓ COMPLETED</div>`;
        } else {
            historyPanel.innerHTML = `<div class="log-status-incomplete">⚠ INCOMPLETE - ${log.progress}% COMPLETED</div>`;
        }
    } else if (selectedDateStr < todayStr) {
        historyPanel.style.display = "block";
        historyPanel.innerHTML = `<div style="color:var(--gray-text); font-weight:800; font-size:1.2rem;">REST DAY / NO LOG</div>`;
    }

    // LIST START/CONTINUE WORKOUT (Hanya muncul jika yang diklik hari ini)
    if (selectedDateStr === todayStr) {
        workoutPanel.style.display = "flex";
        const pContainer = document.getElementById('programs-container');
        pContainer.innerHTML = "";
        
        if (!currentUser.customWorkouts || currentUser.customWorkouts.length === 0) {
            pContainer.innerHTML = `<p style="color:var(--gray-text); font-weight:800;">No programs created yet. Create one in My Workouts.</p>`;
            return;
        }

        currentUser.customWorkouts.forEach(cw => {
            let isCurrentIncomplete = (log && log.status === 'incomplete' && log.workoutId === cw.id);
            let btnText = isCurrentIncomplete ? "CONTINUE WORKOUT" : "START";
            let btnClass = isCurrentIncomplete ? "btn-warning" : "";
            let link = isCurrentIncomplete ? `active-workout.html?id=${cw.id}&resume=true` : `active-workout.html?id=${cw.id}`;

            pContainer.innerHTML += `
                <div class="workout-list-item">
                    <h4>${cw.name}</h4>
                    <button class="btn-primary ${btnClass}" onclick="window.location.href='${link}'">${btnText}</button>
                </div>
            `;
        });
    }
}