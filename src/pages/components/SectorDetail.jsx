import React from 'react';
import { ShieldCheck, Target, Zap, X, ArrowRight, Layers } from 'lucide-react';

const SectorDetail = ({ data, onClose }) => {
  if (!data) return null;

  return (
    <div className="relative bg-white rounded-3xl lg:rounded-[2.5rem] shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-10 duration-500">
      
      {/* Botón de cierre - Más grande y fácil de tocar en móvil */}
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 lg:top-6 lg:right-6 p-3 bg-slate-100 text-slate-500 rounded-full z-30 active:bg-red-100 active:text-red-500 transition-colors"
      >
        <X size={20} />
      </button>

      <div className="grid lg:grid-cols-12">
        
        {/* PANEL IZQUIERDO */}
        <div className="lg:col-span-4 bg-slate-50/80 p-6 lg:p-12 border-b lg:border-b-0 lg:border-r border-slate-100">
          <div className="flex items-center gap-2 mb-4 lg:mb-8">
            <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-lg bg-blue-600 flex items-center justify-center text-white">
              <Layers size={16} />
            </div>
            <span className="text-[9px] lg:text-[10px] font-black uppercase tracking-widest text-blue-600">
              Módulo Especializado
            </span>
          </div>

          <h3 className="text-2xl lg:text-4xl font-black text-[#0a192f] mb-4 lg:mb-6">
            {data.name}
          </h3>
          
          <p className="text-slate-500 text-sm mb-6 leading-relaxed">
            {data.summary}
          </p>

          <div className="p-4 lg:p-6 bg-white rounded-2xl border border-blue-100 shadow-sm">
            <p className="text-[10px] font-bold text-blue-600 uppercase mb-2 flex items-center gap-2">
              <Zap size={12} className="text-yellow-500" /> Valor Estratégico
            </p>
            <p className="text-slate-600 text-xs italic leading-relaxed">
              {data.valueProp}
            </p>
          </div>
        </div>

        {/* PANEL DERECHO */}
        <div className="lg:col-span-8 p-6 lg:p-12">
          <div className="mb-8 lg:mb-10">
            <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">
              Descripción Operativa
            </h4>
            <p className="text-slate-700 text-base lg:text-lg leading-relaxed">
              {data.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-[10px] font-black text-blue-600 uppercase tracking-widest">
                Funcionalidades Clave
              </h4>
              <div className="grid gap-3">
                {data.goals.map((goal, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-md bg-blue-50 flex items-center justify-center">
                      <Check size={12} className="text-blue-600" />
                    </div>
                    <p className="text-sm text-slate-600 leading-tight">
                      {goal}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Móvil - Ahora ocupa el ancho total de su contenedor */}
            <div className="p-6 lg:p-8 rounded-2xl bg-[#0a192f] text-white flex flex-col justify-between gap-6">
              <div>
                <ShieldCheck size={28} className="text-blue-400 mb-3" />
                <p className="font-bold leading-tight">¿Listo para empezar?</p>
                <p className="text-blue-200/60 text-xs mt-1">Agenda una consultoría para {data.name}.</p>
              </div>
              <a 
                href="#contacto" 
                className="flex items-center justify-center gap-2 w-full py-3 bg-white text-[#0a192f] rounded-xl font-bold text-sm"
              >
                Contactar Asesor
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper interno para el icono de check
const Check = ({ size, className }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="3" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default SectorDetail;