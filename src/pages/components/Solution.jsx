import React from 'react';
import { XCircle, CheckCircle2, ArrowRight, AlertTriangle, ShieldCheck } from 'lucide-react';

const Solucion = () => {
  // --- CONFIGURACIÓN DE CONTENIDO ---
  const config = {
    problem: {
      tag: "Estado Actual",
      title: "¿Tu empresa sufre de caos administrativo?",
      items: [
        { text: "Procesos manuales propensos a errores en Excel.", icon: <XCircle className="text-red-400 w-5 h-5" /> },
        { text: "Inventarios descuadrados y pérdidas desconocidas.", icon: <XCircle className="text-red-400 w-5 h-5" /> },
        { text: "Facturación desconectada de la contabilidad.", icon: <XCircle className="text-red-400 w-5 h-5" /> },
        { text: "Falta de reportes reales para tomar decisiones.", icon: <XCircle className="text-red-400 w-5 h-5" /> }
      ]
    },
    solution: {
      tag: "La Solución Russoft",
      title: "Control total y centralizado",
      features: [
        "Facturación Electrónica", "POS & Ventas", 
        "Inventarios Reales", "Contabilidad NIIF", 
        "Nómina", "Producción", 
        "Compras", "Cartera"
      ]
    }
  };

  return (
    <section id="solucion" className="py-24 bg-[#0a192f] overflow-hidden relative">
      {/* Decoración sutil de fondo para mantener coherencia con el Hero */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Columna: PROBLEMA (Contraste con tipografía clara y bordes suaves) */}
          <div className="relative p-8 lg:p-0">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold uppercase tracking-widest mb-6">
              <AlertTriangle size={14} />
              {config.problem.tag}
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-black text-white leading-tight mb-8">
              {config.problem.title}
            </h2>

            <ul className="space-y-5">
              {config.problem.items.map((item, idx) => (
                <li key={idx} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors group">
                  <div className="flex-shrink-0 transition-transform group-hover:scale-110">
                    {item.icon}
                  </div>
                  <span className="text-slate-300 font-medium">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna: SOLUCIÓN (Contraste alto: Card Blanca / "Clean Tech") */}
          <div className="relative">
            {/* Glow azul detrás de la card blanca */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-[2.5rem] blur opacity-20"></div>
            
            <div className="relative bg-white rounded-[2.5rem] p-8 lg:p-12 shadow-2xl overflow-hidden group">
              {/* Marca de agua / Icono de fondo decorativo */}
              <ShieldCheck className="absolute -bottom-10 -right-10 w-40 h-40 text-blue-50 opacity-[0.03] -rotate-12" />

              <div className="relative z-10">
                <span className="inline-block px-3 py-1 rounded-md bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest mb-4">
                  {config.solution.tag}
                </span>
                
                <h3 className="text-2xl lg:text-3xl font-extrabold text-slate-900 mb-8">
                  {config.solution.title}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {config.solution.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50 transition-colors group/item">
                      <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-200 group-hover/item:scale-110 transition-transform">
                        <CheckCircle2 className="text-white w-5 h-5" />
                      </div>
                      <span className="text-slate-700 font-bold text-sm tracking-tight">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-10">
                  <a 
                    href="#contacto" 
                    className="flex items-center justify-center gap-3 w-full py-4 bg-[#0a192f] text-white rounded-2xl font-bold hover:bg-blue-900 transition-all shadow-xl shadow-blue-900/20 group"
                  >
                    Empieza la transformación
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Solucion;