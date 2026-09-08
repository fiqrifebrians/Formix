
// Utility to get URL parameters
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Render Muscle List
function renderMuscleList() {
    const container = document.getElementById("muscle-list");
    if (!container) return;

    muscles.forEach(muscle => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `<h2>${muscle}</h2>`;
        card.onclick = () => location.href = `workouts.html?muscle=${muscle}`;
        container.appendChild(card);
    });
}

// Render Equipment List
function renderEquipmentList() {
    const container = document.getElementById("equipment-list");
    if (!container) return;

    equipments.forEach(eq => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `<h2>${eq}</h2>`;
        card.onclick = () => location.href = `workouts.html?equipment=${eq}`;
        container.appendChild(card);
    });
}

// Render Workouts based on query
function renderWorkouts() {
    const container = document.getElementById("workout-list");
    const title = document.getElementById("workout-title");
    if (!container) return;

    const muscleQuery = getQueryParam("muscle");
    const equipmentQuery = getQueryParam("equipment");

    let filteredWorkouts = [];

    if (muscleQuery) {
        title.innerText = `${muscleQuery.charAt(0).toUpperCase() + muscleQuery.slice(1)} Workouts`;
        filteredWorkouts = workoutDB.filter(w => w.muscle === muscleQuery);
    } else if (equipmentQuery) {
        title.innerText = `${equipmentQuery.charAt(0).toUpperCase() + equipmentQuery.slice(1)} Workouts`;
        filteredWorkouts = workoutDB.filter(w => w.equipment === equipmentQuery);
    }

    if (filteredWorkouts.length === 0) {
        container.innerHTML = `<p style="text-align:center; width:100%;">No workouts found for this selection yet.</p>`;
        return;
    }

    filteredWorkouts.forEach(workout => {
        const card = document.createElement("div");
        card.className = "workout-card";

        const stepsHtml = workout.steps.map(step => `<li>${step}</li>`).join('');

        card.innerHTML = `
            <div class="video-container">
                <!-- AI Animation Video -->
                <video autoplay loop muted playsinline>
                    <source src="${workout.video_url}" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </div>
            <div class="workout-details">
                <h3>${workout.name}</h3>
                <span class="tag">Muscle: ${workout.muscle}</span>
                <span class="tag">Equipment: ${workout.equipment}</span>
                <h4>How to do it:</h4>
                <ol class="steps">
                    ${stepsHtml}
                </ol>
            </div>
        `;
        container.appendChild(card);
    });
}
