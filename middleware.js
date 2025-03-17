import { NextResponse } from 'next/server';
import { config as siteConfig } from './app/config';

export function middleware(request) {
  const pathname = request.nextUrl.pathname;
  
  // Kök dizin ise tarayıcı diline göre yönlendir
  if (pathname === '/') {
    // Tarayıcı dilini al
    const acceptLanguage = request.headers.get('accept-language') || '';
    const browserLanguages = acceptLanguage.split(',').map(lang => lang.split(';')[0].trim());
    
    // İlk tercih edilen dil kodunu al (örn. "en-US" -> "en")
    let preferredLanguage = null;
    
    // Desteklenen bir dil bulmak için tarayıcı dillerini kontrol et
    for (const lang of browserLanguages) {
      const langCode = lang.split('-')[0]; // "en-US" -> "en"
      if (siteConfig.locales.includes(langCode)) {
        preferredLanguage = langCode;
        break;
      }
    }
    
    // Desteklenen bir dil bulunamadıysa varsayılan dili kullan
    const locale = preferredLanguage || siteConfig.defaultLocale;
    
    return NextResponse.redirect(new URL(`/${locale}`, request.url));
  }
  
  // URL'deki ilk segmenti al (örn. /tr/sayfa veya /en/sayfa)
  const pathnameSegments = pathname.split('/');
  const firstSegment = pathnameSegments[1];
  
  // Eğer geçerli bir dil değilse, varsayılan dile yönlendir
  if (!siteConfig.locales.includes(firstSegment)) {
    return NextResponse.redirect(
      new URL(`/${siteConfig.defaultLocale}${pathname}`, request.url)
    );
  }
  
  return NextResponse.next();
}

// Sadece bu yollar için middleware'i çalıştır
export const config = {
  matcher: [
    // Kök yolu ve locale içeren tüm yolları eşleştir
    '/',
    '/((?!api|_next/static|_next/image|favicon.ico).*)'
  ],
};