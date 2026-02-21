import React from 'react';
import { 
  ShieldCheck, 
  Target, 
  Zap, 
  X, 
  ArrowRight, 
  Layers, 
  Check 
} from 'lucide-react';

/**
 * CONFIGURACIÓN DE TEXTOS ESTÁTICOS
 * Centraliza las etiquetas comunes del detalle del sector.
 */
const DETAIL_UI_CONFIG = {
  labels: {
    specializedModule: "Módulo Especializado",
    strategicValue: "Valor Estratégico",
    operationalDesc: "Descripción Operativa",
    keyFeatures: "Funcionalidades Clave",
    ctaTitle: "¿Listo para empezar?",
    ctaSubtitle: "Agenda una consultoría para ",
    ctaButton: "Contactar Asesor"
  }
};

/**
 * COMPONENTE: SectorDetail
 * Renderiza la vista detallada de un sector específico.
 * * @param {Object} data - Información del sector (name, summary, valueProp, description, goals)
 * @param {Function} onClose - Función para cerrar la vista
 */
const SectorDetail = ({ data, onClose }) => {
  if (!data) return null;

  const { labels } = DETAIL_UI_CONFIG;

  return (
    <div className="relative animate-in fade-in slide-in-from-bottom-10 overflow-hidden rounded-3xl bg-white shadow-2xl duration-500 lg:rounded-[2.5rem]">
      
      {/* BOTÓN DE CIERRE: Optimizado para interacción táctil */}
      <button 
        onClick={onClose}
        className="absolute right-4 top-4 z-30 rounded-full bg-slate-100 p-3 text-slate-500 transition-colors active:bg-red-100 active:text-red-500 lg:right-6 lg:top-6"
        aria-label="Cerrar detalle"
      >
        <X size={20} />
      </button>

      <div className="grid lg:grid-cols-12">
        
        {/* PANEL IZQUIERDO: Resumen y Propuesta de Valor */}
        <div className="border-b border-slate-100 bg-slate-50/80 p-6 lg:col-span-4 lg:border-b-0 lg:border-r lg:p-12">
          
          {/* Badge del Módulo */}
          <div className="mb-4 flex items-center gap-2 lg:mb-8">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white lg:h-10 lg:w-10">
              <Layers size={16} />
            </div>
            <span className="text-[9px] font-black uppercase tracking-widest text-blue-600 lg:text-[10px]">
              {labels.specializedModule}
            </span>
          </div>

          <h3 className="mb-4 text-2xl font-black text-[#0a192f] lg:mb-6 lg:text-4xl">
            {data.name}
          </h3>
          
          <p className="mb-6 text-sm leading-relaxed text-slate-500">
            {data.summary}
          </p>

          {/* Card de Valor Estratégico */}
          <div className="rounded-2xl border border-blue-100 bg-white p-4 shadow-sm lg:p-6">
            <p className="mb-2 flex items-center gap-2 text-[10px] font-bold uppercase text-blue-600">
              <Zap size={12} className="text-yellow-500" /> {labels.strategicValue}
            </p>
            <p className="text-xs italic leading-relaxed text-slate-600">
              {data.valueProp}
            </p>
          </div>
        </div>

        {/* PANEL DERECHO: Detalle Operativo y Conversión */}
        <div className="p-6 lg:col-span-8 lg:p-12">
          
          {/* Sección de Descripción */}
          <div className="mb-8 lg:mb-10">
            <h4 className="mb-3 text-[10px] font-black uppercase tracking-widest text-slate-400">
              {labels.operationalDesc}
            </h4>
            <p className="text-base leading-relaxed text-slate-700 lg:text-lg">
              {data.description}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            
            {/* Listado de Funcionalidades */}
            <div className="space-y-4">
              <h4 className="text-[10px] font-black uppercase tracking-widest text-blue-600">
                {labels.keyFeatures}
              </h4>
              <div className="grid gap-3">
                {data.goals.map((goal, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md bg-blue-50">
                      <Check size={12} strokeWidth={3} className="text-blue-600" />
                    </div>
                    <p className="text-sm font-medium leading-tight text-slate-600">
                      {goal}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* CARD DE LLAMADO A LA ACCIÓN (CTA) */}
            <div className="flex flex-col justify-between gap-6 rounded-2xl bg-[#0a192f] p-6 text-white lg:p-8">
              <div>
                <ShieldCheck size={28} className="mb-3 text-blue-400" />
                <p className="font-bold leading-tight">{labels.ctaTitle}</p>
                <p className="mt-1 text-xs text-blue-200/60">
                  {labels.ctaSubtitle} {data.name}.
                </p>
              </div>
              
              <a 
                href="#contacto" 
                className="flex items-center justify-center gap-2 rounded-xl bg-white py-3 text-sm font-bold text-[#0a192f] transition-transform active:scale-95"
              >
                {labels.ctaButton}
                <ArrowRight size={16} />
              </a>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default SectorDetail;