'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaPhone } from 'react-icons/fa';
import Container from './Container';

export default function CTA() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simüle edilmiş form gönderimi
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setEmail('');
    }, 1500);
  };

  // Görünürlük kontrolü için
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={containerRef}
      className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-800 dark:to-purple-800 text-white relative overflow-hidden"
    >
      {/* Arka plan animasyonlu elementleri */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white opacity-5 rounded-full transform -translate-x-1/3 translate-y-1/3"></div>
        
        {/* Animasyonlu parçacıklar */}
        {[...Array(10)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute bg-white rounded-full opacity-10"
            initial={{ 
              width: Math.random() * 20 + 10, 
              height: Math.random() * 20 + 10,
              x: Math.random() * 100 - 50 + '%', 
              y: Math.random() * 100 + '%',
              opacity: 0.1
            }}
            animate={{ 
              y: ['-100%', '100%'],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: Math.random() * 20 + 10,
              ease: 'linear'
            }}
          />
        ))}
      </div>
      
      <Container className="relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Dijital Dönüşümünüze Bugün Başlayın!
          </motion.h2>
          
          <motion.p 
            className="text-xl text-white/90 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Rekabette öne geçmek için modern ve etkileyici dijital çözümler geliştiriyoruz.
            Size özel teklifimizi almak için hemen iletişime geçin.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {isSubmitted ? (
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 shadow-xl">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                >
                  <div className="w-16 h-16 bg-green-500 rounded-full mx-auto flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Teşekkürler!</h3>
                  <p className="text-white/80">Talebiniz alındı. En kısa sürede sizinle iletişime geçeceğiz.</p>
                </motion.div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="relative z-10">
                <div className="flex flex-col sm:flex-row gap-3 mb-6 max-w-xl mx-auto">
                  <div className="flex-grow relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="E-posta adresinizi girin"
                      className="w-full px-6 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                      required
                      disabled={isLoading}
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/5 to-transparent pointer-events-none"></div>
                  </div>
                  
                  <motion.button
                    type="submit"
                    className="px-8 py-4 rounded-full bg-white text-indigo-600 font-semibold shadow-lg hover:shadow-xl disabled:opacity-70 flex items-center justify-center"
                    disabled={isLoading}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {isLoading ? (
                      <svg className="animate-spin h-5 w-5 text-indigo-600 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    ) : (
                      <>
                        Teklif Alın <FaArrowRight className="ml-2" />
                      </>
                    )}
                  </motion.button>
                </div>
              </form>
            )}
            
            <motion.div 
              className="mt-8 flex items-center justify-center text-white/80"
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <span>veya bizi hemen arayın:</span>
              <a 
                href="tel:+902123456789" 
                className="inline-flex items-center ml-2 font-bold hover:text-white transition-colors group"
              >
                <FaPhone className="mr-2 group-hover:animate-bounce" />
                <span className="border-b border-white/50 group-hover:border-white">+90 212 345 67 89</span>
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
      
      {/* Alt dalga dekoratif element */}
      <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden">
        <svg
          preserveAspectRatio="none"
          width="100%"
          height="100%"
          viewBox="0 0 1440 74"
          className="fill-white dark:fill-gray-950"
        >
          <path d="M456.464 0.0433865C277.158 -1.70575 0 50.0141 0 50.0141V74H1440V50.0141C1440 50.0141 1320.4 31.1925 1243.09 27.0276C1099.33 19.2816 1019.08 53.1981 875.138 50.0141C710.527 46.3727 621.108 1.64949 456.464 0.0433865Z"></path>
        </svg>
      </div>
    </section>
  );
}