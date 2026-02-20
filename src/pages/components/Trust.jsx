import React from 'react';
import { ShieldCheck, Users, Briefcase, Award, Zap } from 'lucide-react';

const Confianza = () => {
  // --- CONFIGURACIÓN CENTRALIZADA ---
  const config = {
    stats: [
      {
        id: 1,
        icon: <ShieldCheck className="w-8 h-8 lg:w-10 lg:h-10 text-green-400" />,
        title: "30 Años de Experiencia",
        description: "Conocimiento profundo de la normativa y realidad empresarial colombiana.",
        highlight: "Seguridad Legal"
      },
      {
        id: 2,
        icon: <Users className="w-8 h-8 lg:w-10 lg:h-10 text-blue-400" />,
        title: "Soporte Directo",
        description: "Sin intermediarios. Asesoría humana y personalizada para su equipo de trabajo.",
        highlight: "Atención Humana"
      },
      {
        id: 3,
        icon: <Briefcase className="w-8 h-8 lg:w-10 lg:h-10 text-indigo-400" />,
        title: "Licencias Vitalicias",
        description: "Opciones de pago único para que el software sea un activo real de su empresa.",
        highlight: "Activo Empresarial"
      }
    ]
  };

  return (
    <section className="py-12 lg:py-20 bg-[#0a192f] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="bg-white/[0.02] border border-white/10 rounded-[2.5rem] backdrop-blur-sm shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
            
            {config.stats.map((item) => (
              <div 
                key={item.id} 
                className="relative p-8 lg:p-12 group hover:bg-white/[0.02] transition-all duration-500"
              >
                {/* Indicador de "Highlight" que aparece al hacer hover */}
                <div className="absolute top-6 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest bg-blue-400/10 px-2 py-1 rounded">
                    {item.highlight}
                  </span>
                </div>

                <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6">
                  {/* Icono con contenedor flotante */}
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 shadow-inner group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500">
                    {item.icon}
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xl lg:text-2xl font-black text-white tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-slate-400 text-sm lg:text-base leading-relaxed font-medium">
                      {item.description}
                    </p>
                  </div>

                  {/* Detalle decorativo inferior */}
                  <div className="w-8 h-1 bg-blue-600/30 rounded-full group-hover:w-16 group-hover:bg-blue-500 transition-all duration-500"></div>
                </div>
              </div>
            ))}

          </div>
        </div>

        {/* Banner de confianza secundaria (opcional) */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
           <div className="flex items-center gap-2 text-white font-bold text-xs uppercase tracking-widest">
             <Award size={16} /> Software 100% Colombiano
           </div>
           <div className="flex items-center gap-2 text-white font-bold text-xs uppercase tracking-widest">
             <Zap size={16} /> Tecnología NIIF & DIAN
           </div>
        </div>
      </div>
    </section>
  );
};

export default Confianza;