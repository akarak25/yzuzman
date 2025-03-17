'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowUp, FaRocket } from 'react-icons/fa';

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [hover, setHover] = useState(false);
  const [clicked, setClicked] = useState(false);

  // Kaydırma durumuna göre görünürlüğü kontrol et
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Yukarı kaydırma işlevi
  const scrollToTop = () => {
    setClicked(true);
    
    // Sayfa yukarı kaydırma
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    // Animasyon bittikten sonra tıklama durumunu sıfırla
    setTimeout(() => {
      setClicked(false);
    }, 1000);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-8 right-8 z-50 outline-none"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          aria-label="Yukarı Kaydır"
        >
          <div className="relative">
            {/* Ana buton */}
            <motion.div 
              className={`w-14 h-14 rounded-full flex items-center justify-center shadow-xl ${
                clicked 
                  ? 'bg-gradient-to-br from-purple-600 to-indigo-600' 
                  : 'bg-gradient-to-br from-indigo-600 to-purple-600'
              }`}
              animate={clicked ? { y: [-80, 0] } : {}}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              {clicked ? (
                <FaRocket className="text-white text-xl transform rotate-45" />
              ) : (
                <FaArrowUp className="text-white text-xl" />
              )}
            </motion.div>
            
            {/* Halka efekti */}
            <motion.div 
              className="absolute inset-0 rounded-full bg-indigo-400 -z-10"
              initial={{ opacity: 0, scale: 1 }}
              animate={hover ? { opacity: [0, 0.2, 0], scale: 1.5 } : { opacity: 0, scale: 1 }}
              transition={{ duration: 1.5, repeat: hover ? Infinity : 0, repeatType: "loop" }}
            />
            
            {/* İkinci halka efekti (zaman farklı) */}
            <motion.div 
              className="absolute inset-0 rounded-full bg-purple-400 -z-10"
              initial={{ opacity: 0, scale: 1 }}
              animate={hover ? { opacity: [0, 0.2, 0], scale: 1.8 } : { opacity: 0, scale: 1 }}
              transition={{ 
                duration: 1.5, 
                repeat: hover ? Infinity : 0, 
                repeatType: "loop",
                delay: 0.5
              }}
            />
          </div>
          
          {/* Yukarı kaydır metni */}
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={hover ? { opacity: 1, width: 'auto' } : { opacity: 0, width: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute right-16 top-1/2 transform -translate-y-1/2 whitespace-nowrap overflow-hidden"
          >
            <div className="bg-gray-800 dark:bg-gray-700 text-white px-3 py-1 rounded text-sm font-medium">
              Yukarı Çık
            </div>
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}