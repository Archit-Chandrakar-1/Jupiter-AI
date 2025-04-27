# Jupiter-AI
Jupiter AI 🚀✨
Jupiter AI is a Next.js application that allows users to ask questions and receive intelligent answers powered by the Gemini API.
The app features a sleek cherry red and black (shiny) theme with white text, and includes a smooth loading animation during API calls.

Features
🚀 Question Submission – Users can type and submit any question.

🤖 AI Model Integration – Connects to the Gemini API for smart answers.

⏳ Loading Animation – Visual indicator while the AI is thinking.

📜 Response Display – Clean and readable answers shown to users.

⚡ Optimized Rendering – Uses both Client-side and Server-side rendering for best performance.

Tech Stack
Next.js 14

React

Tailwind CSS

Gemini API (Google Generative AI)

TypeScript (optional if you want to scale later)

Getting Started
1. Clone the Repository
bash
Copy
Edit
git clone https://github.com/your-username/jupiter-ai.git
cd jupiter-ai
2. Install Dependencies
bash
Copy
Edit
npm install
# or
yarn install
3. Set up Environment Variables
Create a .env.local file in the root directory:

bash
Copy
Edit
GEMINI_API_KEY=your_gemini_api_key_here
Replace your_gemini_api_key_here with your actual API key.

Running the App Locally
bash
Copy
Edit
npm run dev
# or
yarn dev
The application will be available at http://localhost:3000.

Deployment
You can easily deploy Jupiter AI using:

Vercel (Recommended for Next.js)

Netlify

AWS Amplify

Custom VPS

Deploying to Vercel
bash
Copy
Edit
vercel
Screenshots
(Add screenshots after you run the app if needed!)

Folder Structure
pgsql
Copy
Edit

jupiter-ai/
├── public/
│   └── assets/ (optional for images)
├── pages/
│   ├── api/
│   │   └── ask.js (API route for Gemini)
│   └── index.js (Main page)
├── styles/
│   └── globals.css (Tailwind base styles)
├── components/
│   └── Loader.js (Loading animation)
├── .env.local
├── README.md
├── package.json
└── tailwind.config.js



Customization
🌌 Background can be further enhanced with space-themed SVGs or animated elements.

🛠️ Extend the app to allow history saving, login/signup, dark/light themes, etc.

License
This project is licensed under the MIT License.

Credits
Built with ❤️ by Archit.


