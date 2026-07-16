import React from 'react';

const Logo = ({ className = "w-12 h-12" }) => {
  return (
    <div className={`flex items-center justify-center shrink-0 ${className}`}>
      <img 
        src="/anhdep/logo.png" 
        alt="Tiệm 1998 Logo" 
        className="w-full h-full object-contain" 
      />
    </div>
  );
};

export default Logo;
