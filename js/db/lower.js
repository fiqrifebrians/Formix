const lowerWorkouts = [
    // --- LEGS ---
    { 
        id: 17, name: "Barbell Squat", category: "strength", muscle: "legs", equipment: "barbell", 
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
        id: 18, name: "Dumbbell Lunge", category: "strength", muscle: "legs", equipment: "dumbbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Lunge.gif", 
        steps: [
            "Starting Position: Stand completely upright, holding a moderately heavy dumbbell in each hand directly at your sides.", 
            "The Step: Take a controlled, exaggerated step forward with your right leg.", 
            "The Lunge: Drop your hips vertically straight down toward the floor. Both knees should bend to 90 degrees.", 
            "The Push-Off: Push forcefully off the heel of your front foot to return to the start."
        ],
        steps_id: [
            "Posisi Awal: Berdiri tegak lurus sambil memegang sepasang dumbel di sisi paha.",
            "Langkah Depan: Ambil satu langkah panjang ke depan dengan kaki kanan. Pijakkan telapak kaki depan dengan kuat.",
            "Turun: Turunkan pinggul secara tegak lurus ke bawah. Kedua lutut harus membentuk sudut 90 derajat.",
            "Dorongan Kembali: Dorong kuat-kuat menggunakan tumit kaki depan untuk kembali ke posisi berdiri."
        ] 
    },
    { 
        id: 19, name: "Leg Press", category: "strength", muscle: "legs", equipment: "machine", 
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
    { 
        id: 20, name: "Romanian Deadlift", category: "strength", muscle: "legs", equipment: "barbell", 
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
        id: 21, name: "Leg Extension", category: "strength", muscle: "legs", equipment: "machine", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/LEG-EXTENSION.gif", 
        steps: [
            "Adjustment: Sit on the leg extension machine. Adjust the lower roller pad so it rests comfortably on your lower shins.", 
            "Grip and Posture: Grip the handles firmly to anchor your upper body down.", 
            "The Extension: Extend your legs smoothly to push the roller pad upward.", 
            "The Squeeze: Hold the fully extended position for a second, then slowly lower the weight."
        ],
        steps_id: [
            "Pengaturan: Duduk di mesin Leg Extension. Tempatkan bantalan rol tepat di atas tulang kering/pergelangan kaki.",
            "Postur: Pegang erat gagang kursi untuk menahan tubuh agar bokong tidak naik. Punggung rata.",
            "Ekstensi Kaki: Gunakan kekuatan paha depan untuk menendang bantalan lurus ke atas hingga kaki terentang penuh.",
            "Kontraksi: Tahan sebentar di posisi tertinggi, lalu turunkan perlahan melawan beban."
        ] 
    },
    { 
        id: 22, name: "Barbell Hip Thrust", category: "strength", muscle: "legs", equipment: "barbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Hip-Thrust.gif", 
        steps: [
            "Setup: Sit flat on the floor with your shoulder blades resting against the edge of a bench. Roll a padded barbell over your hips.", 
            "Foot Placement: Plant your feet firmly, spaced shoulder-width apart.", 
            "The Thrust: Drive aggressively through your heels to thrust your hips explosively toward the ceiling.", 
            "The Lockout: Squeeze your glutes for a full second before lowering your hips back to the floor."
        ],
        steps_id: [
            "Persiapan: Duduk di lantai, sandarkan punggung atas di pinggir bangku datar. Tarik barbel busa ke pangkal panggul Anda.",
            "Posisi Kaki: Pijakkan kaki selebar bahu. Atur sudut tulang kering vertikal 90 derajat.",
            "Dorongan: Tekan kuat tumit ke lantai dan sentakkan panggul lurus mengarah ke langit-langit.",
            "Kunci Puncak: Remas otot bokong kuat-kuat selama satu detik sebelum menurunkannya perlahan."
        ] 
    },
    { 
        id: 23, name: "Glute Bridge", category: "strength", muscle: "legs", equipment: "bodyweight", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2022/02/Banded-Glute-Bridge.gif", 
        steps: [
            "Starting Position: Lie completely flat on your back. Bend your knees and place feet flat on the floor.", 
            "The Lift: Exhale and push firmly into the floor through your heels. Lift your hips high into the air.", 
            "The Hold: Squeeze your gluteal muscles tightly at the apex of the movement.",
            "The Return: Slowly lower your hips back down to lightly tap the mat."
        ],
        steps_id: [
            "Posisi Awal: Berbaring rileks di matras. Tekuk lutut dan pijakkan kaki rata di lantai.",
            "Angkat Panggul: Buang napas dan tekan kuat tumit Anda ke lantai untuk mengangkat bokong ke udara.",
            "Tahan Posisi: Kencangkan bokong sekeras mungkin saat berada di posisi miring lurus.",
            "Turun: Turunkan secara perlahan untuk mengulang gerakan sebelum menyentuh lantai penuh."
        ] 
    },
    { 
        id: 24, name: "Cable Pull Through", category: "strength", muscle: "legs", equipment: "cables", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/06/kettlebell-goblet-squat.gif", 
        steps: [
            "Setup: Attach a tricep rope handle to the lowest setting. Stand with your back facing the machine, straddling the cable.", 
            "Grip: Reach down and backward between your legs to grasp the rope.", 
            "The Hinge: Hinge backward deeply at the hips. Let the cable pull your hands backward through your legs.", 
            "The Extension: Squeeze your glutes and forcefully thrust your hips forward to stand upright."
        ],
        steps_id: [
            "Persiapan: Pasang tali pegangan di setelan paling bawah mesin kabel. Berdiri membelakangi katrol.",
            "Genggaman: Bungkukkan badan, raih tali di antara sela-sela paha.",
            "Membungkuk: Jaga lutut tidak terlalu ditekuk. Dorong bokong jauh ke belakang. Biarkan tali menarik tangan melalui celah paha.",
            "Berdiri Lurus: Gunakan otot bokong untuk mendorong panggul ke depan sambil berdiri tegak. (Bukan tarikan lengan)."
        ] 
    },
    { 
        id: 25, name: "Kettlebell Goblet Squat", category: "strength", muscle: "legs", equipment: "kettlebell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/06/kettlebell-goblet-squat.gif", 
        steps: [
            "Grip: Pick up a heavy kettlebell with both hands. Keep it pulled in tight against the center of your chest.", 
            "Stance: Stand with your feet set slightly wider than shoulder-width apart.", 
            "The Descent: Squat down deeply by pushing your hips back and down. Keep your chest up.", 
            "The Ascent: Drive forcefully through your heels to stand back up."
        ],
        steps_id: [
            "Genggaman: Pegang sebuah kettlebell secara vertikal tepat menempel di dada tengah Anda (goblet).",
            "Kuda-kuda: Berdiri sedikit lebih lebar dari bahu, ujung kaki menyorong ke luar.",
            "Turun: Lakukan squat dengan pantat menjorok ke belakang. Posisikan siku turun di area ruang dalam lutut.",
            "Naik: Dorong seluruh telapak kaki untuk berdiri dan meremas otot glutes lurus."
        ] 
    },
    { 
        id: 26, name: "Smith Machine Squat", category: "strength", muscle: "legs", equipment: "machine", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2024/10/smith-machine-squat.gif", 
        steps: [
            "Setup: Set the bar on the Smith Machine to shoulder height. Step under it.", 
            "Stance: Position your feet slightly forward of your hips. This allows greater focus on the quadriceps.", 
            "The Descent: Push your hips back and bend your knees to lower your body into a deep squat.", 
            "The Ascent: Press powerfully through your heels to return to the standing position."
        ],
        steps_id: [
            "Persiapan: Atur palang Smith Machine setinggi bahu. Masuk ke bawah palang dan putar untuk melepas kait pengaman.",
            "Postur Unik: Letakkan kaki sedikit lebih maju di depan pinggul untuk fokus otot quadriceps depan.",
            "Turun: Turunkan pinggul seperti posisi duduk di kursi maya.",
            "Dorongan: Dorong tumit untuk kembali berdiri tegak lurus."
        ] 
    },
    { 
        id: 27, name: "Dumbbell Goblet Squat", category: "strength", muscle: "legs", equipment: "dumbbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2023/01/Dumbbell-Goblet-Squat.gif", 
        steps: [
            "Grip: Hold a single dumbbell vertically by one end against your chest.", 
            "Stance: Stand with your feet slightly wider than shoulder-width apart.", 
            "The Squat: Lower your hips down and back, keeping your chest up.", 
            "The Drive: Push through your entire foot to stand back up straight."
        ],
        steps_id: [
            "Genggaman: Pegang ujung atas dumbel tegak lurus menempel sejajar ke dada.",
            "Kuda-kuda: Berdiri kaki selebar bahu. Jaga pandangan tetap ke depan.",
            "Squat: Turunkan bokong ke bawah, selipkan siku ke dalam lintasan lutut Anda.",
            "Kembali: Dorong kuat-kuat agar tubuh berdiri kembali tegak."
        ] 
    },
    { 
        id: 28, name: "Dumbbell Walking Lunge", category: "strength", muscle: "legs", equipment: "dumbbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2023/09/dumbbell-lunges.gif", 
        steps: [
            "Stance: Stand tall holding a dumbbell in each hand by your sides.", 
            "The Step: Take a long, controlled stride forward with your right foot. Drop your back knee.", 
            "The Lunge: Ensure your front thigh is parallel to the ground.", 
            "The Walk: Push off your front heel to step your left foot completely forward into the next lunge."
        ],
        steps_id: [
            "Postur: Berdiri tegak, tangan memegang dumbel di samping tubuh.",
            "Langkah Awal: Langkahkan kaki kanan panjang ke depan dan turunkan lutut belakang hampir menyentuh lantai.",
            "Batas Lunge: Paha depan wajib rata paralel dengan aspal lantai.",
            "Jalan Menyambung: Dorong tubuh langsung ke depan sehingga kaki belakang menyalip memotong menjadi lunge berikutnya."
        ] 
    },
    { 
        id: 29, name: "Leg Curl", category: "strength", muscle: "legs", equipment: "machine", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Leg-Curl.gif", 
        steps: [
            "Adjustment: Lie face down on the lying leg curl machine. Adjust the roller pad above the heels.", 
            "Posture: Keep your torso flat on the bench and grip the handles.", 
            "The Curl: Exhale and curl your legs upward, pulling the pad as close to your glutes as possible.", 
            "The Return: Inhale and lower your legs back to the starting position slowly."
        ],
        steps_id: [
            "Pengaturan: Tengkurap di mesin Lying Leg Curl. Atur penopang sepatu agar bantalan berada persis di tumit.",
            "Postur: Tubuh rata di bangku, tangan pegang gagang depan.",
            "Gerakan Curl: Tekuk kedua lutut menarik bantalan keras ke arah paha belakang bokong.",
            "Menurunkan: Tahan sedikit lalu kembalikan meluruskan kaki secara pelan-pelan."
        ] 
    },
    { 
        id: 30, name: "Dumbbell Romanian Deadlift", category: "strength", muscle: "legs", equipment: "dumbbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Romanian-Deadlift.gif", 
        steps: [
            "Setup: Stand upright holding a pair of dumbbells in front of your thighs.", 
            "The Hinge: With a slight, locked bend in your knees, push your hips far backward.", 
            "The Stretch: Lower the dumbbells by sliding them down the front of your legs until you feel a stretch.", 
            "The Extension: Squeeze your glutes and forcefully thrust your hips forward to stand."
        ],
        steps_id: [
            "Persiapan: Pegang pasang dumbel lurus di depan paha. Punggung rata.",
            "Tekuk Pinggul (Hinge): Tekuk lutut dan tahan posisinya. Turunkan tubuh dengan menyodorkan pinggul jauh ke belakang.",
            "Regangan Otot: Geser dumbel turun di area tulang kering. Berhentilah saat otot hamstring paha terasa tertarik.",
            "Berdiri: Dorong panggul depan, remas otot glutes untuk berdiri lurus tegap."
        ] 
    },

    // --- CALVES ---
    { 
        id: 58, name: "Standing Calf Raise", category: "strength", muscle: "calves", equipment: "bodyweight", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/06/Standing-Calf-Raise.gif", 
        steps: [
            "Setup: Stand on the edge of an elevated platform allowing your heels to hang completely off.", 
            "Balance: Hold onto a nearby wall lightly for upright balance.", 
            "The Raise: Exhale and push forcefully through the balls of your feet to raise your heels.", 
            "The Stretch: Inhale and slowly lower your heels significantly past the level of the step."
        ],
        steps_id: [
            "Pijakan Ambang: Menapak ujung kaki di anak tangga/balok, biarkan tumit menjuntai turun ke ruang hampa.",
            "Keseimbangan: Pegang dinding atau tiang santai hanya untuk menghindari oleng.",
            "Jinjit Melesat (Raise): Dorong pergelangan menukik menjangkau pucuk jinjitan teramat tinggi memaksimalkan otot betis.",
            "Regangan Terbalik: Benamkan tumit memanjang turun melampaui derajat pijakan balok kayu lurus ke lantai."
        ] 
    },
    { 
        id: 59, name: "Barbell Calf Raise", category: "strength", muscle: "calves", equipment: "barbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2022/04/Standing-Barbell-Calf-Raise.gif", 
        steps: [
            "Positioning: Load a barbell on a squat rack. Position it securely across your upper back.", 
            "Stance: Stand perfectly tall with your feet hip-width apart.", 
            "Execution: Push straight up onto your tiptoes, powerfully elevating your heels.", 
            "Return: Lower your heels back to the floor in a slow, controlled cadence."
        ],
        steps_id: [
            "Pikulan Beban: Taruh palang barbel merata menindih sumbu pundak badan atas.",
            "Berdiri Kuat: Rentang sepanggul. Ikat napas perut melindungi otot belakang.",
            "Jinjit Barbel: Lesatkan daya menekan lantai menggunakan otot pangkal jari sampai menyundul plafon atas.",
            "Penurunan Stabil: Ulurkan tumit perlahan menyerap pijak berat barbel kembali menyentuh lantai utuh."
        ] 
    },
    { 
        id: 60, name: "Donkey Calf Raise", category: "strength", muscle: "calves", equipment: "machine", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/09/Donkey-Calf-Raise.gif", 
        steps: [
            "Setup: Step onto the foot platform of a donkey calf raise machine. Bend forward 90 degrees.", 
            "Posture: Grip the handles. Keep your legs mostly straight with a micro-bend.", 
            "The Lift: Push powerfully up through the balls of your feet to raise the lever arm.", 
            "The Drop: Lower your heels down into the gap to stretch at the bottom."
        ],
        steps_id: [
            "Posisi Bungkuk: Rengkuh tapak platform. Bungkuk 90 derajat menyelam memikul landasan palang beban di area panggul punggung bawah.",
            "Tegak Menahan: Bekukan lutut kaki tegak berdiri, jangan meluruskan lutut mati total. Sisakan rentang mikro menekuk.",
            "Hentak Tuas Beban: Dorong panggul menumpu mengkristalkan kontraksi tungkai betis melesak naik sekeras tenaga.",
            "Turun Melesak Celah Jauh: Surut dan panjangkan tumit melorot menyasar celah dasar mesin agar regangan tumit lebar penuh."
        ] 
    },
    { 
        id: 61, name: "Dumbbell Calf Raise", category: "strength", muscle: "calves", equipment: "dumbbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Calf-Raise.gif", 
        steps: [
            "Grip: Grab a heavy pair of dumbbells with a neutral grip.", 
            "Positioning: Stand on a flat surface or place the front half of your feet on a raised weight plate.", 
            "The Movement: Elevate your body straight upward by driving through your toes.", 
            "Control: Pause at the highest point, then slowly lower your heels back down."
        ],
        steps_id: [
            "Cengkraman Santai Lurus: Genggam sepasang dumbel menggantung sejajar lurus santai di lengan paha luar.",
            "Balok Tinggi Tambahan: Berdiri pada ujung balok kayu untuk menambah jarak peregangan Achilles ke bawah.",
            "Akselerasi Jinjit Tajam Lurus Vertikal: Kunci sendi punggung. Sodok daya murni menendang bumi dari sendi jinjit ujung.",
            "Deselerasi Bertahap Tahan Rem: Berikan penundaan sejenak lalu surut menjatuhkan perlahan mundur tertahan menahan efek gravitasi."
        ] 
    },
    { 
        id: 62, name: "Seated Calf Raise", category: "strength", muscle: "calves", equipment: "machine", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/06/Lever-Seated-Calf-Raise.gif", 
        steps: [
            "Setup: Sit upright on the seated calf raise machine. Position the weighted pads over your lower thighs.", 
            "Release: Push up slightly with your toes to disengage the safety lever.", 
            "The Stretch: Slowly lower your heels down toward the floor to stretch the soleus muscle.", 
            "The Contraction: Push powerfully upward raising your heels as high as possible."
        ],
        steps_id: [
            "Posisi Sadel Jepit Mesin Betis Lebar: Duduk tegak di sadel. Taruh jepitan bantalan plat di atas tempurung sendi lutut.",
            "Rilis Kebebasan Tarik Pasak Kunci: Berikan daya sentak congkel sedikit tuas ujung lalu geser lepaskan pasak penahan roda mesin.",
            "Menyelam Tenggelam Renggang Soleus Otot: Rem pelan kemerosotan jatuh beban hingga otot tapak dasar betis ketarik putus regang maksimal.",
            "Kontraksi Paksa Melesat Puncak Mentok Dorongan Laju: Tendang membal pantul plat beban tersebut setinggi kapasitas batas ujung atas telapak lentur."
        ] 
    }
];