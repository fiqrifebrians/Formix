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

// Menyimpan state base workout agar bisa difilter ulang
let baseWorkouts = [];

function renderWorkouts() {
    const title = document.getElementById("workout-title");
    const filterContainer = document.getElementById("filter-container");
    if (!document.getElementById("workout-list")) return;

    const muscleQuery = getQueryParam("muscle");
    const equipmentQuery = getQueryParam("equipment");
    const categoryQuery = getQueryParam("category");

    let filterType = ""; // Menentukan apakah kita akan memfilter berdasarkan alat atau otot

    // BUG FIXED: categoryQuery sekarang membaca "cardio" dengan benar
    if (categoryQuery === "cardio") {
        title.innerText = "CARDIO WORKOUTS";
        baseWorkouts = workoutDB.filter(w => w.category === "cardio");
        filterType = "equipment"; 
    } else if (muscleQuery) {
        title.innerText = `${muscleQuery.toUpperCase()} WORKOUTS`;
        baseWorkouts = workoutDB.filter(w => w.muscle === muscleQuery);
        filterType = "equipment";
    } else if (equipmentQuery) {
        title.innerText = `${equipmentQuery.toUpperCase()} WORKOUTS`;
        baseWorkouts = workoutDB.filter(w => w.equipment === equipmentQuery);
        filterType = "muscle";
    } else {
        title.innerText = "ALL WORKOUTS";
        baseWorkouts = workoutDB;
    }

    // MENGHASILKAN DROPDOWN FILTER
    if (filterContainer && baseWorkouts.length > 0 && filterType !== "") {
        filterContainer.innerHTML = ""; 
        
        const wrapper = document.createElement("div");
        wrapper.className = "filter-wrapper";
        
        const label = document.createElement("label");
        label.innerText = `FILTER BY ${filterType}:`;
        
        const select = document.createElement("select");
        select.className = "filter-select";
        select.innerHTML = `<option value="all">ALL ${filterType.toUpperCase()}</option>`;
        
        // Mendapatkan nilai unik (contoh: cari semua jenis alat yang ada di list dada/chest)
        const uniqueValues = [...new Set(baseWorkouts.map(w => w[filterType]))].filter(v => v);
        
        uniqueValues.forEach(val => {
            const optName = filterType === "muscle" 
                ? (muscles.find(m => m.id === val)?.name || val)
                : (equipments.find(e => e.id === val)?.name || val);
            select.innerHTML += `<option value="${val}">${optName.toUpperCase()}</option>`;
        });

        // Event listener ketika dropdown diubah
        select.addEventListener("change", (e) => {
            const selectedVal = e.target.value;
            let subFiltered = baseWorkouts;
            if (selectedVal !== "all") {
                subFiltered = baseWorkouts.filter(w => w[filterType] === selectedVal);
            }
            renderCards(subFiltered);
        });

        wrapper.appendChild(label);
        wrapper.appendChild(select);
        filterContainer.appendChild(wrapper);
    }

    // Render list pertama kali (semua tanpa sub-filter)
    renderCards(baseWorkouts);
}

function renderCards(workoutsArray) {
    const container = document.getElementById("workout-list");
    container.innerHTML = ""; // Bersihkan list sebelumnya

    if (workoutsArray.length === 0) {
        container.innerHTML = `<div style="text-align:center; padding:4rem; background:#fff; border:1px solid #e4e4e7; width:100%;">
            <div style="font-size:3rem; color:#d4d4d8; margin-bottom:1rem;">&#9888;</div>
            <h3>NO WORKOUTS FOUND</h3>
            <p style="color:#71717a;">We don't have this specific variation yet.</p>
        </div>`;
        return;
    }

    workoutsArray.forEach((workout, index) => {
        const card = document.createElement("div");
        card.className = "workout-card";
        card.style.animationDelay = `${index * 0.1}s`;
        card.classList.add("fade-in");

        const stepsHtml = workout.steps.map(step => `<li>${step}</li>`).join('');
        
        const fallbackImg = "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80";
        let mediaHtml = `<img src="${workout.media_url}" alt="${workout.name} demonstration" onerror="this.onerror=null; this.src='${fallbackImg}'; this.style.filter='grayscale(100%)';">`;

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