import React from 'react';

const ProjectCard = ({ 
  title, 
  description, 
  technologies = [], 
  image, 
  liveUrl, 
  githubUrl,
  className = '' 
}) => {
  return (
    <div className={`bg-black/50 backdrop-blur-sm border border-purple-900/30 rounded-lg overflow-hidden hover:border-purple-700/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-900/20 flex flex-col h-full ${className}`}>
      {image && (
        <div className="h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
          />
        </div>
      )}
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-white mb-3">
          {title}
        </h3>
        
        <p className="text-gray-300 mb-4 leading-relaxed flex-grow">
          {description}
        </p>
        
        {technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-purple-900/30 text-purple-300 text-sm rounded-full border border-purple-800/50"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
        
        <div className="flex gap-4 mt-auto">
          {liveUrl && (
            <a 
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-purple-900 hover:bg-purple-800 text-white rounded-lg transition-colors duration-300 text-sm font-medium"
            >
              Live Demo
            </a>
          )}
          {githubUrl && (
            <a 
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors duration-300 text-sm font-medium border border-gray-700"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;