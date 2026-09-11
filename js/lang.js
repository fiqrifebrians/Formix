const translations = {
    en: {
        nav_muscle: "BY MUSCLE", nav_muscle_desc: "Target specific muscle groups",
        nav_equip: "BY EQUIPMENT", nav_equip_desc: "Filter by available tools",
        nav_cardio: "CARDIO", nav_cardio_desc: "Endurance & Heart Rate Training",
        hero_title: "BUILD YOUR PERFECT ROUTINE", hero_desc: "A complete fitness platform featuring visual exercise guides and customizable workout tracking.",
        wdg_ex: "Exercises", wdg_vis: "Visualization",
        footer: "&copy; 2026 FORMIX. All Rights Reserved.",
        page_muscle_title: "TARGET MUSCLES", page_muscle_desc: "Select a muscle group to focus on.",
        page_equip_title: "AVAILABLE EQUIPMENT", page_equip_desc: "What do you have access to?",
        nav_login: "Login", nav_account: "My Account", nav_my_workout: "My Workout", 
        nav_add_account: "Add Another Account", nav_signout: "Sign Out",
        auth_signup: "SIGN UP", auth_login: "LOGIN", auth_have_acc: "I already have an account", auth_no_acc: "Don't have an account? Sign up",
        auth_conf_pwd: "Confirm Password",
        btn_back: "&larr; Back", home_btn: "&larr; Home",
        acc_title: "ACCOUNT SETTINGS", acc_edit_prof: "Edit Profile", acc_pic: "Profile Picture",
        acc_change_pwd: "Change Password", acc_old_pwd: "Old Password", acc_new_pwd: "New Password", acc_conf_pwd: "Confirm New Password",
        pwd_hint: "Min 9 chars, 1 uppercase, 1 lowercase, 1 number.",
        wkt_title: "MY WORKOUTS", btn_create: "+ Create Workout", btn_save: "Save", btn_delete: "Delete",
        label_execution: "Execution:", filter_all: "ALL",
        no_workout: "NO WORKOUTS FOUND", no_workout_desc: "We don't have this specific variation yet.",
        cat_upper: "UPPER BODY", cat_lower: "LOWER BODY",
        btn_show_inst: "Show Instructions", btn_hide_inst: "Hide Instructions"
    },
    id: {
        nav_muscle: "BERDASARKAN OTOT", nav_muscle_desc: "Targetkan kelompok otot tertentu",
        nav_equip: "BERDASARKAN ALAT", nav_equip_desc: "Saring alat yang tersedia",
        nav_cardio: "KARDIO", nav_cardio_desc: "Latihan Ketahanan & Detak Jantung",
        hero_title: "BANGUN LATIHAN IDEALMU", hero_desc: "Platform kebugaran lengkap dengan panduan visual dan pelacakan latihan yang dapat disesuaikan.",
        wdg_ex: "Latihan", wdg_vis: "Visualisasi",
        footer: "&copy; 2026 FORMIX. Hak Cipta Dilindungi.",
        page_muscle_title: "TARGET OTOT", page_muscle_desc: "Pilih kelompok otot yang ingin dilatih.",
        page_equip_title: "ALAT YANG TERSEDIA", page_equip_desc: "Alat apa yang Anda miliki?",
        nav_login: "Masuk", nav_account: "Akun Saya", nav_my_workout: "Latihanku", 
        nav_add_account: "Tambah Akun Lain", nav_signout: "Keluar",
        auth_signup: "DAFTAR", auth_login: "MASUK", auth_have_acc: "Saya sudah punya akun", auth_no_acc: "Belum punya akun? Daftar",
        auth_conf_pwd: "Konfirmasi Password",
        btn_back: "&larr; Kembali", home_btn: "&larr; Beranda",
        acc_title: "PENGATURAN AKUN", acc_edit_prof: "Edit Profil", acc_pic: "Foto Profil",
        acc_change_pwd: "Ganti Password", acc_old_pwd: "Password Lama", acc_new_pwd: "Password Baru", acc_conf_pwd: "Konfirmasi Password Baru",
        pwd_hint: "Min 9 karakter, 1 huruf besar, 1 huruf kecil, 1 angka.",
        wkt_title: "LATIHAN SAYA", btn_create: "+ Buat Latihan", btn_save: "Simpan", btn_delete: "Hapus",
        label_execution: "Instruksi:", filter_all: "SEMUA",
        no_workout: "TIDAK ADA DATA", no_workout_desc: "Kami belum memiliki variasi gerakan ini.",
        cat_upper: "TUBUH BAGIAN ATAS", cat_lower: "TUBUH BAGIAN BAWAH",
        btn_show_inst: "Tampilkan Instruksi", btn_hide_inst: "Sembunyikan Instruksi"
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
    if (typeof renderWorkouts === "function" && document.getElementById("workout-list")) renderWorkouts();
    if (typeof renderMuscleList === "function" && document.getElementById("muscle-list")) renderMuscleList();
    if (typeof renderEquipmentList === "function" && document.getElementById("equipment-list")) renderEquipmentList();
    if (typeof filterModalExercises === "function") filterModalExercises();
    if (typeof filterModalExercisesAct === "function") filterModalExercisesAct();
    if (typeof renderActiveList === "function" && document.getElementById("active-list")) renderActiveList();
}

document.addEventListener("DOMContentLoaded", () => {
    let currentLang = localStorage.getItem('formix_lang') || 'en';
    setLanguage(currentLang);
});