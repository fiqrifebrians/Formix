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
        
        // Render 1 gambar saja sesuai permintaan (menggunakan index 0 dari array image)
        const fallbackImg = "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80";
        let mediaHtml = `<img src="${workout.media_url}" alt="${workout.name} demonstration" onerror="this.onerror=null; this.src='${fallbackImg}';">`;

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