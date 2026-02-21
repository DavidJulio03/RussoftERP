import React from 'react';
import { XCircle, CheckCircle2, ArrowRight, AlertTriangle, ShieldCheck } from 'lucide-react';

/**
 * CONFIGURACIÓN DE CONTENIDO
 * Permite editar el copywriting del problema y la solución en un solo lugar.
 */
const SOLUCION_CONFIG = {
  problem: {
    tag: "Estado Actual",
    title: "¿Tu empresa sufre de caos administrativo?",
    items: [
      { text: "Procesos manuales propensos a errores en Excel." },
      { text: "Inventarios descuadrados y pérdidas desconocidas." },
      { text: "Facturación desconectada de la contabilidad." },
      { text: "Falta de reportes reales para tomar decisiones." }
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

/**
 * COMPONENTE: Solution
 * Presenta el contraste entre los dolores del cliente y los beneficios del ERP.
 */
const Solution = () => {
  const { problem, solution } = SOLUCION_CONFIG;

  return (
    <section id="solucion" className="relative overflow-hidden bg-[#0a192f] py-24">
      {/* Línea decorativa superior para coherencia visual */}
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
      
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-24">
          
          {/* COLUMNA IZQUIERDA: EL PROBLEMA (Lado Oscuro) */}
          <div className="relative">
            <div className="mb-6 inline-flex items-center gap-2 rounded-md border border-red-500/20 bg-red-500/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-red-400">
              <AlertTriangle size={14} />
              {problem.tag}
            </div>
            
            <h2 className="mb-8 text-3xl font-black leading-tight text-white lg:text-4xl">
              {problem.title}
            </h2>

            <ul className="space-y-5">
              {problem.items.map((item, idx) => (
                <li 
                  key={idx} 
                  className="group flex items-center gap-4 rounded-xl border border-white/5 bg-white/5 p-4 transition-colors hover:border-white/10"
                >
                  <div className="flex-shrink-0 transition-transform group-hover:scale-110">
                    <XCircle className="h-5 w-5 text-red-400" />
                  </div>
                  <span className="font-medium text-slate-300">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMNA DERECHA: LA SOLUCIÓN (Lado Claro / Clean Tech) */}
          <div className="relative">
            {/* Resplandor perimetral para destacar la "salvación" */}
            <div className="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-r from-blue-600 to-cyan-500 opacity-20 blur"></div>
            
            <div className="relative overflow-hidden rounded-[2.5rem] bg-white p-8 shadow-2xl lg:p-12">
              {/* Marca de agua decorativa */}
              <ShieldCheck className="absolute -bottom-10 -right-10 h-40 w-40 -rotate-12 text-blue-50 opacity-10" />

              <div className="relative z-10">
                <span className="mb-4 inline-block rounded-md bg-blue-100 px-3 py-1 text-xs font-bold uppercase tracking-widest text-blue-700">
                  {solution.tag}
                </span>
                
                <h3 className="mb-8 text-2xl font-extrabold text-slate-900 lg:text-3xl">
                  {solution.title}
                </h3>

                {/* Grid de funcionalidades de la solución */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {solution.features.map((feature, idx) => (
                    <div 
                      key={idx} 
                      className="group/item flex items-center gap-3 rounded-xl p-3 transition-colors hover:bg-blue-50"
                    >
                      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-blue-600 shadow-lg shadow-blue-200 transition-transform group-hover/item:scale-110">
                        <CheckCircle2 className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-sm font-bold tracking-tight text-slate-700">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-10">
                  <a 
                    href="#contacto" 
                    className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-[#0a192f] py-4 font-bold text-white shadow-xl shadow-blue-900/20 transition-all hover:bg-blue-900"
                  >
                    Empieza la transformación
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
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

export default Solution;