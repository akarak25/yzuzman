'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCode, FaHeart } from 'react-icons/fa';
import Container from './Container';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const [year, setYear] = useState(new Date().getFullYear());
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const { texts, language } = useLanguage();

  useEffect(() => {
    setIsVisible(true);
    setYear(new Date().getFullYear());
  }, []);

  // Ana menü linkleri
  const navLinks = [
    { name: language === 'tr' ? 'Ana Sayfa' : 'Home', href: '/' },
    { name: texts.nav.services, href: '#services' },
    { name: texts.portfolio.title, href: '#portfolio' },
    { name: language === 'tr' ? 'Ekibimiz' : 'Our Team', href: '#team' },
    { name: texts.contact.title, href: '#iletisim' }
  ];

  // Sosyal medya linkleri
  const socialLinks = [
    { name: 'Facebook', icon: <FaFacebook />, href: '#', color: 'hover:bg-blue-600' },
    { name: 'Twitter', icon: <FaTwitter />, href: '#', color: 'hover:bg-sky-500' },
    { name: 'Instagram', icon: <FaInstagram />, href: '#', color: 'hover:bg-pink-600' },
    { name: 'LinkedIn', icon: <FaLinkedin />, href: '#', color: 'hover:bg-blue-700' },
    { name: 'GitHub', icon: <FaGithub />, href: '#', color: 'hover:bg-gray-800 dark:hover:bg-gray-50 dark:hover:text-gray-900' }
  ];

  // Hizmetler
  const services = [
    { name: texts.footer.serviceList.webDesign, href: '#' },
    { name: texts.footer.serviceList.mobileDev, href: '#' },
    { name: texts.footer.serviceList.backend, href: '#' },
    { name: texts.footer.serviceList.ecommerce, href: '#' },
    { name: texts.footer.serviceList.seo, href: '#' }
  ];

  // İletişim bilgileri
  const contactInfo = [
    { icon: <FaMapMarkerAlt />, text: texts.footer.address },
    { icon: <FaEnvelope />, text: 'info@yzuzman.com', href: 'mailto:info@yzuzman.com' },
    { icon: <FaPhone />, text: '+90 212 345 67 89', href: 'tel:+902123456789' }
  ];

  // Animasyon için variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
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
      transition: { duration: 0.5 }
    }
  };

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white pt-16 relative overflow-hidden">
      {/* Arka plan dekoratif elementleri */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary via-purple-500 to-blue-500"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full transform translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full transform -translate-x-1/2 translate-y-1/2 blur-3xl"></div>
      
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12"
        >
          {/* Logo ve Hakkında Kısmı */}
          <motion.div variants={itemVariants} className="space-y-6">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-blue-500">
                YZ UZMAN
              </span>
            </Link>
            <p className="text-gray-400 dark:text-gray-300">
              {texts.footer.about}
            </p>
            
            {/* Sosyal Medya İkonları */}
            <div className="flex space-x-2">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  className={`w-10 h-10 rounded-full flex items-center justify-center bg-gray-800 dark:bg-gray-700 text-gray-300 hover:text-white transition-all duration-300 ${link.color}`}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: [0, -5, 5, -5, 5, 0],
                    transition: { duration: 0.5 }
                  }}
                  onMouseEnter={() => setHoveredIcon(index)}
                  onMouseLeave={() => setHoveredIcon(null)}
                  aria-label={link.name}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          {/* Hızlı Linkler */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6 relative inline-block">
              {texts.footer.quickLinks}
              <span className="absolute -bottom-1 left-0 w-12 h-1 bg-primary rounded-full"></span>
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 dark:text-gray-300 hover:text-primary dark:hover:text-primary-400 transition-colors flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-gray-600 dark:bg-gray-500 rounded-full mr-2 group-hover:bg-primary dark:group-hover:bg-primary-400 transition-colors"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Hizmetlerimiz */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6 relative inline-block">
              {texts.footer.services}
              <span className="absolute -bottom-1 left-0 w-12 h-1 bg-primary rounded-full"></span>
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link 
                    href={service.href}
                    className="text-gray-400 dark:text-gray-300 hover:text-primary dark:hover:text-primary-400 transition-colors flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-gray-600 dark:bg-gray-500 rounded-full mr-2 group-hover:bg-primary dark:group-hover:bg-primary-400 transition-colors"></span>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* İletişim */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6 relative inline-block">
              {texts.footer.contact}
              <span className="absolute -bottom-1 left-0 w-12 h-1 bg-primary rounded-full"></span>
            </h4>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-gray-800 dark:bg-gray-700 flex items-center justify-center mr-3 mt-0.5 text-primary dark:text-primary-400">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    {item.href ? (
                      <a 
                        href={item.href} 
                        className="text-gray-400 dark:text-gray-300 hover:text-primary dark:hover:text-primary-400 transition-colors"
                      >
                        {item.text}
                      </a>
                    ) : (
                      <span className="text-gray-400 dark:text-gray-300">{item.text}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </Container>
      
      {/* Alt bilgi çizgisi */}
      <div className="border-t border-gray-800 dark:border-gray-700 py-8">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {year} YZ UZMAN. {texts.footer.rights}.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500 dark:text-gray-400">
              <Link href="/privacy-policy" className="hover:text-primary dark:hover:text-primary-400 transition-colors">
                {texts.footer.privacy}
              </Link>
              <span className="hidden md:inline">|</span>
              <Link href="#" className="hover:text-primary dark:hover:text-primary-400 transition-colors">
                {texts.footer.terms}
              </Link>
              <span className="hidden md:inline">|</span>
              <Link href="#" className="hover:text-primary dark:hover:text-primary-400 transition-colors">
                {texts.footer.kvkk}
              </Link>
              <span className="hidden md:inline">|</span>
              <span className="flex items-center">
                <FaCode className="mr-1 text-primary" /> 
                <span className="text-gray-400">
                  <FaHeart className="inline text-red-500 mx-1 animate-pulse" size={10} /> 
                  {texts.footer.madeWith}
                </span>
              </span>
            </div>
          </div>
        </Container>
      </div>
      
      {/* Footer'daki Scroll to top button kaldırıldı */}
    </footer>
  );
}