
import React from 'react';

const StarryBackground = () => {
  return (
    <div className="fixed inset-0 w-full h-full -z-10 bg-moonIndigo-900">
      <div className="absolute inset-0 w-full h-full">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white animate-twinkle"
            style={{
              width: Math.random() * 2 + 1 + 'px',
              height: Math.random() * 2 + 1 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animationDelay: Math.random() * 2 + 's',
            }}
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-moonIndigo-900/50 to-moonIndigo-900" />
    </div>
  );
};

export default StarryBackground;
