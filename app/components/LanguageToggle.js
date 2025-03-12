'use client';

import { useLanguage } from '../context/LanguageContext';

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button 
      onClick={toggleLanguage}
      className="flex items-center justify-center bg-primary/10 hover:bg-primary/20 p-2 rounded-full transition-colors"
      aria-label={language === 'tr' ? 'Switch to English' : 'Türkçe\'ye geç'}
    >
      <span className="font-medium text-sm">
        {language === 'tr' ? 'EN' : 'TR'}
      </span>
    </button>
  );
}
