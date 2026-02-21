import React from 'react';
import { 
  ShoppingCart, 
  CheckCircle, 
  Calculator, 
  Factory, 
  Users, 
  ChevronRight, 
  Sparkles 
} from 'lucide-react';

/**
 * CONFIGURACIÓN DE MÓDULOS
 * Centraliza la data para facilitar la escalabilidad del ERP.
 */
const MODULES_CONFIG = {
  header: {
    tag: "Capacidades del Sistema",
    title: "Módulos Integrales",
    subtitle: "Una infraestructura robusta diseñada para centralizar cada rincón de tu operación empresarial."
  },
  items: [
    {
      title: "Gestión Comercial",
      icon: ShoppingCart,
      features: ["Facturación Electrónica", "POS Multiformas de pago", "Cotizaciones a Factura", "Control de Cartera"]
    },
    {
      title: "Inventarios",
      icon: CheckCircle,
      features: ["Control por bodega", "Alertas stock mín/máx", "Multimedidas", "Bloqueo stocks negativos"]
    },
    {
      title: "Finanzas y Contabilidad",
      icon: Calculator,
      features: ["Contabilidad NIIF", "Estados Financieros Auto", "Conciliación Bancaria", "Medios Magnéticos"]
    },
    {
      title: "Producción",
      icon: Factory,
      features: ["Órdenes de producción", "Recetas y Costos", "Simulación", "Control de materia prima"]
    },
    {
      title: "Nómina",
      icon: Users,
      features: ["Liquidación automática", "Archivos planos bancos", "Seguridad social", "Portal de empleados"]
    }
  ],
  ctaCard: {
    title: "¿Necesitas un módulo personalizado?",
    description: "Diseñamos integraciones a la medida de los flujos únicos de tu empresa.",
    buttonText: "Hablar con un experto",
    href: "#contacto"
  }
};

/**
 * COMPONENTE: Modules
 * Muestra las capacidades funcionales del software en un grid responsivo.
 */
const Modules = () => {
  const { header, items, ctaCard } = MODULES_CONFIG;

  return (
    <section id="modulos" className="relative overflow-hidden bg-slate-50 py-20 lg:py-32">
      
      {/* DECORACIÓN DE FONDO */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-blue-100/50 opacity-50 blur-3xl" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        
        {/* ENCABEZADO DE SECCIÓN */}
        <div className="mx-auto mb-16 max-w-3xl text-center lg:mb-24">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-600/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-blue-600">
            <Sparkles size={12} />
            {header.tag}
          </div>
          <h2 className="mb-6 text-4xl font-black tracking-tighter text-[#0a192f] lg:text-6xl">
            {header.title}
          </h2>
          <p className="mx-auto max-w-2xl text-base font-medium leading-relaxed text-slate-500 lg:text-lg">
            {header.subtitle}
          </p>
        </div>

        {/* GRID DE MÓDULOS */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          
          {items.map((mod, index) => (
            <div 
              key={index} 
              className="group relative rounded-[2rem] border border-slate-200/60 bg-white p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_-15px_rgba(10,25,47,0.1)] lg:p-10"
            >
              {/* Icono con Hover Dinámico */}
              <div className="mb-8 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-100 bg-slate-50 text-blue-600 transition-all duration-500 group-hover:bg-blue-600 group-hover:text-white lg:h-16 lg:w-16">
                <mod.icon size={24} />
              </div>

              <h3 className="mb-6 text-xl font-black text-[#0a192f] transition-colors group-hover:text-blue-600 lg:text-2xl">
                {mod.title}
              </h3>

              {/* Lista de Características */}
              <ul className="space-y-4">
                {mod.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-500 transition-colors group-hover:text-slate-700">
                    <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.6)]" />
                    <span className="text-sm font-bold leading-tight tracking-tight">
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Footer de la Card */}
              <div className="mt-10 flex items-center justify-between border-t border-slate-50 pt-6">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 transition-colors group-hover:text-blue-600">
                  Especificaciones
                </span>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-50 transition-colors group-hover:bg-blue-50">
                  <ChevronRight size={16} className="text-slate-300 group-hover:text-blue-600" />
                </div>
              </div>
            </div>
          ))}

          {/* CARD DE LLAMADO A LA ACCIÓN (CTA) PERSONALIZADO */}
          <div className="relative flex min-h-[350px] flex-col justify-between overflow-hidden rounded-[2rem] bg-[#0a192f] p-8 lg:p-10">
            {/* Decoración Interna */}
            <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-blue-500/10 blur-2xl" />
            
            <div className="relative z-10">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-blue-500/40 bg-blue-500/20">
                <div className="h-2 w-2 animate-pulse rounded-full bg-blue-400" />
              </div>
              <h3 className="mb-4 text-2xl font-black text-white">
                {ctaCard.title}
              </h3>
              <p className="mb-8 text-sm font-medium leading-relaxed text-slate-400">
                {ctaCard.description}
              </p>
            </div>

            <a 
              href={ctaCard.href} 
              className="group/btn relative z-10 flex items-center justify-center gap-2 rounded-xl bg-blue-600 py-4 text-center text-sm font-black text-white shadow-lg shadow-blue-900/40 transition-all hover:bg-blue-500 active:scale-95"
            >
              {ctaCard.buttonText}
              <ChevronRight size={18} className="transition-transform group-hover/btn:translate-x-1" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Modules;