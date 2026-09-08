function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

function renderMuscleList() {
    const container = document.getElementById("muscle-list");
    if (!container) return;

    muscles.forEach(item => {
        const card = document.createElement("a");
        card.href = `workouts.html?muscle=${item.id}`;
        card.className = "card";
        card.innerHTML = `
            <h2>${item.name}</h2>
            <div class="card-arrow">&rarr;</div>
        `;
        container.appendChild(card);
    });
}

function renderEquipmentList() {
    const container = document.getElementById("equipment-list");
    if (!container) return;

    equipments.forEach(item => {
        const card = document.createElement("a");
        card.href = `workouts.html?equipment=${item.id}`;
        card.className = "card";
        card.innerHTML = `
            <h2>${item.name}</h2>
            <div class="card-arrow">&rarr;</div>
        `;
        container.appendChild(card);
    });
}

function renderWorkouts() {
    const container = document.getElementById("workout-list");
    const title = document.getElementById("workout-title");
    if (!container) return;

    const muscleQuery = getQueryParam("muscle");
    const equipmentQuery = getQueryParam("equipment");
    const categoryQuery = getQueryParam("category");

    let filteredWorkouts = [];

    if (categoryQuery === "hiit") {
        title.innerText = "HIIT WORKOUTS";
        filteredWorkouts = workoutDB.filter(w => w.category === "hiit");
    } else if (muscleQuery) {
        title.innerText = `${muscleQuery.toUpperCase()} WORKOUTS`;
        filteredWorkouts = workoutDB.filter(w => w.muscle === muscleQuery);
    } else if (equipmentQuery) {
        title.innerText = `${equipmentQuery.toUpperCase()} WORKOUTS`;
        filteredWorkouts = workoutDB.filter(w => w.equipment === equipmentQuery);
    } else {
        title.innerText = "ALL WORKOUTS";
        filteredWorkouts = workoutDB;
    }

    if (filteredWorkouts.length === 0) {
        container.innerHTML = `<div style="text-align:center; padding:4rem; background:#fff; border:1px solid #e4e4e7; width:100%;">
            <div style="font-size:3rem; color:#d4d4d8; margin-bottom:1rem;">&#9888;</div>
            <h3>NO WORKOUTS FOUND</h3>
            <p style="color:#71717a;">We are currently updating our database for this selection.</p>
        </div>`;
        return;
    }

    filteredWorkouts.forEach((workout, index) => {
        const card = document.createElement("div");
        card.className = "workout-card";
        card.style.animationDelay = `${index * 0.15}s`;
        card.classList.add("fade-in");

        const stepsHtml = workout.steps.map(step => `<li>${step}</li>`).join('');
        
        let mediaHtml = `
            <div class="img-wrapper">
                <span class="img-label">Start</span>
                <img src="${workout.images[0]}" alt="${workout.name} Start Position" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'100\\' height=\\'100\\'><rect width=\\'100\\' height=\\'100\\' fill=\\'%23eee\\'/><text x=\\'50%\\' y=\\'50%\\' dominant-baseline=\\'middle\\' text-anchor=\\'middle\\' font-family=\\'sans-serif\\' font-size=\\'12\\' fill=\\'%23999\\'>GymVisual Image</text></svg>'">
            </div>
            <div class="img-wrapper">
                <span class="img-label">End</span>
                <img src="${workout.images[1]}" alt="${workout.name} End Position" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'100\\' height=\\'100\\'><rect width=\\'100\\' height=\\'100\\' fill=\\'%23eee\\'/><text x=\\'50%\\' y=\\'50%\\' dominant-baseline=\\'middle\\' text-anchor=\\'middle\\' font-family=\\'sans-serif\\' font-size=\\'12\\' fill=\\'%23999\\'>GymVisual Image</text></svg>'">
            </div>
        `;

        const muscleData = muscles.find(m => m.id === workout.muscle);
        const equipData = equipments.find(e => e.id === workout.equipment);
        
        const muscleName = muscleData ? muscleData.name : workout.muscle;
        const equipName = equipData ? equipData.name : workout.equipment;

        card.innerHTML = `
            <div class="video-container">
                ${mediaHtml}
            </div>
            <div class="workout-details">
                <h3>${workout.name}</h3>
                <div class="tags">
                    <span class="tag">${muscleName}</span>
                    <span class="tag">${equipName}</span>
                </div>
                <h4>Execution:</h4>
                <ol class="steps">
                    ${stepsHtml}
                </ol>
            </div>
        `;
        container.appendChild(card);
    });
}