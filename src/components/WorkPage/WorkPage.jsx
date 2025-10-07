import React from 'react';
import ProjectCard from '../ProjectCard';

const WorkPage = ({ onBackToHome }) => {
  const projects = [
    {
      title: "LangQuest",
      description: "A Duolingo-inspired language learning application built with Next.js 14, TypeScript, and PostgreSQL. Features gamified lessons with hearts system, audio pronunciation, and multiple challenge types. Implements Drizzle ORM database operations, Clerk authentication, Stripe subscriptions, and real-time leaderboards. Demonstrates full-stack development skills including server actions, payment integration, and responsive design.",
      technologies: ["Next.js 14", "TypeScript", "PostgreSQL", "Drizzle ORM", "Clerk Auth", "Stripe", "Tailwind CSS"],
      liveUrl: "https://lang-quest.vercel.app/",
      githubUrl: "https://github.com/Connor-Cassiotis/LangQuest"
    },
    {
      title: "NBA Game Predictor",
      description: "A Streamlit-based NBA game prediction app with AI-powered analytics. Features machine learning predictions, win probability calculations, and an interactive team selection interface. Implements a premium dark theme with glassmorphism effects, gradient animations, and responsive design. Demonstrates Python development skills including data processing, custom styling, and deployment configuration.",
      technologies: ["Python 3.11", "Streamlit", "Pandas & NumPy", "Machine Learning"],
      liveUrl: "https://nba-prediction-1-e835.onrender.com/#nba-game-predictor",
      githubUrl: "https://github.com/Connor-Cassiotis/NBA-Prediction"
    },
    {
      title: "Wildfire Tracker",
      description: "A responsive weather dashboard that displays current conditions and forecasts using OpenWeatherMap API. Features location-based weather data and interactive charts.",
      technologies: ["React", "NASA API", "Google Maps API"],
      liveUrl: "https://distasters-tracker.vercel.app/",
      githubUrl: "https://github.com/Connor-Cassiotis/Distasters-Tracker"
    },
    

  ];

  return (
    <section id="work" className="py-20 px-6 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            My Work
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
A few projects I've worked on that show off my skills in full-stack dev, design, and working with modern web technologies. Each one was a different challenge that helped me grow as a developer.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl}
            />
          ))}
        </div>

        {/* Back to Home Button */}
        <div className="text-center mt-16">
          <button 
            onClick={onBackToHome}
            className="inline-flex items-center px-6 py-3 bg-purple-900/30 hover:bg-purple-800/50 text-white rounded-lg transition-all duration-300 border border-purple-800/50 backdrop-blur-sm"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </button>
        </div>
      </div>
    </section>
  );
};

export default WorkPage;