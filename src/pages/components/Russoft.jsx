import React from 'react';
import { ArrowRight, History, Sparkles } from 'lucide-react';

// --- SUBCOMPONENTE: BOTÓN DE NAVEGACIÓN (Optimizado para Touch) ---
const HistoryCTA = ({ href = "/historia" }) => (
  <a 
    href={href}
    className="inline-flex items-center gap-4 p-1 pr-6 bg-[#0a192f] rounded-2xl group transition-all hover:bg-blue-700 w-full sm:w-auto"
  >
    <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white group-hover:scale-95 transition-transform">
      <History size={22} />
    </div>
    <span className="text-white font-bold text-sm tracking-tight">
      Conoce nuestra trayectoria
    </span>
    <ArrowRight size={18} className="text-blue-400 ml-auto group-hover:translate-x-1 transition-transform" />
  </a>
);

// --- COMPONENTE PRINCIPAL ---
const SobreRussoftSimple = () => {
  return (
    <section id="nosotros" className="py-16 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Imagen: Orden de lectura 2 en móvil, 1 en desktop para balance */}
          <div className="w-full lg:w-5/12 order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-50 rounded-[3rem] -rotate-2" />
              <div className="relative h-[350px] lg:h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80" 
                  alt="Equipo Russoft" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Contenido: Orden de lectura 1 en móvil */}
          <div className="w-full lg:w-7/12 order-1 lg:order-2 space-y-6 lg:space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-widest">
              <Sparkles size={12} /> Desde 1996
            </div>

            <h2 className="text-4xl lg:text-6xl font-black text-[#0a192f] leading-[1.1] tracking-tighter">
              Soluciones que <br />
              <span className="text-blue-600">transforman</span> empresas.
            </h2>

            <div className="space-y-4">
              <p className="text-lg lg:text-xl text-slate-600 font-medium leading-relaxed">
                En Russoft, no solo programamos; diseñamos el motor tecnológico que impulsa el crecimiento de más de 1,000 compañías en Colombia.
              </p>
              
              <p className="text-slate-500 leading-relaxed text-sm lg:text-base">
                Nuestra historia es una de constante evolución y pasión por la disciplina. Hemos convertido la complejidad contable y administrativa en procesos simples, seguros y altamente rentables.
              </p>
            </div>

            {/* Valores en formato simple (Chips) */}
            <div className="flex flex-wrap gap-2 pt-2">
              {["Innovación", "Compromiso", "Ética"].map((tag) => (
                <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-500 text-[10px] font-bold uppercase rounded-md">
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA Final */}
            <div className="pt-6">
              <HistoryCTA href="/nuestra-historia" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SobreRussoftSimple;