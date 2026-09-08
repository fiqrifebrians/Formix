# AI Workout Guide
A simple, client-side web application inspired by MuscleWiki. 
Features workouts sorted by muscle and equipment, utilizing AI-generated animation videos for tutorials.

## Tech Stack
- HTML5
- CSS3 (Custom, Flexbox/Grid)
- Vanilla JavaScript (ES6)

## Setup
1. Clone this repository.
2. Open `index.html` in your browser.
3. No build tools or Node.js required!

## Adding AI Videos
1. Generate your animation using AI video tools (e.g., Luma, Runway Gen-2, Pika, Synthesia).
2. Place the `.mp4` files into the `/assets` folder.
3. Open `js/data.js` and update the `video_url` path for the corresponding workout to point to your new file (e.g., `"assets/my-ai-video.mp4"`).
