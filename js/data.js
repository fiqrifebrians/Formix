const muscles = [
    { id: "chest", name: "Chest" },
    { id: "back", name: "Back" },
    { id: "legs", name: "Legs" },
    { id: "shoulders", name: "Shoulders" },
    { id: "arms", name: "Arms" },
    { id: "core", name: "Core" }
];

const equipments = [
    { id: "bodyweight", name: "Bodyweight" },
    { id: "dumbbell", name: "Dumbbell" },
    { id: "barbell", name: "Barbell" },
    { id: "machine", name: "Machine" },
    { id: "cables", name: "Cables" }
];

const workoutDB = [
    {
        id: 1,
        name: "Barbell Bench Press",
        category: "muscle",
        muscle: "chest",
        equipment: "barbell",
        media_url: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80", 
        is_video: false,
        steps: [
            "Lie flat on the bench with eyes directly under the bar.",
            "Grip the bar slightly wider than shoulder-width.",
            "Unrack the bar and lower it slowly to your mid-chest.",
            "Press the bar back up powerfully until arms are fully extended."
        ]
    },
    {
        id: 2,
        name: "Push-Up",
        category: "muscle",
        muscle: "chest",
        equipment: "bodyweight",
        media_url: "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?auto=format&fit=crop&w=800&q=80",
        is_video: false,
        steps: [
            "Start in a high plank position with hands shoulder-width apart.",
            "Keep your core tight and body in a straight line.",
            "Lower your body until your chest hovers just above the floor.",
            "Push back up to the starting position."
        ]
    },
    {
        id: 3,
        name: "Dumbbell Bicep Curl",
        category: "muscle",
        muscle: "arms",
        equipment: "dumbbell",
        media_url: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80",
        is_video: false,
        steps: [
            "Stand straight holding a dumbbell in each hand, palms facing forward.",
            "Keep your elbows tucked close to your ribs.",
            "Curl the weights up towards your shoulders.",
            "Slowly lower back to full extension."
        ]
    },
    {
        id: 4,
        name: "Jump Squats",
        category: "hiit",
        muscle: "legs",
        equipment: "bodyweight",
        media_url: "https://images.unsplash.com/photo-1566241440091-ec10de8db2e1?auto=format&fit=crop&w=800&q=80",
        is_video: false,
        steps: [
            "Start in a standing position with feet shoulder-width apart.",
            "Lower into a squat position.",
            "Explode upwards into a jump.",
            "Land softly back into the squat position and repeat."
        ]
    },
    {
        id: 5,
        name: "Burpees",
        category: "hiit",
        muscle: "full body",
        equipment: "bodyweight",
        media_url: "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?auto=format&fit=crop&w=800&q=80",
        is_video: false,
        steps: [
            "Start in a standing position.",
            "Drop into a squat position and place your hands on the ground.",
            "Kick your feet back into a plank position.",
            "Return your feet to the squat position and stand up (or jump)."
        ]
    }
];