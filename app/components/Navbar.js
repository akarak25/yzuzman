'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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
          <Link href="/" className="text-dark hover:text-primary font-medium">Ana Sayfa</Link>
          <Link href="#services" className="text-dark hover:text-primary font-medium">Hizmetlerimiz</Link>
          <Link href="#about" className="text-dark hover:text-primary font-medium">Hakkımızda</Link>
          <Link href="#portfolio" className="text-dark hover:text-primary font-medium">Çalışmalarımız</Link>
          <Link href="#contact" className="text-dark hover:text-primary font-medium">İletişim</Link>
        </nav>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white py-4 px-6 shadow-inner">
          <nav className="flex flex-col space-y-4">
            <Link href="/" className="text-dark hover:text-primary font-medium" onClick={() => setIsOpen(false)}>Ana Sayfa</Link>
            <Link href="#services" className="text-dark hover:text-primary font-medium" onClick={() => setIsOpen(false)}>Hizmetlerimiz</Link>
            <Link href="#about" className="text-dark hover:text-primary font-medium" onClick={() => setIsOpen(false)}>Hakkımızda</Link>
            <Link href="#portfolio" className="text-dark hover:text-primary font-medium" onClick={() => setIsOpen(false)}>Çalışmalarımız</Link>
            <Link href="#contact" className="text-dark hover:text-primary font-medium" onClick={() => setIsOpen(false)}>İletişim</Link>
          </nav>
        </div>
      )}
    </header>
  );
}