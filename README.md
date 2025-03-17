# YZ UZMAN Web Sitesi

Bu proje, Next.js kullanılarak oluşturulmuş profesyonel bir web tanıtım sitesidir.

## Dil Desteği

Bu projede Next.js'in yerel i18n (uluslararasılaştırma) desteği kullanılmaktadır. Türkçe ve İngilizce dil desteği mevcuttur.

### Yeni Dil Sistemi ile İlgili Notlar

1. Eski Context API tabanlı dil sistemi yerine Next.js'in yerel i18n desteği kullanılmıştır.
2. Yapılan değişiklikler:
   - next.config.js dosyasına i18n ayarları eklendi
   - Çeviri dosyaları /locales/ klasörüne taşındı
   - Bileşenler useTranslation hook'u kullanacak şekilde güncellendi
   - LanguageContext artık kullanılmıyor

### Dil Desteğini Kullanmak

```jsx
// Dil desteğini kullanmak için
import useTranslation from '../hooks/useTranslation';

function MyComponent() {
  const { t, locale, changeLocale } = useTranslation();
  
  return (
    <div>
      <h1>{t.someKey.title}</h1>
      <p>{t.someKey.description}</p>
    </div>
  );
}
```

## Dil Eklemek

Yeni bir dil eklemek için:

1. `locales/` klasörüne yeni dil dosyası ekleyin (örn. `fr.js`)
2. `next.config.js` dosyasındaki locale listesine yeni dili ekleyin
3. `hooks/useTranslation.js` dosyasındaki translations nesnesine yeni dili import edin

## Teknoloji Yığını

- Next.js 14
- Tailwind CSS
- React Icons
- Framer Motion

## Geliştirici Notları

Bu site, SEO dostu, performans odaklı ve mobil cihazlarla uyumlu olacak şekilde tasarlanmıştır. Animasyonlar ve etkileşimler ile modern bir kullanıcı deneyimi sunmaktadır.
