const translations = {
    en: {
        nav_muscle: "BY MUSCLE", nav_muscle_desc: "Target specific muscle groups",
        nav_equip: "BY EQUIPMENT", nav_equip_desc: "Filter by available tools",
        nav_cardio: "CARDIO", nav_cardio_desc: "Endurance & Heart Rate Training",
        hero_title: "MASTER YOUR FORM", hero_desc: "The ultimate visual database for precision gym movements.",
        footer: "&copy; 2026 FORMIX. All Rights Reserved.",
        page_muscle_title: "TARGET MUSCLES", page_muscle_desc: "Select a muscle group to focus on.",
        page_equip_title: "AVAILABLE EQUIPMENT", page_equip_desc: "What do you have access to?",
        nav_login: "Login / Sign Up", nav_account: "My Account", nav_my_workout: "My Workout", 
        nav_add_account: "Add Another Account", nav_signout: "Sign Out",
        acc_title: "ACCOUNT SETTINGS", acc_desc: "Manage your profile.",
        wkt_title: "MY WORKOUTS", wkt_desc: "Your personalized training plans.",
        btn_create: "+ Create Workout", btn_save: "Save", btn_cancel: "Cancel", btn_delete: "Delete",
        label_execution: "Execution:", no_workout: "NO WORKOUTS FOUND",
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
        nav_login: "Masuk / Daftar", nav_account: "Akun Saya", nav_my_workout: "Latihanku", 
        nav_add_account: "Tambah Akun Lain", nav_signout: "Keluar",
        acc_title: "PENGATURAN AKUN", acc_desc: "Kelola profil Anda.",
        wkt_title: "LATIHAN SAYA", wkt_desc: "Rencana pelatihan pribadi Anda.",
        btn_create: "+ Buat Latihan", btn_save: "Simpan", btn_cancel: "Batal", btn_delete: "Hapus",
        label_execution: "Instruksi:", no_workout: "TIDAK ADA DATA",
        cat_upper: "TUBUH BAGIAN ATAS", cat_lower: "TUBUH BAGIAN BAWAH"
    }
};

function setLanguage(lang) {
    localStorage.setItem('formix_lang', lang);
    const t = translations[lang];
    
    // Update Flags UI
    const flagSpan = document.getElementById('current-flag');
    const langSpan = document.getElementById('current-lang');
    if (flagSpan && langSpan) {
        flagSpan.innerText = lang === 'en' ? '🇺🇸' : '🇮🇩';
        langSpan.innerText = lang.toUpperCase();
    }

    // Apply translations
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) el.innerHTML = t[key];
    });

    // Re-render components if functions exist
    if (typeof renderWorkouts === "function") renderWorkouts();
    if (typeof renderMuscleList === "function") renderMuscleList();
    if (typeof renderEquipmentList === "function") renderEquipmentList();
    if (typeof loadMyWorkouts === "function") loadMyWorkouts();
}

document.addEventListener("DOMContentLoaded", () => {
    let currentLang = localStorage.getItem('formix_lang') || 'en';
    setLanguage(currentLang);
});