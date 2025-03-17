'use client';

import { useEffect } from 'react';

import Header from '../components/Header';
import SpotlightHero from '../components/SpotlightHero';
import Services from '../components/Services';
import TechShowcase from '../components/TechShowcase';
import StatisticsSection from '../components/StatisticsSection';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ScrollToTopButton from '../components/ScrollToTopButton';

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
      <ScrollToTopButton />
    </main>
  );
}