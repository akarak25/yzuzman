'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight, FaLinkedin } from 'react-icons/fa';
import Container from './Container';
<<<<<<< HEAD
import useTranslation from '../hooks/useTranslation';
=======
import { useLanguage } from '../context/LanguageContext';
>>>>>>> 4ff658e466399608fb3515ee153f73b730615225

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1: sol, 1: sağ
  const [autoplay, setAutoplay] = useState(true);
  const timerRef = useRef(null);
<<<<<<< HEAD
  const { t } = useTranslation();
=======
  const { texts, language } = useLanguage();
>>>>>>> 4ff658e466399608fb3515ee153f73b730615225

  // Referanslar
  const testimonials = [
    {
      id: 1,
      name: 'Ahmet Yılmaz',
      role: 'Firma Yöneticisi',
      company: 'TechGlobal A.Ş.',
      avatar: '/placeholder.svg',
      stars: 5,
      content: 'YZ Uzman ekibiyle çalışmak gerçekten muhteşem bir deneyimdi. Projemiz için sunduğu yaratıcı çözümler sayesinde müşteri memnuniyetimiz %40 arttı ve operasyonel maliyetlerimiz önemli ölçüde azaldı. Profesyonel yaklaşımları ve teknik uzmanlıkları ile beklentilerimizin ötesine geçtiler.',
      linkedIn: 'https://linkedin.com'
    },
    {
      id: 2,
      name: 'Ayşe Kaya',
      role: 'Pazarlama Direktörü',
      company: 'Innovate Studio',
      avatar: '/placeholder.svg',
      stars: 5,
      content: 'E-ticaret sitemiz için YZ Uzman ekibinden aldığımız danışmanlık ve geliştirme hizmetleri sayesinde satışlarımız ilk iki ayda %65 arttı. Özellikle SEO ve kullanıcı deneyimi konusundaki önerileri rekabetçi piyasada öne çıkmamızı sağladı. Ekip her zaman ulaşılabilir ve çözüm odaklıydı.',
      linkedIn: 'https://linkedin.com'
    },
    {
      id: 3,
      name: 'Mehmet Demir',
      role: 'Startup Kurucusu',
      company: 'HealthTech',
      avatar: '/placeholder.svg',
      stars: 5,
      content: 'Sağlık sektörü için geliştirdiğimiz mobil uygulama, YZ Uzman ekibinin inanılmaz yeteneği ve detaylara olan dikkati sayesinde kısa sürede 50.000+ kullanıcıya ulaştı. Karmaşık bir projeyi böylesine verimli ve kaliteli bir şekilde hayata geçirdikleri için teşekkür ederiz.',
      linkedIn: 'https://linkedin.com'
    },
    {
      id: 4,
      name: 'Zeynep Aydın',
      role: 'Proje Müdürü',
      company: 'Fintech Solutions',
      avatar: '/placeholder.svg',
      stars: 4,
      content: 'Finans uygulamalarımızın modernizasyon sürecinde YZ Uzman\'ın gösterdiği performans ve iletişim kalitesi olağanüstüydü. Özellikle yeni teknolojilere geçiş sürecinde ekibin sağladığı rehberlik ve destek, projenin zamanında ve bütçe dahilinde tamamlanmasını sağladı.',
      linkedIn: 'https://linkedin.com'
    }
  ];

  const nextTestimonial = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Otomatik kaydırma için
  useEffect(() => {
    if (autoplay) {
      timerRef.current = setInterval(() => {
        nextTestimonial();
      }, 6000);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [activeIndex, autoplay]);

  // Kullanıcı etkileşiminde otomatik kaydırmayı durdur/başlat
  const handleUserInteraction = () => {
    setAutoplay(false);
    
    // 10 saniye sonra otomatik kaydırmayı tekrar başlat
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    
    const timeout = setTimeout(() => {
      setAutoplay(true);
    }, 10000);
    
    return () => clearTimeout(timeout);
  };

  // Variants for framer-motion
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0,
      scale: 0.9
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        type: 'spring',
        stiffness: 300,
        damping: 30
      }
    },
    exit: (direction) => ({
      x: direction < 0 ? 500 : -500,
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.3
      }
    })
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-950 relative overflow-hidden">
      {/* Arka plan dekoratif elementleri */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-[5%] w-64 h-64 rounded-full bg-primary/5 dark:bg-primary/10"></div>
        <div className="absolute bottom-10 right-[5%] w-96 h-96 rounded-full bg-purple-500/5 dark:bg-purple-500/10"></div>
        <FaQuoteLeft className="absolute top-20 left-[10%] text-9xl text-gray-100 dark:text-gray-800 transform -rotate-12" />
        <FaQuoteLeft className="absolute bottom-20 right-[10%] text-9xl text-gray-100 dark:text-gray-800 transform rotate-12" />
      </div>
      
      <Container className="relative z-10">
        <div className="text-center mb-16">
<<<<<<< HEAD
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">{t.testimonials.title}</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t.testimonials.subtitle}
=======
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">{texts.testimonials.title}</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {texts.testimonials.subtitle}
>>>>>>> 4ff658e466399608fb3515ee153f73b730615225
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto" onMouseEnter={handleUserInteraction}>
          {/* Navigasyon butonları */}
          <div className="absolute inset-y-0 left-0 flex items-center -ml-10 z-10">
            <motion.button 
              onClick={() => {
                prevTestimonial();
                handleUserInteraction();
              }}
              className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaChevronLeft />
            </motion.button>
          </div>
          
          <div className="absolute inset-y-0 right-0 flex items-center -mr-10 z-10">
            <motion.button 
              onClick={() => {
                nextTestimonial();
                handleUserInteraction();
              }}
              className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaChevronRight />
            </motion.button>
          </div>
          
          {/* Testimonial slider */}
          <div className="relative h-[470px] overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0"
              >
                <div className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 h-full flex flex-col">
                  {/* Üst kısım - Avatar ve isim */}
                  <div className="flex flex-col md:flex-row items-center mb-6 border-b border-gray-100 dark:border-gray-700 pb-6">
                    <div className="mb-4 md:mb-0 md:mr-6 relative">
                      <div className="w-24 h-24 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden relative z-10">
<<<<<<< HEAD
                        <span className="text-gray-400 dark:text-gray-500">{t.testimonials.projectImage}</span>
=======
                        <span className="text-gray-400 dark:text-gray-500">{texts.testimonials.projectImage}</span>
>>>>>>> 4ff658e466399608fb3515ee153f73b730615225
                      </div>
                      <div className="absolute -bottom-2 -left-2 w-28 h-28 bg-gradient-to-br from-primary to-purple-500 rounded-full opacity-20 blur-sm"></div>
                    </div>
                    
                    <div className="text-center md:text-left">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {testimonials[activeIndex].name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {testimonials[activeIndex].role}, <span className="font-medium">{testimonials[activeIndex].company}</span>
                      </p>
                      
                      {/* Yıldız derecelendirmesi */}
                      <div className="flex justify-center md:justify-start mt-2">
                        {[...Array(5)].map((_, i) => (
                          <FaStar 
                            key={i} 
                            className={`w-4 h-4 ${
                              i < testimonials[activeIndex].stars 
                                ? 'text-yellow-400' 
                                : 'text-gray-300 dark:text-gray-600'
                            }`} 
                          />
                        ))}
                      </div>
                      
                      {/* LinkedIn linki */}
                      <a 
                        href={testimonials[activeIndex].linkedIn}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center mt-3 text-primary dark:text-primary-400 hover:underline"
                      >
<<<<<<< HEAD
                        <FaLinkedin className="mr-1" /> {t.testimonials.viewProfile}
=======
                        <FaLinkedin className="mr-1" /> {texts.testimonials.viewProfile}
>>>>>>> 4ff658e466399608fb3515ee153f73b730615225
                      </a>
                    </div>
                  </div>
                  
                  {/* Testimonial içeriği */}
                  <div className="relative flex-grow">
                    <FaQuoteLeft className="text-4xl text-gray-200 dark:text-gray-700 absolute top-0 left-0" />
                    <p className="text-gray-700 dark:text-gray-300 mt-8 text-lg leading-relaxed pl-10">
                      {testimonials[activeIndex].content}
                    </p>
                  </div>
                  
                  {/* Testimonial kartı dekorasyonu */}
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary rounded-full opacity-10 dark:opacity-20"></div>
                  <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-purple-500 rounded-full opacity-10 dark:opacity-20"></div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Gösterge noktaları */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > activeIndex ? 1 : -1);
                  setActiveIndex(index);
                  handleUserInteraction();
                }}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeIndex 
                    ? 'bg-primary w-8'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        {/* İlave referanslar butonu */}
        <div className="text-center mt-12">
          <motion.button
            className="px-8 py-3 rounded-full bg-transparent border border-primary text-primary dark:border-primary-400 dark:text-primary-400 hover:bg-primary hover:text-white dark:hover:bg-primary-400 dark:hover:text-white transition-colors font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
<<<<<<< HEAD
            {t.testimonials.viewAll || 'Tüm Referansları Gör'}
=======
            Tüm Referansları Gör
>>>>>>> 4ff658e466399608fb3515ee153f73b730615225
          </motion.button>
        </div>
      </Container>
    </section>
  );
}