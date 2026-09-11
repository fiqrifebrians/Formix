const upperWorkouts = [
    // --- CHEST ---
    { 
        id: 1, name: "Barbell Bench Press", category: "strength", muscle: "chest", equipment: "barbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Bench-Press.gif", 
        steps: [
            "Positioning: Lie completely flat on the bench. Ensure your feet are planted firmly on the ground, creating a stable base.", 
            "The Grip: Reach up and grip the bar with your hands placed slightly wider than shoulder-width apart.", 
            "The Descent: Unrack the bar. Inhale deeply, brace your core, and lower the barbell slowly until it lightly touches your mid-chest.", 
            "The Press: Exhale forcefully and drive the barbell back up to the starting position."
        ],
        steps_id: [
            "Posisi: Berbaring rata di atas bangku. Pastikan telapak kaki menapak kuat di lantai untuk stabilitas.",
            "Genggaman: Pegang barbel dengan bukaan sedikit lebih lebar dari bahu.",
            "Turun: Angkat barbel dari rak. Tarik napas dalam, kencangkan perut, dan turunkan barbel perlahan hingga menyentuh bagian tengah dada.",
            "Dorong: Hembuskan napas kuat dan dorong barbel lurus kembali ke posisi awal."
        ] 
    },
    { 
        id: 2, name: "Push-Up", category: "strength", muscle: "chest", equipment: "bodyweight", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Push-Up.gif", 
        steps: [
            "Starting Stance: Begin face down on the floor in a high plank position. Place your palms firmly on the ground.", 
            "Body Alignment: Engage your abdominal muscles deeply, ensuring your body forms a perfectly straight line.", 
            "Lowering Phase: Take a deep breath in and slowly lower your entire body by bending your elbows.", 
            "Pushing Phase: Exhale and press your hands firmly and evenly into the floor to return to the start."
        ],
        steps_id: [
            "Posisi Awal: Mulai dalam posisi plank tinggi (push-up). Letakkan telapak tangan rata di lantai, selebar bahu.",
            "Postur Tubuh: Kencangkan otot perut dan bokong, pastikan tubuh membentuk garis lurus dari kepala hingga tumit.",
            "Turun: Tarik napas dan turunkan tubuh perlahan dengan menekuk siku hingga dada hampir menyentuh lantai.",
            "Dorong: Hembuskan napas dan dorong lantai dengan kuat untuk kembali ke posisi awal."
        ] 
    },
    { 
        id: 3, name: "Dumbbell Fly", category: "strength", muscle: "chest", equipment: "dumbbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Fly.gif", 
        steps: [
            "Setup: Grab a pair of dumbbells and lie flat on a bench. Press the dumbbells straight up over your chest.", 
            "Arm Position: Establish a slight, fixed bend in your elbows. Maintain this angle.", 
            "The Stretch: Inhale and slowly lower the dumbbells out to your sides in a wide, sweeping arc.", 
            "The Contraction: Exhale and use your chest muscles to pull the dumbbells back together at the top."
        ],
        steps_id: [
            "Persiapan: Pegang sepasang dumbel dan berbaring di bangku. Dorong dumbel lurus ke atas dada, telapak tangan saling berhadapan.",
            "Posisi Lengan: Tekuk siku sedikit saja dan kunci posisi tersebut sepanjang gerakan.",
            "Buka: Tarik napas dan perlahan rentangkan lengan ke samping dalam lintasan melengkung hingga dada terasa tertarik.",
            "Tutup: Hembuskan napas dan gunakan otot dada untuk menarik dumbel kembali ke atas (seperti gerakan memeluk pohon)."
        ] 
    },
    // --- BACK ---
    { 
        id: 4, name: "Pull-Up", category: "strength", muscle: "back", equipment: "bodyweight", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Pull-up.gif", 
        steps: [
            "The Grip: Grasp the pull-up bar with an overhand grip, hands wider than your shoulders.", 
            "The Hang: Allow your body to hang freely. Engage your core to prevent swinging.", 
            "The Pull: Pull your body upward by driving your elbows straight down toward the floor until your chin clears the bar.", 
            "The Descent: Lower yourself back down in a slow, controlled manner."
        ],
        steps_id: [
            "Genggaman: Pegang palang pull-up dengan telapak tangan menghadap ke depan, jarak sedikit lebih lebar dari bahu.",
            "Menggantung: Biarkan tubuh menggantung bebas. Kencangkan perut agar tubuh tidak berayun.",
            "Tarik: Tarik tubuh ke atas dengan menarik siku lurus ke bawah hingga dagu melewati palang.",
            "Turun: Turunkan tubuh secara perlahan dan terkendali hingga lengan kembali lurus."
        ] 
    },
    { 
        id: 5, name: "Barbell Row", category: "strength", muscle: "back", equipment: "barbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/04/Reverse-Grip-Barbell-Row.gif", 
        steps: [
            "Starting Position: Hinge forward until your torso is roughly a 45-degree angle to the floor. Keep your back flat.", 
            "The Grip: Grab the barbell with an overhand grip.", 
            "The Row: Brace your core and pull the barbell aggressively toward your lower rib cage.", 
            "The Return: Slowly lower the barbell back down until your arms are straight."
        ],
        steps_id: [
            "Posisi Awal: Bungkukkan tubuh ke depan hingga membentuk sudut 45 derajat. Pastikan punggung lurus dan tidak melengkung.",
            "Genggaman: Pegang barbel selebar bahu dengan telapak tangan menghadap paha.",
            "Tarik: Tarik barbel dengan kuat ke arah pusar perut. Tarik siku jauh ke belakang.",
            "Turun: Turunkan barbel perlahan hingga lengan kembali lurus sepenuhnya."
        ] 
    },
    // --- SHOULDERS ---
    { 
        id: 6, name: "Overhead Press", category: "strength", muscle: "shoulders", equipment: "barbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/07/Barbell-Standing-Military-Press.gif", 
        steps: [
            "Setup: Rest the barbell securely across your collarbones.", 
            "Stance: Stand with your feet hip-width apart and brace your core.", 
            "The Press: Press the bar forcefully straight up overhead until your arms are fully extended.", 
            "The Return: Lower the bar under strict control back down to your collarbones."
        ],
        steps_id: [
            "Persiapan: Posisikan barbel menempel di dada bagian atas / tulang selangka.",
            "Kuda-kuda: Berdiri tegak, kencangkan perut dan bokong untuk menjaga keseimbangan.",
            "Dorong: Dorong barbel lurus ke atas kepala hingga kedua lengan terentang penuh.",
            "Turun: Turunkan kembali barbel ke posisi awal di dada atas dengan perlahan."
        ] 
    },
    { 
        id: 7, name: "Lateral Raise", category: "strength", muscle: "shoulders", equipment: "dumbbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Lateral-Raise.gif", 
        steps: [
            "Starting Position: Stand upright holding dumbbells at your sides.", 
            "Arm Geometry: Keep a slight bend in your elbows.", 
            "The Raise: Raise the dumbbells out to your sides until your arms are parallel to the floor.", 
            "The Return: Slowly resist gravity to lower the dumbbells back down."
        ],
        steps_id: [
            "Posisi Awal: Berdiri tegak, pegang dumbel di sisi luar paha.",
            "Posisi Lengan: Tekuk sedikit siku Anda dan tahan posisi ini.",
            "Angkat: Angkat kedua lengan ke samping luar hingga sejajar dengan tinggi bahu.",
            "Turun: Turunkan kembali dumbel secara perlahan untuk menahan beban."
        ] 
    },
    // --- BICEPS ---
    { 
        id: 8, name: "Dumbbell Bicep Curl", category: "strength", muscle: "biceps", equipment: "dumbbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Curl.gif", 
        steps: [
            "Starting Position: Stand tall, holding dumbbells with palms facing forward.", 
            "Execution: Curl both weights up toward your shoulders simultaneously, keeping elbows still.", 
            "The Squeeze: Squeeze your biceps hard at the top.", 
            "The Descent: Slowly lower the dumbbells back down."
        ],
        steps_id: [
            "Posisi Awal: Berdiri tegak, pegang dumbel dengan telapak tangan menghadap ke depan.",
            "Angkat: Tekuk siku untuk mengangkat dumbel ke arah bahu. Pastikan siku tetap menempel di pinggang dan tidak bergerak maju.",
            "Kontraksi: Kencangkan otot bisep Anda di titik paling atas.",
            "Turun: Turunkan dumbel perlahan kembali ke posisi awal."
        ] 
    },
    // --- TRICEPS ---
    { 
        id: 9, name: "Tricep Pushdown", category: "strength", muscle: "triceps", equipment: "cables", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Triceps-Pushdown.gif", 
        steps: [
            "Setup: Grab the cable attachment with an overhand grip.", 
            "Posture: Lock your elbows firmly against your ribs.", 
            "The Push: Push the attachment straight down until your arms are fully straight.", 
            "The Return: Slowly control the weight as it comes back up to chest level."
        ],
        steps_id: [
            "Persiapan: Pegang palang kabel pada posisi katrol tinggi.",
            "Postur: Kunci siku Anda rapat-rapat di sisi pinggang.",
            "Dorong: Gunakan otot trisep belakang lengan untuk menekan palang ke bawah hingga lengan lurus sepenuhnya.",
            "Kembali: Tahan beban saat palang perlahan kembali naik ke arah dada."
        ] 
    },
    // --- CORE ---
    { 
        id: 10, name: "Plank", category: "strength", muscle: "core", equipment: "bodyweight", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Plank.gif", 
        steps: [
            "Positioning: Prop yourself up on your forearms and toes.", 
            "Alignment: Ensure your body forms a perfectly straight line from head to heels.", 
            "Engagement: Squeeze your core and glutes tightly.", 
            "The Hold: Maintain this position while breathing steadily."
        ],
        steps_id: [
            "Posisi: Menelungkup di lantai, bertumpu pada lengan bawah dan ujung jari kaki.",
            "Perataan Tubuh: Pastikan tubuh membentuk garis lurus yang rata dari kepala hingga tumit.",
            "Kencangkan: Kencangkan otot perut dan bokong secara maksimal.",
            "Tahan: Tahan posisi kaku ini selama durasi yang ditentukan sambil tetap bernapas normal."
        ] 
    },
    // --- FOREARMS ---
    { 
        id: 11, name: "Barbell Wrist Curl", category: "strength", muscle: "forearms", equipment: "barbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Wrist-Curl.gif", 
        steps: [
            "Setup: Sit on a bench, resting your forearms flat against your thighs.", 
            "The Extension: Allow the barbell to roll down to the tips of your fingers.", 
            "The Curl: Forcefully curl your wrists upward as high as they can go."
        ],
        steps_id: [
            "Persiapan: Duduk di bangku, letakkan lengan bawah rata menempel di atas paha dengan pergelangan tangan menggantung.",
            "Buka: Biarkan barbel bergulir turun perlahan hingga ke ujung jari-jari Anda.",
            "Gulung: Gulung jari-jari Anda lalu tekuk pergelangan tangan ke atas sekuat mungkin untuk mengangkat barbel."
        ] 
    }
];