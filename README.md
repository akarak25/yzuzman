<<<<<<< HEAD
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
=======
# YZ UZMAN Tanıtım Sitesi

Bu proje, web tasarım, mobil uygulama ve yazılım geliştirme hizmetleri sunan YZ UZMAN firması için etkileyici ve modern bir tanıtım sitesidir.

## Etkileyici Özellikler

- 3D interaktif kartlar ve animasyonlar
- Fare hareketlerini takip eden parçacık efektleri
- Gradient renk geçişleri ve glassmorphism tasarım
- İlerleme halkaları ve dinamik istatistikler
- Paralaks kaydırma efektleri
- Responsif tasarım (tüm ekran boyutlarına uyumlu)

## Teknolojiler

- Next.js 14
- React 18
- Tailwind CSS
- Gelişmiş CSS animasyonları
- SVG manipülasyonu
- 3D efektler (CSS transform)
- İnteraktif Canvas animasyonları

## Kurulum

Projeyi yerel ortamınızda çalıştırmak için:

```bash
# Bağımlılıkları yükleyin
npm install

# Geliştirme sunucusunu başlatın
npm run dev
```

Tarayıcınızda `http://localhost:3000` adresine giderek uygulamayı görüntüleyebilirsiniz.

## Dosya Yapısı

- `/app`: Next.js 14 uygulama dizini
  - `/components`: Tüm bileşenler
  - `/globals.css`: Global stil tanımlamaları
  - `layout.js`: Ana sayfa yapısı
  - `page.js`: Ana sayfa içeriği
- `/public`: Statik dosyalar (görseller, fontlar, vb.)

## Öne Çıkan Bileşenler

1. `HeroAnimated.js`: Etkileyici ana banner
2. `FloatingAnimation.js`: 3D parçacıklı arka plan
3. `TechShowcase.js`: 3D kart galerisi
4. `3DCard.js`: Fare hareketlerini izleyen 3D kartlar
5. `CircularProgress.js`: Animasyonlu ilerleme halkaları

## Dağıtım

Next.js uygulaması Vercel, Netlify veya herhangi bir hosting hizmetinde kolayca dağıtılabilir.

## Lisans

Bu proje özel kullanım içindir. Tüm hakları saklıdır.
>>>>>>> 4ff658e466399608fb3515ee153f73b730615225
