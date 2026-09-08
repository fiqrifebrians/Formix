
// Simulated Database for Workouts
const workoutDB = [
    {
        id: 1,
        name: "Barbell Bench Press",
        muscle: "chest",
        equipment: "barbell",
        video_url: "https://www.w3schools.com/html/mov_bbb.mp4", // Placeholder for AI Animation
        steps: [
            "Lie flat on the bench with your eyes under the bar.",
            "Grab the bar with a medium grip-width.",
            "Unrack the bar by straightening your arms.",
            "Lower the bar to your mid-chest.",
            "Press the bar back up until your arms are straight."
        ]
    },
    {
        id: 2,
        name: "Push Up",
        muscle: "chest",
        equipment: "bodyweight",
        video_url: "https://www.w3schools.com/html/mov_bbb.mp4", // Placeholder
        steps: [
            "Get into a plank position with hands slightly wider than shoulder-width.",
            "Lower your body until your chest nearly touches the floor.",
            "Push yourself back up to the starting position."
        ]
    },
    {
        id: 3,
        name: "Dumbbell Curl",
        muscle: "biceps",
        equipment: "dumbbell",
        video_url: "https://www.w3schools.com/html/mov_bbb.mp4", // Placeholder
        steps: [
            "Stand holding a dumbbell in each hand with arms hanging by your sides.",
            "Keep your elbows close to your torso and curl the weights up.",
            "Slowly lower the dumbbells back to the starting position."
        ]
    },
    {
        id: 4,
        name: "Squat",
        muscle: "legs",
        equipment: "barbell",
        video_url: "https://www.w3schools.com/html/mov_bbb.mp4", // Placeholder
        steps: [
            "Stand with feet shoulder-width apart, resting the barbell on your upper back.",
            "Bend your knees and lower your hips as if sitting in a chair.",
            "Keep your chest up and back straight.",
            "Push through your heels to return to the starting position."
        ]
    }
];

const muscles = ["chest", "biceps", "triceps", "back", "legs", "shoulders", "core"];
const equipments = ["bodyweight", "dumbbell", "barbell", "kettlebell", "cables", "machine"];
