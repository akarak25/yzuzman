'use client';

import { useRef, useEffect, useState } from 'react';
import { FaLaptopCode, FaUsers, FaSmile, FaTrophy } from 'react-icons/fa';
import Container from './Container';
import { useLanguage } from '../context/LanguageContext';

export default function StatisticsSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const { texts } = useLanguage();

  // İstatistik verileri
  const stats = [
    {
      icon: <FaLaptopCode className="text-blue-500 dark:text-blue-400 w-8 h-8" />,
      title: texts.statistics.completedProjects,
      value: 120,
      color: "text-blue-500 dark:text-blue-400"
    },
    {
      icon: <FaUsers className="text-green-500 dark:text-green-400 w-8 h-8" />,
      title: texts.statistics.happyClients,
      value: 85,
      color: "text-green-500 dark:text-green-400"
    },
    {
      icon: <FaSmile className="text-purple-500 dark:text-purple-400 w-8 h-8" />,
      title: texts.statistics.workingHours,
      value: "12.500+",
      color: "text-purple-500 dark:text-purple-400"
    },
    {
      icon: <FaTrophy className="text-amber-500 dark:text-amber-400 w-8 h-8" />,
      title: texts.statistics.awards,
      value: 15,
      color: "text-amber-500 dark:text-amber-400"
    }
  ];

  // Yetenek yüzdeleri
  const skills = [
    { name: texts.statistics.areas.webDesign, percentage: 95, color: "indigo" },
    { name: texts.statistics.areas.frontend, percentage: 90, color: "teal" },
    { name: texts.statistics.areas.backend, percentage: 85, color: "purple" },
    { name: texts.statistics.areas.mobile, percentage: 80, color: "amber" }
  ];

  // Sayfa görünür olduğunda animasyonları başlat
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white counter-section"
    >
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{texts.statistics.title}</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            {texts.statistics.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Sol taraf - İstatistikler */}
          <div>
            <h3 className="text-2xl font-bold mb-8">{texts.statistics.byNumbers}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg transition-transform duration-300 hover:transform hover:scale-105"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg mr-4">
                      {stat.icon}
                    </div>
                    <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300">{stat.title}</h4>
                  </div>
                  <div className={`text-4xl font-bold ${stat.color}`}>
                    {typeof stat.value === 'number' && isVisible
                      ? <CounterAnimation targetValue={stat.value} />
                      : stat.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sağ taraf - Yetenek çemberleri */}
          <div>
            <h3 className="text-2xl font-bold mb-8">{texts.statistics.expertiseAreas}</h3>
            <div className="grid grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <div key={index} className="text-center">
                  <div className="relative w-36 h-36 mx-auto mb-3">
                    {/* Arka plan daire */}
                    <div className="absolute inset-0 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                    
                    {/* İlerleme dairesi */}
                    <div 
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: `conic-gradient(rgb(var(--${skill.color}-color)) ${isVisible ? skill.percentage : 0}%, transparent 0%)`,
                        transition: 'background 1.5s ease-out'
                      }}
                    ></div>
                    
                    {/* İç daire (orta boşluk) */}
                    <div className="absolute inset-2 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center">
                      <span className={`text-xl font-bold text-${skill.color}-500 dark:text-${skill.color}-400`}>
                        {skill.percentage}%
                      </span>
                    </div>
                  </div>
                  <h4 className="text-lg font-medium">{skill.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

// Sayaç animasyonu için yardımcı bileşen
function CounterAnimation({ targetValue }) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let start = 0;
    const duration = 2000; // 2 saniye
    const steps = 60;
    const increment = targetValue / steps;
    let timer;
    
    const updateCount = () => {
      start += increment;
      if (start > targetValue) {
        setCount(targetValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    };
    
    timer = setInterval(updateCount, duration / steps);
    
    return () => clearInterval(timer);
  }, [targetValue]);
  
  return <>{count}</>;
}