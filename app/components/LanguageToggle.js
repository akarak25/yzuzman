'use client';

<<<<<<< HEAD
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import useTranslation from '../hooks/useTranslation';

export default function LanguageToggle() {
  const { locale } = useTranslation();
  const pathname = usePathname();
  const otherLocale = locale === 'tr' ? 'en' : 'tr';
  
  // Dil değiştirildiğinde yeni yolu oluştur
  const newPath = pathname.startsWith(`/${locale}`) 
    ? pathname.replace(`/${locale}`, `/${otherLocale}`) 
    : `/${otherLocale}${pathname}`;

  return (
    <Link
      href={newPath}
      className="flex items-center justify-center bg-primary/10 hover:bg-primary/20 p-2 rounded-full transition-colors cursor-pointer"
      aria-label={locale === 'tr' ? 'Switch to English' : 'Türkçe\'ye geç'}
    >
      <span className="font-medium text-sm">
        {locale === 'tr' ? 'EN' : 'TR'}
      </span>
    </Link>
  );
}
=======
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
>>>>>>> 4ff658e466399608fb3515ee153f73b730615225
