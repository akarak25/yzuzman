'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes, FaAngleDown } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';
import AnimatedLogo from './AnimatedLogo';
import useTranslation from '../hooks/useTranslation';
import LanguageToggle from './LanguageToggle';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const { t, locale } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleDropdownToggle = (index) => {
    if (activeDropdown === index) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(index);
    }
  };

  // Ana menü öğeleri - ID'leri doğru bölümlere göre ayarlanmış hali
  const menuItems = [
    { 
      title: locale === 'tr' ? 'Ana Sayfa' : 'Home', 
      href: '/' 
    },
    { 
      title: locale === 'tr' ? 'Hizmetlerimiz' : 'Services', 
      href: '#services',
      dropdown: [
        { title: locale === 'tr' ? 'Web Tasarım' : 'Web Design', href: '#services' },
        { title: locale === 'tr' ? 'Mobil Uygulama' : 'Mobile App', href: '#services' },
        { title: locale === 'tr' ? 'Yazılım Geliştirme' : 'Software Development', href: '#services' }
      ]
    },
    { 
      title: locale === 'tr' ? 'Portfolyo' : 'Portfolio', 
      href: '#portfolio' 
    },
    { 
      title: locale === 'tr' ? 'Teknolojiler' : 'Technologies', 
      href: '#techShowcase' 
    },
    { 
      title: locale === 'tr' ? 'İletişim' : 'Contact', 
      href: '#iletisim' 
    }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <AnimatedLogo />
          
          {/* Masaüstü Menüsü */}
          <nav className="hidden md:flex items-center space-x-1">
            {menuItems.map((item, index) => (
              <div key={index} className="relative group">
                {item.dropdown ? (
                  <>
                    <button
                      className="px-4 py-2 text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary font-medium rounded-lg group flex items-center"
                      onClick={() => handleDropdownToggle(index)}
                    >
                      {item.title}
                      <FaAngleDown 
                        className={`ml-1 transition-transform duration-200 ${
                          activeDropdown === index ? 'rotate-180' : ''
                        }`} 
                      />
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                    </button>
                    
                    {activeDropdown === index && (
                      <div className="absolute top-full left-0 mt-1 w-48 rounded-lg overflow-hidden shadow-xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 transition-all duration-300 z-50">
                        {item.dropdown.map((subItem, subIndex) => (
                          <Link href={subItem.href} key={subIndex} legacyBehavior>
                            <a
                              className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                              onClick={() => {
                                setActiveDropdown(null);
                                setIsOpen(false);
                              }}
                            >
                              {subItem.title}
                            </a>
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link href={item.href} legacyBehavior>
                    <a className="px-4 py-2 text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary font-medium rounded-lg relative group">
                      {item.title}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                    </a>
                  </Link>
                )}
              </div>
            ))}
            
            {/* Tema değiştirme butonu */}
            <div className="ml-4">
              <ThemeToggle />
            </div>

            {/* Dil değiştirme butonu */}
            <div className="ml-4">
              <LanguageToggle />
            </div>
            
            {/* İletişim Butonu */}
            <Link href="#iletisim" legacyBehavior>
            <a className="ml-4 px-5 py-2 bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            {locale === 'tr' ? 'Bize Ulaşın' : 'Contact Us'}
            </a>
            </Link>
          </nav>
          
          {/* Mobil Menü Düğmesi */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <LanguageToggle />
            <button
              type="button"
              onClick={toggleMenu}
              className="p-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
        
        {/* Mobil Menü */}
        {isOpen && (
          <div className="md:hidden mt-4 py-2 rounded-lg bg-white dark:bg-gray-800 shadow-xl border border-gray-100 dark:border-gray-700">
            <nav className="flex flex-col space-y-1 px-2 py-1">
              {menuItems.map((item, index) => (
                <div key={index}>
                  {item.dropdown ? (
                    <>
                      <button
                        className="w-full text-left px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg flex justify-between items-center"
                        onClick={() => handleDropdownToggle(index)}
                      >
                        {item.title}
                        <FaAngleDown 
                          className={`transition-transform duration-200 ${
                            activeDropdown === index ? 'rotate-180' : ''
                          }`} 
                        />
                      </button>
                      
                      {activeDropdown === index && (
                        <div className="ml-4 mt-1 space-y-1">
                          {item.dropdown.map((subItem, subIndex) => (
                            <Link href={subItem.href} key={subIndex} legacyBehavior>
                              <a
                                className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
                                onClick={() => {
                                  setActiveDropdown(null);
                                  setIsOpen(false);
                                }}
                              >
                                {subItem.title}
                              </a>
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link href={item.href} legacyBehavior>
                      <a
                        className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.title}
                      </a>
                    </Link>
                  )}
                </div>
              ))}
              
              {/* Mobil İletişim Butonu */}
              <Link href="#iletisim" legacyBehavior>
                <a 
                  className="mx-2 my-2 px-4 py-2 bg-gradient-to-r from-primary to-purple-600 text-white font-medium rounded-lg text-center"
                  onClick={() => setIsOpen(false)}
                >
                  {locale === 'tr' ? 'Bize Ulaşın' : 'Contact Us'}
                </a>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}