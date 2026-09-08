
// Centralized Data with Professional Metadata and Icons
const muscles = [
    { id: "chest", name: "Chest", icon: "fa-solid fa-heart" },
    { id: "back", name: "Back", icon: "fa-solid fa-arrow-down-up-across-line" },
    { id: "legs", name: "Legs", icon: "fa-solid fa-person-walking" },
    { id: "shoulders", name: "Shoulders", icon: "fa-solid fa-child-reaching" },
    { id: "arms", name: "Arms", icon: "fa-solid fa-hand-fist" },
    { id: "core", name: "Core", icon: "fa-solid fa-cubes" }
];

const equipments = [
    { id: "bodyweight", name: "Bodyweight", icon: "fa-solid fa-person" },
    { id: "dumbbell", name: "Dumbbell", icon: "fa-solid fa-dumbbell" },
    { id: "barbell", name: "Barbell", icon: "fa-solid fa-weight-hanging" },
    { id: "machine", name: "Machine", icon: "fa-solid fa-gears" },
    { id: "cables", name: "Cables", icon: "fa-solid fa-bezier-curve" }
];

const workoutDB = [
    {
        id: 1,
        name: "Barbell Bench Press",
        muscle: "chest",
        equipment: "barbell",
        // Using a professional looking placeholder GIF URL
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
        name: "Barbell Squat",
        muscle: "legs",
        equipment: "barbell",
        media_url: "https://images.unsplash.com/photo-1566241440091-ec10de8db2e1?auto=format&fit=crop&w=800&q=80",
        is_video: false,
        steps: [
            "Position the barbell securely on your upper traps.",
            "Stand with feet shoulder-width apart, toes pointed slightly outward.",
            "Hinge at the hips and bend your knees to lower into a squat.",
            "Drive through your heels to return to a standing position."
        ]
    },
    {
        id: 5,
        name: "Plank",
        muscle: "core",
        equipment: "bodyweight",
        media_url: "https://images.unsplash.com/photo-1566241142559-40e1dab266c6?auto=format&fit=crop&w=800&q=80",
        is_video: false,
        steps: [
            "Rest on your forearms and toes, keeping your body in a straight line.",
            "Engage your core, glutes, and quads.",
            "Hold the position without letting your hips sag or hike up."
        ]
    }
];
