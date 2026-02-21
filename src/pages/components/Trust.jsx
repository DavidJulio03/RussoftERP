import React from 'react';
import { ShieldCheck, Users, Briefcase, Award, Zap } from 'lucide-react';

/**
 * CONFIGURACIÓN DE CONFIANZA
 * Define los pilares de valor y los distintivos de marca.
 */
const CONFIANZA_CONFIG = {
  stats: [
    {
      id: 1,
      icon: ShieldCheck,
      iconColor: "text-green-400",
      title: "30 Años de Experiencia",
      description: "Conocimiento profundo de la normativa y realidad empresarial colombiana.",
      highlight: "Seguridad Legal"
    },
    {
      id: 2,
      icon: Users,
      iconColor: "text-blue-400",
      title: "Soporte Directo",
      description: "Sin intermediarios. Asesoría humana y personalizada para su equipo de trabajo.",
      highlight: "Atención Humana"
    },
    {
      id: 3,
      icon: Briefcase,
      iconColor: "text-indigo-400",
      title: "Licencias Vitalicias",
      description: "Opciones de pago único para que el software sea un activo real de su empresa.",
      highlight: "Activo Empresarial"
    }
  ],
  badges: [
    { icon: Award, text: "Software 100% Colombiano" },
    { icon: Zap, text: "Tecnología NIIF & DIAN" }
  ]
};

/**
 * COMPONENTE: Trust
 * Muestra los diferenciales competitivos en un layout de alta gama.
 */
const Trust = () => {
  const { stats, badges } = CONFIANZA_CONFIG;

  return (
    <section className="relative overflow-hidden bg-[#0a192f] py-12 lg:py-20">
      
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* CONTENEDOR PRINCIPAL: Glassmorphism suave */}
        <div className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.02] shadow-2xl backdrop-blur-sm">
          <div className="grid divide-y divide-white/10 md:grid-cols-3 md:divide-x md:divide-y-0">
            
            {stats.map((item) => {
              const Icon = item.icon;
              return (
                <div 
                  key={item.id} 
                  className="group relative p-8 transition-all duration-500 hover:bg-white/[0.02] lg:p-12"
                >
                  {/* Badge de "Highlight" (Tooltip-style) */}
                  <div className="absolute right-8 top-6 opacity-0 transition-opacity group-hover:opacity-100">
                    <span className="rounded bg-blue-400/10 px-2 py-1 text-[10px] font-black uppercase tracking-widest text-blue-400">
                      {item.highlight}
                    </span>
                  </div>

                  <div className="flex flex-col items-center space-y-6 text-center md:items-start md:text-left">
                    {/* Contenedor del Icono */}
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-inner transition-all duration-500 group-hover:scale-110 group-hover:bg-white/10">
                      <Icon className={`h-8 w-8 lg:h-10 lg:w-10 ${item.iconColor}`} />
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-xl font-black tracking-tight text-white lg:text-2xl">
                        {item.title}
                      </h3>
                      <p className="text-sm font-medium leading-relaxed text-slate-400 lg:text-base">
                        {item.description}
                      </p>
                    </div>

                    {/* Decorador de acento inferior */}
                    <div className="h-1 w-8 rounded-full bg-blue-600/30 transition-all duration-500 group-hover:w-16 group-hover:bg-blue-500"></div>
                  </div>
                </div>
              );
            })}

          </div>
        </div>

        {/* BANNER DE DISTINTIVOS SECUNDARIOS */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 grayscale transition-all duration-700 hover:grayscale-0 opacity-30 hover:opacity-100">
           {badges.map((badge, idx) => (
             <div key={idx} className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white lg:text-xs">
               <badge.icon size={16} className="text-blue-400" /> 
               {badge.text}
             </div>
           ))}
        </div>

      </div>
    </section>
  );
};

export default Trust;