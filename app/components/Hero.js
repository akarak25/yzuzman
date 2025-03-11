'use client';

import { FaArrowDown } from 'react-icons/fa';

export default function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-20 md:py-32">
      <div className="container-custom relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Dijital Dünyada <span className="text-secondary">İzinizi Bırakın</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Web tasarım, mobil uygulama ve yazılım geliştirme konularında uzman ekibimiz, 
            fikirlerinizi modern ve etkileyici dijital çözümlere dönüştürüyor.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button onClick={() => scrollToSection('contact')} className="btn-primary">
              Ücretsiz Danışmanlık
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="btn bg-white text-indigo-900 hover:bg-gray-100">
              Çalışmalarımızı İnceleyin
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer" onClick={() => scrollToSection('services')}>
        <FaArrowDown className="text-white text-2xl" />
      </div>

      {/* Abstract shapes */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#FFFFFF" d="M45.7,-76.9C58.9,-69.2,69.2,-54.3,76.1,-38.3C83,-22.3,86.5,-5.1,83.8,11.1C81.2,27.3,72.3,42.4,60.1,53.8C47.9,65.1,32.3,72.6,15.4,75.9C-1.5,79.1,-19.6,78.1,-34.2,71C-48.7,64,-59.7,50.9,-69.9,35.7C-80.1,20.4,-89.4,3,-87,-13.7C-84.7,-30.4,-70.7,-46.4,-55.3,-54.1C-39.8,-61.8,-22.9,-61.3,-5.6,-57.3C11.7,-53.3,32.5,-84.6,45.7,-76.9Z" transform="translate(100 100)" />
        </svg>
      </div>
    </section>
  );
}