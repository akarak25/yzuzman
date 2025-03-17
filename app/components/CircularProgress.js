'use client';

import { useState, useEffect, useRef } from 'react';

export default function CircularProgress({ 
  percentage, 
  color = "#4F46E5", 
  size = 120, 
  strokeWidth = 8, 
  duration = 1.5,
  label
}) {
  const [progress, setProgress] = useState(0);
  const circleRef = useRef(null);
  
  // SVG parametrelerini hesapla
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;
  
  useEffect(() => {
    // Observer ile görünürlüğü kontrol et
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Eleman görünür olduğunda animasyonu başlat
          const timer = setTimeout(() => {
            setProgress(percentage);
          }, 100);
          return () => clearTimeout(timer);
        }
      },
      { threshold: 0.1 }
    );
    
    if (circleRef.current) {
      observer.observe(circleRef.current);
    }
    
    return () => {
      if (circleRef.current) {
        observer.unobserve(circleRef.current);
      }
    };
  }, [percentage]);
  
  return (
    <div className="flex flex-col items-center" ref={circleRef}>
      <div className="relative" style={{ width: size, height: size }}>
        {/* Arka plan dairesi */}
        <svg
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          style={{ transform: 'rotate(-90deg)' }}
        >
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="#e2e8f0"
            strokeWidth={strokeWidth}
          />
          
          {/* İlerleme dairesi */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            style={{
              transition: `stroke-dashoffset ${duration}s ease-in-out`
            }}
          />
        </svg>
        
        {/* Merkezdeki yüzde */}
        <div
          className="absolute inset-0 flex items-center justify-center text-2xl font-bold"
          style={{ color }}
        >
          {progress}%
        </div>
      </div>
      
      {label && (
        <div className="mt-3 text-center">
          <p className="text-lg font-medium">{label}</p>
        </div>
      )}
    </div>
  );
}