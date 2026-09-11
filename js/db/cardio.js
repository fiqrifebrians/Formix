const cardioWorkouts = [
    { 
        id: 68, name: "Burpee Long Jump", category: "cardio", muscle: "cardio", equipment: "bodyweight", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2025/10/Burpee-Long-Jump.gif", 
        steps: [
            "Drop your hips and place hands on the floor.",
            "Kick legs back and perform a strict push-up.",
            "Hop feet back to hands, then leap forward as far as possible.",
            "Land softly and drop immediately into the next rep."
        ],
        steps_id: [
            "Turunkan badan dan letakkan telapak tangan di lantai.",
            "Lontarkan kaki ke belakang dan lakukan satu kali push-up penuh.",
            "Tarik kaki kembali ke depan, lalu ayunkan lengan dan lompat jauh ke depan secara horizontal.",
            "Mendarat dengan lutut mengeper, lalu langsung ulangi gerakan."
        ] 
    },
    { 
        id: 69, name: "Navy Seal Burpee", category: "cardio", muscle: "cardio", equipment: "bodyweight", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2023/10/Navy-Seal-Burpee.gif", 
        steps: [
            "Drop into a plank position.",
            "Do a push-up, then bring your right knee up to your chest.",
            "Do a second push-up, then bring your left knee up.",
            "Do a third push-up, jump feet to hands, and leap vertically."
        ],
        steps_id: [
            "Jatuhkan tubuh ke posisi plank (push-up).",
            "Lakukan push-up. Saat di atas, tarik lutut kanan menyentuh dada lalu kembalikan.",
            "Lakukan push-up kedua. Saat di atas, tarik lutut kiri menyentuh dada lalu kembalikan.",
            "Lakukan push-up ketiga, tarik kaki ke depan, lalu melompat setinggi mungkin ke udara."
        ] 
    },
    { 
        id: 70, name: "Bear Crawl", category: "cardio", muscle: "cardio", equipment: "bodyweight", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Bear-Crawl.gif", 
        steps: [
            "Start on all fours with back flat.",
            "Lift knees slightly off the floor.",
            "Step forward with right hand and left foot simultaneously.",
            "Continue crawling smoothly without letting knees touch the ground."
        ],
        steps_id: [
            "Mulai dengan posisi merangkak, punggung lurus.",
            "Angkat lutut mengambang sekitar 5 cm dari lantai.",
            "Melangkah maju dengan menggerakkan tangan kanan dan kaki kiri secara bersamaan.",
            "Terus merayap dengan gerakan menyilang. Jangan biarkan lutut menyentuh lantai."
        ] 
    },
    { 
        id: 71, name: "Power Lunge", category: "cardio", muscle: "cardio", equipment: "bodyweight", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/05/Power-Lunge.gif", 
        steps: [
            "Begin in a lunge position.",
            "Lower hips slightly, then drive up explosively into the air.",
            "Quickly switch leg positions while mid-air.",
            "Land softly back into a lunge and repeat."
        ],
        steps_id: [
            "Mulai dari posisi lunge (satu kaki ditekuk di depan, satu di belakang).",
            "Turunkan pinggul sedikit lalu lompat tinggi secara eksplosif.",
            "Saat melayang di udara, tukar posisi kaki depan dan belakang dengan cepat.",
            "Mendarat dengan mulus kembali ke posisi lunge dan ulangi."
        ] 
    },
    { 
        id: 72, name: "Running", category: "cardio", muscle: "cardio", equipment: "bodyweight", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/04/Running.gif", 
        steps: [
            "Maintain a tall posture with a slight forward lean.",
            "Land softly on your mid-foot.",
            "Swing arms naturally in rhythm with your strides.",
            "Maintain a consistent breathing pace."
        ],
        steps_id: [
            "Berlari dengan postur tubuh tegak, condong sedikit ke depan dari pergelangan kaki.",
            "Berfokuslah untuk mendarat menggunakan bagian tengah telapak kaki, bukan hentakan tumit keras.",
            "Ayunkan lengan secara seirama dan lurus sejajar dengan tubuh.",
            "Jaga ritme napas yang konstan untuk membangun stamina."
        ] 
    },
    { 
        id: 73, name: "Sprint", category: "cardio", muscle: "cardio", equipment: "bodyweight", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Sprint.gif", 
        steps: [
            "Lean forward and push off aggressively.",
            "Drive knees high up with each stride.",
            "Pump arms forcefully in a straight line.",
            "Maintain 100% effort for short intervals."
        ],
        steps_id: [
            "Condongkan badan dan tolak lantai sekuat tenaga.",
            "Angkat lutut tinggi-tinggi dengan gerakan cepat pada setiap langkah.",
            "Ayunkan tangan dengan keras dan lurus membelah udara.",
            "Keluarkan usaha maksimal (100% kecepatan) selama rentang waktu singkat."
        ] 
    },
    { 
        id: 74, name: "Jump Rope", category: "cardio", muscle: "cardio", equipment: "bodyweight", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Jump-Rope.gif", 
        steps: [
            "Keep elbows tucked to your sides.",
            "Rotate the rope using only small wrist motions.",
            "Jump lightly on the balls of your feet just enough to clear the rope.",
            "Maintain a steady, bouncing rhythm."
        ],
        steps_id: [
            "Kunci siku Anda rapat di samping tulang rusuk.",
            "Putar tali karet hanya menggunakan pergerakan pergelangan tangan.",
            "Lompat kecil menggunakan ujung telapak kaki, cukup agar tali bisa lewat di bawah kaki.",
            "Pertahankan ritme loncatan yang stabil dan ringan."
        ] 
    },
    { 
        id: 75, name: "Stationary Bike", category: "cardio", muscle: "cardio", equipment: "machine", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Stationary-Bike.gif", 
        steps: [
            "Adjust saddle height to allow a slight knee bend at the bottom of the stroke.",
            "Sit upright and grip handlebars.",
            "Pedal in smooth circular motions, pushing down and pulling up.",
            "Keep a steady cadence."
        ],
        steps_id: [
            "Atur kursi agar kaki sedikit menekuk saat pedal berada di posisi paling bawah.",
            "Duduk tegak, pegang setang, dan pastikan punggung tidak terlalu membungkuk.",
            "Kayuh secara melingkar mulus (dorong ke bawah dan tarik ke atas).",
            "Jaga putaran kayuhan (RPM) tetap stabil dan konstan."
        ] 
    },
    { 
        id: 76, name: "Treadmill", category: "cardio", muscle: "cardio", equipment: "machine", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Treadmill.gif", 
        steps: [
            "Stand on side rails, start the belt, then carefully step on.",
            "Walk or run upright without heavily relying on handrails.",
            "Keep an even stride and look straight forward.",
            "Gradually lower the speed to cool down before stopping."
        ],
        steps_id: [
            "Berdiri di pinggir karpet treadmill, mulai nyalakan mesin, baru melangkah ke tengah.",
            "Jalan atau lari dengan postur tegak. Usahakan tangan tidak berpegangan pada mesin.",
            "Jaga langkah tetap stabil dan pandangan lurus ke depan.",
            "Perlahan turunkan kecepatan untuk pendinginan sebelum mematikan mesin sepenuhnya."
        ] 
    },
    { 
        id: 77, name: "Walk Wave Machine", category: "cardio", muscle: "cardio", equipment: "machine", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/06/Walk-Wave-Machine.gif", 
        steps: [
            "Mounting: Carefully step onto the foot pedals of the wave/arc machine.",
            "The Motion: Begin shifting your weight from side to side in a smooth, wave-like trajectory.",
            "Core Engagement: Keep your core tight to stabilize your body.",
            "Pacing: Establish a rhythmic, continuous sweeping motion."
        ],
        steps_id: [
            "Naiki perlengkapan tapak ombak pelan, raih pegangan agar tidak tergelincir lintasan melengkungnya.",
            "Ayun Diagonal Miring: Operkan berat memindahkan pusat daya lentur mengayun memutar geser mendatar ke kiri kanan bagai seluncur es.",
            "Tancap otot sabuk pinggang menahan getaran laju mesin yang melayang samping menguras keseimbangan.",
            "Rapatkan dorongan kaki tempo tak putus menyapu gerakan bolak-balik tanpa jeda untuk stimulasi jantung prima."
        ] 
    },
    { 
        id: 78, name: "Rowing Machine", category: "cardio", muscle: "cardio", equipment: "machine", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Rowing-Machine.gif", 
        steps: [
            "Catch: Slide forward, bend knees, and grab the handle with arms straight.",
            "Drive: Push hard against the footplates with your legs.",
            "Finish: Lean back slightly and pull the handle to your lower ribs.",
            "Recovery: Extend arms, hinge forward, and slide back to the start."
        ],
        steps_id: [
            "Awalan: Lipat lutut meluncur ke depan, pegang tuas penarik dengan lengan lurus.",
            "Dorongan: Dorong pijakan kaki sekuat tenaga untuk meluncur mundur. Punggung dan lengan tetap lurus.",
            "Akhir Tarikan: Condongkan punggung sedikit ke belakang dan tarik tuas dengan kuat ke arah dada bawah.",
            "Pemulihan: Luruskan lengan kembali, bungkukkan badan, dan biarkan kursi meluncur perlahan ke posisi awal."
        ] 
    },
    { 
        id: 79, name: "Stair Climber Machine", category: "cardio", muscle: "cardio", equipment: "machine", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Stair-Climber.gif", 
        steps: [
            "Setup: Step onto the revolving staircase. Set a moderate speed.",
            "Posture Warning: Stand totally upright. Do not hunch over the console.",
            "The Step: Place your entire foot onto each step.",
            "Execution: Push firmly down through your heel to step up."
        ],
        steps_id: [
            "Setup Mesin Tangga Putar Bising: Merapat menaiki mesin yang menyeret turun tanpa henti ini.",
            "Larang Membungkuk Beban: Tegakkan kepala pundak, jangan membungkuk memeluk layar panel penyangga melainkan melangkahlah tegak murni.",
            "Jejak Pijakan Melingkup Telapak: Jejak datar (bukan cuma jinjit ujung). Tapakkan pijak melangkah agar otot belakang ditarik sempurna.",
            "Daki tanjakan ini berlarut-larut konstan stabil tahan siksaan ritme lurus sampai batas waktu detak jantung tercapai cepat letih."
        ] 
    },
    { 
        id: 80, name: "Elliptical Machine", category: "cardio", muscle: "cardio", equipment: "machine", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Elliptical-Machine.gif", 
        steps: [
            "Setup: Step onto the foot pedals and grab the moving handrails.",
            "Posture: Stand tall, keeping your head up. Do not slouch.",
            "The Motion: Begin pedaling in a smooth, forward, elliptical motion.",
            "Total Body Sync: Push and pull the handrails in synchronized rhythm with your legs."
        ],
        steps_id: [
            "Ambil Pijakan Alat Lari Lancar Mulus: Naikkan kaki di pedal lebar yang siap memandu lengkung oval sempurna. Cengkeram gagang tuas bergerak.",
            "Tegakkan Tulang Lurus: Menatap depan membusung (core ditegangkan). Jangan membongkok lemas.",
            "Putaran Lintas Elips: Gowes miring mendatar menekan telapak seutuhnya. Rangkaikan rima putar lari menggelinding melayang oval di hampa udara.",
            "Sinergi Dorong Tarik Lengan Tuas Terpadu: Gempur padu tangan menarik/mendorong tongkat sejajar kaki menendang ayun konstan tak henti lurus keringat."
        ] 
    },
    { 
        id: 81, name: "Mountain Climber", category: "cardio", muscle: "cardio", equipment: "bodyweight", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Mountain-Climber.gif", 
        steps: [
            "Start in a high plank position.",
            "Drive one knee forcefully toward your chest.",
            "Quickly switch legs in a rapid, running motion.",
            "Keep your hips low and stable."
        ],
        steps_id: [
            "Mulai dengan posisi push-up (plank tinggi) dengan lengan lurus.",
            "Tarik satu lutut ke arah dada bagian bawah secara cepat.",
            "Ganti posisi kaki secara bergantian dengan gerakan lari yang sangat cepat.",
            "Pastikan bokong tetap rendah dan rata, jangan memantul tinggi ke udara."
        ] 
    },
    { 
        id: 82, name: "Power Skips", category: "cardio", muscle: "cardio", equipment: "bodyweight", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2022/02/Power-Skips.gif", 
        steps: [
            "Step forward slightly to load the jump.",
            "Drive one knee forcefully upward while jumping as high as possible.",
            "Thrust the opposite arm upward for momentum.",
            "Land softly and alternate sides seamlessly."
        ],
        steps_id: [
            "Melangkah pendek ke depan untuk memberi daya lontaran awal.",
            "Lompat setinggi mungkin dengan menarik satu lutut tajam ke atas.",
            "Ayunkan tangan yang berlawanan ke atas untuk menambah momentum terbang.",
            "Mendarat mulus dan langsung bergantian kaki saat melakukan lompatan berikutnya."
        ] 
    },
    { 
        id: 83, name: "Bicycle Crunch", category: "cardio", muscle: "cardio", equipment: "bodyweight", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Bicycle-Crunch.gif", 
        steps: [
            "Lie flat with hands gently behind your head.",
            "Crunch up and twist, bringing opposite elbow to opposite knee.",
            "Simultaneously extend the other leg straight out.",
            "Alternate sides in a fluid pedaling motion."
        ],
        steps_id: [
            "Berbaring di lantai, letakkan jari ringan di belakang telinga (jangan menarik leher).",
            "Angkat bahu dan putar dada. Sentuh lutut kanan menggunakan siku tangan kiri.",
            "Secara bersamaan, luruskan kaki kiri mengambang di atas lantai.",
            "Ulangi gerakan bergantian arah secara mengalir seperti mengayuh sepeda."
        ] 
    },
    { 
        id: 84, name: "Butt Kicks", category: "cardio", muscle: "cardio", equipment: "bodyweight", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/04/Butt-Kicks.gif", 
        steps: [
            "Stand tall and brace your core.",
            "Begin jogging in place.",
            "Rapidly kick your heels backward attempting to strike your glutes.",
            "Maintain a fast, rapid-fire pace."
        ],
        steps_id: [
            "Berdiri dengan dada membusung tegak dan punggung lurus.",
            "Mulai berlari kecil (jogging) di tempat.",
            "Ayunkan tendangan kaki ke belakang hingga tumit sepatu memukul bokong Anda.",
            "Lakukan gerakan menendang bokong ini dengan ritme langkah yang cepat."
        ] 
    },
    { 
        id: 85, name: "Plyo Jacks", category: "cardio", muscle: "cardio", equipment: "bodyweight", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/05/Plyo-Jacks.gif", 
        steps: [
            "Begin standing tall with your feet together.",
            "Quickly jump your feet out wide while dropping your hips deep into a squat.",
            "Swing your arms straight up and overhead until your hands meet.",
            "Explosively push through the floor to jump back up to the start."
        ],
        steps_id: [
            "Berdiri lurus rapat kaki di landasan.",
            "Jatuh Terjun Payung Meluncur Melebar Hantaman Lurus Tengkuk Drop Squat Wide Plyometric mengeper bawah mendarat renggang.",
            "Ayun Menampar Angin Lurus Langit Puncak Tegang Merentang Overhead Swing sempurna menampar tapak tangan atas.",
            "Sentak Tarikan Melayang Merapatkan Kembali Mengulangi Lontaran Siklus Membakar Lelah Kardio Brutal Letih Stamina Tuntas."
        ] 
    },
    { 
        id: 86, name: "Jumping Jack", category: "cardio", muscle: "cardio", equipment: "bodyweight", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Jumping-jacks.gif", 
        steps: [
            "Stand upright with feet together and arms at your sides.",
            "Jump up while spreading your legs out wide.",
            "Simultaneously sweep your arms upward to touch hands overhead.",
            "Jump again to return to the starting position."
        ],
        steps_id: [
            "Mulai dengan berdiri tegap, kaki rapat, lengan lurus santai di samping.",
            "Melompat ringan sambil membuka kedua kaki lebih lebar dari bahu.",
            "Secara bersamaan, ayunkan tangan ke atas hingga saling bersentuhan di atas kepala.",
            "Lompat lagi untuk menutup kaki dan menurunkan lengan kembali ke posisi awal."
        ] 
    },
    { 
        id: 87, name: "High Knee Skips", category: "cardio", muscle: "cardio", equipment: "bodyweight", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/05/High-Knee-Skips.gif", 
        steps: [
            "Begin a skipping motion moving forward or in place.",
            "Aggressively drive your lead knee straight up into the air.",
            "Pump your opposite arm forward vigorously.",
            "Land softly and immediately transition to the opposite leg."
        ],
        steps_id: [
            "Awalan Jingkat Lenting Udara Murni: Mulai berjingkat bergantian di posisi statis atau berjalan maju depan terbang.",
            "Tembakan Lutut Puncak Menancap Awan: Tarik melontarkan sendi lutut setajam-tajamnya meluruskan pinggang sejajar ke dada atas membeku murni meroket.",
            "Piston Tangan Penyeimbang Gaya Gravitasi Ayunan Stabil Silang Maju Meredam Kaku Tegak Meluncur Lembut Hampa Udara Konsentrasi Daya Lontar Ayun.",
            "Pendaratan Lentur Lentik Membal Elastis Gesit Tarik Cepat Sesaat Nyentuh Membakar Rima Napas Tahan Konstan Terus Cepat Ganti Menit Tak Henti Berdenyut Lelah Bugar."
        ] 
    }
];