'use client';

import { usePathname, useRouter, useParams } from 'next/navigation';
import { useCallback } from 'react';
import tr from '../../locales/tr';
import en from '../../locales/en';

const translations = { tr, en };

export default function useTranslation() {
  const params = useParams();
  const pathname = usePathname();
  const router = useRouter();
  
  // Geçerli dil, URL'den veya varsayılan olarak tr
  const locale = params?.locale || 'tr';
  
  // Geçerli dil seçeneği
  const t = translations[locale] || translations.tr;
  
  // Dil değiştirme fonksiyonu
  const changeLocale = useCallback(
    (newLocale) => {
      const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
      router.push(newPath);
    },
    [locale, pathname, router]
  );

  return { t, locale, changeLocale };
}