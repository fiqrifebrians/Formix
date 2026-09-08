const muscles = [
    { id: "chest", name: "Chest" },
    { id: "back", name: "Back" },
    { id: "legs", name: "Legs" }, // Quads dan Hamstrings digabung di sini
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
    // ================= CHEST =================
    { 
        id: 1, name: "Barbell Bench Press", category: "strength", muscle: "chest", equipment: "barbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Bench-Press.gif", 
        steps: [
            "Positioning: Lie completely flat on the bench. Ensure your feet are planted firmly on the ground, creating a stable base. Retract your scapula (pinch your shoulder blades together) to protect your rotator cuffs and push your chest up.", 
            "The Grip: Reach up and grip the bar with your hands placed slightly wider than shoulder-width apart. Wrap your thumbs fully around the bar for safety.", 
            "The Descent: Unrack the bar by straightening your arms. Inhale deeply, brace your core, and lower the barbell slowly until it lightly touches your mid-chest area. Keep your elbows tucked at about a 45-degree angle.", 
            "The Press: Exhale forcefully and drive the barbell back up to the starting position in a slight arc toward your upper chest. Fully extend your arms."
        ] 
    },
    { 
        id: 2, name: "Push-Up", category: "strength", muscle: "chest", equipment: "bodyweight", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Push-Up.gif", 
        steps: [
            "Starting Stance: Begin face down on the floor in a high plank position. Place your palms firmly on the ground, spaced just slightly wider than your shoulders.", 
            "Body Alignment: Engage your abdominal muscles deeply, squeeze your glutes, and ensure your body forms a perfectly straight, rigid line from your head down to your heels.", 
            "Lowering Phase: Take a deep breath in and slowly lower your entire body by bending your elbows. Keep your elbows tracking backward at roughly a 45-degree angle.", 
            "Pushing Phase: Exhale and press your hands firmly and evenly into the floor. Drive your body back up to the starting position in one fluid motion."
        ] 
    },
    { 
        id: 3, name: "Dumbbell Fly", category: "strength", muscle: "chest", equipment: "dumbbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Fly.gif", 
        steps: [
            "Setup: Grab a pair of moderately weighted dumbbells and lie completely flat on your back on a weight bench. Press the dumbbells straight up directly over your chest, palms facing each other.", 
            "Arm Position: Establish a slight, fixed bend in your elbows. It is critical to maintain this exact angle throughout the entire movement.", 
            "The Stretch: Inhale and slowly lower the dumbbells out to your sides in a wide, sweeping arc until you feel a deep stretch across your pectoral muscles.", 
            "The Contraction: Exhale and reverse the motion, using your chest muscles to pull the dumbbells back together at the top."
        ] 
    },
    { 
        id: 4, name: "Cable Crossover", category: "strength", muscle: "chest", equipment: "cables", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Cable-Crossover.gif", 
        steps: [
            "Preparation: Stand exactly in the center of a dual cable crossover machine. Set both pulleys to the highest position and grasp a single-hand D-handle attachment in each hand.", 
            "Posture: Take one large step forward with either foot to stagger your stance for superior balance. Lean your torso slightly forward and brace your abdominal muscles.", 
            "The Movement: With a slight bend locked into your elbows, pull the handles forward and downward in a wide, sweeping motion until your hands meet or cross over each other.", 
            "Return: Slowly allow the resistance of the cables to pull your arms back up and out to the starting position."
        ] 
    },

    // ================= BACK =================
    { 
        id: 6, name: "Pull-Up", category: "strength", muscle: "back", equipment: "bodyweight", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Pull-up.gif", 
        steps: [
            "The Grip: Stand directly beneath a secure pull-up bar. Reach up to grasp the bar with an overhand, pronated grip. Your hands should be wider than your shoulders.", 
            "The Hang: Allow your body to hang freely. Cross your ankles behind you, squeeze your glutes, and engage your core heavily to prevent swinging.", 
            "The Pull: Initiate the movement strictly by depressing your scapula. Drive your elbows straight down toward the floor to pull your body upward until your chin clears the bar.", 
            "The Descent: Lower yourself back down to the starting position in a slow, highly controlled manner until your arms are fully extended."
        ] 
    },
    { 
        id: 7, name: "Barbell Row", category: "strength", muscle: "back", equipment: "barbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Row.gif", 
        steps: [
            "Starting Position: Stand with your mid-foot under the barbell. Push your hips back and hinge forward until your torso is roughly a 45-degree angle to the floor. Keep your back flat.", 
            "The Grip: Reach down and grab the barbell with an overhand grip, hands slightly wider than shoulder-width.", 
            "The Row: Take a deep breath, brace your core, and pull the barbell aggressively toward your lower rib cage or belly button. Squeeze your shoulder blades together at the top.", 
            "The Return: Slowly lower the barbell back down toward the floor until your arms are fully straight and you feel a deep stretch in your lats."
        ] 
    },
    { 
        id: 8, name: "Dumbbell Row", category: "strength", muscle: "back", equipment: "dumbbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Row.gif", 
        steps: [
            "Setup: Place your right knee securely on the lower half of a bench and your right hand firmly on the upper half. Your torso should be flat and nearly parallel to the floor.", 
            "Grip: Pick up a moderately heavy dumbbell with your left hand. Let it hang straight down toward the floor.", 
            "The Pull: Pull your shoulder blade back, then drive your elbow straight up toward the ceiling. Keep your arm tucked in closely against your ribcage.", 
            "The Squeeze: Pause for a distinct one-second count at the top of the movement, squeezing your lat muscle intensely. Slowly lower the dumbbell back down."
        ] 
    },
    { 
        id: 9, name: "Lat Pulldown", category: "strength", muscle: "back", equipment: "machine", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Lat-Pulldown.gif", 
        steps: [
            "Adjustment: Sit down at the lat pulldown machine station. Carefully adjust the knee pad height so it fits very snugly over your upper thighs.", 
            "Grip: Stand up slightly to reach the wide attachment bar. Grasp it with an overhand grip, placing your hands significantly wider than your shoulders.", 
            "Execution: Lean your torso slightly back and puff your chest up. Engage your lats and pull the bar straight down toward your upper chest.", 
            "Release: Control the weight stack as you allow the bar to slowly return to the top position until your arms are fully extended."
        ] 
    },

    // ================= LEGS (QUADS & HAMSTRINGS COMBINED) =================
    { 
        id: 11, name: "Barbell Squat", category: "strength", muscle: "legs", equipment: "barbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Squat.gif", 
        steps: [
            "Setup: Position the barbell securely across the meaty part of your upper traps. Grip the bar tightly, unrack it, and take one or two deliberate steps backward.", 
            "Stance: Set your feet roughly shoulder-width apart, toes pointing slightly outward. Keep your chest up proudly and brace your core.", 
            "The Descent: Begin the squat by pushing your hips backward while simultaneously bending your knees. Lower yourself until your hip crease is at or below the level of your knees.", 
            "The Ascent: Drive forcefully through the middle of your feet and your heels, pushing the floor away to stand back up to the starting position."
        ] 
    },
    { 
        id: 12, name: "Leg Extension (Quads Focus)", category: "strength", muscle: "legs", equipment: "machine", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Leg-Extension.gif", 
        steps: [
            "Adjustment: Sit on the leg extension machine. Adjust the backrest so the back of your knees fits snugly against the seat. Adjust the lower pad to rest directly on your lower shins.", 
            "Grip and Posture: Grip the handles firmly on the sides of the seat to anchor your upper body down. Keep your chest up and back flat.", 
            "The Extension: Using strictly your quadriceps, extend your legs smoothly to push the roller pad upward until your legs are fully extended.", 
            "The Squeeze: Hold the fully extended position for a sharp, one-second count, squeezing your quads intensely. Slowly lower the weight back down."
        ] 
    },
    { 
        id: 13, name: "Lying Leg Curl (Hamstring Focus)", category: "strength", muscle: "legs", equipment: "machine", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Lying-Leg-Curl.gif", 
        steps: [
            "Adjustment: Adjust the machine lever to fit your height and lie face down on the leg curl machine with the pad resting just above your heels.", 
            "Posture: Keep your torso flat on the bench. Ensure your legs are fully stretched and grab the side handles of the machine.", 
            "The Curl: Exhale and curl your legs up as far as possible without lifting your upper legs from the pad. Focus heavily on contracting the hamstrings.", 
            "The Return: Squeeze for a second at the top, then inhale as you slowly lower your legs back to the starting position."
        ] 
    },
    { 
        id: 14, name: "Romanian Deadlift", category: "strength", muscle: "legs", equipment: "barbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Romanian-Deadlift.gif", 
        steps: [
            "Setup: Stand tall holding a barbell in front of your thighs with an overhand grip. Keep your feet hip-width apart and your chest proud.", 
            "The Hinge: Maintain a slight, permanent micro-bend in your knees. Push your hips and glutes backward as far as they will go to stretch the hamstrings.", 
            "The Stretch: Keep the barbell in constant contact with your legs, sliding it down your thighs. Lower the bar until you feel an intense stretch in your hamstrings. Your back must remain absolutely flat.", 
            "The Lockout: Squeeze your glutes and push your hips forward to reverse the motion, pulling your torso back to the upright standing position."
        ] 
    },
    { 
        id: 15, name: "Dumbbell Lunges", category: "strength", muscle: "legs", equipment: "dumbbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Lunge.gif", 
        steps: [
            "Starting Position: Stand completely upright, holding a heavy dumbbell in each hand directly at your sides. Pull your shoulders back and look straight ahead.", 
            "The Step: Take an exaggerated step forward with your right leg. Plant your right foot firmly and flatly onto the floor.", 
            "The Lunge: Drop your hips vertically straight down. Both of your knees should bend to form 90-degree angles. Ensure your front knee does not collapse inward.", 
            "The Push-Off: Push forcefully off your front right foot to propel yourself backward, returning to the starting position. Alternate legs."
        ] 
    },

    // ================= SHOULDERS =================
    { 
        id: 16, name: "Overhead Press", category: "strength", muscle: "shoulders", equipment: "barbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Overhead-Press.gif", 
        steps: [
            "Setup: Position a barbell on a squat rack at upper-chest height. Grip the bar slightly wider than your shoulders. Unrack the bar so it rests across your collarbones.", 
            "Stance: Stand with your feet hip-width apart. Squeeze your glutes tightly and brace your core to create a rigid column of support.", 
            "The Press: Take a deep breath and press the bar forcefully straight up overhead. Push your head forward slightly back through the 'window' of your arms at the top.", 
            "The Lockout: Fully extend your arms until your elbows are locked out directly over your mid-foot. Lower the bar under strict control back down."
        ] 
    },
    { 
        id: 17, name: "Lateral Raise", category: "strength", muscle: "shoulders", equipment: "dumbbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Lateral-Raise.gif", 
        steps: [
            "Starting Position: Stand upright holding a relatively light pair of dumbbells in each hand at your sides.", 
            "Arm Geometry: Establish a very slight, locked bend in your elbows. Lean your torso forward just a fraction of an inch to optimally target the lateral deltoid.", 
            "The Raise: Using strictly your shoulder muscles, raise the dumbbells out to your sides until your upper arms are exactly parallel to the floor.", 
            "The Peak: At the top of the movement, slowly resist gravity to lower the dumbbells back down."
        ] 
    },
    { 
        id: 18, name: "Face Pull", category: "strength", muscle: "shoulders", equipment: "cables", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Face-Pull.gif", 
        steps: [
            "Setup: Attach a dual-handle tricep rope to a cable pulley set at upper-chest or face height. Grab the ends of the rope from underneath so your thumbs point backward.", 
            "Stance: Step back from the machine until the cable is completely taut. Stand with a staggered stance to establish a solid base of balance.", 
            "The Pull: Retract your shoulder blades and pull the rope directly toward the bridge of your nose. Actively separate your hands, flaring your elbows out high and wide.", 
            "The Squeeze: Pinch your rear deltoids and upper back muscles intensely for a full second at the peak of the contraction before returning."
        ] 
    },
    { 
        id: 19, name: "Machine Shoulder Press", category: "strength", muscle: "shoulders", equipment: "machine", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Machine-Shoulder-Press.gif", 
        steps: [
            "Adjustment: Sit down in the shoulder press machine. Carefully adjust the seat height so that the horizontal handles align perfectly with the tops of your shoulders.", 
            "Grip: Press your lower back and shoulder blades firmly against the back pad. Grasp the handles with a comfortable overhand grip.", 
            "Execution: Take a breath, brace your core, and push the handles smoothly upward until your arms are fully extended overhead.", 
            "Release: Inhale and lower the handles back down under strict control, stopping just before the weight stack touches down."
        ] 
    },

    // ================= BICEPS =================
    { 
        id: 21, name: "Barbell Curl", category: "strength", muscle: "biceps", equipment: "barbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Curl.gif", 
        steps: [
            "Stance & Grip: Stand straight with your feet shoulder-width apart. Reach down and hold a barbell with an underhand grip, hands spaced at shoulder-width.", 
            "Positioning: Pin your elbows tightly against your ribcage. It is crucial that your elbows remain completely stationary throughout the entire exercise.", 
            "The Curl: Exhale and contract your biceps to curl the barbell upwards in a smooth, semicircular arc. Keep your torso rigidly still. Curl until the bar reaches shoulder level.", 
            "The Lowering: Squeeze the biceps at the top, then inhale as you slowly reverse the motion until your arms are 100% fully extended."
        ] 
    },
    { 
        id: 22, name: "Dumbbell Bicep Curl", category: "strength", muscle: "biceps", equipment: "dumbbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Curl.gif", 
        steps: [
            "Starting Position: Stand perfectly tall, holding a dumbbell in each hand down by your sides. Rotate your wrists outward so that your palms are facing straight forward.", 
            "Execution: While keeping your upper arms glued to your sides and totally stationary, exhale and curl both weights up toward the front of your shoulders simultaneously.", 
            "The Squeeze: At the very top of the movement, pause for a distinct one-second count and consciously contract your biceps as hard as you can.", 
            "The Descent: Inhale and slowly lower the dumbbells back down to the starting position."
        ] 
    },
    { 
        id: 23, name: "EZ Bar Preacher Curl", category: "strength", muscle: "biceps", equipment: "ez bar", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/EZ-Bar-Preacher-Curl.gif", 
        steps: [
            "Setup: Sit at a preacher curl bench. Position the entire back of your upper arms flat against the angled pad. Grasp an EZ curl bar using the inner, angled grips.", 
            "The Contraction: With your arms fully supported by the pad, curl the bar upward in a smooth, controlled arc toward your chin.", 
            "The Squeeze: Do not let the bar rest at the top or let your forearms go completely vertical. Stop just short of vertical and squeeze your biceps tightly.", 
            "The Extension: Lower the bar very slowly and carefully until your arms are almost fully extended to protect the elbow joint."
        ] 
    },

    // ================= TRICEPS =================
    { 
        id: 26, name: "Tricep Pushdown", category: "strength", muscle: "triceps", equipment: "cables", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Triceps-Pushdown.gif", 
        steps: [
            "Setup: Attach a straight bar or rope to a high pulley on a cable machine. Grab the attachment tightly with an overhand grip.", 
            "Posture: Stand very close to the cable, lean your torso slightly forward, and lock your elbows firmly against your ribs.", 
            "The Push: Using exclusively the power of your triceps, push the attachment straight down toward the front of your thighs until your arms are entirely straight and your elbows are fully locked out.", 
            "The Return: Squeeze the triceps at the bottom, then slowly control the weight as the attachment comes back up to upper-chest level."
        ] 
    },
    { 
        id: 27, name: "EZ Bar Skullcrusher", category: "strength", muscle: "triceps", equipment: "ez bar", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/EZ-Bar-Skullcrusher.gif", 
        steps: [
            "Setup: Lie completely flat on a weight bench. Hold an EZ curl bar with an overhand, narrow grip directly above your chest, with your arms fully extended.", 
            "The Drop: Shift your arms back slightly so they are at a 15-degree angle. Bending only at your elbows, slowly lower the bar down until it hovers just an inch above your forehead.", 
            "The Extension: Using intense triceps contraction, forcefully extend your elbows to push the bar back up along the same arc to the angled starting position."
        ] 
    },
    { 
        id: 28, name: "Triceps Dips", category: "strength", muscle: "triceps", equipment: "bodyweight", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Triceps-Dips.gif", 
        steps: [
            "Mounting: Jump up onto a set of parallel dip bars, supporting your entire body weight on your fully extended arms with a neutral grip.", 
            "Posture: To isolate the triceps, keep your torso as upright and completely vertical to the floor as possible. Actively tuck your elbows in close to your body.", 
            "The Descent: Inhale and bend your elbows to lower your body straight down vertically until your upper arms are perfectly parallel to the floor.", 
            "The Push: Exhale and press your body weight back up to the starting position by forcefully straightening your arms and flexing the triceps at the lockout."
        ] 
    },

    // ================= CORE =================
    { 
        id: 31, name: "Plank", category: "strength", muscle: "core", equipment: "bodyweight", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Plank.gif", 
        steps: [
            "Positioning: Get face down on the floor. Prop yourself up on your forearms and the tips of your toes. Your elbows must be positioned directly underneath your shoulders.", 
            "Alignment: Look straight down. Ensure your body forms a perfectly straight, rigid line from the back of your head down to your heels.", 
            "Engagement: Squeeze your glutes as tightly as possible, brace your abdominal muscles fiercely, and actively press your forearms firmly into the floor.", 
            "The Hold: Maintain this high-tension, static position while remembering to breathe deeply and steadily for the entire prescribed duration."
        ] 
    },
    { 
        id: 32, name: "Cable Crunch", category: "strength", muscle: "core", equipment: "cables", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Cable-Crunch.gif", 
        steps: [
            "Setup: Attach a double-ended rope handle to a high cable pulley. Kneel down facing the machine and hold the ends securely right next to your ears.", 
            "The Crunch: While keeping your hips relatively stationary, contract your abdominals to heavily flex your spine. Crunch your torso forward and downward, aiming to bring your elbows toward your knees.", 
            "The Contraction: Exhale forcefully at the very bottom of the movement, squeezing your abs as tightly as possible for a full second.", 
            "The Release: Inhale and slowly return to the upright kneeling position, fighting the weight stack the entire way up."
        ] 
    },
    { 
        id: 34, name: "Hanging Leg Raise", category: "strength", muscle: "core", equipment: "bodyweight", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Hanging-Leg-Raise.gif", 
        steps: [
            "The Hang: Jump up and grasp a pull-up bar with a shoulder-width, overhand grip. Let your body hang completely still with your legs pointing straight down.", 
            "The Lift: Exhale sharply and engage your lower abdominals. Keeping your legs straight, lift them straight up in front of you until they form a 90-degree angle with your torso.", 
            "Control: It is absolutely critical not to use momentum or let your body swing back and forth.", 
            "The Lowering: Inhale and lower your legs back down to the dead-hang position as slowly and steadily as possible."
        ] 
    },

    // ================= CALVES =================
    { 
        id: 36, name: "Standing Calf Raise", category: "strength", muscle: "calves", equipment: "bodyweight", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Standing-Calf-Raise.gif", 
        steps: [
            "Setup: Stand on the rigid edge of an elevated platform. Position the balls of your feet firmly on the edge, allowing your heels to hang completely off into the air.", 
            "Balance: Hold onto a nearby wall or sturdy object lightly with one hand simply to maintain your upright balance.", 
            "The Raise: Exhale and push forcefully through the balls of your feet, flexing your ankles to raise your heels as high up toward the ceiling as physically possible.", 
            "The Stretch: Inhale and slowly lower your heels down past the level of the step until you feel a deep, burning stretch in your Achilles tendon."
        ] 
    },
    { 
        id: 37, name: "Barbell Calf Raise", category: "strength", muscle: "calves", equipment: "barbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Calf-Raise.gif", 
        steps: [
            "Positioning: Load a barbell on a squat rack. Position it securely across your upper back/trapezius muscles.", 
            "Stance: Unrack the heavy weight, step back, and stand perfectly tall with your feet placed about hip-width apart. Brace your core.", 
            "Execution: Push straight up onto your tiptoes, powerfully elevating your heels as high as possible off the floor while keeping your knees straight but unlocked.", 
            "Return: Lower your heels back to the floor in a slow, controlled cadence."
        ] 
    },
    { 
        id: 40, name: "Seated Calf Raise", category: "strength", muscle: "calves", equipment: "machine", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Seated-Calf-Raise.gif", 
        steps: [
            "Setup: Sit upright on the seated calf raise machine. Place the balls of your feet on the lower foot platform and position the weighted pads securely over your lower thighs.", 
            "Release: Push up slightly with your toes to lift the weight block and disengage the safety lever.", 
            "The Stretch: Slowly and deliberately lower your heels down toward the floor as far as your ankle mobility physically allows.", 
            "The Contraction: Push powerfully upward through the balls of your feet, raising your heels as high as possible against the resistance."
        ] 
    },

    // ================= GLUTES =================
    { 
        id: 41, name: "Barbell Hip Thrust", category: "strength", muscle: "glutes", equipment: "barbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Hip-Thrust.gif", 
        steps: [
            "Setup: Sit flat on the floor with your shoulder blades resting against the edge of a sturdy bench. Roll a heavily padded barbell directly over your legs into your hip crease.", 
            "Foot Placement: Plant your feet firmly on the floor, shoulder-width apart. Your shins should be completely vertical when your hips are fully elevated.", 
            "The Thrust: Take a deep breath, brace your core, and drive aggressively through your heels. Thrust your hips explosively toward the ceiling.", 
            "The Lockout: At the top of the movement, your torso and thighs should form a straight line. Squeeze your glutes violently for a full second before lowering."
        ] 
    },
    { 
        id: 43, name: "Cable Pull Through", category: "strength", muscle: "glutes", equipment: "cables", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Cable-Pull-Through.gif", 
        steps: [
            "Setup: Attach a tricep rope handle to the lowest setting of a cable pulley machine. Stand with your back facing the machine, straddling the cable.", 
            "Grip: Reach down and backward between your legs to firmly grasp the ends of the rope handle with both hands.", 
            "The Hinge: Keeping your back perfectly straight, hinge backward deeply at the hips. Let the cable pull your hands backward through your legs until you feel an intense stretch in your hamstrings and glutes.", 
            "The Extension: Squeeze your glutes and forcefully thrust your hips forward to stand completely upright."
        ] 
    },
    { 
        id: 45, name: "Resistance Band Glute Kickback", category: "strength", muscle: "glutes", equipment: "resistance band", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Resistance-Band-Glute-Kickback.gif", 
        steps: [
            "Positioning: Get down on the floor on all fours in a tabletop position. Loop a small, heavy-duty resistance band securely around the arches of your feet.", 
            "Stability: Place your hands flat under your shoulders. Keep your back completely flat and brace your core tightly.", 
            "The Kick: Keeping your working knee bent at a 90-degree angle, aggressively kick one leg backward and upwards toward the ceiling.", 
            "The Contraction: Push strongly against the band's resistance until your glute muscle is fully contracted, hold for a split second, and slowly return."
        ] 
    },

    // ================= FOREARMS =================
    { 
        id: 46, name: "Barbell Wrist Curl", category: "strength", muscle: "forearms", equipment: "barbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Wrist-Curl.gif", 
        steps: [
            "Setup: Sit on the edge of a flat weight bench. Hold a light to moderate barbell with an underhand (palms facing up) grip.", 
            "Positioning: Lean forward and rest your forearms completely flat against the top of your thighs. Allow your wrists to hang freely off the edge of your kneecaps.", 
            "The Extension: Carefully open your hands slightly and allow the barbell to roll down from your palms to the tips of your fingers.", 
            "The Curl: Tightly close your fingers back around the bar and forcefully curl your wrists upward as high as they can mechanically go."
        ] 
    },
    { 
        id: 47, name: "Dumbbell Reverse Wrist Curl", category: "strength", muscle: "forearms", equipment: "dumbbell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Reverse-Wrist-Curl.gif", 
        steps: [
            "Setup: Sit down on a flat bench. Hold a light dumbbell in each hand using an overhand (palms facing down) grip.", 
            "Positioning: Rest the entire length of your forearms on your thighs so that your wrists and the dumbbells are hanging freely over the edge of your knees.", 
            "The Movement: Keeping your forearms pressed hard against your legs, curl your wrists upward toward the ceiling, bringing the back of your hands closer to your body.", 
            "The Return: Slowly and carefully lower the dumbbells back down until you feel a gentle, pulling stretch in the top of your forearms."
        ] 
    },
    { 
        id: 48, name: "Farmers Walk", category: "strength", muscle: "forearms", equipment: "kettlebell", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Farmers-Walk.gif", 
        steps: [
            "The Pickup: Stand directly between two very heavy kettlebells. Squat down with a perfectly flat back, brace your core, and grip the handles as tightly as possible.", 
            "The Posture: Stand up straight by driving through your legs. Pull your shoulders back and down, puff your chest out proudly, and look straight ahead.", 
            "The Walk: Begin walking forward in a straight line. Use short, rapid, and highly deliberate steps to minimize swaying and maintain balance.", 
            "The Finish: Continue walking for a set distance or time, maintaining a crushing grip the entire way. Carefully squat down to return the weights to the floor."
        ] 
    },

    // ================= CARDIO (20 Workouts) =================
    { 
        id: 51, name: "Treadmill Running", category: "cardio", muscle: "cardio", equipment: "machine", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Treadmill.gif", 
        steps: [
            "Setup: Stand on the side rails of the treadmill. Select your desired speed and incline. Once the belt is moving steadily, carefully step onto the belt.", 
            "Form & Posture: Transition into a running pace. Stand tall with your chest open and shoulders relaxed. Avoid leaning heavily on the handrails.", 
            "Foot Strike: To maximize efficiency and reduce joint impact, focus on landing on your mid-foot rather than striking hard with your heel. Maintain a quick, light cadence.", 
            "Execution: Breathe rhythmically. Maintain your pace for the duration of the session, gradually decreasing the speed to a walk to cool down before stopping."
        ] 
    },
    { 
        id: 52, name: "Jump Rope", category: "cardio", muscle: "cardio", equipment: "bodyweight", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Jump-Rope.gif", 
        steps: [
            "Setup: Grab the handles of a properly sized jump rope. Hold your hands slightly forward and away from your hips.", 
            "The Rotation: Keep your elbows tucked in close to your ribs. The rotation of the rope should be generated almost entirely by quick, small flicks of your wrists.", 
            "The Jump: As the rope swings over your head, push off the balls of your feet to jump just an inch or two into the air—only high enough to clear the rope.", 
            "Rhythm: Land softly on the balls of your feet with a slight bend in your knees to absorb impact. Establish a steady, continuous bouncing rhythm."
        ] 
    },
    { 
        id: 53, name: "Mountain Climber", category: "cardio", muscle: "cardio", equipment: "bodyweight", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Mountain-Climber.gif", 
        steps: [
            "Starting Stance: Get onto the floor in a strict, high push-up position. Your hands should be planted firmly directly underneath your shoulders.", 
            "The Drive: Engage your abdominal muscles intensely. Quickly lift your right foot off the floor and drive your right knee forcefully straight up toward the center of your chest.", 
            "The Switch: As you quickly kick your right foot back to the starting position, simultaneously jump your left knee up toward your chest in a seamless exchange.", 
            "The Pace: Continue alternating legs in a rapid, running-like motion against the floor. Keep your hips locked down parallel to the floor."
        ] 
    },
    { 
        id: 54, name: "Burpees", category: "cardio", muscle: "cardio", equipment: "bodyweight", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Burpee.gif", 
        steps: [
            "Phase 1: Start in a neutral standing position. Drop your hips down, bend your knees, and plant your hands flat on the floor directly in front of your feet.", 
            "Phase 2: Explosively kick both of your legs straight back simultaneously so you land securely in a standard high plank/push-up position.", 
            "Phase 3: Perform a strict push-up. Lower your chest all the way down until it touches the floor, then push your body back up forcefully.", 
            "Phase 4: Immediately hop your feet back up toward your hands, stand up rapidly, and leap vertically into the air while clapping your hands overhead."
        ] 
    },
    { 
        id: 55, name: "Jumping Jacks", category: "cardio", muscle: "cardio", equipment: "bodyweight", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Jumping-jacks.gif", 
        steps: [
            "Starting Position: Stand completely upright with your legs together, knees slightly bent, and your arms resting relaxed down by your sides.", 
            "The Jump Out: In one synchronized, explosive motion, jump slightly into the air while simultaneously spreading your legs out slightly wider than shoulder-width.", 
            "The Arm Sweep: As you jump your legs out, simultaneously sweep both of your arms out to the sides and up in a wide arc until your hands touch above your head.", 
            "The Return: Immediately reverse the entire motion by jumping again, bringing your feet back together and sweeping your arms back down to your sides."
        ] 
    },
    { 
        id: 56, name: "Rowing Machine", category: "cardio", muscle: "cardio", equipment: "machine", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Rowing-Machine.gif", 
        steps: [
            "The Catch: Sit on the ergometer and secure your feet. Slide the seat forward, bend your knees, and grab the handle with an overhand grip.", 
            "The Drive: Initiate the power stroke strictly by driving your legs aggressively into the footplates. Keep your arms straight and your core engaged.", 
            "The Finish: As your legs reach full extension, lean your torso slightly back and forcefully pull the handle straight into your lower rib cage.", 
            "The Recovery: Extend your arms forward first, then hinge your torso forward from the hips, and finally bend your knees to let the seat slide smoothly back to the catch position."
        ] 
    },
    { 
        id: 57, name: "Elliptical Trainer", category: "cardio", muscle: "cardio", equipment: "machine", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Elliptical-Machine.gif", 
        steps: [
            "Setup: Step carefully onto the foot pedals of the elliptical machine and grab the moving handrails. Select your desired resistance level.", 
            "Posture: Stand tall with a straight spine, keeping your head up and your abdominal muscles lightly engaged. Do not slouch.", 
            "The Motion: Begin pedaling in a smooth, forward, elliptical motion. Push down and forward through your entire foot.", 
            "Total Body Sync: Push and pull the handrails in synchronized rhythm with your leg movements. Use equal effort from your upper and lower body."
        ] 
    },
    { 
        id: 58, name: "Stationary Bike", category: "cardio", muscle: "cardio", equipment: "machine", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Stationary-Bike.gif", 
        steps: [
            "Adjustment: Adjust the seat height before starting. When seated with the pedal at its lowest point, your leg should be almost fully extended.", 
            "Posture: Sit on the saddle and grip the handlebars comfortably. Keep your back relatively straight and avoid aggressively rounding your shoulders.", 
            "Pedaling Technique: Push down forcefully through the ball of your foot on the downward stroke, and actively pull up slightly on the upward stroke.", 
            "Pacing: Maintain a high, steady cadence (RPM). Adjust the resistance to simulate climbing hills or sprinting on flat terrain."
        ] 
    },
    { 
        id: 59, name: "Stair Climber", category: "cardio", muscle: "cardio", equipment: "machine", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Stair-Climber.gif", 
        steps: [
            "Setup: Step onto the revolving staircase. Set a moderate, sustainable speed on the console. Lightly rest your fingertips on the side rails.", 
            "Posture Warning: Stand totally upright. Do not hunch over and rest your upper body weight on the console.", 
            "The Step: Place your entire foot onto each step, rather than just the balls of your feet. This activates the glutes and hamstrings fully.", 
            "Execution: Push firmly down through your heel to step up. Maintain a steady, continuous rhythm, breathing deeply as you climb."
        ] 
    },
    { 
        id: 60, name: "High Knees", category: "cardio", muscle: "cardio", equipment: "bodyweight", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/High-Knees.gif", 
        steps: [
            "Posture: Stand perfectly upright with your feet hip-width apart. Look straight ahead, puff your chest out, and brace your core.", 
            "The Motion: Begin a running motion in place. Explosively drive your knees straight up high in front of your body.", 
            "The Target: Aim to bring each knee up to at least waist or hip level on every single vertical stride.", 
            "The Arms: Bend your elbows at 90 degrees and pump your arms vigorously forward and backward in opposite synchronization with your legs."
        ] 
    },
    { 
        id: 61, name: "Battle Ropes", category: "cardio", muscle: "cardio", equipment: "cables", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Battle-Ropes.gif", 
        steps: [
            "Stance: Stand facing the battle rope anchor point. Grab one end of the heavy rope in each hand. Drop into an athletic quarter-squat position.", 
            "Alternating Waves: Explosively whip your right arm up and down, immediately followed by your left arm, creating continuous undulating waves.", 
            "Slam Variation: Lift both ropes high overhead simultaneously, extending your entire body, then aggressively slam them both down into the floor.", 
            "Execution: Maintain high intensity and speed for short bursts, using your core to stabilize your torso against the violent movement."
        ] 
    },
    { 
        id: 62, name: "Box Jump", category: "cardio", muscle: "cardio", equipment: "bodyweight", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Box-Jump.gif", 
        steps: [
            "Preparation: Stand facing a sturdy plyometric box of an appropriate height. Stand with your feet shoulder-width apart.", 
            "The Load: Hinge your hips backward and bend your knees to drop into a quarter-squat, swinging both of your arms straight back behind you.", 
            "The Leap: Swing your arms forcefully forward and upward while simultaneously exploding through your legs to jump as high as you can onto the box.", 
            "The Landing: Land softly and quietly on top of the box with both feet fully planted. Step down carefully to reset."
        ] 
    },
    { 
        id: 63, name: "Bear Crawl", category: "cardio", muscle: "cardio", equipment: "bodyweight", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Bear-Crawl.gif", 
        steps: [
            "Starting Position: Get down on all fours in a tabletop position. Your hands should be flat directly under your shoulders, knees under your hips.", 
            "The Hover: Tuck your toes under and lift your knees just one or two inches hovering off the ground. Your back must remain absolutely flat.", 
            "The Crawl: Move forward by simultaneously stepping your right hand and your left foot forward in a small, controlled stride.", 
            "Continuous Motion: Immediately follow by moving your left hand and right foot forward. Continue this contralateral crawling motion."
        ] 
    },
    { 
        id: 64, name: "Skaters", category: "cardio", muscle: "cardio", equipment: "bodyweight", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Skaters.gif", 
        steps: [
            "Starting Position: Stand on your right leg with a slight bend in your right knee. Let your left leg hover slightly off the floor.", 
            "The Leap: Push explosively off your right foot to leap laterally (sideways) as far as you can to your left.", 
            "The Landing: Land softly on your left foot, absorbing the impact by bending your left knee into a mini-squat. Let your right leg sweep behind your left leg.", 
            "The Rebound: Immediately push off the left foot to bound laterally back to the right side. Swing your arms naturally to generate momentum."
        ] 
    },
    { 
        id: 65, name: "Jumping Lunges", category: "cardio", muscle: "cardio", equipment: "bodyweight", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Jumping-Lunge.gif", 
        steps: [
            "Starting Stance: Begin in a standard lunge position with your right foot forward and your left foot back. Drop your hips so both knees are bent at 90 degrees.", 
            "The Explosion: Drive explosively through the floor with both feet, jumping vertically high into the air.", 
            "The Switch: While suspended in mid-air, quickly scissor your legs, switching their positions so your left leg is now forward and right leg is back.", 
            "The Landing: Land softly on the balls of your feet, immediately absorbing the impact by dropping seamlessly into the next deep lunge."
        ] 
    },
    { 
        id: 66, name: "Air Bike (Assault Bike)", category: "cardio", muscle: "cardio", equipment: "machine", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Air-Bike.gif", 
        steps: [
            "Setup: Adjust the seat height so your leg is nearly fully extended at the bottom of the pedal stroke. Sit and grip the moving handles.", 
            "The Push/Pull: As you pedal forward with your legs, actively and violently push the right handle forward while pulling the left handle backward.", 
            "Synergy: Coordinate the pushing and pulling of your arms with the driving force of your legs.", 
            "Pacing: Use this machine for brutal, short intervals. Go all-out for 20-30 seconds, followed by a slow, easy pedal to recover."
        ] 
    },
    { 
        id: 67, name: "SkiErg", category: "cardio", muscle: "cardio", equipment: "machine", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/SkiErg.gif", 
        steps: [
            "Setup: Stand facing the SkiErg machine. Reach up and grasp the handles with an overhand grip. Keep your feet shoulder-width apart.", 
            "The Pull: Initiate the downward stroke by heavily engaging your core and pulling the handles down and backward. Hinge at your hips and bend your knees.", 
            "The Finish: Pull the handles aggressively all the way past your thighs. At the bottom, your arms should be extended downward and backward.", 
            "The Return: Stand back up forcefully, extending your hips and raising your arms back up to the high starting position."
        ] 
    },
    { 
        id: 68, name: "Cardio Step-Up", category: "cardio", muscle: "cardio", equipment: "bodyweight", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Step-Up.gif", 
        steps: [
            "Setup: Stand in front of a sturdy plyometric box, bench, or an aerobic step. Keep your chest up and core braced.", 
            "The Step: Step up rapidly with your right foot, planting your entire foot flat on the box. Immediately push through your right heel to drive upward.", 
            "The Tap: Bring your left foot up to lightly tap the top of the box next to your right foot.", 
            "The Descent: Immediately and softly step back down to the floor with your left foot, followed by your right foot. Move at a rapid pace."
        ] 
    },
    { 
        id: 69, name: "Running In Place", category: "cardio", muscle: "cardio", equipment: "bodyweight", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Running-In-Place.gif", 
        steps: [
            "Posture: Stand tall with your feet hip-width apart. Keep your spine straight, chest open for maximum oxygen intake, and look directly forward.", 
            "The Run: Begin jogging in place. Lift your feet off the floor by bending your knees. Focus on landing softly on the balls/mid-foot area.", 
            "Arm Action: Bend your elbows at 90 degrees and swing your arms back and forth in rhythm with your legs.", 
            "Cadence: Maintain a steady, rhythmic, and consistent pace for a prolonged duration to build aerobic endurance and stamina."
        ] 
    },
    { 
        id: 70, name: "Treadmill Sprint", category: "cardio", muscle: "cardio", equipment: "machine", 
        media_url: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Treadmill-Sprint.gif", 
        steps: [
            "Warm-up: Never sprint cold. Walk or jog lightly on the treadmill for 5-10 minutes. Stand on the side rails and increase the belt speed to a sprinting pace.", 
            "The Mount: Carefully but confidently step onto the fast-moving belt, immediately matching the sprint speed with long, explosive strides.", 
            "Sprint Form: Lean slightly forward. Drive your knees up high and pump your arms violently. Strike the belt with your mid-to-forefoot.", 
            "The Rest: Sprint at maximum effort for 15 to 30 seconds. To rest, securely grab the handrails and quickly hop your feet off the belt back onto the side rails."
        ] 
    }
];