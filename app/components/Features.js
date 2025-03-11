'use client';

import { useRef, useEffect } from 'react';
import { FaLightbulb, FaRocket, FaTools, FaHeadset } from 'react-icons/fa';

export default function Features() {
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
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
    <section ref={sectionRef} className="py-20 bg-gradient-to-r from-purple-900 to-indigo-800 text-white">
      <div className="container-custom">
        <div className="text-center mb-16 opacity-0 transition-opacity duration-1000" style={{animationDelay: '0.2s'}}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Neden Biz?</h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Yaratıcı çözümler ve ileri teknolojilerle işinizi bir üst seviyeye taşıyoruz.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl shadow-lg border border-white/20 transform transition-all duration-500 hover:scale-105 hover:bg-white/20">
            <div className="bg-gradient-to-br from-primary to-purple-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
              <FaLightbulb className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-bold mb-3">Yenilikçi Fikirler</h3>
            <p className="text-gray-300">
              Her zaman en yeni trendleri ve teknolojileri takip ediyor, projelerinize yaratıcı çözümler sunuyoruz.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl shadow-lg border border-white/20 transform transition-all duration-500 hover:scale-105 hover:bg-white/20" style={{animationDelay: '0.2s'}}>
            <div className="bg-gradient-to-br from-secondary to-emerald-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
              <FaRocket className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-bold mb-3">Hızlı Geliştirme</h3>
            <p className="text-gray-300">
              Verimli çalışma metodolojilerimiz sayesinde projelerinizi zamanında ve yüksek kalitede teslim ediyoruz.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl shadow-lg border border-white/20 transform transition-all duration-500 hover:scale-105 hover:bg-white/20" style={{animationDelay: '0.4s'}}>
            <div className="bg-gradient-to-br from-amber-500 to-orange-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
              <FaTools className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-bold mb-3">Modern Teknolojiler</h3>
            <p className="text-gray-300">
              En güncel teknolojileri kullanarak güvenli, ölçeklenebilir ve performanslı uygulamalar geliştiriyoruz.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl shadow-lg border border-white/20 transform transition-all duration-500 hover:scale-105 hover:bg-white/20" style={{animationDelay: '0.6s'}}>
            <div className="bg-gradient-to-br from-rose-500 to-pink-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
              <FaHeadset className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-bold mb-3">7/24 Destek</h3>
            <p className="text-gray-300">
              Projeleriniz canlıya alındıktan sonra da yanınızdayız. Teknik sorunlara hızlı çözümler sunuyoruz.
            </p>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-xl mb-8">
            <span className="font-bold gradient-text">%98</span> müşteri memnuniyeti ve <span className="font-bold gradient-text">100+</span> başarılı proje ile yanınızdayız.
          </p>
          <button className="btn-primary animate-pulse" style={{animationDelay: '0.8s', animationDuration: '2s'}}>
            Hemen Projeni Başlat
          </button>
        </div>
      </div>
    </section>
  );
}