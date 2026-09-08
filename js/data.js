// Penambahan 3 otot baru (Calves, Glutes, Forearms)
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

// Penambahan 4 alat baru (Kettlebell, Resistance Band, Medicine Ball, EZ Bar)
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

// Data masif untuk memenuhi minimal 5 per kategori dengan GymVisual GIF link dan instruksi minimal 3 step
const workoutDB = [
    // --- CHEST ---
    {
        id: 1, name: "Barbell Bench Press", category: "strength", muscle: "chest", equipment: "barbell",
        media_url: "https://gymvisual.com/img/p/1/7/5/5/2/17552.gif",
        steps: ["Lie flat on the bench with eyes directly under the bar.", "Grip the bar slightly wider than shoulder-width.", "Unrack the bar and lower it slowly to your mid-chest.", "Press the bar back up powerfully until arms are fully extended."]
    },
    {
        id: 2, name: "Push-Up", category: "strength", muscle: "chest", equipment: "bodyweight",
        media_url: "https://gymvisual.com/img/p/4/8/4/8/4848.gif",
        steps: ["Start in a high plank position with hands shoulder-width apart.", "Keep your core tight and body in a straight line.", "Lower your body until your chest hovers just above the floor.", "Push back up to the starting position."]
    },
    {
        id: 3, name: "Dumbbell Fly", category: "strength", muscle: "chest", equipment: "dumbbell",
        media_url: "https://gymvisual.com/img/p/1/2/3/12345.gif",
        steps: ["Lie flat on a bench holding two dumbbells above your chest.", "Keep a slight bend in your elbows and open your arms wide.", "Lower the weights until you feel a stretch in your chest.", "Bring the dumbbells back together at the top."]
    },
    {
        id: 4, name: "Cable Crossover", category: "strength", muscle: "chest", equipment: "cables",
        media_url: "https://gymvisual.com/img/p/2/2/2/22222.gif",
        steps: ["Set the pulleys high and grab a handle in each hand.", "Step forward slightly and brace your core.", "Bring your hands together in front of your body in a sweeping arc.", "Slowly return to the starting position."]
    },
    {
        id: 5, name: "Resistance Band Chest Press", category: "strength", muscle: "chest", equipment: "resistance band",
        media_url: "https://gymvisual.com/img/p/3/3/3/33333.gif",
        steps: ["Anchor the band behind you at chest height.", "Grab the handles and step forward to create tension.", "Press the handles straight out in front of you.", "Control the band as you return to the start."]
    },
    {
        id: 6, name: "Medicine Ball Chest Pass", category: "strength", muscle: "chest", equipment: "medicine ball",
        media_url: "https://gymvisual.com/img/p/1/1/1/11111.gif",
        steps: ["Hold a medicine ball at chest level with both hands.", "Stand with feet shoulder-width apart and knees slightly bent.", "Explosively push the ball straight out to a wall or partner.", "Catch the ball and immediately repeat."]
    },

    // --- BACK ---
    {
        id: 7, name: "Pull-Up", category: "strength", muscle: "back", equipment: "bodyweight",
        media_url: "https://gymvisual.com/img/p/4/4/4/44444.gif",
        steps: ["Grab the pull-up bar with an overhand grip, slightly wider than shoulder-width.", "Hang freely with straight arms and engaged core.", "Pull your body up until your chin clears the bar.", "Lower yourself slowly back to the hanging position."]
    },
    {
        id: 8, name: "Barbell Row", category: "strength", muscle: "back", equipment: "barbell",
        media_url: "https://gymvisual.com/img/p/5/5/5/55555.gif",
        steps: ["Hinge at the hips, keeping your back straight and parallel to the floor.", "Grab the barbell with an overhand grip.", "Pull the bar toward your lower chest/belly button.", "Lower the bar back down with control."]
    },
    {
        id: 9, name: "Dumbbell Row", category: "strength", muscle: "back", equipment: "dumbbell",
        media_url: "https://gymvisual.com/img/p/6/6/6/66666.gif",
        steps: ["Place one knee and one hand on a bench for support.", "Hold a dumbbell in the opposite hand with your arm extended.", "Pull the dumbbell up toward your hip, squeezing your back.", "Slowly lower the weight back down."]
    },
    {
        id: 10, name: "Lat Pulldown", category: "strength", muscle: "back", equipment: "machine",
        media_url: "https://gymvisual.com/img/p/7/7/7/77777.gif",
        steps: ["Sit at the lat pulldown machine and adjust the thigh pad.", "Grab the wide bar with an overhand grip.", "Pull the bar down to your upper chest while leaning back slightly.", "Return the bar to the top position smoothly."]
    },
    {
        id: 11, name: "Kettlebell Swing", category: "hiit", muscle: "back", equipment: "kettlebell",
        media_url: "https://gymvisual.com/img/p/8/8/8/88888.gif",
        steps: ["Stand with feet wider than shoulder-width holding a kettlebell.", "Hinge at the hips and swing the kettlebell between your legs.", "Drive your hips forward explosively to swing the bell up to chest height.", "Let the bell swing back down and repeat continuously."]
    },

    // --- LEGS ---
    {
        id: 12, name: "Barbell Squat", category: "strength", muscle: "legs", equipment: "barbell",
        media_url: "https://gymvisual.com/img/p/9/9/9/99999.gif",
        steps: ["Position the barbell securely on your upper traps.", "Stand with feet shoulder-width apart, toes pointed slightly outward.", "Hinge at the hips and bend your knees to lower into a squat.", "Drive through your heels to return to a standing position."]
    },
    {
        id: 13, name: "Dumbbell Lunges", category: "strength", muscle: "legs", equipment: "dumbbell",
        media_url: "https://gymvisual.com/img/p/1/0/1/10101.gif",
        steps: ["Stand straight holding a dumbbell in each hand.", "Take a big step forward with your right leg.", "Lower your body until your right thigh is parallel to the floor.", "Push back up to the starting position and switch legs."]
    },
    {
        id: 14, name: "Leg Press", category: "strength", muscle: "legs", equipment: "machine",
        media_url: "https://gymvisual.com/img/p/1/0/2/10202.gif",
        steps: ["Sit on the leg press machine and place your feet shoulder-width on the sled.", "Release the safety handles and lower the sled toward your chest.", "Stop when your knees are at a 90-degree angle.", "Push the sled back up, avoiding locking your knees."]
    },
    {
        id: 15, name: "Bodyweight Squat", category: "strength", muscle: "legs", equipment: "bodyweight",
        media_url: "https://gymvisual.com/img/p/1/0/3/10303.gif",
        steps: ["Stand with feet shoulder-width apart, chest up.", "Push your hips back and bend your knees.", "Lower down as if sitting in an invisible chair.", "Stand back up by pushing through your mid-foot."]
    },
    {
        id: 16, name: "Medicine Ball Squat", category: "strength", muscle: "legs", equipment: "medicine ball",
        media_url: "https://gymvisual.com/img/p/1/0/4/10404.gif",
        steps: ["Hold a medicine ball closely against your chest.", "Keep your elbows tucked in and brace your core.", "Lower into a deep squat while keeping your torso upright.", "Drive back up to the starting position."]
    },
    {
        id: 17, name: "Kettlebell Deadlift", category: "strength", muscle: "legs", equipment: "kettlebell",
        media_url: "https://gymvisual.com/img/p/1/0/5/10505.gif",
        steps: ["Place a heavy kettlebell between your feet.", "Hinge at the hips and grip the kettlebell handle with both hands.", "Keep your back flat and drive through your heels to stand up.", "Squeeze your glutes at the top, then lower it back down."]
    },

    // --- SHOULDERS ---
    {
        id: 18, name: "Overhead Press", category: "strength", muscle: "shoulders", equipment: "barbell",
        media_url: "https://gymvisual.com/img/p/1/0/6/10606.gif",
        steps: ["Rest the barbell on your front delts with a grip just outside shoulder-width.", "Brace your core and squeeze your glutes.", "Press the bar straight up overhead until your arms lock out.", "Lower the bar back to the starting position with control."]
    },
    {
        id: 19, name: "Lateral Raise", category: "strength", muscle: "shoulders", equipment: "dumbbell",
        media_url: "https://gymvisual.com/img/p/1/0/7/10707.gif",
        steps: ["Stand holding a dumbbell in each hand by your sides.", "Keep a slight bend in your elbows and raise your arms out to the sides.", "Stop when your elbows are at shoulder height.", "Slowly lower the dumbbells back down."]
    },
    {
        id: 20, name: "Face Pull", category: "strength", muscle: "shoulders", equipment: "cables",
        media_url: "https://gymvisual.com/img/p/1/0/8/10808.gif",
        steps: ["Attach a rope handle to a high pulley.", "Grab the ends of the rope and step back.", "Pull the rope toward your face, flaring your elbows outward.", "Squeeze your rear delts, then slowly release."]
    },
    {
        id: 21, name: "Machine Shoulder Press", category: "strength", muscle: "shoulders", equipment: "machine",
        media_url: "https://gymvisual.com/img/p/1/0/9/10909.gif",
        steps: ["Sit on the machine with your back flat against the pad.", "Grab the handles securely.", "Press the handles upward until your arms are fully extended.", "Lower back down slowly without letting the weights rest completely."]
    },
    {
        id: 22, name: "Resistance Band Front Raise", category: "strength", muscle: "shoulders", equipment: "resistance band",
        media_url: "https://gymvisual.com/img/p/1/1/0/11011.gif",
        steps: ["Step on the center of the resistance band with both feet.", "Hold the handles with your palms facing down.", "Keep your arms straight and raise them straight in front of you.", "Lower your arms under control."]
    },
    {
        id: 23, name: "Kettlebell Halo", category: "strength", muscle: "shoulders", equipment: "kettlebell",
        media_url: "https://gymvisual.com/img/p/1/1/2/11211.gif",
        steps: ["Hold a kettlebell upside down by the horns in front of your chest.", "Circle the kettlebell tightly around your head to the right.", "Bring it back to the front of your chest.", "Reverse the motion and circle it to the left."]
    },
    {
        id: 24, name: "EZ Bar Upright Row", category: "strength", muscle: "shoulders", equipment: "ez bar",
        media_url: "https://gymvisual.com/img/p/1/1/3/11311.gif",
        steps: ["Hold the EZ bar in front of your thighs with a narrow overhand grip.", "Pull the bar straight up toward your chin, leading with your elbows.", "Keep the bar close to your body.", "Lower the bar slowly back to the start."]
    },

    // --- ARMS ---
    {
        id: 25, name: "Barbell Curl", category: "strength", muscle: "arms", equipment: "barbell",
        media_url: "https://gymvisual.com/img/p/1/1/4/11411.gif",
        steps: ["Stand tall holding a barbell with an underhand grip.", "Keep your elbows pinned to your sides.", "Curl the bar up toward your shoulders.", "Lower the bar back down slowly."]
    },
    {
        id: 26, name: "Tricep Pushdown", category: "strength", muscle: "arms", equipment: "cables",
        media_url: "https://gymvisual.com/img/p/1/1/5/11511.gif",
        steps: ["Attach a straight bar or rope to a high cable pulley.", "Grip the attachment and tuck your elbows against your ribs.", "Push the attachment down until your arms are fully extended.", "Return to the starting position slowly."]
    },
    {
        id: 27, name: "Dumbbell Bicep Curl", category: "strength", muscle: "arms", equipment: "dumbbell",
        media_url: "https://gymvisual.com/img/p/1/1/6/11611.gif",
        steps: ["Stand straight holding a dumbbell in each hand, palms facing forward.", "Keep your elbows tucked close to your ribs.", "Curl the weights up towards your shoulders.", "Slowly lower back to full extension."]
    },
    {
        id: 28, name: "EZ Bar Skullcrusher", category: "strength", muscle: "arms", equipment: "ez bar",
        media_url: "https://gymvisual.com/img/p/1/1/7/11711.gif",
        steps: ["Lie on a flat bench holding an EZ bar above your chest.", "Bend your elbows to lower the bar toward your forehead.", "Keep your upper arms completely still.", "Extend your arms to push the bar back up."]
    },
    {
        id: 29, name: "Dips", category: "strength", muscle: "arms", equipment: "bodyweight",
        media_url: "https://gymvisual.com/img/p/1/1/8/11811.gif",
        steps: ["Mount the dip bars with arms fully extended and torso upright.", "Lower your body by bending your elbows to 90 degrees.", "Keep your elbows tucked in close to your body.", "Push yourself back up to the starting position."]
    },
    {
        id: 30, name: "Resistance Band Bicep Curl", category: "strength", muscle: "arms", equipment: "resistance band",
        media_url: "https://gymvisual.com/img/p/1/1/9/11911.gif",
        steps: ["Stand on the middle of the band with feet shoulder-width apart.", "Hold the handles with palms facing up.", "Curl the handles toward your shoulders.", "Slowly return to the start position."]
    },
    {
        id: 31, name: "EZ Bar Preacher Curl", category: "strength", muscle: "arms", equipment: "ez bar",
        media_url: "https://gymvisual.com/img/p/1/2/0/12011.gif",
        steps: ["Sit at a preacher bench and position your upper arms on the pad.", "Grab the EZ bar with an underhand grip.", "Curl the bar upward while keeping your upper arms glued to the pad.", "Lower the bar back down until arms are fully extended."]
    },
    {
        id: 32, name: "EZ Bar French Press", category: "strength", muscle: "arms", equipment: "ez bar",
        media_url: "https://gymvisual.com/img/p/1/2/1/12111.gif",
        steps: ["Sit on a bench holding an EZ bar directly overhead.", "Bend your elbows to lower the bar behind your head.", "Keep your elbows pointing straight up.", "Extend your arms to raise the bar back to the top."]
    },

    // --- CORE ---
    {
        id: 33, name: "Plank", category: "strength", muscle: "core", equipment: "bodyweight",
        media_url: "https://gymvisual.com/img/p/1/2/2/12211.gif",
        steps: ["Rest on your forearms and toes, keeping your body in a straight line.", "Engage your core, glutes, and quads.", "Hold the position without letting your hips sag or hike up.", "Breathe steadily throughout the hold."]
    },
    {
        id: 34, name: "Cable Crunch", category: "strength", muscle: "core", equipment: "cables",
        media_url: "https://gymvisual.com/img/p/1/2/3/12311.gif",
        steps: ["Kneel below a high cable pulley holding a rope attachment.", "Hold the rope beside your ears.", "Crunch your torso downward, bringing your elbows toward your knees.", "Slowly return to the upright kneeling position."]
    },
    {
        id: 35, name: "Russian Twist", category: "strength", muscle: "core", equipment: "medicine ball",
        media_url: "https://gymvisual.com/img/p/1/2/4/12411.gif",
        steps: ["Sit on the floor with knees bent and feet slightly elevated.", "Hold a medicine ball with both hands in front of your chest.", "Twist your torso to the right and tap the ball on the floor.", "Twist to the left and repeat."]
    },
    {
        id: 36, name: "Hanging Leg Raise", category: "strength", muscle: "core", equipment: "bodyweight",
        media_url: "https://gymvisual.com/img/p/1/2/5/12511.gif",
        steps: ["Hang from a pull-up bar with an overhand grip.", "Keep your legs straight and lift them up until they are parallel to the floor.", "Avoid swinging your body.", "Lower your legs slowly back down."]
    },
    {
        id: 37, name: "Ab Machine Crunch", category: "strength", muscle: "core", equipment: "machine",
        media_url: "https://gymvisual.com/img/p/1/2/6/12611.gif",
        steps: ["Sit in the ab crunch machine and select an appropriate weight.", "Grab the handles and place your feet under the pads.", "Crunch forward, using your abs to pull the weight.", "Return to the starting position under control."]
    },
    {
        id: 38, name: "Medicine Ball V-Up", category: "strength", muscle: "core", equipment: "medicine ball",
        media_url: "https://gymvisual.com/img/p/1/2/7/12711.gif",
        steps: ["Lie flat on your back holding a medicine ball above your head.", "Keep your legs straight and arms extended.", "Simultaneously lift your legs and torso to pass the ball to your feet.", "Lower back down and repeat."]
    },

    // --- CALVES ---
    {
        id: 39, name: "Standing Calf Raise", category: "strength", muscle: "calves", equipment: "bodyweight",
        media_url: "https://gymvisual.com/img/p/1/2/8/12811.gif",
        steps: ["Stand on the edge of a step or block with your heels hanging off.", "Hold onto a wall or rail for balance.", "Push through the balls of your feet to raise your heels as high as possible.", "Slowly lower your heels below the level of the step."]
    },
    {
        id: 40, name: "Barbell Calf Raise", category: "strength", muscle: "calves", equipment: "barbell",
        media_url: "https://gymvisual.com/img/p/1/2/9/12911.gif",
        steps: ["Place a barbell across your upper back.", "Stand with your feet shoulder-width apart.", "Elevate your heels by pushing onto your toes.", "Lower your heels slowly back to the ground."]
    },
    {
        id: 41, name: "Donkey Calf Raise", category: "strength", muscle: "calves", equipment: "machine",
        media_url: "https://gymvisual.com/img/p/1/3/0/13011.gif",
        steps: ["Position yourself on the donkey calf raise machine with the pad on your lower back.", "Keep your legs straight but not locked.", "Raise your heels as high as possible.", "Lower your heels down for a full stretch."]
    },
    {
        id: 42, name: "Dumbbell Calf Raise", category: "strength", muscle: "calves", equipment: "dumbbell",
        media_url: "https://gymvisual.com/img/p/1/3/1/13111.gif",
        steps: ["Hold a dumbbell in each hand and stand on a flat surface or edge.", "Keep your chest up and core engaged.", "Raise your heels off the floor.", "Squeeze your calves at the top before lowering."]
    },
    {
        id: 43, name: "Resistance Band Calf Extension", category: "strength", muscle: "calves", equipment: "resistance band",
        media_url: "https://gymvisual.com/img/p/1/3/2/13211.gif",
        steps: ["Sit on the floor with your legs extended.", "Loop the resistance band around the balls of your feet and hold the ends.", "Press your toes forward against the band's resistance.", "Slowly flex your toes back toward you."]
    },

    // --- GLUTES ---
    {
        id: 44, name: "Barbell Hip Thrust", category: "strength", muscle: "glutes", equipment: "barbell",
        media_url: "https://gymvisual.com/img/p/1/3/3/13311.gif",
        steps: ["Sit on the floor with your upper back resting against a bench.", "Roll a padded barbell over your hips.", "Plant your feet firmly and drive your hips upward.", "Squeeze your glutes at the top, then lower your hips."]
    },
    {
        id: 45, name: "Glute Bridge", category: "strength", muscle: "glutes", equipment: "bodyweight",
        media_url: "https://gymvisual.com/img/p/1/3/4/13411.gif",
        steps: ["Lie on your back with your knees bent and feet flat on the floor.", "Keep your arms by your sides.", "Push through your heels and lift your hips until your body forms a straight line.", "Squeeze your glutes and lower back down."]
    },
    {
        id: 46, name: "Cable Pull Through", category: "strength", muscle: "glutes", equipment: "cables",
        media_url: "https://gymvisual.com/img/p/1/3/5/13511.gif",
        steps: ["Set a cable pulley to the lowest setting with a rope attachment.", "Stand facing away from the machine, straddling the cable.", "Hinge at the hips, reaching back through your legs to grab the rope.", "Stand up straight and thrust your hips forward, squeezing your glutes."]
    },
    {
        id: 47, name: "Kettlebell Goblet Squat", category: "strength", muscle: "glutes", equipment: "kettlebell",
        media_url: "https://gymvisual.com/img/p/1/3/6/13611.gif",
        steps: ["Hold a kettlebell vertically by the horns against your chest.", "Stand with feet slightly wider than shoulder-width.", "Squat down, keeping your chest up and pushing your knees out.", "Drive through your heels to return to a standing position."]
    },
    {
        id: 48, name: "Resistance Band Kickback", category: "strength", muscle: "glutes", equipment: "resistance band",
        media_url: "https://gymvisual.com/img/p/1/3/7/13711.gif",
        steps: ["Get on all fours and loop a resistance band around your feet/ankles.", "Keep your back flat and core tight.", "Kick one leg straight back and up toward the ceiling.", "Squeeze your glute at the top and return the knee to the floor."]
    },

    // --- FOREARMS ---
    {
        id: 49, name: "Barbell Wrist Curl", category: "strength", muscle: "forearms", equipment: "barbell",
        media_url: "https://gymvisual.com/img/p/1/3/8/13811.gif",
        steps: ["Sit on a bench and rest your forearms on your thighs.", "Hold a barbell with an underhand grip, letting your wrists hang off your knees.", "Curl your wrists upward as far as possible.", "Slowly lower the bar back down to stretch your forearms."]
    },
    {
        id: 50, name: "Dumbbell Reverse Wrist Curl", category: "strength", muscle: "forearms", equipment: "dumbbell",
        media_url: "https://gymvisual.com/img/p/1/3/9/13911.gif",
        steps: ["Sit on a bench and rest your forearms on your thighs.", "Hold a dumbbell in each hand with an overhand grip.", "Curl your wrists upward toward your body.", "Lower the dumbbells slowly to the starting position."]
    },
    {
        id: 51, name: "Farmers Walk", category: "strength", muscle: "forearms", equipment: "kettlebell",
        media_url: "https://gymvisual.com/img/p/1/4/0/14011.gif",
        steps: ["Stand tall holding a heavy kettlebell in each hand.", "Keep your shoulders back and chest up.", "Walk forward in a straight line with slow, measured steps.", "Grip the handles tightly the entire time."]
    },
    {
        id: 52, name: "EZ Bar Reverse Curl", category: "strength", muscle: "forearms", equipment: "ez bar",
        media_url: "https://gymvisual.com/img/p/1/4/1/14111.gif",
        steps: ["Stand holding an EZ bar with an overhand (pronated) grip.", "Keep your elbows pinned to your sides.", "Curl the bar upward by bending your elbows.", "Lower the bar back down with control."]
    },
    {
        id: 53, name: "Wrist Roller", category: "strength", muscle: "forearms", equipment: "machine",
        media_url: "https://gymvisual.com/img/p/1/4/2/14211.gif",
        steps: ["Stand holding a wrist roller attachment straight out in front of you.", "Roll the bar forward with your wrists to wind the rope and lift the weight.", "Once the weight reaches the top, carefully reverse the motion.", "Do not let the weight drop; unroll it using your forearms."]
    },

    // --- HIIT ---
    {
        id: 54, name: "Burpees", category: "hiit", muscle: "core", equipment: "bodyweight",
        media_url: "https://gymvisual.com/img/p/1/4/3/14311.gif",
        steps: ["Start in a standing position.", "Drop into a squat position and place your hands on the ground.", "Kick your feet back into a plank position.", "Return your feet to the squat position and jump up explosively."]
    },
    {
        id: 55, name: "Jump Squats", category: "hiit", muscle: "legs", equipment: "bodyweight",
        media_url: "https://gymvisual.com/img/p/1/4/4/14411.gif",
        steps: ["Start in a standing position with feet shoulder-width apart.", "Lower into a squat position.", "Explode upwards into a jump.", "Land softly back into the squat position and repeat immediately."]
    },
    {
        id: 56, name: "Mountain Climbers", category: "hiit", muscle: "core", equipment: "bodyweight",
        media_url: "https://gymvisual.com/img/p/1/4/5/14511.gif",
        steps: ["Start in a high plank position with your hands directly under your shoulders.", "Drive your right knee toward your chest.", "Quickly switch legs, driving your left knee to your chest.", "Continue alternating legs at a fast running pace."]
    },
    {
        id: 57, name: "High Knees", category: "hiit", muscle: "legs", equipment: "bodyweight",
        media_url: "https://gymvisual.com/img/p/1/4/6/14611.gif",
        steps: ["Stand tall with your feet hip-width apart.", "Drive your right knee up toward your chest as high as possible.", "Quickly switch and drive your left knee up.", "Pump your arms and continue at a running pace."]
    },
    {
        id: 58, name: "Medicine Ball Slam", category: "hiit", muscle: "core", equipment: "medicine ball",
        media_url: "https://gymvisual.com/img/p/1/4/7/14711.gif",
        steps: ["Stand with feet shoulder-width apart, holding a medicine ball.", "Lift the ball high overhead, extending your body fully.", "Slam the ball down to the floor between your feet as hard as possible.", "Catch the bounce and immediately repeat."]
    }
];