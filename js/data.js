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

const workoutDB = [
    // --- CHEST ---
    {
        id: 1, name: "Barbell Bench Press", category: "strength", muscle: "chest", equipment: "barbell",
        media_url: "https://gymvisual.com/img/p/4/7/6/1/4761.gif",
        steps: ["Lie flat on the bench with eyes directly under the bar.", "Grip the bar slightly wider than shoulder-width.", "Unrack the bar and lower it slowly to your mid-chest.", "Press the bar back up powerfully until arms are fully extended."]
    },
    {
        id: 2, name: "Push-Up", category: "strength", muscle: "chest", equipment: "bodyweight",
        media_url: "https://gymvisual.com/img/p/5/1/5/3/5153.gif",
        steps: ["Start in a high plank position with hands shoulder-width apart.", "Keep your core tight and body in a straight line.", "Lower your body until your chest hovers just above the floor.", "Push back up to the starting position."]
    },
    {
        id: 3, name: "Dumbbell Incline Fly", category: "strength", muscle: "chest", equipment: "dumbbell",
        media_url: "https://gymvisual.com/img/p/4/8/9/0/4890.gif",
        steps: ["Lie back on an incline bench holding two dumbbells above your chest.", "Keep a slight bend in your elbows and open your arms wide.", "Lower the weights until you feel a deep stretch in your chest.", "Bring the dumbbells back together at the top in a hugging motion."]
    },
    {
        id: 4, name: "Cable Crossover", category: "strength", muscle: "chest", equipment: "cables",
        media_url: "https://gymvisual.com/img/p/6/1/1/3/6113.gif",
        steps: ["Set the pulleys to a high position and grab a handle in each hand.", "Step forward slightly and brace your core.", "Bring your hands together in front of your body in a sweeping downward arc.", "Slowly return to the starting position."]
    },
    {
        id: 5, name: "Chest Dip", category: "strength", muscle: "chest", equipment: "bodyweight",
        media_url: "https://gymvisual.com/img/p/5/1/5/9/5159.gif",
        steps: ["Mount the dip bars with arms straight.", "Lean your torso forward to emphasize the chest.", "Lower your body by bending your elbows until you feel a stretch.", "Push yourself back up to the starting position."]
    },
    {
        id: 6, name: "Pec Deck Machine", category: "strength", muscle: "chest", equipment: "machine",
        media_url: "https://gymvisual.com/img/p/5/0/2/8/5028.gif",
        steps: ["Sit at the machine and adjust the seat so the handles are at chest height.", "Grip the handles and press your forearms against the pads.", "Squeeze your arms together in front of your chest.", "Slowly release the weight back to the starting stretch."]
    },
    {
        id: 7, name: "Decline Barbell Press", category: "strength", muscle: "chest", equipment: "barbell",
        media_url: "https://gymvisual.com/img/p/4/7/6/5/4765.gif",
        steps: ["Secure your feet at the end of a decline bench and lie back.", "Grip the barbell shoulder-width apart.", "Lower the bar to your lower chest.", "Press the bar straight up until your arms lock out."]
    },
    {
        id: 8, name: "Medicine Ball Push-Up", category: "strength", muscle: "chest", equipment: "medicine ball",
        media_url: "https://gymvisual.com/img/p/7/3/2/1/7321.gif",
        steps: ["Get into a push-up position with one hand resting on a medicine ball.", "Perform a push-up by lowering your chest toward the floor.", "Push back up explosively.", "Roll the ball to the other hand and repeat."]
    },

    // --- BACK ---
    {
        id: 9, name: "Pull-Up", category: "strength", muscle: "back", equipment: "bodyweight",
        media_url: "https://gymvisual.com/img/p/5/1/4/2/5142.gif",
        steps: ["Grab the pull-up bar with an overhand grip, slightly wider than shoulder-width.", "Hang freely with straight arms and engaged core.", "Pull your body up until your chin clears the bar.", "Lower yourself slowly back to the hanging position."]
    },
    {
        id: 10, name: "Barbell Row", category: "strength", muscle: "back", equipment: "barbell",
        media_url: "https://gymvisual.com/img/p/4/7/7/5/4775.gif",
        steps: ["Hinge at the hips, keeping your back straight and parallel to the floor.", "Grab the barbell with an overhand grip.", "Pull the bar toward your lower chest/belly button.", "Lower the bar back down with control."]
    },
    {
        id: 11, name: "One-Arm Dumbbell Row", category: "strength", muscle: "back", equipment: "dumbbell",
        media_url: "https://gymvisual.com/img/p/4/8/7/8/4878.gif",
        steps: ["Place one knee and one hand on a flat bench for support.", "Hold a dumbbell in the free hand with your arm extended.", "Pull the dumbbell straight up toward your hip.", "Squeeze your back muscles, then slowly lower the weight."]
    },
    {
        id: 12, name: "Lat Pulldown", category: "strength", muscle: "back", equipment: "machine",
        media_url: "https://gymvisual.com/img/p/5/0/0/2/5002.gif",
        steps: ["Sit at the lat pulldown machine and adjust the thigh pads to lock your legs.", "Grab the wide bar with an overhand grip.", "Pull the bar down to your upper chest while leaning back slightly.", "Return the bar to the top position smoothly."]
    },
    {
        id: 13, name: "Seated Cable Row", category: "strength", muscle: "back", equipment: "cables",
        media_url: "https://gymvisual.com/img/p/6/1/2/5/6125.gif",
        steps: ["Sit at a low cable pulley machine with a V-bar attachment.", "Keep your back straight and chest out.", "Pull the handle to your lower abdomen.", "Squeeze your shoulder blades together, then release slowly."]
    },
    {
        id: 14, name: "T-Bar Row", category: "strength", muscle: "back", equipment: "barbell",
        media_url: "https://gymvisual.com/img/p/4/7/8/2/4782.gif",
        steps: ["Straddle a T-bar machine or a barbell secured in a landmine.", "Hinge at the hips and grab the handles.", "Pull the weight directly toward your chest.", "Lower the weight until your arms are fully extended."]
    },
    {
        id: 15, name: "Straight Arm Pulldown", category: "strength", muscle: "back", equipment: "cables",
        media_url: "https://gymvisual.com/img/p/6/1/3/3/6133.gif",
        steps: ["Stand in front of a high pulley machine holding a straight bar.", "Keep your arms completely straight with a slight forward lean.", "Pull the bar down in an arc until it touches your thighs.", "Slowly let the bar return to the top position."]
    },
    {
        id: 16, name: "Renegade Row", category: "strength", muscle: "back", equipment: "dumbbell",
        media_url: "https://gymvisual.com/img/p/4/8/8/0/4880.gif",
        steps: ["Start in a plank position holding a dumbbell in each hand.", "Keep your core tight to prevent your hips from rotating.", "Row one dumbbell up toward your hip.", "Lower it back to the floor and alternate to the other arm."]
    },

    // --- LEGS ---
    {
        id: 17, name: "Barbell Back Squat", category: "strength", muscle: "legs", equipment: "barbell",
        media_url: "https://gymvisual.com/img/p/4/7/9/1/4791.gif",
        steps: ["Position the barbell securely on your upper traps.", "Stand with feet shoulder-width apart, toes pointed slightly outward.", "Hinge at the hips and bend your knees to lower into a deep squat.", "Drive through your heels to return to a standing position."]
    },
    {
        id: 18, name: "Walking Lunges", category: "strength", muscle: "legs", equipment: "dumbbell",
        media_url: "https://gymvisual.com/img/p/4/8/8/5/4885.gif",
        steps: ["Stand straight holding a dumbbell in each hand.", "Take a large step forward with your right leg.", "Lower your body until your right thigh is parallel to the floor.", "Push off your back foot to bring your feet together, then step forward with the left leg."]
    },
    {
        id: 19, name: "Leg Press", category: "strength", muscle: "legs", equipment: "machine",
        media_url: "https://gymvisual.com/img/p/5/0/1/6/5016.gif",
        steps: ["Sit on the leg press machine and place your feet shoulder-width on the sled.", "Release the safety handles and lower the sled toward your chest.", "Stop when your knees are at a 90-degree angle.", "Push the sled back up, avoiding locking your knees at the top."]
    },
    {
        id: 20, name: "Romanian Deadlift", category: "strength", muscle: "legs", equipment: "barbell",
        media_url: "https://gymvisual.com/img/p/4/7/9/3/4793.gif",
        steps: ["Hold a barbell in front of your thighs with an overhand grip.", "Keep a slight bend in your knees and push your hips backward.", "Lower the bar straight down your legs until you feel a stretch in your hamstrings.", "Squeeze your glutes and push your hips forward to stand back up."]
    },
    {
        id: 21, name: "Bulgarian Split Squat", category: "strength", muscle: "legs", equipment: "dumbbell",
        media_url: "https://gymvisual.com/img/p/4/8/8/8/4888.gif",
        steps: ["Stand a few feet in front of a bench, holding dumbbells.", "Rest the top of your back foot on the bench behind you.", "Lower your body until your front thigh is parallel to the floor.", "Push through your front heel to return to the starting position."]
    },
    {
        id: 22, name: "Leg Extension", category: "strength", muscle: "legs", equipment: "machine",
        media_url: "https://gymvisual.com/img/p/5/0/1/8/5018.gif",
        steps: ["Sit on the leg extension machine and adjust the pad to rest on your lower shins.", "Hold the side handles tightly.", "Extend your legs fully to lift the weight pad.", "Lower the weight slowly back to the starting position."]
    },
    {
        id: 23, name: "Lying Leg Curl", category: "strength", muscle: "legs", equipment: "machine",
        media_url: "https://gymvisual.com/img/p/5/0/2/1/5021.gif",
        steps: ["Lie face down on the leg curl machine with the pad resting just above your heels.", "Keep your torso flat on the bench.", "Curl your legs upward as far as possible toward your glutes.", "Slowly lower your legs back down."]
    },
    {
        id: 24, name: "Kettlebell Goblet Squat", category: "strength", muscle: "legs", equipment: "kettlebell",
        media_url: "https://gymvisual.com/img/p/4/9/9/5/4995.gif",
        steps: ["Hold a heavy kettlebell vertically by the horns against your chest.", "Stand with your feet slightly wider than shoulder-width.", "Squat down deep, keeping your chest up and pushing your knees outward.", "Drive through your heels to return to a full standing position."]
    },

    // --- SHOULDERS ---
    {
        id: 25, name: "Military Press", category: "strength", muscle: "shoulders", equipment: "barbell",
        media_url: "https://gymvisual.com/img/p/4/7/8/8/4788.gif",
        steps: ["Stand with your feet shoulder-width apart, resting the barbell on your front delts.", "Brace your core and squeeze your glutes.", "Press the bar straight up overhead until your arms lock out.", "Lower the bar back to your upper chest with control."]
    },
    {
        id: 26, name: "Dumbbell Lateral Raise", category: "strength", muscle: "shoulders", equipment: "dumbbell",
        media_url: "https://gymvisual.com/img/p/4/8/9/8/4898.gif",
        steps: ["Stand holding a dumbbell in each hand by your sides.", "Keep a slight bend in your elbows and raise your arms out to the sides.", "Stop when the dumbbells reach shoulder height.", "Slowly lower the dumbbells back down."]
    },
    {
        id: 27, name: "Cable Face Pull", category: "strength", muscle: "shoulders", equipment: "cables",
        media_url: "https://gymvisual.com/img/p/6/1/2/5/6125.gif",
        steps: ["Attach a rope handle to a high pulley.", "Grab the ends of the rope with both hands and step back.", "Pull the rope toward your face, flaring your elbows outward.", "Squeeze your rear deltoids, then slowly release."]
    },
    {
        id: 28, name: "Arnold Press", category: "strength", muscle: "shoulders", equipment: "dumbbell",
        media_url: "https://gymvisual.com/img/p/4/9/0/0/4900.gif",
        steps: ["Sit on a bench holding two dumbbells in front of your face with palms facing you.", "Open your arms outward while simultaneously pressing the dumbbells overhead.", "At the top, your palms should be facing forward.", "Reverse the motion to bring the dumbbells back in front of your face."]
    },
    {
        id: 29, name: "Barbell Upright Row", category: "strength", muscle: "shoulders", equipment: "barbell",
        media_url: "https://gymvisual.com/img/p/4/7/9/0/4790.gif",
        steps: ["Hold a barbell in front of your thighs with a slightly narrower than shoulder-width grip.", "Pull the bar straight up toward your chin, leading with your elbows.", "Keep the bar as close to your body as possible.", "Lower the bar slowly back to the starting position."]
    },
    {
        id: 30, name: "Reverse Pec Deck", category: "strength", muscle: "shoulders", equipment: "machine",
        media_url: "https://gymvisual.com/img/p/5/0/3/0/5030.gif",
        steps: ["Sit facing the pad of the pec deck machine.", "Grab the handles with your arms slightly bent.", "Pull the handles backward by squeezing your rear delts.", "Slowly return to the starting position in a controlled manner."]
    },
    {
        id: 31, name: "Dumbbell Shrugs", category: "strength", muscle: "shoulders", equipment: "dumbbell",
        media_url: "https://gymvisual.com/img/p/4/9/0/2/4902.gif",
        steps: ["Stand holding heavy dumbbells by your sides.", "Keep your arms completely straight.", "Shrug your shoulders straight up toward your ears as high as possible.", "Hold for a second at the top, then lower your shoulders back down."]
    },

    // --- ARMS ---
    {
        id: 32, name: "Barbell Curl", category: "strength", muscle: "arms", equipment: "barbell",
        media_url: "https://gymvisual.com/img/p/4/7/5/3/4753.gif",
        steps: ["Stand tall holding a barbell with an underhand grip, shoulder-width apart.", "Keep your elbows pinned firmly to your sides.", "Curl the bar up toward your shoulders, focusing on the biceps.", "Lower the bar back down slowly to full extension."]
    },
    {
        id: 33, name: "Cable Tricep Pushdown", category: "strength", muscle: "arms", equipment: "cables",
        media_url: "https://gymvisual.com/img/p/6/1/3/7/6137.gif",
        steps: ["Attach a straight bar or rope to a high cable pulley.", "Grip the attachment and tuck your elbows strictly against your ribs.", "Push the attachment down until your arms are fully extended and locked out.", "Return to the starting position slowly, resisting the weight."]
    },
    {
        id: 34, name: "EZ Bar Skullcrusher", category: "strength", muscle: "arms", equipment: "ez bar",
        media_url: "https://gymvisual.com/img/p/4/8/2/5/4825.gif",
        steps: ["Lie flat on a bench holding an EZ bar directly above your chest.", "Keep your upper arms completely still and pointing toward the ceiling.", "Bend your elbows to lower the bar down toward your forehead.", "Extend your arms forcefully to push the bar back up."]
    },
    {
        id: 35, name: "Dumbbell Hammer Curl", category: "strength", muscle: "arms", equipment: "dumbbell",
        media_url: "https://gymvisual.com/img/p/4/8/8/3/4883.gif",
        steps: ["Stand holding a dumbbell in each hand by your sides with a neutral grip (palms facing your legs).", "Keep your elbows stationary.", "Curl the dumbbells up toward your shoulders without twisting your wrists.", "Slowly lower them back to the start."]
    },
    {
        id: 36, name: "Machine Preacher Curl", category: "strength", muscle: "arms", equipment: "machine",
        media_url: "https://gymvisual.com/img/p/5/0/3/2/5032.gif",
        steps: ["Sit at the preacher curl machine and rest your upper arms firmly on the pad.", "Grab the handles with an underhand grip.", "Curl the handles upward as far as possible.", "Lower the weight slowly until your arms are almost fully extended."]
    },
    {
        id: 37, name: "Overhead Dumbbell Tricep Extension", category: "strength", muscle: "arms", equipment: "dumbbell",
        media_url: "https://gymvisual.com/img/p/4/8/8/4/4884.gif",
        steps: ["Sit or stand holding a single heavy dumbbell with both hands overhead.", "Keep your elbows close to your head and pointing straight up.", "Lower the dumbbell behind your head by bending your elbows.", "Push the dumbbell back up to the starting position."]
    },
    {
        id: 38, name: "Concentration Curl", category: "strength", muscle: "arms", equipment: "dumbbell",
        media_url: "https://gymvisual.com/img/p/4/8/8/6/4886.gif",
        steps: ["Sit on the edge of a bench with your legs spread.", "Rest your elbow on the inside of your thigh, holding a dumbbell.", "Curl the dumbbell upward, focusing entirely on squeezing the bicep.", "Lower it back down slowly to a full stretch."]
    },

    // --- CORE ---
    {
        id: 39, name: "Plank", category: "strength", muscle: "core", equipment: "bodyweight",
        media_url: "https://gymvisual.com/img/p/5/1/6/5/5165.gif",
        steps: ["Rest on your forearms and toes on a mat.", "Keep your body in a perfectly straight line from head to heels.", "Engage your core, glutes, and quads to maintain rigidity.", "Hold the position and breathe steadily."]
    },
    {
        id: 40, name: "Cable Crunch", category: "strength", muscle: "core", equipment: "cables",
        media_url: "https://gymvisual.com/img/p/6/1/4/2/6142.gif",
        steps: ["Kneel below a high cable pulley holding a rope attachment.", "Hold the rope tightly beside your ears.", "Crunch your torso downward, bringing your elbows toward your knees.", "Slowly return to the upright kneeling position without dropping the weight."]
    },
    {
        id: 41, name: "Russian Twist", category: "strength", muscle: "core", equipment: "medicine ball",
        media_url: "https://gymvisual.com/img/p/7/3/4/8/7348.gif",
        steps: ["Sit on the floor, lean back slightly, and elevate your feet off the ground.", "Hold a medicine ball with both hands in front of your chest.", "Twist your torso to the right and tap the ball on the floor.", "Twist fully to the left side and repeat."]
    },
    {
        id: 42, name: "Hanging Leg Raise", category: "strength", muscle: "core", equipment: "bodyweight",
        media_url: "https://gymvisual.com/img/p/5/1/7/1/5171.gif",
        steps: ["Hang strictly from a pull-up bar with an overhand grip.", "Keep your legs completely straight.", "Lift your legs up using your lower abs until they are parallel to the floor.", "Lower your legs slowly, avoiding any body swing."]
    },
    {
        id: 43, name: "Ab Wheel Rollout", category: "strength", muscle: "core", equipment: "machine",
        media_url: "https://gymvisual.com/img/p/5/0/3/6/5036.gif",
        steps: ["Kneel on the floor and grab the handles of an ab wheel.", "Keep your core incredibly tight and your back slightly rounded.", "Roll the wheel straight out in front of you until your body is nearly flat.", "Use your core to pull yourself back to the starting kneeling position."]
    },
    {
        id: 44, name: "Bicycle Crunch", category: "strength", muscle: "core", equipment: "bodyweight",
        media_url: "https://gymvisual.com/img/p/5/1/7/3/5173.gif",
        steps: ["Lie flat on your back with your hands gently resting behind your head.", "Lift your legs off the ground and bend your knees.", "Bring your right elbow toward your left knee while extending your right leg straight out.", "Switch sides continuously in a pedaling motion."]
    },

    // --- CALVES ---
    {
        id: 45, name: "Standing Barbell Calf Raise", category: "strength", muscle: "calves", equipment: "barbell",
        media_url: "https://gymvisual.com/img/p/4/7/9/5/4795.gif",
        steps: ["Place a barbell across your upper back securely.", "Stand with your feet shoulder-width apart on a flat surface.", "Elevate your heels by pushing forcefully onto your toes.", "Lower your heels slowly back to the ground to a slight stretch."]
    },
    {
        id: 46, name: "Seated Calf Raise", category: "strength", muscle: "calves", equipment: "machine",
        media_url: "https://gymvisual.com/img/p/5/0/4/1/5041.gif",
        steps: ["Sit on the machine and place your toes on the lower platform.", "Lower the lever pad snugly onto your lower thighs.", "Raise your heels up to lift the weight and release the safety bar.", "Drop your heels down for a full stretch, then press back up."]
    },
    {
        id: 47, name: "Leg Press Calf Raise", category: "strength", muscle: "calves", equipment: "machine",
        media_url: "https://gymvisual.com/img/p/5/0/4/3/5043.gif",
        steps: ["Sit in a leg press machine and push the sled up until your legs are straight.", "Slide your feet down so only your toes and balls of your feet are on the edge of the sled.", "Push the sled upward using only your calves.", "Allow your toes to come back toward you to stretch the calves."]
    },
    {
        id: 48, name: "Single Leg Dumbbell Calf Raise", category: "strength", muscle: "calves", equipment: "dumbbell",
        media_url: "https://gymvisual.com/img/p/4/9/0/5/4905.gif",
        steps: ["Hold a dumbbell in your right hand and stand on your right foot on an elevated block.", "Hold onto a wall or rail with your free hand for balance.", "Drop your right heel below the block for a stretch.", "Push up onto your toes as high as possible, then repeat."]
    },

    // --- GLUTES ---
    {
        id: 49, name: "Barbell Hip Thrust", category: "strength", muscle: "glutes", equipment: "barbell",
        media_url: "https://gymvisual.com/img/p/4/7/9/8/4798.gif",
        steps: ["Sit on the floor with your upper back resting firmly against a bench.", "Roll a padded barbell over the crease of your hips.", "Plant your feet firmly and drive your hips upward.", "Squeeze your glutes violently at the top, then lower your hips down."]
    },
    {
        id: 50, name: "Cable Pull Through", category: "strength", muscle: "glutes", equipment: "cables",
        media_url: "https://gymvisual.com/img/p/6/1/5/1/6151.gif",
        steps: ["Set a cable pulley to the lowest setting with a rope attachment.", "Stand facing away from the machine, straddling the cable.", "Hinge at the hips, reaching back through your legs to grab the rope.", "Stand up straight and thrust your hips forward, squeezing your glutes."]
    },
    {
        id: 51, name: "Dumbbell Step-Up", category: "strength", muscle: "glutes", equipment: "dumbbell",
        media_url: "https://gymvisual.com/img/p/4/8/9/5/4895.gif",
        steps: ["Stand holding a dumbbell in each hand facing a sturdy box or bench.", "Place one foot entirely on the elevated surface.", "Drive through the heel of that foot to lift your body up.", "Step back down slowly and under control."]
    },
    {
        id: 52, name: "Kettlebell Swing", category: "strength", muscle: "glutes", equipment: "kettlebell",
        media_url: "https://gymvisual.com/img/p/4/9/9/5/4995.gif",
        steps: ["Hold a kettlebell with both hands between your legs.", "Hinge backward at the hips, keeping your back straight.", "Thrust your hips forward explosively to swing the bell up to eye level.", "Let the bell drop back down between your legs and repeat rhythmically."]
    },

    // --- FOREARMS ---
    {
        id: 53, name: "Barbell Wrist Curl", category: "strength", muscle: "forearms", equipment: "barbell",
        media_url: "https://gymvisual.com/img/p/4/8/0/5/4805.gif",
        steps: ["Sit on a bench and rest your forearms entirely on your thighs.", "Hold a barbell with an underhand grip, letting your wrists hang off your knees.", "Curl your wrists upward as far as possible.", "Slowly lower the bar back down to stretch your forearms."]
    },
    {
        id: 54, name: "Dumbbell Reverse Wrist Curl", category: "strength", muscle: "forearms", equipment: "dumbbell",
        media_url: "https://gymvisual.com/img/p/4/9/1/2/4912.gif",
        steps: ["Sit on a bench and rest your forearms on your thighs.", "Hold a dumbbell in each hand with an overhand grip.", "Curl your wrists upward toward your body.", "Lower the dumbbells slowly to the starting position."]
    },
    {
        id: 55, name: "Farmers Walk", category: "strength", muscle: "forearms", equipment: "kettlebell",
        media_url: "https://gymvisual.com/img/p/5/0/0/1/5001.gif",
        steps: ["Stand tall holding a heavy kettlebell or dumbbell in each hand.", "Keep your shoulders pulled back and chest up.", "Walk forward in a straight line with slow, measured steps.", "Maintain an extremely tight grip on the handles the entire time."]
    },
    {
        id: 56, name: "Wrist Roller", category: "strength", muscle: "forearms", equipment: "machine",
        media_url: "https://gymvisual.com/img/p/5/0/5/5/5055.gif",
        steps: ["Stand holding a wrist roller attachment straight out in front of you.", "Roll the bar forward with your wrists to wind the rope and lift the weight.", "Once the weight reaches the top, carefully reverse the motion.", "Do not let the weight drop; unroll it strictly using your forearms."]
    },
    {
        id: 57, name: "Dead Hang", category: "strength", muscle: "forearms", equipment: "bodyweight",
        media_url: "https://gymvisual.com/img/p/5/1/4/5/5145.gif",
        steps: ["Find a sturdy pull-up bar.", "Jump up and grab the bar with a firm overhand grip.", "Hang completely straight, engaging your core slightly.", "Hold on for as long as your grip allows."]
    },

    // --- HIIT (11 WORKOUTS IN TOTAL) ---
    {
        id: 58, name: "Burpees", category: "hiit", muscle: "core", equipment: "bodyweight",
        media_url: "https://gymvisual.com/img/p/5/2/0/1/5201.gif",
        steps: ["Start in a standing position.", "Drop into a squat position and place your hands on the ground.", "Kick your feet back into a plank position and perform a push-up.", "Return your feet to the squat position and jump up explosively."]
    },
    {
        id: 59, name: "Jump Squats", category: "hiit", muscle: "legs", equipment: "bodyweight",
        media_url: "https://gymvisual.com/img/p/5/2/0/5/5205.gif",
        steps: ["Start in a standing position with feet shoulder-width apart.", "Lower into a deep squat position.", "Explode upwards into a maximum height jump.", "Land softly back directly into the next squat position."]
    },
    {
        id: 60, name: "Mountain Climbers", category: "hiit", muscle: "core", equipment: "bodyweight",
        media_url: "https://gymvisual.com/img/p/5/2/1/2/5212.gif",
        steps: ["Start in a high plank position with your hands directly under your shoulders.", "Drive your right knee forcefully toward your chest.", "Quickly switch legs, driving your left knee to your chest.", "Continue alternating legs at a fast running sprint pace."]
    },
    {
        id: 61, name: "High Knees", category: "hiit", muscle: "legs", equipment: "bodyweight",
        media_url: "https://gymvisual.com/img/p/5/2/1/8/5218.gif",
        steps: ["Stand tall with your feet hip-width apart.", "Drive your right knee up toward your chest as high as possible.", "Quickly switch and drive your left knee up.", "Pump your arms aggressively and continue at a running pace."]
    },
    {
        id: 62, name: "Medicine Ball Slam", category: "hiit", muscle: "core", equipment: "medicine ball",
        media_url: "https://gymvisual.com/img/p/7/3/6/1/7361.gif",
        steps: ["Stand with feet shoulder-width apart, holding a heavy medicine ball.", "Lift the ball high overhead, extending your entire body fully.", "Slam the ball down to the floor between your feet with maximum force.", "Catch the bounce and immediately repeat the sequence."]
    },
    {
        id: 63, name: "Treadmill Hill Sprints", category: "hiit", muscle: "legs", equipment: "machine",
        media_url: "https://gymvisual.com/img/p/5/0/5/8/5058.gif",
        steps: ["Set the treadmill to a high incline (e.g., 10-15%) and a challenging sprint speed.", "Safely step onto the moving belt and sprint with full effort for 30 seconds.", "Focus on driving your knees up and using a strong arm swing, similar to trail running.", "Jump onto the side rails to rest, then repeat the interval."]
    },
    {
        id: 64, name: "Jumping Jacks", category: "hiit", muscle: "core", equipment: "bodyweight",
        media_url: "https://gymvisual.com/img/p/5/2/2/2/5222.gif",
        steps: ["Stand upright with your legs together and arms at your sides.", "Bend your knees slightly and jump into the air.", "As you jump, spread your legs shoulder-width apart and stretch your arms over your head.", "Jump back to the starting position and repeat rapidly."]
    },
    {
        id: 65, name: "Battle Ropes", category: "hiit", muscle: "arms", equipment: "cables",
        media_url: "https://gymvisual.com/img/p/6/1/6/0/6160.gif",
        steps: ["Stand facing the anchor point holding one end of the rope in each hand.", "Bend your knees into an athletic half-squat stance.", "Rapidly whip your arms up and down to create waves in the ropes.", "Maintain maximum speed and intensity for the duration of the interval."]
    },
    {
        id: 66, name: "Box Jumps", category: "hiit", muscle: "legs", equipment: "bodyweight",
        media_url: "https://gymvisual.com/img/p/5/2/2/5/5225.gif",
        steps: ["Stand in front of a sturdy plyometric box.", "Drop into a quarter squat and swing your arms back.", "Explode upward and forward, swinging your arms to jump onto the box.", "Land softly with bent knees, then carefully step back down."]
    },
    {
        id: 67, name: "Trail Bounds (Alternating Jump Lunges)", category: "hiit", muscle: "legs", equipment: "bodyweight",
        media_url: "https://gymvisual.com/img/p/5/2/2/8/5228.gif",
        steps: ["Start in a lunge position with your right foot forward and left foot back.", "Lower your hips, then jump explosively straight up.", "While in the air, rapidly switch the position of your legs.", "Land softly back into a lunge with your left foot forward and repeat."]
    },
    {
        id: 68, name: "Kettlebell Thrusters", category: "hiit", muscle: "shoulders", equipment: "kettlebell",
        media_url: "https://gymvisual.com/img/p/5/0/1/1/5011.gif",
        steps: ["Hold a kettlebell in each hand at shoulder level in the rack position.", "Drop down into a full, deep squat.", "Explode up from the squat, using the momentum to press the kettlebells overhead.", "Lower the kettlebells back to your shoulders as you descend into the next squat."]
    }
];