'use client';

import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaMobileAlt, FaNodeJs, FaDatabase, FaCode } from 'react-icons/fa';
import { SiNextdotjs, SiFlutter, SiExpress, SiAngular, SiVuedotjs, SiDjango, SiLaravel } from 'react-icons/si';
import Container from './Container';
import useTranslation from '../hooks/useTranslation';

export default function TechShowcase() {
  const containerRef = useRef(null);
  const [width, setWidth] = useState(0);
  const [activeCard, setActiveCard] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const { t, locale } = useTranslation();

  const cards = [
    {
      icon: <FaReact className="text-white text-5xl" />,
      title: t.tech.webDev,
      description: t.tech.webDevDesc,
      gradient: "from-indigo-600 to-purple-600",
      technologies: [
        { name: "React", icon: <FaReact className="text-white" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
        { name: "Vue", icon: <SiVuedotjs className="text-white" /> },
        { name: "Angular", icon: <SiAngular className="text-white" /> }
      ]
    },
    {
      icon: <FaMobileAlt className="text-white text-5xl" />,
      title: t.tech.mobileDev,
      description: t.tech.mobileDevDesc,
      gradient: "from-blue-500 to-cyan-500",
      technologies: [
        { name: "React Native", icon: <FaReact className="text-white" /> },
        { name: "Flutter", icon: <SiFlutter className="text-white" /> }
      ]
    },
    {
      icon: <FaNodeJs className="text-white text-5xl" />,
      title: t.tech.backend,
      description: t.tech.backendDesc,
      gradient: "from-green-500 to-emerald-500",
      technologies: [
        { name: "Node.js", icon: <FaNodeJs className="text-white" /> },
        { name: "Express", icon: <SiExpress className="text-white" /> },
        { name: "Django", icon: <SiDjango className="text-white" /> },
        { name: "Laravel", icon: <SiLaravel className="text-white" /> }
      ]
    },
    {
      icon: <FaDatabase className="text-white text-5xl" />,
      title: t.tech.database,
      description: t.tech.databaseDesc,
      gradient: "from-orange-500 to-yellow-500",
      technologies: []
    },
    {
      icon: <FaCode className="text-white text-5xl" />,
      title: t.tech.ai,
      description: t.tech.aiDesc,
      gradient: "from-red-500 to-pink-500",
      technologies: []
    }
  ];

  useEffect(() => {
    if (containerRef.current) {
      // Carousel genişliğini hesaplama
      setWidth(containerRef.current.scrollWidth - containerRef.current.offsetWidth);
    }
    
    const handleResize = () => {
      if (containerRef.current) {
        setWidth(containerRef.current.scrollWidth - containerRef.current.offsetWidth);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Seçilen karta kaydır
  const scrollToCard = (index) => {
    setActiveCard(index);
  };

  return (
    <section id="techShowcase" className="py-20 overflow-hidden bg-gray-100 dark:bg-black text-gray-900 dark:text-white relative">
      {/* Arka plan efektleri */}
      <div className="absolute inset-0 bg-gray-100 dark:bg-black">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-indigo-300/30 dark:bg-purple-800/20 rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-blue-300/30 dark:bg-blue-800/20 rounded-full filter blur-[100px]"></div>
      </div>
      
      <Container className="relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{t.tech.title}</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t.tech.subtitle}
          </p>
        </div>
      </Container>
      
      <div className="px-4 mb-16 relative">
        {/* Egzantrik 3D Carousel */}
        <motion.div 
          ref={containerRef}
          className="cursor-grab overflow-hidden mx-auto max-w-6xl"
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={() => setIsDragging(false)}
            onDrag={(e, info) => {
              if (containerRef.current) {
                // Sürükleme sırasında aktif kartı güncelle
                const cardWidth = containerRef.current.offsetWidth * 0.8;
                const scroll = containerRef.current.scrollLeft;
                const newActiveCard = Math.round(scroll / cardWidth);
                if (newActiveCard !== activeCard && newActiveCard >= 0 && newActiveCard < cards.length) {
                  setActiveCard(newActiveCard);
                }
              }
            }}
            className="flex gap-8 px-4"
          >
            {cards.map((card, index) => (
              <motion.div
                key={index}
                className={`min-w-[80%] md:min-w-[500px] p-1 ${!isDragging ? 'transition-transform duration-300' : ''}`}
                style={{
                  transform: `perspective(1500px) rotateY(${
                    index === activeCard ? 0 : index < activeCard ? -15 : 15
                  }deg) scale(${index === activeCard ? 1 : 0.9})`,
                  transformOrigin: index < activeCard ? 'right center' : 'left center',
                  zIndex: index === activeCard ? 10 : 1
                }}
                onClick={() => !isDragging && scrollToCard(index)}
                whileHover={{ scale: 1.02 }}
              >
                <div className={`h-[400px] rounded-3xl bg-gradient-to-br ${card.gradient} p-8 flex flex-col shadow-2xl relative overflow-hidden`}>
                  {/* Arka plan animasyonlu kabarcıklar */}
                  <div className="absolute w-64 h-64 rounded-full bg-white/5 -top-20 -right-20"></div>
                  <motion.div 
                    className="absolute w-32 h-32 rounded-full bg-white/5 bottom-10 -left-10"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  />
                  
                  <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-6">
                    {card.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
                  <p className="text-white/80 mb-8">{card.description}</p>
                  
                  {card.technologies.length > 0 && (
                    <div className="mt-auto">
                      <div className="flex flex-wrap gap-2">
                        {card.technologies.map((tech, techIndex) => (
                          <motion.div 
                            key={techIndex} 
                            className="bg-white/10 backdrop-blur-sm rounded-full px-3 py-1 text-sm flex items-center gap-2"
                            whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
                          >
                            {tech.icon}
                            <span>{tech.name}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Vurgulu köşe */}
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-white/10 rounded-full filter blur-xl"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        
        {/* Kaydırma göstergesi */}
        <div className="flex justify-center mt-8 space-x-2">
          {cards.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => scrollToCard(index)}
              className={`h-3 rounded-full bg-gray-400 dark:bg-gray-500 hover:bg-gray-600 dark:hover:bg-gray-300 transition-all duration-300`}
              style={{ width: index === activeCard ? '40px' : '12px' }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
        
        {/* Kaydırma metni */}
        <motion.div 
          className="text-center mt-8 text-gray-500 dark:text-gray-400"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span>{t.tech.scrollText}</span>
        </motion.div>
      </div>
    </section>
  );
}