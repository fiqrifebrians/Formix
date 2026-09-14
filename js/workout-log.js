let currentUser = JSON.parse(localStorage.getItem('formix_currentUser'));
let currentDisplayDate = new Date();
let selectedDateStr = "";

document.addEventListener("DOMContentLoaded", () => {
    if(!currentUser) {
        window.location.href = 'login.html';
        return;
    }
    // Setup Dummy Data untuk keperluan demonstrasi jika user belum membuat custom workout
    if (!currentUser.customWorkouts || currentUser.customWorkouts.length === 0) {
        currentUser.customWorkouts = [{
            id: "cw_dummy_1",
            name: "Beginner Full Body",
            exercises: [
                { baseId: 2, name: "Push-Up", type: "reps", rounds: 3, info: "12 Reps x 3 Rounds" },
                { baseId: 10, name: "Plank", type: "timer", laps: 2, timer: 60, info: "60s x 2 Laps" }
            ]
        }];
        updateUserDB();
    }

    const today = new Date();
    selectedDateStr = formatDateStr(today);
    renderCalendar();
    selectDate(today.getFullYear(), today.getMonth(), today.getDate());
});

function updateUserDB() {
    const users = JSON.parse(localStorage.getItem('formix_users') || '{}');
    users[currentUser.username] = currentUser;
    localStorage.setItem('formix_users', JSON.stringify(users));
    localStorage.setItem('formix_currentUser', JSON.stringify(currentUser));
}

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

    // Empty slots before 1st day
    for (let i = 0; i < firstDay; i++) {
        grid.innerHTML += `<div class="cal-day empty"></div>`;
    }

    // Days
    for (let i = 1; i <= daysInMonth; i++) {
        const loopDateStr = formatDateStr(new Date(year, month, i));
        let classes = "cal-day fade-in";
        
        // Highlight Today
        if (loopDateStr === todayStr) classes += " today";
        
        // Visual Conditional Highlights for History
        if (userLogs[loopDateStr]) {
            const dayLog = userLogs[loopDateStr];
            if (dayLog.status === 'completed') {
                classes += " log-completed";
            } else if (dayLog.status === 'incomplete') {
                classes += " log-incomplete";
            }
        }

        if (loopDateStr === selectedDateStr) classes += " selected";

        const delay = (i * 0.02).toFixed(2);
        grid.innerHTML += `<div class="${classes}" style="animation-delay:${delay}s" onclick="selectDate(${year}, ${month}, ${i})">${i}</div>`;
    }
}

function selectDate(y, m, d) {
    selectedDateStr = formatDateStr(new Date(y, m, d));
    renderCalendar(); // Re-render to move 'selected' class
    
    const dateObj = new Date(y, m, d);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('selected-date-title').innerText = dateObj.toLocaleDateString('en-US', options).toUpperCase();

    const userLogs = getLogs();
    const log = userLogs[selectedDateStr];
    const todayStr = formatDateStr(new Date());
    
    const historyPanel = document.getElementById('history-log-status');
    const workoutPanel = document.getElementById('today-workout-list');

    // Reset Panels
    historyPanel.style.display = "none";
    workoutPanel.style.display = "none";
    document.getElementById('programs-container').innerHTML = "";

    // 1. Cek Status Log (Jika Ada History)
    if (log) {
        historyPanel.style.display = "block";
        if (log.status === 'completed') {
            historyPanel.innerHTML = `<div class="log-status-completed"><span>✓</span> COMPLETED RECOVERY</div>`;
        } else {
            historyPanel.innerHTML = `<div class="log-status-incomplete"><span>⚠</span> INCOMPLETE - ${log.progress}% DONE</div>`;
        }
    } else if (selectedDateStr < todayStr) {
        // Masa lalu tanpa log
        historyPanel.style.display = "block";
        historyPanel.innerHTML = `<div style="color:var(--gray-text); font-weight:800;">REST DAY / NO LOG</div>`;
    }

    // 2. Render Workout List HANYA jika tanggal yang diklik adalah HARI INI
    if (selectedDateStr === todayStr) {
        workoutPanel.style.display = "flex";
        const pContainer = document.getElementById('programs-container');
        
        if (currentUser.customWorkouts.length === 0) {
            pContainer.innerHTML = `<p style="color:var(--gray-text); font-weight:600;">No programs created yet.</p>`;
            return;
        }

        currentUser.customWorkouts.forEach(cw => {
            // Cek apakah workout ini adalah yang sedang "Incomplete" hari ini
            let isCurrentIncomplete = (log && log.status === 'incomplete' && log.workoutId === cw.id);
            let btnText = isCurrentIncomplete ? "CONTINUE WORKOUT" : "START";
            let btnClass = isCurrentIncomplete ? "btn-warning" : "";
            let link = isCurrentIncomplete ? 
                `active-workout.html?id=${cw.id}&resume=true` : 
                `active-workout.html?id=${cw.id}`;

            pContainer.innerHTML += `
                <div class="workout-list-item">
                    <h4>${cw.name}</h4>
                    <button class="btn-primary ${btnClass}" onclick="window.location.href='${link}'">${btnText}</button>
                </div>
            `;
        });
    }
}