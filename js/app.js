function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

function renderMuscleList() {
    const container = document.getElementById("muscle-list");
    if (!container) return;
    container.innerHTML = ""; 

    const currentLang = localStorage.getItem('formix_lang') || 'en';

    muscles.forEach(item => {
        if (item.id === "cardio") return;

        // Ambil terjemahan nama otot
        const displayName = currentLang === 'id' && item.name_id ? item.name_id : item.name;

        const card = document.createElement("a");
        card.href = `workouts.html?muscle=${item.id}`;
        card.className = "card";
        card.innerHTML = `
            <h2>${displayName}</h2>
            <div class="card-arrow">&rarr;</div>
        `;
        container.appendChild(card);
    });
}

function renderEquipmentList() {
    const container = document.getElementById("equipment-list");
    if (!container) return;
    container.innerHTML = "";

    const currentLang = localStorage.getItem('formix_lang') || 'en';

    equipments.forEach(item => {
        // Ambil terjemahan nama alat
        const displayName = currentLang === 'id' && item.name_id ? item.name_id : item.name;

        const card = document.createElement("a");
        card.href = `workouts.html?equipment=${item.id}`;
        card.className = "card";
        card.innerHTML = `
            <h2>${displayName}</h2>
            <div class="card-arrow">&rarr;</div>
        `;
        container.appendChild(card);
    });
}

let baseWorkouts = [];

function renderWorkouts() {
    const title = document.getElementById("workout-title");
    const filterContainer = document.getElementById("filter-container");
    if (!document.getElementById("workout-list")) return;

    const muscleQuery = getQueryParam("muscle");
    const equipmentQuery = getQueryParam("equipment");
    const categoryQuery = getQueryParam("category");
    
    const currentLang = localStorage.getItem('formix_lang') || 'en';
    const langDict = translations[currentLang];

    let filterType = ""; 

    if (categoryQuery === "cardio") {
        title.innerText = langDict.nav_cardio + " WORKOUTS";
        baseWorkouts = workoutDB.filter(w => w.category === "cardio");
        filterType = "equipment"; 
    } else if (muscleQuery) {
        const muscleData = muscles.find(m => m.id === muscleQuery);
        const mName = currentLang === 'id' && muscleData?.name_id ? muscleData.name_id : (muscleData?.name || muscleQuery);
        title.innerText = `${mName.toUpperCase()} WORKOUTS`;
        baseWorkouts = workoutDB.filter(w => w.muscle === muscleQuery);
        filterType = "equipment";
    } else if (equipmentQuery) {
        const equipData = equipments.find(e => e.id === equipmentQuery);
        const eName = currentLang === 'id' && equipData?.name_id ? equipData.name_id : (equipData?.name || equipmentQuery);
        title.innerText = `${eName.toUpperCase()} WORKOUTS`;
        baseWorkouts = workoutDB.filter(w => w.equipment === equipmentQuery);
        filterType = "muscle";
    } else {
        title.innerText = "ALL WORKOUTS";
        baseWorkouts = workoutDB;
    }

    if (filterContainer && baseWorkouts.length > 0 && filterType !== "") {
        filterContainer.innerHTML = ""; 
        
        const wrapper = document.createElement("div");
        wrapper.className = "filter-wrapper";
        
        const label = document.createElement("label");
        label.innerText = `FILTER BY ${filterType}:`;
        
        const select = document.createElement("select");
        select.className = "filter-select";
        select.innerHTML = `<option value="all">${langDict.filter_all} ${filterType.toUpperCase()}</option>`;
        
        const uniqueValues = [...new Set(baseWorkouts.map(w => w[filterType]))].filter(v => v);
        
        uniqueValues.forEach(val => {
            let optName = val;
            if (filterType === "muscle") {
                const md = muscles.find(m => m.id === val);
                optName = currentLang === 'id' && md?.name_id ? md.name_id : (md?.name || val);
            } else {
                const ed = equipments.find(e => e.id === val);
                optName = currentLang === 'id' && ed?.name_id ? ed.name_id : (ed?.name || val);
            }
            select.innerHTML += `<option value="${val}">${optName.toUpperCase()}</option>`;
        });

        select.addEventListener("change", (e) => {
            const selectedVal = e.target.value;
            let subFiltered = baseWorkouts;
            if (selectedVal !== "all") {
                subFiltered = baseWorkouts.filter(w => w[filterType] === selectedVal);
            }
            renderCards(subFiltered, langDict, currentLang);
        });

        wrapper.appendChild(label);
        wrapper.appendChild(select);
        filterContainer.appendChild(wrapper);
    }

    renderCards(baseWorkouts, langDict, currentLang);
}

function renderCards(workoutsArray, langDict, currentLang) {
    const container = document.getElementById("workout-list");
    container.innerHTML = "";

    if (workoutsArray.length === 0) {
        container.innerHTML = `<div style="text-align:center; padding:4rem; background:#fff; border:1px solid #e4e4e7; width:100%;">
            <div style="font-size:3rem; color:#d4d4d8; margin-bottom:1rem;">&#9888;</div>
            <h3>${langDict.no_workout}</h3>
            <p style="color:#71717a;">${langDict.no_workout_desc}</p>
        </div>`;
        return;
    }

    workoutsArray.forEach((workout, index) => {
        const card = document.createElement("div");
        card.className = "workout-card";
        card.style.animationDelay = `${index * 0.1}s`;
        card.classList.add("fade-in");

        // Deteksi array steps mana yang dipakai
        const stepsArray = currentLang === 'id' && workout.steps_id ? workout.steps_id : workout.steps;
        const stepsHtml = stepsArray.map(step => `<li>${step}</li>`).join('');
        
        const fallbackImg = "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80";
        let mediaHtml = `<img src="${workout.media_url}" alt="${workout.name} demonstration" onerror="this.onerror=null; this.src='${fallbackImg}'; this.style.filter='grayscale(100%)';">`;

        const muscleData = muscles.find(m => m.id === workout.muscle);
        const equipData = equipments.find(e => e.id === workout.equipment);
        
        // Terjemahan dinamis untuk label tags
        const muscleName = currentLang === 'id' && muscleData?.name_id ? muscleData.name_id : (muscleData?.name || workout.muscle);
        const equipName = currentLang === 'id' && equipData?.name_id ? equipData.name_id : (equipData?.name || workout.equipment);

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
                <h4>${langDict.label_execution}</h4>
                <ol class="steps">
                    ${stepsHtml}
                </ol>
            </div>
        `;
        container.appendChild(card);
    });
}