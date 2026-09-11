const upperWorkouts = [
    // --- CHEST ---
    { 
        id: 1, name: "Barbell Bench Press", category: "strength", muscle: "chest", equipment: "barbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Bench-Press.gif", 
        steps: ["Positioning: Lie completely flat on the bench. Ensure your feet are planted firmly on the ground, creating a stable base.", "The Grip: Reach up and grip the bar with your hands placed slightly wider than shoulder-width apart.", "The Descent: Unrack the bar. Inhale deeply, brace your core, and lower the barbell slowly until it lightly touches your mid-chest.", "The Press: Exhale forcefully and drive the barbell back up to the starting position."],
        steps_id: ["Posisi: Berbaring rata di atas bangku. Pastikan telapak kaki menapak kuat di lantai untuk stabilitas.", "Genggaman: Pegang barbel dengan bukaan sedikit lebih lebar dari bahu.", "Turun: Angkat barbel dari rak. Tarik napas dalam, kencangkan perut, dan turunkan barbel perlahan hingga menyentuh bagian tengah dada.", "Dorong: Hembuskan napas kuat dan dorong barbel lurus kembali ke posisi awal."] 
    },
    { 
        id: 2, name: "Push-Up", category: "strength", muscle: "chest", equipment: "bodyweight", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Push-Up.gif", 
        steps: ["Starting Stance: Begin face down on the floor in a high plank position. Place your palms firmly on the ground.", "Body Alignment: Engage your abdominal muscles deeply, ensuring your body forms a perfectly straight line.", "Lowering Phase: Take a deep breath in and slowly lower your entire body by bending your elbows.", "Pushing Phase: Exhale and press your hands firmly and evenly into the floor to return to the start."],
        steps_id: ["Posisi Awal: Mulai dalam posisi plank tinggi (push-up). Letakkan telapak tangan rata di lantai, selebar bahu.", "Postur Tubuh: Kencangkan otot perut dan bokong, pastikan tubuh membentuk garis lurus dari kepala hingga tumit.", "Turun: Tarik napas dan turunkan tubuh perlahan dengan menekuk siku hingga dada hampir menyentuh lantai.", "Dorong: Hembuskan napas dan dorong lantai dengan kuat untuk kembali ke posisi awal."] 
    },
    { 
        id: 3, name: "Dumbbell Fly", category: "strength", muscle: "chest", equipment: "dumbbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Fly.gif", 
        steps: ["Setup: Grab a pair of dumbbells and lie flat on a bench. Press the dumbbells straight up over your chest.", "Arm Position: Establish a slight, fixed bend in your elbows. Maintain this angle.", "The Stretch: Inhale and slowly lower the dumbbells out to your sides in a wide, sweeping arc.", "The Contraction: Exhale and use your chest muscles to pull the dumbbells back together at the top."],
        steps_id: ["Persiapan: Pegang sepasang dumbel dan berbaring di bangku. Dorong dumbel lurus ke atas dada, telapak tangan saling berhadapan.", "Posisi Lengan: Tekuk siku sedikit saja dan kunci posisi tersebut sepanjang gerakan.", "Buka: Tarik napas dan perlahan rentangkan lengan ke samping dalam lintasan melengkung hingga dada terasa tertarik.", "Tutup: Hembuskan napas dan gunakan otot dada untuk menarik dumbel kembali ke atas (seperti gerakan memeluk pohon)."] 
    },
    { 
        id: 4, name: "Cable Crossover", category: "strength", muscle: "chest", equipment: "cables", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Cable-Crossover.gif", 
        steps: ["Preparation: Stand exactly in the center of a dual cable crossover machine. Set both pulleys to the highest position.", "Posture: Take one large step forward with either foot to stagger your stance. Lean your torso slightly forward.", "The Movement: With a slight bend locked into your elbows, pull the handles forward and downward in a wide, sweeping motion.", "Return: Slowly allow the resistance of the cables to pull your arms back up."],
        steps_id: ["Persiapan: Berdiri di tengah mesin kabel ganda. Atur katrol pada posisi paling tinggi dan genggam gagang.", "Postur: Ambil satu langkah ke depan agar tubuh lebih seimbang. Condongkan tubuh sedikit ke depan.", "Gerakan: Dengan siku sedikit tertekuk, tarik gagang ke depan dan ke bawah dalam gerakan menyapu.", "Kembali: Biarkan kabel menarik lengan Anda kembali ke posisi awal secara perlahan."] 
    },
    { 
        id: 5, name: "Pec Deck Fly", category: "strength", muscle: "chest", equipment: "machine", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Pec-Deck-Fly.gif", 
        steps: ["Setup: Sit on the Pec Deck machine with your back flat against the pad. Adjust the seat height so that the handles are exactly at chest level.", "Grip: Grab the handles ensuring your elbows are slightly bent and aligned with your shoulders.", "The Contraction: Exhale and squeeze your pectoral muscles to bring the handles together directly in front of your chest.", "The Stretch: Inhale and slowly let the handles return to the starting position."],
        steps_id: ["Persiapan: Duduk tegak di mesin Pec Deck dengan punggung menempel rata pada bantalan.", "Genggaman: Pegang gagang dan pastikan siku sedikit tertekuk serta sejajar dengan bahu.", "Kontraksi: Hembuskan napas dan remas otot dada untuk mempertemukan gagang tepat di depan dada.", "Regangan: Tarik napas dan biarkan gagang kembali perlahan ke posisi awal."] 
    },
    { 
        id: 6, name: "Low Cable Crossover", category: "strength", muscle: "chest", equipment: "cables", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Low-Cable-Crossover.gif", 
        steps: ["Setup: Set the pulleys on a dual cable machine to the lowest floor setting. Grab the D-handles with an underhand grip.", "Posture: Stand in the center of the machine, take a slight step forward.", "The Upward Sweep: Exhale and scoop the cables upward and inward in a wide arc until your hands meet at upper-chest level.", "The Descent: Inhale and lower the handles slowly back down."],
        steps_id: ["Persiapan: Atur katrol mesin ke posisi paling bawah. Genggam gagang dengan telapak tangan menghadap ke depan/atas.", "Postur: Berdiri di tengah mesin, ambil satu langkah kecil ke depan untuk menciptakan tegangan.", "Ayunan Ke Atas: Hembuskan napas dan ayunkan kabel ke atas hingga kedua tangan bertemu setinggi dada atas.", "Turunkan: Tarik napas dan turunkan gagang perlahan ke sisi tubuh."] 
    },
    { 
        id: 7, name: "High Cable Crossover", category: "strength", muscle: "chest", equipment: "cables", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/High-Cable-Crossover.gif", 
        steps: ["Setup: Set the pulleys to the highest setting on the cable machine. Grasp the handles and step forward.", "The Downward Sweep: With a slight bend in your elbows, exhale and pull the handles downward and inward toward your hips.", "The Squeeze: Cross your wrists slightly over each other at the bottom.", "The Return: Slowly let the cables pull your arms back up."],
        steps_id: ["Persiapan: Atur katrol di posisi paling atas. Genggam gagang dan condongkan tubuh sedikit ke depan.", "Ayunan Ke Bawah: Hembuskan napas dan tarik gagang ke bawah mengarah ke pinggul atau perut bagian bawah.", "Puncak Kontraksi: Silangkan pergelangan tangan sedikit di titik paling bawah untuk memaksimalkan tekanan dada.", "Kembali: Perlahan biarkan kabel menarik lengan kembali ke posisi peregangan awal."] 
    },
    { 
        id: 8, name: "Dumbbell Bench Press", category: "strength", muscle: "chest", equipment: "dumbbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Press.gif", 
        steps: ["Setup: Sit on the edge of a flat bench. Kick your knees up one at a time to safely hoist the dumbbells to shoulder level as you lie back.", "Positioning: Plant your feet firmly, arch your back slightly. Hold the dumbbells directly over your chest.", "The Descent: Inhale and slowly lower the dumbbells straight down to the sides of your chest.", "The Press: Exhale and forcefully press the dumbbells back up to the starting position."],
        steps_id: ["Persiapan: Duduk di bangku, angkat lutut satu per satu untuk menendang dumbel ke bahu saat Anda berbaring.", "Posisi: Tapakkan kaki kuat di lantai, tahan dumbel tepat di atas dada.", "Turunkan: Tarik napas dan perlahan turunkan dumbel lurus ke sisi dada. Siku membentuk sudut 45 derajat.", "Dorongan: Hembuskan napas dan dorong dumbel kembali ke atas secara kuat."] 
    },
    { 
        id: 9, name: "Machine Fly", category: "strength", muscle: "chest", equipment: "machine", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/05/10301301-Lever-Pec-Deck-Fly_Chest_720.gif", 
        steps: ["Setup: Adjust the seat height so the machine's handles are parallel to your mid-chest.", "Grip: Grasp the handles with a neutral grip and maintain a slight bend in your elbows.", "Execution: Squeeze your chest muscles to bring your arms together in a wide hugging motion.", "Return: Slowly release the weight back to the starting position."],
        steps_id: ["Persiapan: Atur kursi agar gagang mesin sejajar dengan bagian tengah dada.", "Genggaman: Pegang gagang dengan posisi telapak tangan berhadapan dan pastikan siku sedikit tertekuk.", "Eksekusi: Remas otot dada dan pertemukan lengan di depan dalam gerakan memeluk.", "Kembali: Perlahan lepas beban kembali ke posisi awal tanpa membiarkan beban terbanting."] 
    },
    { 
        id: 10, name: "Lever Chest Press", category: "strength", muscle: "chest", equipment: "machine", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/06/Lever-Chest-Press.gif", 
        steps: ["Setup: Sit down on the lever chest press machine. Adjust the seat so the handles align perfectly with your mid-chest.", "Grip: Grab the handles with an overhand grip.", "The Press: Exhale and press the handles forward until your arms are fully extended.", "The Return: Inhale and slowly lower the handles back to the start."],
        steps_id: ["Persiapan: Duduk di mesin lever chest press. Atur kursi sehingga gagang sejajar dengan area tengah dada.", "Genggaman: Busungkan dada dan pegang gagang dengan telapak tangan menghadap ke bawah.", "Dorongan: Hembuskan napas dan dorong tuas mesin ke depan hingga lengan lurus.", "Kembali: Tarik napas dan kembalikan tuas secara perlahan ke posisi awal."] 
    },

    // --- BACK ---
    { 
        id: 11, name: "Pull-Up", category: "strength", muscle: "back", equipment: "bodyweight", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Pull-up.gif", 
        steps: ["The Grip: Grasp the pull-up bar with an overhand grip, hands wider than your shoulders.", "The Hang: Allow your body to hang freely. Engage your core to prevent swinging.", "The Pull: Pull your body upward by driving your elbows straight down toward the floor until your chin clears the bar.", "The Descent: Lower yourself back down in a slow, controlled manner."],
        steps_id: ["Genggaman: Pegang palang pull-up dengan telapak tangan menghadap ke depan, jarak sedikit lebih lebar dari bahu.", "Menggantung: Biarkan tubuh menggantung bebas. Kencangkan perut agar tubuh tidak berayun.", "Tarik: Tarik tubuh ke atas dengan menarik siku lurus ke bawah hingga dagu melewati palang.", "Turun: Turunkan tubuh secara perlahan dan terkendali hingga lengan kembali lurus."] 
    },
    { 
        id: 12, name: "Barbell Row", category: "strength", muscle: "back", equipment: "barbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/04/Reverse-Grip-Barbell-Row.gif", 
        steps: ["Starting Position: Hinge forward until your torso is roughly a 45-degree angle to the floor. Keep your back flat.", "The Grip: Grab the barbell with an overhand grip.", "The Row: Brace your core and pull the barbell aggressively toward your lower rib cage.", "The Return: Slowly lower the barbell back down until your arms are straight."],
        steps_id: ["Posisi Awal: Bungkukkan tubuh ke depan hingga membentuk sudut 45 derajat. Pastikan punggung lurus dan tidak melengkung.", "Genggaman: Pegang barbel selebar bahu dengan telapak tangan menghadap paha.", "Tarik: Tarik barbel dengan kuat ke arah pusar perut. Tarik siku jauh ke belakang.", "Turun: Turunkan barbel perlahan hingga lengan kembali lurus sepenuhnya."] 
    },
    { 
        id: 13, name: "Dumbbell Row", category: "strength", muscle: "back", equipment: "dumbbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Row.gif", 
        steps: ["Setup: Place your right knee securely on a bench and your right hand firmly on the upper half for support.", "Grip: Pick up a moderately heavy dumbbell with your left hand. Let it hang straight down.", "The Pull: Pull your shoulder blade back, then drive your elbow straight up toward the ceiling.", "The Squeeze: Pause at the top, squeezing your back. Slowly lower the dumbbell."],
        steps_id: ["Persiapan: Gunakan bangku datar. Letakkan lutut dan tangan kanan di atas bangku. Punggung rata sejajar lantai.", "Genggaman: Pegang dumbel dengan tangan kiri, biarkan lengan menggantung lurus.", "Tarikan: Tarik siku lurus ke arah langit-langit. Jaga lengan menempel di sisi tubuh hingga dumbel berada di pinggul.", "Kontraksi: Tahan di posisi puncak dan kencangkan otot punggung, lalu turunkan perlahan."] 
    },
    { 
        id: 14, name: "Lat Pulldown", category: "strength", muscle: "back", equipment: "machine", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Lat-Pulldown.gif", 
        steps: ["Adjustment: Sit down and carefully adjust the knee pad height so it fits very snugly over your upper thighs.", "Grip: Grasp the bar with a pronated grip, wider than your shoulders.", "Execution: Lean back slightly and pull the bar straight down toward your upper chest.", "Release: Control the weight stack as you allow the bar to slowly return to the top position."],
        steps_id: ["Pengaturan: Duduk di mesin lat pulldown. Atur penahan lutut agar menekan paha atas dengan rapat.", "Genggaman: Pegang palang lebar dengan telapak tangan menghadap ke depan.", "Eksekusi: Condongkan tubuh sedikit ke belakang. Tarik palang lurus ke arah dada atas dengan menarik siku ke bawah.", "Lepaskan: Kembalikan palang perlahan ke atas hingga lengan lurus membentang."] 
    },
    { 
        id: 15, name: "Seated Cable Row", category: "strength", muscle: "back", equipment: "cables", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Seated-Cable-Row.gif", 
        steps: ["Positioning: Sit on the bench. Place your feet securely on the front footpads with a slight bend in your knees.", "Grip: Grab the V-bar attachment. Sit back until your torso is perfectly upright.", "The Pull: Pull the handles directly backward into your abdomen. Squeeze your shoulder blades together.", "The Return: Slowly extend your arms forward."],
        steps_id: ["Posisi: Duduk di bangku mesin kabel. Letakkan telapak kaki di pijakan dengan lutut sedikit ditekuk.", "Genggaman: Tarik tubuh tegak lurus (90 derajat) sambil memegang gagang V-bar.", "Tarikan: Jaga punggung tetap kaku, tarik gagang lurus ke arah pusar. Jepit tulang belikat sangat kuat.", "Kembali: Rentangkan lengan lurus perlahan ke depan, biarkan punggung meregang ringan."] 
    },
    { 
        id: 16, name: "Bent Over Dumbbell Row", category: "strength", muscle: "back", equipment: "dumbbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Bent-Over-Dumbbell-Row.gif", 
        steps: ["Stance: Stand holding a dumbbell in each hand with feet shoulder-width apart.", "The Hinge: Push your hips backward and hinge your torso forward until parallel with the floor.", "The Pull: Pull both dumbbells up toward your ribcage simultaneously.", "The Lowering: Squeeze your back at the top, then lower the dumbbells slowly."],
        steps_id: ["Kuda-kuda: Berdiri tegak memegang dua dumbel. Buka kaki selebar bahu.", "Bungkuk: Dorong pinggul ke belakang dan bungkukkan tubuh hingga sejajar lantai. Jaga punggung tetap rata.", "Tarikan: Tarik kedua dumbel secara bersamaan ke arah rusuk. Tarik siku ke belakang menempel pinggang.", "Turun: Tahan kontraksi di puncak sejenak, lalu perlahan turunkan kembali dumbel."] 
    },

    // --- SHOULDERS ---
    { 
        id: 31, name: "Overhead Press", category: "strength", muscle: "shoulders", equipment: "barbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/07/Barbell-Standing-Military-Press.gif", 
        steps: ["Setup: Rest the barbell securely across your collarbones.", "Stance: Stand with your feet hip-width apart and brace your core.", "The Press: Press the bar forcefully straight up overhead until your arms are fully extended.", "The Return: Lower the bar under strict control back down to your collarbones."],
        steps_id: ["Persiapan: Posisikan barbel menempel di dada bagian atas / tulang selangka.", "Kuda-kuda: Berdiri tegak, kencangkan perut dan bokong untuk menjaga keseimbangan.", "Dorong: Dorong barbel lurus ke atas kepala hingga kedua lengan terentang penuh.", "Turun: Turunkan kembali barbel ke posisi awal di dada atas dengan perlahan."] 
    },
    { 
        id: 32, name: "Lateral Raise", category: "strength", muscle: "shoulders", equipment: "dumbbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Lateral-Raise.gif", 
        steps: ["Starting Position: Stand upright holding dumbbells at your sides.", "Arm Geometry: Keep a slight bend in your elbows.", "The Raise: Raise the dumbbells out to your sides until your arms are parallel to the floor.", "The Return: Slowly resist gravity to lower the dumbbells back down."],
        steps_id: ["Posisi Awal: Berdiri tegak, pegang dumbel di sisi luar paha.", "Posisi Lengan: Tekuk sedikit siku Anda dan tahan posisi ini.", "Angkat: Angkat kedua lengan ke samping luar hingga sejajar dengan tinggi bahu.", "Turun: Turunkan kembali dumbel secara perlahan untuk menahan beban."] 
    },
    { 
        id: 33, name: "Face Pull", category: "strength", muscle: "shoulders", equipment: "cables", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Face-Pull.gif", 
        steps: ["Setup: Attach a dual-handle tricep rope to a cable pulley at face height.", "Stance: Step back to establish a solid base of balance against the pulling weight.", "The Pull: Pull the rope directly toward the bridge of your nose, flaring elbows wide.", "The Squeeze: Pinch your rear deltoids intensely, then slowly extend arms back."],
        steps_id: ["Persiapan Alat: Gantungkan tali beban pada katrol selevel area wajah. Genggam tali dengan jempol mengarah ke wajah.", "Mundur: Geser kaki menjauhi mesin. Tempatkan satu kaki di depan (kuda-kuda).", "Tarik: Tarik kuat kabel membelah ke arah hidung/wajah. Tarik siku selebar mungkin.", "Kembali: Tekankan cubitan keras di bahu belakang sejenak, lalu urai tali lurus kembali."] 
    },
    { 
        id: 34, name: "Machine Shoulder Press", category: "strength", muscle: "shoulders", equipment: "machine", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Smith-Machine-Shoulder-Press.gif", 
        steps: ["Adjustment: Sit in the machine and adjust the seat height so handles align with your shoulders.", "Grip: Press your back firmly against the pad and grasp the handles.", "Execution: Push the handles smoothly upward until your arms are extended.", "Release: Lower the handles back down under strict control."],
        steps_id: ["Pengaturan: Atur kursi Shoulder Press agar gagang sejajar langsung dengan bahu atas Anda.", "Posisi: Bersandar kuat ke bantalan punggung. Cengkeram gagang secara lurus.", "Dorong: Hembuskan napas, dorong gagang lurus ke atas hingga lengan terentang lurus.", "Turun: Tahan laju beban saat turun sampai gagang kembali di area telinga."] 
    },
    { 
        id: 35, name: "Two Arm Dumbbell Front Raise", category: "strength", muscle: "shoulders", equipment: "dumbbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/08/Two-Arm-Dumbbell-Front-Raise.gif", 
        steps: ["Setup: Stand tall holding a dumbbell in each hand, resting gently on the front of your thighs.", "Posture: Brace your abdominals tightly to prevent swinging.", "The Raise: Lift both dumbbells directly forward and upward simultaneously.", "The Peak: Stop raising when the dumbbells reach shoulder height. Lower slowly."],
        steps_id: ["Sikap Awal: Berdiri santai tegap, dumbel melekat di depan paha.", "Tahan: Kunci perut agar tubuh statis. Hindari memanfaatkan momen ayun badan.", "Angkat: Bentangkan lurus kedua tangan menyapu ke arah depan atas secara bersamaan.", "Turun: Stop ayunan tepat saat sejajar dengan bahu. Turunkan kembali secara perlahan ke paha."] 
    },
    { 
        id: 36, name: "Standing Dumbbell Shoulder Press", category: "strength", muscle: "shoulders", equipment: "dumbbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2023/09/Standing-Dumbbell-Overhead-Press.gif", 
        steps: ["Setup: Stand upright with feet shoulder-width apart. Clean a pair of dumbbells up to shoulder height.", "Posture: Brace your core and squeeze your glutes.", "The Press: Exhale and press the dumbbells straight up overhead.", "The Descent: Inhale and lower the dumbbells slowly back down to shoulder level."],
        steps_id: ["Persiapan: Berdiri rentangkan kaki. Posisikan dumbel sejajar tepat di sisi atas bahu luar.", "Postur: Tarik kencang perut Anda untuk menopang beban di tulang belakang.", "Dorong: Suntik daya vertikal ke arah langit-langit. Luruskan lengan di atas kepala.", "Turun: Lambatkan tempo jatuhnya dengan kesadaran sampai menyentuh batas leher kembali."] 
    },
    { 
        id: 37, name: "Dumbbell Shoulder Press", category: "strength", muscle: "shoulders", equipment: "dumbbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Shoulder-Press.gif", 
        steps: ["Setup: Sit on an upright utility bench. Hoist a dumbbell to each shoulder.", "Posture: Press your upper and lower back firmly against the pad.", "The Press: Press the dumbbells straight upward until arms are locked out.", "The Return: Slowly lower the weights back down to shoulder level."],
        steps_id: ["Kursi Bantu: Pakai tempat sandaran tegak. Bawa dumbel naik setara pundak Anda.", "Duduk: Tempelkan tulang belakang rata di bangku dan tekan telapak kaki ke tanah.", "Mendorong: Dorong lengan dalam garis lurus ke atas kepala secara bersamaan.", "Penurunan: Kembalikan siku ke bawah perlahan dengan siku sedikit condong ke depan."] 
    },
    { 
        id: 38, name: "Lever Shoulder Press", category: "strength", muscle: "shoulders", equipment: "machine", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/04/Lever-Shoulder-Press.gif", 
        steps: ["Adjustment: Sit on the lever shoulder press machine. Adjust the seat height.", "Grip: Grab the handles securely. Keep your chest up.", "Execution: Push the handles straight up. Exhale as you press.", "Release: Lower the handles back down smoothly, resisting the weight."],
        steps_id: ["Kursi: Sesuaikan alas jok agar posisi gagang mesin tepat sejajar dengan bahu samping.", "Sandaran: Peluk bagian penyokong beban mesin belakang dengan punggung padat kokoh.", "Aksi Naik: Tolak gagang tuas ke atas lurus sambil menghembuskan napas.", "Turun: Terima tarikan dan kontrol lamban penurunan tuas beban ke posisi asal."] 
    },

    // --- BICEPS ---
    { 
        id: 39, name: "Barbell Curl", category: "strength", muscle: "biceps", equipment: "barbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Curl.gif", 
        steps: ["Stance & Grip: Hold a barbell with an underhand grip, hands spaced at shoulder-width.", "Positioning: Pin your elbows tightly against your ribcage.", "The Curl: Contract your biceps to curl the barbell upwards in a smooth arc.", "The Lowering: Inhale as you slowly lower the barbell all the way down."],
        steps_id: ["Awalan: Buka kaki selebar bahu. Genggam barbel dengan telapak tangan menghadap ke atas.", "Kunci Siku: Paku tulang siku di pinggang rusuk Anda. Tidak ada toleransi siku bergoyang maju.", "Gerak Naik: Lipat persendian siku untuk mengerek barbel mendarat di area dada atas.", "Turun: Biarkan beban turun bertahap hingga lengan menjuntai lurus penuh ke bawah."] 
    },
    { 
        id: 40, name: "Dumbbell Bicep Curl", category: "strength", muscle: "biceps", equipment: "dumbbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Curl.gif", 
        steps: ["Starting Position: Stand tall, holding dumbbells with palms facing forward.", "Execution: Curl both weights up toward your shoulders simultaneously, keeping elbows still.", "The Squeeze: Squeeze your biceps hard at the top.", "The Descent: Slowly lower the dumbbells back down."],
        steps_id: ["Posisi Awal: Berdiri tegak, pegang dumbel dengan telapak tangan menghadap ke depan.", "Angkat: Tekuk siku untuk mengangkat dumbel ke arah bahu. Pastikan siku tetap menempel di pinggang.", "Kontraksi: Kencangkan otot bisep Anda di titik paling atas.", "Turun: Turunkan dumbel perlahan kembali ke posisi awal di sisi paha."] 
    },
    { 
        id: 41, name: "EZ Bar Preacher Curl", category: "strength", muscle: "biceps", equipment: "ez bar", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/EZ-Bar-Preacher-Curl.gif", 
        steps: ["Setup: Sit at a preacher curl bench. Position the back of your upper arms flat against the pad.", "The Contraction: Curl the bar upward in a smooth, controlled arc toward your chin.", "The Squeeze: Stop just short of vertical and squeeze your biceps tightly.", "The Extension: Lower the bar very slowly until arms are almost fully extended."],
        steps_id: ["Setup Preacher: Masuk ke bangku bantalan preacher. Lekatkan seluruh belakang lengan ke bantalan agar tubuh tak bisa mengayun.", "Kerut Naik: Angkat barbel EZ perlahan memutar ke arah dagu.", "Tahan Tegangan: Berhenti sesaat sebelum siku lurus vertikal sepenuhnya agar tegangan otot bisep tidak hilang.", "Peregangan: Ulurkan perlahan menuruni bantalan. Berhenti sedikit sebelum siku terkunci 100%."] 
    },
    { 
        id: 42, name: "Cable Bicep Curl", category: "strength", muscle: "biceps", equipment: "cables", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Cable-Curl.gif", 
        steps: ["Setup: Attach a straight bar handle to the lowest setting on a cable machine.", "Grip: Grab the bar, stand tall, and pin your elbows to your sides.", "Execution: Curl the bar upwards towards your upper chest against constant tension.", "Return: Lower the bar under strict control."],
        steps_id: ["Pasang Alat: Tempel palang di lantai bawah mesin kabel. Menghadap berhadapan ke arah mesin.", "Kuda-kuda: Berdiri tegap dan rapatkan siku Anda sejajar dengan tulang rusuk.", "Tarikan: Lipat palang ke atas melawan daya gravitasi konstan kabel.", "Turun: Luruskan beban tali kembali perlahan ke asalnya."] 
    },
    { 
        id: 43, name: "Dumbbell Hammer Curl", category: "strength", muscle: "biceps", equipment: "dumbbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Hammer-Curl.gif", 
        steps: ["Stance: Stand upright holding a dumbbell in each hand at your sides.", "The Grip: Maintain a neutral grip (palms facing your torso).", "The Curl: Exhale and curl the dumbbells up toward your shoulders like holding a hammer.", "The Lowering: Squeeze hard, then slowly lower the weights back down."],
        steps_id: ["Gaya Palu: Pegang dumbel dengan posisi jari netral (telapak berhadapan satu sama lain).", "Sikap Lurus: Tarik dan lipat pergelangan tangan ke atas secara vertikal tanpa memutar siku.", "Otot Target: Gerakan memalu ini menargetkan otot brakialis luar untuk menebalkan lengan samping.", "Rilis: Jepit padat urat-urat luar tersebut sebelum membiarkannya turun perlahan."] 
    },
    { 
        id: 44, name: "Waiter Curl", category: "strength", muscle: "biceps", equipment: "dumbbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Waiter-Curl.gif", 
        steps: ["Grip: Hold a single dumbbell vertically, cupping the top weight plate flat.", "Stance: Stand tall with your chest up and elbows tucked tightly.", "The Curl: Curl the dumbbell upwards, keeping your palms facing the ceiling.", "The Squeeze: Squeeze your biceps at the peak, then lower slowly."],
        steps_id: ["Teknik Nampan: Tahan pelat bagian atas dumbel tunggal menggunakan dua telapak tangan mendatar (seperti pelayan membawa nampan).", "Postur: Rapatkan siku sejajar tubuh agar berat terpusat.", "Curl: Angkat beban lurus ke arah dagu, jaga telapak selalu menengadah.", "Turun: Fokus pada puncak otot depan biseps lalu turunkan perlahan ke posisi rileks."] 
    },
    { 
        id: 45, name: "Concentration Curl", category: "strength", muscle: "biceps", equipment: "dumbbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Concentration-Curl.gif", 
        steps: ["Setup: Sit on a bench, legs wide. Rest the back of your working arm against your inner thigh.", "Positioning: Let the dumbbell hang down fully for a deep stretch.", "The Curl: Slowly curl the dumbbell upward toward your chest.", "The Lowering: Squeeze the bicep intensely, then lower the dumbbell with control."],
        steps_id: ["Duduk Spesifik: Buka kaki lebar di ujung bangku. Tancapkan punggung siku Anda ke sisi dalam paha.", "Gantungan Lurus: Biarkan dumbel jatuh menarik lengan memanjang lurus ke arah lantai.", "Konsentrasi: Tekuk siku ke arah bahu. Kaki berfungsi mencegah lengan bergerak mundur.", "Remasan: Pertahankan kontraksi di titik tertinggi lalu ulur otot secara perlahan menahan beban turun."] 
    },
    { 
        id: 46, name: "Dumbbell Preacher Curl", category: "strength", muscle: "biceps", equipment: "dumbbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Preacher-Curl.gif", 
        steps: ["Setup: Sit at a preacher bench. Place the back of your upper arm flat against the pad.", "Execution: Let your arm fully extend to stretch the bicep, then curl the dumbbell up.", "Focus: Focus strictly on the peak contraction at the top.", "Return: Lower the dumbbell slowly to the starting position."],
        steps_id: ["Bantalan Preacher: Jepit siku dan tricep pada bangku busa miring preacher sambil memegang dumbel.", "Tarikan Murni: Beban tak bisa didorong pakai tubuh. Murni gunakan lengan melipat dumbel naik.", "Fokus Otot: Tahan rasa panas tarikan gravitasi penuh pada bisep.", "Jatuh Pelan: Lepas perlahan beban untuk memberi robekan mikro otot yang lebih masif secara hati-hati."] 
    },
    { 
        id: 47, name: "Zottman Curl", category: "strength", muscle: "biceps", equipment: "dumbbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Zottman-Curl.gif", 
        steps: ["Setup: Stand holding dumbbells with a supinated (palms up) grip.", "Upward Phase: Curl the dumbbells up toward your shoulders normally.", "The Twist: At the top, pause and rotate your wrists so palms face downwards.", "Downward Phase: Slowly lower the dumbbells using this overhand grip, then rotate back to start."],
        steps_id: ["Awal Normal: Mulai lipat dumbel dari bawah menggunakan posisi telapak menghadap ke atas biasa.", "Angkat Atas: Selesaikan putaran hingga beban sampai ke dada.", "Putaran Zottman: Putar langsung pergelangan 180 derajat di atas, sehingga punggung tangan menghadap ke atas.", "Fase Turun: Turunkan pelan dumbel dengan posisi tangan terbalik tersebut untuk menghajar urat lengan luar."] 
    },

    // --- TRICEPS ---
    { 
        id: 48, name: "Tricep Pushdown", category: "strength", muscle: "triceps", equipment: "cables", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Triceps-Pushdown.gif", 
        steps: ["Setup: Grab the cable attachment with an overhand grip.", "Posture: Lock your elbows firmly against your ribs.", "The Push: Push the attachment straight down until your arms are fully straight.", "The Return: Slowly control the weight as it comes back up to chest level."],
        steps_id: ["Persiapan: Pegang palang kabel pada posisi katrol tinggi.", "Postur: Kunci siku Anda rapat-rapat di sisi pinggang.", "Dorong: Gunakan otot trisep belakang lengan untuk menekan palang ke bawah hingga lengan lurus sepenuhnya.", "Kembali: Tahan beban saat palang perlahan kembali naik ke arah dada."] 
    },
    { 
        id: 49, name: "EZ Bar Skullcrusher", category: "strength", muscle: "triceps", equipment: "ez bar", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/EZ-Bar-Skullcrusher.gif", 
        steps: ["Setup: Lie flat on a bench. Hold an EZ bar directly above your chest.", "The Drop: Shift your arms back 15 degrees. Bend only at your elbows to slowly lower the bar to your forehead.", "The Extension: Forcefully extend your elbows to push the bar back up."],
        steps_id: ["Posisi: Berbaring terlentang. Pegang EZ Bar lurus ke arah langit-langit.", "Menyeret Jatuh: Condongkan lengan agak miring 15 derajat ke arah kepala belakang. Tekuk siku menjatuhkan barbel hingga mendekati dahi.", "Dorongan Ekstensi: Tolak kembali batang tersebut lurus memanjang menggunakan otot trisep luar."] 
    },
    { 
        id: 50, name: "Triceps Dips", category: "strength", muscle: "triceps", equipment: "bodyweight", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Triceps-Dips.gif", 
        steps: ["Mounting: Jump up onto a set of parallel dip bars with arms fully extended.", "Posture: Keep your torso perfectly upright to isolate the triceps.", "The Descent: Bend your elbows to lower your body straight down until upper arms are parallel to the floor.", "The Push: Press your body weight back up forcefully."],
        steps_id: ["Tumpuan Udara: Naik ke tiang palang sejajar ganda dan tumpu massa tubuh dengan kedua lengan lurus.", "Vertikal: Jaga tubuh tetap lurus sempurna melihat ke depan agar beban jatuh di lengan belakang, bukan di dada.", "Turun: Turunkan badan perlahan hingga sudut siku menyentuh batas 90 derajat mendatar.", "Sentakan Lenting: Dorong naik cepat untuk meluruskan punggung tangan dan menekan otot trisep."] 
    },
    { 
        id: 51, name: "Dumbbell Overhead Extension", category: "strength", muscle: "triceps", equipment: "dumbbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Triceps-Extension.gif", 
        steps: ["Setup: Grip a heavy dumbbell with both hands, palms facing the ceiling.", "Positioning: Lift the dumbbell straight up overhead.", "Execution: Bend your elbows to lower the dumbbell directly behind your neck.", "The Press: Exhale and push the dumbbell back up to the starting position."],
        steps_id: ["Pegangan Nampan Atas: Pegang satu dumbel berat menggunakan paduan dua telapak menghadap langit.", "Posisi Puncak: Angkat lurus tepat membentang di atas ubun-ubun kepala Anda.", "Penurunan Belakang Leher: Tekuk siku ke bawah menjatuhkan beban lurus menyayat ke area punggung di belakang tulang leher.", "Pengangkatan: Paksa kembali tangan merentang menjulang langit-langit dengan memeras otot panjang lengan belakang."] 
    },
    { 
        id: 52, name: "Cable Overhead Triceps Extension", category: "strength", muscle: "triceps", equipment: "cables", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Cable-Triceps-Extension.gif", 
        steps: ["Setup: Attach a rope to a low cable pulley. Turn your back and bring the rope up behind your head.", "Stance: Take a split stance and lean slightly forward.", "The Extension: Keep elbows pointing up. Extend your arms forward and upward.", "The Return: Slowly let the cable pull hands back behind your head."],
        steps_id: ["Katrol Bawah: Pasang tali pada katrol bawah mesin kabel. Membelakangi mesin, tarik tali ke belakang tengkuk leher.", "Kuda-Kuda Depan: Posisikan satu kaki ke depan dan bungkukkan sedikit tubuh untuk menahan tarikan beban.", "Lontaran Siku: Luruskan lengan memanjang ke depan dan sedikit ke atas menjauhi area kepala belakang.", "Tarik Mundur Rilis: Tahan ayunan saat beban menarik kembali telapak merunduk memeluk leher belakang."] 
    },

    // --- CORE ---
    { 
        id: 53, name: "Plank", category: "strength", muscle: "core", equipment: "bodyweight", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Plank.gif", 
        steps: ["Positioning: Prop yourself up on your forearms and toes.", "Alignment: Ensure your body forms a perfectly straight line from head to heels.", "Engagement: Squeeze your core and glutes tightly.", "The Hold: Maintain this position while breathing steadily."],
        steps_id: ["Posisi: Menelungkup di lantai, bertumpu pada lengan bawah dan ujung jari kaki.", "Perataan Tubuh: Pastikan tubuh membentuk garis lurus yang rata dari kepala hingga tumit.", "Kencangkan: Kencangkan otot perut dan bokong secara maksimal.", "Tahan: Tahan posisi kaku ini selama durasi yang ditentukan sambil tetap bernapas normal."] 
    },
    { 
        id: 54, name: "Cable Crunch", category: "strength", muscle: "core", equipment: "cables", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Cable-Crunch.gif", 
        steps: ["Setup: Kneel facing the machine and grab the high pulley rope behind your neck.", "The Crunch: Contract your abdominals to curl your torso forward and downward.", "The Contraction: Exhale and squeeze your abs at the bottom.", "The Release: Slowly return to the upright kneeling position."],
        steps_id: ["Posisi Kabel Tinggi: Berlutut menghadap katrol tinggi dan tarik tali kabel agar kedua telapak berada di samping pelipis kepala.", "Lipatan Perut Tajam: Bungkukkan badan ke arah bawah paha dengan memutar engsel punggung sepenuhnya menyasar pusar perut.", "Buang Napas Bawah: Tahan kontraksi terkeras sejenak di paling bawah.", "Berdiri Berlutut: Tarik napas menahan beban saat posisi kembali lurus meninggi."] 
    },
    { 
        id: 55, name: "Russian Twist", category: "strength", muscle: "core", equipment: "medicine ball", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Russian-Twist.gif", 
        steps: ["Starting Position: Sit on the floor, leaning back slightly with feet off the ground.", "The Hold: Hold a medicine ball in front of your chest.", "The Twist: Rotate your torso to tap the ball lightly on the right side.", "The Alternate: Immediately twist back to tap the ball on the left side."],
        steps_id: ["Duduk Keseimbangan V: Duduk condong 45 derajat menahan gravitasi, lalu angkat kedua kaki menggantung ringan dari lantai.", "Dekap Bola Berat: Tahan plat beban atau bola medik di tengah-tengah ruang dada.", "Pemuntiran Silang Obliq Kanan: Ayun keras bola menyentuh lantai sisi pinggang bagian luar.", "Gempuran Cepat Kiri: Tarik ayun menyilang ke sisi pinggang lantai satunya. Terus bergerak ritmis memutar tubuh."] 
    },
    { 
        id: 56, name: "Hanging Leg Raise", category: "strength", muscle: "core", equipment: "bodyweight", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Hanging-Leg-Raise.gif", 
        steps: ["The Hang: Grasp a pull-up bar and hang completely still.", "The Lift: Keeping your legs straight, lift them up to form a 90-degree angle.", "Control: Do not use momentum or swing your body.", "The Lowering: Lower your legs slowly to maximize eccentric tension."],
        steps_id: ["Gantungan Mati: Bergelantungan santai dari tuas besi palang.", "Tembakan Mengunci Tungkai: Lenturkan perut dan angkat dua kaki kaku rata horizon menyayat depan badan.", "Haram Mengayun: Beban 100% dipompa murni tegangan perut tengah. Tubuh dilarang berayun membantu loncatan naik.", "Rilis Lambat Panjang: Jatuhkan tungkai panjang merentang bawah secara luar biasa melambat."] 
    },
    { 
        id: 57, name: "Ab Machine Crunch", category: "strength", muscle: "core", equipment: "machine", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Crunch-Machine.gif", 
        steps: ["Adjustment: Sit in the machine and hook your shins securely.", "Grip: Lightly grasp the handles without using arm strength.", "The Crunch: Aggressively crunch your torso forward.", "The Return: Slowly resist the weight stack as you uncurl."],
        steps_id: ["Tumpuan Sadel Busa: Sesuaikan posisi duduk sehingga penopang perut pas melintang menindih dada dan paha.", "Tangan Rileks: Tangan cukup nangkring, dilarang ikut menarik gulungan mesin beban ke bawah.", "Lipatan Ganas Bawah: Lipat badan melilit ke arah lutut murni melalui jaringan perut dalam yang mengeras.", "Memanjangkan Kembali Terukur: Kendurkan dan mundur secara sadar menghindari lepas beban secara kasar bertumpuk."] 
    },

    // --- FOREARMS ---
    { 
        id: 63, name: "Barbell Wrist Curl", category: "strength", muscle: "forearms", equipment: "barbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Wrist-Curl.gif", 
        steps: ["Setup: Sit on a bench, resting your forearms flat against your thighs.", "The Extension: Allow the barbell to roll down to the tips of your fingers.", "The Curl: Forcefully curl your wrists upward as high as they can go."],
        steps_id: ["Persiapan: Duduk di bangku, letakkan lengan bawah rata menempel di atas paha dengan pergelangan tangan menggantung.", "Buka: Biarkan barbel bergulir turun perlahan hingga ke ujung jari-jari Anda.", "Gulung: Gulung jari-jari Anda lalu tekuk pergelangan tangan ke atas sekuat mungkin untuk mengangkat barbel."] 
    },
    { 
        id: 64, name: "Dumbbell Reverse Wrist Curl", category: "strength", muscle: "forearms", equipment: "dumbbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Reverse-Wrist-Curl.gif", 
        steps: ["Setup: Hold a dumbbell in each hand using an overhand grip.", "Positioning: Rest your forearms on your thighs with wrists hanging over.", "The Movement: Curl your wrists upward toward the ceiling.", "The Return: Slowly lower the dumbbells back down to stretch."],
        steps_id: ["Duduk Tiarap Paha: Genggam dumbel dengan telapak menghadap aspal bawah lantai.", "Siklus Statis Gantung Tepi: Biarkan telapak menggantung bebas di tebing ujung celana paha batas lutut.", "Congkel Menukik Punggung Lengan Atas: Tengadahkan pergelangan naik lurus berlipat mendongak tajam langit plafon.", "Peluruhan Meregang Turun Jauh: Seret kendali berat terjatuh lepas sampai nol sudut regangan pergelangan ekstrim panjang."] 
    },
    { 
        id: 65, name: "Farmers Walk", category: "strength", muscle: "forearms", equipment: "kettlebell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Farmers-Walk.gif", 
        steps: ["The Pickup: Squat down with a flat back and grip two heavy kettlebells tightly.", "The Posture: Stand up straight. Pull your shoulders back and look straight ahead.", "The Walk: Walk forward using rapid, deliberate steps.", "The Finish: Continue for a set distance, maintaining a crushing grip."],
        steps_id: ["Angkut Bawah Lebar: Jongkok menggapai tumpukan berat dua besi dan genggam mematikan urat.", "Bangkit Menjaga Berdiri: Menapak kuat bumi dan tarik dada tegap tegak menghindari beban berayun menyambar kaki lateral.", "Jalan Pendek Taktikal Serbu Cepat: Langkah stabil minim guncangan maju panjang konsisten.", "Penyelesaian Garis Akhir: Melangkah sejauh jarak ukur tanpa menyerahkan rilis ujung kepal memutih sakit terbakar urat menekan sebelum taruh dasar."] 
    },
    { 
        id: 66, name: "EZ Bar Reverse Curl", category: "strength", muscle: "forearms", equipment: "ez bar", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/EZ-Bar-Reverse-Curl.gif", 
        steps: ["Stance: Stand straight. Hold an EZ bar with an overhand (pronated) grip.", "The Execution: Pin your elbows to your sides and curl the bar upward.", "The Eccentric: Lower the bar very slowly back to the start."],
        steps_id: ["Mundur Hadapan Kuda Kuda: Berdiri mantap. Pegang miring luar titik EZ bar memakai punggung telapak hadap wajah atas.", "Sodokan Ekstensor Balik Memompa Ke Langit Atas Pucuk Rusuk Belah: Tarik tekuk menyasar leher atas (kunci pinggang sikut mati).", "Beban Sentrifugal Merayap Lentur Pelan: Kendalikan gravitasi bar turun memudar kembali posisi tegak santai."] 
    },
    { 
        id: 67, name: "Behind The Back Barbell Wrist Curl", category: "strength", muscle: "forearms", equipment: "barbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Behind-The-Back-Barbell-Wrist-Curl.gif", 
        steps: ["Setup: Stand facing away from a barbell. Reach behind your back and grab the bar.", "Positioning: Let the bar hang freely behind your glutes with arms straight.", "The Curl: Curl the barbell upward by flexing your wrists toward the ceiling.", "The Release: Lower the weight back down slowly."],
        steps_id: ["Setup Menghadap Mundur Buta Penglihatan Palang Batang Panggul Kaku Garis Lurus: Punggung tancap membelakangi batang tarik menjambak luas sebidang lurus bahu.", "Isolasi Melayang Buritan Jatuh Rawan Sempurna Tegak Panjang: Luruskan sejajar tulang tanpa satu sikut pun membengkok.", "Peras Melintir Menusuk Melingkar Urat Jepit Dalam Langsung Tegang Atas: Gulung murni memakai tarikan pelintir urat dasar telapak tangan ke belakang pantat naik.", "Siksa Ekstrem Buka Jari Ujung Beban Menukik Gravitasi Tarik Pelan Tuntas Dalam Panjang Lentur Nol Rata: Biar menggelundung ujung kuku dan kerut kembali memuncak pelan pasti meradang tebal kuat."] 
    }
];