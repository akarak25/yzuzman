'use client';

import { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    // Sayfa yüklendiğinde tema değerini localStorage'dan al
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDarkMode);
    updateTheme(isDarkMode);
  }, []);

  const toggleTheme = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    updateTheme(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());
  };

  const updateTheme = (isDark) => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 
                transition-all duration-300 shadow-lg hover:shadow-xl transform active:scale-95"
      aria-label={darkMode ? 'Açık Temaya Geç' : 'Koyu Temaya Geç'}
    >
      <div className="relative w-10 h-6 rounded-full bg-white dark:bg-gray-800 flex items-center justify-between px-1 overflow-hidden">
        <FaSun className="text-yellow-500 text-xs z-10" />
        <FaMoon className="text-indigo-300 text-xs z-10" />
        <div 
          className="absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-primary shadow-md transform transition-transform duration-300 ease-in-out"
          style={{ transform: darkMode ? 'translateX(100%)' : 'translateX(0)' }}
        ></div>
      </div>
    </button>
  );
}