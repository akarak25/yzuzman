'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

// Dil içeriğimizi burada tanımlıyoruz
const translations = {
  tr: {
    nav: {
      home: 'Ana Sayfa',
      services: 'Hizmetlerimiz',
      about: 'Hakkımızda',
      portfolio: 'Çalışmalarımız',
      contact: 'İletişim',
    },
    hero: {
      title: 'Modern Web Çözümleri',
      subtitle: 'Profesyonel web tasarım ve yazılım geliştirme hizmetleri',
      cta: 'Bizimle İletişime Geçin',
      learnMore: 'Daha Fazla Öğren',
    },
    services: {
      title: 'Hizmetlerimiz',
      subtitle: 'Size nasıl yardımcı olabiliriz?',
      webDev: 'Web Geliştirme',
      webDesign: 'Web Tasarım',
      mobileDev: 'Mobil Geliştirme',
      desktopApps: 'Masaüstü Uygulamaları',
      backendSystems: 'Backend Sistemleri',
      seo: 'SEO Optimizasyonu',
      ecommerce: 'E-Ticaret Çözümleri',
      description: 'Dijital dünyadaki tüm ihtiyaçlarınız için profesyonel çözümler sunuyoruz.',
    },
    tech: {
      title: 'Teknoloji Yetkinliklerimiz',
      subtitle: 'En son teknolojileri kullanarak dijital dünyadaki her ihtiyacınıza çözüm üretiyoruz.',
      webDev: 'Web Geliştirme',
      webDevDesc: 'React, Vue, Angular, Next.js ile modern web uygulamaları',
      mobileDev: 'Mobil Uygulama',
      mobileDevDesc: 'React Native ve Flutter ile cross-platform mobil uygulamalar',
      backend: 'Backend Sistemleri',
      backendDesc: 'Node.js, Express, Django ve Laravel ile güçlü backend\'ler',
      database: 'Veritabanı Tasarımı',
      databaseDesc: 'MongoDB, MySQL, PostgreSQL ile veritabanı çözümleri',
      ai: 'AI & Machine Learning',
      aiDesc: 'TensorFlow, PyTorch ve OpenAI API entegrasyonları',
      scrollText: 'Daha fazlası için yatay kaydırın',
    },
    about: {
      title: 'Hakkımızda',
      subtitle: 'Bizi Tanıyın',
      whoWeAre: 'Biz Kimiz?',
      description1: '2021 yılında kurulan WebVizyon, web tasarım, mobil uygulama ve yazılım geliştirme alanlarında faaliyet gösteren, genç ve dinamik bir ekipten oluşmaktadır. 3 kişilik çekirdek ekibimizle, müşterilerimizin dijital dünyada güçlü bir şekilde var olmaları için çalışıyoruz.',
      description2: 'Müşterilerimizin ihtiyaçlarını anlamak, onlara özel çözümler sunmak ve uzun vadeli iş birlikleri kurmak temel prensibimizdir. Her projede en güncel teknolojileri kullanarak, kaliteli ve sürdürülebilir ürünler ortaya çıkarıyoruz.',
      teamValues: 'Ekip Değerlerimiz',
      feature1: 'Deneyimli ve Uzman Ekip',
      feature2: 'Modern Teknolojiler',
      feature3: 'Hızlı ve Etkin İletişim',
      feature4: 'Zamanında Teslim',
      feature5: 'İhtiyaça Özel Çözümler',
      feature6: 'Sürekli Destek',
      value1: 'Müşteri memnuniyeti odaklı çalışma',
      value2: 'Yenilikçi ve çözüm odaklı yaklaşım',
      value3: 'Şeffaf ve dürüst iletişim',
      value4: 'Sürekli öğrenme ve gelişim',
    },
    portfolio: {
      title: 'Çalışmalarımız',
      subtitle: 'Başarılı Projelerimiz',
      intro: 'Tamamladığımız bazı projeler ve müşterilerimiz için geliştirdiğimiz çözümler',
      viewProject: 'Projeyi İncele',
      categories: {
        all: 'Tümü',
        web: 'Web Projeleri',
        mobile: 'Mobil Uygulamalar',
        desktop: 'Masaüstü Yazılımlar'
      },
      projects: {
        ecommerce: {
          title: 'E-Ticaret Platformu',
          description: 'Tamamen özelleştirilebilir ve ölçeklenebilir e-ticaret çözümü. 50+ ödeme entegrasyonu ve gelişmiş analitik paneli içerir.',
          features: ['Çoklu dil desteği', 'Yapay zeka ürün önerileri', 'Gerçek zamanlı analitik']
        },
        fitness: {
          title: 'Fitness Takip Uygulaması',
          description: 'Kullanıcıların antrenman, beslenme ve sağlık durumlarını takip edebilecekleri kapsamlı mobil uygulama.',
          features: ['Kişiselleştirilmiş antrenman planları', 'Beslenme ve kalori takibi', 'Sağlık verileri entegrasyonu']
        },
        crm: {
          title: 'Kurumsal CRM Sistemi',
          description: 'Büyük ölçekli şirketler için geliştirilen, müşteri ilişkileri yönetim sistemi.',
          features: ['Satış takibi', 'Müşteri segmentasyonu', 'Entegre rapor sistemi']
        },
        finance: {
          title: 'Finans Portalı',
          description: 'Banka ve finans şirketleri için geliştirilmiş entegre finansal işlem platformu.',
          features: ['Gerçek zamanlı finans verileri', 'Güvenli ödeme işlemleri', 'Kullanıcı dostu arayüz']
        },
        social: {
          title: 'Sosyal Medya Uygulaması',
          description: 'Niş hobiler ve ilgi alanları için özelleştirilmiş topluluk tabanlı sosyal platform.',
          features: ['Gerçek zamanlı mesajlaşma', 'İçerik keşfetme sistemi', 'Etkinlik planlamacısı']
        },
        hotel: {
          title: 'Otel Yönetim Yazılımı',
          description: 'Otel ve konaklama tesisleri için entegre rezervasyon ve yönetim sistemi.',
          features: ['Oda yönetimi', 'Rezervasyon takibi', 'Müşteri veritabanı']
        }
      },
      viewAll: 'Tüm Projeleri Gör',
      features: 'Özellikler',
      technologies: 'Kullanılan Teknolojiler',
      demo: 'Demo',
      github: 'GitHub',
      projectImage: 'Proje Görseli'
    },
    contact: {
      title: 'İletişim',
      subtitle: 'Bize Ulaşın',
      intro: 'Projeleriniz için bilgi almak veya işbirliği yapmak isterseniz bizimle iletişime geçin.',
      name: 'Adınız',
      email: 'E-posta Adresiniz',
      subject: 'Konu',
      message: 'Mesajınız',
      send: 'Gönder',
      sending: 'Gönderiliyor...',
      success: 'Teşekkürler!',
      successMsg: 'Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.',
      contactUs: 'Bize Ulaşın',
      address: 'Adres',
      addressValue: 'Bağdat Caddesi No:123, Kadıköy, İstanbul',
      phone: 'Telefon',
      workingHours: 'Çalışma Saatleri',
      mondayFriday: 'Pazartesi - Cuma',
      saturday: 'Cumartesi',
      sunday: 'Pazar',
      closed: 'Kapalı',
    },
    footer: {
      rights: 'Tüm Hakları Saklıdır',
      privacy: 'Gizlilik Politikası',
      terms: 'Kullanım Şartları',
      kvkk: 'KVKK',
      madeWith: 'ile yapıldı',
      about: 'YZ UZMAN olarak işinizi dijital dünyada üst seviyeye taşıyoruz. Web, mobil ve yazılım çözümleriyle yanınızdayız.',
      quickLinks: 'Hızlı Bağlantılar',
      services: 'Hizmetlerimiz',
      contact: 'İletişim',
      address: 'Bağdat Caddesi No:123, Kadıköy, İstanbul',
      serviceList: {
        webDesign: 'Web Tasarım',
        mobileDev: 'Mobil Uygulama Geliştirme',
        backend: 'Backend Sistemleri',
        ecommerce: 'E-ticaret Çözümleri',
        seo: 'SEO Optimizasyonu'
      }
    },
    cta: {
      title: 'Dijital Dönüşümünüze Bugün Başlayın!',
      subtitle: 'Rekabette öne geçmek için modern ve etkileyici dijital çözümler geliştiriyoruz. Size özel teklifimizi almak için hemen iletişime geçin.',
      emailPlaceholder: 'E-posta adresinizi girin',
      buttonText: 'Teklif Alın',
      orCall: 'veya bizi hemen arayın:'
    },
    testimonials: {
      title: 'Müşterilerimiz Ne Diyor?',
      subtitle: 'Müşterilerimizin memnuniyeti en büyük önceliğimiz. İşte bazılarının görüşleri.',
      viewProfile: 'Profili Görüntüle',
      projectImage: 'Proje Görseli',
    },
    statistics: {
      title: 'İstatistikler & Yetenekler',
      subtitle: 'Sayılarla başarılarımız ve uzmanlaştığımız alanlar',
      byNumbers: 'Rakamlarla Biz',
      expertiseAreas: 'Uzmanlık Alanlarımız',
      completedProjects: 'Tamamlanan Projeler',
      happyClients: 'Mutlu Müşteriler',
      workingHours: 'Çalışma Saatleri',
      awards: 'Kazanılan Ödüller',
      areas: {
        webDesign: 'Web Tasarım',
        frontend: 'Frontend',
        backend: 'Backend',
        mobile: 'Mobil'
      }
    },
  },
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      about: 'About',
      portfolio: 'Portfolio',
      contact: 'Contact',
    },
    hero: {
      title: 'Modern Web Solutions',
      subtitle: 'Professional web design and software development services',
      cta: 'Contact Us',
      learnMore: 'Learn More',
    },
    services: {
      title: 'Our Services',
      subtitle: 'How can we help you?',
      webDev: 'Web Development',
      webDesign: 'Web Design',
      mobileDev: 'Mobile Development',
      desktopApps: 'Desktop Applications',
      backendSystems: 'Backend Systems',
      seo: 'SEO Optimization',
      ecommerce: 'E-Commerce Solutions',
      description: 'We offer professional solutions for all your needs in the digital world.',
    },
    tech: {
      title: 'Our Technology Expertise',
      subtitle: 'We create solutions for all your needs in the digital world using the latest technologies.',
      webDev: 'Web Development',
      webDevDesc: 'Modern web applications with React, Vue, Angular, Next.js',
      mobileDev: 'Mobile Application',
      mobileDevDesc: 'Cross-platform mobile apps with React Native and Flutter',
      backend: 'Backend Systems',
      backendDesc: 'Powerful backends with Node.js, Express, Django and Laravel',
      database: 'Database Design',
      databaseDesc: 'Database solutions with MongoDB, MySQL, PostgreSQL',
      ai: 'AI & Machine Learning',
      aiDesc: 'TensorFlow, PyTorch and OpenAI API integrations',
      scrollText: 'Scroll horizontally for more',
    },
    about: {
      title: 'About Us',
      subtitle: 'Get to Know Us',
      whoWeAre: 'Who Are We?',
      description1: 'Founded in 2021, WebVizyon consists of a young and dynamic team operating in web design, mobile application, and software development fields. With our core team of 3 people, we work to ensure our customers have a strong presence in the digital world.',
      description2: 'Understanding the needs of our customers, offering them customized solutions, and establishing long-term collaborations is our fundamental principle. We create high-quality and sustainable products by using the most current technologies in every project.',
      teamValues: 'Our Team Values',
      feature1: 'Experienced and Expert Team',
      feature2: 'Modern Technologies',
      feature3: 'Fast and Effective Communication',
      feature4: 'On-time Delivery',
      feature5: 'Custom Solutions',
      feature6: 'Continuous Support',
      value1: 'Customer satisfaction-oriented work',
      value2: 'Innovative and solution-oriented approach',
      value3: 'Transparent and honest communication',
      value4: 'Continuous learning and development',
    },
    portfolio: {
      title: 'Our Portfolio',
      subtitle: 'Our Successful Projects',
      intro: 'Some of the projects we have completed and solutions we have developed for our clients',
      viewProject: 'View Project',
      categories: {
        all: 'All',
        web: 'Web Projects',
        mobile: 'Mobile Apps',
        desktop: 'Desktop Software'
      },
      projects: {
        ecommerce: {
          title: 'E-Commerce Platform',
          description: 'Fully customizable and scalable e-commerce solution. Includes 50+ payment integrations and advanced analytics dashboard.',
          features: ['Multi-language support', 'AI product recommendations', 'Real-time analytics']
        },
        fitness: {
          title: 'Fitness Tracking App',
          description: 'Comprehensive mobile application for users to track their workouts, nutrition, and health status.',
          features: ['Personalized workout plans', 'Nutrition and calorie tracking', 'Health data integration']
        },
        crm: {
          title: 'Enterprise CRM System',
          description: 'Customer relationship management system developed for large-scale companies.',
          features: ['Sales tracking', 'Customer segmentation', 'Integrated reporting system']
        },
        finance: {
          title: 'Finance Portal',
          description: 'Integrated financial transaction platform developed for banks and finance companies.',
          features: ['Real-time financial data', 'Secure payment processing', 'User-friendly interface']
        },
        social: {
          title: 'Social Media Application',
          description: 'Community-based social platform customized for niche hobbies and interests.',
          features: ['Real-time messaging', 'Content discovery system', 'Event planner']
        },
        hotel: {
          title: 'Hotel Management Software',
          description: 'Integrated reservation and management system for hotels and accommodation facilities.',
          features: ['Room management', 'Reservation tracking', 'Customer database']
        }
      },
      viewAll: 'View All Projects',
      features: 'Features',
      technologies: 'Technologies Used',
      demo: 'Demo',
      github: 'GitHub',
      projectImage: 'Project Image'
    },
    contact: {
      title: 'Contact',
      subtitle: 'Get in Touch',
      intro: 'Get in touch with us for information about your projects or to collaborate.',
      name: 'Your Name',
      email: 'Your Email',
      subject: 'Subject',
      message: 'Your Message',
      send: 'Send',
      sending: 'Sending...',
      success: 'Thank you!',
      successMsg: 'Your message has been successfully sent. We will get back to you as soon as possible.',
      contactUs: 'Contact Us',
      address: 'Address',
      addressValue: 'Bagdat Street No:123, Kadikoy, Istanbul',
      phone: 'Phone',
      workingHours: 'Working Hours',
      mondayFriday: 'Monday - Friday',
      saturday: 'Saturday',
      sunday: 'Sunday',
      closed: 'Closed',
    },
    footer: {
      rights: 'All Rights Reserved',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      kvkk: 'PDPL',
      madeWith: 'made with',
      about: 'At YZ UZMAN, we take your business to the next level in the digital world. We are by your side with web, mobile and software solutions.',
      quickLinks: 'Quick Links',
      services: 'Our Services',
      contact: 'Contact',
      address: 'Bagdat Street No:123, Kadikoy, Istanbul',
      serviceList: {
        webDesign: 'Web Design',
        mobileDev: 'Mobile App Development',
        backend: 'Backend Systems',
        ecommerce: 'E-commerce Solutions',
        seo: 'SEO Optimization'
      }
    },
    cta: {
      title: 'Start Your Digital Transformation Today!',
      subtitle: 'We develop modern and impressive digital solutions to help you stay ahead of the competition. Contact us now to get your special offer.',
      emailPlaceholder: 'Enter your email address',
      buttonText: 'Get an Offer',
      orCall: 'or call us now:'
    },
    testimonials: {
      title: 'What Our Clients Say?',
      subtitle: 'Our clients\'s satisfaction is our highest priority. Here are some of their feedback.',
      viewProfile: 'View Profile',
      projectImage: 'Project Image',
    },
    statistics: {
      title: 'Statistics & Skills',
      subtitle: 'Our achievements in numbers and areas of expertise',
      byNumbers: 'Us by Numbers',
      expertiseAreas: 'Our Expertise Areas',
      completedProjects: 'Completed Projects',
      happyClients: 'Happy Clients',
      workingHours: 'Working Hours',
      awards: 'Awards Won',
      areas: {
        webDesign: 'Web Design',
        frontend: 'Frontend',
        backend: 'Backend',
        mobile: 'Mobile'
      }
    },
  },
};

// Context oluşturuyoruz
const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('tr'); // Varsayılan dil Türkçe
  const [texts, setTexts] = useState(translations.tr);

  // Dil değiştiğinde çevirileri güncelliyoruz
  useEffect(() => {
    setTexts(translations[language]);
  }, [language]);

  // Dil değiştirme fonksiyonu
  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'tr' ? 'en' : 'tr'));
  };

  return (
    <LanguageContext.Provider value={{ language, texts, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Hook kullanımını kolaylaştırmak için
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}