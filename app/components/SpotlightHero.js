'use client';

import { useState, useEffect, useRef } from 'react';
import { FaArrowRight, FaRegLightbulb, FaCode, FaMobileAlt } from 'react-icons/fa';

export default function SpotlightHero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [spotlightVisible, setSpotlightVisible] = useState(false);
  const heroRef = useRef(null);
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };
    
    const handleMouseEnter = () => {
      setSpotlightVisible(true);
    };
    
    const handleMouseLeave = () => {
      setSpotlightVisible(false);
    };
    
    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
      heroElement.addEventListener('mouseenter', handleMouseEnter);
      heroElement.addEventListener('mouseleave', handleMouseLeave);
    }
    
    return () => {
      if (heroElement) {
        heroElement.removeEventListener('mousemove', handleMouseMove);
        heroElement.removeEventListener('mouseenter', handleMouseEnter);
        heroElement.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);
  
  return (
    <section 
      ref={heroRef}
      className="relative w-full overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 pt-28 pb-16 min-h-screen"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10 min-h-[80vh] flex flex-col justify-center">
        <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Metin bölümü */}
          <div className="relative z-10">
            <div className="mb-3 animate-fadeIn">
              <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-primary/10 text-primary dark:bg-primary/20 border border-primary/20">
                En Yeni Teknolojiler
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-gray-900 dark:text-white leading-tight animate-fadeInUp" style={{animationDelay: '0.1s'}}>
              <span className="block">Dijital Dünyada</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-pink-500 animate-gradient">
                Fark Yaratın
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg animate-fadeInUp" style={{animationDelay: '0.2s'}}>
              Web tasarım, mobil uygulama ve yazılım geliştirme alanlarında uzman ekibimizle, projelerinizi bir üst seviyeye taşıyoruz.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fadeInUp" style={{animationDelay: '0.3s'}}>
              <a 
                href="#contact" 
                className="relative group px-6 py-3 bg-gradient-to-r from-primary to-purple-600 hover:from-primary-600 hover:to-purple-700 text-white font-medium rounded-lg shadow-lg hover:shadow-primary/50 transition-all duration-300 text-center overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center">
                  Ücretsiz Danışmanlık
                  <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <span className="absolute inset-0 h-full w-full bg-gradient-to-r from-purple-600 to-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
              </a>
              
              <a 
                href="#portfolio" 
                className="px-6 py-3 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-white border border-gray-200 dark:border-gray-700 font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center"
              >
                Projelerimizi İnceleyin
              </a>
            </div>
            
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 items-center animate-fadeIn" style={{animationDelay: '0.5s'}}>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary dark:text-primary-400 mb-1 counter-animate" data-target="120">0</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Tamamlanan Proje</div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-primary dark:text-primary-400 mb-1 counter-animate" data-target="95">0</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Müşteri Memnuniyeti</div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-primary dark:text-primary-400 mb-1 counter-animate" data-target="3">0</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Yıllık Tecrübe</div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-primary dark:text-primary-400 mb-1">24/7</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Teknik Destek</div>
              </div>
            </div>
          </div>
          
          {/* Görsel bölümü */}
          <div className="relative flex justify-center items-center animate-fadeIn" style={{animationDelay: '0.4s'}}>
            <div className="relative w-full max-w-md">
              {/* Ana görsel */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-primary/30 rounded-2xl blur-3xl transform rotate-6 scale-95"></div>
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700 transform hover:scale-[1.01] transition-transform duration-300">
                <div className="aspect-square w-full relative">
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-700">
                    <div className="p-8 text-center">
                      <div className="inline-block p-4 bg-primary/10 dark:bg-primary/20 mb-4 rounded-full animate-bounce">
                        <FaCode className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Web & Mobil Çözümler</h3>
                      <p className="text-gray-500 dark:text-gray-300">Modern teknolojilerle geliştirilen projeler</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Yan elementler */}
              <div className="absolute -right-8 top-1/4 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 transform rotate-3 hover:rotate-6 transition-transform duration-300 animate-float">
                <FaMobileAlt className="w-8 h-8 text-blue-500" />
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 transform -rotate-6 hover:-rotate-12 transition-transform duration-300 animate-float" style={{animationDelay: '1s'}}>
                <FaRegLightbulb className="w-8 h-8 text-purple-500" />
              </div>
              
              <div className="absolute top-1/2 -left-10 bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 transform -rotate-12 hover:-rotate-6 transition-transform duration-300 animate-float" style={{animationDelay: '0.5s'}}>
                <span className="font-mono text-xs text-gray-800 dark:text-gray-200">{'<code/>'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Spotlight efekti */}
      <div 
        className={`pointer-events-none absolute inset-0 z-0 transition-opacity duration-300 ${
          spotlightVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(79, 70, 229, 0.15), transparent 40%)`,
        }}
      />
      
      {/* Dekoratif şekiller */}
      <div className="hidden sm:block absolute top-1/4 right-0 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl"></div>
      <div className="hidden sm:block absolute bottom-0 left-1/4 w-80 h-80 bg-purple-500/10 rounded-full filter blur-3xl"></div>
      
      {/* Alt dalga */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="h-12 w-full">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.92,140.87,111.31,208.18,107.58,302.15,101.77,256.48,68.18,321.39,56.44Z" className="fill-white dark:fill-gray-800"></path>
        </svg>
      </div>
    </section>
  );
}