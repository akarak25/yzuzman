'use client';

import { useEffect, useState, useRef } from 'react';
import { FaArrowDown, FaRocket, FaCode, FaMobileAlt, FaLaptopCode } from 'react-icons/fa';

export default function HeroAnimated() {
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [typing, setTyping] = useState({ text: '', isDeleting: false, loopNum: 0, typingSpeed: 150 });
  
  const textArray = ["Web Tasarım", "Mobil Uygulama", "Yazılım Geliştirme", "Yapay Zeka", "Dijital Dönüşüm"];
  
  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  // Typing animation
  useEffect(() => {
    const { text, isDeleting, loopNum, typingSpeed } = typing;
    const fullText = textArray[loopNum % textArray.length];
    
    if (isDeleting) {
      setTyping(prev => ({
        ...prev,
        text: fullText.substring(0, text.length - 1),
        typingSpeed: 80
      }));
    } else {
      setTyping(prev => ({
        ...prev,
        text: fullText.substring(0, text.length + 1),
        typingSpeed: 150
      }));
    }
    
    let timer;
    
    if (!isDeleting && text === fullText) {
      timer = setTimeout(() => {
        setTyping(prev => ({ ...prev, isDeleting: true, typingSpeed: 50 }));
      }, 1500);
    } else if (isDeleting && text === '') {
      setTyping(prev => ({
        isDeleting: false,
        loopNum: prev.loopNum + 1,
        text: '',
        typingSpeed: 150
      }));
    } else {
      timer = setTimeout(() => {}, typing.typingSpeed);
    }
    
    const typingTimer = setTimeout(() => {
      if (!isDeleting && text !== fullText) {
        setTyping(prev => ({
          ...prev,
          text: fullText.substring(0, text.length + 1)
        }));
      } else if (isDeleting && text !== '') {
        setTyping(prev => ({
          ...prev,
          text: text.substring(0, text.length - 1)
        }));
      } else if (text === fullText) {
        setTimeout(() => {
          setTyping(prev => ({ ...prev, isDeleting: true }));
        }, 1500);
      } else if (text === '' && isDeleting) {
        setTyping(prev => ({
          isDeleting: false,
          loopNum: prev.loopNum + 1,
          text: ''
        }));
      }
    }, typingSpeed);
    
    return () => {
      clearTimeout(timer);
      clearTimeout(typingTimer);
    };
  }, [typing]);
  
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  // Rastgele kayan kod parçaları animasyonu
  const CodeFragment = ({ style, children }) => (
    <div
      className="absolute text-sm md:text-base font-mono text-white/40 backdrop-blur-sm p-2 rounded-md bg-white/5 shadow-lg transform transition-all duration-500 animate-float"
      style={style}
    >
      {children}
    </div>
  );

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen overflow-hidden text-white py-20 md:py-0 flex items-center bg-black"
    >
      {/* Dinamik arka plan */}
      <div className="absolute inset-0 bg-[#000510]">
        <div 
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(45, 50, 80, 0.9) 0%, rgba(5, 10, 25, 0.9) 50%)`,
            transition: 'background-position 0.3s ease-out'
          }}
        />
      </div>
      
      {/* Kod parçaları */}
      <CodeFragment style={{ top: '15%', left: '5%', transform: 'rotate(-5deg)' }}>
        <span className="text-blue-400">function</span> <span className="text-green-400">createApp</span>() &#123; ...
      </CodeFragment>
      
      <CodeFragment style={{ top: '25%', right: '10%', transform: 'rotate(3deg)' }}>
        <span className="text-purple-400">import</span> React <span className="text-purple-400">from</span> <span className="text-yellow-400">'react'</span>;
      </CodeFragment>
      
      <CodeFragment style={{ bottom: '35%', left: '8%', transform: 'rotate(2deg)' }}>
        <span className="text-pink-400">const</span> api = <span className="text-yellow-400">await</span> fetch(<span className="text-green-400">'/data'</span>);
      </CodeFragment>
      
      <CodeFragment style={{ bottom: '15%', right: '5%', transform: 'rotate(-3deg)' }}>
        <span className="text-blue-400">return</span> &#60;Component <span className="text-orange-400">props</span>=&#123;data&#125; /&#62;
      </CodeFragment>
      
      {/* İkinci arka plan tabakası - Arka plan ızgara */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25"></div>
      
      {/* Işık efektleri */}
      <div className="absolute top-0 w-1/2 h-1/3 bg-purple-600/20 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-1/2 h-1/3 bg-blue-600/20 blur-[100px] rounded-full"></div>
      
      {/* 3D Yüzen öğeler */}
      <div
        className="absolute w-16 h-16 md:w-20 md:h-20 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-800 shadow-xl"
        style={{
          top: '15%',
          right: '20%',
          transform: `
            perspective(1000px)
            rotateX(${mousePosition.y / 40}deg)
            rotateY(${-mousePosition.x / 40}deg)
            translateZ(20px)
          `,
          transition: 'transform 0.2s',
          animation: 'float 8s ease-in-out infinite'
        }}
      >
        <div className="h-full w-full flex items-center justify-center text-white">
          <FaCode size={24} />
        </div>
      </div>
      
      <div
        className="absolute w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-purple-600 to-pink-800 shadow-xl"
        style={{
          top: '60%',
          left: '10%',
          transform: `
            perspective(1000px)
            rotateX(${mousePosition.y / 30}deg)
            rotateY(${-mousePosition.x / 30}deg)
            translateZ(40px)
          `,
          transition: 'transform 0.2s',
          animation: 'float 6s ease-in-out infinite',
          animationDelay: '1s'
        }}
      >
        <div className="h-full w-full flex items-center justify-center text-white">
          <FaMobileAlt size={20} />
        </div>
      </div>
      
      <div
        className="absolute w-20 h-20 md:w-24 md:h-24 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-900 shadow-xl rotate-12"
        style={{
          bottom: '20%',
          right: '15%',
          transform: `
            perspective(1000px)
            rotateX(${mousePosition.y / 25}deg)
            rotateY(${-mousePosition.x / 25}deg)
            translateZ(30px)
            rotate(12deg)
          `,
          transition: 'transform 0.2s',
          animation: 'float 10s ease-in-out infinite',
          animationDelay: '0.5s'
        }}
      >
        <div className="h-full w-full flex items-center justify-center text-white">
          <FaLaptopCode size={28} />
        </div>
      </div>
      
      {/* Ana İçerik */}
      <div className="container-custom relative z-10 flex flex-col items-center md:items-start h-full justify-center">
        <div 
          className={`transition-all duration-1000 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
        >
          <div className="mb-4 inline-block">
            <div className="px-4 py-1 rounded-full bg-white/10 backdrop-blur-lg text-white text-sm font-medium border border-white/20 animate-pulse">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">YZ UZMAN</span> - Dijital Dünyada Öncü
            </div>
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 leading-tight text-center md:text-left">
            <div className="relative">
              <span className="block mb-2 text-white">Sınırsız</span>
              <div className="block relative">
                <span className="absolute bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                  {typing.text}
                </span>
                <span className="invisible">{textArray[typing.loopNum % textArray.length]}</span>
                <span className={`absolute top-0 right-0 transform -translate-x-1 h-full w-[2px] bg-white ${typing.isDeleting ? 'opacity-0' : 'opacity-100'}`} style={{ animation: 'blink 0.7s infinite' }}></span>
              </div>
              <span className="block mt-2 text-white">Çözümleri</span>
            </div>
          </h1>
          
          <p className="text-xl md:text-2xl max-w-2xl mb-10 text-gray-300 text-center md:text-left">
            Etkileyici web siteleri, <span className="text-blue-400 font-semibold">yenilikçi uygulamalar</span> ve güçlü 
            <span className="text-purple-400 font-semibold"> yazılım çözümleri</span> ile işinizi geleceğe taşıyoruz.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button 
              onClick={() => scrollToSection('contact')} 
              className="group relative overflow-hidden px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center justify-center">
                <FaRocket className="mr-2 group-hover:animate-bounce" />
                <span>Ücretsiz Danışmanlık</span>
              </div>
              <div className="absolute top-0 right-0 bottom-0 left-0 overflow-hidden opacity-0 group-hover:opacity-100">
                <div className="absolute top-[60%] left-0 w-full h-[40%] bg-white/20 blur-md transform rotate-12 translate-y-full group-hover:translate-y-[0%] transition-all duration-700"></div>
              </div>
            </button>
            
            <button 
              onClick={() => scrollToSection('portfolio')} 
              className="group px-8 py-4 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 text-white font-bold text-lg hover:bg-white/20 transition-all duration-300 relative overflow-hidden"
            >
              <span className="relative z-10">Çalışmalarımızı İnceleyin</span>
              <div className="absolute inset-0 translate-y-[100%] group-hover:translate-y-[0%] bg-gradient-to-t from-white/20 to-transparent transition-all duration-300"></div>
            </button>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer" onClick={() => scrollToSection('services')}>
          <FaArrowDown className="text-white text-2xl" />
        </div>
      </div>
      
      {/* Şekiller ve parçacıklar */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-white/20 backdrop-blur-sm"
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 10}s linear infinite`,
              opacity: Math.random() * 0.8
            }}
          />
        ))}
      </div>
      
      {/* Alt dalga */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-auto" style={{ display: 'block' }}>
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#f9fafb' }} />
              <stop offset="100%" style={{ stopColor: '#f3f4f6' }} />
            </linearGradient>
          </defs>
          <path 
            fill="url(#waveGradient)" 
            fillOpacity="1" 
            d="M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,165.3C672,171,768,213,864,213.3C960,213,1056,171,1152,138.7C1248,107,1344,85,1392,74.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}