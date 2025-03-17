'use client';

import { useState, useRef, useEffect } from 'react';

export default function ThreeDCard({ title, description, icon, color = "primary" }) {
  const cardRef = useRef(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  
  // Hareket değerleri
  const rotateX = isHovered ? (coords.y / 5) : 0;
  const rotateY = isHovered ? (coords.x / 10) : 0;
  
  // Renk varyantları
  const colorVariants = {
    primary: "from-indigo-500 to-purple-600",
    secondary: "from-emerald-500 to-teal-600",
    info: "from-blue-500 to-cyan-600",
    warning: "from-amber-500 to-orange-600",
    danger: "from-rose-500 to-pink-600"
  };
  
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const cardCenterX = rect.left + rect.width / 2;
    const cardCenterY = rect.top + rect.height / 2;
    
    // Fare pozisyonu (merkezden ne kadar uzakta)
    const x = -(cardCenterX - e.clientX) / 5;
    const y = (cardCenterY - e.clientY) / 5;
    
    setCoords({ x, y });
  };
  
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  
  const handleMouseLeave = () => {
    setIsHovered(false);
    setCoords({ x: 0, y: 0 });
  };
  
  return (
    <div 
      ref={cardRef}
      className="perspective-1000 relative h-64 overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div 
        className={`relative h-full w-full rounded-xl p-6 shadow-xl transition-all duration-300 ease-out 
                    ${isHovered ? 'shadow-2xl' : 'shadow-lg'}`}
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transformStyle: 'preserve-3d'
        }}
      >
        {/* Card Background */}
        <div 
          className={`absolute inset-0 rounded-xl bg-gradient-to-br ${colorVariants[color]} opacity-80`}
          style={{
            transform: 'translateZ(-10px)',
            filter: isHovered ? 'brightness(1.1)' : 'brightness(1)'
          }}
        />
        
        {/* Glow Effect */}
        <div 
          className="absolute inset-0 rounded-xl bg-white opacity-0 transition-opacity duration-300"
          style={{
            boxShadow: '0 0 40px 20px rgba(255, 255, 255, 0.8) inset',
            opacity: isHovered ? 0.15 : 0,
          }}
        />
        
        {/* Card Content */}
        <div className="relative flex h-full flex-col text-white z-10">
          <div 
            className="mb-4 rounded-full bg-white/20 p-3 backdrop-blur-md w-14 h-14 flex items-center justify-center text-3xl"
            style={{ transform: `translateZ(20px)` }}
          >
            {icon}
          </div>
          
          <h3 
            className="text-2xl font-bold mb-2"
            style={{ transform: `translateZ(30px)` }}
          >
            {title}
          </h3>
          
          <p 
            className="text-white/80"
            style={{ transform: `translateZ(25px)` }}
          >
            {description}
          </p>
          
          {/* Shine Effects */}
          <div 
            className="absolute inset-0 rounded-xl"
            style={{
              background: `radial-gradient(circle at ${coords.x + 50}% ${coords.y + 50}%, transparent 0%, rgba(255, 255, 255, 0.12) 45%, transparent 100%)`,
              opacity: isHovered ? 1 : 0,
              transition: 'opacity 0.3s ease'
            }}
          />
        </div>
      </div>
    </div>
  );
}