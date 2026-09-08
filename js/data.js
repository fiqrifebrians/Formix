const muscles = [
    { id: "chest", name: "Chest" },
    { id: "back", name: "Back" },
    { id: "legs", name: "Legs" },
    { id: "shoulders", name: "Shoulders" },
    { id: "biceps", name: "Biceps" },
    { id: "triceps", name: "Triceps" },
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
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Bench-Press.gif", 
        steps: [
            "Positioning: Lie completely flat on the bench. Ensure your feet are planted firmly on the ground, creating a stable base. Your eyes should be directly underneath the barbell.", 
            "The Grip: Reach up and grip the bar with your hands placed slightly wider than shoulder-width apart. Wrap your thumbs fully around the bar for safety (avoid a thumbless grip).", 
            "The Descent: Unrack the bar by straightening your arms. Inhale deeply, brace your core, and lower the barbell slowly and methodically until it lightly touches your mid-chest area. Keep your elbows tucked at about a 45-degree angle to your body to protect your shoulders.", 
            "The Press: Exhale forcefully and push the barbell back up to the starting position in a slight arc toward your upper chest. Fully extend your arms without completely locking out the elbow joint."
        ] 
    },
    { 
        id: 2, name: "Push-Up", category: "strength", muscle: "chest", equipment: "bodyweight", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Push-Up.gif", 
        steps: [
            "Starting Stance: Begin on the floor in a high plank position. Place your hands firmly on the ground, spaced slightly wider than your shoulders. Your legs should be extended straight behind you.", 
            "Body Alignment: Engage your core muscles, squeeze your glutes, and ensure your body forms a perfectly straight line from the top of your head down to your heels. Do not let your hips sag toward the floor.", 
            "Lowering Phase: Take a deep breath in and slowly lower your entire body by bending your elbows. Keep your elbows tracking backward at roughly a 45-degree angle. Descend until your chest is just an inch or two above the ground.", 
            "Pushing Phase: Exhale and press your hands firmly into the floor, driving your body back up to the starting position in one fluid motion."
        ] 
    },
    { 
        id: 3, name: "Dumbbell Fly", category: "strength", muscle: "chest", equipment: "dumbbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Fly.gif", 
        steps: [
            "Setup: Grab a pair of moderately weighted dumbbells and lie flat on your back on a weight bench. Press the dumbbells straight up directly over your chest, with your palms facing each other (neutral grip).", 
            "Arm Position: Maintain a slight, fixed bend in your elbows throughout the entire movement. This protects the elbow joint from excessive strain.", 
            "The Stretch: Inhale and slowly lower the dumbbells out to your sides in a wide, sweeping arc. Continue lowering until you feel a deep stretch across your chest muscles. Do not lower past the point of shoulder comfort.", 
            "The Contraction: Exhale and reverse the motion, using your chest muscles to pull the dumbbells back together at the top, following the exact same arc you used to lower them."
        ] 
    },
    { 
        id: 4, name: "Cable Crossover", category: "strength", muscle: "chest", equipment: "cables", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Cable-Crossover.gif", 
        steps: [
            "Preparation: Stand exactly in the center of a dual cable machine. Set the pulleys to the highest position and grasp a single-hand attachment in each hand.", 
            "Posture: Take one step forward with either foot to stagger your stance for better balance. Lean your torso slightly forward and brace your abdominal muscles.", 
            "The Movement: With a slight bend in your elbows, pull the handles forward and downward in a sweeping, hugging motion until your hands meet or cross over each other in front of your mid-section.", 
            "Return: Slowly allow the cables to pull your arms back up to the starting position, ensuring you feel a stretch in your chest before initiating the next rep."
        ] 
    },
    { 
        id: 5, name: "Resistance Band Chest Press", category: "strength", muscle: "chest", equipment: "resistance band", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Resistance-Band-Chest-Press.gif", 
        steps: [
            "Anchoring: Securely attach the center of a resistance band to a sturdy pole, door frame, or anchor point exactly at chest height.", 
            "Stance: Grab a handle in each hand, face away from the anchor point, and step forward until there is strong tension in the band. Keep your elbows up at chest level.", 
            "Pressing: Push the handles straight out in front of you by fully extending your arms and squeezing your chest muscles together.", 
            "Eccentric Phase: Resist the pull of the band as you slowly bring your hands back toward your chest to complete the repetition."
        ] 
    },
    { 
        id: 6, name: "Medicine Ball Chest Pass", category: "strength", muscle: "chest", equipment: "medicine ball", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Medicine-Ball-Chest-Pass.gif", 
        steps: [
            "Setup: Stand facing a solid wall (or a workout partner) about 3 to 5 feet away. Hold a moderately heavy medicine ball with both hands directly in front of your chest.", 
            "Base: Keep your feet shoulder-width apart, knees slightly bent, and your core fully engaged for stability.", 
            "The Throw: Explosively push the ball directly away from your chest, fully extending your arms and stepping into the throw for maximum power.", 
            "The Catch: Catch the ball as it rebounds off the wall, immediately absorbing the impact by bringing it back to your chest, and rapidly prepare for the next throw."
        ] 
    },

    // --- BACK ---
    { 
        id: 7, name: "Pull-Up", category: "strength", muscle: "back", equipment: "bodyweight", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Pull-up.gif", 
        steps: [
            "The Grip: Stand below a pull-up bar and jump up to grasp it with an overhand grip (palms facing away from you). Your hands should be placed slightly wider than your shoulders.", 
            "The Hang: Allow your body to hang freely. Cross your ankles behind you, squeeze your glutes, and engage your core to prevent unwanted swinging.", 
            "The Pull: Initiate the movement by depressing your shoulder blades (pulling them down and back). Then, drive your elbows straight down toward the floor to pull your body upward until your chin clears the bar.", 
            "The Descent: Lower yourself back down to the starting position in a slow, controlled manner until your arms are fully extended again."
        ] 
    },
    { 
        id: 8, name: "Barbell Row", category: "strength", muscle: "back", equipment: "barbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Row.gif", 
        steps: [
            "Starting Position: Stand with your mid-foot under the barbell. Push your hips back and hinge forward until your torso is nearly parallel to the floor, maintaining a perfectly flat back.", 
            "The Grip: Grab the barbell with an overhand grip, hands placed slightly wider than shoulder-width. Keep your head in a neutral position looking at the floor slightly ahead of you.", 
            "The Row: Take a breath, brace your core, and pull the barbell aggressively toward your lower rib cage or belly button. Lead the movement with your elbows, squeezing your shoulder blades together at the top.", 
            "The Return: Slowly lower the barbell back down to the starting position until your arms are fully straight and your lats are stretched."
        ] 
    },
    { 
        id: 9, name: "Dumbbell Row", category: "strength", muscle: "back", equipment: "dumbbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Row.gif", 
        steps: [
            "Setup: Approach a flat bench. Place your right knee and your right hand firmly on the bench for support. Your back should be flat and parallel to the floor.", 
            "Grip: Pick up a dumbbell with your left hand. Let it hang straight down toward the floor, feeling a stretch in your lat muscle.", 
            "The Pull: Keep your elbow tucked close to your body and pull the dumbbell straight up toward the side of your hip. Focus on using your back muscles rather than your bicep.", 
            "The Squeeze: Pause for a brief second at the top of the movement, squeezing your back, then slowly lower the dumbbell to the starting point."
        ] 
    },
    { 
        id: 10, name: "Lat Pulldown", category: "strength", muscle: "back", equipment: "machine", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Lat-Pulldown.gif", 
        steps: [
            "Adjustment: Sit down at the lat pulldown machine and adjust the knee pad so it fits snugly over your thighs, anchoring you down.", 
            "Grip: Reach up and grasp the wide bar with an overhand grip, hands placed significantly wider than your shoulders.", 
            "Execution: Lean your torso slightly back (about 10 to 15 degrees). Engage your lats and pull the bar straight down toward your upper chest, bringing your elbows down and back.", 
            "Release: Control the weight as you allow the bar to return to the top position, fully extending your arms and feeling a stretch in your back."
        ] 
    },
    { 
        id: 11, name: "Seated Cable Row", category: "strength", muscle: "back", equipment: "cables", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Seated-Cable-Row.gif", 
        steps: [
            "Positioning: Sit on the machine's bench and place your feet securely on the footpads, keeping a slight bend in your knees. Do not lock your knees out.", 
            "Grip: Lean forward to grab the V-bar attachment with both hands. Sit back until your torso is perfectly upright and your arms are fully extended.", 
            "The Pull: Keeping your back completely straight, pull the handles directly into your abdomen. Squeeze your shoulder blades together tightly at the peak of the movement.", 
            "The Return: Slowly extend your arms and lean forward slightly at the hips to return to the stretched starting position."
        ] 
    },

    // --- LEGS ---
    { 
        id: 12, name: "Barbell Squat", category: "strength", muscle: "legs", equipment: "barbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Squat.gif", 
        steps: [
            "Setup: Approach a squat rack and position the barbell securely across the meaty part of your upper traps. Grip the bar tightly, unrack it, and take one or two steps backward.", 
            "Stance: Set your feet roughly shoulder-width apart, with your toes pointing slightly outward (about 15 to 30 degrees). Keep your chest up and core braced tight.", 
            "The Descent: Begin the squat by pushing your hips backward, as if reaching for a chair, while simultaneously bending your knees. Lower yourself until your thighs are at least parallel to the floor.", 
            "The Ascent: Drive forcefully through the middle of your feet and your heels, pushing the floor away to stand back up to the starting position."
        ] 
    },
    { 
        id: 13, name: "Dumbbell Lunges", category: "strength", muscle: "legs", equipment: "dumbbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Lunge.gif", 
        steps: [
            "Starting Position: Stand completely upright, holding a heavy dumbbell in each hand directly at your sides. Keep your shoulders pulled back and look straight ahead.", 
            "The Step: Take an exaggerated step forward with your right leg. Plant your right foot firmly on the ground.", 
            "The Lunge: Drop your hips vertically straight down. Both of your knees should bend to form 90-degree angles. Ensure your front knee does not collapse inward or push far past your toes.", 
            "The Push-Off: Push forcefully off your front right foot to propel yourself backward, returning to the standing starting position. Alternate legs for each rep."
        ] 
    },
    { 
        id: 14, name: "Leg Press", category: "strength", muscle: "legs", equipment: "machine", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Leg-Press.gif", 
        steps: [
            "Positioning: Sit deeply into the leg press machine, ensuring your lower back and glutes are pressed firmly against the backrest.", 
            "Foot Placement: Place your feet squarely on the sled, about shoulder-width apart. Disengage the safety levers.", 
            "The Descent: Slowly bend your knees, bringing the sled down toward your chest. Stop when your legs form a 90-degree angle; do not let your lower back curl off the pad.", 
            "The Press: Drive through your entire foot (focusing on the heels) to press the sled back to the top. Stop just short of locking your knees completely out."
        ] 
    },
    { 
        id: 15, name: "Bodyweight Squat", category: "strength", muscle: "legs", equipment: "bodyweight", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Bodyweight-Squat.gif", 
        steps: [
            "Stance: Stand tall with your feet slightly wider than shoulder-width apart. You can hold your arms straight out in front of you for balance.", 
            "The Drop: Initiate the movement by pushing your hips back. Keep your chest elevated and your back completely straight as you bend your knees.", 
            "Depth: Try to lower your hips until your thighs are parallel to the floor or lower. Ensure your heels remain glued to the ground.", 
            "Recovery: Squeeze your glutes and push through your feet to ascend back to the full standing position."
        ] 
    },
    { 
        id: 16, name: "Medicine Ball Squat", category: "strength", muscle: "legs", equipment: "medicine ball", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Medicine-Ball-Squat.gif", 
        steps: [
            "Setup: Hold a medicine ball firmly against your chest with both hands. Keep your elbows tucked in tightly to your sides.", 
            "Stance: Position your feet shoulder-width apart. Brace your core muscles to support the weight of the ball in front of you.", 
            "Execution: Squat down deeply by pushing your hips back and bending your knees, maintaining a very upright torso.", 
            "Finish: Push through the floor to return to standing, keeping the ball pressed against your chest the entire time."
        ] 
    },

    // --- SHOULDERS ---
    { 
        id: 18, name: "Overhead Press", category: "strength", muscle: "shoulders", equipment: "barbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Overhead-Press.gif", 
        steps: [
            "Setup: Position the barbell at chest height on a rack. Grip the bar just outside of shoulder-width. Unrack it so it rests across your collarbones and front shoulders.", 
            "Stance: Stand with your feet hip-width apart. Squeeze your glutes tightly and brace your core to create a solid column of support.", 
            "The Press: Take a deep breath and press the bar straight up overhead. You may need to tilt your head back slightly to let the bar pass your face, then push your head back through the 'window' of your arms at the top.", 
            "The Descent: Lower the bar under strict control back down to your collarbones before beginning the next repetition."
        ] 
    },
    { 
        id: 19, name: "Lateral Raise", category: "strength", muscle: "shoulders", equipment: "dumbbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Lateral-Raise.gif", 
        steps: [
            "Starting Position: Stand upright holding a relatively light dumbbell in each hand, resting them at your sides with your palms facing your body.", 
            "Arm Position: Maintain a very slight, locked bend in your elbows. Lean your torso forward just a fraction of an inch.", 
            "The Raise: Using only your shoulder muscles, raise the dumbbells out to your sides until your arms are parallel to the floor. Imagine pouring water out of a pitcher at the very top.", 
            "The Return: Resist the weight of gravity as you slowly and steadily lower the dumbbells back to your sides."
        ] 
    },
    { 
        id: 20, name: "Face Pull", category: "strength", muscle: "shoulders", equipment: "cables", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Face-Pull.gif", 
        steps: [
            "Setup: Attach a tricep rope to a cable pulley set at upper-chest or face height. Grab the ends of the rope with your thumbs pointing backward.", 
            "Stance: Step back from the machine until the cable is taut. Stand with a staggered stance for stability.", 
            "The Pull: Pull the rope directly toward your nose or forehead. As you pull, actively separate the rope ends, flaring your elbows out high and wide.", 
            "The Squeeze: Squeeze your rear deltoids and upper back muscles intensely for a full second before slowly returning to the start."
        ] 
    },
    { 
        id: 21, name: "Machine Shoulder Press", category: "strength", muscle: "shoulders", equipment: "machine", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Machine-Shoulder-Press.gif", 
        steps: [
            "Adjustment: Sit in the shoulder press machine and adjust the seat height so that the handles are roughly level with the top of your shoulders.", 
            "Grip: Press your back firmly against the pad. Grab the handles with a comfortable, overhand grip.", 
            "Execution: Push the handles upward until your arms are fully extended overhead, exhaling as you exert force.", 
            "Release: Inhale and lower the handles back down under control, stopping just before the weight stack touches to maintain tension on the muscles."
        ] 
    },
    { 
        id: 22, name: "Resistance Band Front Raise", category: "strength", muscle: "shoulders", equipment: "resistance band", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Resistance-Band-Front-Raise.gif", 
        steps: [
            "Setup: Stand firmly on the center point of a resistance band with both feet. Grasp the handles with your palms facing downward (pronated grip).", 
            "Posture: Stand tall with your shoulders pulled back and down. Keep your core tight.", 
            "The Raise: Keeping your arms perfectly straight, lift the handles directly in front of you until they reach shoulder height.", 
            "The Eccentric: Do not let the band snap back. Slowly lower your arms back down to your thighs, fighting the resistance."
        ] 
    },

    // --- BICEPS ---
    { 
        id: 25, name: "Barbell Curl", category: "strength", muscle: "biceps", equipment: "barbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Curl.gif", 
        steps: [
            "Stance & Grip: Stand straight with your feet shoulder-width apart. Hold a barbell with an underhand grip (palms facing up), hands spaced shoulder-width apart.", 
            "Positioning: Pin your elbows tightly against your ribcage. They should remain completely stationary throughout the entire exercise.", 
            "The Curl: Keeping your torso still (no swinging or leaning back), curl the barbell upwards in a semicircular arc until it reaches shoulder level. Squeeze your biceps hard.", 
            "The Lowering: Slowly reverse the motion, lowering the barbell all the way down until your arms are fully extended."
        ] 
    },
    { 
        id: 27, name: "Dumbbell Bicep Curl", category: "strength", muscle: "biceps", equipment: "dumbbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Curl.gif", 
        steps: [
            "Starting Position: Stand tall, holding a dumbbell in each hand by your sides. Rotate your wrists so that your palms are facing forward.", 
            "Execution: While keeping your upper arms stationary, exhale and curl both weights up toward your shoulders simultaneously.", 
            "The Squeeze: At the top of the movement, pause for a second and contract your biceps intensely.", 
            "The Descent: Inhale and slowly lower the dumbbells back down to the starting position."
        ] 
    },
    { 
        id: 31, name: "EZ Bar Preacher Curl", category: "strength", muscle: "biceps", equipment: "ez bar", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/EZ-Bar-Preacher-Curl.gif", 
        steps: [
            "Setup: Sit at a preacher bench and position the back of your upper arms flat against the angled pad. Grasp an EZ curl bar using the inner, angled grips.", 
            "The Contraction: With your arms fully supported, curl the bar upward in a smooth arc. Ensure your elbows do not lift off the pad.", 
            "The Squeeze: Squeeze your biceps tightly at the top of the movement.", 
            "The Extension: Lower the bar slowly until your arms are fully extended and you feel a deep stretch in the biceps."
        ] 
    },
    { 
        id: 88, name: "Cable Bicep Curl", category: "strength", muscle: "biceps", equipment: "cables", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Cable-Curl.gif", 
        steps: [
            "Setup: Attach a straight bar or EZ bar handle to the lowest setting on a cable pulley. Stand facing the machine.", 
            "Grip: Grab the bar with an underhand grip, stand tall, and pin your elbows to your sides.", 
            "Execution: Curl the bar upwards towards your chest, keeping your body rigid and letting the biceps do all the work.", 
            "Return: Lower the bar under control, fully extending your arms at the bottom."
        ] 
    },
    { 
        id: 89, name: "Resistance Band Bicep Curl", category: "strength", muscle: "biceps", equipment: "resistance band", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Resistance-Band-Bicep-Curl.gif", 
        steps: [
            "Stance: Step on the middle of a resistance band with both feet shoulder-width apart.", 
            "Grip: Hold the handles in each hand with your palms facing forward. Keep your chest up and shoulders down.", 
            "The Curl: Bend your elbows and curl the handles up towards your shoulders.", 
            "The Release: Slowly lower the handles back down to the starting position, fighting the tension of the band the whole way down."
        ] 
    },

    // --- TRICEPS ---
    { 
        id: 26, name: "Tricep Pushdown", category: "strength", muscle: "triceps", equipment: "cables", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Triceps-Pushdown.gif", 
        steps: [
            "Setup: Attach a straight bar, V-bar, or rope to a high pulley on a cable machine. Grab the attachment with an overhand grip.", 
            "Posture: Stand close to the cable, lean your torso slightly forward, and lock your elbows firmly against your sides.", 
            "The Push: Using only your triceps, push the attachment straight down toward your thighs until your arms are entirely straight and locked out.", 
            "The Return: Control the weight as the attachment comes back up to chest level, never allowing your elbows to move away from your sides."
        ] 
    },
    { 
        id: 28, name: "EZ Bar Skullcrusher", category: "strength", muscle: "triceps", equipment: "ez bar", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/EZ-Bar-Skullcrusher.gif", 
        steps: [
            "Setup: Lie flat on a bench. Hold an EZ curl bar with an overhand, narrow grip directly above your chest, arms fully extended.", 
            "The Drop: Keeping your upper arms pointing perfectly straight at the ceiling, bend only at your elbows. Slowly lower the bar down until it is just an inch above your forehead.", 
            "The Extension: Using your triceps, forcefully extend your elbows to push the bar back up to the starting position."
        ] 
    },
    { 
        id: 29, name: "Dips", category: "strength", muscle: "triceps", equipment: "bodyweight", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Triceps-Dips.gif", 
        steps: [
            "Mounting: Jump up onto a set of parallel dip bars, supporting your entire body weight on your fully extended arms.", 
            "Posture: To target the triceps (rather than the chest), keep your torso as upright and vertical as possible. Keep your elbows tucked close to your body.", 
            "The Descent: Inhale and bend your elbows to lower your body straight down until your upper arms are parallel to the floor.", 
            "The Push: Exhale and press your body back up to the starting position by straightening your arms."
        ] 
    },
    { 
        id: 90, name: "Dumbbell Overhead Extension", category: "strength", muscle: "triceps", equipment: "dumbbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Triceps-Extension.gif", 
        steps: [
            "Setup: Sit on a bench with back support or stand upright. Grip a single heavy dumbbell with both hands, cupping the inner plate.", 
            "Positioning: Press the dumbbell straight up overhead so your arms are fully extended.", 
            "Execution: Keeping your upper arms close to your ears, bend your elbows to lower the dumbbell behind your head until you feel a deep stretch in your triceps.", 
            "The Press: Push the dumbbell back up to the starting position, focusing entirely on contracting the triceps."
        ] 
    },
    { 
        id: 91, name: "Triceps Extension Machine", category: "strength", muscle: "triceps", equipment: "machine", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Triceps-Extension-Machine.gif", 
        steps: [
            "Adjustment: Adjust the seat height so that your upper arms can rest flat on the pad, aligning your elbows with the machine's pivot point.", 
            "Grip: Grab the handles with a neutral or overhand grip.", 
            "The Push: Press the handles down and forward until your arms are fully extended, squeezing your triceps hard.", 
            "The Return: Slowly allow the handles to return to the starting position, controlling the weight stack."
        ] 
    },

    // --- CORE ---
    { 
        id: 33, name: "Plank", category: "strength", muscle: "core", equipment: "bodyweight", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Plank.gif", 
        steps: [
            "Positioning: Get face down on the floor. Prop yourself up on your forearms and your toes. Your elbows should be positioned directly underneath your shoulders.", 
            "Alignment: Ensure your body forms a perfectly straight, rigid line from your head down to your heels.", 
            "Engagement: Squeeze your glutes tightly, brace your abdominal muscles as if anticipating a punch, and press your forearms firmly into the floor.", 
            "The Hold: Maintain this position while breathing deeply and steadily for the prescribed amount of time."
        ] 
    },
    { 
        id: 34, name: "Cable Crunch", category: "strength", muscle: "core", equipment: "cables", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Cable-Crunch.gif", 
        steps: [
            "Setup: Attach a rope handle to a high cable pulley. Kneel down facing the machine (or facing away, depending on preference) and grab the rope, holding it securely next to your ears or behind your neck.", 
            "The Crunch: While keeping your hips relatively stationary, flex your spine and crunch your torso forward and downward. Aim to bring your elbows toward your knees.", 
            "The Contraction: Exhale forcefully at the bottom of the movement, squeezing your abs tightly.", 
            "The Release: Inhale and slowly return to the upright kneeling position, maintaining tension in the abdominal wall."
        ] 
    },
    { 
        id: 35, name: "Russian Twist", category: "strength", muscle: "core", equipment: "medicine ball", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Russian-Twist.gif", 
        steps: [
            "Starting Position: Sit on the floor. Lean your torso back slightly until you feel your abs engage. Bend your knees and lift your feet a few inches off the ground.", 
            "The Hold: Grasp a medicine ball with both hands and hold it directly in front of your chest.", 
            "The Twist: Rotate your torso fully to the right, tapping the medicine ball lightly on the floor beside your hip.", 
            "The Alternate: Immediately rotate your torso all the way to the left side and tap the ball on the floor. Continue alternating in a smooth, controlled rhythm."
        ] 
    },
    { 
        id: 36, name: "Hanging Leg Raise", category: "strength", muscle: "core", equipment: "bodyweight", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Hanging-Leg-Raise.gif", 
        steps: [
            "The Hang: Jump up and grasp a pull-up bar with a shoulder-width, overhand grip. Let your body hang completely still with your legs straight down.", 
            "The Lift: Exhale and engage your core to lift your legs straight up in front of you. Aim to bring them up until they form a 90-degree angle with your torso.", 
            "Control: Do not use momentum or swing your body. The movement must be powered entirely by your abdominal muscles and hip flexors.", 
            "The Lowering: Inhale and lower your legs back down to the dead-hang position as slowly and steadily as possible."
        ] 
    },
    { 
        id: 37, name: "Ab Machine Crunch", category: "strength", muscle: "core", equipment: "machine", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Crunch-Machine.gif", 
        steps: [
            "Adjustment: Sit in an abdominal crunch machine. Adjust the seat height so the chest pad is resting comfortably on your upper chest, and hook your feet under the foot rollers.", 
            "Grip: Lightly grasp the handles above your head. Do not use your arms to pull the weight.", 
            "The Crunch: Exhale and aggressively crunch your torso forward, pulling your upper chest down toward your knees using strictly your abdominal muscles.", 
            "The Return: Inhale and slowly resist the weight as you return your torso to the upright starting position."
        ] 
    },

    // --- CALVES ---
    { 
        id: 39, name: "Standing Calf Raise", category: "strength", muscle: "calves", equipment: "bodyweight", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Standing-Calf-Raise.gif", 
        steps: [
            "Setup: Stand on the edge of an elevated platform, stair, or sturdy block. The balls of your feet should be on the edge, with your heels hanging off completely.", 
            "Balance: Hold onto a wall, rail, or sturdy object lightly with one hand to maintain your balance.", 
            "The Raise: Exhale and push forcefully through the balls of your feet, raising your heels as high up toward the ceiling as physically possible. Squeeze your calf muscles intensely at the top.", 
            "The Stretch: Inhale and slowly lower your heels down past the level of the step until you feel a deep, significant stretch in your calves."
        ] 
    },
    { 
        id: 40, name: "Barbell Calf Raise", category: "strength", muscle: "calves", equipment: "barbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Calf-Raise.gif", 
        steps: [
            "Positioning: Load a barbell on a squat rack and position it securely across your upper back/traps, just as you would for a back squat.", 
            "Stance: Unrack the weight and stand tall with your feet about hip-width apart. Ensure your core is braced.", 
            "Execution: Push up onto your tiptoes, elevating your heels as high as possible off the floor.", 
            "Return: Lower your heels back to the floor in a slow, controlled manner. For a better stretch, perform this standing with your toes on weight plates."
        ] 
    },
    { 
        id: 41, name: "Donkey Calf Raise", category: "strength", muscle: "calves", equipment: "machine", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Donkey-Calf-Raise.gif", 
        steps: [
            "Setup: Step onto the foot platform of a donkey calf raise machine. Bend at the hips and position your lower back/sacrum snugly under the padded lever arm.", 
            "Posture: Keep your back flat and your legs mostly straight, with just a tiny micro-bend in the knees to protect the joint.", 
            "The Lift: Push up through the balls of your feet to raise the lever arm, fully contracting your calf muscles at the peak.", 
            "The Drop: Lower your heels down as far as the machine allows, getting a full stretch before the next rep."
        ] 
    },
    { 
        id: 42, name: "Dumbbell Calf Raise", category: "strength", muscle: "calves", equipment: "dumbbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Calf-Raise.gif", 
        steps: [
            "Grip: Grab a heavy pair of dumbbells and let them hang straight down at your sides.", 
            "Positioning: Stand on a flat surface, or ideally, place the balls of your feet on a weight plate or small block to increase the range of motion.", 
            "The Movement: Elevate your body by driving through your toes and raising your heels off the floor.", 
            "Control: Pause at the top for a second to maximize the contraction, then slowly lower your heels back down."
        ] 
    },
    { 
        id: 43, name: "Seated Calf Raise", category: "strength", muscle: "calves", equipment: "machine", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Seated-Calf-Raise.gif", 
        steps: [
            "Setup: Sit on the seated calf raise machine. Place the balls of your feet on the lower platform and position the heavy pads securely over your lower thighs/knees.", 
            "Release: Push up slightly with your toes to disengage the safety lever.", 
            "The Stretch: Slowly lower your heels toward the floor as far as your ankle mobility allows.", 
            "The Contraction: Push powerfully through the balls of your feet, raising your heels as high as possible against the resistance of the pads."
        ] 
    },

    // --- GLUTES ---
    { 
        id: 44, name: "Barbell Hip Thrust", category: "strength", muscle: "glutes", equipment: "barbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Hip-Thrust.gif", 
        steps: [
            "Setup: Sit on the floor with your shoulder blades resting against the edge of a flat weight bench. Roll a heavily padded barbell directly over your hip crease.", 
            "Foot Placement: Plant your feet firmly on the floor, spaced shoulder-width apart. Your shins should be completely vertical when your hips are fully elevated.", 
            "The Thrust: Take a deep breath, brace your core, and drive through your heels to thrust your hips explosively toward the ceiling.", 
            "The Lockout: At the top of the movement, your body should form a straight line from your shoulders to your knees. Squeeze your glutes violently for a full second before lowering your hips back down."
        ] 
    },
    { 
        id: 45, name: "Glute Bridge", category: "strength", muscle: "glutes", equipment: "bodyweight", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Glute-Bridge.gif", 
        steps: [
            "Starting Position: Lie completely flat on your back on a yoga mat. Bend your knees and place your feet flat on the floor, bringing your heels close to your glutes.", 
            "Arm Placement: Rest your arms straight down along your sides, with your palms pressing into the floor for stability.", 
            "The Lift: Exhale and push firmly through your heels, lifting your hips high off the floor until your back, hips, and thighs form a straight diagonal line.", 
            "The Hold: Squeeze your glutes tightly at the apex of the movement, hold for one or two seconds, and slowly lower your hips back to the mat."
        ] 
    },
    { 
        id: 46, name: "Cable Pull Through", category: "strength", muscle: "glutes", equipment: "cables", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Cable-Pull-Through.gif", 
        steps: [
            "Setup: Attach a tricep rope to the lowest setting of a cable pulley machine. Stand facing away from the machine, straddling the cable.", 
            "Grip: Reach down and back between your legs to grasp the ends of the rope.", 
            "The Hinge: Keeping your back perfectly straight and a slight bend in your knees, hinge backward at the hips, letting the cable pull your hands through your legs until you feel a deep stretch in your hamstrings.", 
            "The Extension: Squeeze your glutes and forcefully thrust your hips forward to stand completely upright. Do not use your arms to pull the weight."
        ] 
    },
    { 
        id: 47, name: "Kettlebell Goblet Squat", category: "strength", muscle: "glutes", equipment: "kettlebell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Kettlebell-Goblet-Squat.gif", 
        steps: [
            "Grip: Pick up a heavy kettlebell and hold it vertically by the sides of its handle (the 'horns') tight against the center of your chest.", 
            "Stance: Stand with your feet set slightly wider than shoulder-width apart, toes pointing outwards.", 
            "The Descent: Squat down deeply by pushing your hips back. Keep your chest up proudly; do not let the weight pull you forward. Aim to drop your elbows inside of your knees.", 
            "The Ascent: Drive forcefully through your heels to stand back up, actively squeezing your glute muscles at the top of the movement."
        ] 
    },
    { 
        id: 48, name: "Resistance Band Kickback", category: "strength", muscle: "glutes", equipment: "resistance band", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Resistance-Band-Glute-Kickback.gif", 
        steps: [
            "Positioning: Get down on the floor on all fours (tabletop position). Loop a small resistance band securely around the arches of your feet or your ankles.", 
            "Stability: Keep your back completely flat, your neck neutral, and your core braced tightly to prevent your lower back from arching.", 
            "The Kick: Keeping your knee bent at a 90-degree angle (or extending it straight, depending on variation), kick one leg backward and upwards toward the ceiling.", 
            "The Contraction: Push against the band's resistance until your glute is fully contracted, hold for a split second, and slowly return the knee to the starting position."
        ] 
    },

    // --- FOREARMS ---
    { 
        id: 49, name: "Barbell Wrist Curl", category: "strength", muscle: "forearms", equipment: "barbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Wrist-Curl.gif", 
        steps: [
            "Setup: Sit on the edge of a flat bench. Hold a barbell with an underhand (palms facing up) grip.", 
            "Positioning: Rest your forearms flat against your thighs, allowing your wrists to hang off the edge of your knees. Your arms should remain completely stationary.", 
            "The Extension: Open your hands slightly and let the barbell roll down to the tips of your fingers to stretch the forearm muscles.", 
            "The Curl: Close your fingers around the bar and forcefully curl your wrists upward as high as they can go, lifting the weight strictly with your forearm flexors."
        ] 
    },
    { 
        id: 50, name: "Dumbbell Reverse Wrist Curl", category: "strength", muscle: "forearms", equipment: "dumbbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Reverse-Wrist-Curl.gif", 
        steps: [
            "Setup: Sit on a bench. Hold a dumbbell in each hand using an overhand (palms facing down) grip.", 
            "Positioning: Rest your forearms on your thighs so that your wrists are hanging over the edge of your knees.", 
            "The Movement: Keeping your forearms pressed against your legs, curl your wrists upward, bringing the back of your hands closer to your body.", 
            "The Return: Slowly and carefully lower the dumbbells back down until you feel a gentle stretch in the top of your forearms."
        ] 
    },
    { 
        id: 51, name: "Farmers Walk", category: "strength", muscle: "forearms", equipment: "kettlebell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Farmers-Walk.gif", 
        steps: [
            "The Pickup: Stand between two heavy kettlebells (or dumbbells). Squat down with a flat back and grip the handles as tightly as humanly possible.", 
            "The Posture: Stand up straight. Pull your shoulders back and down, puff your chest out, and look straight ahead. Do not let the weights rest against your legs.", 
            "The Walk: Begin walking forward in a straight line using short, rapid, and deliberate steps.", 
            "The Finish: Continue walking for a set distance or time, maintaining a crushing grip the entire way. Carefully squat down to return the weights to the floor."
        ] 
    },
    { 
        id: 52, name: "EZ Bar Reverse Curl", category: "strength", muscle: "forearms", equipment: "ez bar", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/EZ-Bar-Reverse-Curl.gif", 
        steps: [
            "Stance: Stand perfectly straight with your feet shoulder-width apart.", 
            "Grip: Hold an EZ curl bar in front of your thighs using a pronated (overhand, palms facing down) grip.", 
            "The Execution: Pin your elbows to your ribcage. Keeping your upper arms totally still, bend at the elbows to curl the bar upwards in a semicircular motion until it reaches your chest.", 
            "The Eccentric: Lower the bar very slowly back to the starting position. You will feel this intensely in the brachioradialis muscle of your forearm."
        ] 
    },
    { 
        id: 53, name: "Behind The Back Barbell Wrist Curl", category: "strength", muscle: "forearms", equipment: "barbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Behind-The-Back-Barbell-Wrist-Curl.gif", 
        steps: [
            "Setup: Stand facing away from a barbell resting on a rack at hip height. Reach behind you and grab the bar with a shoulder-width, overhand grip.", 
            "Positioning: Lift the bar off the rack and let it hang behind your glutes. Stand tall and keep your arms straight.", 
            "The Curl: Without bending your elbows, curl the barbell upward by simply flexing your wrists toward the ceiling.", 
            "The Release: Lower the weight back down slowly, letting the bar roll slightly into your fingertips at the bottom for an extreme stretch."
        ] 
    },

    // --- HIIT ---
    { 
        id: 54, name: "Burpees", category: "hiit", muscle: "core", equipment: "bodyweight", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Burpee.gif", 
        steps: [
            "Phase 1: Start in a standing position. In one quick motion, drop down, bend your knees, and place your hands flat on the floor right in front of your feet.", 
            "Phase 2: Explosively kick both of your legs straight back so you land in a standard high plank/push-up position.", 
            "Phase 3: Perform a strict push-up, lowering your chest all the way to the floor, then pushing back up.", 
            "Phase 4: Immediately hop your feet back up toward your hands, stand up rapidly, and leap into the air while clapping your hands overhead."
        ] 
    },
    { 
        id: 55, name: "Jump Squats", category: "hiit", muscle: "legs", equipment: "bodyweight", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Jump-Squat.gif", 
        steps: [
            "Preparation: Stand tall with your feet placed shoulder-width apart, core tight.", 
            "The Load: Hinge your hips back and bend your knees to lower yourself into a standard squat position, swinging your arms backward for momentum.", 
            "The Explosion: Drive as hard as you can through your feet, jumping vertically straight up into the air as high as possible while swinging your arms forward.", 
            "The Landing: As gravity pulls you back down, land softly on the balls of your feet and immediately absorb the impact by smoothly transitioning right back into the next squat."
        ] 
    },
    { 
        id: 56, name: "Mountain Climbers", category: "hiit", muscle: "core", equipment: "bodyweight", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Mountain-Climber.gif", 
        steps: [
            "Starting Stance: Get onto the floor in a standard push-up position. Your hands should be directly underneath your shoulders, and your body must form a straight line.", 
            "The Drive: Engage your abs. Quickly lift your right foot off the floor and drive your right knee forcefully straight up toward your chest.", 
            "The Switch: As you return your right foot to the starting position, simultaneously jump your left knee up toward your chest.", 
            "The Pace: Continue alternating legs in a rapid, running motion. Keep your hips locked down; do not let your butt bounce up and down into the air."
        ] 
    },
    { 
        id: 57, name: "High Knees", category: "hiit", muscle: "legs", equipment: "bodyweight", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/High-Knees.gif", 
        steps: [
            "Posture: Stand perfectly upright with your feet hip-width apart. Look straight ahead and keep your chest open.", 
            "The Motion: Begin running in place. However, instead of kicking your feet behind you, drive your knees up high in front of your body.", 
            "The Target: Aim to bring each knee up to at least waist/hip level on every single stride.", 
            "The Arms: Pump your arms vigorously in synchronization with your legs to generate momentum and increase your heart rate."
        ] 
    },
    { 
        id: 58, name: "Medicine Ball Slam", category: "hiit", muscle: "core", equipment: "medicine ball", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Medicine-Ball-Slam.gif", 
        steps: [
            "Setup: Stand with your feet shoulder-width apart. Hold a heavy, non-bouncing medicine ball with both hands.", 
            "The Reach: Rise up onto your tiptoes while simultaneously lifting the medicine ball high overhead, fully extending your entire body.", 
            "The Slam: Using your core, lats, and arms, forcefully slam the ball straight down onto the floor between your feet as hard as you possibly can.", 
            "The Reset: As you slam, drop your hips into a squat to catch the ball as it lightly bounces off the ground, then immediately rise up to repeat."
        ] 
    },
    { 
        id: 59, name: "Kettlebell Thrusters", category: "hiit", muscle: "shoulders", equipment: "kettlebell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Kettlebell-Thruster.gif", 
        steps: [
            "The Rack: Stand with feet shoulder-width apart. Clean two kettlebells up to the rack position, resting them on your shoulders/forearms with elbows pointing down.", 
            "The Squat: Keeping your torso upright and your core braced, drop into a full, deep squat.", 
            "The Drive: Explode upward from the squat. As you approach a standing position, use the momentum generated by your legs to seamlessly transition into pressing the kettlebells straight up overhead.", 
            "The Reset: Lower the kettlebells back down to the rack position on your shoulders simultaneously as you drop right back down into the next squat."
        ] 
    }
];