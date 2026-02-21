import React from 'react';
import { Shield, ChevronRight, Globe, Facebook, Linkedin, Instagram } from 'lucide-react';

/**
 * CONFIGURACIÓN DE DATOS DEL FOOTER
 * Centraliza la marca, enlaces sociales, recursos y badges de cumplimiento.
 */
const FOOTER_CONFIG = {
  brand: {
    logoUrl: "https://russoft.net/img/optimizadas/logo.png", 
    altText: "Russoft ERP",
    height: "h-12",
    description: "Liderando la arquitectura digital empresarial en Colombia desde 1996. Especialistas en soluciones contables, administrativas y de producción.",
    socials: [
      { icon: Facebook, href: "#", label: "Facebook" },
      { icon: Linkedin, href: "#", label: "LinkedIn" },
      { icon: Instagram, href: "#", label: "Instagram" },
    ]
  },
  sections: [
    {
      title: "Recursos",
      links: [
        { name: "Centro de Soporte", href: "#" },
        { name: "Actualizaciones DIAN", href: "#" },
        { name: "Manuales de Usuario", href: "#" },
        { name: "Nuestra Historia", href: "#" },
      ]
    }
  ],
  status: {
    title: "Sistematización Blindada",
    badges: [
      { text: "Sistemas DIAN / NIIF Operativos", pulse: true },
      { text: "Protección de Datos Ley 1581", icon: Shield }
    ]
  },
  bottom: {
    location: "Hecho con orgullo en Colombia",
    legalLinks: [
      { name: "Política de Privacidad", href: "#" },
      { name: "Términos de Uso", href: "#" }
    ]
  }
};

/**
 * SUBCOMPONENTE: FooterLink
 * Enlace con efecto de hover animado y Chevron dinámico.
 */
const FooterLink = ({ children, href = "#" }) => (
  <a 
    href={href} 
    className="group flex items-center gap-1 text-sm font-medium text-slate-500 transition-colors hover:text-white"
  >
    <ChevronRight 
      size={12} 
      className="-ml-4 opacity-0 transition-all group-hover:ml-0 group-hover:opacity-100 text-blue-500" 
    />
    {children}
  </a>
);

/**
 * COMPONENTE PRINCIPAL: FooterRedesign
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { brand, sections, status, bottom } = FOOTER_CONFIG;

  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-[#020617] pb-10 pt-20">
      
      {/* Decoración de base: Línea de luz sutil */}
      <div className="absolute bottom-0 left-1/2 h-px w-full -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 mb-16 md:grid-cols-12">
          
          {/* BLOQUE 1: Branding y Redes */}
          <div className="space-y-6 md:col-span-5">
            <div className="flex items-center transition-opacity hover:opacity-80">
              <a href="/" aria-label="Ir al inicio">
                <img 
                  src={brand.logoUrl} 
                  alt={brand.altText} 
                  className={`${brand.height} w-auto brightness-0 invert`} // Asegura visibilidad en fondo oscuro
                />
              </a>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-slate-500">
              {brand.description}
            </p>
            <div className="flex gap-4">
              {brand.socials.map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-slate-400 transition-all hover:bg-blue-600 hover:text-white"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* BLOQUE 2: Enlaces de Navegación */}
          {sections.map((section, idx) => (
            <div key={idx} className="space-y-6 md:col-span-3">
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white">
                {section.title}
              </h4>
              <nav className="flex flex-col gap-4">
                {section.links.map((link, lIdx) => (
                  <FooterLink key={lIdx} href={link.href}>
                    {link.name}
                  </FooterLink>
                ))}
              </nav>
            </div>
          ))}

          {/* BLOQUE 3: Estatus Técnico y Legal */}
          <div className="space-y-6 md:col-span-4">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white">
              {status.title}
            </h4>
            <div className="space-y-4 rounded-2xl border border-white/5 bg-white/[0.02] p-5">
              {status.badges.map((badge, bIdx) => (
                <div key={bIdx} className="flex items-center gap-3">
                  {badge.pulse && (
                    <div className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                    </div>
                  )}
                  {badge.icon && <badge.icon size={16} className="text-blue-500/50" />}
                  <span className={`${badge.icon ? 'text-[10px] uppercase tracking-widest' : 'text-xs'} font-bold text-slate-300`}>
                    {badge.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* BARRA INFERIOR: Copyright y Legal */}
        <div className="flex flex-col items-center justify-between gap-6 border-t border-white/5 pt-8 md:flex-row">
          <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-600">
            <Globe size={14} className="text-blue-500/40" /> {bottom.location}
          </div>
          
          <div className="text-center text-[10px] font-medium text-slate-600">
            <p className="mb-2 md:mb-0 md:inline">
              © {currentYear} RUSSOFT Ltda. • Todos los derechos reservados.
            </p>
            <span className="hidden mx-2 text-slate-800 md:inline">|</span> 
            <div className="flex justify-center gap-3 md:inline">
              {bottom.legalLinks.map((link, i) => (
                <React.Fragment key={i}>
                  <a href={link.href} className="transition-colors hover:text-blue-400">
                    {link.name}
                  </a>
                  {i < bottom.legalLinks.length - 1 && <span className="text-slate-800">•</span>}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;