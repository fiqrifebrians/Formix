const translations = {
    en: {
        nav_muscle: "BY MUSCLE", nav_muscle_desc: "Target specific muscle groups",
        nav_equip: "BY EQUIPMENT", nav_equip_desc: "Filter by available tools",
        nav_cardio: "CARDIO", nav_cardio_desc: "Endurance & Heart Rate Training",
        hero_title: "MASTER YOUR FORM", hero_desc: "The ultimate visual database for precision gym movements.",
        footer: "&copy; 2026 FORMIX. All Rights Reserved.",
        page_muscle_title: "TARGET MUSCLES", page_muscle_desc: "Select a muscle group to focus on.",
        page_equip_title: "AVAILABLE EQUIPMENT", page_equip_desc: "What do you have access to?",
        back_btn: "&larr; Back", home_btn: "&larr; Home",
        label_execution: "Execution:", filter_all: "ALL",
        no_workout: "NO WORKOUTS FOUND", no_workout_desc: "We don't have this specific variation yet.",
        cat_upper: "UPPER BODY", cat_lower: "LOWER BODY"
    },
    id: {
        nav_muscle: "BERDASARKAN OTOT", nav_muscle_desc: "Targetkan kelompok otot tertentu",
        nav_equip: "BERDASARKAN ALAT", nav_equip_desc: "Saring alat yang tersedia",
        nav_cardio: "KARDIO", nav_cardio_desc: "Latihan Ketahanan & Detak Jantung",
        hero_title: "KUASAI POSTURMU", hero_desc: "Pusat database visual untuk gerakan gym yang presisi.",
        footer: "&copy; 2026 FORMIX. Hak Cipta Dilindungi.",
        page_muscle_title: "TARGET OTOT", page_muscle_desc: "Pilih kelompok otot yang ingin dilatih.",
        page_equip_title: "ALAT YANG TERSEDIA", page_equip_desc: "Alat apa yang Anda miliki?",
        back_btn: "&larr; Kembali", home_btn: "&larr; Beranda",
        label_execution: "Instruksi:", filter_all: "SEMUA",
        no_workout: "LATIHAN TIDAK DITEMUKAN", no_workout_desc: "Kami belum memiliki variasi gerakan ini.",
        cat_upper: "TUBUH BAGIAN ATAS (UPPER)", cat_lower: "TUBUH BAGIAN BAWAH (LOWER)"
    }
};

function setLanguage(lang) {
    localStorage.setItem('formix_lang', lang);
    const t = translations[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) el.innerHTML = t[key];
    });
    
    document.querySelectorAll('.lang-switcher span').forEach(el => el.classList.remove('active'));
    if(document.getElementById('lang-' + lang)) document.getElementById('lang-' + lang).classList.add('active');

    if (typeof renderWorkouts === "function" && document.getElementById("workout-list")) renderWorkouts();
    if (typeof renderMuscleList === "function" && document.getElementById("muscle-list")) renderMuscleList();
    if (typeof renderEquipmentList === "function" && document.getElementById("equipment-list")) renderEquipmentList();
}

document.addEventListener("DOMContentLoaded", () => {
    let currentLang = localStorage.getItem('formix_lang') || 'en';
    setLanguage(currentLang);
});