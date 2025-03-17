'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaClock, FaUser, FaPen } from 'react-icons/fa';
import Container from './Container';
import useTranslation from '../hooks/useTranslation';

export default function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [activeInput, setActiveInput] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simüle edilmiş form gönderimi
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      // Form verilerini sıfırla
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  // Görünürlük kontrolü
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

  // Animasyon için varyantlar
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section 
      id="iletisim" 
      ref={sectionRef}
      className="py-20 bg-white dark:bg-gray-950 overflow-hidden"
    >
      <Container>
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl font-bold mb-4 text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            {t.contact.title}
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {t.contact.intro}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Sol taraf - İletişim bilgileri */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            <motion.div 
              variants={itemVariants}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg mb-8"
            >
              <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">{t.contact.contactUs}</h3>
              
              <div className="space-y-6">
                <motion.div 
                  className="flex items-start group"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mr-4 text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-200 dark:group-hover:bg-indigo-800/30 transition-colors">
                    <FaMapMarkerAlt size={18} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-1">{t.contact.address}</h4>
                    <p className="text-gray-600 dark:text-gray-300">{t.contact.addressValue}</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start group"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-4 text-blue-600 dark:text-blue-400 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/30 transition-colors">
                    <FaEnvelope size={18} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-1">{t.contact.email}</h4>
                    <a href="mailto:info@yzuzman.com" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-400 transition-colors">
                      info@yzuzman.com
                    </a>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start group"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-4 text-green-600 dark:text-green-400 group-hover:bg-green-200 dark:group-hover:bg-green-800/30 transition-colors">
                    <FaPhone size={18} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-1">{t.contact.phone}</h4>
                    <a href="tel:+902123456789" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-400 transition-colors">
                      +90 212 345 67 89
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div 
              variants={itemVariants} 
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mr-4 text-purple-600 dark:text-purple-400">
                  <FaClock size={18} />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">{t.contact.workingHours}</h3>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700">
                  <span className="text-gray-600 dark:text-gray-300">{t.contact.mondayFriday}</span>
                  <span className="font-medium text-gray-900 dark:text-white">09:00 - 18:00</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700">
                  <span className="text-gray-600 dark:text-gray-300">{t.contact.saturday}</span>
                  <span className="font-medium text-gray-900 dark:text-white">10:00 - 14:00</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-600 dark:text-gray-300">{t.contact.sunday}</span>
                  <span className="font-medium text-gray-900 dark:text-white">{t.contact.closed}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Sağ taraf - İletişim formu */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            <motion.div 
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700 relative overflow-hidden"
            >
              {/* Dekoratif köşe */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-br from-blue-500/20 to-teal-500/20 rounded-full"></div>
              
              <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white relative z-10">{t.contact.subtitle}</h3>
              
              {isSubmitted ? (
                <motion.div 
                  className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-300 rounded-lg p-6 text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-16 h-16 mx-auto bg-green-100 dark:bg-green-800 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-green-600 dark:text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold mb-2">{t.contact.success}</h4>
                  <p>{t.contact.successMsg}</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <div className="relative">
                    <div className={`absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 transition-all duration-300 ${activeInput === 'name' || formData.name ? 'text-primary -translate-y-10 text-xs' : ''}`}>
                      <FaUser className="inline mr-2" size={activeInput === 'name' || formData.name ? 12 : 16} />
                      <span>{t.contact.name}</span>
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-4 ${(activeInput === 'name' || formData.name) ? 'pt-6 pb-2' : ''} 
                        bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg 
                        focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-400 
                        text-gray-900 dark:text-white transition-all duration-300`}
                      onFocus={() => setActiveInput('name')}
                      onBlur={() => setActiveInput(null)}
                      required
                    />
                  </div>
                  
                  <div className="relative">
                    <div className={`absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 transition-all duration-300 ${activeInput === 'email' || formData.email ? 'text-primary -translate-y-10 text-xs' : ''}`}>
                      <FaEnvelope className="inline mr-2" size={activeInput === 'email' || formData.email ? 12 : 16} />
                      <span>{t.contact.email}</span>
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-4 ${(activeInput === 'email' || formData.email) ? 'pt-6 pb-2' : ''} 
                        bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg 
                        focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-400 
                        text-gray-900 dark:text-white transition-all duration-300`}
                      onFocus={() => setActiveInput('email')}
                      onBlur={() => setActiveInput(null)}
                      required
                    />
                  </div>
                  
                  <div className="relative">
                    <div className={`absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 transition-all duration-300 ${activeInput === 'subject' || formData.subject ? 'text-primary -translate-y-10 text-xs' : ''}`}>
                      <FaPen className="inline mr-2" size={activeInput === 'subject' || formData.subject ? 12 : 16} />
                      <span>{t.contact.subject}</span>
                    </div>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full px-4 py-4 ${(activeInput === 'subject' || formData.subject) ? 'pt-6 pb-2' : ''} 
                        bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg 
                        focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-400 
                        text-gray-900 dark:text-white transition-all duration-300`}
                      onFocus={() => setActiveInput('subject')}
                      onBlur={() => setActiveInput(null)}
                      required
                    />
                  </div>
                  
                  <div className="relative">
                    <div className={`absolute left-3 top-6 text-gray-400 transition-all duration-300 ${activeInput === 'message' || formData.message ? 'text-primary -translate-y-4 text-xs' : ''}`}>
                      <span>{t.contact.message}</span>
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full px-4 py-4 ${(activeInput === 'message' || formData.message) ? 'pt-6' : ''} 
                        bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg 
                        focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-400 
                        text-gray-900 dark:text-white transition-all duration-300 resize-none`}
                      onFocus={() => setActiveInput('message')}
                      onBlur={() => setActiveInput(null)}
                      required
                    ></textarea>
                  </div>
                  
                  <motion.button
                    type="submit"
                    className="w-full py-4 px-6 bg-gradient-to-r from-primary to-purple-600 hover:from-primary-darker hover:to-purple-700 text-white font-medium rounded-lg shadow-lg hover:shadow-primary/30 dark:hover:shadow-primary/50 flex items-center justify-center disabled:opacity-70"
                    disabled={isLoading}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isLoading ? (
                    <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {t.contact.sending}
                    </>
                    ) : (
                    t.contact.send
                    )}
                  </motion.button>
                </form>
              )}
            </motion.div>
          </motion.div>
        </div>
        
        {/* Harita kaldırıldı */}
        {/*
        <motion.div 
          className="mt-16 rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700"
          variants={itemVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <div className="w-full h-[400px] bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
            <div className="text-gray-500 dark:text-gray-400 text-center p-8">
              <h4 className="text-xl font-semibold mb-2">Bağdat Caddesi No:123, Kadıköy, İstanbul</h4>
              <p>Harita görselini eklemek için Google Maps API kullanılabilir.</p>
            </div>
          </div>
        </motion.div>
        */}
      </Container>
    </section>
  );
}