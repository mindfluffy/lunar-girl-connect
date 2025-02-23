
import React from 'react';

const MoonLoader = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="relative w-16 h-16 animate-float">
        <div className="absolute inset-0 rounded-full bg-moonIndigo-50 opacity-20" />
        <div className="absolute inset-1 rounded-full bg-moonIndigo-100 animate-pulse" />
        <div className="absolute inset-0 rounded-full border-2 border-moonIndigo-50 animate-spin [animation-duration:3s]" />
      </div>
    </div>
  );
};

export default MoonLoader;
