import React, { useState, useEffect } from 'react';

// Custom CSS for spaceship animations
const spaceshipStyles = `
  @keyframes spaceship-1 {
    0% { 
      transform: translateX(100px) translateY(-20px) rotate(15deg);
      opacity: 0;
    }
    5% { 
      opacity: 1;
    }
    95% { 
      opacity: 1;
    }
    100% { 
      transform: translateX(calc(-100vw - 100px)) translateY(20px) rotate(15deg);
      opacity: 0;
    }
  }
  
  @keyframes spaceship-2 {
    0% { 
      transform: translateX(80px) translateY(-30px) rotate(-10deg);
      opacity: 0;
    }
    8% { 
      opacity: 1;
    }
    92% { 
      opacity: 1;
    }
    100% { 
      transform: translateX(calc(-100vw - 80px)) translateY(30px) rotate(-10deg);
      opacity: 0;
    }
  }
  
  @keyframes spaceship-3 {
    0% { 
      transform: translateX(60px) translateY(-10px) rotate(5deg);
      opacity: 0;
    }
    10% { 
      opacity: 1;
    }
    90% { 
      opacity: 1;
    }
    100% { 
      transform: translateX(calc(-100vw - 60px)) translateY(10px) rotate(5deg);
      opacity: 0;
    }
  }
  
  @keyframes engine-glow {
    0%, 100% { 
      opacity: 0.3;
      transform: scaleX(0.8);
    }
    50% { 
      opacity: 0.8;
      transform: scaleX(1.2);
    }
  }
  
  .animate-spaceship-1 {
    animation: spaceship-1 4s linear infinite;
  }
  
  .animate-spaceship-2 {
    animation: spaceship-2 3.5s linear infinite;
  }
  
  .animate-spaceship-3 {
    animation: spaceship-3 3s linear infinite;
  }
  
  .animate-engine-glow {
    animation: engine-glow 0.5s ease-in-out infinite;
  }
`;

const SpaceBackground = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    // Generate random stars
    const generateStars = () => {
      const starArray = [];
      for (let i = 0; i < 150; i++) {
        starArray.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.8 + 0.2,
          twinkleDelay: Math.random() * 4,
        });
      }
      setStars(starArray);
    };

    generateStars();
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden bg-black">
      {/* Inject spaceship animation styles */}
      <style>{spaceshipStyles}</style>
      
      {/* Subtle dark purple accent gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-950/20 via-black to-purple-950/10 opacity-60" />
      
      {/* Animated stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white animate-pulse"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity * 0.7, // Reduced opacity for more subtle effect
            animationDelay: `${star.twinkleDelay}s`,
            animationDuration: `${3 + Math.random() * 2}s`, // Slower, more professional animation
          }}
        />
      ))}
      
      {/* Subtle accent dots instead of shooting stars */}
      <div className="absolute top-1/4 left-1/4 w-0.5 h-0.5 bg-purple-400 rounded-full animate-pulse opacity-40" 
           style={{ animationDelay: '2s', animationDuration: '4s' }} />
      <div className="absolute top-3/4 right-1/3 w-0.5 h-0.5 bg-purple-300 rounded-full animate-pulse opacity-30" 
           style={{ animationDelay: '6s', animationDuration: '5s' }} />
      <div className="absolute top-1/2 right-1/4 w-0.5 h-0.5 bg-purple-500 rounded-full animate-pulse opacity-35" 
           style={{ animationDelay: '10s', animationDuration: '4s' }} />

      {/* Alien Spaceships */}
      {/* Spaceship 1 */}
      <div 
        className="absolute animate-spaceship-1"
        style={{ 
          top: '60%', 
          right: '-100px',
          animationDelay: '12s',
          animationDuration: '4s',
          animationIterationCount: '1'
        }}
      >
        {/* Main ship body */}
        <div className="relative">
          <div className="w-8 h-3 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full"></div>
          <div className="absolute top-0.5 left-1 w-6 h-2 bg-gradient-to-r from-purple-300 to-purple-500 rounded-full"></div>
          <div className="absolute top-1 left-3 w-2 h-1 bg-cyan-300 rounded-full animate-pulse"></div>
          {/* Engine glow */}
          <div className="absolute -right-2 top-0.5 w-4 h-2 bg-gradient-to-r from-orange-400 to-transparent rounded-full animate-engine-glow"></div>
        </div>
      </div>

      {/* Spaceship 2 - Different design */}
      <div 
        className="absolute animate-spaceship-2"
        style={{ 
          top: '35%', 
          right: '-80px',
          animationDelay: '47s',
          animationDuration: '3.5s',
          animationIterationCount: '1'
        }}
      >
        <div className="relative">
          <div className="w-6 h-4 bg-gradient-to-b from-green-400 to-green-600 rounded-lg"></div>
          <div className="absolute top-1 left-0.5 w-5 h-2 bg-gradient-to-r from-green-300 to-green-500 rounded-full"></div>
          <div className="absolute top-1.5 left-2 w-2 h-1 bg-yellow-300 rounded-full animate-pulse"></div>
          {/* Engine trails */}
          <div className="absolute -right-3 top-1 w-5 h-1 bg-gradient-to-r from-blue-400 to-transparent rounded-full animate-engine-glow"></div>
          <div className="absolute -right-2 top-2.5 w-4 h-1 bg-gradient-to-r from-blue-300 to-transparent rounded-full animate-engine-glow"></div>
        </div>
      </div>

      {/* Spaceship 3 - Smallest */}
      <div 
        className="absolute animate-spaceship-3"
        style={{ 
          top: '15%', 
          right: '-60px',
          animationDelay: '89s',
          animationDuration: '3s',
          animationIterationCount: '1'
        }}
      >
        <div className="relative">
          <div className="w-5 h-2 bg-gradient-to-r from-pink-400 to-pink-600 rounded-full"></div>
          <div className="absolute top-0 left-1 w-3 h-2 bg-gradient-to-r from-pink-300 to-pink-500 rounded-full"></div>
          <div className="absolute top-0.5 left-2 w-1 h-1 bg-white rounded-full animate-pulse"></div>
          {/* Engine glow */}
          <div className="absolute -right-1.5 top-0 w-3 h-2 bg-gradient-to-r from-purple-400 to-transparent rounded-full animate-engine-glow"></div>
        </div>
      </div>
    </div>
  );
};

export default SpaceBackground;