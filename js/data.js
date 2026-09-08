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
    { id: "forearms", name: "Forearms" },
    { id: "cardio", name: "Cardio" }
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
    // ================= CHEST =================
    { 
        id: 1, name: "Barbell Bench Press", category: "strength", muscle: "chest", equipment: "barbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Bench-Press.gif", 
        steps: [
            "Positioning: Lie completely flat on the bench. Ensure your feet are planted firmly on the ground, creating a stable base. Retract your scapula (pinch your shoulder blades together) to protect your rotator cuffs and push your chest up.", 
            "The Grip: Reach up and grip the bar with your hands placed slightly wider than shoulder-width apart. Wrap your thumbs fully around the bar for safety.", 
            "The Descent: Unrack the bar by straightening your arms. Inhale deeply, brace your core, and lower the barbell slowly and methodically until it lightly touches your mid-chest area. Keep your elbows tucked at about a 45-degree angle.", 
            "The Press: Exhale forcefully and drive the barbell back up to the starting position in a slight arc toward your upper chest. Fully extend your arms without completely locking out the elbow joint."
        ] 
    },
    { 
        id: 2, name: "Push-Up", category: "strength", muscle: "chest", equipment: "bodyweight", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Push-Up.gif", 
        steps: [
            "Starting Stance: Begin face down on the floor in a high plank position. Place your palms firmly on the ground, spaced just slightly wider than your shoulders.", 
            "Body Alignment: Engage your abdominal muscles deeply, squeeze your glutes, and ensure your body forms a perfectly straight, rigid line from the top of your head down to your heels.", 
            "Lowering Phase: Take a deep breath in and slowly lower your entire body by bending your elbows. Keep your elbows tracking backward at roughly a 45-degree angle. Descend until your chest is just an inch above the ground.", 
            "Pushing Phase: Exhale and press your hands firmly and evenly into the floor, driving your body back up to the starting position in one fluid motion."
        ] 
    },
    { 
        id: 3, name: "Dumbbell Fly", category: "strength", muscle: "chest", equipment: "dumbbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Fly.gif", 
        steps: [
            "Setup: Grab a pair of moderately weighted dumbbells and lie flat on your back on a weight bench. Press the dumbbells straight up directly over your chest, palms facing each other.", 
            "Arm Position: Maintain a slight, fixed bend in your elbows throughout the entire movement. This protects the elbow joint from excessive strain.", 
            "The Stretch: Inhale and slowly lower the dumbbells out to your sides in a wide, sweeping arc. Continue lowering until you feel a deep, significant stretch across your chest muscles.", 
            "The Contraction: Exhale and reverse the motion, using your chest muscles to pull the dumbbells back together at the top, following the exact same arc you used to lower them."
        ] 
    },
    { 
        id: 4, name: "Cable Crossover", category: "strength", muscle: "chest", equipment: "cables", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Cable-Crossover.gif", 
        steps: [
            "Preparation: Stand exactly in the center of a dual cable machine. Set the pulleys to the highest position and grasp a single-hand attachment in each hand.", 
            "Posture: Take one step forward with either foot to stagger your stance for better balance. Lean your torso slightly forward and brace your abdominal muscles.", 
            "The Movement: With a slight bend in your elbows, pull the handles forward and downward in a sweeping, hugging motion until your hands meet or cross over each other.", 
            "Return: Slowly allow the cables to pull your arms back up to the starting position, ensuring you feel a stretch in your chest before initiating the next rep."
        ] 
    },

    // ================= BACK =================
    { 
        id: 6, name: "Pull-Up", category: "strength", muscle: "back", equipment: "bodyweight", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Pull-up.gif", 
        steps: [
            "The Grip: Stand below a pull-up bar and jump up to grasp it with an overhand grip (palms facing away from you). Your hands should be placed slightly wider than your shoulders.", 
            "The Hang: Allow your body to hang freely. Cross your ankles behind you, squeeze your glutes, and engage your core to prevent unwanted swinging.", 
            "The Pull: Initiate the movement by depressing your shoulder blades (pulling them down and back). Drive your elbows straight down toward the floor to pull your body upward until your chin clears the bar.", 
            "The Descent: Lower yourself back down to the starting position in a slow, controlled manner until your arms are fully extended again."
        ] 
    },
    { 
        id: 7, name: "Barbell Row", category: "strength", muscle: "back", equipment: "barbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Row.gif", 
        steps: [
            "Starting Position: Stand with your mid-foot under the barbell. Push your hips back and hinge forward until your torso is nearly parallel to the floor, maintaining a perfectly flat back.", 
            "The Grip: Grab the barbell with an overhand grip, hands placed slightly wider than shoulder-width.", 
            "The Row: Take a breath, brace your core, and pull the barbell aggressively toward your lower rib cage or belly button. Lead the movement with your elbows, squeezing your shoulder blades together at the top.", 
            "The Return: Slowly lower the barbell back down to the starting position until your arms are fully straight and your lats are stretched."
        ] 
    },
    { 
        id: 8, name: "Dumbbell Row", category: "strength", muscle: "back", equipment: "dumbbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Row.gif", 
        steps: [
            "Setup: Approach a flat bench. Place your right knee and your right hand firmly on the bench for support. Your back should be flat and parallel to the floor.", 
            "Grip: Pick up a dumbbell with your left hand. Let it hang straight down toward the floor, feeling a stretch in your lat muscle.", 
            "The Pull: Keep your elbow tucked close to your body and pull the dumbbell straight up toward the side of your hip. Focus on using your back muscles rather than your bicep.", 
            "The Squeeze: Pause for a brief second at the top of the movement, squeezing your back, then slowly lower the dumbbell to the starting point."
        ] 
    },
    { 
        id: 9, name: "Lat Pulldown", category: "strength", muscle: "back", equipment: "machine", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Lat-Pulldown.gif", 
        steps: [
            "Adjustment: Sit down at the lat pulldown machine and adjust the knee pad so it fits snugly over your thighs, anchoring you down.", 
            "Grip: Reach up and grasp the wide bar with an overhand grip, hands placed significantly wider than your shoulders.", 
            "Execution: Lean your torso slightly back (about 10 to 15 degrees). Engage your lats and pull the bar straight down toward your upper chest, bringing your elbows down and back.", 
            "Release: Control the weight as you allow the bar to return to the top position, fully extending your arms and feeling a stretch in your back."
        ] 
    },

    // ================= LEGS =================
    { 
        id: 11, name: "Barbell Squat", category: "strength", muscle: "legs", equipment: "barbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Squat.gif", 
        steps: [
            "Setup: Approach a squat rack and position the barbell securely across the meaty part of your upper traps. Grip the bar tightly, unrack it, and take one or two steps backward.", 
            "Stance: Set your feet roughly shoulder-width apart, with your toes pointing slightly outward (about 15 to 30 degrees). Keep your chest up and core braced tight.", 
            "The Descent: Begin the squat by pushing your hips backward, as if reaching for a chair, while simultaneously bending your knees. Lower yourself until your thighs are at least parallel to the floor.", 
            "The Ascent: Drive forcefully through the middle of your feet and your heels, pushing the floor away to stand back up to the starting position."
        ] 
    },
    { 
        id: 12, name: "Dumbbell Lunges", category: "strength", muscle: "legs", equipment: "dumbbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Lunge.gif", 
        steps: [
            "Starting Position: Stand completely upright, holding a heavy dumbbell in each hand directly at your sides. Keep your shoulders pulled back and look straight ahead.", 
            "The Step: Take an exaggerated step forward with your right leg. Plant your right foot firmly on the ground.", 
            "The Lunge: Drop your hips vertically straight down. Both of your knees should bend to form 90-degree angles. Ensure your front knee does not collapse inward or push far past your toes.", 
            "The Push-Off: Push forcefully off your front right foot to propel yourself backward, returning to the standing starting position. Alternate legs for each rep."
        ] 
    },
    { 
        id: 13, name: "Leg Press", category: "strength", muscle: "legs", equipment: "machine", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Leg-Press.gif", 
        steps: [
            "Positioning: Sit deeply into the leg press machine, ensuring your lower back and glutes are pressed firmly against the backrest.", 
            "Foot Placement: Place your feet squarely on the sled, about shoulder-width apart. Disengage the safety levers.", 
            "The Descent: Slowly bend your knees, bringing the sled down toward your chest. Stop when your legs form a 90-degree angle; do not let your lower back curl off the pad.", 
            "The Press: Drive through your entire foot (focusing on the heels) to press the sled back to the top. Stop just short of locking your knees completely out."
        ] 
    },
    { 
        id: 14, name: "Romanian Deadlift", category: "strength", muscle: "legs", equipment: "barbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Romanian-Deadlift.gif", 
        steps: [
            "Setup: Stand tall holding a barbell in front of your thighs with a pronated (overhand) grip, hands shoulder-width apart. Keep your feet hip-width apart.", 
            "The Hinge: Maintain a very slight, permanent micro-bend in your knees. Begin the movement by pushing your hips and glutes backward as far as they will go.", 
            "The Stretch: Keep the barbell in constant contact with your legs, sliding it down your thighs and shins until you feel an intense stretch in your hamstrings. Your back must remain absolutely flat.", 
            "The Lockout: Squeeze your glutes and push your hips forward to reverse the motion, pulling your torso back to the upright standing position."
        ] 
    },

    // ================= SHOULDERS =================
    { 
        id: 16, name: "Overhead Press", category: "strength", muscle: "shoulders", equipment: "barbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Overhead-Press.gif", 
        steps: [
            "Setup: Position the barbell at chest height on a rack. Grip the bar just outside of shoulder-width. Unrack it so it rests across your collarbones and front shoulders.", 
            "Stance: Stand with your feet hip-width apart. Squeeze your glutes tightly and brace your core to create a solid column of support.", 
            "The Press: Take a deep breath and press the bar straight up overhead. You may need to tilt your head back slightly to let the bar pass your face, then push your head forward.", 
            "The Descent: Lower the bar under strict control back down to your collarbones before beginning the next repetition."
        ] 
    },
    { 
        id: 17, name: "Lateral Raise", category: "strength", muscle: "shoulders", equipment: "dumbbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Lateral-Raise.gif", 
        steps: [
            "Starting Position: Stand upright holding a relatively light dumbbell in each hand, resting them at your sides with your palms facing your body.", 
            "Arm Position: Maintain a very slight, locked bend in your elbows. Lean your torso forward just a fraction of an inch.", 
            "The Raise: Using only your shoulder muscles, raise the dumbbells out to your sides until your arms are parallel to the floor. Imagine pouring water out of a pitcher at the very top.", 
            "The Return: Resist the weight of gravity as you slowly and steadily lower the dumbbells back to your sides."
        ] 
    },
    { 
        id: 18, name: "Face Pull", category: "strength", muscle: "shoulders", equipment: "cables", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Face-Pull.gif", 
        steps: [
            "Setup: Attach a tricep rope to a cable pulley set at upper-chest or face height. Grab the ends of the rope with your thumbs pointing backward.", 
            "Stance: Step back from the machine until the cable is taut. Stand with a staggered stance for stability.", 
            "The Pull: Pull the rope directly toward your nose or forehead. As you pull, actively separate the rope ends, flaring your elbows out high and wide.", 
            "The Squeeze: Squeeze your rear deltoids and upper back muscles intensely for a full second before slowly returning to the start."
        ] 
    },
    { 
        id: 19, name: "Machine Shoulder Press", category: "strength", muscle: "shoulders", equipment: "machine", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Machine-Shoulder-Press.gif", 
        steps: [
            "Adjustment: Sit in the shoulder press machine and adjust the seat height so that the handles are roughly level with the top of your shoulders.", 
            "Grip: Press your back firmly against the pad. Grab the handles with a comfortable, overhand grip.", 
            "Execution: Push the handles upward until your arms are fully extended overhead, exhaling as you exert force.", 
            "Release: Inhale and lower the handles back down under control, stopping just before the weight stack touches to maintain tension on the muscles."
        ] 
    },

    // ================= BICEPS =================
    { 
        id: 21, name: "Barbell Curl", category: "strength", muscle: "biceps", equipment: "barbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Curl.gif", 
        steps: [
            "Stance & Grip: Stand straight with your feet shoulder-width apart. Hold a barbell with an underhand grip (palms facing up), hands spaced shoulder-width apart.", 
            "Positioning: Pin your elbows tightly against your ribcage. They should remain completely stationary throughout the entire exercise.", 
            "The Curl: Keeping your torso still (no swinging or leaning back), curl the barbell upwards in a semicircular arc until it reaches shoulder level. Squeeze your biceps hard.", 
            "The Lowering: Slowly reverse the motion, lowering the barbell all the way down until your arms are fully extended."
        ] 
    },
    { 
        id: 22, name: "Dumbbell Bicep Curl", category: "strength", muscle: "biceps", equipment: "dumbbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Curl.gif", 
        steps: [
            "Starting Position: Stand tall, holding a dumbbell in each hand by your sides. Rotate your wrists so that your palms are facing forward.", 
            "Execution: While keeping your upper arms stationary, exhale and curl both weights up toward your shoulders simultaneously.", 
            "The Squeeze: At the top of the movement, pause for a second and contract your biceps intensely.", 
            "The Descent: Inhale and slowly lower the dumbbells back down to the starting position."
        ] 
    },
    { 
        id: 23, name: "EZ Bar Preacher Curl", category: "strength", muscle: "biceps", equipment: "ez bar", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/EZ-Bar-Preacher-Curl.gif", 
        steps: [
            "Setup: Sit at a preacher bench and position your upper arms on the pad. Grab the EZ bar with an underhand grip.", 
            "The Contraction: With your arms fully supported, curl the bar upward in a smooth arc. Ensure your elbows do not lift off the pad.", 
            "The Squeeze: Squeeze your biceps tightly at the top of the movement.", 
            "The Extension: Lower the bar slowly until your arms are fully extended and you feel a deep stretch in the biceps."
        ] 
    },

    // ================= TRICEPS =================
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
        id: 27, name: "EZ Bar Skullcrusher", category: "strength", muscle: "triceps", equipment: "ez bar", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/EZ-Bar-Skullcrusher.gif", 
        steps: [
            "Setup: Lie flat on a bench. Hold an EZ curl bar with an overhand, narrow grip directly above your chest, arms fully extended.", 
            "The Drop: Keeping your upper arms pointing perfectly straight at the ceiling, bend only at your elbows. Slowly lower the bar down until it is just an inch above your forehead.", 
            "The Extension: Using your triceps, forcefully extend your elbows to push the bar back up to the starting position."
        ] 
    },
    { 
        id: 28, name: "Triceps Dips", category: "strength", muscle: "triceps", equipment: "bodyweight", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Triceps-Dips.gif", 
        steps: [
            "Mounting: Jump up onto a set of parallel dip bars, supporting your entire body weight on your fully extended arms.", 
            "Posture: To target the triceps (rather than the chest), keep your torso as upright and vertical as possible. Keep your elbows tucked close to your body.", 
            "The Descent: Inhale and bend your elbows to lower your body straight down until your upper arms are parallel to the floor.", 
            "The Push: Exhale and press your body back up to the starting position by straightening your arms."
        ] 
    },

    // ================= CORE =================
    { 
        id: 31, name: "Plank", category: "strength", muscle: "core", equipment: "bodyweight", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Plank.gif", 
        steps: [
            "Positioning: Get face down on the floor. Prop yourself up on your forearms and your toes. Your elbows should be positioned directly underneath your shoulders.", 
            "Alignment: Ensure your body forms a perfectly straight, rigid line from your head down to your heels.", 
            "Engagement: Squeeze your glutes tightly, brace your abdominal muscles as if anticipating a punch, and press your forearms firmly into the floor.", 
            "The Hold: Maintain this position while breathing deeply and steadily for the prescribed amount of time."
        ] 
    },
    { 
        id: 32, name: "Cable Crunch", category: "strength", muscle: "core", equipment: "cables", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Cable-Crunch.gif", 
        steps: [
            "Setup: Attach a rope handle to a high cable pulley. Kneel down facing the machine and grab the rope, holding it securely next to your ears.", 
            "The Crunch: While keeping your hips relatively stationary, flex your spine and crunch your torso forward and downward. Aim to bring your elbows toward your knees.", 
            "The Contraction: Exhale forcefully at the bottom of the movement, squeezing your abs tightly.", 
            "The Release: Inhale and slowly return to the upright kneeling position, maintaining tension in the abdominal wall."
        ] 
    },
    { 
        id: 33, name: "Russian Twist", category: "strength", muscle: "core", equipment: "medicine ball", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Russian-Twist.gif", 
        steps: [
            "Starting Position: Sit on the floor. Lean your torso back slightly until you feel your abs engage. Bend your knees and lift your feet a few inches off the ground.", 
            "The Hold: Grasp a medicine ball with both hands and hold it directly in front of your chest.", 
            "The Twist: Rotate your torso fully to the right, tapping the medicine ball lightly on the floor beside your hip.", 
            "The Alternate: Immediately rotate your torso all the way to the left side and tap the ball on the floor. Continue alternating in a smooth, controlled rhythm."
        ] 
    },

    // ================= CALVES =================
    { 
        id: 36, name: "Standing Calf Raise", category: "strength", muscle: "calves", equipment: "bodyweight", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Standing-Calf-Raise.gif", 
        steps: [
            "Setup: Stand on the edge of an elevated platform or step. The balls of your feet should be on the edge, with your heels hanging off completely.", 
            "Balance: Hold onto a wall or sturdy object lightly with one hand to maintain your balance.", 
            "The Raise: Exhale and push forcefully through the balls of your feet, raising your heels as high up toward the ceiling as physically possible. Squeeze your calf muscles intensely.", 
            "The Stretch: Inhale and slowly lower your heels down past the level of the step until you feel a deep stretch in your calves."
        ] 
    },
    { 
        id: 37, name: "Barbell Calf Raise", category: "strength", muscle: "calves", equipment: "barbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Calf-Raise.gif", 
        steps: [
            "Positioning: Load a barbell on a squat rack and position it securely across your upper back.", 
            "Stance: Unrack the weight and stand tall with your feet about hip-width apart. Ensure your core is braced.", 
            "Execution: Push up onto your tiptoes, elevating your heels as high as possible off the floor.", 
            "Return: Lower your heels back to the floor in a slow, controlled manner."
        ] 
    },
    { 
        id: 40, name: "Seated Calf Raise", category: "strength", muscle: "calves", equipment: "machine", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Seated-Calf-Raise.gif", 
        steps: [
            "Setup: Sit on the seated calf raise machine. Place the balls of your feet on the platform and position the pads securely over your lower thighs.", 
            "Release: Push up slightly with your toes to disengage the safety lever.", 
            "The Stretch: Slowly lower your heels toward the floor as far as your ankle mobility physically allows.", 
            "The Contraction: Push powerfully upward through the balls of your feet, raising your heels as high as possible against the resistance."
        ] 
    },

    // ================= GLUTES =================
    { 
        id: 41, name: "Barbell Hip Thrust", category: "strength", muscle: "glutes", equipment: "barbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Hip-Thrust.gif", 
        steps: [
            "Setup: Sit on the floor with your shoulder blades resting against the edge of a flat weight bench. Roll a padded barbell directly over your hip crease.", 
            "Foot Placement: Plant your feet firmly on the floor, spaced shoulder-width apart. Your shins should be vertical when your hips are elevated.", 
            "The Thrust: Take a deep breath, brace your core, and drive through your heels to thrust your hips explosively toward the ceiling.", 
            "The Lockout: At the top of the movement, your body should form a straight line. Squeeze your glutes violently for a full second before lowering your hips back down."
        ] 
    },
    { 
        id: 42, name: "Glute Bridge", category: "strength", muscle: "glutes", equipment: "bodyweight", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Glute-Bridge.gif", 
        steps: [
            "Starting Position: Lie completely flat on your back. Bend your knees and place your feet flat on the floor, bringing your heels close to your glutes.", 
            "Arm Placement: Rest your arms straight down along your sides, palms pressing into the floor.", 
            "The Lift: Exhale and push firmly through your heels, lifting your hips high off the floor until your body forms a straight diagonal line.", 
            "The Hold: Squeeze your glutes tightly at the apex of the movement, hold for one second, and slowly lower your hips back to the mat."
        ] 
    },
    { 
        id: 43, name: "Cable Pull Through", category: "strength", muscle: "glutes", equipment: "cables", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Cable-Pull-Through.gif", 
        steps: [
            "Setup: Attach a tricep rope to the lowest setting of a cable machine. Stand facing away from the machine, straddling the cable.", 
            "Grip: Reach down and back between your legs to grasp the ends of the rope.", 
            "The Hinge: Keeping your back perfectly straight and a slight bend in your knees, hinge backward at the hips. Let the cable pull your hands backward until you feel a stretch.", 
            "The Extension: Squeeze your glutes and forcefully thrust your hips forward to stand completely upright."
        ] 
    },

    // ================= FOREARMS =================
    { 
        id: 46, name: "Barbell Wrist Curl", category: "strength", muscle: "forearms", equipment: "barbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Wrist-Curl.gif", 
        steps: [
            "Setup: Sit on the edge of a flat bench. Hold a barbell with an underhand (palms facing up) grip.", 
            "Positioning: Rest your forearms flat against your thighs, allowing your wrists to hang off the edge of your knees.", 
            "The Extension: Open your hands slightly and let the barbell roll down to the tips of your fingers to stretch the forearm muscles.", 
            "The Curl: Close your fingers around the bar and forcefully curl your wrists upward as high as they can go."
        ] 
    },
    { 
        id: 47, name: "Dumbbell Reverse Wrist Curl", category: "strength", muscle: "forearms", equipment: "dumbbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Reverse-Wrist-Curl.gif", 
        steps: [
            "Setup: Sit down on a flat bench. Hold a light dumbbell in each hand using an overhand (palms facing down) grip.", 
            "Positioning: Rest your forearms on your thighs so that your wrists and the dumbbells are hanging over the edge of your knees.", 
            "The Movement: Keeping your forearms pressed against your legs, curl your wrists upward, bringing the back of your hands closer to your body.", 
            "The Return: Slowly and carefully lower the dumbbells back down until you feel a gentle stretch in the top of your forearms."
        ] 
    },
    { 
        id: 48, name: "EZ Bar Reverse Curl", category: "strength", muscle: "forearms", equipment: "ez bar", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/EZ-Bar-Reverse-Curl.gif", 
        steps: [
            "Stance: Stand perfectly straight with your feet shoulder-width apart.", 
            "Grip: Hold an EZ curl bar in front of your thighs using a pronated (overhand, palms facing down) grip.", 
            "The Execution: Pin your elbows to your ribcage. Keeping your upper arms totally still, bend at the elbows to curl the bar upwards in a semicircular motion.", 
            "The Eccentric: Lower the bar very slowly back to the starting position."
        ] 
    },

    // ================= NEW CARDIO WORKOUTS (20) =================
    { 
        id: 101, name: "Burpee Long Jump", category: "cardio", muscle: "cardio", equipment: "bodyweight", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Burpee-Long-Jump.gif", 
        steps: [
            "The Drop: Start in a standing position. Drop your hips and place your hands firmly on the ground in front of your feet.",
            "The Push-up: Kick your legs back into a high plank position. Perform a strict push-up by lowering your chest to the floor and pushing back up.",
            "The Leap: Quickly hop your feet back to your hands. Instead of jumping vertically, swing your arms and leap forward as far as you can like a broad jump.",
            "The Landing: Land softly on the balls of your feet, immediately absorbing the impact by dropping back down into the next burpee."
        ] 
    },
    { 
        id: 102, name: "Navy Seal Burpee", category: "cardio", muscle: "cardio", equipment: "bodyweight", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2022/02/Navy-Seal-Burpee.gif", 
        steps: [
            "Initial Sprawl: Drop your hands to the floor and kick your feet back into a plank position.",
            "Push-up 1: Perform one strict push-up. At the top of the plank, drive your right knee aggressively to your chest and back.",
            "Push-up 2: Perform a second strict push-up. At the top of the plank, drive your left knee aggressively to your chest and back.",
            "Push-up 3 & Jump: Perform a third push-up, jump your feet forward to your hands, and explode vertically into the air with a jump."
        ] 
    },
    { 
        id: 103, name: "Bear Crawl", category: "cardio", muscle: "cardio", equipment: "bodyweight", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Bear-Crawl.gif", 
        steps: [
            "Starting Position: Get down on all fours in a tabletop position. Your hands should be flat directly under your shoulders.",
            "The Hover: Tuck your toes under and lift your knees just one or two inches hovering off the ground. Your back must remain absolutely flat, like a table.",
            "The Crawl: Move forward by simultaneously stepping your right hand and your left foot forward in a small, controlled stride.",
            "Continuous Motion: Immediately follow by moving your left hand and right foot forward. Continue this contralateral crawling motion without letting your knees touch the floor."
        ] 
    },
    { 
        id: 104, name: "Power Lunge", category: "cardio", muscle: "cardio", equipment: "bodyweight", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/05/Power-Lunge.gif", 
        steps: [
            "The Setup: Begin in a standard lunge position, with your right foot forward and left foot back. Both knees should be bent at 90-degree angles.",
            "The Load: Lower your hips slightly to build potential energy, keeping your chest upright and core tight.",
            "The Explosion: Drive explosively through the heel of your front foot and the toes of your back foot to launch your entire body vertically into the air.",
            "The Switch: While suspended in the air, quickly scissor your legs to switch their positions. Land softly back into the lunge position and immediately repeat."
        ] 
    },
    { 
        id: 105, name: "Running", category: "cardio", muscle: "cardio", equipment: "bodyweight", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/04/Running.gif", 
        steps: [
            "Posture: Maintain a tall, upright posture with a very slight forward lean from the ankles, not the waist. Keep your shoulders relaxed and chest open.",
            "Foot Strike: Focus on landing softly on your mid-foot, directly underneath your center of gravity. Avoid over-striding and heavy heel striking.",
            "Arm Swing: Bend your elbows at approximately 90 degrees. Swing your arms straight forward and back in rhythm with your legs, without crossing your body's centerline.",
            "Cadence: Maintain a steady, efficient turnover rate (cadence). Focus on a consistent breathing pattern to build cardiovascular endurance."
        ] 
    },
    { 
        id: 106, name: "Sprint", category: "cardio", muscle: "cardio", equipment: "bodyweight", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Sprint.gif", 
        steps: [
            "The Acceleration: Lean your body forward and push off the ground with maximum explosive force from the balls of your feet.",
            "Knee Drive: Aggressively drive your knees upward and forward with each stride to maximize power and speed.",
            "Arm Mechanics: Pump your arms violently. Your hands should travel from your 'cheek to your cheek' (face cheek to butt cheek) in a rapid, straight line.",
            "Max Effort: Maintain 100% maximum effort for short bursts (e.g., 10-20 seconds), focusing on speed rather than pacing."
        ] 
    },
    { 
        id: 107, name: "Jump Rope", category: "cardio", muscle: "cardio", equipment: "bodyweight", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Jump-Rope.gif", 
        steps: [
            "Setup: Hold the jump rope handles with your hands positioned slightly forward of your hips. Keep your elbows tucked strictly against your ribs.",
            "The Rotation: The rope should be turned using quick, small circular motions from your wrists only. Do not swing your entire arms.",
            "The Jump: Push off the balls of your feet to jump just an inch or two into the air—only high enough to let the rope pass underneath.",
            "Rhythm: Land softly on the balls of your feet with a micro-bend in your knees to absorb impact. Maintain a rapid, consistent bouncing rhythm."
        ] 
    },
    { 
        id: 108, name: "Stationary Bike", category: "cardio", muscle: "cardio", equipment: "machine", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Stationary-Bike.gif", 
        steps: [
            "Adjustment: Adjust the saddle height so that your leg has a slight 5-to-10-degree bend at the lowest point of the pedal stroke. Ensure the handlebars are at a comfortable distance.",
            "Posture: Sit on the saddle and grip the handlebars. Keep your spine relatively straight and avoid excessively rounding your upper back.",
            "Pedaling Technique: Push down forcefully through the ball of your foot on the downward stroke, and actively pull up slightly on the upward stroke for maximum efficiency.",
            "Pacing & Resistance: Maintain a high, steady cadence (RPM). Adjust the machine's resistance to simulate climbing hills or sprinting on flat roads."
        ] 
    },
    { 
        id: 109, name: "Treadmill", category: "cardio", muscle: "cardio", equipment: "machine", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Treadmill.gif", 
        steps: [
            "Setup: Stand on the side rails. Select your desired speed and incline on the console. Once the belt is moving steadily, carefully step onto the center of the belt.",
            "Form: Stand tall with your chest open. Avoid leaning heavily on the handrails; your arms should swing naturally by your sides.",
            "Execution: Walk or run at a steady pace. Keep your gaze forward to maintain balance and proper neck alignment.",
            "Cool Down: Maintain your pace for the duration of the session, then gradually decrease the speed to a slow walk to safely cool down before stepping off."
        ] 
    },
    { 
        id: 110, name: "Walk Wave Machine", category: "cardio", muscle: "cardio", equipment: "machine", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/06/Walk-Wave-Machine.gif", 
        steps: [
            "Mounting: Carefully step onto the foot pedals of the wave/arc machine. Grip the stationary or moving handles to secure your balance.",
            "The Motion: Begin shifting your weight from side to side in a smooth, wave-like, or arc trajectory. Push down firmly through your entire foot.",
            "Core Engagement: Keep your core tight and your torso upright to stabilize your body against the lateral/diagonal forces of the machine.",
            "Pacing: Establish a rhythmic, continuous sweeping motion. Adjust the resistance and stride rate according to your cardiovascular goals."
        ] 
    },
    { 
        id: 111, name: "Rowing Machine", category: "cardio", muscle: "cardio", equipment: "machine", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Rowing-Machine.gif", 
        steps: [
            "The Catch: Sit on the ergometer and secure your feet in the straps. Slide forward, bend your knees, and grab the handle. Your shins should be vertical, chest proud, and back flat.",
            "The Drive: Initiate the power stroke strictly by driving your legs aggressively into the footplates. Keep your arms straight as you push your body backward.",
            "The Finish: As your legs reach full extension, lean your torso slightly back and forcefully pull the handle straight into your lower rib cage.",
            "The Recovery: Extend your arms forward first, then hinge your torso forward from the hips, and finally bend your knees to let the seat slide smoothly back to the catch position."
        ] 
    },
    { 
        id: 112, name: "Stair Climber Machine", category: "cardio", muscle: "cardio", equipment: "machine", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Stair-Climber.gif", 
        steps: [
            "Setup: Step onto the revolving staircase. Set a moderate, sustainable speed on the console. Lightly rest your fingertips on the side rails strictly for balance.",
            "Posture Warning: Stand totally upright. Do not hunch over or rest your body weight heavily on the console, as this reduces caloric burn and stresses the lower back.",
            "The Step: Place your entire foot onto each step, rather than just the balls of your feet. This fully activates the glutes and hamstrings.",
            "Execution: Push firmly down through your heel to step up. Maintain a steady, continuous rhythm without skipping steps."
        ] 
    },
    { 
        id: 113, name: "Elliptical Machine", category: "cardio", muscle: "cardio", equipment: "machine", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Elliptical-Machine.gif", 
        steps: [
            "Setup: Step safely onto the foot pedals and grab the moving handrails. Select your desired resistance and incline profile.",
            "Posture: Stand tall with a straight spine, keeping your head up and core lightly engaged. Do not slouch over the console.",
            "The Motion: Begin pedaling in a smooth, forward, elliptical motion. Push down and forward evenly through your entire foot.",
            "Total Body Sync: Push and pull the handrails in synchronized rhythm with your leg movements, utilizing equal effort from your upper and lower body."
        ] 
    },
    { 
        id: 114, name: "Mountain Climber", category: "cardio", muscle: "cardio", equipment: "bodyweight", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Mountain-Climber.gif", 
        steps: [
            "Starting Stance: Get into a strict, high push-up position. Your hands should be planted firmly directly underneath your shoulders. Your body must form a straight line.",
            "The Drive: Engage your abdominal muscles intensely. Quickly lift your right foot off the floor and drive your right knee forcefully straight up toward the center of your chest.",
            "The Switch: As you kick your right foot back to the starting position, simultaneously jump your left knee up toward your chest in a seamless exchange.",
            "The Pace: Continue alternating legs in a rapid, running-like motion. Keep your hips locked down parallel to the floor; do not let your glutes bounce high."
        ] 
    },
    { 
        id: 115, name: "Power Skips", category: "cardio", muscle: "cardio", equipment: "bodyweight", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2022/02/Power-Skips.gif", 
        steps: [
            "The Load: Stand tall and step forward slightly with your right foot. Bend your knees slightly to load the jump.",
            "The Explosion: Drive your left knee forcefully upward toward your chest while simultaneously jumping as high as possible off your right foot.",
            "Arm Action: Throw your right arm aggressively upward in synchronization with your left knee to maximize vertical lift.",
            "The Landing: Land softly on the ball of your right foot, immediately step forward with your left foot, and seamlessly transition into the next power skip on the opposite side."
        ] 
    },
    { 
        id: 116, name: "Bicycle Crunch", category: "cardio", muscle: "cardio", equipment: "bodyweight", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Bicycle-Crunch.gif", 
        steps: [
            "Setup: Lie flat on your back on a mat. Place your hands lightly behind your head without pulling on your neck. Lift both legs so your knees are bent at 90 degrees.",
            "The Twist: Crunch your torso upward and forcefully twist to the right, bringing your left elbow across your body to meet your right knee.",
            "The Extension: Simultaneously extend your left leg completely straight out, hovering it just a few inches above the floor.",
            "The Alternate: Immediately reverse the motion, twisting your right elbow to meet your left knee while fully extending your right leg. Continue in a fluid, pedaling rhythm."
        ] 
    },
    { 
        id: 117, name: "Butt Kicks", category: "cardio", muscle: "cardio", equipment: "bodyweight", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/04/Butt-Kicks.gif", 
        steps: [
            "Posture: Stand tall with your feet hip-width apart. Keep your chest up, core braced, and look straight ahead.",
            "The Motion: Begin jogging in place. Instead of lifting your knees high, rapidly kick your heels backward and upward toward your glutes.",
            "The Target: Aim to actually tap your glutes with your heels on every single stride.",
            "Pacing: Pump your arms naturally as you would when running, and maintain a very fast, rapid-fire pace on the balls of your feet."
        ] 
    },
    { 
        id: 118, name: "Plyo Jacks", category: "cardio", muscle: "cardio", equipment: "bodyweight", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/05/Plyo-Jacks.gif", 
        steps: [
            "Starting Stance: Begin standing tall with your feet together and your arms down by your sides.",
            "The Drop: Quickly jump your feet out wide while simultaneously dropping your hips deep into a wide squat position.",
            "The Reach: As you drop into the squat, swing your arms straight up and overhead until your hands meet.",
            "The Explosion: Explosively push through the floor to jump back up, bringing your feet together and returning your arms to your sides before immediately dropping back into the squat."
        ] 
    },
    { 
        id: 119, name: "Jumping Jack", category: "cardio", muscle: "cardio", equipment: "bodyweight", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Jumping-jacks.gif", 
        steps: [
            "Starting Position: Stand completely upright with your legs together, knees slightly bent, and your arms resting relaxed down by your sides.",
            "The Jump Out: In one synchronized, explosive motion, jump slightly into the air while simultaneously spreading your legs out slightly wider than shoulder-width.",
            "The Arm Sweep: As you jump your legs out, sweep both of your arms out to the sides and up in a wide arc until your hands touch above your head.",
            "The Return: Immediately reverse the motion by jumping again, bringing your feet back together and sweeping your arms back down to your sides."
        ] 
    },
    { 
        id: 120, name: "High Knee Skips", category: "cardio", muscle: "cardio", equipment: "bodyweight", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/05/High-Knee-Skips.gif", 
        steps: [
            "The Motion: Begin a skipping motion moving forward or in place. Emphasize vertical height and knee drive rather than forward distance.",
            "The Drive: On each skip, aggressively drive your lead knee straight up into the air, aiming to bring it above your waistline.",
            "Arm Action: Pump your opposite arm forward vigorously to generate upward momentum and maintain balance.",
            "Rhythm: Land softly on the ball of the foot and immediately use that elastic energy to transition smoothly into the high knee skip on the opposite leg."
        ] 
    }
];