"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Início', href: '#home' },
    { name: 'Projetos', href: '#projetos' },
    { name: 'Soluções', href: '#solucoes' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Sobre a Photon', href: '#sobre' }
    
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${
      isScrolled 
        ? 'bg-[var(--background)]/95 backdrop-blur-xl shadow-2xl border-b border-[var(--primary)]/20' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo e Branding */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/logo-photon.png"
              alt="Photon Energia Logo"
              width={140}
              height={50}
              className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
              priority
            />
            <div className="ml-4 border-l border-white/20 pl-4">
              <span className={`text-sm font-medium tracking-wide transition-all duration-500 ${
                isScrolled ? 'text-[var(--text-secondary)]' : 'text-white/80'
              }`}>
                Engenharia de
              </span>
              <br />
              <span className={`text-sm font-semibold tracking-wide transition-all duration-500 ${
                isScrolled ? 'text-[var(--text-primary)]' : 'text-white'
              }`}>
                Sustentabilidade
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group ${
                  isScrolled 
                    ? 'text-[var(--text-primary)] hover:text-[var(--primary)] hover:bg-[var(--background-alt)]/50' 
                    : 'text-white hover:text-[var(--primary)] hover:bg-white/10'
                }`}
              >
                {item.name}
                <span className="absolute inset-x-1 bottom-1 h-0.5 bg-[var(--primary)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full"></span>
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://wa.me/553199595991?text=Ol%C3%A1,%20vi%20seu%20site%20e%20quero%20fazer%20um%20or%C3%A7amento."
              className={`relative inline-flex items-center px-6 py-2.5 text-sm font-semibold rounded-full shadow-lg transition-all duration-300 group !no-underline ${
                isScrolled 
                  ? 'bg-[var(--primary)] text-[var(--background)] hover:bg-[var(--primary-hover)] hover:shadow-xl hover:shadow-[var(--primary)]/25' 
                  : 'bg-[var(--primary)] text-white hover:bg-[var(--primary-hover)] hover:shadow-xl hover:shadow-[var(--primary)]/25'
              } hover:scale-105`}
            >
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.515z"/>
              </svg>
              <span>Fazer Orçamento</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-all duration-300 ${
              isScrolled 
                ? 'text-[var(--text-primary)] hover:text-[var(--primary)] hover:bg-[var(--background-alt)]/50' 
                : 'text-white hover:text-[var(--primary)] hover:bg-white/10'
            }`}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${
        isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-[var(--background)]/95 backdrop-blur-xl border-t border-[var(--primary)]/20 shadow-2xl">
          <div className="px-4 py-6 space-y-3">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-3 text-[var(--text-primary)] font-medium rounded-lg hover:bg-[var(--background-alt)]/50 hover:text-[var(--primary)] transition-all duration-300 transform hover:translate-x-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4 border-t border-[var(--primary)]/20">
              <a
                href="https://wa.me/553199595991?text=Ol%C3%A1,%20vi%20seu%20site%20e%20quero%20fazer%20um%20or%C3%A7amento."
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-center w-full px-6 py-3 bg-[var(--primary)] text-[var(--background)] font-semibold rounded-full shadow-lg hover:shadow-xl hover:shadow-[var(--primary)]/25 transition-all duration-300 hover:bg-[var(--primary-hover)] hover:scale-105 !no-underline"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.522-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.074 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                <span>Fazer Orçamento</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;