'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import LanguageToggle from './LanguageToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { texts } = useLanguage();

  return (
    <header className="bg-white shadow-md">
      <div className="container-custom flex justify-between items-center py-4">
        <Link href="/" className="text-2xl font-bold text-primary">YZ UZMAN</Link>
        
        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-dark focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
        
        {/* Desktop menu */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="text-dark hover:text-primary font-medium">{texts.nav.home}</Link>
          <Link href="#services" className="text-dark hover:text-primary font-medium">{texts.nav.services}</Link>
          <Link href="#about" className="text-dark hover:text-primary font-medium">{texts.nav.about}</Link>
          <Link href="#portfolio" className="text-dark hover:text-primary font-medium">{texts.nav.portfolio}</Link>
          <Link href="#contact" className="text-dark hover:text-primary font-medium">{texts.nav.contact}</Link>
          <LanguageToggle />
        </nav>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white py-4 px-6 shadow-inner">
          <nav className="flex flex-col space-y-4">
            <Link href="/" className="text-dark hover:text-primary font-medium" onClick={() => setIsOpen(false)}>{texts.nav.home}</Link>
            <Link href="#services" className="text-dark hover:text-primary font-medium" onClick={() => setIsOpen(false)}>{texts.nav.services}</Link>
            <Link href="#about" className="text-dark hover:text-primary font-medium" onClick={() => setIsOpen(false)}>{texts.nav.about}</Link>
            <Link href="#portfolio" className="text-dark hover:text-primary font-medium" onClick={() => setIsOpen(false)}>{texts.nav.portfolio}</Link>
            <Link href="#contact" className="text-dark hover:text-primary font-medium" onClick={() => setIsOpen(false)}>{texts.nav.contact}</Link>
            <LanguageToggle />
          </nav>
        </div>
      )}
    </header>
  );
}