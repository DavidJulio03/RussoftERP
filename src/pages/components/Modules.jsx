import React from 'react';
import { 
  ShoppingCart, CheckCircle, Calculator, 
  Factory, Users, ChevronRight, Sparkles 
} from 'lucide-react';

const Modulos = () => {
  const modulesConfig = {
    header: {
      tag: "Capacidades del Sistema",
      title: "Módulos Integrales",
      subtitle: "Una infraestructura robusta diseñada para centralizar cada rincón de tu operación empresarial."
    },
    modules: [
      {
        title: "Gestión Comercial",
        icon: <ShoppingCart className="w-6 h-6" />,
        features: ["Facturación Electrónica", "POS Multiformas de pago", "Cotizaciones a Factura", "Control de Cartera"]
      },
      {
        title: "Inventarios",
        icon: <CheckCircle className="w-6 h-6" />,
        features: ["Control por bodega", "Alertas stock mín/máx", "Multimedidas", "Bloqueo stocks negativos"]
      },
      {
        title: "Finanzas y Contabilidad",
        icon: <Calculator className="w-6 h-6" />,
        features: ["Contabilidad NIIF", "Estados Financieros Auto", "Conciliación Bancaria", "Medios Magnéticos"]
      },
      {
        title: "Producción",
        icon: <Factory className="w-6 h-6" />,
        features: ["Órdenes de producción", "Recetas y Costos", "Simulación", "Control de materia prima"]
      },
      {
        title: "Nómina",
        icon: <Users className="w-6 h-6" />,
        features: ["Liquidación automática", "Archivos planos bancos", "Seguridad social", "Portal de empleados"]
      }
    ]
  };

  return (
    <section id="modulos" className="py-20 lg:py-32 bg-slate-50 relative overflow-hidden">
      {/* Decoración de fondo: Círculo de luz sutil */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/10 text-blue-600 text-[10px] font-black uppercase tracking-[0.2em] mb-4">
            <Sparkles size={12} />
            {modulesConfig.header.tag}
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-[#0a192f] mb-6 tracking-tighter">
            {modulesConfig.header.title}
          </h2>
          <p className="text-base lg:text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto font-medium">
            {modulesConfig.header.subtitle}
          </p>
        </div>

        {/* Grid adaptable */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {modulesConfig.modules.map((mod, index) => (
            <div 
              key={index} 
              className="group relative bg-white border border-slate-200/60 p-6 lg:p-10 rounded-[2rem] transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(10,25,47,0.1)] hover:-translate-y-2"
            >
              {/* Icono con degradado dinámico */}
              <div className="mb-8 inline-flex items-center justify-center w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-slate-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500border border-slate-100">
                {mod.icon}
              </div>

              <h3 className="text-xl lg:text-2xl font-black text-[#0a192f] mb-6 group-hover:text-blue-600 transition-colors">
                {mod.title}
              </h3>

              <ul className="space-y-4">
                {mod.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-500 group-hover:text-slate-700 transition-colors">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.6)]"></div>
                    <span className="text-sm font-bold tracking-tight leading-tight">{feat}</span>
                  </li>
                ))}
              </ul>

              {/* Footer de card refinado */}
              <div className="mt-10 pt-6 border-t border-slate-50 flex items-center justify-between">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest group-hover:text-blue-600 transition-colors">Especificaciones</span>
                <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                  <ChevronRight size={16} className="text-slate-300 group-hover:text-blue-600" />
                </div>
              </div>
            </div>
          ))}

          {/* Card de CTA con contraste invertido mejorado */}
          <div className="relative overflow-hidden bg-[#0a192f] p-8 lg:p-10 rounded-[2rem] flex flex-col justify-between group min-h-[350px]">
            {/* Círculos decorativos en el CTA */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl"></div>
            
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-500/40 flex items-center justify-center mb-6">
                <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
              </div>
              <h3 className="text-2xl font-black text-white mb-4">¿Necesitas un módulo personalizado?</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-8">
                Diseñamos integraciones a la medida de los flujos únicos de tu empresa.
              </p>
            </div>

            <a 
              href="#contacto" 
              className="relative z-10 w-full py-4 bg-blue-600 text-white rounded-xl font-black text-sm text-center hover:bg-blue-500 transition-all shadow-lg shadow-blue-900/40 active:scale-95 flex items-center justify-center gap-2 group/btn"
            >
              Hablar con un experto
              <ChevronRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Modulos;