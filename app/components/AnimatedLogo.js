'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function AnimatedLogo() {
  const [isHovered, setIsHovered] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    // Sayfa yüklendiğinde başlangıç animasyonu
    setIsAnimating(true);
    
    const timeout = setTimeout(() => {
      setIsAnimating(false);
    }, 1000);
    
    return () => clearTimeout(timeout);
  }, []);
  
  const handleMouseEnter = () => {
    setIsHovered(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    
    // Hover animasyonu başlatma
    setIsAnimating(true);
  };
  
  const handleMouseLeave = () => {
    setIsHovered(false);
    
    // Animasyonu durdurmak için timeout
    timeoutRef.current = setTimeout(() => {
      setIsAnimating(false);
    }, 800);
  };
  
  const handleClick = () => {
    // Tıklandığında ekstra animasyon
    setIsAnimating(true);
    
    timeoutRef.current = setTimeout(() => {
      setIsAnimating(false);
    }, 800);
  };
  
  return (
    <Link href="/" legacyBehavior>
      <a 
        className="relative inline-block"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        <div className="flex items-center relative">
          {/* Arka plan etkisi */}
          <div 
            className={`absolute -inset-4 bg-gradient-to-r from-primary/40 to-purple-500/40 rounded-full blur-lg transition-opacity duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          ></div>
          
          {/* Logo karakterleri */}
          <div className="relative flex items-center text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
            {/* Y */}
            <span 
              className={`inline-block transition-transform duration-300 ${
                isAnimating ? 'animate-bounce' : ''
              }`}
              style={{ animationDuration: '0.3s', animationDelay: '0s' }}
            >
              Y
            </span>
            
            {/* Z */}
            <span 
              className={`inline-block transition-transform duration-300 ${
                isAnimating ? 'animate-bounce' : ''
              }`}
              style={{ animationDuration: '0.3s', animationDelay: '0.1s' }}
            >
              Z
            </span>
            
            {/* Küçük boşluk */}
            <span className="ml-2"></span>
            
            {/* U */}
            <span 
              className={`inline-block transition-transform duration-300 ${
                isAnimating ? 'animate-bounce' : ''
              }`}
              style={{ animationDuration: '0.3s', animationDelay: '0.2s' }}
            >
              U
            </span>
            
            {/* Z */}
            <span 
              className={`inline-block transition-transform duration-300 ${
                isAnimating ? 'animate-bounce' : ''
              }`}
              style={{ animationDuration: '0.3s', animationDelay: '0.3s' }}
            >
              Z
            </span>
            
            {/* M */}
            <span 
              className={`inline-block transition-transform duration-300 ${
                isAnimating ? 'animate-bounce' : ''
              }`}
              style={{ animationDuration: '0.3s', animationDelay: '0.4s' }}
            >
              M
            </span>
            
            {/* A */}
            <span 
              className={`inline-block transition-transform duration-300 ${
                isAnimating ? 'animate-bounce' : ''
              }`}
              style={{ animationDuration: '0.3s', animationDelay: '0.5s' }}
            >
              A
            </span>
            
            {/* N */}
            <span 
              className={`inline-block transition-transform duration-300 ${
                isAnimating ? 'animate-bounce' : ''
              }`}
              style={{ animationDuration: '0.3s', animationDelay: '0.6s' }}
            >
              N
            </span>
          </div>
          
          {/* Logo işareti */}
          <div 
            className={`absolute -top-3 -right-3 w-5 h-5 bg-gradient-to-br from-primary to-purple-600 rounded-full shadow-lg shadow-primary/40 transition-all duration-300 ${
              isAnimating ? 'animate-ping' : ''
            }`}
          ></div>
        </div>
      </a>
    </Link>
  );
}