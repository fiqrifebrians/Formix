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
    const grid = document.createElement("div"); 
    grid.className = "grid-container fade-in";
    
    muscles.filter(m => m.id !== "cardio").forEach(item => {
        const dName = currentLang === 'id' && item.name_id ? item.name_id : item.name;
        grid.innerHTML += `<a href="workouts.html?muscle=${item.id}" class="card"><h2>${dName}</h2><div class="card-arrow">&rarr;</div></a>`;
    });
    container.appendChild(grid);
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
    const filterContainer = document.getElementById("filter-container");
    if (!container) return;

    const muscleQuery = getQueryParam("muscle");
    const equipmentQuery = getQueryParam("equipment");
    const categoryQuery = getQueryParam("category");
    
    const currentLang = localStorage.getItem('formix_lang') || 'en';
    const langDict = translations[currentLang];
    let baseWorkouts = [];
    let filterType = ""; 

    if (categoryQuery === "cardio") {
        title.innerText = langDict.nav_cardio + " WORKOUTS";
        baseWorkouts = workoutDB.filter(w => w.category === "cardio");
        filterType = "equipment"; 
    } else if (muscleQuery) {
        const mData = muscles.find(m => m.id === muscleQuery);
        const mName = currentLang === 'id' && mData?.name_id ? mData.name_id : (mData?.name || muscleQuery);
        title.innerText = `${mName.toUpperCase()} WORKOUTS`;
        baseWorkouts = workoutDB.filter(w => w.muscle === muscleQuery);
        filterType = "equipment";
    } else if (equipmentQuery) {
        const eData = equipments.find(e => e.id === equipmentQuery);
        const eName = currentLang === 'id' && eData?.name_id ? eData.name_id : (eData?.name || equipmentQuery);
        title.innerText = `${eName.toUpperCase()} WORKOUTS`;
        baseWorkouts = workoutDB.filter(w => w.equipment === equipmentQuery);
        filterType = "muscle";
    }

    if (filterContainer && baseWorkouts.length > 0 && filterType !== "") {
        filterContainer.innerHTML = ""; 
        const wrapper = document.createElement("div"); wrapper.className = "filter-wrapper";
        wrapper.innerHTML = `<label>FILTER BY ${filterType}:</label>`;
        const select = document.createElement("select"); select.className = "filter-select";
        select.innerHTML = `<option value="all">${langDict.filter_all} ${filterType.toUpperCase()}</option>`;
        
        [...new Set(baseWorkouts.map(w => w[filterType]))].filter(v=>v).forEach(val => {
            let oName = val;
            if (filterType === "muscle") {
                const md = muscles.find(m => m.id === val);
                oName = currentLang === 'id' && md?.name_id ? md.name_id : (md?.name || val);
            } else {
                const ed = equipments.find(e => e.id === val);
                oName = currentLang === 'id' && ed?.name_id ? ed.name_id : (ed?.name || val);
            }
            select.innerHTML += `<option value="${val}">${oName.toUpperCase()}</option>`;
        });

        select.addEventListener("change", (e) => {
            const v = e.target.value;
            renderCards(v !== "all" ? baseWorkouts.filter(w => w[filterType] === v) : baseWorkouts, langDict, currentLang);
        });

        wrapper.appendChild(select); filterContainer.appendChild(wrapper);
    }
    renderCards(baseWorkouts, langDict, currentLang);
}

function renderCards(workoutsArray, langDict, currentLang) {
    const container = document.getElementById("workout-list");
    container.innerHTML = "";
    if (workoutsArray.length === 0) {
        container.innerHTML = `<div style="text-align:center; padding:4rem; border:1px solid #e4e4e7; width:100%;"><h3 data-i18n="no_workout">${langDict.no_workout}</h3></div>`;
        return;
    }

    workoutsArray.forEach((workout, index) => {
        const card = document.createElement("div");
        card.className = "workout-card fade-in"; card.style.animationDelay = `${index * 0.05}s`;
        
        const stepsArr = currentLang === 'id' && workout.steps_id ? workout.steps_id : workout.steps;
        const sHtml = stepsArr.map(s => `<li>${s}</li>`).join('');
        const mName = currentLang === 'id' && muscles.find(m=>m.id===workout.muscle)?.name_id ? muscles.find(m=>m.id===workout.muscle).name_id : workout.muscle;
        const eName = currentLang === 'id' && equipments.find(e=>e.id===workout.equipment)?.name_id ? equipments.find(e=>e.id===workout.equipment).name_id : workout.equipment;
        
        card.innerHTML = `
            <div class="video-container"><img src="${workout.media_url}" onerror="this.src='assets/mini-logo.png';"></div>
            <div class="workout-details">
                <h3>${workout.name}</h3>
                <div class="tags"><span class="tag">${mName}</span><span class="tag">${eName}</span></div>
                <h4>${langDict.label_execution}</h4>
                <ol class="steps">${sHtml}</ol>
            </div>
        `;
        container.appendChild(card);
    });
}