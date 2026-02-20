import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navConfig = {
    brand: {
      logoUrl: "https://russoft.net/img/optimizadas/logo.png", 
      altText: "Russoft ERP",
      height: "h-18",
    },
    links: [
      { name: "Soluciones", href: "#solucion" },
      { name: "Módulos", href: "#modulos" },
      { name: "Sectores", href: "#sectores" },
      { name: "Planes", href: "#planes" },
    ],
    cta: {
      text: "Cotizar ahora",
      href: "#contacto",
    }
  };

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo con hover suave */}
          <div className="flex-shrink-0 flex items-center transition-opacity hover:opacity-80">
            <a href="/">
              <img 
                src={navConfig.brand.logoUrl} 
                alt={navConfig.brand.altText} 
                className={`${navConfig.brand.height} w-auto`}
              />
            </a>
          </div>

          {/* Desktop Navigation - Minimalista */}
          <div className="hidden md:flex items-center space-x-10">
            {navConfig.links.map((link, index) => (
              <a 
                key={index} 
                href={link.href} 
                className="text-[15px] font-medium text-gray-600 hover:text-blue-600 transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
            
            {/* CTA con gradiente y sombra sutil */}
            <a 
              href={navConfig.cta.href} 
              className="ml-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-md shadow-blue-200 hover:shadow-lg hover:translate-y-[-1px] transition-all duration-200"
            >
              {navConfig.cta.text}
            </a>
          </div>

          {/* Botón Móvil - Diseño más limpio */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="text-gray-500 hover:text-blue-600 p-2 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Animación simple de opacidad */}
      <div className={`md:hidden absolute w-full bg-white border-b border-gray-100 transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="px-6 py-6 space-y-4 shadow-xl">
          {navConfig.links.map((link, index) => (
            <a 
              key={index} 
              href={link.href} 
              className="block text-lg font-medium text-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href={navConfig.cta.href} 
            className="block w-full text-center bg-blue-600 text-white py-4 rounded-xl font-bold shadow-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            {navConfig.cta.text}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;