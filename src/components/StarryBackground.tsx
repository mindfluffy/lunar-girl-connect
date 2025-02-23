
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const StarryBackground = () => {
  const shouldReduceMotion = useReducedMotion();
  
  // Configuration des variants pour les étoiles
  const starVariants = {
    initial: { opacity: 0 },
    animate: { opacity: [0.2, 1, 0.2] },
  };

  return (
    <div className="fixed inset-0 w-full h-full -z-10">
      {/* Fond de base */}
      <div className="absolute inset-0 bg-moonIndigo-900">
        {/* Container des étoiles avec overflow hidden */}
        <div className="relative w-full h-full overflow-hidden">
          {/* Génération des étoiles */}
          {[...Array(50)].map((_, i) => {
            const size = Math.random() * 2 + 1;
            const delay = Math.random() * 3;
            
            return (
              <motion.div
                key={i}
                className="absolute rounded-full bg-white"
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                variants={starVariants}
                initial="initial"
                animate="animate"
                transition={{
                  duration: shouldReduceMotion ? 0 : 4,
                  delay: shouldReduceMotion ? 0 : delay,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
              />
            );
          })}
        </div>
        
        {/* Gradient pour ajouter de la profondeur */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-transparent via-moonIndigo-900/50 to-moonIndigo-900"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          style={{ mixBlendMode: 'multiply' }}
        />
      </div>
    </div>
  );
};

export default StarryBackground;
