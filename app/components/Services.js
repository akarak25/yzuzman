'use client';

import { useRef, useEffect } from 'react';
import { FaLaptopCode, FaMobileAlt, FaDesktop, FaServer, FaSearch, FaShoppingCart } from 'react-icons/fa';
import Container from './Container';

export default function Services() {
  const services = [
    {
      icon: <FaLaptopCode className="text-4xl text-primary mb-4" />,
      title: 'Web Tasarım',
      description: 'Modern, responsive ve kullanıcı dostu web siteleri tasarlıyoruz. Her ekran boyutunda mükemmel görünen, hızlı ve SEO uyumlu siteler.'
    },
    {
      icon: <FaMobileAlt className="text-4xl text-primary mb-4" />,
      title: 'Mobil Uygulama Geliştirme',
      description: 'iOS ve Android için native ve cross-platform mobil uygulamalar geliştiriyoruz. Kullanıcı deneyimini ön planda tutan, performanslı çözümler.'
    },
    {
      icon: <FaDesktop className="text-4xl text-primary mb-4" />,
      title: 'Masaüstü Uygulamaları',
      description: 'Windows, macOS ve Linux için özel masaüstü yazılımları geliştiriyoruz. İşletmenize özel, ihtiyaçlarınıza yönelik uygulamalar.'
    },
    {
      icon: <FaServer className="text-4xl text-primary mb-4" />,
      title: 'Backend Sistemleri',
      description: 'Güçlü, ölçeklenebilir ve güvenli backend sistemleri tasarlıyoruz. API geliştirme, veritabanı yönetimi ve sistem entegrasyonları.'
    },
    {
      icon: <FaSearch className="text-4xl text-primary mb-4" />,
      title: 'SEO Optimizasyonu',
      description: 'Arama motorlarında üst sıralarda yer almanızı sağlayacak SEO çalışmaları yapıyoruz. Teknik SEO, içerik stratejisi ve performans iyileştirmeleri.'
    },
    {
      icon: <FaShoppingCart className="text-4xl text-primary mb-4" />,
      title: 'E-Ticaret Çözümleri',
      description: 'Online satış yapabileceğiniz, kolay yönetilebilir e-ticaret siteleri geliştiriyoruz. Güvenli ödeme sistemleri ve stok yönetimi.'
    }
  ];

  const sectionRef = useRef(null);
  
  useEffect(() => {
    const fadeInElements = () => {
      const elements = sectionRef.current.querySelectorAll('.fade-in-element');
      
      elements.forEach((el, index) => {
        setTimeout(() => {
          el.classList.add('opacity-100', 'translate-y-0');
          el.classList.remove('opacity-0', 'translate-y-8');
        }, 100 * index);
      });
    };
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          fadeInElements();
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      {/* Animasyonlu arka plan şekilleri */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-purple-200 dark:bg-purple-900/20 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-200 dark:bg-yellow-900/20 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 dark:bg-pink-900/20 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Hizmetlerimiz</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Dijital dünyadaki tüm ihtiyaçlarınız için profesyonel çözümler sunuyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="fade-in-element opacity-0 translate-y-8 transition-all duration-500 card p-6 bg-white dark:bg-gray-700 hover:scale-105 transform transition-all duration-300 hover:shadow-2xl hover:bg-gradient-to-br hover:from-white hover:to-indigo-50 dark:hover:from-gray-700 dark:hover:to-gray-600 group hover:-rotate-1 border border-transparent hover:border-indigo-100 dark:hover:border-indigo-800 z-10"
            >
              <div className="text-center">
                <div className="inline-block bg-indigo-50 dark:bg-indigo-900/30 p-4 rounded-xl mb-4 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-purple-600 group-hover:text-white transform transition-all duration-500">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary dark:text-white transition-colors duration-300">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}