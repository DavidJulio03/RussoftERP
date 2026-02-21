import React, { useState } from 'react';
import { 
  Cloud, 
  HardDrive, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  TrendingUp, 
  Wallet 
} from 'lucide-react';

/**
 * CONFIGURACIÓN DE MODELOS DE NEGOCIO
 * Centraliza la propuesta de valor para SaaS y Licenciamiento.
 */
const PLANES_CONFIG = {
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
      icon: Cloud,
      description: "Acceso inmediato con inversión inicial mínima. Ideal para escalar rápidamente sin compromisos de infraestructura.",
      features: [
        "Actualizaciones DIAN/NIIF", 
        "Soporte Técnico 24/7", 
        "Servidores Cloud Seguros", 
        "Capacitación Continua"
      ],
      buttonText: "Iniciar Suscripción"
    },
    {
      id: "vitalicia",
      title: "Licencia Vitalicia",
      priceTag: "Activo para Siempre",
      icon: HardDrive,
      description: "La propiedad absoluta del sistema. Elimina los costos recurrentes y convierte el software en un activo real de tu empresa.",
      features: [
        "Pago Único de por vida", 
        "Instalación Local o Nube", 
        "Propiedad de Base de Datos", 
        "Máximo Retorno (ROI)"
      ],
      buttonText: "Adquirir Licencia"
    }
  ],
  footerBadges: [
    { icon: ShieldCheck, text: "Soporte Técnico Incluido" },
    { icon: Wallet, text: "Sin Costos Ocultos" }
  ]
};

/**
 * SUBCOMPONENTE: PlanCard
 * Gestiona la visualización individual de cada plan con estados de selección.
 */
const PlanCard = ({ plan, isHighlighted, onSelect }) => {
  const Icon = plan.icon;

  return (
    <div 
      onClick={() => onSelect(plan.id)}
      className={`group relative flex min-h-[550px] cursor-pointer flex-col rounded-[2.5rem] border p-8 transition-all duration-500 lg:p-12 ${
        isHighlighted 
          ? 'border-blue-600 bg-white scale-[1.02] -translate-y-4 shadow-[0_40px_80px_-20px_rgba(37,99,235,0.15)]' 
          : 'border-slate-200/60 bg-white opacity-80 hover:-translate-y-2 hover:border-slate-300 hover:opacity-100'
      }`}
    >
      {/* Badge de Selección (Solo visible si está activo) */}
      {isHighlighted && (
        <div className="absolute -top-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-[#0a192f] px-5 py-2 text-[10px] font-black uppercase tracking-widest text-white shadow-xl animate-in fade-in zoom-in duration-300">
          <Sparkles size={12} className="text-blue-400" /> Opción Seleccionada
        </div>
      )}

      <div className="flex-1">
        {/* Header de la Card */}
        <div className="mb-8 flex items-center justify-between">
          <div className={`flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-500 ${
            isHighlighted ? 'bg-blue-600 text-white rotate-6' : 'bg-slate-50 text-slate-400'
          }`}>
            <Icon size={24} />
          </div>
          <span className={`rounded-md border px-3 py-1 text-[10px] font-black uppercase tracking-widest transition-colors ${
            isHighlighted ? 'border-blue-100 bg-blue-50 text-blue-600' : 'border-slate-100 text-slate-400'
          }`}>
            {plan.priceTag}
          </span>
        </div>

        {/* Título y Descripción */}
        <h3 className={`mb-4 text-3xl font-black transition-colors ${
          isHighlighted ? 'text-blue-600' : 'text-[#0a192f]'
        }`}>
          {plan.title}
        </h3>

        <p className="mb-10 text-sm font-medium italic leading-relaxed text-slate-500 lg:text-base">
          "{plan.description}"
        </p>

        {/* Lista de Beneficios */}
        <ul className="mb-12 space-y-5">
          {plan.features.map((feature, i) => (
            <li key={i} className="flex items-center gap-3">
              <div className={`flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full transition-colors ${
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

      {/* Botón de Acción */}
      <a 
        href="#contacto" 
        className={`flex items-center justify-center gap-3 w-full py-5 rounded-2xl font-black text-sm transition-all active:scale-95 lg:text-base ${
          isHighlighted 
            ? 'bg-blue-600 text-white shadow-lg shadow-blue-200 hover:bg-[#0a192f]' 
            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
        }`}
      >
        {plan.buttonText}
        <ArrowRight size={18} className={`transition-transform ${isHighlighted ? 'translate-x-1' : ''}`} />
      </a>
    </div>
  );
};

/**
 * COMPONENTE PRINCIPAL: PlanesInteractivos
 */
const Pricing = () => {
  const { header, plans, footerBadges } = PLANES_CONFIG;
  const [activePlan, setActivePlan] = useState("vitalicia");

  return (
    <section id="planes" className="relative overflow-hidden bg-slate-50 py-20 lg:py-32">
      {/* Background Decorativo */}
      <div className="absolute left-1/2 top-0 h-1/2 w-full -translate-x-1/2 bg-gradient-to-b from-blue-50/50 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Cabecera de Sección */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-600/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-blue-600">
            <TrendingUp size={12} />
            {header.tag}
          </div>
          <h2 className="mb-6 text-4xl font-black italic tracking-tighter text-[#0a192f] lg:text-6xl">
            {header.title}<span className="text-blue-600">.</span>
          </h2>
          <p className="text-base font-medium leading-relaxed text-slate-500 lg:text-lg">
            {header.subtitle}
          </p>
        </div>

        {/* Grid de Planes */}
        <div className="mx-auto grid max-w-5xl items-center gap-8 md:grid-cols-2 lg:gap-12">
          {plans.map((plan) => (
            <PlanCard 
              key={plan.id}
              plan={plan}
              isHighlighted={activePlan === plan.id}
              onSelect={setActivePlan}
            />
          ))}
        </div>

        {/* Badges de Confianza */}
        <div className="mt-16 flex flex-wrap justify-center gap-x-12 gap-y-4 opacity-40">
          {footerBadges.map((badge, idx) => (
            <div key={idx} className="flex items-center gap-2 text-[10px] font-black uppercase tracking-tighter text-[#0a192f]">
              <badge.icon size={14} className="text-blue-600" /> {badge.text}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Pricing;