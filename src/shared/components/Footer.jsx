import React from 'react';
import { Shield, ChevronRight, Globe, Facebook, Linkedin, Instagram } from 'lucide-react';

// --- CONFIGURACIÓN DE DATOS ---
const footerConfig = {
  brand: {
    logoUrl: "https://russoft.net/img/optimizadas/logo.png", 
    altText: "Russoft ERP",
    height: "h-14", // Un poco más pequeño que en el nav para el footer
    description: "Liderando la arquitectura digital empresarial en Colombia desde 1996. Especialistas en soluciones contables, administrativas y de producción.",
    socials: [
      { icon: Facebook, href: "#" },
      { icon: Linkedin, href: "#" },
      { icon: Instagram, href: "#" },
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

const FooterLink = ({ children, href = "#" }) => (
  <a 
    href={href} 
    className="group flex items-center gap-1 text-slate-500 hover:text-white transition-colors text-sm font-medium"
  >
    <ChevronRight size={12} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-blue-500" />
    {children}
  </a>
);

const FooterRedesign = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#020617] pt-20 pb-10 border-t border-white/5 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* Branding con el Logo del Navbar */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center transition-opacity hover:opacity-80">
              <a href="/">
                <img 
                  src={footerConfig.brand.logoUrl} 
                  alt={footerConfig.brand.altText} 
                  className={`${footerConfig.brand.height} w-auto brightness-0 invert`}
                />
              </a>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
              {footerConfig.brand.description}
            </p>
            <div className="flex gap-4">
              {footerConfig.brand.socials.map((social, i) => (
                <a key={i} href={social.href} className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all">
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Enlaces Rápidos */}
          {footerConfig.sections.map((section, idx) => (
            <div key={idx} className="md:col-span-3 space-y-6">
              <h4 className="text-white font-black uppercase text-[10px] tracking-[0.2em]">{section.title}</h4>
              <nav className="flex flex-col gap-4">
                {section.links.map((link, lIdx) => (
                  <FooterLink key={lIdx} href={link.href}>{link.name}</FooterLink>
                ))}
              </nav>
            </div>
          ))}

          {/* Status y Protección */}
          <div className="md:col-span-4 space-y-6">
            <h4 className="text-white font-black uppercase text-[10px] tracking-[0.2em]">{footerConfig.status.title}</h4>
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-4">
              {footerConfig.status.badges.map((badge, bIdx) => (
                <div key={bIdx} className="flex items-center gap-3">
                  {badge.pulse && <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />}
                  {badge.icon && <badge.icon size={16} className="text-blue-500/50" />}
                  <span className={`${badge.icon ? 'text-[10px] uppercase tracking-widest' : 'text-xs'} font-bold text-slate-300`}>
                    {badge.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Barra Inferior */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-slate-600 text-[10px] font-bold uppercase tracking-widest">
            <Globe size={14} /> {footerConfig.bottom.location}
          </div>
          
          <div className="text-slate-600 text-[10px] font-medium text-center">
            © {year} RUSSOFT Ltda. • Todos los derechos reservados.
            <span className="hidden md:inline mx-2 text-slate-800">|</span> 
            <br className="md:hidden" />
            {footerConfig.bottom.legalLinks.map((link, i) => (
              <React.Fragment key={i}>
                <a href={link.href} className="hover:text-blue-400">{link.name}</a>
                {i < footerConfig.bottom.legalLinks.length - 1 && " • "}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterRedesign;