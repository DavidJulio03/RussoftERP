import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

/**
 * CONFIGURACIÓN CENTRALIZADA
 * Mantenimiento simplificado para textos, rutas y valores numéricos.
 */
const HERO_CONFIG = {
  title: {
    accent: "ERP Colombiano",
    main: "Control total de tu empresa en",
    highlight: "una sola plataforma",
  },
  description: "Más de 30 años liderando la transformación digital. Facturación electrónica, contabilidad NIIF y gestión comercial integrada.",
  metrics: [
    { label: "Años Exp.", value: "30+" },
    { label: "Usuarios", value: "900+" },
    { label: "Empresas", value: "300+" }
  ],
  cta: {
    primary: { text: "Solicitar Cotización", href: "#contacto" },
    secondary: { text: "Ver Demo", href: "#demo" }
  },
  mockup: {
    version: "v2024.02.14",
    filename: "Russoft_Cloud_v4.exe",
    status: "Sincronizado con DIAN",
    graphData: [40, 70, 45, 90, 65, 80, 50, 95]
  }
};

/**
 * COMPONENTE: Hero
 * Sección principal de impacto con métricas y visualización de interfaz.
 */
const Hero = () => {
  const { title, description, metrics, cta, mockup } = HERO_CONFIG;

  return (
    <header className="relative overflow-hidden bg-[#0a192f] pb-20 pt-32 text-white lg:pb-32 lg:pt-48">
      
      {/* CAPA DE FONDO: Gradientes y Luces Radiales */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 via-[#0a192f] to-[#0a192f]"></div>
        <div className="absolute right-0 top-0 h-[600px] w-[600px] translate-x-1/4 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[120px]"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          
          {/* BLOQUE IZQUIERDO: TEXTOS Y ACCIONES */}
          <div className="space-y-8">
            {/* Badge Dinámico */}
            <div className="inline-flex items-center gap-2 rounded-md border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-blue-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500"></span>
              </span>
              {title.accent}
            </div>

            <h1 className="text-4xl font-black leading-tight tracking-tight lg:text-6xl">
              {title.main} <br/>
              <span className="text-blue-400">{title.highlight}</span>
            </h1>

            <p className="max-w-lg text-lg leading-relaxed text-slate-400">
              {description}
            </p>

            {/* Llamados a la Acción (CTA) */}
            <div className="flex flex-wrap gap-4">
              <a 
                href={cta.primary.href} 
                className="group flex items-center gap-2 rounded-xl bg-green-600 px-8 py-4 font-bold text-white shadow-lg shadow-green-900/20 transition-all hover:bg-green-500"
              >
                {cta.primary.text}
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a 
                href={cta.secondary.href} 
                className="rounded-xl border border-white/10 bg-white/5 px-8 py-4 font-bold text-white backdrop-blur-sm transition-all hover:bg-white/10"
              >
                {cta.secondary.text}
              </a>
            </div>

            {/* Métricas de Confianza */}
            <div className="flex gap-12 border-t border-white/10 pt-8">
              {metrics.map((m, i) => (
                <div key={i}>
                  <div className="mb-1 text-3xl font-bold text-white">{m.value}</div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500">{m.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* BLOQUE DERECHO: MOCKUP DE INTERFAZ */}
          <div className="relative hidden lg:block">
            {/* Glow de profundidad animado */}
            <div className="absolute -inset-4 animate-pulse rounded-full bg-blue-500/20 opacity-30 blur-3xl"></div>

            {/* Contenedor Principal de la Ventana */}
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0f172a] shadow-2xl backdrop-blur-sm">
              
              {/* Barra de Título (Estilo SO) */}
              <div className="flex items-center justify-between border-b border-white/10 bg-white/5 px-4 py-3">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full border border-red-500/40 bg-red-500/20"></div>
                  <div className="h-3 w-3 rounded-full border border-yellow-500/40 bg-yellow-500/20"></div>
                  <div className="h-3 w-3 rounded-full border border-green-500/40 bg-green-500/20"></div>
                </div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-slate-500">
                  {mockup.filename}
                </div>
                <div className="w-12"></div>
              </div>

              {/* Cuerpo de la Interfaz */}
              <div className="flex h-[320px]">
                {/* Sidebar */}
                <div className="flex w-16 flex-col gap-4 border-r border-white/5 bg-white/[0.02] p-3">
                  {[...Array(4)].map((_, i) => (
                    <div 
                      key={i} 
                      className={`h-8 w-full rounded-lg ${i === 0 ? 'border border-blue-500/40 bg-blue-600/20' : 'bg-white/5'}`}
                    ></div>
                  ))}
                </div>

                {/* Dashboard Area */}
                <div className="flex-1 space-y-6 p-6">
                  <div className="flex items-end justify-between">
                    <div className="space-y-2">
                      <div className="h-2 w-24 rounded bg-white/10"></div>
                      <div className="h-4 w-40 rounded bg-white/20"></div>
                    </div>
                    <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-500"></div>
                  </div>

                  {/* Cards de Datos */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-3 rounded-xl border border-white/10 bg-white/5 p-4">
                      <div className="h-2 w-12 rounded bg-green-500/40"></div>
                      <div className="h-5 w-20 rounded bg-white/20"></div>
                    </div>
                    <div className="space-y-3 rounded-xl border border-white/10 bg-white/5 p-4">
                      <div className="h-2 w-12 rounded bg-blue-500/40"></div>
                      <div className="h-5 w-20 rounded bg-white/20"></div>
                    </div>
                  </div>

                  {/* Visualización de Gráfica */}
                  <div className="space-y-4 pt-2">
                    <div className="flex h-20 items-end gap-2">
                      {mockup.graphData.map((h, i) => (
                        <div 
                          key={i} 
                          style={{ height: `${h}%` }} 
                          className={`flex-1 rounded-t-sm transition-all duration-1000 ${[3, 7].includes(i) ? 'bg-blue-500' : 'bg-white/10'}`}
                        ></div>
                      ))}
                    </div>
                    <div className="h-1 w-full overflow-hidden rounded-full bg-white/5">
                      <div className="h-full w-2/3 rounded-full bg-blue-500/50"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Barra de Estado (Footer) */}
              <div className="flex items-center justify-between border-t border-white/5 bg-blue-600/10 px-4 py-2">
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500"></div>
                  <span className="text-[9px] font-medium tracking-tight text-blue-300">
                    {mockup.status}
                  </span>
                </div>
                <div className="text-[9px] font-bold uppercase tracking-widest text-slate-500">
                  {mockup.version}
                </div>
              </div>
            </div>

            {/* Badge Flotante Extra */}
            <div className="absolute -bottom-6 -left-6 flex animate-bounce-slow items-center gap-4 rounded-2xl border border-white/10 bg-[#1e293b] p-4 shadow-2xl">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/20">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
              </div>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-tighter text-slate-400">Última Factura</div>
                <div className="text-sm font-bold text-white">$1,240,500.00</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Hero;