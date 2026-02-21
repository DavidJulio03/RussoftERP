import React from 'react';
import { ArrowRight, History, Sparkles } from 'lucide-react';

/**
 * CONFIGURACIÓN DE CONTENIDO: "SOBRE NOSOTROS"
 * Centraliza imágenes, textos y etiquetas de marca.
 */
const SOBRE_CONFIG = {
  header: {
    tag: "Desde 1996",
    title: {
      main: "Soluciones que ",
      highlight: "transforman",
      suffix: " empresas."
    }
  },
  content: {
    lead: "En Russoft, no solo programamos; diseñamos el motor tecnológico que impulsa el crecimiento de más de 1,000 compañías en Colombia.",
    body: "Nuestra historia es una de constante evolución y pasión por la disciplina. Hemos convertido la complejidad contable y administrativa en procesos simples, seguros y altamente rentables.",
    tags: ["Innovación", "Compromiso", "Ética"]
  },
  image: {
    url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80",
    alt: "Equipo Russoft trabajando en soluciones ERP"
  },
  cta: {
    text: "Conoce nuestra trayectoria",
    href: "/nuestra-historia"
  }
};

/**
 * SUBCOMPONENTE: HistoryCTA
 * Botón de navegación optimizado con feedback visual al hacer hover.
 */
const HistoryCTA = ({ href, text }) => (
  <a 
    href={href}
    className="group inline-flex w-full items-center gap-4 rounded-2xl bg-[#0a192f] p-1 pr-6 transition-all hover:bg-blue-700 sm:w-auto"
  >
    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white transition-transform group-hover:scale-95">
      <History size={22} />
    </div>
    <span className="text-sm font-bold tracking-tight text-white">
      {text}
    </span>
    <ArrowRight size={18} className="ml-auto text-blue-400 transition-transform group-hover:translate-x-1" />
  </a>
);

/**
 * COMPONENTE PRINCIPAL: Russoft
 */
const Russoft = () => {
  const { header, content, image, cta } = SOBRE_CONFIG;

  return (
    <section id="nosotros" className="relative overflow-hidden bg-white py-16 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-20">
          
          {/* BLOQUE DE IMAGEN: Prioridad visual con decoraciones */}
          <div className="order-2 w-full lg:order-1 lg:w-5/12">
            <div className="relative">
              {/* Elemento decorativo de fondo (placa rotada) */}
              <div className="absolute -inset-4 -rotate-2 rounded-[3rem] bg-blue-50" />
              
              <div className="relative h-[350px] overflow-hidden rounded-[2.5rem] shadow-2xl lg:h-[500px]">
                <img 
                  src={image.url} 
                  alt={image.alt} 
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* BLOQUE DE TEXTO: Narrativa de marca */}
          <div className="order-1 w-full space-y-6 lg:order-2 lg:w-7/12 lg:space-y-8">
            
            {/* Badge de Antigüedad */}
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-blue-600">
              <Sparkles size={12} /> {header.tag}
            </div>

            <h2 className="text-4xl font-black leading-[1.1] tracking-tighter text-[#0a192f] lg:text-6xl">
              {header.title.main} <br />
              <span className="text-blue-600">{header.title.highlight}</span>
              {header.title.suffix}
            </h2>

            <div className="space-y-4">
              <p className="text-lg font-medium leading-relaxed text-slate-600 lg:text-xl">
                {content.lead}
              </p>
              
              <p className="text-sm leading-relaxed text-slate-500 lg:text-base">
                {content.body}
              </p>
            </div>

            {/* Chips de Valores Corporativos */}
            <div className="flex flex-wrap gap-2 pt-2">
              {content.tags.map((tag) => (
                <span 
                  key={tag} 
                  className="rounded-md bg-slate-100 px-3 py-1 text-[10px] font-bold uppercase text-slate-500"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Call to Action Final */}
            <div className="pt-6">
              <HistoryCTA href={cta.href} text={cta.text} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Russoft;