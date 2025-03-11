'use client';

import { useEffect } from 'react';

import Header from './components/Header';
import SpotlightHero from './components/SpotlightHero';
import Services from './components/Services';
import TechShowcase from './components/TechShowcase';
import StatisticsSection from './components/StatisticsSection';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  useEffect(() => {
    // Sayaç animasyonu
    const counterAnimate = () => {
      const counters = document.querySelectorAll('.counter-animate');
      
      counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000; // 2 saniye
        const steps = 60;
        const increment = target / steps;
        let current = 0;
        
        const updateCounter = () => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          
          counter.innerText = Math.floor(current);
          if (counter.innerText.includes('.')) {
            counter.innerText = counter.innerText.split('.')[0];
          }
          
          // Yüzde işareti ekle
          if (counter.classList.contains('percent')) {
            counter.innerText += '%';
          }
        };
        
        const timer = setInterval(updateCounter, duration / steps);
      });
    };
    
    // Sayaç elementleri görünür olduğunda animasyonu başlat
    const observeCounters = () => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              counterAnimate();
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.5 }
      );
      
      const countersSection = document.querySelector('.counter-section');
      if (countersSection) {
        observer.observe(countersSection);
      }
    };
    
    observeCounters();
  }, []);

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 relative">
      <Header />
      <SpotlightHero />
      <Services />
      <TechShowcase />
      <StatisticsSection />
      <Portfolio />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
      
      {/* Sabit "Yukarı çık" butonu */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-primary dark:bg-primary/80 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg z-50 hover:bg-indigo-700 transition-colors"
        aria-label="Yukarı çık"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </main>
  );
}