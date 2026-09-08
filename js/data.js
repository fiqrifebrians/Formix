const muscles = [
    { id: "chest", name: "Chest" },
    { id: "back", name: "Back" },
    { id: "legs", name: "Legs" },
    { id: "shoulders", name: "Shoulders" },
    { id: "arms", name: "Arms" },
    { id: "core", name: "Core" },
    { id: "calves", name: "Calves" },
    { id: "glutes", name: "Glutes" },
    { id: "forearms", name: "Forearms" }
];

const equipments = [
    { id: "bodyweight", name: "Bodyweight" },
    { id: "dumbbell", name: "Dumbbell" },
    { id: "barbell", name: "Barbell" },
    { id: "machine", name: "Machine" },
    { id: "cables", name: "Cables" },
    { id: "kettlebell", name: "Kettlebell" },
    { id: "resistance band", name: "Resistance Band" },
    { id: "medicine ball", name: "Medicine Ball" },
    { id: "ez bar", name: "EZ Bar" }
];

// NOTE: Ganti URL di bawah ini dengan tautan gambar atau path gambar lokal dari GymVisual Anda
const workoutDB = [
    // --- CHEST (9 Workouts) ---
    { id: 1, name: "Barbell Bench Press", category: "strength", muscle: "chest", equipment: "barbell", images: ["https://gymvisual.com/img/bench-start.jpg", "https://gymvisual.com/img/bench-end.jpg"], steps: ["Lie flat on the bench.", "Lower the bar to your chest.", "Press back up to the start."] },
    { id: 2, name: "Push-Up", category: "strength", muscle: "chest", equipment: "bodyweight", images: ["https://gymvisual.com/img/pushup-start.jpg", "https://gymvisual.com/img/pushup-end.jpg"], steps: ["Start in a plank position.", "Lower your body.", "Push back up powerfully."] },
    { id: 3, name: "Dumbbell Fly", category: "strength", muscle: "chest", equipment: "dumbbell", images: ["https://gymvisual.com/img/dbfly-start.jpg", "https://gymvisual.com/img/dbfly-end.jpg"], steps: ["Hold dumbbells above chest.", "Open arms wide with a slight bend.", "Bring dumbbells back together."] },
    { id: 4, name: "Cable Crossover", category: "strength", muscle: "chest", equipment: "cables", images: ["https://gymvisual.com/img/cablecross-start.jpg", "https://gymvisual.com/img/cablecross-end.jpg"], steps: ["Grab high pulleys.", "Step forward and brace core.", "Bring hands together in an arc."] },
    { id: 5, name: "Resistance Band Chest Press", category: "strength", muscle: "chest", equipment: "resistance band", images: ["https://gymvisual.com/img/bandpress-start.jpg", "https://gymvisual.com/img/bandpress-end.jpg"], steps: ["Anchor band behind you.", "Grab handles.", "Press straight forward."] },
    { id: 6, name: "Medicine Ball Chest Pass", category: "strength", muscle: "chest", equipment: "medicine ball", images: ["https://gymvisual.com/img/medballpass-start.jpg", "https://gymvisual.com/img/medballpass-end.jpg"], steps: ["Hold ball at chest level.", "Push ball forcefully forward.", "Catch and repeat."] },
    { id: 7, name: "Incline Barbell Press", category: "strength", muscle: "chest", equipment: "barbell", images: ["https://gymvisual.com/img/incline-start.jpg", "https://gymvisual.com/img/incline-end.jpg"], steps: ["Set bench to 30-45 degrees.", "Lower bar to upper chest.", "Press back to full extension."] },
    { id: 8, name: "Pec Deck Machine", category: "strength", muscle: "chest", equipment: "machine", images: ["https://gymvisual.com/img/pecdeck-start.jpg", "https://gymvisual.com/img/pecdeck-end.jpg"], steps: ["Sit on machine with arms on pads.", "Squeeze arms together.", "Slowly return to start."] },
    { id: 9, name: "Decline Dumbbell Press", category: "strength", muscle: "chest", equipment: "dumbbell", images: ["https://gymvisual.com/img/declinedb-start.jpg", "https://gymvisual.com/img/declinedb-end.jpg"], steps: ["Lie on decline bench.", "Lower dumbbells to lower chest.", "Press back up."] },

    // --- BACK (9 Workouts) ---
    { id: 10, name: "Pull-Up", category: "strength", muscle: "back", equipment: "bodyweight", images: ["https://gymvisual.com/img/pullup-start.jpg", "https://gymvisual.com/img/pullup-end.jpg"], steps: ["Hang from bar.", "Pull chin over bar.", "Lower slowly."] },
    { id: 11, name: "Barbell Row", category: "strength", muscle: "back", equipment: "barbell", images: ["https://gymvisual.com/img/bbrow-start.jpg", "https://gymvisual.com/img/bbrow-end.jpg"], steps: ["Hinge at hips.", "Pull bar to stomach.", "Lower with control."] },
    { id: 12, name: "Dumbbell Row", category: "strength", muscle: "back", equipment: "dumbbell", images: ["https://gymvisual.com/img/dbrow-start.jpg", "https://gymvisual.com/img/dbrow-end.jpg"], steps: ["Support body on bench.", "Pull dumbbell to hip.", "Lower slowly."] },
    { id: 13, name: "Lat Pulldown", category: "strength", muscle: "back", equipment: "machine", images: ["https://gymvisual.com/img/latpull-start.jpg", "https://gymvisual.com/img/latpull-end.jpg"], steps: ["Sit at machine.", "Pull bar to upper chest.", "Return to start."] },
    { id: 14, name: "Seated Cable Row", category: "strength", muscle: "back", equipment: "cables", images: ["https://gymvisual.com/img/cablerow-start.jpg", "https://gymvisual.com/img/cablerow-end.jpg"], steps: ["Sit with knees slightly bent.", "Pull handle to abdomen.", "Extend arms fully."] },
    { id: 15, name: "Kettlebell Swing", category: "strength", muscle: "back", equipment: "kettlebell", images: ["https://gymvisual.com/img/kbswing-start.jpg", "https://gymvisual.com/img/kbswing-end.jpg"], steps: ["Hinge hips back.", "Explosively thrust forward.", "Let kettlebell swing to chest height."] },
    { id: 16, name: "T-Bar Row", category: "strength", muscle: "back", equipment: "barbell", images: ["https://gymvisual.com/img/tbar-start.jpg", "https://gymvisual.com/img/tbar-end.jpg"], steps: ["Straddle bar.", "Hinge hips.", "Pull handles to chest."] },
    { id: 17, name: "Resistance Band Row", category: "strength", muscle: "back", equipment: "resistance band", images: ["https://gymvisual.com/img/bandrow-start.jpg", "https://gymvisual.com/img/bandrow-end.jpg"], steps: ["Anchor band forward.", "Pull handles to ribs.", "Release slowly."] },
    { id: 18, name: "Med Ball Slam", category: "strength", muscle: "back", equipment: "medicine ball", images: ["https://gymvisual.com/img/mbslam-start.jpg", "https://gymvisual.com/img/mbslam-end.jpg"], steps: ["Hold ball overhead.", "Slam ball down forcefully.", "Catch bounce and repeat."] },

    // --- LEGS (9 Workouts) ---
    { id: 19, name: "Barbell Squat", category: "strength", muscle: "legs", equipment: "barbell", images: ["https://gymvisual.com/img/bbsquat-start.jpg", "https://gymvisual.com/img/bbsquat-end.jpg"], steps: ["Rest bar on upper back.", "Squat down.", "Stand back up."] },
    { id: 20, name: "Dumbbell Lunges", category: "strength", muscle: "legs", equipment: "dumbbell", images: ["https://gymvisual.com/img/dblunge-start.jpg", "https://gymvisual.com/img/dblunge-end.jpg"], steps: ["Hold dumbbells at side.", "Step forward and lower hips.", "Push back to start."] },
    { id: 21, name: "Leg Press", category: "strength", muscle: "legs", equipment: "machine", images: ["https://gymvisual.com/img/legpress-start.jpg", "https://gymvisual.com/img/legpress-end.jpg"], steps: ["Sit on machine.", "Lower sled to 90 degrees.", "Press sled up."] },
    { id: 22, name: "Bodyweight Squat", category: "strength", muscle: "legs", equipment: "bodyweight", images: ["https://gymvisual.com/img/bwsquat-start.jpg", "https://gymvisual.com/img/bwsquat-end.jpg"], steps: ["Stand shoulder width.", "Lower hips.", "Stand up."] },
    { id: 23, name: "Medicine Ball Squat", category: "strength", muscle: "legs", equipment: "medicine ball", images: ["https://gymvisual.com/img/mbsquat-start.jpg", "https://gymvisual.com/img/mbsquat-end.jpg"], steps: ["Hold ball at chest.", "Squat down deep.", "Drive back up."] },
    { id: 24, name: "Kettlebell Deadlift", category: "strength", muscle: "legs", equipment: "kettlebell", images: ["https://gymvisual.com/img/kbdeadlift-start.jpg", "https://gymvisual.com/img/kbdeadlift-end.jpg"], steps: ["Hinge hips to grab kettlebell.", "Keep back straight.", "Stand up by squeezing glutes."] },
    { id: 25, name: "Cable Pull Through", category: "strength", muscle: "legs", equipment: "cables", images: ["https://gymvisual.com/img/cablepull-start.jpg", "https://gymvisual.com/img/cablepull-end.jpg"], steps: ["Face away from pulley.", "Hinge hips back to grab rope.", "Thrust forward."] },
    { id: 26, name: "Band Side Steps", category: "strength", muscle: "legs", equipment: "resistance band", images: ["https://gymvisual.com/img/bandstep-start.jpg", "https://gymvisual.com/img/bandstep-end.jpg"], steps: ["Place band around ankles.", "Step side to side.", "Keep tension on band."] },
    { id: 27, name: "Front Squat", category: "strength", muscle: "legs", equipment: "barbell", images: ["https://gymvisual.com/img/frontsquat-start.jpg", "https://gymvisual.com/img/frontsquat-end.jpg"], steps: ["Rest bar on front deltoids.", "Squat down.", "Drive through heels to stand."] },

    // --- SHOULDERS (9 Workouts) ---
    { id: 28, name: "Overhead Press", category: "strength", muscle: "shoulders", equipment: "barbell", images: ["https://gymvisual.com/img/ohp-start.jpg", "https://gymvisual.com/img/ohp-end.jpg"], steps: ["Rest bar on front deltoids.", "Press bar straight up.", "Lower to collarbone."] },
    { id: 29, name: "Lateral Raise", category: "strength", muscle: "shoulders", equipment: "dumbbell", images: ["https://gymvisual.com/img/latraise-start.jpg", "https://gymvisual.com/img/latraise-end.jpg"], steps: ["Hold dumbbells at side.", "Raise arms to shoulder height.", "Lower slowly."] },
    { id: 30, name: "Face Pull", category: "strength", muscle: "shoulders", equipment: "cables", images: ["https://gymvisual.com/img/facepull-start.jpg", "https://gymvisual.com/img/facepull-end.jpg"], steps: ["Grab rope on high pulley.", "Pull to face, flaring elbows.", "Squeeze rear delts."] },
    { id: 31, name: "Machine Shoulder Press", category: "strength", muscle: "shoulders", equipment: "machine", images: ["https://gymvisual.com/img/machpress-start.jpg", "https://gymvisual.com/img/machpress-end.jpg"], steps: ["Sit on machine.", "Press handles up.", "Lower slowly."] },
    { id: 32, name: "Band Front Raise", category: "strength", muscle: "shoulders", equipment: "resistance band", images: ["https://gymvisual.com/img/bandraise-start.jpg", "https://gymvisual.com/img/bandraise-end.jpg"], steps: ["Step on band.", "Raise handles straight forward.", "Lower slowly."] },
    { id: 33, name: "Kettlebell Halo", category: "strength", muscle: "shoulders", equipment: "kettlebell", images: ["https://gymvisual.com/img/kbhalo-start.jpg", "https://gymvisual.com/img/kbhalo-end.jpg"], steps: ["Hold kettlebell at chest.", "Circle around head.", "Return to front."] },
    { id: 34, name: "EZ Bar Upright Row", category: "strength", muscle: "shoulders", equipment: "ez bar", images: ["https://gymvisual.com/img/ezupright-start.jpg", "https://gymvisual.com/img/ezupright-end.jpg"], steps: ["Hold bar in front of thighs.", "Pull bar to chin.", "Lower down."] },
    { id: 35, name: "Pike Push-Up", category: "strength", muscle: "shoulders", equipment: "bodyweight", images: ["https://gymvisual.com/img/pike-start.jpg", "https://gymvisual.com/img/pike-end.jpg"], steps: ["Start in downward dog.", "Lower head to floor.", "Push back up."] },
    { id: 36, name: "Med Ball Press", category: "strength", muscle: "shoulders", equipment: "medicine ball", images: ["https://gymvisual.com/img/mbpress-start.jpg", "https://gymvisual.com/img/mbpress-end.jpg"], steps: ["Hold ball at chest.", "Press ball overhead.", "Lower back to chest."] },

    // --- ARMS (9 Workouts) ---
    { id: 37, name: "Barbell Curl", category: "strength", muscle: "arms", equipment: "barbell", images: ["https://gymvisual.com/img/bbcurl-start.jpg", "https://gymvisual.com/img/bbcurl-end.jpg"], steps: ["Hold bar underhand.", "Curl bar to chest.", "Lower slowly."] },
    { id: 38, name: "Tricep Pushdown", category: "strength", muscle: "arms", equipment: "cables", images: ["https://gymvisual.com/img/pushdown-start.jpg", "https://gymvisual.com/img/pushdown-end.jpg"], steps: ["Grab rope on high pulley.", "Push down to extend arms.", "Return to start."] },
    { id: 39, name: "Dumbbell Curl", category: "strength", muscle: "arms", equipment: "dumbbell", images: ["https://gymvisual.com/img/dbcurl-start.jpg", "https://gymvisual.com/img/dbcurl-end.jpg"], steps: ["Hold dumbbells at side.", "Curl weights up.", "Lower slowly."] },
    { id: 40, name: "EZ Bar Skullcrusher", category: "strength", muscle: "arms", equipment: "ez bar", images: ["https://gymvisual.com/img/skullcrusher-start.jpg", "https://gymvisual.com/img/skullcrusher-end.jpg"], steps: ["Lie on bench holding bar.", "Bend elbows to forehead.", "Extend arms."] },
    { id: 41, name: "Dips", category: "strength", muscle: "arms", equipment: "bodyweight", images: ["https://gymvisual.com/img/dips-start.jpg", "https://gymvisual.com/img/dips-end.jpg"], steps: ["Suspend body on dip bars.", "Lower body by bending elbows.", "Push back up."] },
    { id: 42, name: "Band Bicep Curl", category: "strength", muscle: "arms", equipment: "resistance band", images: ["https://gymvisual.com/img/bandcurl-start.jpg", "https://gymvisual.com/img/bandcurl-end.jpg"], steps: ["Step on band.", "Curl handles up.", "Lower slowly."] },
    { id: 43, name: "Preacher Curl Machine", category: "strength", muscle: "arms", equipment: "machine", images: ["https://gymvisual.com/img/preacher-start.jpg", "https://gymvisual.com/img/preacher-end.jpg"], steps: ["Sit at machine.", "Curl handles towards face.", "Lower with control."] },
    { id: 44, name: "Kettlebell Extension", category: "strength", muscle: "arms", equipment: "kettlebell", images: ["https://gymvisual.com/img/kbext-start.jpg", "https://gymvisual.com/img/kbext-end.jpg"], steps: ["Hold kettlebell overhead.", "Lower it behind head.", "Extend arms back up."] },
    { id: 45, name: "Med Ball Tricep Throw", category: "strength", muscle: "arms", equipment: "medicine ball", images: ["https://gymvisual.com/img/mbthrow-start.jpg", "https://gymvisual.com/img/mbthrow-end.jpg"], steps: ["Hold ball behind head.", "Throw ball forward.", "Catch and repeat."] },

    // --- CORE (9 Workouts) ---
    { id: 46, name: "Plank", category: "strength", muscle: "core", equipment: "bodyweight", images: ["https://gymvisual.com/img/plank-start.jpg", "https://gymvisual.com/img/plank-end.jpg"], steps: ["Rest on forearms and toes.", "Keep back straight.", "Hold position."] },
    { id: 47, name: "Cable Crunch", category: "strength", muscle: "core", equipment: "cables", images: ["https://gymvisual.com/img/cablecrunch-start.jpg", "https://gymvisual.com/img/cablecrunch-end.jpg"], steps: ["Kneel holding high pulley rope.", "Crunch torso down.", "Return slowly."] },
    { id: 48, name: "Russian Twist", category: "strength", muscle: "core", equipment: "medicine ball", images: ["https://gymvisual.com/img/rtwist-start.jpg", "https://gymvisual.com/img/rtwist-end.jpg"], steps: ["Sit with legs elevated.", "Twist torso to side with ball.", "Twist to other side."] },
    { id: 49, name: "Ab Machine Crunch", category: "strength", muscle: "core", equipment: "machine", images: ["https://gymvisual.com/img/machcrunch-start.jpg", "https://gymvisual.com/img/machcrunch-end.jpg"], steps: ["Sit in machine.", "Crunch torso forward.", "Return slowly."] },
    { id: 50, name: "Barbell Rollout", category: "strength", muscle: "core", equipment: "barbell", images: ["https://gymvisual.com/img/rollout-start.jpg", "https://gymvisual.com/img/rollout-end.jpg"], steps: ["Kneel and hold barbell.", "Roll barbell forward.", "Pull back to start."] },
    { id: 51, name: "Dumbbell Side Bend", category: "strength", muscle: "core", equipment: "dumbbell", images: ["https://gymvisual.com/img/sidebend-start.jpg", "https://gymvisual.com/img/sidebend-end.jpg"], steps: ["Hold dumbbell in one hand.", "Bend torso to that side.", "Return upright."] },
    { id: 52, name: "Kettlebell Windmill", category: "strength", muscle: "core", equipment: "kettlebell", images: ["https://gymvisual.com/img/kbwindmill-start.jpg", "https://gymvisual.com/img/kbwindmill-end.jpg"], steps: ["Hold kettlebell straight up.", "Hinge hips and touch toe.", "Stand back up."] },
    { id: 53, name: "Band Woodchopper", category: "strength", muscle: "core", equipment: "resistance band", images: ["https://gymvisual.com/img/woodchop-start.jpg", "https://gymvisual.com/img/woodchop-end.jpg"], steps: ["Anchor band high.", "Pull band diagonally across body.", "Return to start."] },
    { id: 54, name: "V-Up", category: "strength", muscle: "core", equipment: "bodyweight", images: ["https://gymvisual.com/img/vup-start.jpg", "https://gymvisual.com/img/vup-end.jpg"], steps: ["Lie flat on back.", "Lift legs and torso to meet.", "Lower back down."] },

    // --- CALVES (9 Workouts) ---
    { id: 55, name: "Standing Calf Raise", category: "strength", muscle: "calves", equipment: "bodyweight", images: ["https://gymvisual.com/img/calfraise-start.jpg", "https://gymvisual.com/img/calfraise-end.jpg"], steps: ["Stand on step edge.", "Raise heels up.", "Lower heels down."] },
    { id: 56, name: "Barbell Calf Raise", category: "strength", muscle: "calves", equipment: "barbell", images: ["https://gymvisual.com/img/bbcalf-start.jpg", "https://gymvisual.com/img/bbcalf-end.jpg"], steps: ["Place bar on back.", "Push onto toes.", "Lower down."] },
    { id: 57, name: "Donkey Calf Raise", category: "strength", muscle: "calves", equipment: "machine", images: ["https://gymvisual.com/img/donkeycalf-start.jpg", "https://gymvisual.com/img/donkeycalf-end.jpg"], steps: ["Position under machine pad.", "Raise heels up.", "Lower down."] },
    { id: 58, name: "Dumbbell Calf Raise", category: "strength", muscle: "calves", equipment: "dumbbell", images: ["https://gymvisual.com/img/dbcalf-start.jpg", "https://gymvisual.com/img/dbcalf-end.jpg"], steps: ["Hold dumbbells.", "Raise heels.", "Lower down."] },
    { id: 59, name: "Band Calf Extension", category: "strength", muscle: "calves", equipment: "resistance band", images: ["https://gymvisual.com/img/bandcalf-start.jpg", "https://gymvisual.com/img/bandcalf-end.jpg"], steps: ["Sit and loop band on foot.", "Press foot forward.", "Return slowly."] },
    { id: 60, name: "Cable Calf Raise", category: "strength", muscle: "calves", equipment: "cables", images: ["https://gymvisual.com/img/cablecalf-start.jpg", "https://gymvisual.com/img/cablecalf-end.jpg"], steps: ["Attach belt to low cable.", "Stand on block.", "Perform calf raise."] },
    { id: 61, name: "Kettlebell Calf Raise", category: "strength", muscle: "calves", equipment: "kettlebell", images: ["https://gymvisual.com/img/kbcalf-start.jpg", "https://gymvisual.com/img/kbcalf-end.jpg"], steps: ["Hold kettlebells in hands.", "Raise heels up.", "Lower heels down."] },
    { id: 62, name: "Seated Calf Raise", category: "strength", muscle: "calves", equipment: "machine", images: ["https://gymvisual.com/img/seatedcalf-start.jpg", "https://gymvisual.com/img/seatedcalf-end.jpg"], steps: ["Sit at machine.", "Place toes on platform.", "Raise and lower heels."] },
    { id: 63, name: "Single Leg Calf Raise", category: "strength", muscle: "calves", equipment: "bodyweight", images: ["https://gymvisual.com/img/slcalf-start.jpg", "https://gymvisual.com/img/slcalf-end.jpg"], steps: ["Stand on one leg on a block.", "Raise heel.", "Lower heel."] },

    // --- GLUTES (9 Workouts) ---
    { id: 64, name: "Barbell Hip Thrust", category: "strength", muscle: "glutes", equipment: "barbell", images: ["https://gymvisual.com/img/hipthrust-start.jpg", "https://gymvisual.com/img/hipthrust-end.jpg"], steps: ["Rest upper back on bench.", "Drive hips up with barbell.", "Lower hips."] },
    { id: 65, name: "Glute Bridge", category: "strength", muscle: "glutes", equipment: "bodyweight", images: ["https://gymvisual.com/img/bridge-start.jpg", "https://gymvisual.com/img/bridge-end.jpg"], steps: ["Lie on back with bent knees.", "Lift hips up.", "Lower down."] },
    { id: 66, name: "Cable Pull Through", category: "strength", muscle: "glutes", equipment: "cables", images: ["https://gymvisual.com/img/pullthrough-start.jpg", "https://gymvisual.com/img/pullthrough-end.jpg"], steps: ["Grab low cable rope through legs.", "Stand up and thrust hips.", "Hinge hips back."] },
    { id: 67, name: "Kettlebell Swing", category: "strength", muscle: "glutes", equipment: "kettlebell", images: ["https://gymvisual.com/img/kbswing2-start.jpg", "https://gymvisual.com/img/kbswing2-end.jpg"], steps: ["Hinge hips.", "Thrust forward.", "Swing kettlebell."] },
    { id: 68, name: "Band Kickback", category: "strength", muscle: "glutes", equipment: "resistance band", images: ["https://gymvisual.com/img/bandkick-start.jpg", "https://gymvisual.com/img/bandkick-end.jpg"], steps: ["Get on all fours.", "Kick banded leg back.", "Return to start."] },
    { id: 69, name: "Dumbbell Step-Up", category: "strength", muscle: "glutes", equipment: "dumbbell", images: ["https://gymvisual.com/img/stepup-start.jpg", "https://gymvisual.com/img/stepup-end.jpg"], steps: ["Hold dumbbells.", "Step onto bench.", "Step back down."] },
    { id: 70, name: "Machine Glute Kickback", category: "strength", muscle: "glutes", equipment: "machine", images: ["https://gymvisual.com/img/machkick-start.jpg", "https://gymvisual.com/img/machkick-end.jpg"], steps: ["Stand at machine.", "Push foot plate back.", "Return slowly."] },
    { id: 71, name: "Curtsy Lunge", category: "strength", muscle: "glutes", equipment: "bodyweight", images: ["https://gymvisual.com/img/curtsy-start.jpg", "https://gymvisual.com/img/curtsy-end.jpg"], steps: ["Stand tall.", "Step one leg behind and across.", "Return to center."] },
    { id: 72, name: "EZ Bar Hip Thrust", category: "strength", muscle: "glutes", equipment: "ez bar", images: ["https://gymvisual.com/img/ezthrust-start.jpg", "https://gymvisual.com/img/ezthrust-end.jpg"], steps: ["Place EZ bar on hips.", "Thrust hips up.", "Lower slowly."] },

    // --- FOREARMS (9 Workouts) ---
    { id: 73, name: "Barbell Wrist Curl", category: "strength", muscle: "forearms", equipment: "barbell", images: ["https://gymvisual.com/img/bbwrist-start.jpg", "https://gymvisual.com/img/bbwrist-end.jpg"], steps: ["Rest forearms on bench.", "Curl wrists up.", "Lower down."] },
    { id: 74, name: "Dumbbell Reverse Curl", category: "strength", muscle: "forearms", equipment: "dumbbell", images: ["https://gymvisual.com/img/dbrevcurl-start.jpg", "https://gymvisual.com/img/dbrevcurl-end.jpg"], steps: ["Hold dumbbells overhand.", "Curl up.", "Lower slowly."] },
    { id: 75, name: "Farmers Walk", category: "strength", muscle: "forearms", equipment: "kettlebell", images: ["https://gymvisual.com/img/farmers-start.jpg", "https://gymvisual.com/img/farmers-end.jpg"], steps: ["Hold heavy kettlebells.", "Walk straight.", "Keep tight grip."] },
    { id: 76, name: "EZ Bar Reverse Curl", category: "strength", muscle: "forearms", equipment: "ez bar", images: ["https://gymvisual.com/img/ezrevcurl-start.jpg", "https://gymvisual.com/img/ezrevcurl-end.jpg"], steps: ["Hold EZ bar overhand.", "Curl up.", "Lower down."] },
    { id: 77, name: "Wrist Roller", category: "strength", muscle: "forearms", equipment: "machine", images: ["https://gymvisual.com/img/roller-start.jpg", "https://gymvisual.com/img/roller-end.jpg"], steps: ["Hold roller.", "Roll up the weight.", "Roll it down."] },
    { id: 78, name: "Cable Wrist Curl", category: "strength", muscle: "forearms", equipment: "cables", images: ["https://gymvisual.com/img/cablewrist-start.jpg", "https://gymvisual.com/img/cablewrist-end.jpg"], steps: ["Grab low cable bar.", "Curl wrists up.", "Lower slowly."] },
    { id: 79, name: "Band Wrist Curl", category: "strength", muscle: "forearms", equipment: "resistance band", images: ["https://gymvisual.com/img/bandwrist-start.jpg", "https://gymvisual.com/img/bandwrist-end.jpg"], steps: ["Step on band.", "Curl wrists up.", "Lower slowly."] },
    { id: 80, name: "Dead Hang", category: "strength", muscle: "forearms", equipment: "bodyweight", images: ["https://gymvisual.com/img/hang-start.jpg", "https://gymvisual.com/img/hang-end.jpg"], steps: ["Grab pullup bar.", "Hang freely.", "Hold as long as possible."] },
    { id: 81, name: "Plate Pinch", category: "strength", muscle: "forearms", equipment: "barbell", images: ["https://gymvisual.com/img/pinch-start.jpg", "https://gymvisual.com/img/pinch-end.jpg"], steps: ["Hold weight plates by pinching.", "Stand straight.", "Hold until failure."] },

    // --- HIIT (6 Workouts) ---
    { id: 82, name: "Burpees", category: "hiit", muscle: "core", equipment: "bodyweight", images: ["https://gymvisual.com/img/burpee-start.jpg", "https://gymvisual.com/img/burpee-end.jpg"], steps: ["Drop to plank.", "Do a pushup.", "Jump up."] },
    { id: 83, name: "Jump Squats", category: "hiit", muscle: "legs", equipment: "bodyweight", images: ["https://gymvisual.com/img/jumpsquat-start.jpg", "https://gymvisual.com/img/jumpsquat-end.jpg"], steps: ["Squat down.", "Jump up explosively.", "Land softly in squat."] },
    { id: 84, name: "Mountain Climbers", category: "hiit", muscle: "core", equipment: "bodyweight", images: ["https://gymvisual.com/img/climbers-start.jpg", "https://gymvisual.com/img/climbers-end.jpg"], steps: ["Start in plank.", "Drive knees to chest rapidly.", "Keep hips down."] },
    { id: 85, name: "High Knees", category: "hiit", muscle: "legs", equipment: "bodyweight", images: ["https://gymvisual.com/img/highknees-start.jpg", "https://gymvisual.com/img/highknees-end.jpg"], steps: ["Stand tall.", "Run in place bringing knees high.", "Pump arms."] },
    { id: 86, name: "Medicine Ball Slam", category: "hiit", muscle: "core", equipment: "medicine ball", images: ["https://gymvisual.com/img/mbslam2-start.jpg", "https://gymvisual.com/img/mbslam2-end.jpg"], steps: ["Hold ball overhead.", "Slam down to floor.", "Catch and repeat."] },
    { id: 87, name: "Kettlebell Thrusters", category: "hiit", muscle: "shoulders", equipment: "kettlebell", images: ["https://gymvisual.com/img/kbthruster-start.jpg", "https://gymvisual.com/img/kbthruster-end.jpg"], steps: ["Hold kettlebells at shoulders.", "Squat down.", "Stand and press kettlebells overhead."] }
];