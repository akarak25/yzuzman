# Next.js App Router Dil Desteği Rehberi

Bu proje, Next.js 14 App Router mimarisi ile dil desteği (i18n) uygulamasını göstermektedir.

## Yapı Özeti

1. **Dinamik Route**: `/[locale]` segmenti ile dinamik dil rotaları
2. **Middleware**: Dil yönlendirme ve doğrulama için middleware
3. **Translations**: Dil çevirileri `/locales` klasöründe
4. **Hook**: Dil desteği için özel `useTranslation` hook'u

## Nasıl Çalışır?

1. Kullanıcı siteyi ziyaret ettiğinde, middleware kullanıcıyı tarayıcı dillerine veya varsayılan dile (`/tr`) yönlendirir.
2. URL'de `/tr/sayfa` veya `/en/sayfa` formatında dil parametresi bulunur.
3. Bileşenler `useTranslation` hook'unu kullanarak mevcut dili alır.
4. Dil değişimi URL değişikliği ile sağlanır.

## Dosya Yapısı

```
app/
  ├── [locale]/             # Dinamik dil rotaları
  │   ├── page.js           # Ana sayfa
  ├── components/           # Bileşenler
  ├── hooks/
  │   ├── useTranslation.js # Dil hook'u
  ├── locales/              # Çeviri dosyaları
  │   ├── en.js             # İngilizce çeviriler
  │   └── tr.js             # Türkçe çeviriler
  ├── config.js             # Dil yapılandırması
middleware.js               # Dil yönlendirme
```

## Kullanım

Herhangi bir bileşende dil desteğini kullanmak için:

```jsx
import useTranslation from '../hooks/useTranslation';

function MyComponent() {
  const { t, locale, changeLocale } = useTranslation();

  return (
    <div>
      <h1>{t.pageTitle}</h1>
      <p>{t.description}</p>
      <button onClick={() => changeLocale(locale === 'tr' ? 'en' : 'tr')}>
        {locale === 'tr' ? 'English' : 'Türkçe'}
      </button>
    </div>
  );
}
```

## Dil Değiştirme

Dil, `LanguageToggle` bileşeni ile değiştirilebilir. Bu bileşen, mevcut URL'deki dil kodunu değiştirerek yeni bir URL'e yönlendirir.

## Yeni Dil Ekleme

1. `locales/` klasöründe yeni bir dil dosyası oluşturun
2. `config.js` dosyasındaki `locales` dizisine yeni dil kodunu ekleyin
3. `useTranslation.js` dosyasında yeni dil dosyasını import edin
4. `LanguageToggle` bileşenini çoklu dil seçeneği için güncelleyin

## SEO Faydaları

- Her dil için ayrı URL yapısı (`/tr/sayfa`, `/en/sayfa`)
- Doğru `lang` özniteliği ile HTML etiketleri
- Dil bazlı meta etiketleri için kolay yapılandırma

## Güncelleme Geçmişi

- Eski Context tabanlı dil desteğinden Next.js App Router tabanlı yapıya geçiş
- Bileşenlerin React Context kullanımından bağımsız hale getirilmesi
- Dil değiştirme mekanizmasının URL tabanlı hale getirilmesi
