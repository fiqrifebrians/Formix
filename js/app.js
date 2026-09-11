// Agregasi Data Latihan
let workoutDB = [];
if (typeof upperWorkouts !== 'undefined') workoutDB = workoutDB.concat(upperWorkouts);
if (typeof lowerWorkouts !== 'undefined') workoutDB = workoutDB.concat(lowerWorkouts);
if (typeof cardioWorkouts !== 'undefined') workoutDB = workoutDB.concat(cardioWorkouts);

function getQueryParam(param) { return new URLSearchParams(window.location.search).get(param); }

function renderMuscleList() {
    const container = document.getElementById("muscle-list");
    if (!container || typeof muscles === 'undefined') return;
    container.innerHTML = ""; 

    const currentLang = localStorage.getItem('formix_lang') || 'en';
    const langDict = translations[currentLang];

    // Upper Body
    const upperSec = document.createElement("div"); upperSec.className = "muscle-section";
    upperSec.innerHTML = `<h2 class="section-header">${langDict.cat_upper}</h2>`;
    const upperGrid = document.createElement("div"); upperGrid.className = "grid-container fade-in";
    muscles.filter(m => m.category === "upper").forEach(item => {
        const dName = currentLang === 'id' && item.name_id ? item.name_id : item.name;
        upperGrid.innerHTML += `<a href="workouts.html?muscle=${item.id}" class="card"><h2>${dName}</h2><div class="card-arrow">&rarr;</div></a>`;
    });
    upperSec.appendChild(upperGrid); container.appendChild(upperSec);

    // Lower Body
    const lowerSec = document.createElement("div"); lowerSec.className = "muscle-section";
    lowerSec.innerHTML = `<h2 class="section-header">${langDict.cat_lower}</h2>`;
    const lowerGrid = document.createElement("div"); lowerGrid.className = "grid-container fade-in";
    muscles.filter(m => m.category === "lower").forEach(item => {
        const dName = currentLang === 'id' && item.name_id ? item.name_id : item.name;
        lowerGrid.innerHTML += `<a href="workouts.html?muscle=${item.id}" class="card"><h2>${dName}</h2><div class="card-arrow">&rarr;</div></a>`;
    });
    lowerSec.appendChild(lowerGrid); container.appendChild(lowerSec);
}

function renderEquipmentList() {
    const container = document.getElementById("equipment-list");
    if (!container || typeof equipments === 'undefined') return;
    container.innerHTML = "";
    
    const currentLang = localStorage.getItem('formix_lang') || 'en';
    equipments.forEach(item => {
        const dName = currentLang === 'id' && item.name_id ? item.name_id : item.name;
        container.innerHTML += `<a href="workouts.html?equipment=${item.id}" class="card"><h2>${dName}</h2><div class="card-arrow">&rarr;</div></a>`;
    });
}

function renderWorkouts() {
    const container = document.getElementById("workout-list");
    const title = document.getElementById("workout-title");
    if (!container) return;

    const muscleQuery = getQueryParam("muscle");
    const equipmentQuery = getQueryParam("equipment");
    const categoryQuery = getQueryParam("category");
    
    const currentLang = localStorage.getItem('formix_lang') || 'en';
    const langDict = translations[currentLang];
    let baseWorkouts = [];

    if (categoryQuery === "cardio") {
        title.innerText = langDict.nav_cardio + " WORKOUTS";
        baseWorkouts = workoutDB.filter(w => w.category === "cardio");
    } else if (muscleQuery) {
        const mData = muscles.find(m => m.id === muscleQuery);
        const mName = currentLang === 'id' && mData?.name_id ? mData.name_id : (mData?.name || muscleQuery);
        title.innerText = `${mName.toUpperCase()} WORKOUTS`;
        baseWorkouts = workoutDB.filter(w => w.muscle === muscleQuery);
    } else if (equipmentQuery) {
        const eData = equipments.find(e => e.id === equipmentQuery);
        const eName = currentLang === 'id' && eData?.name_id ? eData.name_id : (eData?.name || equipmentQuery);
        title.innerText = `${eName.toUpperCase()} WORKOUTS`;
        baseWorkouts = workoutDB.filter(w => w.equipment === equipmentQuery);
    }

    container.innerHTML = "";
    if (baseWorkouts.length === 0) {
        container.innerHTML = `<div style="text-align:center; padding:4rem; border:1px solid #e4e4e7; width:100%;"><h3 data-i18n="no_workout">${langDict.no_workout}</h3></div>`;
        return;
    }

    baseWorkouts.forEach((workout, index) => {
        const card = document.createElement("div");
        card.className = "workout-card fade-in"; card.style.animationDelay = `${index * 0.05}s`;
        
        const stepsArr = currentLang === 'id' && workout.steps_id ? workout.steps_id : workout.steps;
        const sHtml = stepsArr.map(s => `<li>${s}</li>`).join('');
        const mName = currentLang === 'id' && muscles.find(m=>m.id===workout.muscle)?.name_id ? muscles.find(m=>m.id===workout.muscle).name_id : workout.muscle;
        
        card.innerHTML = `
            <div class="video-container"><img src="${workout.media_url}" onerror="this.src='assets/mini-logo.png';"></div>
            <div class="workout-details">
                <h3>${workout.name}</h3>
                <div class="tags"><span class="tag">${mName}</span></div>
                <h4>${langDict.label_execution}</h4>
                <ol class="steps">${sHtml}</ol>
            </div>
        `;
        container.appendChild(card);
    });
}