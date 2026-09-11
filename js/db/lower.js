const lowerWorkouts = [
    // --- LEGS ---
    { 
        id: 12, name: "Barbell Squat", category: "strength", muscle: "legs", equipment: "barbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/BARBELL-SQUAT.gif", 
        steps: [
            "Setup: Rest the barbell securely across your upper back.", 
            "Stance: Set your feet shoulder-width apart, toes pointing slightly out.", 
            "The Descent: Push your hips backward and bend your knees to squat down until your thighs are parallel to the floor.", 
            "The Ascent: Drive through your heels to stand back up."
        ],
        steps_id: [
            "Persiapan: Letakkan palang barbel dengan aman di atas punggung atas/bahu.",
            "Kuda-kuda: Buka kaki selebar bahu dengan ujung kaki sedikit serong ke luar.",
            "Turun: Dorong panggul ke belakang lalu tekuk lutut untuk jongkok hingga paha sejajar dengan lantai.",
            "Naik: Tekan tumit kuat ke lantai untuk mendorong tubuh kembali berdiri tegak."
        ] 
    },
    { 
        id: 13, name: "Romanian Deadlift", category: "strength", muscle: "legs", equipment: "barbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Romanian-Deadlift.gif", 
        steps: [
            "Setup: Stand tall holding a barbell in front of your thighs.", 
            "The Hinge: With a slight bend in your knees, push your hips backward to lower the bar.", 
            "The Stretch: Slide the bar down your legs until you feel a stretch in your hamstrings. Keep your back flat.", 
            "The Lockout: Squeeze your glutes and thrust your hips forward to stand up."
        ],
        steps_id: [
            "Persiapan: Berdiri tegak memegang barbel tepat di depan paha.",
            "Bungkuk: Beri sedikit tekukan kaku pada lutut. Bungkukkan badan dengan mendorong bokong jauh ke belakang.",
            "Regangan: Turunkan barbel menyusuri kaki hingga paha belakang terasa menegang. Punggung wajib lurus.",
            "Berdiri: Dorong panggul ke depan dan kencangkan bokong untuk kembali berdiri."
        ] 
    },
    { 
        id: 14, name: "Leg Press", category: "strength", muscle: "legs", equipment: "machine", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2015/11/Leg-Press.gif", 
        steps: [
            "Positioning: Sit deeply into the leg press machine, back flat against the pad.", 
            "The Descent: Slowly bend your knees, bringing the sled down toward your chest.", 
            "The Press: Drive powerfully through your feet to press the sled back up without fully locking your knees."
        ],
        steps_id: [
            "Posisi: Duduk di mesin Leg Press, pastikan punggung dan bokong menempel rapat di sandaran.",
            "Turun: Tekuk lutut secara perlahan, biarkan pijakan turun mendekati dada hingga lutut membentuk sudut 90 derajat.",
            "Dorong: Tekan kuat dengan seluruh telapak kaki untuk menolak beban ke atas. Jangan luruskan lutut 100% di akhir dorongan."
        ] 
    },
    // --- CALVES ---
    { 
        id: 15, name: "Standing Calf Raise", category: "strength", muscle: "calves", equipment: "bodyweight", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Standing-Calf-Raise.gif", 
        steps: [
            "Setup: Stand on the edge of an elevated platform with your heels hanging off.", 
            "The Raise: Push forcefully through the balls of your feet to raise your heels as high as possible.", 
            "The Stretch: Slowly lower your heels dropping them past the level of the step."
        ],
        steps_id: [
            "Persiapan: Berdiri di tepi balok pijakan dengan bagian tumit menggantung di udara.",
            "Jinjit: Tekan telapak kaki depan untuk mengangkat tumit dan tubuh setinggi mungkin. Kencangkan betis.",
            "Turun: Turunkan tumit perlahan hingga melewati batas balok pijakan agar betis meregang maksimal."
        ] 
    }
];