const translations = {
    en: {
        nav_muscle: "BY MUSCLE", nav_muscle_desc: "Target specific muscle groups",
        nav_equip: "BY EQUIPMENT", nav_equip_desc: "Filter by available tools",
        nav_cardio: "CARDIO", nav_cardio_desc: "Endurance & Heart Rate Training",
        hero_title: "MASTER YOUR FORM", hero_desc: "The ultimate visual database for precision gym movements.",
        wdg_ex: "Exercises", wdg_vis: "Visual",
        footer: "&copy; 2026 FORMIX. All Rights Reserved.",
        page_muscle_title: "TARGET MUSCLES", page_muscle_desc: "Select a muscle group to focus on.",
        page_equip_title: "AVAILABLE EQUIPMENT", page_equip_desc: "What do you have access to?",
        nav_login: "Login / Sign Up", nav_account: "My Account", nav_my_workout: "My Workout", 
        nav_add_account: "Add Another Account", nav_signout: "Sign Out",
        auth_signup: "SIGN UP", auth_login: "LOGIN", auth_have_acc: "I already have an account", auth_no_acc: "Don't have an account? Sign up",
        btn_back: "&larr; Back",
        label_execution: "Execution:", no_workout: "NO WORKOUTS FOUND"
    },
    id: {
        nav_muscle: "BERDASARKAN OTOT", nav_muscle_desc: "Targetkan kelompok otot tertentu",
        nav_equip: "BERDASARKAN ALAT", nav_equip_desc: "Saring alat yang tersedia",
        nav_cardio: "KARDIO", nav_cardio_desc: "Latihan Ketahanan & Detak Jantung",
        hero_title: "KUASAI POSTURMU", hero_desc: "Pusat database visual untuk gerakan gym yang presisi.",
        wdg_ex: "Latihan", wdg_vis: "Visual",
        footer: "&copy; 2026 FORMIX. Hak Cipta Dilindungi.",
        page_muscle_title: "TARGET OTOT", page_muscle_desc: "Pilih kelompok otot yang ingin dilatih.",
        page_equip_title: "ALAT YANG TERSEDIA", page_equip_desc: "Alat apa yang Anda miliki?",
        nav_login: "Masuk / Daftar", nav_account: "Akun Saya", nav_my_workout: "Latihanku", 
        nav_add_account: "Tambah Akun Lain", nav_signout: "Keluar",
        auth_signup: "DAFTAR", auth_login: "MASUK", auth_have_acc: "Saya sudah punya akun", auth_no_acc: "Belum punya akun? Daftar",
        btn_back: "&larr; Kembali",
        label_execution: "Instruksi:", no_workout: "TIDAK ADA DATA"
    }
};

function setLanguage(lang) {
    localStorage.setItem('formix_lang', lang);
    const t = translations[lang];
    
    const flagSpan = document.getElementById('current-flag');
    const langSpan = document.getElementById('current-lang');
    if (flagSpan && langSpan) {
        flagSpan.innerText = lang === 'en' ? '🇬🇧' : '🇮🇩';
        langSpan.innerText = lang.toUpperCase();
    }

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) el.innerHTML = t[key];
    });

    if (typeof renderWorkouts === "function") renderWorkouts();
    if (typeof renderMuscleList === "function") renderMuscleList();
    if (typeof renderEquipmentList === "function") renderEquipmentList();
}

document.addEventListener("DOMContentLoaded", () => {
    let currentLang = localStorage.getItem('formix_lang') || 'en';
    setLanguage(currentLang);
});