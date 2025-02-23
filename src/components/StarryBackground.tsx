
import React from 'react';

const StarryBackground = () => {
  return (
    <div className="fixed inset-0 w-full h-full -z-10">
      {/* Fond de base */}
      <div className="absolute inset-0 bg-moonIndigo-900">
        {/* Container des étoiles avec overflow hidden */}
        <div className="relative w-full h-full overflow-hidden">
          {/* Génération des étoiles */}
          {[...Array(50)].map((_, i) => {
            const size = Math.random() * 2 + 1;
            const animationDelay = Math.random() * 3;
            
            return (
              <div
                key={i}
                className="absolute rounded-full bg-white animate-twinkle"
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${animationDelay}s`,
                  opacity: Math.random() * 0.5 + 0.5, // Opacité de base aléatoire
                }}
              />
            );
          })}
        </div>
        
        {/* Gradient pour ajouter de la profondeur */}
        <div 
          className="absolute inset-0 bg-gradient-to-b from-transparent via-moonIndigo-900/50 to-moonIndigo-900"
          style={{ mixBlendMode: 'multiply' }}
        />
      </div>
    </div>
  );
};

export default StarryBackground;
