const muscles = [
    { id: "chest", name: "Chest", name_id: "Dada" },
    { id: "back", name: "Back", name_id: "Punggung" },
    { id: "legs", name: "Legs", name_id: "Kaki" },
    { id: "shoulders", name: "Shoulders", name_id: "Bahu" },
    { id: "biceps", name: "Biceps", name_id: "Bisep" },
    { id: "triceps", name: "Triceps", name_id: "Trisep" },
    { id: "core", name: "Core", name_id: "Otot Inti (Core)" },
    { id: "calves", name: "Calves", name_id: "Betis" },
    { id: "forearms", name: "Forearms", name_id: "Lengan Bawah" },
    { id: "cardio", name: "Cardio", name_id: "Kardio" }
];

const equipments = [
    { id: "bodyweight", name: "Bodyweight", name_id: "Tanpa Alat (Bodyweight)" },
    { id: "dumbbell", name: "Dumbbell", name_id: "Dumbel" },
    { id: "barbell", name: "Barbell", name_id: "Barbel" },
    { id: "machine", name: "Machine", name_id: "Mesin" },
    { id: "cables", name: "Cables", name_id: "Kabel" },
    { id: "kettlebell", name: "Kettlebell", name_id: "Kettlebell" },
    { id: "resistance band", name: "Resistance Band", name_id: "Karet Resistensi" },
    { id: "medicine ball", name: "Medicine Ball", name_id: "Medicine Ball" },
    { id: "ez bar", name: "EZ Bar", name_id: "EZ Bar" }
];

const workoutDB = [
    // ================= CHEST =================
    { 
        id: 1, name: "Barbell Bench Press", category: "strength", muscle: "chest", equipment: "barbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Bench-Press.gif", 
        steps: [
            "Positioning: Lie completely flat on the bench. Ensure your feet are planted firmly on the ground, creating a stable base. Retract your scapula (pinch your shoulder blades together) to protect your rotator cuffs and push your chest up.", 
            "The Grip: Reach up and grip the bar with your hands placed slightly wider than shoulder-width apart. Wrap your thumbs fully around the bar for safety (avoid a 'suicide' or thumbless grip). Your wrists should remain as straight as possible.", 
            "The Descent: Unrack the bar by straightening your arms. Inhale deeply, brace your core, and lower the barbell slowly and methodically until it lightly touches your mid-chest area. Keep your elbows tucked at about a 45-degree angle to your body; flaring them out completely to 90 degrees increases the risk of shoulder impingement.", 
            "The Press: Exhale forcefully and drive the barbell back up to the starting position. Push the bar in a slight arc toward your upper chest, pressing through your palms. Fully extend your arms without aggressively locking out the elbow joints at the very top."
        ],
        steps_id: [
            "Posisi: Berbaring rata di atas bangku. Pastikan telapak kaki menapak kuat di lantai untuk stabilitas. Tarik tulang belikat ke belakang untuk melindungi bahu dan membusungkan dada.",
            "Genggaman: Pegang barbel sedikit lebih lebar dari bahu. Lingkarkan ibu jari sepenuhnya pada palang (hindari genggaman tanpa ibu jari). Jaga pergelangan tangan tetap lurus.",
            "Menurunkan Beban: Angkat barbel dari rak dengan meluruskan lengan. Tarik napas dalam, kencangkan perut, dan turunkan barbel perlahan hingga menyentuh bagian tengah dada. Jaga siku pada sudut 45 derajat terhadap tubuh.",
            "Dorongan: Hembuskan napas dan dorong barbel kembali ke posisi awal. Luruskan lengan tanpa mengunci siku sepenuhnya di posisi puncak."
        ] 
    },
    { 
        id: 2, name: "Push-Up", category: "strength", muscle: "chest", equipment: "bodyweight", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Push-Up.gif", 
        steps: [
            "Starting Stance: Begin face down on the floor in a high plank position. Place your palms firmly on the ground, spaced just slightly wider than your shoulders. Your legs should be extended straight behind you with your toes gripping the floor.", 
            "Body Alignment: Engage your abdominal muscles deeply, squeeze your glutes, and ensure your body forms a perfectly straight, rigid line from the top of your head down to your heels. Do not let your hips sag toward the floor or pike upward into the air.", 
            "Lowering Phase: Take a deep breath in and slowly lower your entire body by bending your elbows. Keep your elbows tracking backward at roughly a 45-degree angle rather than flaring straight out. Descend until your chest is just a fraction of an inch above the ground.", 
            "Pushing Phase: Exhale and press your hands firmly and evenly into the floor. Drive your body back up to the starting position in one fluid, controlled motion, maintaining your rigid body alignment."
        ],
        steps_id: [
            "Posisi Awal: Mulai dalam posisi plank tinggi. Letakkan telapak tangan rata di lantai, sedikit lebih lebar dari bahu. Luruskan kaki ke belakang dengan jari kaki menumpu di lantai.",
            "Postur Tubuh: Kencangkan otot perut dan bokong, pastikan tubuh membentuk garis lurus dari kepala hingga tumit. Jangan biarkan pinggul melorot.",
            "Fase Turun: Tarik napas dan turunkan tubuh perlahan dengan menekuk siku. Jaga siku mengarah ke belakang pada sudut 45 derajat. Turunkan hingga dada hampir menyentuh lantai.",
            "Fase Dorong: Hembuskan napas dan dorong lantai dengan kuat. Kembalikan tubuh ke posisi awal dengan satu gerakan terkontrol."
        ] 
    },
    { 
        id: 3, name: "Dumbbell Fly", category: "strength", muscle: "chest", equipment: "dumbbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Fly.gif", 
        steps: [
            "Setup: Grab a pair of moderately weighted dumbbells and lie completely flat on your back on a weight bench. Press the dumbbells straight up directly over your chest, ensuring your palms are facing each other (a neutral grip).", 
            "Arm Position: Establish a slight, fixed bend in your elbows. It is critical to maintain this exact angle throughout the entire movement—this is a hugging motion, not a pressing motion. This protects the elbow joint from excessive strain.", 
            "The Stretch: Inhale and slowly lower the dumbbells out to your sides in a wide, sweeping arc. Continue lowering until you feel a deep, significant stretch across your pectoral muscles. Do not lower past the point of shoulder comfort or where your upper arms drop below parallel to the floor.", 
            "The Contraction: Exhale and reverse the motion, using your chest muscles to pull the dumbbells back together at the top. Follow the exact same wide arc you used to lower them, imagining you are wrapping your arms around a large tree."
        ],
        steps_id: [
            "Persiapan: Pegang sepasang dumbel dan berbaring telentang di atas bangku. Dorong dumbel lurus ke atas tepat di atas dada, telapak tangan saling berhadapan.",
            "Posisi Lengan: Tekuk siku sedikit saja dan kunci posisi tersebut. Sangat penting menjaga sudut siku ini tetap—ini adalah gerakan seperti memeluk pohon, bukan mendorong.",
            "Regangan: Tarik napas dan turunkan dumbel ke samping dalam lintasan melengkung yang lebar. Lanjutkan hingga terasa regangan penuh pada otot dada bagian luar.",
            "Kontraksi: Hembuskan napas dan gunakan otot dada untuk menarik dumbel kembali ke atas melalui lintasan lengkung yang sama."
        ] 
    },
    { 
        id: 4, name: "Cable Crossover", category: "strength", muscle: "chest", equipment: "cables", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Cable-Crossover.gif", 
        steps: [
            "Preparation: Stand exactly in the center of a dual cable crossover machine. Set both pulleys to the highest position available and grasp a single-hand D-handle attachment in each hand.", 
            "Posture: Take one large step forward with either foot to stagger your stance for superior balance and leverage. Lean your torso slightly forward (about 15 to 30 degrees) from your hips, and brace your abdominal muscles.", 
            "The Movement: With a slight bend locked into your elbows, pull the handles forward and downward in a wide, sweeping motion. Focus on pulling from your chest, bringing your hands together until they meet or cross over each other directly in front of your mid-section or waist.", 
            "Return: Slowly and smoothly allow the resistance of the cables to pull your arms back up and out to the starting position. Ensure you feel a prominent stretch in your chest before initiating the next repetition."
        ],
        steps_id: [
            "Persiapan: Berdiri di tengah mesin kabel (cable crossover). Atur kedua katrol pada posisi paling tinggi dan genggam gagang di masing-masing tangan.",
            "Postur: Ambil satu langkah ke depan agar tubuh lebih seimbang. Condongkan tubuh sedikit ke depan dari pinggul dan kencangkan perut.",
            "Gerakan: Dengan siku sedikit tertekuk, tarik gagang ke depan dan ke bawah dalam gerakan menyapu. Fokus gunakan otot dada hingga kedua tangan bertemu di depan pinggang.",
            "Kembali: Tahan beban saat membiarkan kabel menarik lengan Anda perlahan ke posisi merentang awal."
        ] 
    },
    { 
        id: 5, name: "Resistance Band Chest Press", category: "strength", muscle: "chest", equipment: "resistance band", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2022/05/Standing-incline-chest-press.gif", 
        steps: [
            "Anchoring: Securely attach the center of a heavy-duty resistance band to a sturdy pole, closed door frame, or wall anchor point positioned exactly at your chest height.", 
            "Stance: Grab one handle (or end of the band) in each hand. Turn to face completely away from the anchor point. Step forward until there is strong tension in the band before you even begin the press. Keep your elbows up at chest level, pointing slightly down.", 
            "Pressing: Exhale and push the handles straight out directly in front of you. Fully extend your arms, squeezing your chest muscles intensely as your hands converge slightly at the end of the movement.", 
            "Eccentric Phase: Inhale and strictly resist the pulling force of the band as you slowly bring your hands back toward your chest, taking 2-3 seconds to complete the negative portion of the repetition."
        ],
        steps_id: [
            "Jangkar: Ikatkan bagian tengah karet resistensi (resistance band) pada tiang atau pintu dengan aman, tepat setinggi dada.",
            "Kuda-kuda: Pegang ujung karet di kedua tangan. Berdiri membelakangi titik jangkar dan melangkah maju hingga karet terasa kencang. Angkat siku setinggi dada.",
            "Dorongan: Hembuskan napas dan dorong tangan lurus ke depan dada. Luruskan lengan dan kencangkan otot dada di akhir gerakan.",
            "Menahan Tarikan: Tarik napas dan perlahan tahan tarikan karet saat Anda menarik tangan kembali ke arah dada selama 2-3 detik."
        ] 
    },

    // ================= BACK =================
    { 
        id: 6, name: "Pull-Up", category: "strength", muscle: "back", equipment: "bodyweight", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Pull-up.gif", 
        steps: [
            "The Grip: Stand directly beneath a secure pull-up bar. Reach up or jump to grasp the bar with an overhand, pronated grip (palms facing completely away from your body). Your hands should be placed comfortably wider than your shoulders.", 
            "The Hang: Allow your body to hang freely in a 'dead hang'. Cross your ankles behind you, squeeze your glutes, and engage your core heavily. This creates full-body tension and prevents unwanted swinging or momentum.", 
            "The Pull: Initiate the movement strictly by depressing your scapula (pulling your shoulder blades down and back together). Immediately follow by driving your elbows straight down toward your sides/floor. Pull your entire body upward until your chin clears the height of the bar.", 
            "The Descent: Do not drop. Lower yourself back down to the starting position in a slow, highly controlled manner until your arms are fully extended again, completing the repetition."
        ],
        steps_id: [
            "Genggaman: Berdiri di bawah palang besi. Pegang palang dengan telapak tangan menghadap ke depan (menjauhi tubuh), jarak tangan lebih lebar dari bahu.",
            "Menggantung: Biarkan tubuh menggantung santai. Silangkan pergelangan kaki, kencangkan perut dan bokong untuk menahan tubuh agar tidak berayun.",
            "Tarikan: Tarik tulang belikat Anda ke bawah terlebih dahulu. Setelah itu, tarik siku lurus ke bawah untuk mengangkat tubuh hingga dagu melewati palang.",
            "Turunkan: Jangan jatuhkan badan. Turunkan tubuh secara terkontrol dan perlahan hingga lengan kembali lurus sepenuhnya."
        ] 
    },
    { 
        id: 7, name: "Barbell Row", category: "strength", muscle: "back", equipment: "barbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/04/Reverse-Grip-Barbell-Row.gif", 
        steps: [
            "Starting Position: Stand with your feet about shoulder-width apart, with your mid-foot directly under the barbell. Push your hips back and hinge forward until your torso is roughly a 45-degree angle to the floor. Your back must remain absolutely flat, with no rounding in the lumbar spine.", 
            "The Grip: Reach down and grab the barbell with an overhand grip, hands placed slightly wider than shoulder-width. Keep your head in a neutral position, gazing at the floor a few feet ahead of you.", 
            "The Row: Take a deep breath, brace your core tightly, and pull the barbell aggressively toward your lower rib cage or belly button. Focus on leading the movement backward with your elbows, aggressively squeezing your shoulder blades together at the very top of the contraction.", 
            "The Return: Slowly lower the barbell back down toward the floor until your arms are fully straight and you feel a deep stretch in your latissimus dorsi muscles."
        ],
        steps_id: [
            "Posisi Awal: Berdiri dengan kaki selebar bahu. Dorong pinggul ke belakang dan condongkan tubuh ke depan membentuk sudut 45 derajat. Punggung harus tetap rata, tidak boleh membungkuk.",
            "Genggaman: Pegang barbel dengan genggaman selebar bahu. Pandangan fokus ke lantai agar leher tetap netral.",
            "Tarikan (Row): Tarik napas, kencangkan perut, dan tarik barbel ke arah pusar. Fokus pada menarik siku ke arah langit-langit dan rapatkan tulang belikat Anda.",
            "Kembali: Turunkan barbel secara perlahan hingga lengan lurus sepenuhnya dan otot sayap (lat) terasa meregang."
        ] 
    },
    { 
        id: 8, name: "Dumbbell Row", category: "strength", muscle: "back", equipment: "dumbbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Row.gif", 
        steps: [
            "Setup: Approach a flat workout bench. Place your right knee securely on the lower half of the bench and your right hand firmly on the upper half for support. Your torso should be flat and nearly parallel to the floor.", 
            "Grip: Pick up a moderately heavy dumbbell with your left hand. Let it hang straight down toward the floor at arm's length, intentionally allowing your left shoulder to drop slightly to feel a deep stretch in your back.", 
            "The Pull: Initiate the movement by pulling your shoulder blade back, then drive your elbow straight up toward the ceiling. Keep your arm tucked in closely against your ribcage. Pull the dumbbell until it reaches the side of your hip.", 
            "The Squeeze: Pause for a distinct one-second count at the top of the movement, squeezing your lat muscle intensely. Slowly lower the dumbbell back down following the exact same path."
        ],
        steps_id: [
            "Persiapan: Gunakan bangku gym yang datar. Letakkan lutut dan tangan sisi kanan di atas bangku. Tubuh Anda harus membungkuk dan rata sejajar dengan lantai.",
            "Genggaman: Pegang dumbel di tangan kiri. Biarkan lengan menggantung lurus ke lantai agar otot punggung tertarik maksimal.",
            "Tarikan: Tarik tulang belikat ke atas, lalu dorong siku lurus ke arah langit-langit. Jaga lengan atas tetap menempel pada sisi tubuh. Tarik dumbel hingga mencapai pinggul.",
            "Kontraksi: Tahan selama satu detik di titik teratas sambil meremas otot punggung. Turunkan dumbel secara perlahan."
        ] 
    },
    { 
        id: 9, name: "Lat Pulldown", category: "strength", muscle: "back", equipment: "machine", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Lat-Pulldown.gif", 
        steps: [
            "Adjustment: Sit down at the lat pulldown machine station. Carefully adjust the knee pad height so it fits very snugly over your upper thighs—this will anchor your lower body down when lifting heavy weight.", 
            "Grip: Stand up slightly to reach the wide attachment bar. Grasp it with a pronated (overhand) grip, placing your hands significantly wider than your shoulders. Sit back down and secure your knees.", 
            "Execution: Lean your torso back very slightly (about 10 to 15 degrees) and puff your chest up. Engage your lats and pull the bar straight down toward your upper chest, leading the pull by driving your elbows down to the floor.", 
            "Release: Once the bar gently touches or comes close to your upper chest, squeeze your back muscles. Then, control the weight stack as you allow the bar to slowly return to the top position until your arms are fully extended."
        ],
        steps_id: [
            "Penyesuaian: Duduk di mesin lat pulldown. Atur penahan lutut agar menekan paha dengan sangat ketat (ini berfungsi menahan tubuh agar tidak ikut terangkat oleh beban).",
            "Genggaman: Berdiri sedikit untuk meraih palang tarik. Pegang palang lebih lebar dari bahu, lalu duduk kembali.",
            "Eksekusi: Condongkan tubuh sedikit saja ke belakang (10 derajat) dan busungkan dada. Tarik palang lurus ke dada atas dengan berfokus menarik siku ke arah bawah lantai.",
            "Kembali: Setelah palang menyentuh area dada atas, kembalikan beban perlahan ke atas tanpa melepas kontrol otot hingga lengan lurus."
        ] 
    },
    { 
        id: 10, name: "Seated Cable Row", category: "strength", muscle: "back", equipment: "cables", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Seated-Cable-Row.gif", 
        steps: [
            "Positioning: Sit down on the machine's bench. Place your feet securely on the front footpads or crossbar. Ensure you maintain a slight, permanent bend in your knees to protect your lower back—never lock your knees out completely.", 
            "Grip: Hinge forward at the hips to grab the V-bar (or straight bar) attachment with both hands. Sit back until your torso is perfectly upright at a 90-degree angle to the bench, with your arms fully extended in front of you.", 
            "The Pull: Keeping your back completely straight and stationary, pull the handles directly backward into your abdomen/navel area. Keep your elbows tucked in tightly to your sides. Squeeze your shoulder blades together fiercely at the peak of the movement.", 
            "The Return: Slowly extend your arms forward. Allow your shoulders to be pulled forward slightly at the very end of the motion to achieve a full stretch in your lats, then immediately begin the next pull."
        ],
        steps_id: [
            "Posisi: Duduk di bangku mesin kabel. Letakkan telapak kaki di pijakan depan. Pastikan lutut sedikit ditekuk untuk menghindari cedera punggung bawah.",
            "Genggaman: Pegang gagang (V-bar) dengan kedua tangan. Duduklah dengan punggung lurus tegak (sudut 90 derajat) dan lengan terentang ke depan.",
            "Tarikan: Tanpa mengayunkan tubuh, tarik gagang ke arah pusar perut. Tarik siku ke belakang, dekat dengan sisi tubuh, dan remas otot punggung tengah Anda.",
            "Kembali: Perlahan luruskan lengan ke depan. Biarkan beban sedikit menarik bahu Anda maju di akhir gerakan agar otot sayap meregang maksimal."
        ] 
    },

    // ================= LEGS =================
    { 
        id: 11, name: "Barbell Squat", category: "strength", muscle: "legs", equipment: "barbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/BARBELL-SQUAT.gif", 
        steps: [
            "Setup: Approach a squat rack and duck under the barbell. Position the bar securely across the meaty, upper part of your trapezius muscles. Grip the bar tightly, stand up to unrack it, and take one or two deliberate steps backward.", 
            "Stance: Set your feet roughly shoulder-width apart. Your toes should be pointing slightly outward. Keep your chest up proudly, look straight ahead, and take a deep breath into your belly to brace your core.", 
            "The Descent: Begin the squat by breaking at the hips—pushing them backward as if reaching for a low chair—while simultaneously bending your knees. Lower yourself steadily until your hip crease is at or below the level of your knees (parallel or deeper).", 
            "The Ascent: Maintain your upright chest. Drive forcefully through the middle of your feet and your heels, pushing the floor away to stand back up. Exhale as you power through the hardest part of the upward movement."
        ],
        steps_id: [
            "Persiapan: Berdiri di rak jongkok (squat rack) dan masuk ke bawah barbel. Posisikan palang besi di atas bahu belakang (otot trapezius). Pegang erat, berdiri untuk mengangkat beban dari rak, dan mundur selangkah.",
            "Kuda-kuda: Buka kaki selebar bahu dengan ujung kaki sedikit serong ke luar. Busungkan dada, pandangan lurus, dan kencangkan otot perut.",
            "Fase Turun: Mulai dengan menyorongkan panggul ke belakang seolah-olah Anda ingin duduk di kursi pendek, sambil menekuk lutut. Turunkan tubuh hingga paha sejajar dengan lantai.",
            "Fase Naik: Tekan tumit dan seluruh telapak kaki ke lantai dengan kuat untuk kembali berdiri. Hembuskan napas saat kembali tegak."
        ] 
    },
    { 
        id: 12, name: "Dumbbell Lunge", category: "strength", muscle: "legs", equipment: "dumbbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Lunge.gif", 
        steps: [
            "Starting Position: Stand completely upright, holding a moderately heavy dumbbell in each hand directly at your sides. Your arms should be fully extended. Pull your shoulders back, keep your chest high, and look straight ahead.", 
            "The Step: Take a controlled, exaggerated step forward with your right leg. Plant your right foot firmly and flatly onto the floor, stabilizing your body weight.", 
            "The Lunge: Drop your hips vertically straight down toward the floor. Both of your knees should bend to form 90-degree angles. Ensure your front knee tracks over your toes without collapsing inward, and your back knee hovers just an inch above the ground.", 
            "The Push-Off: Push forcefully off the heel of your front right foot to propel your body backward, returning to the standing starting position. Alternate legs by stepping forward with your left leg for the next repetition."
        ],
        steps_id: [
            "Posisi Awal: Berdiri tegak lurus dengan memegang satu dumbel di masing-masing tangan. Lengan lurus di sisi paha. Dada membusung dan pandangan lurus.",
            "Melangkah: Ambil satu langkah cukup lebar ke depan dengan salah satu kaki. Pijakkan telapak kaki depan dengan stabil.",
            "Lunge (Turun): Turunkan pinggul secara lurus vertikal ke lantai hingga kedua lutut membentuk sudut 90 derajat. Lutut belakang jangan sampai membentur lantai.",
            "Mendorong Balik: Dorong dengan tumit kaki depan sekuat tenaga untuk melontarkan tubuh kembali ke posisi berdiri awal. Ganti kaki untuk repetisi berikutnya."
        ] 
    },
    { 
        id: 13, name: "Leg Press", category: "strength", muscle: "legs", equipment: "machine", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2015/11/Leg-Press.gif", 
        steps: [
            "Positioning: Sit deeply into the seat of the leg press machine. Ensure your glutes and lower back are pressed firmly and flatly against the backrest. There should be no gap between your lumbar spine and the pad.", 
            "Foot Placement: Place your feet squarely on the heavy sled, positioned about shoulder-width apart in the center of the platform. Push slightly to unrack the weight and disengage the machine's safety levers.", 
            "The Descent: Slowly and carefully bend your knees, bringing the heavy sled down toward your chest. Lower the weight until your legs form a 90-degree angle. Do not lower it so far that your lower back begins to curl or lift off the seat pad.", 
            "The Press: Drive powerfully through your entire foot (with a slight emphasis on the heels) to press the sled back up to the top. Stop just short of locking your knee joints completely out to maintain constant tension on your quadriceps."
        ],
        steps_id: [
            "Posisi Duduk: Sandarkan seluruh punggung dan bokong ke kursi mesin. Pastikan tidak ada rongga kosong antara punggung bawah dengan sandaran.",
            "Penempatan Kaki: Letakkan telapak kaki selebar bahu di tengah papan dorong (sled). Tekan sedikit agar Anda dapat melepaskan tuas pengaman mesin.",
            "Menurunkan Beban: Tekuk lutut secara perlahan, biarkan papan beban turun perlahan ke arah dada hingga kaki membentuk sudut 90 derajat.",
            "Dorongan (Press): Tekan kuat telapak kaki ke papan dorong. Jangan mengunci atau meluruskan lutut 100% pada posisi puncak, sisakan sedikit tekukan agar otot paha terus bekerja."
        ] 
    },
    { 
        id: 14, name: "Romanian Deadlift", category: "strength", muscle: "legs", equipment: "barbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Romanian-Deadlift.gif", 
        steps: [
            "Setup: Stand tall holding a barbell in front of your thighs with a pronated (overhand) grip, hands shoulder-width apart. Keep your feet hip-width apart and your chest proud.", 
            "The Hinge: Maintain a very slight, permanent micro-bend in your knees. Begin the movement by pushing your hips and glutes backward as far as they will go. Imagine trying to touch a wall behind you with your glutes.", 
            "The Stretch: Keep the barbell in constant contact with your legs, sliding it down your thighs and shins. Lower the bar until you feel an intense stretch in your hamstrings (usually when the bar reaches just below the knees). Your back must remain absolutely flat.", 
            "The Lockout: Squeeze your glutes and push your hips forward to reverse the motion, pulling your torso back to the upright standing position. Do not overextend your lower back at the top."
        ],
        steps_id: [
            "Persiapan: Berdiri tegak memegang barbel di depan paha dengan tangan selebar bahu. Buka kaki selebar panggul.",
            "Engsel Pinggul (Hinge): Tekuk lutut sedikit (sangat sedikit) dan pertahankan posisi lutut ini. Dorong bokong ke belakang sejauh mungkin (seolah menutup pintu dengan bokong).",
            "Peregangan: Turunkan tubuh dengan menjaga barbel terus menempel menyusuri paha. Berhenti turun saat Anda merasakan tarikan kuat di paha belakang (hamstring). Punggung wajib lurus.",
            "Mengunci: Kencangkan bokong dan dorong pinggul ke depan untuk berdiri kembali. Hindari melengkungkan punggung secara berlebihan ke belakang."
        ] 
    },
    { 
        id: 15, name: "Leg Extension", category: "strength", muscle: "legs", equipment: "machine", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/LEG-EXTENSION.gif", 
        steps: [
            "Adjustment: Sit on the leg extension machine. Adjust the backrest so the back of your knees fits snugly against the edge of the seat. Adjust the lower roller pad so it rests comfortably directly on top of your lower shins/ankles.", 
            "Grip and Posture: Grip the handles firmly on the sides of the seat to anchor your upper body down. Keep your chest up and your back completely flat against the backrest.", 
            "The Extension: Using strictly your quadriceps, extend your legs smoothly to push the roller pad upward. Continue until your legs are fully extended and entirely straight.", 
            "The Squeeze: Hold the fully extended position for a sharp, one-second count, squeezing your quads intensely. Then, slowly and with high control, lower the weight back down to the starting position."
        ],
        steps_id: [
            "Penyesuaian Mesin: Atur sandaran punggung agar belakang lutut Anda pas dengan lekukan kursi. Posisikan bantalan rol tepat di atas tulang kering kaki bawah.",
            "Postur: Pegang erat gagang di samping kursi agar tubuh tidak terangkat. Punggung rata bersandar di kursi.",
            "Menendang Beban: Menggunakan otot paha depan, luruskan kedua tungkai kaki ke atas untuk mengangkat bantalan rol.",
            "Kontraksi: Tahan sebentar di posisi tertinggi, rasakan otot paha depan menegang kencang, lalu turunkan kaki kembali secara perlahan menahan beban."
        ] 
    },
    { 
        id: 41, name: "Barbell Hip Thrust", category: "strength", muscle: "legs", equipment: "barbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Hip-Thrust.gif", 
        steps: [
            "Setup: Sit flat on the floor with your shoulder blades resting precisely against the edge of a sturdy, flat weight bench. Roll a heavily padded barbell directly over your legs so it rests deep in your hip crease.", 
            "Foot Placement: Plant your feet firmly on the floor, spaced shoulder-width apart. Position them so that your shins are completely vertical (a 90-degree angle to the floor) when your hips are fully elevated at the top.", 
            "The Thrust: Take a deep breath into your belly, brace your core hard, and drive aggressively through your heels. Thrust your hips explosively toward the ceiling, lifting the barbell.", 
            "The Lockout: At the absolute top of the movement, your torso and thighs should form a straight, horizontal line. Look forward, keep your chin tucked, and squeeze your glutes violently for a full second before lowering your hips back to the floor."
        ],
        steps_id: [
            "Persiapan: Duduk di lantai, sandarkan punggung atas/tulang belikat di pinggir bangku datar. Tarik barbel (yang sudah dilapis busa tebal) ke atas pangkal paha/panggul Anda.",
            "Posisi Kaki: Pijakkan kaki selebar bahu. Atur jaraknya agar saat Anda mengangkat panggul, tulang kering (betis depan) membentuk sudut lurus tegak 90 derajat.",
            "Dorongan Pinggul: Ambil napas, tekan kuat tumit kaki ke lantai, dan sentakkan panggul yang ditimpa beban lurus mengarah ke langit-langit.",
            "Kunci Puncak: Di atas, paha dan perut Anda harus sejajar rata (horizontal). Tundukkan dagu menatap depan, remas otot bokong kuat-kuat sebelum menurunkannya perlahan."
        ] 
    },
    { 
        id: 42, name: "Glute Bridge", category: "strength", muscle: "legs", equipment: "bodyweight", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Glute-Bridge.gif", 
        steps: [
            "Starting Position: Lie completely flat on your back on a comfortable yoga mat. Bend your knees to a roughly 90-degree angle and place your feet flat on the floor, bringing your heels relatively close to your glutes.", 
            "Arm Placement: Rest your arms straight down along your sides on the mat, with your palms pressing firmly into the floor to provide upper body stability.", 
            "The Lift: Exhale and push firmly into the floor through your heels. Lift your hips high into the air until your back, hips, and upper thighs form a perfectly straight diagonal line.", 
            "The Hold: Squeeze your gluteal muscles as tightly as you can at the apex of the movement. Hold this maximum contraction for one to two seconds, then slowly lower your hips back down to lightly tap the mat before the next rep."
        ],
        steps_id: [
            "Posisi Awal: Berbaring rileks di matras. Tekuk lutut dan pijakkan kaki rata di lantai, sedikit mendekat ke arah bokong.",
            "Tangan Penyeimbang: Letakkan kedua lengan lurus di samping tubuh, telapak tangan menekan lantai agar tubuh atas stabil.",
            "Angkat Panggul: Buang napas dan tekan kuat tumit Anda ke lantai untuk mengangkat pinggul/bokong ke udara. Berhenti setelah punggung hingga lutut membentuk garis diagonal.",
            "Tahan Posisi: Kencangkan bokong sekeras mungkin saat berada di posisi atas. Tahan 1 detik, lalu turunkan secara perlahan untuk mengulang gerakan."
        ] 
    },
    { 
        id: 43, name: "Cable Pull Through", category: "strength", muscle: "legs", equipment: "cables", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Cable-Pull-Through.gif", 
        steps: [
            "Setup: Attach a tricep rope handle to the absolute lowest setting of a cable pulley machine. Stand with your back facing the machine, straddling the cable so it passes between your legs.", 
            "Grip: Reach down and backward between your legs to firmly grasp the ends of the rope handle with both hands.", 
            "The Hinge: Take a step forward to create tension. Keeping your back perfectly straight and a slight, fixed bend in your knees, hinge backward deeply at the hips. Let the cable pull your hands backward through your legs until you feel an intense stretch in your hamstrings and glutes.", 
            "The Extension: Squeeze your glutes and forcefully thrust your hips forward to stand completely upright and erect. Squeeze your glutes at the top. Critically, do not use your arms or lower back to pull the weight; the power must come entirely from a hip hinge."
        ],
        steps_id: [
            "Persiapan Katrol: Pasang tali pegangan (rope) di setelan paling bawah pada mesin kabel. Berdiri membelakangi katrol, lalu rentangkan kaki agar kabel melintasi selangkangan.",
            "Genggaman: Bungkukkan badan, raih tali di antara sela-sela paha dengan kedua tangan.",
            "Membungkuk Terkendali: Maju sedikit agar beban tertarik. Jaga lutut tidak terlalu ditekuk. Dorong pinggul/bokong jauh ke belakang. Biarkan tali menarik tangan Anda ke belakang melalui sela-sela kaki.",
            "Berdiri Lurus: Gunakan otot bokong untuk mendorong panggul ke depan sambil berdiri tegak. Tarikan beban harus dipicu dari panggul, bukan tarikan lengan."
        ] 
    },
    { 
        id: 44, name: "Kettlebell Goblet Squat", category: "strength", muscle: "legs", equipment: "kettlebell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Kettlebell-Goblet-Squat.gif", 
        steps: [
            "Grip: Pick up a heavy kettlebell with both hands. Hold it vertically by the sides of its handle (the 'horns') or cup the heavy bell portion. Keep it pulled in tight against the center of your upper chest.", 
            "Stance: Stand with your feet set slightly wider than shoulder-width apart, with your toes pointing gently outwards to open up the hips.", 
            "The Descent: Squat down deeply by pushing your hips back and down. Keep your chest up proudly; do not let the heavy front weight pull your torso forward. Aim to drop your elbows inside the line of your knees at the bottom of the squat.", 
            "The Ascent: Drive forcefully through your heels and the mid-foot to stand back up. Actively focus on squeezing your glute muscles together as you reach the standing lockout position."
        ],
        steps_id: [
            "Genggaman Goblet: Angkat satu kettlebell, pegang tepat di bagian 'tanduk' gagangnya dengan telapak tangan, tempelkan erat di depan dada.",
            "Kuda-kuda: Berdiri sedikit lebih lebar dari bahu, buka pergelangan ujung jari kaki agak menyorong ke luar.",
            "Fase Squat (Turun): Turunkan panggul ke bawah, busungkan dada agar beban tidak menarik Anda tersungkur ke depan. Pastikan siku Anda turun di area ruang dalam lutut.",
            "Bangkit: Jejakkan tumit ke lantai sekuat mungkin untuk kembali berdiri. Remas kuat paha depan dan otot bokong saat lurus tegak."
        ] 
    },
    { 
        id: 45, name: "Resistance Band Glute Kickback", category: "strength", muscle: "legs", equipment: "resistance band", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Resistance-Band-Glute-Kickback.gif", 
        steps: [
            "Positioning: Get down on the floor on all fours in a tabletop position. Loop a small, heavy-duty resistance band securely around the arches of your feet or securely around your lower ankles.", 
            "Stability: Place your hands flat under your shoulders. Keep your back completely flat, your neck in a neutral alignment, and brace your core tightly to ensure your lower back does not arch or sag during the movement.", 
            "The Kick: Keeping your working knee bent at a 90-degree angle (or extending it straight out, depending on your preferred variation), aggressively kick one leg backward and upwards toward the ceiling.", 
            "The Contraction: Push strongly against the band's resistance until your glute muscle is fully and painfully contracted. Hold that peak tension for a split second, and slowly return the knee down to hover just above the floor."
        ],
        steps_id: [
            "Posisi Merangkak: Ambil posisi lutut dan kedua tangan di lantai. Pasangkan karet rintangan (band) tebal melingkari lengkungan kedua telapak sepatu/kaki Anda.",
            "Stabilitas: Jaga punggung tetap stabil membentuk meja datar. Jangan membiarkan punggung melengkung menahan beban.",
            "Tendangan (Kick): Sambil menjaga salah satu lutut tetap menempel lantai, tendang kaki yang satu lurus ke belakang dan ke udara tinggi.",
            "Kontraksi: Dorong perlawanan karet hingga maksimal. Tahan otot pantat (glutes) agar kencang sejenak di udara, lalu kembalikan perlahan ke posisi awal merangkak."
        ] 
    },

    // ================= SHOULDERS =================
    { 
        id: 16, name: "Overhead Press", category: "strength", muscle: "shoulders", equipment: "barbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/07/Barbell-Standing-Military-Press.gif", 
        steps: [
            "Setup: Position a barbell on a squat rack at upper-chest height. Step up and grip the bar slightly wider than your shoulders. Unrack the bar so it rests securely across your collarbones and the front of your deltoids.", 
            "Stance: Take a step back. Stand with your feet hip-width apart. It is highly critical to squeeze your glutes tightly and brace your core—this creates a rigid column of support that protects your lower back.", 
            "The Press: Take a deep breath and press the bar forcefully straight up overhead. You may need to tilt your head back a fraction of an inch to let the bar pass your face. Once the bar clears your head, push your head forward slightly back through the 'window' of your arms.", 
            "The Lockout: Fully extend your arms until your elbows are locked out directly over your mid-foot. Lower the bar under strict control back down to your collarbones before beginning the next repetition."
        ],
        steps_id: [
            "Persiapan Barbel: Letakkan barbel pada rak yang sejajar dada atas. Genggam palang sejajar lebar bahu. Letakkan barbel menyandar pas di pangkal leher (tulang selangka).",
            "Berdiri Kokoh: Mundur satu langkah, posisikan kaki selebar pinggul. Kontraksikan otot bokong dan perut dengan kuat untuk menghindari cedera tulang punggung belakang saat beban diangkat.",
            "Dorongan (Pressing): Tarik napas, lalu dorong barbel tersebut sekuat tenaga lurus ke atas kepala. Anda bisa menarik wajah ke belakang sedikit agar dagu tak terantuk palang.",
            "Lurus Sempurna: Rentangkan lengan lurus sepenuhnya memuncak di atap. Lalu seret beban turun kembali secara sangat pelan agar kendali bahu terjaga."
        ] 
    },
    { 
        id: 17, name: "Lateral Raise", category: "strength", muscle: "shoulders", equipment: "dumbbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Lateral-Raise.gif", 
        steps: [
            "Starting Position: Stand upright holding a relatively light pair of dumbbells in each hand. Let them rest at your sides with your palms facing your outer thighs. Keep your chest up.", 
            "Arm Geometry: Establish a very slight, locked bend in your elbows. This angle must not change. Lean your torso forward just a fraction of an inch to optimally target the lateral head of the deltoid.", 
            "The Raise: Using strictly your shoulder muscles (avoid swinging or using momentum from your legs), raise the dumbbells out to your sides. Lift them until your upper arms are exactly parallel to the floor.", 
            "The Peak: At the top of the movement, ensure your pinky fingers are slightly higher than your thumbs, as if you are pouring water out of two pitchers. Slowly resist gravity to lower the dumbbells back down."
        ],
        steps_id: [
            "Awalan Statis: Berdiri dengan sepasang dumbel berbeban sedang di masing-masing tangan. Posisikan lengan santai di sisi luar paha.",
            "Sudut Tangan Tepat: Kunci siku sedikit bengkok (tidak lurus mati kaku). Condongkan badan amat sangat sedikit ke depan agar bahu terisolasi.",
            "Mengangkat: Gunakan murni daya bahu bagian tengah untuk mengepakkan kedua lengan ke samping luar. Rentangkan hingga siku sejajar ketinggian bahu Anda.",
            "Detail Puncak: Ketika posisi tertinggi, arahkan posisi kelingking sedikit ke atas mengalahkan posisi ibu jari. Turunkan berat perlahan menahan efek jatuh gravitasi."
        ] 
    },
    { 
        id: 18, name: "Face Pull", category: "strength", muscle: "shoulders", equipment: "cables", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Face-Pull.gif", 
        steps: [
            "Setup: Attach a dual-handle tricep rope to a cable pulley set at upper-chest or face height. Grab the ends of the rope from underneath so your thumbs are pointing directly backward toward your face.", 
            "Stance: Step back from the machine until the cable is completely taut. Stand with a staggered stance (one foot forward) to establish a solid base of balance against the pulling weight.", 
            "The Pull: Retract your shoulder blades and pull the rope directly toward the bridge of your nose or your forehead. As you pull, actively separate your hands, pulling the ends of the rope apart and flaring your elbows out high and wide.", 
            "The Squeeze: Pinch your rear deltoids and upper back muscles intensely for a full second at the peak of the contraction. Slowly extend your arms to return the cable to the starting position."
        ],
        steps_id: [
            "Pasang Alat: Kaitkan tali trisep ke katrol kabel tinggi. Pegang kedua ujung tali menggunakan tangan telungkup di mana ibu jari mengarah lurus ke muka.",
            "Kuda-kuda Kuat: Melangkah mundur dari beban mesin sehingga ada tegangan kuat ditarik. Gunakan kuda-kuda satu kaki maju, menopang bobot tubuh miring ke belakang.",
            "Tarik Ke Muka (Face): Tarik tali kuat membelah ke arah hidung. Rentangkan luas kedua siku menjauhi telinga sejauh mungkin.",
            "Jepitan Bahu Belakang: Tarik keras tulang belikat agar terjepit di antara punggung Anda. Kendurkan lengan kembali merentang menyusul tarikan mesin."
        ] 
    },
    { 
        id: 19, name: "Machine Shoulder Press", category: "strength", muscle: "shoulders", equipment: "machine", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Smith-Machine-Shoulder-Press.gif", 
        steps: [
            "Adjustment: Sit down in the shoulder press machine. Carefully adjust the seat height so that the horizontal handles align perfectly with the tops of your shoulders.", 
            "Grip: Press your lower back and shoulder blades firmly against the back pad. Reach up and grasp the handles with a comfortable, overhand (pronated) grip.", 
            "Execution: Take a breath, brace your core, and push the handles smoothly upward. Continue pressing until your arms are fully extended overhead, exhaling as you exert force.", 
            "Release: Inhale and lower the handles back down under strict control. Stop the descent just before the weight stack touches down to maintain constant mechanical tension on your deltoids."
        ],
        steps_id: [
            "Presisi Alat: Atur sadel kursi mesin naik/turun sehingga ketika lengan santai memegang gagang, telapak berada sejajar dengan tulang pangkal leher/bahu.",
            "Posisikan Diri: Tekan seluruh punggung menancap pada kursi mesin agar kekuatan dapat terfokus mendorong ke atas (jangan badan membungkuk).",
            "Mendorong Beban: Hembuskan nafas, tolak tuas mesin lurus terangkat tajam ke atas atap. Rentangkan sempurna sikunya.",
            "Turun Mulus: Jangan lepaskan tarikan. Hambat berat laju turun sampai gagang kembali di area telinga, lalu secepat kilat pompa daya tolakan mengulangi rep."
        ] 
    },
    { 
        id: 20, name: "Two Arm Dumbbell Front Raise", category: "strength", muscle: "shoulders", equipment: "dumbbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/08/Two-Arm-Dumbbell-Front-Raise.gif", 
        steps: [
            "Setup: Stand tall holding a dumbbell in each hand, resting them gently on the front of your thighs. Your palms should be facing your legs (pronated grip).", 
            "Posture: Pull your shoulders down and back, preventing them from shrugging up toward your ears. Brace your abdominals tightly.", 
            "The Raise: Keeping your arms practically straight (with only a micro-bend in the elbow), lift both dumbbells directly forward and upward simultaneously. Do not swing your torso.", 
            "The Peak: Stop raising when the dumbbells reach exact shoulder height and are parallel to the floor. Pause briefly, then slowly lower the weights back to the front of your thighs."
        ],
        steps_id: [
            "Sikap Awal: Berdiri sempurna, pegang pasang dumbel agar bersandar lurus di permukaan depan paha (telapak hadap tubuh).",
            "Fiksasi Bahu: Tarik bahu ke dasar, jangan biarkan bahu mendekat mencium telinga selama mengangkat beban. Keraskan abdomen (perut).",
            "Pengangkatan Ke Depan: Tahan lengan tak ditekuk lebar. Sikat (angkat) dumbel ke udara mendatar di lintasan depan muka (bukan melebar menyamping). Dilarang menyentak pinggang.",
            "Rentang Ketinggian: Stop ayunan hanya tepat sejajar mata memandang (horizontal pada lantai). Hentikan singkat dan tarik melambat ke paha asalnya."
        ] 
    },

    // ================= BICEPS =================
    { 
        id: 21, name: "Barbell Curl", category: "strength", muscle: "biceps", equipment: "barbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Curl.gif", 
        steps: [
            "Stance & Grip: Stand straight with your feet shoulder-width apart for a solid base. Reach down and hold a barbell with a supinated (underhand, palms facing up) grip. Your hands should be spaced precisely at shoulder-width.", 
            "Positioning: Lock your posture. Pin your elbows tightly against your ribcage. It is crucial that your elbows remain completely stationary throughout the entire exercise—do not let them drift forward.", 
            "The Curl: Exhale and contract your biceps to curl the barbell upwards in a smooth, semicircular arc. Keep your torso rigidly still, ensuring absolutely no swinging or leaning back. Curl until the bar reaches shoulder level.", 
            "The Lowering: Squeeze the biceps at the top, then inhale as you slowly reverse the motion. Lower the barbell all the way down until your arms are 100% fully extended to achieve a complete stretch."
        ],
        steps_id: [
            "Awalan Lebar: Buka rentang kaki setara pundak. Genggam sebatang barbel membalik (telapak jari meronta lihat atas) lebar bukaan bahu lengan.",
            "Siku Melekat Kunci: Siku lengan tak usah kemana-mana apalagi menjauh melayang dari jalur panggul sisi rusuk. Rekatkan erat siku di situ selama repetisi berjalan.",
            "Curl Menggulung Naik: Mengencang murni bicep (lengan bisep gumpal depan). Tekuk melipat beban merengkuh mengarah sentuhan dada teratas (hindari goyang ayun melempar badan mundur).",
            "Menjatuhkan Mengendalikan: Remas puncaknya baru lepaskan rengkuhan berat untuk menyerah jatuh bertahap mengendur turun memanjang sepenuhnya batas lengan tegang."
        ] 
    },
    { 
        id: 22, name: "Dumbbell Bicep Curl", category: "strength", muscle: "biceps", equipment: "dumbbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Curl.gif", 
        steps: [
            "Starting Position: Stand perfectly tall, holding a dumbbell in each hand down by your sides. Rotate your wrists outward so that your palms are facing straight forward.", 
            "Execution: While keeping your upper arms glued to your sides and totally stationary, exhale and curl both weights up toward the front of your shoulders simultaneously.", 
            "The Squeeze: At the very top of the movement, pause for a distinct one-second count and consciously contract your biceps as hard as you can.", 
            "The Descent: Inhale and slowly lower the dumbbells back down to the starting position, fighting gravity the whole way down until your triceps flex slightly at the bottom."
        ],
        steps_id: [
            "Pegang Dumbel Posisi Hadapan: Rentangkan sepasang lengan ke aspal bawah, putar tangan hingga muka telapak menyongsong hadap pandangan depan.",
            "Angkut Dua Sekaligus Lurus Kaku (Curls Bicep Isolasi Tunggal Cengkram Lebar Stabilisasi Perut Menghindari Ayunan Momentum Tarik Naik Siku Lurus Vertikal Naik Sempurna Atas): Tekuk sendi sikumu hingga kepalan bersarang ke belikat pundak. Lengan sisa atas jangan lari.",
            "Remasan Membatu Tajam Gumpalan Bisep: Kontraksikan urat keras tegang gumpal bagian biseps secara liar sebelum akhirnya kembali surut turun.",
            "Deselerasi Panjang Gravitasi Keok (Perlawanan Laju Turun Menarik Otot Memanjang Hingga Menegang Tegang Di Dasar Paha Urat Bawah Terbuka Lurus Mati Patah Tanpa Tenaga)." // Compressed translation style
        ] 
    },
    { 
        id: 23, name: "EZ Bar Preacher Curl", category: "strength", muscle: "biceps", equipment: "ez bar", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/EZ-Bar-Preacher-Curl.gif", 
        steps: [
            "Setup: Sit at a preacher curl bench. Adjust the seat so that your armpits fit snugly over the top edge of the pad. Position the entire back of your upper arms flat against the angled pad. Grasp an EZ curl bar using the inner, angled grips.", 
            "The Contraction: With your arms fully supported by the pad (which eliminates any ability to use body momentum), curl the bar upward in a smooth, controlled arc toward your chin.", 
            "The Squeeze: Do not let the bar rest at the top or let your forearms go completely vertical (which loses tension). Stop just short of vertical and squeeze your biceps tightly.", 
            "The Extension: Lower the bar very slowly and carefully until your arms are almost fully extended, stopping just an inch short of locking out to protect the elbow joint under load."
        ],
        steps_id: [
            "Tata Cara Bantalan Preacher: Duduk selaras mesin, benamkan rongga dada agar ujung bantalan empuk masuk menjepit ruang selangkang pangkal ketiak. Hamparan belakang lengan tertancap mati miring pasrah pada pad. ",
            "Kerutan Kunci Tanpa Pelarian Momentum (Isolator Murni Melengkung Memompa Tajam Cengkram Laju Barbel EZ Tarikan Pendek Cekat Kuat Penuh Daya Peras Tensi Ekstrim Naik Mentok).",
            "Tertahan Sedikit Dari Vertikal Lurus Mati Mengunci Tegang Sendi Puncak Rileks: Berhenti persis sesaat ketika tongkat belum lurus jatuh di wajah agar bisep tak pernah bisa napas rileks sedetik pun.",
            "Peregangan Lambat Tajam Nyeri: Ulur kembali ke turunan bantalan curam seraya menahan ngeri sobek daya regang maksimal urat bisep, hindari pelurusan kaku 100% lurus patah melukai jaringan peka lengan dalam."
        ] 
    },
    { 
        id: 24, name: "Cable Bicep Curl", category: "strength", muscle: "biceps", equipment: "cables", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Cable-Curl.gif", 
        steps: [
            "Setup: Attach a straight bar or EZ bar handle to the absolute lowest setting on a cable pulley machine. Stand facing the machine.", 
            "Grip: Grab the bar with an underhand grip, stand completely tall, pull your shoulders back, and aggressively pin your elbows to your sides.", 
            "Execution: Exhale and curl the bar upwards towards your upper chest. Keep your body rigid like a statue, letting the biceps do 100% of the mechanical work against the constant tension of the cable.", 
            "Return: Inhale and lower the bar under strict control, fully extending your arms at the bottom before immediately beginning the next repetition."
        ],
        steps_id: [
            "Simpul Katrol Paling Dasar Mesin Baja Kawat Lurus Lengan Angkat Naik Tarikan: Kaitkan tongkat panjang mini pada cincin terbawah menara kabel. Menghadap penuh arah tiang pusat.",
            "Sikap Tangguh Batu Patung Kokoh Penarik (Paku Lengan Melesak Tahan Guncang Punggung Lurus Dada Maju Menatap Terang Atas Depan Pandangan Stabil).",
            "Mekanik Eksekusi Mesin Tarik Cengkram Tekuk Ganda Siku Atas Mengunci: Engkol melipat besi melawan seret rantai tarikan beban konstan murni menuju lekuk atas tenggorokan/dada puncak.",
            "Surut Rilis Lambat Tegangan Ekstra (Eccentric Control Drop Beban Kembali Terhempas Rata Panjang Lurus Asal Titik Rendah Tegak Membujur Kaku Penuh Daya Siku Bawah Rapat)."
        ] 
    },
    { 
        id: 25, name: "Dumbbell Hammer Curl", category: "strength", muscle: "biceps", equipment: "dumbbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Hammer-Curl.gif", 
        steps: [
            "Stance: Stand upright holding a dumbbell in each hand at arm's length by your sides.", 
            "The Grip: Unlike a standard curl, maintain a neutral grip throughout the entire exercise—this means your palms should remain facing your torso (like holding a hammer).", 
            "The Curl: Keeping your elbows stationary at your sides, exhale and curl the dumbbells up toward your shoulders. This targets the brachialis and brachioradialis in addition to the bicep.", 
            "The Lowering: Squeeze hard at the top, then slowly lower the weights back down to the fully extended starting position."
        ],
        steps_id: [
            "Sikap Statis Menentang: Berdiri tegak mengapit sisa genggaman lurus lengan di kanan kiri pinggang luar paha.",
            "Genggaman Posisi Palu (Neutral Grip Hammer Pegangan Miring Belah Muka Samping Murni Stabil Tanpa Pusing Muter Menengadah): Posisi telapak saling lihat memandang satu sama lain, bagai jurus membawa godam martil besi berat ke atas.",
            "Akselerasi Pengangkatan Tekuk Samping Kaku Rusuk Rapat Mengapit Mengangkat Beban Fokus Tarikan Menyamping Menyasar Sayap Depan Lengan Tumbuh (Brakialis Target Lebar Samping Urat Luar).",
            "Pendaratan Surut Mengunci Memanjang Kembali Garis Jatuh Gravitasi Lurus Lepas Urat Tegangan Merenggang Menyasar Ekstrem Laju Perlahan Lengan Mengulur Kebawah Penuh."
        ] 
    },

    // ================= TRICEPS =================
    { 
        id: 26, name: "Tricep Pushdown", category: "strength", muscle: "triceps", equipment: "cables", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Triceps-Pushdown.gif", 
        steps: [
            "Setup: Attach a straight bar, V-bar, or double-sided rope to a high pulley on a cable machine. Grab the attachment tightly with an overhand grip.", 
            "Posture: Stand very close to the cable, lean your torso slightly forward (about 10 degrees) to give the cable a clear path, and lock your elbows firmly against your ribs.", 
            "The Push: Using exclusively the power of your triceps, push the attachment straight down toward the front of your thighs. Continue pressing until your arms are entirely straight and your elbows are fully locked out.", 
            "The Return: Squeeze the triceps at the bottom, then slowly control the weight as the attachment comes back up to upper-chest level. Never allow your elbows to drift forward or detach from your sides."
        ],
        steps_id: [
            "Gantungan Puncak Menara Tarikan Tinggi Bawah: Pasang simpul penarik di kail paling puncak tinggi menara katrol besi. Cengkram ujung tali secara mencengkram punggung tangan telungkup atas.",
            "Posisi Kunci Sandi Condong Depan Maju (Merapat Tiang Beban Punggung Miring Muka Tegak Siku Melesak Celah Perut Kunci Mati Tak Gerak).",
            "Pukulan Memompa Hantam Ujung Kaki Menerjang Lurus Bawah Tegang Ekstensi Murni Kaku Sempurna: Memanjangkan daya urat trisep punggung lengan belakang sodok dorong sikut melurus luruskan persendian tekuk lengan ke bawah mentok sejajar tegang kaku garis lutut berdiri lurus murni patah.",
            "Menahan Kembalinya Tali Tersentak (Slow Release Negative Rima Puncak Remasan Membakar Menggigil Mengerut Ekstrem Kejam Menembus Rusuk Tanpa Sikut Lepas Geser Ayun Ayun Kacau Berayun Ulangi Gempuran Rima Eksekusi)."
        ] 
    },
    { 
        id: 27, name: "EZ Bar Skullcrusher", category: "strength", muscle: "triceps", equipment: "ez bar", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/EZ-Bar-Skullcrusher.gif", 
        steps: [
            "Setup: Lie completely flat on a weight bench. Hold an EZ curl bar with an overhand, narrow grip (hands closer than shoulder-width) directly above your chest, with your arms fully extended.", 
            "The Drop: Shift your arms back slightly so they are at a 15-degree angle pointing toward the wall behind you (this keeps constant tension). Keeping your upper arms pointing exactly there, bend only at your elbows to slowly lower the bar down until it hovers just an inch above your forehead or just behind your head.", 
            "The Extension: Using intense triceps contraction, forcefully extend your elbows to push the bar back up along the same arc to the angled starting position. Do not move your upper arms."
        ],
        steps_id: [
            "Sandar Terbujur Datar (Flat Bench Set Tiarap Raga Penuh Tekan Lantai Angkat Batang Gelombang Kecil): Merapat membujur membelah bangku pegang tangkai meliuk sempit tangan rapat sejajar lengan telentang menantang langit vertikal.",
            "Ayunan Sumbu Engsel Tempurung Bahaya Jidat Tengkorak (Skullcrusher Arc Drop Angle 15 Degrees Behind Siku Lipat Tajam Jaga Tekuk Tegang Rawan Remuk Mendarat Ujung Dahi Muka Jatuh Terkontrol Hati Hati).",
            "Sodokan Dorongan Ekstensi Pemanjangan Urat Belakang Melesat Tembak Lurus Tajam Beban Naik Lurus Titik 15 Derajat Stabil (Force Extension Lock Siku Atas Puncak Kaku Murni Daya Dorong Panjang Maksimal Triseps Belakang)."
        ] 
    },
    { 
        id: 28, name: "Triceps Dips", category: "strength", muscle: "triceps", equipment: "bodyweight", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Triceps-Dips.gif", 
        steps: [
            "Mounting: Jump up onto a set of parallel dip bars, supporting your entire body weight on your fully extended arms with a neutral grip.", 
            "Posture: To isolate the triceps (and minimize chest involvement), keep your torso as upright and completely vertical to the floor as possible. Look straight ahead, and actively tuck your elbows in close to your body.", 
            "The Descent: Inhale and bend your elbows to lower your body straight down vertically. Descend until your upper arms are perfectly parallel to the floor (a 90-degree bend at the elbow).", 
            "The Push: Exhale and press your body weight back up to the starting position by forcefully straightening your arms and flexing the triceps at the lockout."
        ],
        steps_id: [
            "Memanjat Palang Paralel Sejajar Ganda Tumpuan Lengan Hampa Udara Murni Berdiri Tegang Penuh Daya Angkat Tinggi Lurus Tumpuan Bahu Berat Tubuh.",
            "Tegakkan Poros Mencegah Sabotase Dada Samping (Vertical Torso Torso Upright Tegang Lurus Murni Menyasar Belakang Lengan Tahan Sikut Menempel Rapat Dekat Diri Kunci Mata Lurus Arah Maju Hampa Jauh Menembus Batas).",
            "Turun Mendarat Melayang Hampa Beban Menyelam Turun Gravitasi Lipat Derajat Siku Bengkok Sejajar Paralel Lurus Melingkar Berhentik Lanjut Menembus Tekanan Siku Meruncing Lurus Rata Tegak (Descent Stop Pararel Drop Mulus Rima Sinkron Meredam Berat Tubuh Raga Murni Menekan Beban Gravitasi Penuh)."
        ] 
    },
    { 
        id: 29, name: "Dumbbell Overhead Extension", category: "strength", muscle: "triceps", equipment: "dumbbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Triceps-Extension.gif", 
        steps: [
            "Setup: Sit on a bench with low back support or stand perfectly upright. Grip a single, heavy dumbbell with both hands, cupping the inner, top plate with your palms facing up toward the ceiling.", 
            "Positioning: Carefully lift and press the dumbbell straight up overhead so your arms are fully extended.", 
            "Execution: Keeping your upper arms vertical and as close to your ears as flexibility allows, bend your elbows to lower the dumbbell directly behind the base of your neck. Lower it until you feel a deep, heavy stretch in your triceps.", 
            "The Press: Exhale and push the dumbbell back up to the starting position overhead, focusing entirely on contracting the triceps to move the weight."
        ],
        steps_id: [
            "Genggam Mengangkat Piring Gelas Berat Tinggi Atas Kepala Langit: Duduk bersandar bangku penyangga memegang ujung kuping satu buah barbel besar berat memakai telapak terbuka menyongsong beban besi di atas ubun ubun raga sejajar garis menjulang atas atap awan lepas vertikal lengan tangan paku membujur lurus tegang kaku tak membelok patah.",
            "Menukik Eksekusi Tenggelam Sembunyi Di Punggung Belakang Batas Leher Pangkal Terbawah Terjulur Peregangan (Stretch Extension Beban Sembunyi Celah Kaku Kuping Kepala Telinga Siku Menunjuk Tinggi Lurus Lancip Kunci Tegak Tak Berkibar Kesana Kemari Jatuh Menurun Berat Sakit Meregang Terpecah Triseps Berat Ganda).",
            "Mendorong Pemulihan Rilis Laju Balik Awal Langit Ujung Panjang Jarak Lintasan Daya Kontraksi Merengut Rapat Mengunci Titik Akhir Terhimpit Menyasar Tricep Kepala Kaku (The Press Extensifikasi Dorongan Vertikal Penuh Ekstrim Sentakan Memusat Triseps Peras Daya Puncak)."
        ] 
    },
    { 
        id: 30, name: "Cable Overhead Triceps Extension", category: "strength", muscle: "triceps", equipment: "cables", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Cable-Triceps-Extension.gif", 
        steps: [
            "Setup: Attach a rope to a cable pulley set at the bottom or middle setting. Grab the ends of the rope, turn your back to the machine, and bring the rope up behind your head.", 
            "Stance: Take a split stance (one foot forward) to brace your body against the pull of the cable. Lean your torso forward slightly.", 
            "The Extension: Keep your elbows pointing up and forward. Extend your arms out in front of you and slightly upward until your arms are fully straight.", 
            "The Return: Slowly let the cable pull your hands back behind your head, bending the elbows fully to achieve a maximum stretch in the triceps before the next rep."
        ],
        steps_id: [
            "Atur Tali Dasar Belakang Tubuh Menyeret Arah Maju Mengikat (Setup Pulley Bawah Tali Triseps Muka Belakang Mesin Maju Kuda Kuda Sandar Condong Miring Menyeimbangkan Daya Lempar Beban Ditarik Kabel Tali Baja Tegang Tarik Belakang Terus Menerus Konsisten Konstan).",
            "Tembakan Lurus Panjang Mengikat Sudut Siku Runcing Merentang Mengayun Mendorong Memanjang Angkat Panjang Ujung Pandangan Penuh Tegang Membentang Ekstensi Trisep Optimal Ekstrem Daya Lurus Menyayat (Extension Drive Menajam Siku Sempurna Tarik Lurus Kunci Daya Membujur Tarik Menyasar Titik Temu Otot Miring Belakang).",
            "Kembali Melengkung Meregang Hancur Lamban Rilis Pelan Kembali Mengikat Kepala Sisa Tarikan Bawah Kabel Lurus Tegang Jatuh Panjang Lentur Balik Belakang Leher Punggung Ujung Ulang Eksekusi Cepat Tarik Ekstensi Trisep)."
        ] 
    },

    // ================= CORE =================
    { 
        id: 31, name: "Plank", category: "strength", muscle: "core", equipment: "bodyweight", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Plank.gif", 
        steps: [
            "Positioning: Get face down on the floor or a yoga mat. Prop yourself up on your forearms and the tips of your toes. Your elbows must be positioned directly underneath your shoulders at a 90-degree angle.", 
            "Alignment: Look straight down at the floor between your hands. Ensure your body forms a perfectly straight, rigid line from the back of your head, through your hips, down to your heels.", 
            "Engagement: Squeeze your glutes as tightly as possible, brace your abdominal muscles fiercely (as if anticipating a punch to the stomach), and actively press your forearms firmly into the floor to activate your shoulders.", 
            "The Hold: Maintain this high-tension, static position while remembering to breathe deeply and steadily for the entire prescribed duration. If your hips sink, terminate the set."
        ],
        steps_id: [
            "Postur Penopang (Forearm Setup): Menelungkup rata. Tekan alas karpet yoga mengunakan siku terlipat kaku lurus presisi pundak dan jari pijak kaku mendorong tanah stabil rata bumi.",
            "Rataan Kaku Membujur (Straight Line Alignment Body): Sorot pandang datar tanah aspal bawah. Luruskan panggul tak melengkung bungkuk melainkan membentang bagai garis baja dari tumit menyusur tulang belakang menuju ujung tengkorak mati diam.",
            "Menggempur Remasan Pertahanan Menyakitkan (Core Bracing Squeeze): Bekukan perut Anda layaknya tameng tebal perisai beton menahan hantaman. Kencangkan juga bagian bokong dengan meremas paha sekuat daya untuk membekukan badan kaku total statis tak bernyawa bergetar.",
            "Penahanan Absolut (The Hold Static Breaths): Bernapas panjang mengais oksigen dalam jepitan tegang membakar sekujur raga tanpa sedikitpun panggul rontok tergelincir turun."
        ] 
    },
    { 
        id: 32, name: "Cable Crunch", category: "strength", muscle: "core", equipment: "cables", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Cable-Crunch.gif", 
        steps: [
            "Setup: Attach a double-ended rope handle to a high cable pulley. Kneel down facing the machine (or facing away, depending on your preferred biomechanics) and grab the rope. Pull it down and hold the ends securely right next to your ears or behind your neck.", 
            "The Crunch: While keeping your hips locked and relatively stationary, contract your abdominals to heavily flex your spine. Crunch your torso forward and downward in a curling motion. Aim to literally bring your elbows down to touch your thighs or knees.", 
            "The Contraction: Exhale forcefully at the very bottom of the movement, squeezing your abs as tightly as possible for a full second.", 
            "The Release: Inhale and slowly return to the upright kneeling position, fighting the weight stack the entire way up to maintain tension on the abdominal wall."
        ],
        steps_id: [
            "Dekapan Tali Tinggi Bersimpuh Mengikat: Berlutut menghadap katrol puncak tertinggi beban kabel menara panjang. Sandarkan genggaman simpul tali tebal lilit persis tepi area lekuk kuping pendengaran belakang menyentuh rahang kaku mengunci menyangga tubuh.",
            "Penggulingan Rusuk Menyasar Melengkung Menukik Hancur Ke Tengah Celah Paha Abdomen Crunch: Lupakan gerakan membungkuk dari engsel bokong; namun lipat peras paksa melengkung menekuk memutar punggung tulang menuju arah dengkul menyayat lemak serat lurus tengah perut membakar memeras otot sixpack perut utuh tengah tuntas menukik melingkar bawah paha.",
            "Batas Kontraksi Hembus Kosong Oksigen (Full Squeeze Bawah): Usir segala tumpukan napas sisa oksigen rongga dada dalam sekali hela jepit tekuk dasar bawah gerakan paling sakit meremas perut sejenak lalu siap bangkit.",
            "Tahan Perlawanan Tegangan Gaya Gravitasi Bertahan Melawan Mengontrol Membuka Lipatan Memanjang Kembali Angkat Beban Mesin Kerek Panjang Melambat Rilis (Eccentric Release Control Tension Tahan Kembali)."
        ] 
    },
    { 
        id: 33, name: "Russian Twist", category: "strength", muscle: "core", equipment: "medicine ball", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Russian-Twist.gif", 
        steps: [
            "Starting Position: Sit flat on the floor. Lean your straight torso back slightly (about a 45-degree angle) until you feel your abs engage to hold you up. Bend your knees and lift your feet a few inches off the ground to balance on your tailbone.", 
            "The Hold: Grasp a medicine ball, weight plate, or dumbbell with both hands and hold it directly in front of your chest.", 
            "The Twist: Using your obliques, rotate your shoulders and torso fully to the right side, tapping the medicine ball lightly on the floor just beside your right hip.", 
            "The Alternate: Immediately twist your torso all the way back across to the left side and tap the ball on the floor. Continue alternating sides rapidly but with full control in a smooth rhythm."
        ],
        steps_id: [
            "Duduk Condong Menantang Jatuh V-Sit 45 Derajat Keseimbangan Hampa (Sit V Posture Angkat Tumit Hampa Menggantung Beban Pusat Tubuh Tegang): Rebah 45 drajat ke garis lintang memutar perut membendung badan rubuh lantai angkat sisa tumit pijak sepatu gantung di sela udara hampa ruang kosong.",
            "Dekapan Benda Berat Bola Pejal Beban Dada: Genggam dekap benda padat pemberat memusat di antara pertemuan lengan dada tengah perut rata.",
            "Pemuntiran Obliq Menyilang Meremukkan Sayap (Torque Rotation Samping Menyentuh Celah Hantam Lentur Melintir Putar Rusuk Menembus Bawah Samping Tepi Lantai Kanan): Kunci tulang dan lemparkan sisa berat beban menyilang merenggut sisi menyilang batas samping pinggang membakar keras urat samping pinggang diagonal (oblique).",
            "Menepis Balik Berkesinambungan Meluncur Balas Hantam Sisi Sebelah Konstan Memacu Rima Tempo Cepat Silang (Alternate Rapid Twist Left Right Mengendalikan Tempo Stabil Hampa Goyang)." 
        ] 
    },
    { 
        id: 34, name: "Hanging Leg Raise", category: "strength", muscle: "core", equipment: "bodyweight", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Hanging-Leg-Raise.gif", 
        steps: [
            "The Hang: Jump up and grasp a pull-up bar with a shoulder-width, overhand grip. Let your body hang completely still with your legs pointing straight down to the floor.", 
            "The Lift: Exhale sharply and engage your lower abdominals. Keeping your legs as straight as possible, lift them straight up in front of you. Aim to bring your toes up until your legs form a 90-degree angle with your torso (parallel to the floor).", 
            "Control: It is absolutely critical not to use momentum or let your body swing back and forth. The upward movement must be powered entirely by the raw contraction of your abdominal muscles and hip flexors.", 
            "The Lowering: Inhale and lower your legs back down to the dead-hang position as slowly and steadily as possible to maximize eccentric tension."
        ],
        steps_id: [
            "Cengkraman Hampa Menggantung Pasrah Gravitasi Tarik Bumi Sempurna Tiang Besi Baja Panjang Rengkuh Telapak Memutar (Dead Hang Pull Up Bar): Bergelantung tiada alas lurus panjang sejenak menahan tarikan nafas mendinginkan badan tak boleh ada angin goyangan memutar ayun.",
            "Mengangkat Bilah Pedang Lurus Tembakan Muka Sepatu Horizon Atas 90 Derajat Kaku (Leg Lift Straight Vertical Core Lower Abs Engage Tegang Kontraksi Angkat Memanjang): Lempar panjang dua set tungkai membidik langit langit tinggi rata sejajar panjang badan hingga posisi sepatu 90 derajat siku siku dari pusat tengah pinggang lentur inti core menyayat tebal perut V cut bagian dasar terdalam buncit bawah.",
            "Konsistensi Isolasi Menjaga Kekakuan Ayun Meredam Momentum (Strict Control Momentum Stop Tahan Laju Sabotase Badan Memaksa Melenting Tolak Melenceng Latihan Sia-Sia Murni Gempur Kontraksi).",
            "Meredup Melungsur Beban Melambat Turun Sakit Menyiksa Tahan Otot Meronta Turun Membuka Sempurna (Eccentric Slow Decline Rilis Pelan Lembut)."
        ] 
    },
    { 
        id: 35, name: "Ab Machine Crunch", category: "strength", muscle: "core", equipment: "machine", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Crunch-Machine.gif", 
        steps: [
            "Adjustment: Sit in an abdominal crunch machine. Take the time to properly adjust the seat height so the padded chest lever is resting comfortably on your upper chest, and hook your shins or feet securely under the lower foot rollers.", 
            "Grip: Lightly grasp the handles above your head or on the chest pad. Ensure you do not use your arm strength to pull the weight down; your hands are just resting.", 
            "The Crunch: Exhale heavily and aggressively crunch your torso forward. Pull your upper chest down toward your knees, visualizing folding your ribcage into your pelvis using strictly your abdominal muscles.", 
            "The Return: Inhale and slowly resist the heavy weight stack as you uncurl your torso, returning to the fully upright starting position before the next rep."
        ],
        steps_id: [
            "Tata Mesin Sadel Dudukan Punggung Gulung Alat Berat Perut Mesin Isomerik Konstan (Set Sadel Dada Pijak Ujung Kaki Tempel Lekat Genggam Tangkai Tarik Lepas Tak Bertumpu Tangan Hampa Rileks Murni).",
            "Remasan Melipat Ekstrem Menyeret Rusuk Bertabrakan Dengan Pangkal Kelamin Pusar Rapat Gumpalan Menukik (Crunch Lipatan Depan Dada Melengkung Bungkuk Ganas Buang Oksigen Napas Paru Kering Menekan Menjepit Inti Murni Memusat Padat).",
            "Pertahankan Gempuran Sakit Batas Mentok Gulungan Mesin Terjepit Padat 1 Detik Total Waktu (Squeeze Hold Peak).",
            "Meredam Tolakan Per Mesin Mengayun Balik Ke Belakang Sempurna Perlahan Tegang Meredup Merenggang Melambat Lepas."
        ] 
    },

    // ================= CALVES =================
    { 
        id: 36, name: "Standing Calf Raise", category: "strength", muscle: "calves", equipment: "bodyweight", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Standing-Calf-Raise.gif", 
        steps: [
            "Setup: Stand on the rigid edge of an elevated platform, an aerobic step, or a sturdy wooden block. Position the balls of your feet firmly on the edge, allowing your heels to hang completely off into the air.", 
            "Balance: Hold onto a nearby wall, railing, or sturdy object lightly with one or two fingers simply to maintain your upright balance. Do not use your hands to pull yourself up.", 
            "The Raise: Exhale and push forcefully through the balls of your feet, flexing your ankles to raise your heels as high up toward the ceiling as physically possible. Squeeze your calf muscles intensely at the absolute peak.", 
            "The Stretch: Inhale and slowly lower your heels down, dropping them significantly past the level of the step until you feel a deep, burning stretch in your Achilles tendon and lower calf muscles."
        ],
        steps_id: [
            "Posisi Jurang Tepi (Edge Platform Step Setup Pijakan Depan Menggantung Udara Tumit Menjuntai Leluasa).",
            "Kestabilan Sisa Jari Penyangga Berdiri Tegak Patung Diam Tak Tertarik Dorongan Tangan Tembok (Balance Support Finger Touch Tahan Tegak Lurus Garis Vertikal).",
            "Melesat Mengangkat Jinjit Menyundul Titik Elevasi Membakar Kontraksi Tegang Gumpal Betis Serabut Memuncak (Elevate Raise Tolakan Daya Dorong Hentak Memuncak Jepit Peras Keras Tajam Puncak).",
            "Merobek Jurang Dasar Meredam Pijak Melesak Ambang Minus Menyayat Serat Tarikan Terpanjang Menderita Tumit Merosot Jauh Kedalaman Melentur Achilles Tendon Urat."
        ] 
    },
    { 
        id: 37, name: "Barbell Calf Raise", category: "strength", muscle: "calves", equipment: "barbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Calf-Raise.gif", 
        steps: [
            "Positioning: Load a barbell on a squat rack. Duck under it and position it securely across your upper back/trapezius muscles, utilizing a pad if necessary, just as you would for a standard back squat.", 
            "Stance: Unrack the heavy weight, step back, and stand perfectly tall with your feet placed about hip-width apart. Brace your core to stabilize the barbell on your spine.", 
            "Execution: Push straight up onto your tiptoes, powerfully elevating your heels as high as possible off the floor while keeping your knees straight but unlocked.", 
            "Return: Lower your heels back to the floor in a slow, controlled cadence. For superior muscle growth, place two small weight plates under your toes to allow your heels to drop into a deficit stretch at the bottom."
        ],
        steps_id: [
            "Pikulan Berat Membabi Buta Set Up Bahu Berantai Palang Rak Squat (Load Traps Squat Barbell Pad Tekan Tubuh Bertumpu Berdiri Kuat Core Terjaga Garis Tulang Aman).",
            "Kuda-kuda Berdiri Rentang Sejajar Melesat Angkat Daya Tembak (Stance Berdiri Jepit Bokong Lurus Engsel Kaku Sedikit Tak Terkunci Penahan Beban Mati Tekan Tegang Siku Kaki Lurus).",
            "Dorongan Jinjit Meroket Melenting Beban Berat Penuh Jinjitan Sepatu Melesat Tinggi Lurus (Push Up Tiotoes Berontak Angkat Hantaman Memuncak Beban Meronta Lurus Tegangan Menyebar Otot Belakang Kaki Gumpalan Tajam).",
            "Penurunan Perlahan Merasuk Melesat Titik Dasar Mendarat Aman Stabil Lurus Melesat Hampa Merenggang Jatuh Berirama Rima Sedang."
        ] 
    },
    { 
        id: 38, name: "Donkey Calf Raise", category: "strength", muscle: "calves", equipment: "machine", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Donkey-Calf-Raise.gif", 
        steps: [
            "Setup: Step onto the elevated foot platform of a dedicated donkey calf raise machine. Bend forward at the hips to a 90-degree angle and position your lower back/sacrum area snugly upward under the heavy padded lever arm.", 
            "Posture: Grip the handles provided. Keep your back flat and your legs mostly straight throughout the set, maintaining just a tiny micro-bend in the knees to protect the joint from hyperextension.", 
            "The Lift: Push powerfully up through the balls of your feet to raise the heavy lever arm. Fully contract and squeeze your calf muscles at the very top peak of the movement.", 
            "The Drop: Lower your heels down into the gap as far as your ankle mobility permits, securing a maximum stretch at the bottom before firing back up for the next rep."
        ],
        steps_id: [
            "Menukik Posisi Berdiri Keledai Membungkuk Merentang Punggung Bawah Beban Panggul Tekan Mesin (Setup Platform Lipat Pinggul 90 Derajat Sandaran Sabuk Pinggul Berat Menimpa Tulang Panggul Terkait Kunci).",
            "Genggam Pengaman Stang Lengan Mesin Pelindung Terkunci Kuda Kuda (Grip Handles Pertahankan Garis Rata Punggung Mengalir Ke Sisa Tungkai Setengah Lurus Penuh Daya Tak 100% Mengunci Rawan Patah Sendi Lutut Hampa Tegang Menarik Kuat).",
            "Letupan Jinjit Puncak Menendang Plat Atap Mesin Meringkuk Otot Tebal Betis Mengeras (Lift Push Powerfully Kontraksi Sengat Padat Jepitan Ganas Atas Mentok Tajam).",
            "Melorot Merobek Lenturan Tendon Ujung Tumit Masuk Jauh Ke Celah Dasar Alas Plat Peregang Sempurna (Drop Full Stretch Penderitaan Panjang Bawah Rentang Tarikan Dalam)."
        ] 
    },
    { 
        id: 39, name: "Dumbbell Calf Raise", category: "strength", muscle: "calves", equipment: "dumbbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Calf-Raise.gif", 
        steps: [
            "Grip: Grab a heavy pair of dumbbells with a neutral grip and let them hang straight down at arm's length by your sides.", 
            "Positioning: Stand on a flat surface, or ideally, place the front half of your feet on a raised weight plate or a wooden plank to artificially increase the range of motion and stretch.", 
            "The Movement: Keeping your torso completely vertical and your core tight, elevate your body straight upward by driving through your toes and raising your heels off the floor.", 
            "Control: Pause at the highest point for a full second to maximize the muscular contraction, then slowly lower your heels back down to the floor or below the edge of the plate."
        ],
        steps_id: [
            "Cengkraman Statis Murni Dumbel (Grip Neutral Hanging Dumbbells Pegangan Sejajar Pinggang).",
            "Pijakan Pelat Kayu Ujung Rentangan Otot Melayang Tumit Celah Angin (Setup Elevated Block Tambahan Rentang Pergerakan Range of Motion).",
            "Laju Pengangkatan Memaku Vertikal Raga Kaku Menjulang Tinggi Penuh Cengkraman Jinjit Jari Ujung Tolakan Bumi (Elevate Vertical Drive Hentakan Meroket Statis Lurus Tanpa Ayun).",
            "Kendali Surut Merengut Nyeri Perlahan Melawan Gaya Gravitasi Beban Menghempas (Control Release Turun Melambat Sempurna Tertegang Tahan Detik)."
        ] 
    },
    { 
        id: 40, name: "Seated Calf Raise", category: "strength", muscle: "calves", equipment: "machine", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Seated-Calf-Raise.gif", 
        steps: [
            "Setup: Sit upright on the seated calf raise machine. Place the balls of your feet on the lower foot platform and position the heavy, weighted pads securely over the top of your lower thighs, just above the knees.", 
            "Release: Push up slightly with your toes to lift the weight block and disengage the safety lever or pin on the side of the machine.", 
            "The Stretch: Slowly and deliberately lower your heels down toward the floor as far as your ankle mobility physically allows. You should feel a significant stretch specifically in the soleus muscle (the lower, wider part of the calf).", 
            "The Contraction: Push powerfully upward through the balls of your feet, raising your heels as high as possible against the heavy resistance of the thigh pads. Squeeze hard before lowering."
        ],
        steps_id: [
            "Duduk Sejajar Pelana Kuda Mesin Set Betis (Setup Duduk Punggung Tegak Lurus Setel Bantalan Penekan Tepat Merapat Ujung Paha Atas Lutut Mencengkram Membebani Mengunci Gerak Bebas).",
            "Pelepasan Engsel Pengaman Rilis Kait (Release Tarikan Awal Dorong Beban Pasak Buka Pengait Penahan Plat Bobot).",
            "Tenggelam Rentangan Lentur Menyayat Menarik Penuh Menusuk Meringkuk Serabut Sembunyi Betis Soleus Dalam Urat Pendek Lengan Kaki Lebar (Stretch Bawah Meluncur Dalam Turun Membujur Tarik Peregangan Ekstrem Ujung Tulang Belakang Tumit Sempurna Menderita Melorot Mentok).",
            "Tembakan Melesat Cepat Daya Kuda Beban Berat Tertahan Menahan Dorongan Hentak Peras Padat Puncak Jinjitan Sempurna Menggetarkan Daya Otot Tebal Menggumpal Menyakitkan Tuntas Ke Atas."
        ] 
    },

    // ================= FOREARMS =================
    { 
        id: 46, name: "Barbell Wrist Curl", category: "strength", muscle: "forearms", equipment: "barbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Wrist-Curl.gif", 
        steps: [
            "Setup: Sit on the edge of a flat weight bench. Hold a light to moderate barbell with an underhand (supinated, palms facing up) grip.", 
            "Positioning: Lean forward and rest your forearms completely flat against the top of your thighs. Position them so that your wrists are hanging freely off the edge of your kneecaps. Your forearms must remain totally stationary.", 
            "The Extension: Carefully open your hands slightly and allow the barbell to roll down from your palms to the tips of your fingers. This provides a maximal stretch to the flexor muscles of the forearm.", 
            "The Curl: Tightly close your fingers back around the bar and forcefully curl your wrists upward as high as they can mechanically go, lifting the weight strictly using your forearm flexors without lifting your arms off your legs."
        ],
        steps_id: [
            "Penempatan Lengan Datar Kaku Paha Tiarap Beban Duduk Ujung Lurus Batas Sendi Lutut (Setup Duduk Tungkai Buka Lebar Taruh Rata Hamparan Lengan Lurus Sejajar Jatuh Puncak Ujung Batas Angin Hampa Penuh Tegang Beban Pergelangan Gantung).",
            "Genggam Mengadah Langit Supinasi (Grip Supinated Muka Tangan Terbuka Buka Tangan Menerima Barbel Ringan Sedang Stabil Konsentrasi Tarik).",
            "Gulung Mengurai Lengkung Jari Melorot Jatuh Memanjang Meregang Nyeri Pelan Lepas Rilis Menarik Sisa Urat Lengan Membakar Lembut Peregangan (Stretch Meluncur Bawah Jari Jemari Bergantung Bar Besi Lentur Jatuh Urat Sakit Menyiksa Tegang Otot Lengan Melurus Bawah Ekstrem).",
            "Sapuan Jepit Remas Penuh Daya Cakar Kucing Menarik Menggulung Bar Rapat Kencang Tekuk Sendi Lurus Naik Mentok Tanpa Bantuan Momentum Melambai Goyang Lengan Lurus Tahan Tegang Menggumpal Membatu Meradang Tahan Tuntas Atas Sempurna Memompa."
        ] 
    },
    { 
        id: 47, name: "Dumbbell Reverse Wrist Curl", category: "strength", muscle: "forearms", equipment: "dumbbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Reverse-Wrist-Curl.gif", 
        steps: [
            "Setup: Sit down on a flat bench. Hold a light dumbbell in each hand using an overhand (pronated, palms facing down) grip.", 
            "Positioning: Rest the entire length of your forearms on your thighs so that your wrists and the dumbbells are hanging freely over the edge of your knees into thin air.", 
            "The Movement: Keeping your forearms pressed hard against your legs, curl your wrists upward toward the ceiling, bringing the back of your hands closer to your body. This targets the forearm extensors.", 
            "The Return: Slowly and carefully lower the dumbbells back down until you feel a gentle, pulling stretch in the top of your forearms. Do not use momentum."
        ],
        steps_id: [
            "Posisi Telungkup Tiarap Tangan Menyambar Tungkai Lurus Bangku Ujung Cengkram Dumbel Rawan Ekstensi Penuh (Setup Duduk Punggung Terbuka Hadap Asphal Cengkraman Pronasi Beban Enteng Jangan Terlalu Berat Rawan Retak Urat Patah).",
            "Pemastian Jejak Lurus Melekat Tak Berkibar Menempel Menyatu Serat Serat Celana Kaki Kaku Mengisolir Beban Mengayun Murni Pukulan Otot (Position Rata Paha Jepit Sendi Ujung Ngambang Ruang Hampa Jatuh Mulus Lintasan Aman Terarah Murni Otot Kerja Fokus).",
            "Mendongak Mengayun Congkel Siku Tekuk Tajam Ke Arah Diri Muka Melengkung Ekstensi Urat Atas Lengan Menyengat Penderitaan Terbakar Pompa Tegang Ekstrem (The Movement Tarik Mendongak Punggung Pergelangan Atas Langit).",
            "Menurun Rilis Kelelahan Beban Melengkung Meregang Pelan Kendor Turun Dasar Melewati Nol Derajat Memutus Momentum Sembari Meregang Panjang Urat Ujung Menahan Kembali Beban Tak Hancur Jatuh Tarikan Kontrol Pelan Memudar Konstan Kembali."
        ] 
    },
    { 
        id: 48, name: "Farmers Walk", category: "strength", muscle: "forearms", equipment: "kettlebell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Farmers-Walk.gif", 
        steps: [
            "The Pickup: Stand directly between two very heavy kettlebells (or dumbbells). Squat down with a perfectly flat back, brace your core, and grip the handles as tightly and aggressively as humanly possible.", 
            "The Posture: Stand up straight by driving through your legs. Pull your shoulders back and down, puff your chest out proudly, and look straight ahead. Do not let the heavy weights rest against or bounce off your outer thighs.", 
            "The Walk: Begin walking forward in a straight line. Use short, rapid, and highly deliberate steps to minimize swaying and maintain balance under heavy load.", 
            "The Finish: Continue walking for a set distance (e.g., 20-40 meters) or a set time, maintaining a crushing, white-knuckle grip the entire way. Carefully squat down to return the weights to the floor."
        ],
        steps_id: [
            "Pengangkatan Bobot Ekstrem Total Tubuh: Tempatkan dua benda sangat berat di sisi Anda. Jongkok dengan punggung lurus, remas keras gagang alat seolah Anda ingin menghancurkannya.",
            "Postur Tubuh: Berdiri lurus dengan mendorong dari kaki. Tarik bahu ke bawah dan ke belakang, busungkan dada. Jangan biarkan beban menabrak atau bersandar manja di paha samping.",
            "Langkah Jalan Cepat: Mulai melangkah lurus ke depan. Gunakan langkah kecil, cepat, dan terencana agar tubuh tidak terhuyung-huyung membawa beban berat.",
            "Akhir Eksekusi: Terus berjalan sejauh 20-40 meter. Pertahankan cengkeraman maut tanpa henti. Berjongkoklah dengan santun untuk meletakkan beban, jangan dibanting."
        ] 
    },
    { 
        id: 49, name: "EZ Bar Reverse Curl", category: "strength", muscle: "forearms", equipment: "ez bar", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/EZ-Bar-Reverse-Curl.gif", 
        steps: [
            "Stance: Stand perfectly straight with your feet shoulder-width apart to establish a strong foundation.", 
            "Grip: Hold an EZ curl bar in front of your thighs using a pronated (overhand, palms facing down) grip on the outer angled portions of the bar.", 
            "The Execution: Pin your elbows tightly to your ribcage. Keeping your upper arms totally still, bend at the elbows to curl the bar upwards in a semicircular motion until it reaches your upper chest.", 
            "The Eccentric: Lower the bar very slowly and methodically back to the starting position. Because of the overhand grip, you will feel this contraction intensely in the brachioradialis muscle on the top of your forearm."
        ],
        steps_id: [
            "Pondasi Berdiri: Tegak lurus dengan kaki selebar bahu. Jaga dada tetap tinggi dan inti perut mengunci.",
            "Genggaman Berbalik (Reverse): Pegang barbel EZ dengan posisi telapak tangan telungkup (menghadap ke bawah/ke arah lantai). Pegang di bagian palang yang sedikit menekuk/zigzag luar.",
            "Mengangkat (Curl): Kunci rapat siku di pinggang. Tanpa mengayun badan, lipat lengan Anda ke atas secara melingkar. Lengan atas dilarang ikut bergerak maju.",
            "Fase Turun (Eksentrik): Turunkan barbel sangat lambat untuk menghajar otot brachioradialis (urat tebal di pangkal pergelangan tangan). Kembali ke garis awal menahan beban."
        ] 
    },
    { 
        id: 50, name: "Behind The Back Barbell Wrist Curl", category: "strength", muscle: "forearms", equipment: "barbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Behind-The-Back-Barbell-Wrist-Curl.gif", 
        steps: [
            "Setup: Stand facing away from a barbell that is resting on a squat rack set at hip height. Reach behind your back and grab the bar with a shoulder-width, pronated (palms facing away from you) grip.", 
            "Positioning: Lift the bar off the rack and let it hang freely behind your glutes/hamstrings. Stand tall, brace your core, and keep your arms perfectly straight.", 
            "The Curl: Without bending your elbows whatsoever, curl the barbell upward by simply flexing your wrists toward the ceiling as hard as possible.", 
            "The Release: Lower the heavy weight back down slowly. For an extreme stretch and extra intensity, let the bar roll slightly out of your palms and into the hook of your fingertips at the very bottom."
        ],
        steps_id: [
            "Posisi Menghadap Membelakangi Rak: Berdirilah membelakangi rak berisi barbel yang dipasang setinggi panggul. Raih ke belakang dan genggam barbel dengan tangan lurus selebar punggung.",
            "Postur: Angkat barbel dari rak dan biarkan menggantung lurus tepat di belakang pantat/paha belakang. Busungkan dada dan jaga tangan terkunci lurus kaku.",
            "Menggulung Beban (Curl): Tanpa sedikit pun menekuk siku, putar/angkat barbel tersebut murni dengan mengerutkan pergelangan tangan Anda ke arah langit-langit.",
            "Peregangan Ekstrem: Turunkan pelan-pelan. Di titik terbawah, biarkan barbel sedikit tergelincir turun melintasi telapak hingga tersangkut hanya di sela jari, sebelum kembali digulung naik."
        ] 
    },

    // ================= NEW CARDIO WORKOUTS =================
    { 
        id: 68, name: "Burpee Long Jump", category: "cardio", muscle: "cardio", equipment: "bodyweight", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2025/10/Burpee-Long-Jump.gif", 
        steps: [
            "The Drop: Start in a standing position. Drop your hips and place your hands firmly on the ground in front of your feet.",
            "The Push-up: Kick your legs back into a high plank position. Perform a strict push-up by lowering your chest to the floor and pushing back up.",
            "The Leap: Quickly hop your feet back to your hands. Instead of jumping vertically, swing your arms and leap forward as far as you can like a broad jump.",
            "The Landing: Land softly on the balls of your feet, immediately absorbing the impact by dropping back down into the next burpee."
        ],
        steps_id: [
            "Menjatuhkan Diri: Dari posisi berdiri, turunkan pinggul dan letakkan telapak tangan di lantai tepat di depan kaki.",
            "Fase Push-up: Lontarkan kedua kaki lurus ke belakang. Eksekusi satu push-up penuh hingga dada mencium aspal dan dorong kembali naik.",
            "Lompatan Jauh (Broad Jump): Lontarkan kaki kembali mendekati dada. Tidak seperti burpee biasa, kali ini ayunkan tangan dan lompatlah dengan sangat jauh ke depan menyusuri lintasan.",
            "Mendarat Mulus: Mendarat dengan dua kaki bersamaan, tekuk lutut untuk menyerap benturan pendaratan, dan sambung dengan gerakan burpee selanjutnya tanpa henti."
        ] 
    },
    { 
        id: 69, name: "Navy Seal Burpee", category: "cardio", muscle: "cardio", equipment: "bodyweight", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2023/10/Navy-Seal-Burpee.gif", 
        steps: [
            "Initial Sprawl: Drop your hands to the floor and kick your feet back into a plank position.",
            "Push-up 1: Perform one strict push-up. At the top of the plank, drive your right knee aggressively to your chest and back.",
            "Push-up 2: Perform a second strict push-up. At the top of the plank, drive your left knee aggressively to your chest and back.",
            "Push-up 3 & Jump: Perform a third push-up, jump your feet forward to your hands, and explode vertically into the air with a jump."
        ],
        steps_id: [
            "Posisi Sprawl Terjun Bebas Papan Plank Jatuh Lurus Tumpu Kaki Tendang (Initial Sprawl Melorot Jatuh Posisi Bertahan Lurus Plank Lurus Baja).",
            "Tembakan Lutut Silang Kanan (Push Up 1: Lakukan Push Up, Di Puncak Naik, Sentakkan Ujung Lutut Kanan Melesat Keras Meremas Dada Muka Tengah Meluncur Kembali Cepat).",
            "Tembakan Lutut Silang Kiri Balasan (Push Up 2: Jatuh Push Up Ulang, Puncak Naik Kembali Tembak Tendang Ujung Lutut Kiri Menyakitkan Tepat Muka Dada Sempurna Mulus Terkontrol Tajam).",
            "Lontaran Mengudara (Push Up 3: Eksekusi Terakhir Push Up, Jejak Lontar Kaki Menuju Telapak Depan Tangan, Meledak Tinggi Langit Mengangkasa Merentang Lompat Tuntas Penuh Rima Pembakar Lemak Jantung Letih Bertubi)."
        ] 
    },
    { 
        id: 70, name: "Bear Crawl", category: "cardio", muscle: "cardio", equipment: "bodyweight", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Bear-Crawl.gif", 
        steps: [
            "Starting Position: Get down on all fours in a tabletop position. Your hands should be flat directly under your shoulders.",
            "The Hover: Tuck your toes under and lift your knees just one or two inches hovering off the ground. Your back must remain absolutely flat, like a table.",
            "The Crawl: Move forward by simultaneously stepping your right hand and your left foot forward in a small, controlled stride.",
            "Continuous Motion: Immediately follow by moving your left hand and right foot forward. Continue this contralateral crawling motion without letting your knees touch the floor."
        ],
        steps_id: [
            "Sikap Awal Menunduk: Posisikan tubuh merangkak dengan tangan tepat di bawah poros bahu dan lutut lurus di bawah panggul (posisi meja).",
            "Lutut Mengambang (Hovering): Lipat ujung jari kaki untuk menumpu di lantai. Angkat sedikit kedua lutut mengambang sekitar 5 cm saja dari lantai. Punggung wajib rata lurus bagai selembar papan.",
            "Merayap Menyilang: Merangkak perlahan maju dengan melangkahkan tangan kanan bersamaan dengan kaki kiri. Langkahnya pendek namun sangat dikendalikan tegangan otot intinya.",
            "Sinkronisasi Bergerak (Continuous): Tukar merayap dengan tangan kiri dan kaki kanan. Berjalanlah pelan menyerupai beruang merayap namun haram hukumnya menunggingkan bokong ke udara apalagi menyentuh lutut ke tanah aspal."
        ] 
    },
    { 
        id: 71, name: "Power Lunge", category: "cardio", muscle: "cardio", equipment: "bodyweight", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/05/Power-Lunge.gif", 
        steps: [
            "The Setup: Begin in a standard lunge position, with your right foot forward and left foot back. Both knees should be bent at 90-degree angles.",
            "The Load: Lower your hips slightly to build potential energy, keeping your chest upright and core tight.",
            "The Explosion: Drive explosively through the heel of your front foot and the toes of your back foot to launch your entire body vertically into the air.",
            "The Switch: While suspended in the air, quickly scissor your legs to switch their positions. Land softly back into the lunge position and immediately repeat."
        ],
        steps_id: [
            "Bentuk Lunge Berdiri: Ambil posisi lunge. Kaki satu di depan tertekuk membentuk sisi 90 drajat miring, sedangkan kaki yang terbenam di buritan hampir menggesek tanah aspal landasan.",
            "Akselerasi Bawah Beban: Tundukkan sedikit sentakan gravitasi tubuh untuk memasok serabut ledakan siap lontar, pastikan dada tegak menatap arah jauh tak bungkuk sedih meratap.",
            "Tembakan Melenting Melayang Udara (Explosion Jump): Tolak telapak pijakan ujung kaki membelah udara berontak meloncat vertikal memancur sejauh tingginya.",
            "Manuver Geser Gunting Lintas Angin Hampa (Switch Scissor Drop): Pada masa mengangkasa tak memijak, tukar serong kaki pelengkap silang lurus mulus. Mendarat memantul meredam daya hantaman aspal tanpa berhenti kembali terlecut untuk menghempas melesat lari udara kembali beriring."
        ] 
    },
    { 
        id: 72, name: "Running", category: "cardio", muscle: "cardio", equipment: "bodyweight", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/04/Running.gif", 
        steps: [
            "Posture: Maintain a tall, upright posture with a very slight forward lean from the ankles, not the waist. Keep your shoulders relaxed and chest open.",
            "Foot Strike: Focus on landing softly on your mid-foot, directly underneath your center of gravity. Avoid over-striding and heavy heel striking.",
            "Arm Swing: Bend your elbows at approximately 90 degrees. Swing your arms straight forward and back in rhythm with your legs, without crossing your body's centerline.",
            "Cadence: Maintain a steady, efficient turnover rate (cadence). Focus on a consistent breathing pattern to build cardiovascular endurance."
        ],
        steps_id: [
            "Postur Tubuh Penuh Lurus Membusung (Posture Tall Forward Lean Ankles Lurus Tegang Stabil Lengan Siku 90 Derajat Kaku Menyilang Berirama Maju).",
            "Hantaman Pijakan Dasar Lentur Tengah Sepatu Mengayun (Mid Foot Strike Landing Hampa Banting Hindari Tumit Menyodok Aspal Langsung Sakit Patah Sendi).",
            "Piston Tangan Pendorong Energi Mulus Berayun (Arm Swing Sinkron Menyabet Udara Tepi Pinggul Kiri Kanan Menyeimbangkan Ritme Momentum Tarikan Gravitasi Bumi Tak Meleset).",
            "Denyut Rima Konsistensi Pelari Jarak Jauh Marathon Pembakar Kalori Paru Menggebu Memerah Hancur Berkeringat Deras Mulus Cepat Dinamis."
        ] 
    },
    { 
        id: 73, name: "Sprint", category: "cardio", muscle: "cardio", equipment: "bodyweight", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Sprint.gif", 
        steps: [
            "The Acceleration: Lean your body forward and push off the ground with maximum explosive force from the balls of your feet.",
            "Knee Drive: Aggressively drive your knees upward and forward with each stride to maximize power and speed.",
            "Arm Mechanics: Pump your arms violently. Your hands should travel from your 'cheek to your cheek' (face cheek to butt cheek) in a rapid, straight line.",
            "Max Effort: Maintain 100% maximum effort for short bursts (e.g., 10-20 seconds), focusing on speed rather than pacing."
        ],
        steps_id: [
            "Luncuran Akselerasi Kilat Penuh Ledak Tembakan Daya Cengkram Pijak Lenting Tolak Maju Gesit Cepat Terjang (Sprint Acceleration Blast Bola Telapak Ujung Melenting Tajam Tembus Hampa Angin Kuat Kuasa Penuh).",
            "Tusukan Angkat Lutut Melontar Vertikal Laju Daya Depan Tembus Patah Melaju Mengamuk Tak Gentar Daya Maksimal 100% Cepat Bertenaga Mulus (Knee Drive Tembakan Lutut Menggedor Momentum Kuat Cepat Bising Terdengar).",
            "Pabrik Ayun Pompa Setir Piston Gesit Tajam Laju Sabet Menyambar Udara Menusuk Tarik Muka Sentuh Ujung Kepala Cepat Membalas Belakang Siku Ganas Tajam Lurus (Arm Mechanic Pumping Mengiring Menyeimbang Hampa Sprint Lari Laju Mengamuk Tembak Bising Tembus Target Lari)."
        ] 
    },
    { 
        id: 74, name: "Jump Rope", category: "cardio", muscle: "cardio", equipment: "bodyweight", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Jump-Rope.gif", 
        steps: [
            "Setup: Hold the jump rope handles with your hands positioned slightly forward of your hips. Keep your elbows tucked strictly against your ribs.",
            "The Rotation: The rope should be turned using quick, small circular motions from your wrists only. Do not swing your entire arms.",
            "The Jump: Push off the balls of your feet to jump just an inch or two into the air—only high enough to let the rope pass underneath.",
            "Rhythm: Land softly on the balls of your feet with a micro-bend in your knees to absorb impact. Maintain a rapid, consistent bouncing rhythm."
        ],
        steps_id: [
            "Postur Jepitan Siku Pengontrol Lompat Tali Membakar Lemak Total Lengan Menjepit Tangkai Putar Tali (Setup Hips Posisi Engsel Menekuk Kaku Tahan Pinggang Belakang Tali Menyilang).",
            "Putaran Mekanis Sentakan Jari Murni Minimalis Rotasi Tak Menguras Tenaga Batal Melayang Ayunan Bodoh Bahu Siku Tertutup (Rotation Wrist Circular Laju Menukik Tajam Putar Gesit Murni Helaian Ujung Lengan).",
            "Loncatan Minimal Serasi Menyerap Getar Rima Rintangan Tak Menghantam Bumi Bising Lompat Sempurna Meresap Lenting Angkasa Pendek Sejengkal Telapak Tipis Mengambang (Jump Pijakan Menggantung Melenting Lentur Merayap Menyeimbang Laju Cepat Menukik Tali Bawah Tembus).",
            "Tempo Stabil Irama Kardiovaskular Pembangun Ketahanan Absolut Membakar Cepat Lemak Keringat Menggumpal Menitis Tak Berhenti Menari Mengudara (Rhythm Bouncing Laju Tali Harmoni Putaran Cepat Mengamuk Seimbang Terkontrol Murni)."
        ] 
    },
    { 
        id: 75, name: "Stationary Bike", category: "cardio", muscle: "cardio", equipment: "machine", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Stationary-Bike.gif", 
        steps: [
            "Adjustment: Adjust the saddle height so that your leg has a slight 5-to-10-degree bend at the lowest point of the pedal stroke. Ensure the handlebars are at a comfortable distance.",
            "Posture: Sit on the saddle and grip the handlebars. Keep your spine relatively straight and avoid excessively rounding your upper back.",
            "Pedaling Technique: Push down forcefully through the ball of your foot on the downward stroke, and actively pull up slightly on the upward stroke for maximum efficiency.",
            "Pacing & Resistance: Maintain a high, steady cadence (RPM). Adjust the machine's resistance to simulate climbing hills or sprinting on flat roads."
        ],
        steps_id: [
            "Kalibrasi Ergonomi Kursi Sadel Menyempurnakan Rentang Tekuk 10 Derajat Sempurna Terbebas Bahaya Sakit Patah Sendi Lutut Panjang Tungkai Ujung Pijakan Menapak Telak Pas Membujur (Setup Saddle Posisi Tepat Panjang Kaki Ayuh).",
            "Bingkai Lengan Merengkuh Sandar Setir Batang Lurus Punggung Membusung Udara Tahan Hampa Oksigen Bungkuk Parah (Posture Setir Mengunci Rata Punggung Mengayuh Meluncur Mulus).",
            "Mekanik Dorong Jejak Berputar Siklus Bulat Mulus Mengayuh Bukan Memukul Hentak Menggantung Rantai Lancar Licin Berayun (Pedal Tekan Mengalir Meluncur Sinergis Turun Mendorong Naik Menarik Melingkar Rata Rotasi Laju).",
            "Pengatur Badai Tantangan Magnetik Tanjakan Terjal Pembakar Paha Murni Siksa Tahan Deras Keringat Menanjak Turun Cepat Beban Simulasi (Resistance Pacing Endurance Tempo Gowes Cepat Aturan Tinggi Denyut Laju Maksimal Hati Tahan Murni)."
        ] 
    },
    { 
        id: 76, name: "Treadmill", category: "cardio", muscle: "cardio", equipment: "machine", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Treadmill.gif", 
        steps: [
            "Setup: Stand on the side rails. Select your desired speed and incline on the console. Once the belt is moving steadily, carefully step onto the center of the belt.",
            "Form: Stand tall with your chest open. Avoid leaning heavily on the handrails; your arms should swing naturally by your sides.",
            "Execution: Walk or run at a steady pace. Keep your gaze forward to maintain balance and proper neck alignment.",
            "Cool Down: Maintain your pace for the duration of the session, then gradually decrease the speed to a slow walk to safely cool down before stepping off."
        ],
        steps_id: [
            "Pengaturan Awalan Menyelam Lintasan Karet Bergerak Lari Berdiri Rapat Pelan Merintis Laju Layar Monitor Pencet Target Kemiringan Curam (Setup Tapak Jalur Mesin Tepi Sandar Siap Laju Stabil Pelan Naik Pusat Matras Bergulir).",
            "Berdiri Lurus Penuh Daya Tegak Raga Tolak Manja Menyerah Gandulan Menyender Pegangan Ujung Mesin Rileks Murni Mandiri Lari Lepas (Form Lari Tanpa Memegang Handle Murni Menopang Membakar Oksigen Kalori Lebih Teruji Tahan).",
            "Pacu Langkah Konstan Melaju Lari Pagi Stabil Rima Berdenyut Penuh Daya Angkat Membakar Deras Jantung Bugar Optimal (Execute Pace Menatap Dinding Depan Jauh Lurus Jangan Tertunduk Sakit Saraf Leher Jatuh Rawan).",
            "Siklus Peredaman Sisa Napas Jantung Melemah Santai Surut Penurunan Transmisi Kecepatan Merayap Berhenti Menahan Menginjak Aspal Dingin Jatuh Henti Santai Aman Mulus (Cool Down Laju Henti Bertahap Perlahan Stabil Berhenti Keseluruhan Mesin Mati)."
        ] 
    },
    { 
        id: 77, name: "Walk Wave Machine", category: "cardio", muscle: "cardio", equipment: "machine", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/06/Walk-Wave-Machine.gif", 
        steps: [
            "Mounting: Carefully step onto the foot pedals of the wave/arc machine. Grip the stationary or moving handles to secure your balance.",
            "The Motion: Begin shifting your weight from side to side in a smooth, wave-like, or arc trajectory. Push down firmly through your entire foot.",
            "Core Engagement: Keep your core tight and your torso upright to stabilize your body against the lateral/diagonal forces of the machine.",
            "Pacing: Establish a rhythmic, continuous sweeping motion. Adjust the resistance and stride rate according to your cardiovascular goals."
        ],
        steps_id: [
            "Memijak Plat Bergerak: Naiki perlengkapan tapak ombak gelombang arc pelan, raih pegangan stabil agar tak tergelincir lintasan melengkungnya.",
            "Ayun Diagonal Miring: Operkan berat memindahkan pusat daya lentur mengayun memutar geser miring tapak menari mendatar ke kiri kanan bagai seluncur es membelah es licin.",
            "Pilar Tubuh Inti Mengakar: Tancap otot sabuk pinggang menahan getaran laju mesin yang melayang samping menguras keseimbangan terpusat di titik rawan pinggul lentur.",
            "Rima Pacing Detak Menit Kardiovaskular Pembakar Lemak Pinggang Konstan Panjang Lelah: Rapatkan dorongan kaki tempo tak putus menyapu gerakan bolak-balik tanpa jeda untuk stimulasi jantung prima luar biasa lelah totalitas bugar membakar kalori terbuang habis terbakar."
        ] 
    },
    { 
        id: 78, name: "Rowing Machine", category: "cardio", muscle: "cardio", equipment: "machine", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Rowing-Machine.gif", 
        steps: [
            "The Catch: Sit on the ergometer and secure your feet in the straps. Slide forward, bend your knees, and grab the handle. Your shins should be vertical, chest proud, and back flat.",
            "The Drive: Initiate the power stroke strictly by driving your legs aggressively into the footplates. Keep your arms straight as you push your body backward.",
            "The Finish: As your legs reach full extension, lean your torso slightly back and forcefully pull the handle straight into your lower rib cage.",
            "The Recovery: Extend your arms forward first, then hinge your torso forward from the hips, and finally bend your knees to let the seat slide smoothly back to the catch position."
        ],
        steps_id: [
            "Awalan (The Catch): Duduk di mesin ergometer (rowing), kencangkan tali sepatu. Meluncurlah melipat lutut ke depan, raih gagang lurus dengan dada membusung dan punggung rata sempurna.",
            "Dorongan (The Drive): Jangan mulai dengan menarik tangan! Dorong kuat telapak kaki ke pijakan untuk mendorong tubuh dan jok meluncur jauh ke belakang dengan lengan tetap lurus membentang kaku.",
            "Akhir Tarikan (The Finish): Begitu kaki mencapai titik lurus penuh, condongkan punggung sedikit ke belakang, lalu tarik keras gagang setir tepat menusuk rusuk dada bawah. Remas otot punggung hebat.",
            "Pengulangan Menyelam (The Recovery): Kendurkan rilis lengan Anda lurus ke depan terlebih dahulu. Membungkuk pelan dari pinggang, lalu tekuk perlahan lutut membiarkan jok tubuh merosot kembali melipat pasrah mengulang siklus siksaan."
        ] 
    },
    { 
        id: 79, name: "Stair Climber Machine", category: "cardio", muscle: "cardio", equipment: "machine", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Stair-Climber.gif", 
        steps: [
            "Setup: Step onto the revolving staircase. Set a moderate, sustainable speed on the console. Lightly rest your fingertips on the side rails strictly for balance.",
            "Posture Warning: Stand totally upright. Do not hunch over or rest your body weight heavily on the console, as this reduces caloric burn and stresses the lower back.",
            "The Step: Place your entire foot onto each step, rather than just the balls of your feet. This fully activates the glutes and hamstrings.",
            "Execution: Push firmly down through your heel to step up. Maintain a steady, continuous rhythm without skipping steps."
        ],
        steps_id: [
            "Setup Eskalator Laju Konstan Pendakian Curam Terus Menerus Mesin Tangga Putar Bising Menguji Napas Jantung Denyut Deras Membakar (Setup Stair Climber).",
            "Larangan Menggelayut Membungkuk Beban (Posture Hunch No Lean Berdiri Tegak Sempurna Menumpu Berat Murni Tak Bersandar Curi Curang Latihan Lemah Hilang Otot Tarik Sakit Saraf Belakang).",
            "Injakan Tapak Utuh Menyasar Paha Pantat Belakang Tegang Sempurna (Full Foot Landing Meredam Cedera Jejak Sepatu Rata Menendang Naik Bukan Jinjit Tumit Gantung Membakar Lelah).",
            "Mendaki Eksekusi Menembus Batas Napas Putaran Terus Menerus Melaju Irama Jantung Memompa Deras Menggila Hancur Keringat Tahan Tanpa Henti Irama Putar."
        ] 
    },
    { 
        id: 80, name: "Elliptical Machine", category: "cardio", muscle: "cardio", equipment: "machine", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Elliptical-Machine.gif", 
        steps: [
            "Setup: Step safely onto the foot pedals and grab the moving handrails. Select your desired resistance and incline profile.",
            "Posture: Stand tall with a straight spine, keeping your head up and core lightly engaged. Do not slouch over the console.",
            "The Motion: Begin pedaling in a smooth, forward, elliptical motion. Push down and forward evenly through your entire foot.",
            "Total Body Sync: Push and pull the handrails in synchronized rhythm with your leg movements, utilizing equal effort from your upper and lower body."
        ],
        steps_id: [
            "Ambil Pijakan Alat Lari Awan Tanpa Hantaman Sendi Licin Lancar Mulus Tanpa Beban Guncang Patahan Sendi: Naikkan kaki di pedal lebar yang siap memandu lengkung oval sempurna. Cengkeram gagang tuas bergerak vertikal ayun silang badan.",
            "Tegakkan Tulang Lurus (Spine Tall Core Engaged No Slouch Posture Frame Lock): Menatap dinding tegak membusung (core ditegangkan). Jangan membongkok malas mencari kenyamanan.",
            "Putaran Orbit Planet Lintas (Elliptical Motion Glide Drive Force Smooth Constant): Gowes miring mendatar menekan telapak seutuhnya (bukan loncat). Rangkaikan rima lari halus menggelinding melayang orbit lonjong udara hampa.",
            "Sinergi Daya Dorong Tarik Lengan Tuas Kayuh Terpadu Kardio Pembakar Total Seluruh Tubuh Lemak Luruh Murni: Gempur padu tangan menarik/mendorong stik memanjang bergantian melawan kaki menendang menciptakan orkestra hantaman pembakar lemak utuh keringat deras bercucuran deras mantap konstan."
        ] 
    },
    { 
        id: 81, name: "Mountain Climber", category: "cardio", muscle: "cardio", equipment: "bodyweight", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Mountain-Climber.gif", 
        steps: [
            "Starting Stance: Get into a strict, high push-up position. Your hands should be planted firmly directly underneath your shoulders. Your body must form a straight line.",
            "The Drive: Engage your abdominal muscles intensely. Quickly lift your right foot off the floor and drive your right knee forcefully straight up toward the center of your chest.",
            "The Switch: As you kick your right foot back to the starting position, simultaneously jump your left knee up toward your chest in a seamless exchange.",
            "The Pace: Continue alternating legs in a rapid, running-like motion. Keep your hips locked down parallel to the floor; do not let your glutes bounce high."
        ],
        steps_id: [
            "Postur Push-Up Statis: Tempatkan badan telungkup datar lurus bertopang keras lengan sejajar lurus bahu kokoh baja.",
            "Tendangan Tempurung Lutut Ke Dada (Knee Drive): Bawa tembak satu dengkul lutut melesat laju menuju kerongkongan memecah udara bawah perut meremas otot perut tengah remuk memeras.",
            "Pertukaran Silang Laju Ganti Tungkai Udara Pelari Tebing Menukik Ganas Eksekusi Cepat Bertubi (Switch Rapid): Lentur mundur silih berganti tembak balasan tungkai kaki lawan. Rangkaian irama melesat gesit.",
            "Kunci Pantat Tidak Mentul Melenting (Lock Hips No Bounce Cardio Rhythm Focus Burn): Tembakkan lutut berulang bagai sprint lari lantai namun kunci pasak bokong tak memantul-mantul naik tinggi kacau bergelombang mengganggu poros lurus tulang punggung lari mendarat."
        ] 
    },
    { 
        id: 82, name: "Power Skips", category: "cardio", muscle: "cardio", equipment: "bodyweight", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2022/02/Power-Skips.gif", 
        steps: [
            "The Load: Stand tall and step forward slightly with your right foot. Bend your knees slightly to load the jump.",
            "The Explosion: Drive your left knee forcefully upward toward your chest while simultaneously jumping as high as possible off your right foot.",
            "Arm Action: Throw your right arm aggressively upward in synchronization with your left knee to maximize vertical lift.",
            "The Landing: Land softly on the ball of your right foot, immediately step forward with your left foot, and seamlessly transition into the next power skip on the opposite side."
        ],
        steps_id: [
            "Awalan Angkat Ayun: Bungkukkan badan secuil menyisipkan momentum tekanan paha penumpu meloncat menembak roket gravitasi atas langit.",
            "Sentakan Loncat Melayang Ganas Dengkul Atas Lurus Menjulang Roket Hantam Hampa Vertikal Daya Ledak (Explosion): Hantam aspal melontarkan pantulan tubuh melesat membumbung (satu lutut diayun tembak menyilang atas muka tinggi dada sejajar pinggang vertikal).",
            "Ayun Tangan Mengiring Membantu Momentum Tenaga Laju Lenting Udara Tepat Rima Sinkron Mendarat Mulust (Arm Throw Sync Drive Hentak Lurus Vertikal Kuat Sejajar Hampa): Sabet tangan bersilangan guna menambah momen luncuran lontar balistik tubuh merobek perlawanan melayang. Mendarat halus sambut tukar tungkai loncatan." 
        ] 
    },
    { 
        id: 83, name: "Bicycle Crunch", category: "cardio", muscle: "cardio", equipment: "bodyweight", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Bicycle-Crunch.gif", 
        steps: [
            "Setup: Lie flat on your back on a mat. Place your hands lightly behind your head without pulling on your neck. Lift both legs so your knees are bent at 90 degrees.",
            "The Twist: Crunch your torso upward and forcefully twist to the right, bringing your left elbow across your body to meet your right knee.",
            "The Extension: Simultaneously extend your left leg completely straight out, hovering it just a few inches above the floor.",
            "The Alternate: Immediately reverse the motion, twisting your right elbow to meet your left knee while fully extending your right leg. Continue in a fluid, pedaling rhythm."
        ],
        steps_id: [
            "Posisi Baring Sepeda Udara Mengambang Tempelkan Lumbar Belakang (Setup Hollow Body Core Engage): Tidur menyandar lantai. Dekap tangan bebas (jangan cekik leher) belakang daun telinga. Kaki melayang tekuk ngambang udara tak sentuh bumi.",
            "Sodokan Silang Memeras Lemak Samping Obliq Miring Tajam Putar Bahu Menyentuh Berlawanan Siku-Dengkul (Crunch Twist Torque Obliterating Oblique Burn Rotasi Silang): Angkat pundak putar melintir menyenggolkan siku bersilangan menemui arah tempurung tungkai bengkok sebelahnya.",
            "Kaki Pedal Lurus Menombak Ngambang Tipis Asphal (Extension Hover Leg): Semprotkan tendang lurus panjang tajam memaku menahan ngambang tungkai lainnya.",
            "Kayuh Putaran Kontinu Bergantian Membakar Total (Fluid Pedal Crunch Rhythm Alternate Continuous): Putar menyiksa rotasi pinggang silang kanan kiri tiada henti memompa ayunan sepedaan menyayat pinggang serabut lemak otot terbakar pedih luruh berpeluh tuntas keringat."
        ] 
    },
    { 
        id: 84, name: "Butt Kicks", category: "cardio", muscle: "cardio", equipment: "bodyweight", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/04/Butt-Kicks.gif", 
        steps: [
            "Posture: Stand tall with your feet hip-width apart. Keep your chest up, core braced, and look straight ahead.",
            "The Motion: Begin jogging in place. Instead of lifting your knees high, rapidly kick your heels backward and upward toward your glutes.",
            "The Target: Aim to actually tap your glutes with your heels on every single stride.",
            "Pacing: Pump your arms naturally as you would when running, and maintain a very fast, rapid-fire pace on the balls of your feet."
        ],
        steps_id: [
            "Bentuk Lari Pemanasan Dinamis Konstan (Posture Form Lurus Tegang Dada Terbuka Pandangan Fokus Muka Target Tembus): Berdiri membusung tegap lurus bersiaga berlari statis konstan ritmis.",
            "Ayun Menendang Pantat (Motion Sprint Rear Heel Drive Glute Kick Laju Ke Belakang Atas Berirama Rima Menggebu Pantul Mulus): Joging di titik poros Anda, angkat tembak menendang tumit sepatu mendobrak menjulang tinggi memukul mendarat ke belahan glutes daging bokong pantat menyapu cepat ganti-gantian tungkai gempur.",
            "Target Hantaman Telak Menyapu Bawah Ujung Urat Tegang Hamstring Melipat Sempurna Mengayun (Target Strike Tap Full Contraction Bounding Squeeze Lincah Kering Hantaman Sentuh Puncak): Upayakan pukulan tajam mendarat memukul menampar telak di belakang tubuh secara penuh memompa menyengat lentur menyapu urat ligamen lutut belakang panas memompa darah.",
            "Kecepatan Irama Pacing Mesin Mengamuk Cepat Keringat Hancur Deras Lelah Bugar Optimal (Rapid Fire Sprint Pace Pump Arms Rhythmic Hentakan Tapak Kecil Berirama Melompat Lembut Pijakan Lari Angin Rileks Mendarat Mulus Hampa Tahan Cepat Laju Penuh Kecepatan Melesat Tak Henti)."
        ] 
    },
    { 
        id: 85, name: "Plyo Jacks", category: "cardio", muscle: "cardio", equipment: "bodyweight", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/05/Plyo-Jacks.gif", 
        steps: [
            "Starting Stance: Begin standing tall with your feet together and your arms down by your sides.",
            "The Drop: Quickly jump your feet out wide while simultaneously dropping your hips deep into a wide squat position.",
            "The Reach: As you drop into the squat, swing your arms straight up and overhead until your hands meet.",
            "The Explosion: Explosively push through the floor to jump back up, bringing your feet together and returning your arms to your sides before immediately dropping back into the squat."
        ],
        steps_id: [
            "Awalan: Berdiri sigap merapatkan dua belah tumpu tungkai ujung paha. Lengan merunduk lurus istirahat merapat tubuh pinggang bawah.",
            "Ledakan Terjun Payung Meluncur Membelah Melebar Hantaman Lurus Tengkuk Jatuh (The Drop Squat Wide Plyometric Hentak Ganas Meluncur Gravitasi Merangkul Mengembang Melebar Mengayun Bawah Tanah Melayang Atas Hampa): Lontarkan membelah melebar menyilang jatuh (squat drop) hantam membuka tungkai mendarat renggang membelah kuda-kuda kokoh rendahan mendarat lentur mengeper bawah.",
            "Rengkuhan Mengangkasa Menjulang Lengkung Bertepuk Menampar Angin Lurus Ujung Langit Puncak Tegang Merentang Bahu Terbang (The Reach Clap Overhead Swing Lurus Udara Sempurna Lingkar Lebar Menjulang Lurus Membentang Rapat Menampar Tapak Tangan Ujung Hampa Lepas Pukulan Hampa Tembak Awan Berayun Sinergis).",
            "Meredam Pantulan Hentak Bumi Tolakan Cepat Reaksi Kilat Menukik Ganas Berantai Siklus Terbakar Lelah Kardio Brutal Stamina (Explosion Hentak Dorong Melayang Cepat Kumpul Kaki Lurus Rapat Sentuh Menutup Lengan Jatuh Menuju Pijakan Awal Bersiap Terjun Menyobek Angin Berulang Konstan Menahan Siksa Detak Lelah Jantung Berdenyut Hebat Penuh Tuntas Bugar)."
        ] 
    },
    { 
        id: 86, name: "Jumping Jack", category: "cardio", muscle: "cardio", equipment: "bodyweight", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Jumping-jacks.gif", 
        steps: [
            "Starting Position: Stand completely upright with your legs together, knees slightly bent, and your arms resting relaxed down by your sides.",
            "The Jump Out: In one synchronized, explosive motion, jump slightly into the air while simultaneously spreading your legs out slightly wider than shoulder-width.",
            "The Arm Sweep: As you jump your legs out, sweep both of your arms out to the sides and up in a wide arc until your hands touch above your head.",
            "The Return: Immediately reverse the motion by jumping again, bringing your feet back together and sweeping your arms back down to your sides."
        ],
        steps_id: [
            "Awalan Statis Diam Kaku Lurus Menyamping Hampa Rapat (Starting Form Posture Tunggal): Berdiri lurus wajar normal rileks.",
            "Loncatan Terbelah Lebar Rima Mengapung Ringan Udara (Jump Out Sinkron Menyilang Mekar Rentang Bebas Terlempar Angin Lentur Ayun Samping Buka Jauh Jarak Tungkai Lebar Hentak Mulus Lenting Pijakan Tepuk Empuk Hampa Sentuh Lentur Mendarat Rapat Pijak).",
            "Ayun Bentang Menapak Tepuk Udara Atas Lurus Garis Melengkung Sapu Angin Bising Jauh Merentang Lurus Lengkung Atas Kepala Langit Puncak (Arm Sweep Rima Tepuk Sinkron Harmoni Gerak Udara Sabet Menyilang Atas Tepukan Mendarat Rapat Merengkuh Lengkung Atas Hampa).",
            "Tutup Sinergi Laju Siklus Irama Membal Konstan Rebound Pegas Melompat Kembali Susun Rapat Menyatu Berirama Terus Memacu Konstan Jantung Tahan Letih Terus Menerus Tuntas Berkeringat Kencang Melaju Tak Berhenti Detik (The Return Tutup Sigap Lentur Sambung Siklus Pantulan Meluncur Konstan Membakar Stamina Kering Cepat)."
        ] 
    },
    { 
        id: 87, name: "High Knee Skips", category: "cardio", muscle: "cardio", equipment: "bodyweight", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/05/High-Knee-Skips.gif", 
        steps: [
            "The Motion: Begin a skipping motion moving forward or in place. Emphasize vertical height and knee drive rather than forward distance.",
            "The Drive: On each skip, aggressively drive your lead knee straight up into the air, aiming to bring it above your waistline.",
            "Arm Action: Pump your opposite arm forward vigorously to generate upward momentum and maintain balance.",
            "Rhythm: Land softly on the ball of the foot and immediately use that elastic energy to transition smoothly into the high knee skip on the opposite leg."
        ],
        steps_id: [
            "Awalan Melompat Berjingkat Gembira Mengudara Hentak Atas (The Motion Skip Vertical Bound Rima Jingkat Mengawang Pegas Tungkai Ringan Maju Depan Laju Lenting Udara Murni Tanpa Beban Menjulang Melontar Jauh Rima Sempurna Hentakan Meluncur Maju Melambung Murni Rima Ceria Bugar Totalitas Cepat Tahan Konstan Lentur).", 
            "Gempuran Tembak Dengkul Lutut Menancap Pucuk Udara (The Drive High Knee Thrust Tembakan Lurus Vertikal Mengamuk Laju Rima Hentak Hampa Atas Menjulang Lurus Membeku Terbang Membelah Mengangkat Pinggang Menembus Batas Langit Hentakan Udara Bebas Sempurna Tegang Mulus Meroket).",
            "Ayun Gempur Piston Tangan Siku Rima Berbalas (Arm Action Pump Mengayun Rima Melaju Melayang Meredam Rima Harmonik Silang Berhadapan Seimbang Mulus Hentak Mulus Mengawal Meluncur Hampa Jauh Stabil Fokus Konsentrasi Daya Ledak Bawah Ayunan Keseimbangan Sempurna).",
            "Pendaratan Lentur Jingkat Rima Mulus (Rhythm Soft Landing Membal Pantul Kaki Pegas Lontar Menyerap Energi Transisi Mulus Mengulang Mengalun Bergantian Tungkai Melaju Melontar Kembali Udara Bertubi Membakar Rima Irama Cepat Konstan Ritmis Hentak Bising Nafas Lelah Terpacu Paru Bugar Penuh Puncak Pembakaran Optimal)."
        ] 
    }
];