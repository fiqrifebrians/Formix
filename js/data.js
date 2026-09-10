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
            "Menurunkan Beban: Angkat barbel dari rak dengan meluruskan lengan. Tarik napas dalam, kencangkan otot inti, dan turunkan barbel perlahan hingga menyentuh bagian tengah dada. Jaga siku pada sudut 45 derajat.",
            "Dorongan: Hembuskan napas kuat dan dorong barbel kembali ke posisi awal. Dorong barbel dengan sedikit lengkungan ke arah dada atas. Luruskan lengan tanpa mengunci siku sepenuhnya di atas."
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
            "Posisi Awal: Mulai dalam posisi plank tinggi. Letakkan telapak tangan rata di lantai, sedikit lebih lebar dari bahu. Luruskan kaki ke belakang dengan jari kaki mencengkeram lantai.",
            "Postur Tubuh: Kencangkan otot perut dan bokong, pastikan tubuh membentuk garis lurus yang kaku dari kepala hingga tumit. Jangan biarkan pinggul melorot atau terlalu menungging.",
            "Fase Turun: Tarik napas dan turunkan tubuh perlahan dengan menekuk siku. Jaga siku mengarah ke belakang pada sudut 45 derajat. Turunkan hingga dada hampir menyentuh lantai.",
            "Fase Dorong: Hembuskan napas dan dorong telapak tangan kuat-kuat ke lantai. Kembalikan tubuh ke posisi awal dengan satu gerakan mulus terkontrol."
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
            "Persiapan: Pegang sepasang dumbel dan berbaring telentang di atas bangku. Dorong dumbel lurus ke atas tepat di atas dada, telapak tangan saling berhadapan (genggaman netral).",
            "Posisi Lengan: Tekuk siku sedikit saja dan kunci posisi tersebut. Sangat penting untuk menjaga sudut siku ini tetap stabil—ini adalah gerakan memeluk, bukan mendorong.",
            "Regangan: Tarik napas dan turunkan dumbel ke samping dalam lintasan melengkung yang lebar. Lanjutkan hingga Anda merasakan regangan dalam pada otot dada. Jangan turun melebihi batas nyaman bahu.",
            "Kontraksi: Hembuskan napas dan balikkan gerakan, gunakan otot dada untuk menarik dumbel kembali ke atas. Ikuti lintasan lengkung yang sama seolah-olah Anda sedang memeluk pohon besar."
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
            "Persiapan: Berdiri tepat di tengah mesin kabel ganda. Atur katrol pada posisi paling tinggi dan genggam gagang D-handle di masing-masing tangan.",
            "Postur: Ambil satu langkah ke depan dengan salah satu kaki untuk kuda-kuda yang seimbang. Condongkan tubuh sedikit ke depan (15-30 derajat) dan kencangkan perut.",
            "Gerakan: Dengan siku sedikit tertekuk, tarik gagang ke depan dan ke bawah dalam gerakan menyapu lebar. Tarik dari dada hingga kedua tangan bertemu atau menyilang di depan pinggang.",
            "Kembali: Biarkan kabel menarik lengan Anda kembali ke posisi awal secara perlahan. Pastikan Anda merasakan regangan di dada sebelum mengulangi gerakan."
        ] 
    },
    { 
        id: 5, name: "Pec Deck Fly", category: "strength", muscle: "chest", equipment: "machine", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Pec-Deck-Fly.gif", 
        steps: [
            "Setup: Sit on the Pec Deck machine with your back flat against the pad. Adjust the seat height so that the handles are exactly at chest level.", 
            "Grip: Grab the handles (or place your forearms on the pads, depending on the machine design) ensuring your elbows are slightly bent and aligned with your shoulders.", 
            "The Contraction: Exhale and squeeze your pectoral muscles to bring the handles together directly in front of your chest. Hold the peak contraction for a full second.", 
            "The Stretch: Inhale and slowly let the handles return to the starting position, opening your chest until you feel a comfortable stretch without hyperextending your shoulders."
        ],
        steps_id: [
            "Persiapan: Duduk tegak di mesin Pec Deck dengan punggung menempel rata pada bantalan. Atur tinggi kursi sehingga gagang berada sejajar dengan dada.",
            "Genggaman: Pegang gagang (atau letakkan lengan bawah di bantalan), pastikan siku sedikit tertekuk dan sejajar dengan bahu.",
            "Kontraksi: Hembuskan napas dan remas otot dada untuk mempertemukan gagang tepat di depan dada. Tahan puncak kontraksi selama satu detik penuh.",
            "Regangan: Tarik napas dan biarkan gagang kembali perlahan ke posisi awal. Buka dada hingga terasa regangan ringan tanpa membebani bahu berlebihan."
        ] 
    },
    { 
        id: 6, name: "Low Cable Crossover", category: "strength", muscle: "chest", equipment: "cables", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Low-Cable-Crossover.gif", 
        steps: [
            "Setup: Set the pulleys on a dual cable machine to the lowest floor setting. Grab the D-handles with an underhand grip (palms facing forward/up).", 
            "Posture: Stand in the center of the machine, take a slight step forward to create tension, and maintain a proud chest with a straight back.", 
            "The Upward Sweep: Keeping a slight bend in your elbows, exhale and scoop the cables upward and inward in a wide arc until your hands meet at upper-chest or chin level. This heavily targets the upper pectoral fibers.", 
            "The Descent: Inhale and lower the handles slowly and steadily back down to your sides, feeling a stretch across your chest."
        ],
        steps_id: [
            "Persiapan: Atur katrol di mesin kabel ke posisi lantai paling bawah. Genggam gagang D-handle dengan telapak tangan menghadap ke depan/atas.",
            "Postur: Berdiri di tengah mesin, ambil satu langkah kecil ke depan untuk menciptakan tegangan, busungkan dada dan tegakkan punggung.",
            "Ayunan Ke Atas: Dengan siku sedikit tertekuk, hembuskan napas dan ayunkan kabel ke atas dan ke dalam. Pertemukan kedua tangan setinggi dada atas atau dagu untuk melatih dada atas.",
            "Turunkan: Tarik napas dan turunkan gagang perlahan ke sisi tubuh hingga Anda merasakan regangan penuh pada dada."
        ] 
    },
    { 
        id: 7, name: "High Cable Crossover", category: "strength", muscle: "chest", equipment: "cables", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/High-Cable-Crossover.gif", 
        steps: [
            "Setup: Set the pulleys to the highest setting on the cable machine. Grasp the handles and step forward to stagger your stance, leaning your torso slightly forward.", 
            "The Downward Sweep: With a locked, slight bend in your elbows, exhale and pull the handles downward and inward toward your hips or lower abdomen. This angle specifically targets the lower chest.", 
            "The Squeeze: Cross your wrists slightly over each other at the bottom of the movement to maximize the inner-chest contraction.", 
            "The Return: Slowly let the cables pull your arms back up to the starting, stretched position under strict control."
        ],
        steps_id: [
            "Persiapan: Atur katrol di posisi paling atas. Genggam gagang, ambil langkah maju, dan condongkan tubuh sedikit ke depan.",
            "Ayunan Ke Bawah: Dengan posisi siku tetap (sedikit tertekuk), hembuskan napas dan tarik gagang ke bawah mengarah ke pinggul atau perut bagian bawah. Ini melatih dada bagian bawah.",
            "Puncak Kontraksi: Silangkan pergelangan tangan sedikit di titik paling bawah untuk memaksimalkan tekanan pada dada bagian dalam.",
            "Kembali: Perlahan biarkan kabel menarik lengan kembali ke posisi awal yang meregang."
        ] 
    },
    { 
        id: 8, name: "Dumbbell Bench Press", category: "strength", muscle: "chest", equipment: "dumbbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Press.gif", 
        steps: [
            "Setup: Sit on the edge of a flat bench with a dumbbell resting on each knee. Kick your knees up one at a time to safely hoist the dumbbells to shoulder level as you lie back.", 
            "Positioning: Plant your feet firmly, arch your back slightly, and squeeze your shoulder blades together. Hold the dumbbells directly over your chest.", 
            "The Descent: Inhale and slowly lower the dumbbells straight down to the sides of your chest. Keep your elbows tucked at a 45-degree angle.", 
            "The Press: Exhale and forcefully press the dumbbells back up to the starting position, squeezing your chest at the top without clanking the weights together."
        ],
        steps_id: [
            "Persiapan: Duduk di tepi bangku dengan dumbel bersandar di lutut. Angkat lutut satu per satu untuk menendang dumbel ke arah bahu saat Anda berbaring.",
            "Posisi: Tapakkan kaki kuat di lantai, lengkungkan punggung sedikit, dan jepit tulang belikat. Tahan dumbel tepat di atas dada.",
            "Turunkan: Tarik napas dan perlahan turunkan dumbel lurus ke sisi dada. Pastikan siku menekuk pada sudut 45 derajat dari tubuh.",
            "Dorongan: Hembuskan napas dan dorong dumbel kembali ke atas secara kuat. Kencangkan dada tanpa harus membenturkan kedua dumbel di atas."
        ] 
    },
    { 
        id: 9, name: "Machine Fly", category: "strength", muscle: "chest", equipment: "machine", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/05/10301301-Lever-Pec-Deck-Fly_Chest_720.gif", 
        steps: [
            "Setup: Adjust the seat height so the machine's handles are parallel to your mid-chest. Sit with your back firmly pressed against the backrest.", 
            "Grip: Grasp the handles with a neutral grip (palms facing each other) and maintain a slight bend in your elbows.", 
            "Execution: Squeeze your chest muscles to bring your arms together in a wide hugging motion. Pause and squeeze intensely at the center.", 
            "Return: Slowly release the weight back to the starting position, maintaining tension on the chest without letting the weight stack slam down."
        ],
        steps_id: [
            "Persiapan: Atur kursi agar gagang mesin sejajar dengan bagian tengah dada. Duduk dengan punggung menempel rata pada sandaran.",
            "Genggaman: Pegang gagang dengan posisi telapak tangan berhadapan dan pastikan siku sedikit tertekuk.",
            "Eksekusi: Remas otot dada dan pertemukan lengan di depan dalam gerakan memeluk. Tahan dan kencangkan otot sekuat mungkin di bagian tengah.",
            "Kembali: Perlahan lepas beban kembali ke posisi awal. Tahan ketegangan di dada dan jangan biarkan tumpukan beban terbanting."
        ] 
    },
    { 
        id: 10, name: "Lever Chest Press", category: "strength", muscle: "chest", equipment: "machine", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/06/Lever-Chest-Press.gif", 
        steps: [
            "Setup: Sit down on the lever chest press machine. Adjust the seat so the horizontal handles align perfectly with your mid-chest.", 
            "Grip: Place your feet flat on the floor, keep your chest high, and grab the handles with an overhand (pronated) grip.", 
            "The Press: Exhale and press the handles forward until your arms are fully extended, ensuring your shoulders stay pinned back against the pad.", 
            "The Return: Inhale and slowly lower the handles back to the start, controlling the lever's weight throughout the entire eccentric phase."
        ],
        steps_id: [
            "Persiapan: Duduk di mesin lever chest press. Atur tinggi kursi sehingga gagang lurus sejajar dengan area tengah dada.",
            "Genggaman: Telapak kaki rata di lantai, busungkan dada, dan pegang gagang dengan telapak tangan menghadap ke bawah.",
            "Dorongan: Hembuskan napas dan dorong tuas mesin ke depan hingga lengan lurus. Jaga agar bahu tetap bersandar kuat di bantalan.",
            "Kembali: Tarik napas dan kembalikan tuas secara perlahan ke posisi awal dengan kontrol beban yang penuh."
        ] 
    },

    // ================= BACK =================
    { 
        id: 11, name: "Pull-Up", category: "strength", muscle: "back", equipment: "bodyweight", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Pull-up.gif", 
        steps: [
            "The Grip: Stand directly beneath a secure pull-up bar. Reach up or jump to grasp the bar with an overhand, pronated grip (palms facing completely away from your body). Your hands should be placed comfortably wider than your shoulders.", 
            "The Hang: Allow your body to hang freely in a 'dead hang'. Cross your ankles behind you, squeeze your glutes, and engage your core heavily. This creates full-body tension and prevents unwanted swinging or momentum.", 
            "The Pull: Initiate the movement strictly by depressing your scapula (pulling your shoulder blades down and back together). Immediately follow by driving your elbows straight down toward your sides/floor. Pull your entire body upward until your chin clears the height of the bar.", 
            "The Descent: Do not drop. Lower yourself back down to the starting position in a slow, highly controlled manner until your arms are fully extended again, completing the repetition."
        ],
        steps_id: [
            "Genggaman: Berdiri di bawah palang pull-up. Raih dan pegang palang dengan telapak tangan menghadap ke depan, posisi tangan lebih lebar dari bahu.",
            "Menggantung: Biarkan tubuh menggantung bebas (dead hang). Silangkan pergelangan kaki di belakang, kencangkan perut dan bokong agar tubuh tidak berayun.",
            "Tarikan: Mulai gerakan dengan menarik tulang belikat ke bawah. Kemudian tarik siku lurus ke bawah untuk mengangkat tubuh hingga dagu melewati palang.",
            "Turunkan: Jangan menjatuhkan tubuh. Turunkan tubuh secara perlahan ke posisi awal hingga lengan benar-benar lurus kembali."
        ] 
    },
    { 
        id: 12, name: "Barbell Row", category: "strength", muscle: "back", equipment: "barbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/04/Reverse-Grip-Barbell-Row.gif", 
        steps: [
            "Starting Position: Stand with your feet about shoulder-width apart, with your mid-foot directly under the barbell. Push your hips back and hinge forward until your torso is roughly a 45-degree angle to the floor. Your back must remain absolutely flat, with no rounding in the lumbar spine.", 
            "The Grip: Reach down and grab the barbell with an overhand grip, hands placed slightly wider than shoulder-width. Keep your head in a neutral position, gazing at the floor a few feet ahead of you.", 
            "The Row: Take a deep breath, brace your core tightly, and pull the barbell aggressively toward your lower rib cage or belly button. Focus on leading the movement backward with your elbows, aggressively squeezing your shoulder blades together at the very top of the contraction.", 
            "The Return: Slowly lower the barbell back down toward the floor until your arms are fully straight and you feel a deep stretch in your latissimus dorsi muscles."
        ],
        steps_id: [
            "Posisi Awal: Berdiri dengan kaki selebar bahu. Dorong pinggul ke belakang dan condongkan tubuh hingga membentuk sudut 45 derajat. Punggung harus benar-benar rata, jangan membungkuk.",
            "Genggaman: Pegang barbel dengan telapak tangan menghadap ke tubuh, sedikit lebih lebar dari bahu. Pandangan lurus ke lantai di depan Anda.",
            "Tarikan: Kencangkan perut dan tarik barbel dengan kuat ke arah perut bagian bawah atau tulang rusuk bawah. Tarik siku jauh ke belakang dan jepit tulang belikat.",
            "Kembali: Turunkan barbel secara perlahan hingga lengan lurus sepenuhnya dan Anda merasakan otot sayap (lats) meregang."
        ] 
    },
    { 
        id: 13, name: "Dumbbell Row", category: "strength", muscle: "back", equipment: "dumbbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Row.gif", 
        steps: [
            "Setup: Approach a flat workout bench. Place your right knee securely on the lower half of the bench and your right hand firmly on the upper half for support. Your torso should be flat and nearly parallel to the floor.", 
            "Grip: Pick up a moderately heavy dumbbell with your left hand. Let it hang straight down toward the floor at arm's length, intentionally allowing your left shoulder to drop slightly to feel a deep stretch in your back.", 
            "The Pull: Initiate the movement by pulling your shoulder blade back, then drive your elbow straight up toward the ceiling. Keep your arm tucked in closely against your ribcage. Pull the dumbbell until it reaches the side of your hip.", 
            "The Squeeze: Pause for a distinct one-second count at the top of the movement, squeezing your lat muscle intensely. Slowly lower the dumbbell back down following the exact same path."
        ],
        steps_id: [
            "Persiapan: Gunakan bangku datar. Letakkan lutut kanan dan tangan kanan di atas bangku sebagai penyangga. Tubuh harus rata sejajar dengan lantai.",
            "Genggaman: Pegang dumbel dengan tangan kiri. Biarkan lengan menggantung lurus ke bawah untuk meregangkan otot sayap punggung.",
            "Tarikan: Tarik tulang belikat ke belakang, lalu tarik siku lurus ke arah langit-langit. Jaga lengan menempel di sisi tubuh hingga dumbel berada di sebelah pinggul.",
            "Kontraksi: Tahan sebentar di posisi puncak dan kencangkan otot punggung. Turunkan kembali dumbel secara perlahan ke posisi menggantung."
        ] 
    },
    { 
        id: 14, name: "Lat Pulldown", category: "strength", muscle: "back", equipment: "machine", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Lat-Pulldown.gif", 
        steps: [
            "Adjustment: Sit down at the lat pulldown machine station. Carefully adjust the knee pad height so it fits very snugly over your upper thighs—this will anchor your lower body down when lifting heavy weight.", 
            "Grip: Stand up slightly to reach the wide attachment bar. Grasp it with a pronated (overhand) grip, placing your hands significantly wider than your shoulders. Sit back down and secure your knees.", 
            "Execution: Lean your torso back very slightly (about 10 to 15 degrees) and puff your chest up. Engage your lats and pull the bar straight down toward your upper chest, leading the pull by driving your elbows down to the floor.", 
            "Release: Once the bar gently touches or comes close to your upper chest, squeeze your back muscles. Then, control the weight stack as you allow the bar to slowly return to the top position until your arms are fully extended."
        ],
        steps_id: [
            "Pengaturan: Duduk di mesin lat pulldown. Atur penahan lutut agar menekan paha atas dengan rapat untuk menahan tubuh dari beban tarikan.",
            "Genggaman: Pegang tuas palang lebar dengan telapak tangan menghadap ke depan, posisi tangan lebih lebar dari bahu.",
            "Eksekusi: Condongkan tubuh sedikit ke belakang dan busungkan dada. Tarik palang lurus ke arah dada atas dengan menarik siku tajam ke bawah.",
            "Lepaskan: Kencangkan otot punggung di posisi terendah, lalu secara terkontrol kembalikan palang perlahan ke atas hingga lengan lurus membentang."
        ] 
    },
    { 
        id: 15, name: "Seated Cable Row", category: "strength", muscle: "back", equipment: "cables", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Seated-Cable-Row.gif", 
        steps: [
            "Positioning: Sit down on the machine's bench. Place your feet securely on the front footpads or crossbar. Ensure you maintain a slight, permanent bend in your knees to protect your lower back—never lock your knees out completely.", 
            "Grip: Hinge forward at the hips to grab the V-bar (or straight bar) attachment with both hands. Sit back until your torso is perfectly upright at a 90-degree angle to the bench, with your arms fully extended in front of you.", 
            "The Pull: Keeping your back completely straight and stationary, pull the handles directly backward into your abdomen/navel area. Keep your elbows tucked in tightly to your sides. Squeeze your shoulder blades together fiercely at the peak of the movement.", 
            "The Return: Slowly extend your arms forward. Allow your shoulders to be pulled forward slightly at the very end of the motion to achieve a full stretch in your lats, then immediately begin the next pull."
        ],
        steps_id: [
            "Posisi: Duduk di bangku mesin kabel. Letakkan telapak kaki di pijakan dengan lutut sedikit ditekuk untuk melindungi punggung bawah. Jangan meluruskan lutut 100%.",
            "Genggaman: Condong ke depan untuk meraih gagang V-bar. Tarik tubuh kembali tegak (sudut 90 derajat) dengan lengan direntangkan lurus ke depan.",
            "Tarikan: Jaga punggung tetap kaku, tarik gagang lurus ke arah pusar. Jaga siku tetap menempel rapat di sisi tubuh. Jepit tulang belikat sangat kuat di akhir tarikan.",
            "Kembali: Rentangkan lengan lurus perlahan ke depan. Biarkan bahu sedikit terbawa maju di akhir gerakan untuk meregangkan otot sayap."
        ] 
    },
    { 
        id: 16, name: "Bent Over Dumbbell Row", category: "strength", muscle: "back", equipment: "dumbbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Bent-Over-Dumbbell-Row.gif", 
        steps: [
            "Stance: Stand holding a dumbbell in each hand. Keep your feet shoulder-width apart and maintain a slight bend in your knees.", 
            "The Hinge: Push your hips backward and hinge your torso forward until it is nearly parallel with the floor. Your back must remain perfectly straight. Let the dumbbells hang down directly in front of you.", 
            "The Pull: Engage your core and pull both dumbbells up toward your ribcage simultaneously. Keep your elbows tucked close to your body and focus on pinching your shoulder blades together.", 
            "The Lowering: Squeeze your back at the top for a second, then lower the dumbbells slowly and steadily back to the starting hanging position."
        ],
        steps_id: [
            "Kuda-kuda: Berdiri tegak sambil memegang dua dumbel. Buka kaki selebar bahu dan tekuk sedikit lutut Anda.",
            "Postur Bungkuk: Dorong pinggul ke belakang dan bungkukkan tubuh ke depan hingga sejajar dengan lantai. Jaga punggung tetap rata. Biarkan dumbel menggantung di depan dada.",
            "Tarikan: Kencangkan perut lalu tarik kedua dumbel secara bersamaan ke arah rusuk. Tarik siku erat ke sisi tubuh dan jepit tulang belikat.",
            "Menurunkan: Tahan kontraksi di puncak sejenak, lalu perlahan turunkan kembali dumbel ke posisi menggantung semula."
        ] 
    },

    // ================= LEGS (TERMASUK GLUTES) =================
    { 
        id: 17, name: "Barbell Squat", category: "strength", muscle: "legs", equipment: "barbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/BARBELL-SQUAT.gif", 
        steps: [
            "Setup: Approach a squat rack and duck under the barbell. Position the bar securely across the meaty, upper part of your trapezius muscles. Grip the bar tightly, stand up to unrack it, and take one or two deliberate steps backward.", 
            "Stance: Set your feet roughly shoulder-width apart. Your toes should be pointing slightly outward. Keep your chest up proudly, look straight ahead, and take a deep breath into your belly to brace your core.", 
            "The Descent: Begin the squat by breaking at the hips—pushing them backward as if reaching for a low chair—while simultaneously bending your knees. Lower yourself steadily until your hip crease is at or below the level of your knees (parallel or deeper).", 
            "The Ascent: Maintain your upright chest. Drive forcefully through the middle of your feet and your heels, pushing the floor away to stand back up. Exhale as you power through the hardest part of the upward movement."
        ],
        steps_id: [
            "Persiapan: Masuk ke bawah palang barbel di rak. Letakkan palang dengan aman di atas otot trapezius. Pegang erat palang, berdiri untuk melepaskannya dari rak, dan mundur 1-2 langkah.",
            "Kuda-kuda: Buka kaki sejajar dengan bahu. Ujung jari kaki sedikit menghadap luar. Busungkan dada, pandangan lurus, dan tarik napas dalam ke perut untuk menstabilkan punggung.",
            "Fase Turun: Turunkan tubuh dengan mendorong pinggul ke belakang (seperti akan duduk) lalu tekuk lutut. Turun terus hingga paha sejajar lantai atau lebih rendah.",
            "Fase Naik: Jaga dada tetap tegak. Dorong kuat dari tumit dan tengah telapak kaki untuk kembali berdiri tegak. Buang napas saat Anda mendorong ke atas."
        ] 
    },
    { 
        id: 18, name: "Dumbbell Lunge", category: "strength", muscle: "legs", equipment: "dumbbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Lunge.gif", 
        steps: [
            "Starting Position: Stand completely upright, holding a moderately heavy dumbbell in each hand directly at your sides. Your arms should be fully extended. Pull your shoulders back, keep your chest high, and look straight ahead.", 
            "The Step: Take a controlled, exaggerated step forward with your right leg. Plant your right foot firmly and flatly onto the floor, stabilizing your body weight.", 
            "The Lunge: Drop your hips vertically straight down toward the floor. Both of your knees should bend to form 90-degree angles. Ensure your front knee tracks over your toes without collapsing inward, and your back knee hovers just an inch above the ground.", 
            "The Push-Off: Push forcefully off the heel of your front right foot to propel your body backward, returning to the standing starting position. Alternate legs by stepping forward with your left leg for the next repetition."
        ],
        steps_id: [
            "Posisi Awal: Berdiri tegak lurus sambil memegang sepasang dumbel di sisi paha. Dada ditegakkan, bahu ditarik ke belakang, dan pandangan lurus ke depan.",
            "Langkah Depan: Ambil satu langkah panjang ke depan dengan kaki kanan. Pijakkan telapak kaki depan dengan kuat.",
            "Turun: Turunkan pinggul secara tegak lurus ke bawah. Kedua lutut harus membentuk sudut 90 derajat. Lutut depan tidak boleh melampaui jari kaki dan lutut belakang hampir menyentuh lantai.",
            "Dorongan Kembali: Dorong kuat-kuat menggunakan tumit kaki depan untuk kembali ke posisi berdiri. Ganti langkah menggunakan kaki sebelahnya."
        ] 
    },
    { 
        id: 19, name: "Leg Press", category: "strength", muscle: "legs", equipment: "machine", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2015/11/Leg-Press.gif", 
        steps: [
            "Positioning: Sit deeply into the seat of the leg press machine. Ensure your glutes and lower back are pressed firmly and flatly against the backrest. There should be no gap between your lumbar spine and the pad.", 
            "Foot Placement: Place your feet squarely on the heavy sled, positioned about shoulder-width apart in the center of the platform. Push slightly to unrack the weight and disengage the machine's safety levers.", 
            "The Descent: Slowly and carefully bend your knees, bringing the heavy sled down toward your chest. Lower the weight until your legs form a 90-degree angle. Do not lower it so far that your lower back begins to curl or lift off the seat pad.", 
            "The Press: Drive powerfully through your entire foot (with a slight emphasis on the heels) to press the sled back up to the top. Stop just short of locking your knee joints completely out to maintain constant tension on your quadriceps."
        ],
        steps_id: [
            "Posisi Duduk: Sandarkan punggung dan bokong sepenuhnya ke bantalan mesin Leg Press. Pastikan tidak ada rongga udara pada punggung bawah.",
            "Posisi Kaki: Letakkan kaki rata di platform pijakan, sejajar bahu. Dorong tuas sedikit dan lepas kait pengaman.",
            "Menurunkan Beban: Tekuk lutut secara perlahan, biarkan platform turun mengarah ke dada hingga lutut membentuk sudut 90 derajat. Jangan sampai bokong terangkat.",
            "Dorongan: Dorong kuat pijakan menggunakan seluruh telapak kaki (fokus di tumit) ke atas. Berhenti sesaat sebelum lutut terkunci 100% lurus agar otot paha tetap tegang."
        ] 
    },
    { 
        id: 20, name: "Romanian Deadlift", category: "strength", muscle: "legs", equipment: "barbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Romanian-Deadlift.gif", 
        steps: [
            "Setup: Stand tall holding a barbell in front of your thighs with a pronated (overhand) grip, hands shoulder-width apart. Keep your feet hip-width apart and your chest proud.", 
            "The Hinge: Maintain a very slight, permanent micro-bend in your knees. Begin the movement by pushing your hips and glutes backward as far as they will go. Imagine trying to touch a wall behind you with your glutes.", 
            "The Stretch: Keep the barbell in constant contact with your legs, sliding it down your thighs and shins. Lower the bar until you feel an intense stretch in your hamstrings (usually when the bar reaches just below the knees). Your back must remain absolutely flat.", 
            "The Lockout: Squeeze your glutes and push your hips forward to reverse the motion, pulling your torso back to the upright standing position. Do not overextend your lower back at the top."
        ],
        steps_id: [
            "Persiapan: Berdiri tegak pegang barbel dengan telapak tangan menghadap paha. Buka kaki selebar pinggul dan dada membusung.",
            "Postur: Beri sedikit tekukan kaku pada lutut. Awali dengan mendorong pantat sejauh mungkin ke arah belakang (bayangkan mendorong pintu dengan bokong).",
            "Menurunkan: Geser palang barbel terus menempel menuruni paha dan tulang kering. Jaga punggung tetap rata. Berhenti saat terasa tarikan kencang di paha belakang (hamstring).",
            "Kembali: Kencangkan bokong dan dorong pinggul kembali ke depan untuk berdiri tegak sempurna. Hindari melengkungkan punggung ke belakang di atas."
        ] 
    },
    { 
        id: 21, name: "Leg Extension", category: "strength", muscle: "legs", equipment: "machine", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/LEG-EXTENSION.gif", 
        steps: [
            "Adjustment: Sit on the leg extension machine. Adjust the backrest so the back of your knees fits snugly against the edge of the seat. Adjust the lower roller pad so it rests comfortably directly on top of your lower shins/ankles.", 
            "Grip and Posture: Grip the handles firmly on the sides of the seat to anchor your upper body down. Keep your chest up and your back completely flat against the backrest.", 
            "The Extension: Using strictly your quadriceps, extend your legs smoothly to push the roller pad upward. Continue until your legs are fully extended and entirely straight.", 
            "The Squeeze: Hold the fully extended position for a sharp, one-second count, squeezing your quads intensely. Then, slowly and with high control, lower the weight back down to the starting position."
        ],
        steps_id: [
            "Pengaturan: Duduk di mesin Leg Extension. Atur sandaran agar belakang lutut menempel pas di ujung kursi. Tempatkan bantalan rol tepat di atas tulang kering/pergelangan kaki.",
            "Postur: Pegang erat gagang kursi untuk menahan tubuh agar bokong tidak naik. Punggung rata di sandaran.",
            "Ekstensi Kaki: Gunakan hanya kekuatan paha depan (quadriceps) untuk menendang bantalan lurus ke atas hingga kaki terentang penuh.",
            "Kontraksi: Tahan sebentar di posisi tertinggi, kencangkan keras paha depan, lalu turunkan perlahan melawan beban."
        ] 
    },
    { 
        id: 22, name: "Barbell Hip Thrust", category: "strength", muscle: "legs", equipment: "barbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Hip-Thrust.gif", 
        steps: [
            "Setup: Sit flat on the floor with your shoulder blades resting precisely against the edge of a sturdy, flat weight bench. Roll a heavily padded barbell directly over your legs so it rests deep in your hip crease.", 
            "Foot Placement: Plant your feet firmly on the floor, spaced shoulder-width apart. Position them so that your shins are completely vertical (a 90-degree angle to the floor) when your hips are fully elevated at the top.", 
            "The Thrust: Take a deep breath into your belly, brace your core hard, and drive aggressively through your heels. Thrust your hips explosively toward the ceiling, lifting the barbell.", 
            "The Lockout: At the absolute top of the movement, your torso and thighs should form a straight, horizontal line. Look forward, keep your chin tucked, and squeeze your glutes violently for a full second before lowering your hips back to the floor."
        ],
        steps_id: [
            "Persiapan: Duduk di lantai, sandarkan tulang belikat di tepi bangku gym. Gulirkan barbel (yang sudah dilapis busa pad) tepat ke pangkal paha Anda.",
            "Pijakan Kaki: Letakkan telapak kaki di lantai selebar bahu. Atur posisi kaki sehingga tulang kering benar-benar vertikal saat pinggul Anda berada di atas.",
            "Dorongan (Thrust): Kencangkan perut, lalu dorong kuat-kuat tumit ke lantai untuk mendorong pinggul dan barbel meledak ke atas.",
            "Lockout: Di puncak gerakan, tubuh dari bahu hingga lutut membentuk garis lurus rata. Remas bokong (glutes) dengan sangat kuat selama satu detik sebelum menurunkannya."
        ] 
    },
    { 
        id: 23, name: "Glute Bridge", category: "strength", muscle: "legs", equipment: "bodyweight", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2022/02/Banded-Glute-Bridge.gif", 
        steps: [
            "Starting Position: Lie completely flat on your back on a comfortable yoga mat. Bend your knees to a roughly 90-degree angle and place your feet flat on the floor, bringing your heels relatively close to your glutes.", 
            "Arm Placement: Rest your arms straight down along your sides on the mat, with your palms pressing firmly into the floor to provide upper body stability.", 
            "The Lift: Exhale and push firmly into the floor through your heels. Lift your hips high into the air until your back, hips, and upper thighs form a perfectly straight diagonal line.", 
            "The Hold: Squeeze your gluteal muscles as tightly as you can at the apex of the movement. Hold this maximum contraction for one to two seconds, then slowly lower your hips back down to lightly tap the mat before the next rep."
        ],
        steps_id: [
            "Posisi Awal: Berbaring telentang di matras. Tekuk lutut dan pijakkan kaki rata ke lantai, dekatkan posisi tumit ke arah bokong.",
            "Posisi Lengan: Istirahatkan lengan lurus di samping tubuh, tekan telapak tangan ke lantai untuk stabilitas dasar.",
            "Mengangkat: Hembuskan napas lalu dorong lantai keras menggunakan tumit. Angkat pinggul tinggi hingga punggung hingga paha membentuk garis lurus tegak.",
            "Tahan: Remas bokong sekeras mungkin di puncak. Tahan posisi tersebut selama 1-2 detik lalu turunkan kembali pinggul ke lantai."
        ] 
    },
    { 
        id: 24, name: "Cable Pull Through", category: "strength", muscle: "legs", equipment: "cables", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/06/kettlebell-goblet-squat.gif", 
        steps: [
            "Setup: Attach a tricep rope handle to the absolute lowest setting of a cable pulley machine. Stand with your back facing the machine, straddling the cable so it passes between your legs.", 
            "Grip: Reach down and backward between your legs to firmly grasp the ends of the rope handle with both hands.", 
            "The Hinge: Take a step forward to create tension. Keeping your back perfectly straight and a slight, fixed bend in your knees, hinge backward deeply at the hips. Let the cable pull your hands backward through your legs until you feel an intense stretch in your hamstrings and glutes.", 
            "The Extension: Squeeze your glutes and forcefully thrust your hips forward to stand completely upright and erect. Squeeze your glutes at the top. Critically, do not use your arms or lower back to pull the weight; the power must come entirely from a hip hinge."
        ],
        steps_id: [
            "Persiapan: Pasang tali trisep di posisi paling bawah mesin kabel. Berdiri membelakangi mesin, mengangkangi kabel melewati selangkangan.",
            "Genggaman: Membungkuk dan pegang kuat kedua ujung tali menggunakan kedua tangan di antara kaki.",
            "Hinge (Engsel): Maju selangkah. Jaga punggung tetap datar dan lutut ditekuk ringan. Dorong pinggul jauh ke belakang (membungkuk), biarkan kabel menarik tangan ke celah paha hingga terasa tarikan di bokong/hamstring.",
            "Berdiri: Kencangkan bokong dan sentakkan pinggul keras ke depan untuk berdiri kembali. Jangan gunakan kekuatan lengan; murni dorongan pinggul."
        ] 
    },
    { 
        id: 25, name: "Kettlebell Goblet Squat", category: "strength", muscle: "legs", equipment: "kettlebell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Kettlebell-Goblet-Squat.gif", 
        steps: [
            "Grip: Pick up a heavy kettlebell with both hands. Hold it vertically by the sides of its handle (the 'horns') or cup the heavy bell portion. Keep it pulled in tight against the center of your upper chest.", 
            "Stance: Stand with your feet set slightly wider than shoulder-width apart, with your toes pointing gently outwards to open up the hips.", 
            "The Descent: Squat down deeply by pushing your hips back and down. Keep your chest up proudly; do not let the heavy front weight pull your torso forward. Aim to drop your elbows inside the line of your knees at the bottom of the squat.", 
            "The Ascent: Drive forcefully through your heels and the mid-foot to stand back up. Actively focus on squeezing your glute muscles together as you reach the standing lockout position."
        ],
        steps_id: [
            "Genggaman: Pegang sebuah kettlebell secara vertikal tepat menempel di dada tengah Anda, tahan layaknya memegang gelas raksasa (goblet).",
            "Kuda-kuda: Berdiri sedikit lebih lebar dari bahu, dengan ujung kaki mengarah menyamping agar rongga panggul terbuka.",
            "Turun: Lakukan squat dengan pantat menjorok ke belakang dan punggung tegak menahan beban depan. Posisikan siku Anda berada di bagian dalam lutut saat di bawah.",
            "Naik: Dorong dengan seluruh telapak kaki untuk kembali berdiri, remas paha depan dan glutes Anda saat posisi berdiri lurus."
        ] 
    },
    { 
        id: 26, name: "Smith Machine Squat", category: "strength", muscle: "legs", equipment: "machine", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2024/10/smith-machine-squat.gif", 
        steps: [
            "Setup: Set the bar on the Smith Machine to shoulder height. Step under it, resting the bar across your upper traps. Unhook the bar by rotating your wrists.", 
            "Stance: Position your feet slightly forward of your hips. This angled stance is unique to the Smith Machine and allows greater focus on the quadriceps.", 
            "The Descent: Push your hips back and bend your knees to lower your body into a deep squat, keeping your back completely flat against the guided track.", 
            "The Ascent: Press powerfully through your heels to return to the standing position, squeezing your quads and glutes at the top."
        ],
        steps_id: [
            "Persiapan: Atur palang Smith Machine setinggi bahu. Masuk ke bawah palang (di atas otot trapezius). Putar barbel untuk melepas kaitan keamanan.",
            "Postur Unik: Letakkan kaki sedikit lebih maju di depan pinggul (hanya bisa di Smith Machine) untuk fokus optimal memompa otot quadriceps.",
            "Turun: Turunkan pinggul seperti kursi, tahan punggung tegak selaras dengan jalur vertikal palang.",
            "Dorongan: Dorong dari tumit untuk kembali berdiri tegak lurus, dan kencangkan otot paha depan secara utuh."
        ] 
    },
    { 
        id: 27, name: "Dumbbell Goblet Squat", category: "strength", muscle: "legs", equipment: "dumbbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2023/01/Dumbbell-Goblet-Squat.gif", 
        steps: [
            "Grip: Hold a single dumbbell vertically by one end, cupping it with both hands directly against your chest.", 
            "Stance: Stand with your feet slightly wider than shoulder-width apart, toes pointing slightly outward.", 
            "The Squat: Lower your hips down and back, keeping your chest up. Allow your elbows to track inside your knees at the bottom of the movement.", 
            "The Drive: Push through your entire foot to stand back up straight, maintaining the dumbbell close to your chest."
        ],
        steps_id: [
            "Genggaman: Pegang ujung atas satu buah dumbel tegak lurus dengan dua tangan, tempelkan sejajar ke dada.",
            "Kuda-kuda: Berdiri dengan jarak kaki selebar bahu. Jaga pandangan tetap ke depan.",
            "Squat: Turunkan bokong ke bawah, selipkan posisi siku ke dalam lintasan lutut Anda saat mencapai posisi squat terdalam.",
            "Kembali: Dorong kuat-kuat agar tubuh berdiri kembali. Jangan sampai dumbel menjauh condong dari dada Anda."
        ] 
    },
    { 
        id: 28, name: "Dumbbell Walking Lunge", category: "strength", muscle: "legs", equipment: "dumbbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2023/09/dumbbell-lunges.gif", 
        steps: [
            "Stance: Stand tall holding a dumbbell in each hand by your sides. Brace your core and pull your shoulders back.", 
            "The Step: Take a long, controlled stride forward with your right foot. Plant it firmly and drop your back knee straight down toward the floor.", 
            "The Lunge: Ensure your front thigh is parallel to the ground and your front knee is not extending over your toes.", 
            "The Walk: Instead of pushing backward, push off your front right heel to step your left foot completely forward into the next lunge. Continue walking in a straight line."
        ],
        steps_id: [
            "Postur: Berdiri tegak, masing-masing tangan memegang dumbel di samping tubuh. Tarik napas, kencangkan tubuh.",
            "Langkah Awal: Langkahkan kaki kanan lumayan panjang ke depan, mendarat perlahan dan turunkan lutut belakang hampir menyentuh lantai.",
            "Batas Lunge: Paha depan wajib rata (paralel) dengan lantai, pastikan lutut kanan tidak condong kelewat depan.",
            "Jalan Menyambung: Berbeda dengan lunge statis, dorong tubuh langsung ke depan sehingga kaki belakang maju menyalip ke depan menjadi lunge berikutnya. Terus berjalan."
        ] 
    },
    { 
        id: 29, name: "Leg Curl", category: "strength", muscle: "legs", equipment: "machine", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Leg-Curl.gif", 
        steps: [
            "Adjustment: Lie face down on the lying leg curl machine. Adjust the roller pad so it rests securely against the back of your lower calves, just above the heels.", 
            "Posture: Keep your torso flat on the bench and lightly grip the handles provided at the front of the machine to stabilize your upper body.", 
            "The Curl: Exhale and curl your legs upward, pulling the pad as close to your glutes as possible. Focus entirely on squeezing the hamstrings.", 
            "The Return: Inhale and lower your legs back to the starting position in a slow, highly controlled manner to maximize eccentric tension."
        ],
        steps_id: [
            "Pengaturan: Tengkurap di mesin Lying Leg Curl. Atur penopang kaki agar bantalan berada persis di tulang belikat tumit.",
            "Postur: Tubuh rata di bangku, tangan pegang gagang depan agar tubuh tidak ikut tertarik/terangkat.",
            "Gerakan Curl: Tekuk kedua lutut menarik bantalan keras ke arah bokong. Sentralkan kontraksi otot paha belakang (hamstrings).",
            "Menurunkan: Tahan sedikit lalu kembalikan kaki menjadi lurus secara pelan-pelan (jangan asal dilepas) untuk beban optimal."
        ] 
    },
    { 
        id: 30, name: "Dumbbell Romanian Deadlift", category: "strength", muscle: "legs", equipment: "dumbbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Romanian-Deadlift.gif", 
        steps: [
            "Setup: Stand upright holding a pair of dumbbells in front of your thighs with a pronated (overhand) grip.", 
            "The Hinge: With a slight, locked bend in your knees, push your hips and glutes far backward. Keep your back perfectly straight and your chest up.", 
            "The Stretch: Lower the dumbbells by sliding them down the front of your legs. Stop lowering when you feel an intense stretch in your hamstrings (usually mid-shin level).", 
            "The Extension: Squeeze your glutes and forcefully thrust your hips forward to return to a standing position."
        ],
        steps_id: [
            "Persiapan: Pegang pasang dumbel lurus ke bawah persis di depan paha. Punggung rata.",
            "Tekuk Pinggul (Hinge): Tekuk lutut minimal sekali dan tahan kaku posisinya. Turunkan tubuh dengan menyodorkan pinggul jauh mundur ke belakang.",
            "Regangan Otot: Biarkan dumbel menggantung dan bergeser turun persis di area tulang kering, berhentilah segera sesaat otot hamstring paha terasa tertarik tajam.",
            "Berdiri: Dorong panggul depan, remas otot bokong untuk menarik Anda otomatis kembali berdiri. "
        ] 
    },

    // ================= SHOULDERS =================
    { 
        id: 31, name: "Overhead Press", category: "strength", muscle: "shoulders", equipment: "barbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/07/Barbell-Standing-Military-Press.gif", 
        steps: [
            "Setup: Position a barbell on a squat rack at upper-chest height. Step up and grip the bar slightly wider than your shoulders. Unrack the bar so it rests securely across your collarbones and the front of your deltoids.", 
            "Stance: Take a step back. Stand with your feet hip-width apart. It is highly critical to squeeze your glutes tightly and brace your core—this creates a rigid column of support that protects your lower back.", 
            "The Press: Take a deep breath and press the bar forcefully straight up overhead. You may need to tilt your head back a fraction of an inch to let the bar pass your face. Once the bar clears your head, push your head forward slightly back through the 'window' of your arms.", 
            "The Lockout: Fully extend your arms until your elbows are locked out directly over your mid-foot. Lower the bar under strict control back down to your collarbones before beginning the next repetition."
        ],
        steps_id: [
            "Persiapan: Ambil barbel dari rak dengan telapak tangan ke luar, selebar bahu. Letakkan barbel menumpu di tulang selangka depan.",
            "Berdiri: Jepit dan kencangkan perut serta paha agar tulang belakang menjadi fondasi yang stabil dan aman.",
            "Mendorong (Press): Dorong keras barbel secara garis lurus ke atas kepala Anda. Tarik sedikit kepala Anda ke belakang agar tidak terhantam palang.",
            "Puncak & Kembali: Luruskan tangan sejajar dengan pusat tubuh. Kemudian tahan perlawanan barbel hingga kembali ke tumpuan dada."
        ] 
    },
    { 
        id: 32, name: "Lateral Raise", category: "strength", muscle: "shoulders", equipment: "dumbbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Lateral-Raise.gif", 
        steps: [
            "Starting Position: Stand upright holding a relatively light pair of dumbbells in each hand. Let them rest at your sides with your palms facing your outer thighs. Keep your chest up.", 
            "Arm Geometry: Establish a very slight, locked bend in your elbows. This angle must not change. Lean your torso forward just a fraction of an inch to optimally target the lateral head of the deltoid.", 
            "The Raise: Using strictly your shoulder muscles (avoid swinging or using momentum from your legs), raise the dumbbells out to your sides. Lift them until your upper arms are exactly parallel to the floor.", 
            "The Peak: At the top of the movement, ensure your pinky fingers are slightly higher than your thumbs, as if you are pouring water out of two pitchers. Slowly resist gravity to lower the dumbbells back down."
        ],
        steps_id: [
            "Persiapan Awal: Berdiri sempurna membawa dumbel beban wajar. Taruh bersandar lemas pada bagian luar paha kaki Anda.",
            "Titik Kunci Lengan: Kunci tekukan ringan di siku. Condongkan sedikit tubuh agar otot deltoid (bahu tengah) jadi fokus utamanya.",
            "Rentangkan Tangan: Gunakan murni daya bahu untuk mengepak membentangkan ke atas mengarah ke sisi kiri dan kanan setinggi bahu maksimal.",
            "Detail Teknis: Saat beban tinggi memuncak, biarkan posisi jempol sedikit condong memutar ke bawah (mirip gerakan menuang air ceret). Turunkan perlahan."
        ] 
    },
    { 
        id: 33, name: "Face Pull", category: "strength", muscle: "shoulders", equipment: "cables", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Face-Pull.gif", 
        steps: [
            "Setup: Attach a dual-handle tricep rope to a cable pulley set at upper-chest or face height. Grab the ends of the rope from underneath so your thumbs are pointing directly backward toward your face.", 
            "Stance: Step back from the machine until the cable is completely taut. Stand with a staggered stance (one foot forward) to establish a solid base of balance against the pulling weight.", 
            "The Pull: Retract your shoulder blades and pull the rope directly toward the bridge of your nose or your forehead. As you pull, actively separate your hands, pulling the ends of the rope apart and flaring your elbows out high and wide.", 
            "The Squeeze: Pinch your rear deltoids and upper back muscles intensely for a full second at the peak of the contraction. Slowly extend your arms to return the cable to the starting position."
        ],
        steps_id: [
            "Persiapan Awal: Gantungkan tali beban pada katrol kabel di selevel area wajah. Genggam tali dengan posisi ibu jari saling hadap-hadapan (atau jempol mengarah wajah).",
            "Mundur Pijakan: Geser kaki menjauhi mesin agar beban ditarik maksimal. Tempatkan satu kaki di depan kaki lain (kuda-kuda).",
            "Tarik Ke Wajah: Tarik kuat kabel dengan membelah tali menjadi dua menuju sisi ujung mata/dahi Anda. Siku harus ditarik sejauh & selebar mungkin.",
            "Otot Sasaran: Tekankan cubitan keras dan tegangkan tulang bahu posterior (belakang) sejenak. Pelan-pelan urai tali menjadi panjang lurus kembali."
        ] 
    },
    { 
        id: 34, name: "Machine Shoulder Press", category: "strength", muscle: "shoulders", equipment: "machine", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Smith-Machine-Shoulder-Press.gif", 
        steps: [
            "Adjustment: Sit down in the shoulder press machine. Carefully adjust the seat height so that the horizontal handles align perfectly with the tops of your shoulders.", 
            "Grip: Press your lower back and shoulder blades firmly against the back pad. Reach up and grasp the handles with a comfortable, overhand (pronated) grip.", 
            "Execution: Take a breath, brace your core, and push the handles smoothly upward. Continue pressing until your arms are fully extended overhead, exhaling as you exert force.", 
            "Release: Inhale and lower the handles back down under strict control. Stop the descent just before the weight stack touches down to maintain constant mechanical tension on your deltoids."
        ],
        steps_id: [
            "Kalibrasi Bantalan: Silakan atur tingkat peninggi kursi di Shoulder Press agar sejajar langsung dengan pundak/bahu atas Anda.",
            "Penguncian Tubuh: Bersandar ke bantalan dan tekan sekuat mungkin untuk posisi solid. Cengkeram gagang secara konvensional (overhand).",
            "Sodokan: Ambil daya nafas membusung, lalu paksa gagang naik ke langit-langit lurus menjauhi kepala dengan napas buang keluar.",
            "Tahan Momentum: Turunkan gagang, namun stop sedikit di sisa-sisa akhir sebelum blok beban plat berbenturan."
        ] 
    },
    { 
        id: 35, name: "Two Arm Dumbbell Front Raise", category: "strength", muscle: "shoulders", equipment: "dumbbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/08/Two-Arm-Dumbbell-Front-Raise.gif", 
        steps: [
            "Setup: Stand tall holding a dumbbell in each hand, resting them gently on the front of your thighs. Your palms should be facing your legs (pronated grip).", 
            "Posture: Pull your shoulders down and back, preventing them from shrugging up toward your ears. Brace your abdominals tightly.", 
            "The Raise: Keeping your arms practically straight (with only a micro-bend in the elbow), lift both dumbbells directly forward and upward simultaneously. Do not swing your torso.", 
            "The Peak: Stop raising when the dumbbells reach exact shoulder height and are parallel to the floor. Pause briefly, then slowly lower the weights back to the front of your thighs."
        ],
        steps_id: [
            "Sikap Awalan: Berdiri santai namun tegap, dumbel melekat di sisi paha luar. Posisi genggaman membelakangi paha (telapak menyentuh pakaian).",
            "Stabilisator: Tahan bahu turun, tidak ikut tertarik (shrugging) dan perut Anda dikunci agar tubuh statis mati.",
            "Angkat Searah: Bentangkan sejajar kedua tangan menyapu lintasan ke arah lurus depan. Hindari memanfaatkan momen ayun dari pantat.",
            "Sikap Akhir: Stop tepat di posisi mata memandang (paralel tanah/selevel pundak). Kembali mendarat lamban untuk ketahanan porsi bahu depan."
        ] 
    },
    { 
        id: 36, name: "Standing Dumbbell Shoulder Press", category: "strength", muscle: "shoulders", equipment: "dumbbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2023/09/Standing-Dumbbell-Overhead-Press.gif", 
        steps: [
            "Setup: Stand upright with feet shoulder-width apart. Clean a pair of dumbbells up to shoulder height, palms facing forward.", 
            "Posture: Brace your core and squeeze your glutes. This prevents your lower back from arching excessively under the load.", 
            "The Press: Exhale and press the dumbbells straight up overhead until your arms are fully extended. Do not clank the weights together at the top.", 
            "The Descent: Inhale and lower the dumbbells slowly back down to shoulder level with high control."
        ],
        steps_id: [
            "Persiapan: Posisikan diri berdiri dan rentangkan kaki. Bawalah dua dumbel bertengger sejajar tepat di sisi ujung pundak leher luar.",
            "Penting: Jangan biarkan tubuh membengkok, tarik kencang abdomen (inti) Anda guna melindungi saraf bawah yang rentan cedera.",
            "Daya Eksekusi: Suntik daya ke arah atas menyodok udara. Dumbel dijamin tidak usah ditubrukkan di tengah udara ujung atas.",
            "Turun: Lambatkan tempo jatuhnya dengan kesadaran sampai sentuh batas leher kembali."
        ] 
    },
    { 
        id: 37, name: "Dumbbell Shoulder Press", category: "strength", muscle: "shoulders", equipment: "dumbbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Shoulder-Press.gif", 
        steps: [
            "Setup: Sit on an upright utility bench with a back support. Hoist a dumbbell to each shoulder, palms facing forward.", 
            "Posture: Press your upper and lower back firmly against the pad. Plant your feet flat on the floor.", 
            "The Press: Press the dumbbells straight upward in a slight arc until they are directly over your head and your arms are locked out.", 
            "The Return: Slowly lower the weights back down to shoulder level, keeping your elbows tracking slightly forward of your torso rather than flared straight out to the sides."
        ],
        steps_id: [
            "Kursi Bantu: Pakai tempat sandaran tegak. Bawa dumbel naik setara pundak Anda.",
            "Tumpuan Duduk: Jangan lengah, tempelkan tulang ekor rata di bangku dan tekan telapak kaki di tanah kuat.",
            "Mendorong: Secara serasi bersama dorong lengan dalam struktur garis lurus atas hingga melampaui puncak tengkorak Anda.",
            "Penurunan Tepat: Kembalikan siku ke bawah perlahan. Perhatikan dengan seksama letak ujung siku menyamping tapi condong di sudut sedikit depannya punggung."
        ] 
    },
    { 
        id: 38, name: "Lever Shoulder Press", category: "strength", muscle: "shoulders", equipment: "machine", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/04/Lever-Shoulder-Press.gif", 
        steps: [
            "Adjustment: Sit on the lever shoulder press machine. Adjust the seat height so the handles are level with your shoulders.", 
            "Grip: Grab the handles securely. Keep your chest up and back flat against the pad.", 
            "Execution: Push the handles straight up. The lever machine will guide the arc of motion. Exhale as you press.", 
            "Release: Lower the handles back down smoothly, resisting the weight throughout the entire descent."
        ],
        steps_id: [
            "Kursi Atur Tepat: Sesuaikan alas jok agar dudukan tangan tuas (lever) tepat bermula di ambang samping deltoid/bahu.",
            "Kunci Punggung: Peluk bagian penyokong beban mesin belakang dengan tubuh padat kokoh. Tangkap batang pemegang mantap.",
            "Aksi Naik: Tolak gagang melaju serentak. Biarkan engsel tuas memandu ritme dorongan dan Anda cukup berteriak atau membuang gas.",
            "Rileks Ke Bawah: Terima tarikan dan kontrol lamban penurunan tuas agar stimulasi otot terus berlanjut di tiap meternya."
        ] 
    },

    // ================= BICEPS =================
    { 
        id: 39, name: "Barbell Curl", category: "strength", muscle: "biceps", equipment: "barbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Curl.gif", 
        steps: [
            "Stance & Grip: Stand straight with your feet shoulder-width apart for a solid base. Reach down and hold a barbell with a supinated (underhand, palms facing up) grip. Your hands should be spaced precisely at shoulder-width.", 
            "Positioning: Lock your posture. Pin your elbows tightly against your ribcage. It is crucial that your elbows remain completely stationary throughout the entire exercise—do not let them drift forward.", 
            "The Curl: Exhale and contract your biceps to curl the barbell upwards in a smooth, semicircular arc. Keep your torso rigidly still, ensuring absolutely no swinging or leaning back. Curl until the bar reaches shoulder level.", 
            "The Lowering: Squeeze the biceps at the top, then inhale as you slowly reverse the motion. Lower the barbell all the way down until your arms are 100% fully extended to achieve a complete stretch."
        ],
        steps_id: [
            "Ambil Posisi: Pegang gagang besi barbel dengan jemari mengarah memutar keluar/ke atas (supinated). Rentangan berjarak sebahu presisi.",
            "Pemastian Bentuk Tepat: Paku tulang siku di pinggang rusuk Anda. Tidak ada toleransi siku untuk lepas bergoyang dari area itu.",
            "Pekerjaan Mengerut (Curl): Lipat kedua titik sudut persendian siku agar barbel terkerek mendarat nyaris mengenai area dada atas. Dada tidak boleh ikut mengayun.",
            "Releksi Terakhir: Biarkan daya berat menyeret secara paksa hingga lengan menjadi tiang lurus penuh tegangan panjang maksimal."
        ] 
    },
    { 
        id: 40, name: "Dumbbell Bicep Curl", category: "strength", muscle: "biceps", equipment: "dumbbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Curl.gif", 
        steps: [
            "Starting Position: Stand perfectly tall, holding a dumbbell in each hand down by your sides. Rotate your wrists outward so that your palms are facing straight forward.", 
            "Execution: While keeping your upper arms glued to your sides and totally stationary, exhale and curl both weights up toward the front of your shoulders simultaneously.", 
            "The Squeeze: At the very top of the movement, pause for a distinct one-second count and consciously contract your biceps as hard as you can.", 
            "The Descent: Inhale and slowly lower the dumbbells back down to the starting position, fighting gravity the whole way down until your triceps flex slightly at the bottom."
        ],
        steps_id: [
            "Bersiap: Pasang pergelangan membentang lurus dengan satu set beban dumbel menggantung dan posisi hadapan pergelangan tangan terbuka lebar melihat langit.",
            "Kerutan Tunggal: Tempel lekat bagian rusuk dari pangkal ketiak. Kerek melipat dua unit alat berbarengan langsung naik.",
            "Remasan Utama: Pas waktu menempel batas tekukan maksimal, tekankan secara buatan seluruh titik bisep.",
            "Gravitasi Beban: Tahan dengan perlahan tarikan ke bawah hingga trisep di ujung terentang panjang di batas paha bawah."
        ] 
    },
    { 
        id: 41, name: "EZ Bar Preacher Curl", category: "strength", muscle: "biceps", equipment: "ez bar", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/EZ-Bar-Preacher-Curl.gif", 
        steps: [
            "Setup: Sit at a preacher curl bench. Adjust the seat so that your armpits fit snugly over the top edge of the pad. Position the entire back of your upper arms flat against the angled pad. Grasp an EZ curl bar using the inner, angled grips.", 
            "The Contraction: With your arms fully supported by the pad (which eliminates any ability to use body momentum), curl the bar upward in a smooth, controlled arc toward your chin.", 
            "The Squeeze: Do not let the bar rest at the top or let your forearms go completely vertical (which loses tension). Stop just short of vertical and squeeze your biceps tightly.", 
            "The Extension: Lower the bar very slowly and carefully until your arms are almost fully extended, stopping just an inch short of locking out to protect the elbow joint under load."
        ],
        steps_id: [
            "Setup Preacher: Masuk ke alat bangku khusus lekukan bantalan penceramah (preacher). Masukkan peluk siku dan seluruh bantalan lengan Anda lekat agar momentum tubuh musnah.",
            "Genggaman Keriting: Angkut batangan besi EZ dan pegang titik zig-zag bagian dalam untuk menengahkan posisi yang nyaman.",
            "Ayunan Sempit: Angkat memutar sampai dagu tetapi ingat untuk tidak terhenti total istirahat lurus. Beban harus senantiasa memberi tegangan paksa pada bisep.",
            "Tekuk Jatuh: Biarkan ia terulur merosot tajam kembali pada bantalan, hentikan tepat sebentar lurus maksimal untuk antisipasi robek rentan saraf."
        ] 
    },
    { 
        id: 42, name: "Cable Bicep Curl", category: "strength", muscle: "biceps", equipment: "cables", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Cable-Curl.gif", 
        steps: [
            "Setup: Attach a straight bar or EZ bar handle to the absolute lowest setting on a cable pulley machine. Stand facing the machine.", 
            "Grip: Grab the bar with an underhand grip, stand completely tall, pull your shoulders back, and aggressively pin your elbows to your sides.", 
            "Execution: Exhale and curl the bar upwards towards your upper chest. Keep your body rigid like a statue, letting the biceps do 100% of the mechanical work against the constant tension of the cable.", 
            "Return: Inhale and lower the bar under strict control, fully extending your arms at the bottom before immediately beginning the next repetition."
        ],
        steps_id: [
            "Pasang Alat: Tempel palang di lantai bawah roda poros mekanis mesin penyangga kabel kawat dan menghadap berhadapan dengan pusat berat.",
            "Rentang Kuda-kuda Tarikan: Pastikan dada Anda tegap agar tuas tarik berjalur lancar sejajar. Lebarkan tangkapan tangan sedikit.",
            "Konstan Tarik: Dengan tarikan berat beban tegangan murni kabel, lekukkan terus lipatan ke batas tulang leher dengan mengusir nafas penuh tenaga.",
            "Sisa Turun: Ulurkan menahan beban tali kembali ke pusat jangkar asalnya."
        ] 
    },
    { 
        id: 43, name: "Dumbbell Hammer Curl", category: "strength", muscle: "biceps", equipment: "dumbbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Hammer-Curl.gif", 
        steps: [
            "Stance: Stand upright holding a dumbbell in each hand at arm's length by your sides.", 
            "The Grip: Unlike a standard curl, maintain a neutral grip throughout the entire exercise—this means your palms should remain facing your torso (like holding a hammer).", 
            "The Curl: Keeping your elbows stationary at your sides, exhale and curl the dumbbells up toward your shoulders. This targets the brachialis and brachioradialis in addition to the bicep.", 
            "The Lowering: Squeeze hard at the top, then slowly lower the weights back down to the fully extended starting position."
        ],
        steps_id: [
            "Gaya Martil: Amankan pegangan beban yang diletakkan terpusat netral pada paha dengan jari tak condong depan (mirip martil).",
            "Mekanik Naik: Tetap mematuhi titik sentral badan (tak mengayun punggung). Tarik lipat engsel pergelangan secara mengarah atas vertikal tajam.",
            "Otot Bonus Ekstra: Ini bukan bicep murni namun akan mendongkrak ketebalan samping lengan, area otot brakialis Anda.",
            "Titik Puncak & Rilis: Jepit padat urat-urat luar itu kemudian pasang pertahanan turun secara tidak terburu-buru."
        ] 
    },
    { 
        id: 44, name: "Waiter Curl", category: "strength", muscle: "biceps", equipment: "dumbbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Waiter-Curl.gif", 
        steps: [
            "Grip: Hold a single dumbbell vertically. Place both hands flat underneath the top weight plate, as if you are holding a tray like a waiter.", 
            "Stance: Stand tall with your chest up and elbows tucked tightly against your ribs.", 
            "The Curl: Curl the dumbbell upwards towards your chest, keeping your palms facing the ceiling the entire time.", 
            "The Squeeze: Squeeze your biceps at the peak, then slowly lower the dumbbell back to the starting position."
        ],
        steps_id: [
            "Teknik Pegangan: Genggam unik dengan hanya pakai telapak menahan plat besi teratas beban memegang menengadah datar pelayan nampan.",
            "Posisi Stand: Rapatkan lengan rapat sejajar rusuk menjaga konsentrasi beban tegak di satu jalur saja.",
            "Kerekan Lengan: Jangan biarkan jemari terbuka turun, selalu rata di arah angkasa sepanjang pelipatan siku.",
            "Arah Latih: Kunci pada kontraksi puncak depan biseps dan ulangi proses lamban ke tumpu awal secara statis."
        ] 
    },
    { 
        id: 45, name: "Concentration Curl", category: "strength", muscle: "biceps", equipment: "dumbbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Concentration-Curl.gif", 
        steps: [
            "Setup: Sit on the edge of a flat bench. Spread your legs wide. Hold a dumbbell in one hand and rest the back of your upper arm against the inside of your corresponding thigh.", 
            "Positioning: Let the dumbbell hang down fully. Rest your non-working hand on your other knee for stability.", 
            "The Curl: Slowly curl the dumbbell upward toward your chest, strictly isolating the bicep without moving your upper arm from your thigh.", 
            "The Lowering: Pause and squeeze the bicep intensely, then lower the dumbbell in a highly controlled manner."
        ],
        steps_id: [
            "Persiapan Eksklusif: Duduk di batas ujung flat bench. Tungkai terbelah mengangkang, tancapkan area penyokong belakang satu siku pada batas daging dalam area kaki yang sama.",
            "Gantungan Kaku: Biar dumbel terjatuh dengan sisa lengan yang melilit lutut agar badan kokoh berdiri.",
            "Mengkonsentrasikan: Tarik engsel satu jalur menuju titik pusat bahu, hindari lengan melenceng mundur saat ditarik.",
            "Tekanan Remasan: Pertahankan gigitan beban otot maksimal sebelum dibiarkan berangsur meluncur pelan kembali di sudut awal lengan tegang."
        ] 
    },
    { 
        id: 46, name: "Dumbbell Preacher Curl", category: "strength", muscle: "biceps", equipment: "dumbbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Preacher-Curl.gif", 
        steps: [
            "Setup: Sit at a preacher bench. Hold a dumbbell in one hand with an underhand grip and place the back of that upper arm flat against the pad.", 
            "Execution: Let your arm fully extend to stretch the bicep. Exhale and curl the dumbbell up toward your shoulder.", 
            "Focus: Because the arm is braced, you cannot use momentum. Focus on the peak contraction at the top.", 
            "Return: Lower the dumbbell slowly to the starting position, ensuring you control the eccentric phase entirely."
        ],
        steps_id: [
            "Menduduki Alat Busa: Posisi duduk mesin busa bantalan preacher. Cengkeram kuat ujung beban dan jepit siku serta keseluruhan tricep pada landasan busa empuk tersebut.",
            "Tanpa Ragu: Tahan beban turun untuk regangan otot depan tertegang tajam. Mulai pelipatan melengkung menaiki tanjakan busa itu seutuhnya.",
            "Fokus Otot Sepenuhnya: Beban tak ada dorongan tenaga punggung. Berfokus perasan luar biasa otot di atas beban gravitasi.",
            "Latihan Turun: Kunci posisi perlahan menuruni turunan bukit landasan alat busa guna memberikan pukulan rusak otot yang maksimal secara hati-hati."
        ] 
    },
    { 
        id: 47, name: "Zottman Curl", category: "strength", muscle: "biceps", equipment: "dumbbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Zottman-Curl.gif", 
        steps: [
            "Setup: Stand holding a dumbbell in each hand by your sides. Begin with a supinated (palms up) grip.", 
            "Upward Phase: Curl the dumbbells up toward your shoulders exactly as you would in a standard bicep curl.", 
            "The Twist: At the very top of the curl, pause and rotate your wrists so your palms are now facing downwards (a pronated grip).", 
            "Downward Phase: Slowly lower the dumbbells back to the starting position using this overhand grip. Rotate your wrists back to palms-up at the bottom to repeat."
        ],
        steps_id: [
            "Gerak Unik: Dimulai secara awalan rutin layaknya curl bicep normal (muka tangan hadap angkasa di batas rusuk bawah).",
            "Mulai Mengepel (Curl): Selesaikan pelipatan ke area ujung rusuk dada atas dengan sempurna dan lurus beriringan.",
            "Muntir Zottman Khas: Puncak latihan saat di posisi gantung dada. Putar 180 drajat kedua tangan agar kini lengan hadap ke tanah (pronasi telungkup).",
            "Merosot Berat: Paksa otot lengan luar memblok jatuh beban dalam keadaan masih telungkup perlahan sampai batas pinggang bawah, lalu balikkan lagi posisinya."
        ] 
    },

    // ================= TRICEPS =================
    { 
        id: 48, name: "Tricep Pushdown", category: "strength", muscle: "triceps", equipment: "cables", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Triceps-Pushdown.gif", 
        steps: [
            "Setup: Attach a straight bar, V-bar, or double-sided rope to a high pulley on a cable machine. Grab the attachment tightly with an overhand grip.", 
            "Posture: Stand very close to the cable, lean your torso slightly forward (about 10 degrees) to give the cable a clear path, and lock your elbows firmly against your ribs.", 
            "The Push: Using exclusively the power of your triceps, push the attachment straight down toward the front of your thighs. Continue pressing until your arms are entirely straight and your elbows are fully locked out.", 
            "The Return: Squeeze the triceps at the bottom, then slowly control the weight as the attachment comes back up to upper-chest level. Never allow your elbows to drift forward or detach from your sides."
        ],
        steps_id: [
            "Persiapan Alat: Gunakan jenis batang pendek lurus, V, atau tali pada katrol menjulang tinggi. Peganglah menggantung menggunakan posisi punggung tangan atas.",
            "Condong & Mengunci Diri: Merapat ke jarak lintasan tali. Coba membongkok 10 derajat depan sembari membekukan tulang sisi rusuk tangan kuat-kuat.",
            "Gerakan Sodok Bawah (Pushdown): Kerahkan energi ekstensi (memanjangkan ujung triseps otot lengan). Geber tenaga melengkung arah tungkai betis sampai garis persendian terkunci tajam lurus seratus persen.",
            "Rem dan Melaju: Pertahankan remasan bawah 1 detik, tarik pedal balik rem tali beban kembali setara rusuk atas secara penuh kesadaran mekanik otot belakang tak goyah."
        ] 
    },
    { 
        id: 49, name: "EZ Bar Skullcrusher", category: "strength", muscle: "triceps", equipment: "ez bar", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/EZ-Bar-Skullcrusher.gif", 
        steps: [
            "Setup: Lie completely flat on a weight bench. Hold an EZ curl bar with an overhand, narrow grip (hands closer than shoulder-width) directly above your chest, with your arms fully extended.", 
            "The Drop: Shift your arms back slightly so they are at a 15-degree angle pointing toward the wall behind you (this keeps constant tension). Keeping your upper arms pointing exactly there, bend only at your elbows to slowly lower the bar down until it hovers just an inch above your forehead or just behind your head.", 
            "The Extension: Using intense triceps contraction, forcefully extend your elbows to push the bar back up along the same arc to the angled starting position. Do not move your upper arms."
        ],
        steps_id: [
            "Posisi Mati: Berbaring terlentang rata penuh. Pegang batang ulir (EZ Bar) sejajar muka pada cengkeraman tak sebidang dengan lintasan sejajar.",
            "Gerak Menyeret Rawan: Sandarkan tumpuan 15 derajat garis lurus tubuh belakang agar tegangan mekanik tersalur total pada persendian tricep, lipat menyasar atas pendaratan tempurung jidat muka atau pangkal tulang kepala.",
            "Pembantaian Ekstensi (Crusher): Balik meluncur ke depan dengan tembakan tekanan kuat trisep ke udara lurus tapi tak goyahkan garis sandaran bahu awal miring atas tersebut."
        ] 
    },
    { 
        id: 50, name: "Triceps Dips", category: "strength", muscle: "triceps", equipment: "bodyweight", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Triceps-Dips.gif", 
        steps: [
            "Mounting: Jump up onto a set of parallel dip bars, supporting your entire body weight on your fully extended arms with a neutral grip.", 
            "Posture: To isolate the triceps (and minimize chest involvement), keep your torso as upright and completely vertical to the floor as possible. Look straight ahead, and actively tuck your elbows in close to your body.", 
            "The Descent: Inhale and bend your elbows to lower your body straight down vertically. Descend until your upper arms are perfectly parallel to the floor (a 90-degree bend at the elbow).", 
            "The Push: Exhale and press your body weight back up to the starting position by forcefully straightening your arms and flexing the triceps at the lockout."
        ],
        steps_id: [
            "Bertumpu Alat Sejajar: Naiki panggung alat dip bar dan tumpu massa murni tubuh pakai kekuatan kedua sayap siku terulur mati bawah vertikal.",
            "Batas Konsentrasi: Agar energi diredam otot Trisep tanpa mengalir salah pada tulang pectoral dada, pastikan posisi kepala-ke-tumit berdiri nyaris datar garis horizontal sempurna.",
            "Tenggelam Diri: Buang turun beban menukik lurus pelan dan konsisten. Segera berhenti manakala lekuk lengan menyentuh ujung derajat sejajar siku.",
            "Tenaga Pegas: Balas lentingan energi untuk mendorong lurus kaku kembali pada puncak awalan seraya mengepalkan paksa trisep luar menegang."
        ] 
    },
    { 
        id: 51, name: "Dumbbell Overhead Extension", category: "strength", muscle: "triceps", equipment: "dumbbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Triceps-Extension.gif", 
        steps: [
            "Setup: Sit on a bench with low back support or stand perfectly upright. Grip a single, heavy dumbbell with both hands, cupping the inner, top plate with your palms facing up toward the ceiling.", 
            "Positioning: Carefully lift and press the dumbbell straight up overhead so your arms are fully extended.", 
            "Execution: Keeping your upper arms vertical and as close to your ears as flexibility allows, bend your elbows to lower the dumbbell directly behind the base of your neck. Lower it until you feel a deep, heavy stretch in your triceps.", 
            "The Press: Exhale and push the dumbbell back up to the starting position overhead, focusing entirely on contracting the triceps to move the weight."
        ],
        steps_id: [
            "Genggaman Mahkota Tangan: Duduk dan punggung menancap pada dasar. Berikan perpaduan satu genggaman besar kedua telapak (posisi piringan menghadap angkasa) di atas plat dumbel tunggal beban menengah-berat.",
            "Posisi Mahkota: Tempatkan angkatan piringan ke langit-langit mengangkangi sumbu puncak ujung rambut.",
            "Tekukan Belakang: Dengan mengkunci sisi pangkal siku menyayat ujung kuping tanpa sedikitpun menjauh, rebahkan secara terikat palang beban menusuk ujung punuk punggung.",
            "Pantulan Naik: Paksakan urat-urat tangan mengejan keras menyeret beban gravitasi kembali mengkristal lurus sejajar puncak kepalan tangan."
        ] 
    },
    { 
        id: 52, name: "Cable Overhead Triceps Extension", category: "strength", muscle: "triceps", equipment: "cables", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Cable-Triceps-Extension.gif", 
        steps: [
            "Setup: Attach a rope to a cable pulley set at the bottom or middle setting. Grab the ends of the rope, turn your back to the machine, and bring the rope up behind your head.", 
            "Stance: Take a split stance (one foot forward) to brace your body against the pull of the cable. Lean your torso forward slightly.", 
            "The Extension: Keep your elbows pointing up and forward. Extend your arms out in front of you and slightly upward until your arms are fully straight.", 
            "The Return: Slowly let the cable pull your hands back behind your head, bending the elbows fully to achieve a maximum stretch in the triceps before the next rep."
        ],
        steps_id: [
            "Persiapan Alat Katrol: Tempatkan beban kabel posisi nol daratan terbawah. Balik tubuh Anda merentangi arah katrol mesin dan peluk ujung simpul di batas sela rambut buritan kepala.",
            "Pijakan Dorong Melawan: Set kaki kuda-kuda kokoh menjulang (mengunci perut dari senggolan beban).",
            "Pelontar Depan: Targetkan sorotan sudut pandang lengan maju-ke-langit depan (bukan ke dada). Sikut menyudut runcing menghujam ujung target saat terpelanting lurus merentang lepas.",
            "Regangan Kemudi Berbalik: Akomodasikan luncuran lamban dengan tekukan tajam dan seret ikatan sisa ujung kabel kembali di tengkuk dalam tegangan menyiksa lambat."
        ] 
    },

    // ================= CORE =================
    { 
        id: 53, name: "Plank", category: "strength", muscle: "core", equipment: "bodyweight", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Plank.gif", 
        steps: [
            "Positioning: Get face down on the floor or a yoga mat. Prop yourself up on your forearms and the tips of your toes. Your elbows must be positioned directly underneath your shoulders at a 90-degree angle.", 
            "Alignment: Look straight down at the floor between your hands. Ensure your body forms a perfectly straight, rigid line from the back of your head, through your hips, down to your heels.", 
            "Engagement: Squeeze your glutes as tightly as possible, brace your abdominal muscles fiercely (as if anticipating a punch to the stomach), and actively press your forearms firmly into the floor to activate your shoulders.", 
            "The Hold: Maintain this high-tension, static position while remembering to breathe deeply and steadily for the entire prescribed duration. If your hips sink, terminate the set."
        ],
        steps_id: [
            "Posisikan Diri: Berbaring perut telungkup di lantai matras. Tumpukan pertahanan pakai kedua ujung tumit lipatan siku lurus bertaut dada.",
            "Perataan Tubuh Lurus: Garis vertikal mutlak tak dapat dinegosiasikan. Kaki hingga bokong, berlanjut ke punuk belakang diwajibkan padat satu sejajar besi kaku mati.",
            "Penguncian: Kerahkan himpitan napas keras (bak siap menahan pukulan balok kayu ke perut telanjang). Peras glutes pantat membatu.",
            "Statis Total: Tidak ada yang bergerak kecuali keluar masuknya desah oksigen. Tahan gempuran berat tubuh statis ini secara heroik hingga waktu detak henti hancur jatuh rebah."
        ] 
    },
    { 
        id: 54, name: "Cable Crunch", category: "strength", muscle: "core", equipment: "cables", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Cable-Crunch.gif", 
        steps: [
            "Setup: Attach a double-ended rope handle to a high cable pulley. Kneel down facing the machine (or facing away, depending on your preferred biomechanics) and grab the rope. Pull it down and hold the ends securely right next to your ears or behind your neck.", 
            "The Crunch: While keeping your hips locked and relatively stationary, contract your abdominals to heavily flex your spine. Crunch your torso forward and downward in a curling motion. Aim to literally bring your elbows down to touch your thighs or knees.", 
            "The Contraction: Exhale forcefully at the very bottom of the movement, squeezing your abs as tightly as possible for a full second.", 
            "The Release: Inhale and slowly return to the upright kneeling position, fighting the weight stack the entire way up to maintain tension on the abdominal wall."
        ],
        steps_id: [
            "Awalan Tali: Tancap simpul di pucuk menara alat. Tempelkan kedua ruas genggaman melingkari kepala, terikat tepat sejajar menindih belikat/bahu.",
            "Lipatan Ekstrim Perut: Jadikan tulang sakrum bawah pusat engsel pasif, paksa otot abdomen perut menekuk melingkar ke bawah menghujam area depan paha (dada digulung berlipat bukan punggung lurus menukik).",
            "Menekan Rapat: Remas udara paru keluar tuntas, lipat jaringan inti tubuh maksimal meruncing.",
            "Terulur Perlawanan Penuh: Bangkit kembali menantang kejamnya tarikan pemberat gravitasi dengan tempo terkendali penuh hingga berdiri melutut sempurna pada pusat atas asalnya."
        ] 
    },
    { 
        id: 55, name: "Russian Twist", category: "strength", muscle: "core", equipment: "medicine ball", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Russian-Twist.gif", 
        steps: [
            "Starting Position: Sit flat on the floor. Lean your straight torso back slightly (about a 45-degree angle) until you feel your abs engage to hold you up. Bend your knees and lift your feet a few inches off the ground to balance on your tailbone.", 
            "The Hold: Grasp a medicine ball, weight plate, or dumbbell with both hands and hold it directly in front of your chest.", 
            "The Twist: Using your obliques, rotate your shoulders and torso fully to the right side, tapping the medicine ball lightly on the floor just beside your right hip.", 
            "The Alternate: Immediately twist your torso all the way back across to the left side and tap the ball on the floor. Continue alternating sides rapidly but with full control in a smooth rhythm."
        ],
        steps_id: [
            "Pusat Tumpuan Tulang: Duduk pada pantat memiringkan kemudi punggung lurus menengadah mundur di putaran angka 45 derajat gravitasi agar core menyala. Lenturkan tumit mengambang udara kosong.",
            "Dekapan Benda Berat: Dekap bola berat padat dengan telapak sejajar perut pusat.",
            "Pemuntiran Kanan: Lempar porsi bobot dan ayun bahu Anda menukik menghunjam sisi pinggang bawah lantai kanan. Biarkan otot diagonal obliq meronta.",
            "Pemuntiran Berbalik: Gempur arus langsung menukik jauh ke lintasan lantai kiri. Pacu dengan rima tak henti-hentinya menahan stabilitas bergoyang hancur perut kanan dan perut kiri berimbang konstan."
        ] 
    },
    { 
        id: 56, name: "Hanging Leg Raise", category: "strength", muscle: "core", equipment: "bodyweight", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Hanging-Leg-Raise.gif", 
        steps: [
            "The Hang: Jump up and grasp a pull-up bar with a shoulder-width, overhand grip. Let your body hang completely still with your legs pointing straight down to the floor.", 
            "The Lift: Exhale sharply and engage your lower abdominals. Keeping your legs as straight as possible, lift them straight up in front of you. Aim to bring your toes up until your legs form a 90-degree angle with your torso (parallel to the floor).", 
            "Control: It is absolutely critical not to use momentum or let your body swing back and forth. The upward movement must be powered entirely by the raw contraction of your abdominal muscles and hip flexors.", 
            "The Lowering: Inhale and lower your legs back down to the dead-hang position as slowly and steadily as possible to maximize eccentric tension."
        ],
        steps_id: [
            "Beban Penggantungan: Rengkuh bar besi menggantung kuat dengan cengkeraman terbentang lepas vertikal pada udara kosong seutuhnya.",
            "Rentangan Sepatu Mengudara: Hembus paksa nafas agar otot pelindung abdomen inti terkunci sadar. Tembakkan bentangan kaku tulang paha seutuhnya membidik lurus horizon mata.",
            "Meredam Sabotase Momen Ayun: Disiplin brutal tanpa ampun untuk mengharamkan dorongan bantuan ayunan liar kaki. Murni angkat memeras energi pinggul (flexor) dan otot dalam panggul bawah.",
            "Penahanan Melonggar Ekstrem: Kendorkan otot panggul sangat panjang perlahan-lahan ke titik hampa melayang bawah seratus persen lurus sejajar badan utuh menghela kembali siap ulang."
        ] 
    },
    { 
        id: 57, name: "Ab Machine Crunch", category: "strength", muscle: "core", equipment: "machine", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Crunch-Machine.gif", 
        steps: [
            "Adjustment: Sit in an abdominal crunch machine. Take the time to properly adjust the seat height so the padded chest lever is resting comfortably on your upper chest, and hook your shins or feet securely under the lower foot rollers.", 
            "Grip: Lightly grasp the handles above your head or on the chest pad. Ensure you do not use your arm strength to pull the weight down; your hands are just resting.", 
            "The Crunch: Exhale heavily and aggressively crunch your torso forward. Pull your upper chest down toward your knees, visualizing folding your ribcage into your pelvis using strictly your abdominal muscles.", 
            "The Return: Inhale and slowly resist the heavy weight stack as you uncurl your torso, returning to the fully upright starting position before the next rep."
        ],
        steps_id: [
            "Konfigurasi Tubuh Alat: Tempelkan jok pada seting tinggi yang menempatkan gulungan penahan presisi melesak di batas dada ujung dan batas pijakan mantap di paha tulang kering.",
            "Larangan Peran Tangan: Letakkan telapak tangan ala kadarnya semata-mata buat penopang stabil tak berkontribusi mekanis secuil pun pada mesin tarikan.",
            "Lipat Menukik Abdomen: Buang nafas total. Jepit dan telungkup paksa dada mendekati selangkangan melalui gulungan tajam pada sekat otot pusar semata.",
            "Ketegangan Angkat Mundur: Ulurkan perlahan lekukan tadi berangsur melebar balik membentang tanpa pernah membiarkan plat beban alat beristirahat bertumpuk sama sekali."
        ] 
    },

    // ================= CALVES =================
    { 
        id: 58, name: "Standing Calf Raise", category: "strength", muscle: "calves", equipment: "bodyweight", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Standing-Calf-Raise.gif", 
        steps: [
            "Setup: Stand on the rigid edge of an elevated platform, an aerobic step, or a sturdy wooden block. Position the balls of your feet firmly on the edge, allowing your heels to hang completely off into the air.", 
            "Balance: Hold onto a nearby wall, railing, or sturdy object lightly with one or two fingers simply to maintain your upright balance. Do not use your hands to pull yourself up.", 
            "The Raise: Exhale and push forcefully through the balls of your feet, flexing your ankles to raise your heels as high up toward the ceiling as physically possible. Squeeze your calf muscles intensely at the absolute peak.", 
            "The Stretch: Inhale and slowly lower your heels down, dropping them significantly past the level of the step until you feel a deep, burning stretch in your Achilles tendon and lower calf muscles."
        ],
        steps_id: [
            "Pijakan Ambang Batas: Menapak tepat setengah punggung telapak depan menginjak area balok anak tangga menggantung ekor tumit menjuntai leluasa ke wilayah udara bebas.",
            "Stabilizer Vertikal Tegak: Manfaatkan pegangan alat tembok sekadar formalitas tidak rebah tumpah, sama sekali jangan menarik tubuh via tarikan cengkraman itu.",
            "Jinjit Melesat Lurus (Raise): Dorong pergelangan menukik menjangkau pucuk jinjitan teramat tinggi mengeksploitasi kumpulan jaringan daging betis secara masif maksimal.",
            "Peregang Melampaui Batas (Stretch): Benamkan tumit memanjang surut ekstrem melampaui elevasi nol derajat kayu pijakan guna melatih kelenturan fleksor otot pemicu serabut tebal betis luar dalam."
        ] 
    },
    { 
        id: 59, name: "Barbell Calf Raise", category: "strength", muscle: "calves", equipment: "barbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Calf-Raise.gif", 
        steps: [
            "Positioning: Load a barbell on a squat rack. Duck under it and position it securely across your upper back/trapezius muscles, utilizing a pad if necessary, just as you would for a standard back squat.", 
            "Stance: Unrack the heavy weight, step back, and stand perfectly tall with your feet placed about hip-width apart. Brace your core to stabilize the barbell on your spine.", 
            "Execution: Push straight up onto your tiptoes, powerfully elevating your heels as high as possible off the floor while keeping your knees straight but unlocked.", 
            "Return: Lower your heels back to the floor in a slow, controlled cadence. For superior muscle growth, place two small weight plates under your toes to allow your heels to drop into a deficit stretch at the bottom."
        ],
        steps_id: [
            "Alat Penyokong Membabi Buta: Rengkuh set up palang barbel (pakai busa bahu lebih mantap). Pindahkan struktur bobot merata menindih langsung persilangan sumbu pundak badan.",
            "Berdiri Lurus Total Beban: Jaga kuda-kuda lebar sepanggul saja. Ikat napas perut melindungi saraf struktur spinal menahan tegangan mati vertikal.",
            "Tembakan Jinjit Brutal: Lesatkan energi penuh melesak tajam naik lewat otot pangkal jari sampai menyundul plafon puncak ketegangan (siku sendi kaku lurus namun tak terkunci 100%).",
            "Meredam Gejolak Berat Ekstrem: Ulurkan tumit membentang menyerap hantaman pijak gravitasi barbel menyentuh padatnya alas ubin perlahan pasti (opsi balok lantai direkomendasi tajam)."
        ] 
    },
    { 
        id: 60, name: "Donkey Calf Raise", category: "strength", muscle: "calves", equipment: "machine", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Donkey-Calf-Raise.gif", 
        steps: [
            "Setup: Step onto the elevated foot platform of a dedicated donkey calf raise machine. Bend forward at the hips to a 90-degree angle and position your lower back/sacrum area snugly upward under the heavy padded lever arm.", 
            "Posture: Grip the handles provided. Keep your back flat and your legs mostly straight throughout the set, maintaining just a tiny micro-bend in the knees to protect the joint from hyperextension.", 
            "The Lift: Push powerfully up through the balls of your feet to raise the heavy lever arm. Fully contract and squeeze your calf muscles at the very top peak of the movement.", 
            "The Drop: Lower your heels down into the gap as far as your ankle mobility permits, securing a maximum stretch at the bottom before firing back up for the next rep."
        ],
        steps_id: [
            "Pusat Mesin Khusus: Rengkuh tapak berdiri platform mesin Donkey. Bungkuk lipat tegak siku-siku 90 drajat dari sendi pangkal paha sembari punggung panggul menyelam memikul landasan palang beban berat pelana buatan.",
            "Pemastian Ekstensi Aman Sendi: Genggam terali erat pegangan setir. Bekukan kaki tetap lurus tegak berdiri, akan tetapi senantiasa ada sisa bengkok sepersejuta derajat engsel agar urat tendon tak lepas putus beban mati tersebut.",
            "Daya Hentak Dorong Tuas: Dorong panggul menumpu mengkristalkan kontraksi tungkai jaringan serabut betis tunggal melesak naik sekeras tenaga dorong jinjitan jari semata.",
            "Perobekan Lapis Dalam: Selami dan panjangkan kembali ujung betis melampaui derajat kemiringan rata menyasar dasar bawah agar terjadi pelebaran hipertrofi perobekan maksimal terukur yang sempurna total."
        ] 
    },
    { 
        id: 61, name: "Dumbbell Calf Raise", category: "strength", muscle: "calves", equipment: "dumbbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Calf-Raise.gif", 
        steps: [
            "Grip: Grab a heavy pair of dumbbells with a neutral grip and let them hang straight down at arm's length by your sides.", 
            "Positioning: Stand on a flat surface, or ideally, place the front half of your feet on a raised weight plate or a wooden plank to artificially increase the range of motion and stretch.", 
            "The Movement: Keeping your torso completely vertical and your core tight, elevate your body straight upward by driving through your toes and raising your heels off the floor.", 
            "Control: Pause at the highest point for a full second to maximize the muscular contraction, then slowly lower your heels back down to the floor or below the edge of the plate."
        ],
        steps_id: [
            "Genggaman Pendulum Statis: Angkut sepasang balok dumbel porsi sangat berat mengapit sejajar jatuh lurus santai lengan sejajar badan pinggang bawah.",
            "Elemen Berdiri Penyangga Tambahan: Ambil pijakan alas datar, sangat disarankan memakai penyangga ujung lantai berjenjang (balok kayu) demi menciptakan traksi robekan kedalaman ekstrem lebih panjang rentang otot bawahnya.",
            "Manuver Akselerasi Vertikal Tepat: Kunci keseluruhan sendi anggota bagian punggung menahan statis tak bergerak, sodok dorongan dari telapak semata mendorong tegak meroket jinjt sempurna lurus.",
            "Deselerasi Bertahap Rata Berirama: Tunggu 1 detikan tepat kala pucuk puncak membatu keras meradang tegang, surut jatuhkan mundur ke kedalaman landasan jurang dengan menahan pedih penderitaan bobot ganda luar biasa teruji merobek lambat membesar."
        ] 
    },
    { 
        id: 62, name: "Seated Calf Raise", category: "strength", muscle: "calves", equipment: "machine", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Seated-Calf-Raise.gif", 
        steps: [
            "Setup: Sit upright on the seated calf raise machine. Place the balls of your feet on the lower foot platform and position the heavy, weighted pads securely over the top of your lower thighs, just above the knees.", 
            "Release: Push up slightly with your toes to lift the weight block and disengage the safety lever or pin on the side of the machine.", 
            "The Stretch: Slowly and deliberately lower your heels down toward the floor as far as your ankle mobility physically allows. You should feel a significant stretch specifically in the soleus muscle (the lower, wider part of the calf).", 
            "The Contraction: Push powerfully upward through the balls of your feet, raising your heels as high as possible against the heavy resistance of the thigh pads. Squeeze hard before lowering."
        ],
        steps_id: [
            "Kursi Set Duduk Isolasi Khusus Terduduk Lebar Bawah (Soleus): Baringkan diri Anda terduduk kursi pelana. Taruh bantalan padat beban mati di pangkal persendian lutut sedikit atasnya dan jejak telapak mengakar teguh di injakan alas.",
            "Pembukaan Tuas Ganda Pengaman: Berikan tekanan jinjit permulaan ringan agar pin pasak lepas beban bebas mengayun.",
            "Regangan Akar Pondasi Lentur Fleksor Merobek Lapisan Bawah Lemak Otot Soleus Terdalam: Perlahan pancing tarikan turun hingga engsel lentur mata kaki terperosok curam sehabis-habis kelenturan anatomis alamiah meronta hebat menderita melentur keras dalam-dalamnya.",
            "Sodokan Naik Daya Kuda Bawah: Tendang hantaman beban mesin memberontak angkasa menembus ambang daya normal menanjak tegak sempurna terpusat menyasar otot lebar soleus tersebut sepenuhnya."
        ] 
    },

    // ================= FOREARMS =================
    { 
        id: 63, name: "Barbell Wrist Curl", category: "strength", muscle: "forearms", equipment: "barbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Wrist-Curl.gif", 
        steps: [
            "Setup: Sit on the edge of a flat weight bench. Hold a light to moderate barbell with an underhand (supinated, palms facing up) grip.", 
            "Positioning: Lean forward and rest your forearms completely flat against the top of your thighs. Position them so that your wrists are hanging freely off the edge of your kneecaps. Your forearms must remain totally stationary.", 
            "The Extension: Carefully open your hands slightly and allow the barbell to roll down from your palms to the tips of your fingers. This provides a maximal stretch to the flexor muscles of the forearm.", 
            "The Curl: Tightly close your fingers back around the bar and forcefully curl your wrists upward as high as they can mechanically go, lifting the weight strictly using your forearm flexors without lifting your arms off your legs."
        ],
        steps_id: [
            "Persiapan Penuh Setengah Paha: Duduk ujung datar rata flat bangku angkat besi. Peluk satu tangkai plat sedang menggunakan sisi buka bagian pucuk luar tangan muka naik.",
            "Penguncian Tempel Otot Dasar Lengan: Tiarap raga bahu ke depan lekatkan menekan mampat batang siku sampai otot lengah merapat patuh sejajar garis kaki paha tanpa celah sedikitpun memaku sisa jari menjuntai lepas pinggiran lutut.",
            "Tarikan Melorot Sentuh Jemari Lepas Sempurna: Terbuka urat lepaskan palang merambat seret memanjang perpanjangan kulit daging murni lenturan tulang rawan otot genggam lengan.",
            "Penarikan Pungut Menyambar Meringkuk Gulung Tuntas Penuh: Kumpulkan jari keritingkan pelan melilit cengkeram genggaman baja membengkok sendi menyembul naik batas maksimum tak peduli gempuran nyeri dalam urat daging tangan terpompa merah itu."
        ] 
    },
    { 
        id: 64, name: "Dumbbell Reverse Wrist Curl", category: "strength", muscle: "forearms", equipment: "dumbbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Reverse-Wrist-Curl.gif", 
        steps: [
            "Setup: Sit down on a flat bench. Hold a light dumbbell in each hand using an overhand (pronated, palms facing down) grip.", 
            "Positioning: Rest the entire length of your forearms on your thighs so that your wrists and the dumbbells are hanging freely over the edge of your knees into thin air.", 
            "The Movement: Keeping your forearms pressed hard against your legs, curl your wrists upward toward the ceiling, bringing the back of your hands closer to your body. This targets the forearm extensors.", 
            "The Return: Slowly and carefully lower the dumbbells back down until you feel a gentle, pulling stretch in the top of your forearms. Do not use momentum."
        ],
        steps_id: [
            "Tata Posisi Genggam Telungkup Berat Membebani Sendi Rapuh: Duduk di atas alas. Remas satu batang pasang dumbbell enteng posisi tangkapan berbalik menindih jari kelingking muka hadap aspal dasar ubin.",
            "Pemasangan Rel Kereta Batas Lutut Rata Tanah Tubuh Depan: Benamkan urat belakang tekan menimpa tumpukan bantalan celana melaju sejajar memblok garis tepi tebing patella lutut menjuntai rawan pasrah angin lewat tanpa bantuan gerak sama sekali.",
            "Pengangkatan Mencongkel Sendi Otot Terluar Muka (Extensor Curls Tegang Penuh Sempurna Cengkram): Naik engsel punggung pergelangan pelan tapi mematikan berbalik mendongak membidik wajah hingga urat timbul mencakar bagian luar paha.",
            "Melungsur Memudar Terkontrol Keras Lembut Bawah Kembali Tertarik: Tolak daya gravitasi dengan menahan luruh ke aspal menggapai kemelaratan rentangan ujung jari merobek ekstensor dalam secara kejam tanpa momentum bantuan tipu gerak mengayun."
        ] 
    },
    { 
        id: 65, name: "Farmers Walk", category: "strength", muscle: "forearms", equipment: "kettlebell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Farmers-Walk.gif", 
        steps: [
            "The Pickup: Stand directly between two very heavy kettlebells (or dumbbells). Squat down with a perfectly flat back, brace your core, and grip the handles as tightly and aggressively as humanly possible.", 
            "The Posture: Stand up straight by driving through your legs. Pull your shoulders back and down, puff your chest out proudly, and look straight ahead. Do not let the heavy weights rest against or bounce off your outer thighs.", 
            "The Walk: Begin walking forward in a straight line. Use short, rapid, and highly deliberate steps to minimize swaying and maintain balance under heavy load.", 
            "The Finish: Continue walking for a set distance (e.g., 20-40 meters) or a set time, maintaining a crushing, white-knuckle grip the entire way. Carefully squat down to return the weights to the floor."
        ],
        steps_id: [
            "Pengangkatan Bobot Ekstrem Total Tubuh: Menempatkan dua benda maha berat berpelana di sisi selangkangan betis luar raga tubuh tegap diri. Tarik tubuh terpuruk jongkok dengan perisai punggung pelat besi tegak meremas mematikan erat gagang baja alat membabi buta ganas.",
            "Pertahanan Sikap Arca Baju Zirah Perang (Armor Posture Setup): Melesat tegak dengan ledakan tuas dengkul pijak tumit meluncur mendarat di awan. Lempar bahu merapat surut menjepit leher bangga membusung pandangan jauh depan tak gentar miring terhuyung beban kanan kiri bergoyang gesek liar mengibas kaki.",
            "Pawai Langkah Pejalan Bencana Pembakar Tenaga Taktikal Cepat: Merangsek maju membidik tapak melaju lajur cepat berirama menari tapak ringan tangkas stabil (bukan seret kaki terseret lemah tak bertenaga hancur tak beraturan) dalam perlawanan menundukkan keseimbangan inti yang terguncang hebat berat kanan kiri sejalan.",
            "Akhir Garis Putus Asa Perih Terbakar Penuh Derita Saraf Jepit Menggigil Berpeluh Tuntas Terkendali Ujung Jalan Jatuh Luruh Berhasil Selamat: Pacu laju tahan sakit kepalan urat memutih kram tanpa menyerah lepas sebelum garis target (20 meter) lalu benamkan pelan kembali posisi jongkok santun bermartabat turun tanah (bukan menjatuhkan dilempar berdebum sembarangan)."
        ] 
    },
    { 
        id: 66, name: "EZ Bar Reverse Curl", category: "strength", muscle: "forearms", equipment: "ez bar", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/EZ-Bar-Reverse-Curl.gif", 
        steps: [
            "Stance: Stand perfectly straight with your feet shoulder-width apart to establish a strong foundation.", 
            "Grip: Hold an EZ curl bar in front of your thighs using a pronated (overhand, palms facing down) grip on the outer angled portions of the bar.", 
            "The Execution: Pin your elbows tightly to your ribcage. Keeping your upper arms totally still, bend at the elbows to curl the bar upwards in a semicircular motion until it reaches your upper chest.", 
            "The Eccentric: Lower the bar very slowly and methodically back to the starting position. Because of the overhand grip, you will feel this contraction intensely in the brachioradialis muscle on the top of your forearm."
        ],
        steps_id: [
            "Sikap Pilar Tegak Menantang Badai Momen Momentum Cacat Latihan Curang Gagal: Pancang fondasi cengkeraman pijak ubin bahu menyelaraskan keseimbangan postur berdiri (jangan pakai punggung membantu angkat beban lengan murni nanti ayun mengayun kacau rusak ritmenya tak beres).",
            "Cengkraman Menunggang Kuda Poni Tangan Memutar Bawah Melibas Tangkai Rintangan Miring Ulir Lekuk Besi Spesifik Alat Bergelombang Cacat: Tangan tengkurap menyergap titik ujung patahan zigzag agar nyaman membela sendi engsel tulang saat mengangkatnya membengkok masuk membelit berat besi menatap aspal bawah bumi.",
            "Sodokan Engsel Mekanis Presisi Menjepit Sayap Burung Rusuk Samping Perut Tengah Paru: Kunci mampat sayap siku lengan merapat membeku menyamping paha menahan statis diam seribu bahasa. Lipat menggerakkan per putaran roda rel sendi mendaki memompa meremas otot sampai puncak leher memanjat gunung batas tertingginya tergulung habis.",
            "Peluncuran Jatuh Penurunan Teror Kontraksi Eksentrik Urat Luar Tebal (Brachioradialis): Sorot tajam peluruhan memudar pelan berat besi merayap perlahan-lahan ke landasan merobek perih mengembang otot sisi samping tebal urat paling nampak lengan jantan pria berangsur menyebar merata pada ujung posisi asal usul rileks."
        ] 
    },
    { 
        id: 67, name: "Behind The Back Barbell Wrist Curl", category: "strength", muscle: "forearms", equipment: "barbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Behind-The-Back-Barbell-Wrist-Curl.gif", 
        steps: [
            "Setup: Stand facing away from a barbell that is resting on a squat rack set at hip height. Reach behind your back and grab the bar with a shoulder-width, pronated (palms facing away from you) grip.", 
            "Positioning: Lift the bar off the rack and let it hang freely behind your glutes/hamstrings. Stand tall, brace your core, and keep your arms perfectly straight.", 
            "The Curl: Without bending your elbows whatsoever, curl the barbell upward by simply flexing your wrists toward the ceiling as hard as possible.", 
            "The Release: Lower the heavy weight back down slowly. For an extreme stretch and extra intensity, let the bar roll slightly out of your palms and into the hook of your fingertips at the very bottom."
        ],
        steps_id: [
            "Pendirian Menantang Arah Menjemput Lari Batang Gawang Dudukan Rack Belakang Punggung Buta Tak Melihat Memutar Muka Membelakangi Rak Posisi Sempurna Lurus: Putar badan memunggungi tuas beban besi penyangga jaring rak yang dipasang tinggi pantat. Sergap mundur meraba menarik menjambak palang lebar punggung memakai cengkram membuang tangan (keluar badan telapak membentang terbalik muka luar membelakangi arah pantat Anda sepenuhnya lurus mencengkram).",
            "Sikap Terpasung Gantungan Penjara Memikul Dosa Besi Murni Tarikan Beban Meronta Lurus Tergembok Sempurna Penuh Daya: Tarik mundur mengangkat barbel melorot menyentuh membelai gesek tulang belakang hamstring glutes melayang udara sisa pantat. Membatu tegap (jangan berayun sedikit saja), lengan terentang membujur mati lurus garis tiang tanpa cacat tanpa ditekuk engsel secuil pun tertegang diam statis menunggu aba-aba eksekusi tarik mengerut lipat jari jemari mengejang.",
            "Cengkraman Cakar Harimau Pengerek Lipatan Meringkuk Sendi Pergelangan (Wrist Curls Extensor) Merobek Daging Murni Membentur Kaku Langit Udara Atas Langsung Tajam Merata: Jangan sesekali melengkungkan siku sedikit saja (kalau ditekuk berarti jadi bicep curl bodoh). Seret gulung engsel pergelangan mendongak meronta-ronta mencakar atap plafon gedung meremas sekeras kuat mungkin murni urat lengan berputar sendi sendirian mengangkat beban membengkokkan menantang patah urat pergelangan membulat tuntas naik memerah tegang darah mendidih meledak.",
            "Siksa Terakhir Terurai Melorot Panjang Tarikan Urat Jari Jemari Bergantung Nadi Memudar Pelan Perlahan Merentang Sakit Perih Luar Biasa Memanjang Sempurna: Terurai lambat berat ditarik ke dalam sisa cakar ujung kuku membelai lentur menekan tarikan ekstrem otot memanjangkan ujung jaringan urat tendon berangsur-angsur turun membuka kepal kembali menjuntai lurus terayun batas terbawah lemas siap memompa ditarik kerut kembali mengulang penderitaan membakar menyayat tebal lengan serabut membesar bengkak hipertrofi."
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
            "Menjatuhkan Tubuh: Mulai dalam posisi berdiri santai, jatuhkan tubuh ke lantai dengan telapak tangan menumpu kuat.",
            "Eksekusi Push-up: Sentakkan kaki ke belakang dan lakukan satu push-up sempurna hingga dada menempel lantai.",
            "Lompat Jauh: Tarik kembali kaki ke depan mendekati dada. Tidak seperti burpee biasa yang melompat ke atas, bersiaplah untuk mengayun lengan dan melompat sejauh mungkin ke depan (Broad Jump).",
            "Pendaratan: Mendarat dengan dua kaki bersamaan mengeper pelan, dan langsung sambung menjatuhkan tubuh ke siklus burpee berikutnya."
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
            "Sprawl Awal: Hempaskan telapak tangan ke lantai dan lempar tungkai ke belakang menuju posisi push-up.",
            "Push-up Pertama (Lutut Kanan): Lakukan 1 push-up. Setelah naik, tendang lutut kanan ke arah dada secara eksplosif dan kembalikan ke belakang.",
            "Push-up Kedua (Lutut Kiri): Lakukan push-up lagi. Setelah naik, tendang lutut kiri ke arah dada dan kembalikan ke belakang.",
            "Push-up Ketiga & Lompat: Eksekusi push-up terakhir (ketiga kalinya), lalu lompat berdiri dan loncat tinggi-tinggi ke udara."
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
            "Posisi Awalan: Menunduk dengan tumpuan lutut dan tangan (posisi meja/merangkak).",
            "Mengambang: Tekuk jari-jari kaki untuk menumpu, angkat lutut mengambang sekitar 5 cm dari lantai. Jaga punggung tetap stabil menyerupai papan meja.",
            "Merayap Bersilang: Melangkah maju dengan menggerakkan tangan kanan dan kaki kiri secara serentak namun tetap rendah.",
            "Terus Bergerak: Disusul dengan tangan kiri dan kaki kanan. Bergerak menyusuri lantai tanpa pantat menungging tinggi atau lutut menabrak lantai."
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
            "Persiapan: Mulailah posisi lunge standar. Kaki kanan tekuk 90 derajat di depan, kaki kiri menumpu di belakang.",
            "Tarik Pegas: Turunkan pinggul sekilas untuk membangun ancang-ancang tenaga lompatan vertikal.",
            "Ledakan: Ledakkan kekuatan penuh dari ujung kaki dan lompat melenting kuat-kuat menyentuh langit-langit udara.",
            "Tukar Udara: Saat melayang menolak gravitasi udara, gunting (tukar) lintasan posisi kaki dengan cekatan cepat, bersiap mendarat langsung lunge di posisi kaki yang sudah bertukar silang untuk terus berulang."
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
            "Postur Tegap: Berlari dengan kepala melihat lurus. Sedikit condong miring ke depan namun ditekuk dari poros pergelangan kaki bukan pinggang bungkuk.",
            "Pijakan Kaki: Sentuh bumi mendarat via telapak kaki tengah (mid-foot strike) agar otot meredam, bukan menghantam keras menggunakan tulang tumit.",
            "Bandul Lengan: Ayunkan kepalan tangan rileks, siku menekuk 90 derajat secara berirama harmonis menyelaraskan hentakan tapak.",
            "Irama Nafas: Rangkaikan irama konsisten stabil mengunci detak pacu jantung pelan bertahan merajut stamina berdurasi kardio waktu berjalan terus."
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
            "Torsi Maksimal Melaju: Buang beban gravitasi melesat liar melengkung menembus batas melompat sprint 100 meter kecepatan peluru penuh ledakan serabut fast-twitch lari.",
            "Dengkul Terbang (Knee Drive): Angkat sentak daya loncat lutut depan menembus hantaman udara menghancurkan limitasi waktu detak lari cepat brutal bertenaga.",
            "Pompa Piston Tangan Ayun Brutal: Pacu sikutan sabetan tajam menyobek udara kanan kiri beradu berlawanan seiring hantaman telapak kaki yang tak berhenti.",
            "Tahan Napas Anaerobik Murni: Eksekusi berkecepatan puncak sekejap 15 detik hancur lalu meredup. Jangan lakukan tempo santai."
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
            "Posisi Lengan: Kunci tekukan siku rapat di rusuk samping pinggang, pegang tuas tali karet menghadap keluar.",
            "Putaran Mekanik Pergelangan: Putar melecut helaian tali dengan goyangan kecil pergelangan saja, jangan ayunkan lengan bahu.",
            "Lompat Minimalis: Jejak tipis melayang sejengkal dari lantai. Tak perlu tinggi asalkan serat karet cukup lolos lewat sepatu.",
            "Pendaratan Ritmis Elastis: Daratkan peredam sendi lutut elastis memantul-mantul lincah konstan merajut rentang rima nafas berkesinambungan detik ke menit."
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
            "Setel Dudukan Ergonomis Tepat Kaki Bengkok 10 Derajat Sempurna: Paskan tungkai lurus menapak pedal. Atur tinggi pelana tak boleh bikin pantat goyah kiri kanan saat menggowes.",
            "Sikap Stang Tegak Terkontrol Fokus Lurus Bebas Bungkuk Cacat: Pegang lengkung besi setir. Busungkan luruskan sedikit leher tulang agar napas terpompa paru maksimal.",
            "Gowes Berputar Bukan Menendang: Putaran siklus sepeda diinjak melingkar. Dorong tumit meremas tarik paha belakang naik lagi bagai lintasan roda bulat pelumas licin.",
            "Atur Medan Jalan Putaran Berat Magnetik Tensi Dinamis Beban Tanjakan Curam vs Jalan Tol Cepat: Set ketegangan untuk variasi siksaan memerah peluh tetesan derap jantung pembakar detak."
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
            "SOP Mesin Jalan Karpet: Memulai memencet program monitor saat berpijak sela karet rel matikan. Baru naik saat jalan ban meluncur lambat mulus.",
            "Latihan Bebas Tangan (Hands-Free): Usahakan tidak menggelayut pada penahan pegangan sisi agar mesin bakar kalori tidak manja dan tubuh terpacu seimbang mandiri.",
            "Jalan Menanjak / Lari (Incline/Run): Tentukan menu gradien tebing kemiringan mendaki gunung simulasi atau trek lurus pelari estafet. Jangan lihat bawah.",
            "Protokol Rehat Pelan Melambat Berhenti Bertahap Tanpa Henti Kejut: Turunkan tempo transmisi berjalan melambat santai memudar sebelum putuskan kabel dan matikan berhenti total di aspal diam."
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
            "Awalan Siaga Melipat Tempurung Meraih Tuas Kemudi Perahu Dayung Kencang Cengkeraman Tarik Nafas Tarikan Panjang Mendalam Dalam Sekali Rengkuh Mantap Bersiap Menendang Rantai Panjang Besi Ergometer Siap Meluncur Tarik Kuat. Tarik tubuh sampai ujung depan, lengan merentang panjang pegang tungkai kemudi perahu buatan ini dan lipat lutut kaki rapat berdekatan rapat. \n\nPastikan postur tegak dada terbusung menatap kejauhan.", // Simplified due to translation density constraints.
            "Tendangan Rantai Besi Pengayuh: Tendang kaki untuk meluncur ke belakang lurus menahan beban sebelum tangan mulai menarik tuas mendekat perut.",
            "Tarikan Sisa Punggung Terhempas (Finish): Menjelang akhir dorongan, tarik tuas ke rusuk sembari membuang badan agak rebah ke belakang.",
            "Jalan Pulang Terseret Tali: Ulur tangan ke depan, condongkan dada menunduk, dan biarkan jok melorot maju kembali terlipat lutut persis awalan. Ulangi rima air."
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
            "Atur Beban Putaran Tangga Bergulir (Revolving Stairs Setup Pacing Laju Tanjakan): Hidupkan panel laju langkah sedang. Merapat menaiki mesin yang menyeret turun tanpa henti.",
            "Awas Postur Cacat Menyandarkan Raga Manja Peluh Kelelahan (No Leaning Cheat Bad Form Hunch): Tegakkan kepala pundak tak usah membungkuk memeluk layar panel penyangga depan mencuri beban melainkan melangkahlah kesatria murni beban kaki menahan gravitasi.",
            "Jejak Pijakan Melingkup Telapak Penuh Meremas Urat Pantat Paha Atas Berkontraksi (Full Foot Strike Deep Glute Activation Power Drive): Jejak datar (bukan cuma jinjit ujung). Tapakkan pijak melangkah agar otot hamstring belakang berteriak pegal meronta.",
            "Eskalator Abadi Jantung Berdetak Pacu Menggempur Paru Konsisten Kontinu Rima Tak Terhenti Putus Jeda: Daki tanjakan ini berlarut-larut konstan stabil tahan siksaan ritme tempo lurus sampai batas waktu detak nadi berpacu hebat."
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
            "Ayun Tangan Mengiring Membantu Momentum Tenaga Laju Lenting Udara Tepat Rima Sinkron Mendarat Mulust (Arm Throw Sync Drive Hentak Lurus Vertikal Kuat Sejajar Hampa): Sabet tangan bersilangan guna menambah momen luncuran lontar balistik tubuh merobek perlawanan melayang. \n\nMendarat halus sambut tukar tungkai loncatan." 
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
            "Bentuk Lari (Posture Form): Berdiri membusung tegap lurus bersiaga berlari statis.",
            "Ayun Menendang Pantat (Motion Sprint Rear Heel Drive Glute Kick Laju Ke Belakang Atas): Joging di titik poros Anda, angkat tembak menendang tumit sepatu mendobrak menjulang tinggi memukul mendarat ke belahan glutes daging bokong pantat menyapu cepat ganti-gantian tungkai gempur.",
            "Target Hantaman Telak Menyapu Bawah Ujung Urat Tegang Hamstring Melipat Sempurna Mengayun (Target Strike Tap Full Contraction Bounding Squeeze Lincah Kering): Upayakan pukulan tajam mendarat memukul menampar telak di belakang tubuh secara penuh memompa menyengat.",
            "Kecepatan Irama Pacing Mesin (Rapid Fire Sprint Pace Pump Arms Rhythmic Hentakan Tapak Kecil Berirama Melompat Lembut Pijakan Lari Angin Rileks Mendarat Mulus Hampa Tahan Cepat Laju Penuh Kecepatan)." // Compressed
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
            "Rengkuhan Mengangkasa Menjulang Lengkung Bertepuk Menampar Angin Lurus Ujung Langit Puncak Tegang Merentang Bahu Terbang (The Reach Clap Overhead Swing Lurus Udara Sempurna Lingkar Lebar Menjulang Lurus Membentang Rapat Menampar Tapak Tangan Ujung)." // Compressed
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
            "Awalan Statis: Berdiri rapat normal.",
            "Loncatan Terbelah Lebar: Lontarkan kedua tapak mekar (kaki renggang) di udara ringan.",
            "Ayun Bentang Menapak Tepuk Udara Atas: Rentangkan mengayun melingkar tangan hingga saling bertepuk lurus menjulang kepala puncak lintasan lengkung.",
            "Tutup Sinergi Laju Siklus Irama: Kembalikan mengatup rima memompa denyut detak."
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
            "Awalan Melompat Berjingkat Gembira Mengudara Hentak Atas (The Motion Skip Vertical Bound Rima Jingkat Mengawang Pegas Tungkai Ringan Maju Depan Laju Lenting Udara Murni Tanpa Beban Menjulang Melontar Jauh Rima Sempurna Hentakan Meluncur Maju Melambung)", 
            "Gempuran Tembak Dengkul Lutut Menancap Pucuk Udara (The Drive High Knee Thrust Tembakan Lurus Vertikal Mengamuk Laju Rima Hentak Hampa Atas Menjulang Lurus Membeku Terbang)",
            "Ayun Gempur Piston Tangan Siku Rima Berbalas (Arm Action Pump Mengayun Rima Melaju Melayang Meredam Rima Harmonik Silang Berhadapan Seimbang Mulus Hentak Mulus Mengawal Meluncur Hampa)",
            "Pendaratan Lentur Jingkat (Rhythm Soft Landing Membal Pantul Kaki Pegas Lontar Menyerap Energi Transisi Mulus Mengulang Mengalun Bergantian Tungkai Melaju Melontar Kembali Udara Bertubi Membakar Rima Irama Cepat Konstan Ritmis Hentak)." // Compressed
        ] 
    }
];