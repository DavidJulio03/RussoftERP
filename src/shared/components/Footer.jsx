import React from 'react';
import { Shield, ChevronRight, Globe, Facebook, Linkedin, Instagram } from 'lucide-react';

// --- SUBCOMPONENTE: ENLACE DE PIE DE PÁGINA ---
const FooterLink = ({ children, href = "#" }) => (
  <a 
    href={href} 
    className="group flex items-center gap-1 text-slate-500 hover:text-white transition-colors text-sm font-medium"
  >
    <ChevronRight size={12} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-blue-500" />
    {children}
  </a>
);

// --- COMPONENTE PRINCIPAL ---
const FooterRedesign = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#020617] pt-20 pb-10 border-t border-white/5 relative overflow-hidden">
      {/* Glow decorativo sutil */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* Branding y Propósito (5/12) */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-black text-xl">
                R
              </div>
              <span className="text-2xl font-black text-white tracking-tighter italic">
                RUSSOFT <span className="text-blue-500">Ltda.</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
              Liderando la arquitectura digital empresarial en Colombia desde 1996. Especialistas en soluciones contables, administrativas y de producción de alto rendimiento.
            </p>
            <div className="flex gap-4">
              {[Facebook, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Enlaces Rápidos (3/12) */}
          <div className="md:col-span-3 space-y-6">
            <h4 className="text-white font-black uppercase text-[10px] tracking-[0.2em]">Recursos</h4>
            <nav className="flex flex-col gap-4">
              <FooterLink>Centro de Soporte</FooterLink>
              <FooterLink>Actualizaciones DIAN</FooterLink>
              <FooterLink>Manuales de Usuario</FooterLink>
              <FooterLink>Nuestra Historia</FooterLink>
            </nav>
          </div>

          {/* Legal y Status (4/12) */}
          <div className="md:col-span-4 space-y-6">
            <h4 className="text-white font-black uppercase text-[10px] tracking-[0.2em]">Sistematización Blindada</h4>
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-bold text-slate-300">Sistemas DIAN / NIIF Operativos</span>
              </div>
              <div className="flex items-center gap-3 text-slate-500">
                <Shield size={16} className="text-blue-500/50" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Protección de Datos Ley 1581</span>
              </div>
            </div>
          </div>
        </div>

        {/* Barra Inferior */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-slate-600 text-[10px] font-bold uppercase tracking-widest">
            <Globe size={14} /> Hecho con orgullo en Colombia
          </div>
          
          <div className="text-slate-600 text-[10px] font-medium text-center">
            © {year} RUSSOFT Ltda. • Todos los derechos reservados. 
            <span className="hidden md:inline mx-2 text-slate-800">|</span> 
            <br className="md:hidden" />
            <a href="#" className="hover:text-blue-400">Política de Privacidad</a> • <a href="#" className="hover:text-blue-400">Términos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterRedesign;