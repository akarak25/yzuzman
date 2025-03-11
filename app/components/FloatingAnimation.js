'use client';

import { useEffect, useRef } from 'react';

export default function FloatingAnimation() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Full screen canvas
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // 3D Effect settings
    const particles = [];
    const particleCount = 200;
    const particleBaseSize = 3;
    const maxDepth = 1000;
    const focalLength = 300;
    const speed = 2;

    // Mouse position
    let mouseX = 0;
    let mouseY = 0;

    // Mouse movement effect
    window.addEventListener('mousemove', function(event) {
      mouseX = event.clientX - canvas.width / 2;
      mouseY = event.clientY - canvas.height / 2;
    });

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width - canvas.width / 2,
        y: Math.random() * canvas.height - canvas.height / 2,
        z: Math.random() * maxDepth,
        color: getRandomColor(),
        size: particleBaseSize
      });
    }

    // Random color generator with brand colors
    function getRandomColor() {
      const colors = [
        'rgba(79, 70, 229, 0.8)',  // primary (indigo)
        'rgba(16, 185, 129, 0.8)', // secondary (emerald)
        'rgba(139, 92, 246, 0.8)', // purple
        'rgba(14, 165, 233, 0.8)', // sky blue
        'rgba(249, 115, 22, 0.8)', // orange
        'rgba(236, 72, 153, 0.8)'  // pink
      ];
      return colors[Math.floor(Math.random() * colors.length)];
    }

    // Connection lines settings
    const connectionDistance = 100;
    const connectionLineWidth = 1;

    // Animation loop
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        // 3D effect projection
        const particle = particles[i];
        
        // Move particle along z-axis
        particle.z -= speed;
        
        // Reset particle if it goes out of bounds
        if (particle.z < 1) {
          particle.z = maxDepth;
          particle.x = Math.random() * canvas.width - canvas.width / 2;
          particle.y = Math.random() * canvas.height - canvas.height / 2;
        }
        
        // Calculate 3D projection
        const scale = focalLength / (focalLength + particle.z);
        const projectedX = particle.x * scale + canvas.width / 2 + (mouseX * scale * 0.1);
        const projectedY = particle.y * scale + canvas.height / 2 + (mouseY * scale * 0.1);
        const projectedSize = particle.size * scale;
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(projectedX, projectedY, projectedSize, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
        
        // Create connections between particles (web effect)
        for (let j = i + 1; j < particles.length; j++) {
          const otherParticle = particles[j];
          const otherScale = focalLength / (focalLength + otherParticle.z);
          const otherX = otherParticle.x * otherScale + canvas.width / 2 + (mouseX * otherScale * 0.1);
          const otherY = otherParticle.y * otherScale + canvas.height / 2 + (mouseY * otherScale * 0.1);
          
          // Calculate distance between particles in 2D projected space
          const dx = projectedX - otherX;
          const dy = projectedY - otherY;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          // Draw line if particles are close enough
          if (distance < connectionDistance) {
            const opacity = 1 - distance / connectionDistance;
            ctx.beginPath();
            ctx.moveTo(projectedX, projectedY);
            ctx.lineTo(otherX, otherY);
            
            // Gradient line
            const gradient = ctx.createLinearGradient(projectedX, projectedY, otherX, otherY);
            gradient.addColorStop(0, particle.color.replace('0.8', opacity * 0.8));
            gradient.addColorStop(1, otherParticle.color.replace('0.8', opacity * 0.8));
            
            ctx.strokeStyle = gradient;
            ctx.lineWidth = connectionLineWidth * Math.min(scale, otherScale);
            ctx.stroke();
          }
        }
      }
      
      animationFrameId = requestAnimationFrame(animate);
    }

    // Handle window resize
    function handleResize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    window.addEventListener('resize', handleResize);
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', function(event) {
        mouseX = event.clientX - canvas.width / 2;
        mouseY = event.clientY - canvas.height / 2;
      });
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full -z-10 opacity-70"
    />
  );
}