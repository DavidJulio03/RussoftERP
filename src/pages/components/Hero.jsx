import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const Hero = () => {
  // --- CONFIGURACIÓN CENTRALIZADA ---
  const heroConfig = {
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
    image: {
      placeholder: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
      caption: "Dashboard en tiempo real"
    }
  };

  return (
    <header className="relative bg-[#0a192f] text-white pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Refinado: Reemplazamos la imagen ruidosa por un gradiente profundo y sutil radial */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 via-[#0a192f] to-[#0a192f]"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Lado Izquierdo: Textos */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              {heroConfig.title.accent}
            </div>

            <h1 className="text-4xl lg:text-6xl font-black leading-tight tracking-tight">
              {heroConfig.title.main} <br/>
              <span className="text-blue-400">{heroConfig.title.highlight}</span>
            </h1>

            <p className="text-lg text-slate-400 max-w-lg leading-relaxed">
              {heroConfig.description}
            </p>

            {/* Acciones con mejor contraste */}
            <div className="flex flex-wrap gap-4">
              <a href={heroConfig.cta.primary.href} className="bg-green-600 hover:bg-green-500 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-green-900/20 flex items-center gap-2 group">
                {heroConfig.cta.primary.text}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href={heroConfig.cta.secondary.href} className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-4 rounded-xl font-bold transition-all backdrop-blur-sm">
                {heroConfig.cta.secondary.text}
              </a>
            </div>

            {/* Métricas: Ahora más compactas y elegantes */}
            <div className="flex gap-12 pt-8 border-t border-white/10">
              {heroConfig.metrics.map((m, i) => (
                <div key={i}>
                  <div className="text-3xl font-bold text-white mb-1">{m.value}</div>
                  <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">{m.label}</div>
                </div>
              ))}
            </div>
          </div>


          {/* Lado Derecho: Mockup de Interfaz Dinámica */}
            <div className="relative hidden lg:block">
            {/* Glow de fondo para dar profundidad */}
            <div className="absolute -inset-4 bg-blue-500/20 rounded-full blur-3xl opacity-30 animate-pulse"></div>

            <div className="relative bg-[#0f172a] border border-white/10 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-sm">
                
                {/* Barra Superior de la Ventana (Mac Style) */}
                <div className="bg-white/5 border-b border-white/10 px-4 py-3 flex items-center justify-between">
                <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/40"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/40"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/40"></div>
                </div>
                <div className="text-[10px] text-slate-500 font-mono tracking-widest uppercase">Russoft_Cloud_v4.exe</div>
                <div className="w-12"></div>
                </div>

                <div className="flex h-[320px]">
                {/* Mini Sidebar Lateral */}
                <div className="w-16 border-r border-white/5 bg-white/[0.02] p-3 flex flex-col gap-4">
                    {[1, 2, 3, 4].map((i) => (
                    <div key={i} className={`h-8 w-full rounded-lg ${i === 1 ? 'bg-blue-600/20 border border-blue-500/40' : 'bg-white/5'}`}></div>
                    ))}
                </div>

                {/* Contenido Principal del Mockup */}
                <div className="flex-1 p-6 space-y-6">
                    {/* Header del Mockup */}
                    <div className="flex justify-between items-end">
                    <div className="space-y-2">
                        <div className="h-2 w-24 bg-white/10 rounded"></div>
                        <div className="h-4 w-40 bg-white/20 rounded"></div>
                    </div>
                    <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-500"></div>
                    </div>

                    {/* Grid de "Tarjetas" de datos */}
                    <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/5 border border-white/10 p-4 rounded-xl space-y-3">
                        <div className="h-2 w-12 bg-green-500/40 rounded"></div>
                        <div className="h-5 w-20 bg-white/20 rounded"></div>
                    </div>
                    <div className="bg-white/5 border border-white/10 p-4 rounded-xl space-y-3">
                        <div className="h-2 w-12 bg-blue-500/40 rounded"></div>
                        <div className="h-5 w-20 bg-white/20 rounded"></div>
                    </div>
                    </div>

                    {/* Simulación de Gráfica de Barras */}
                    <div className="pt-2 space-y-4">
                    <div className="flex items-end gap-2 h-20">
                        {[40, 70, 45, 90, 65, 80, 50, 95].map((h, i) => (
                        <div 
                            key={i} 
                            style={{ height: `${h}%` }} 
                            className={`flex-1 rounded-t-sm transition-all duration-1000 ${i === 3 || i === 7 ? 'bg-blue-500' : 'bg-white/10'}`}
                        ></div>
                        ))}
                    </div>
                    <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full w-2/3 bg-blue-500/50 rounded-full"></div>
                    </div>
                    </div>
                </div>
                </div>

                {/* Footer del Mockup con status dinámico */}
                <div className="bg-blue-600/10 px-4 py-2 border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-[9px] text-blue-300 font-medium tracking-tight">Sincronizado con DIAN</span>
                </div>
                <div className="text-[9px] text-slate-500 font-bold uppercase tracking-widest">v2024.02.14</div>
                </div>
            </div>

            {/* Tarjeta flotante extra para dar profundidad (Badge de Facturación) */}
            <div className="absolute -bottom-6 -left-6 bg-[#1e293b] border border-white/10 p-4 rounded-2xl shadow-2xl flex items-center gap-4 animate-bounce-slow">
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                <div className="w-5 h-5 text-green-500 font-bold">✓</div>
                </div>
                <div>
                <div className="text-[10px] text-slate-400 uppercase font-bold tracking-tighter">Última Factura</div>
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