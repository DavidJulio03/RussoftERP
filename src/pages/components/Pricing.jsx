import React, { useState } from 'react';
import { 
  Cloud, HardDrive, CheckCircle2, 
  ArrowRight, Sparkles, ShieldCheck, 
  TrendingUp, Wallet 
} from 'lucide-react';

// --- SUBCOMPONENTE: PLAN CARD ---
const PlanCard = ({ plan, isHighlighted, onSelect }) => {
  return (
    <div 
      onClick={() => onSelect(plan.id)}
      className={`group relative bg-white border p-8 lg:p-12 rounded-[2.5rem] transition-all duration-500 cursor-pointer flex flex-col min-h-[550px] ${
        isHighlighted 
        ? 'border-blue-600 shadow-[0_40px_80px_-20px_rgba(37,99,235,0.15)] -translate-y-4 scale-[1.02]' 
        : 'border-slate-200/60 hover:border-slate-300 opacity-80 hover:opacity-100 hover:-translate-y-2'
      }`}
    >
      {/* Badge dinámico para la opción seleccionada */}
      {isHighlighted && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#0a192f] text-white text-[10px] font-black px-5 py-2 rounded-full shadow-xl flex items-center gap-2 tracking-widest uppercase animate-in fade-in zoom-in duration-300">
          <Sparkles size={12} className="text-blue-400" /> Opción Seleccionada
        </div>
      )}

      <div className="flex-1">
        <div className="flex items-center justify-between mb-8">
          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 ${
            isHighlighted ? 'bg-blue-600 text-white rotate-6' : 'bg-slate-50 text-slate-400'
          }`}>
            {plan.icon}
          </div>
          <span className={`text-[10px] font-black uppercase tracking-widest border px-3 py-1 rounded-md transition-colors ${
            isHighlighted ? 'text-blue-600 border-blue-100 bg-blue-50' : 'text-slate-400 border-slate-100'
          }`}>
            {plan.priceTag}
          </span>
        </div>

        <h3 className={`text-3xl font-black mb-4 transition-colors ${
          isHighlighted ? 'text-blue-600' : 'text-[#0a192f]'
        }`}>
          {plan.title}
        </h3>

        <p className="text-slate-500 text-sm lg:text-base mb-10 leading-relaxed font-medium italic">
          "{plan.description}"
        </p>

        <ul className="space-y-5 mb-12">
          {plan.features.map((feature, i) => (
            <li key={i} className="flex items-center gap-3">
              <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center transition-colors ${
                isHighlighted ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-400'
              }`}>
                <CheckCircle2 size={12} />
              </div>
              <span className={`text-sm font-bold tracking-tight transition-colors ${
                isHighlighted ? 'text-slate-900' : 'text-slate-600'
              }`}>
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <a 
        href="#contacto" 
        className={`flex items-center justify-center gap-3 w-full py-5 rounded-2xl font-black text-sm lg:text-base transition-all active:scale-95 ${
          isHighlighted 
          ? 'bg-blue-600 text-white shadow-lg shadow-blue-200 hover:bg-[#0a192f]' 
          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
        }`}
      >
        {plan.buttonText}
        <ArrowRight size={18} className={`${isHighlighted ? 'translate-x-1' : ''} transition-transform`} />
      </a>
    </div>
  );
};

// --- COMPONENTE PRINCIPAL ---
const PlanesInteractivos = () => {
  // Por defecto, la Licencia Vitalicia (id: "vitalicia") es la destacada
  const [activePlan, setActivePlan] = useState("vitalicia");

  const config = {
    header: {
      tag: "Modelos de Inversión",
      title: "Planes a tu Medida",
      subtitle: "Haz clic en el modelo que mejor se adapte a tu visión y descubre sus beneficios exclusivos."
    },
    plans: [
      {
        id: "saas",
        title: "SaaS / Alquiler",
        priceTag: "Flexibilidad Mensual",
        icon: <Cloud className="w-6 h-6" />,
        description: "Acceso inmediato con inversión inicial mínima. Ideal para escalar rápidamente sin compromisos de infraestructura.",
        features: ["Actualizaciones DIAN/NIIF", "Soporte Técnico 24/7", "Servidores Cloud Seguros", "Capacitación Continua"],
        buttonText: "Iniciar Suscripción"
      },
      {
        id: "vitalicia",
        title: "Licencia Vitalicia",
        priceTag: "Activo para Siempre",
        icon: <HardDrive className="w-6 h-6" />,
        description: "La propiedad absoluta del sistema. Elimina los costos recurrentes y convierte el software en un activo real de tu empresa.",
        features: ["Pago Único de por vida", "Instalación Local o Nube", "Propiedad de Base de Datos", "Máximo Retorno (ROI)"],
        buttonText: "Adquirir Licencia"
      }
    ]
  };

  return (
    <section id="planes" className="py-20 lg:py-32 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-b from-blue-50/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/10 text-blue-600 text-[10px] font-black uppercase tracking-[0.2em] mb-4">
            <TrendingUp size={12} />
            {config.header.tag}
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-[#0a192f] mb-6 tracking-tighter italic">
            {config.header.title}<span className="text-blue-600">.</span>
          </h2>
          <p className="text-base lg:text-lg text-slate-500 leading-relaxed font-medium">
            {config.header.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto items-center">
          {config.plans.map((plan) => (
            <PlanCard 
              key={plan.id}
              plan={plan}
              isHighlighted={activePlan === plan.id}
              onSelect={setActivePlan}
            />
          ))}
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-x-12 gap-y-4 opacity-40">
          <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-tighter text-[#0a192f]">
            <ShieldCheck size={14} className="text-blue-600" /> Soporte Técnico Incluido
          </div>
          <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-tighter text-[#0a192f]">
            <Wallet size={14} className="text-blue-600" /> Sin Costos Ocultos
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlanesInteractivos;