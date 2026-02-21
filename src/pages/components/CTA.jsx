import React from 'react';
import { 
  MessageCircleMore, 
  Mail, 
  Send, 
  Building2, 
  User, 
  Briefcase, 
  ArrowRight, 
  ChevronDown 
} from 'lucide-react';

/**
 * CONFIGURACIÓN INTEGRAL DEL COMPONENTE
 * Centraliza textos, enlaces y opciones para facilitar el mantenimiento.
 */
const CONTACT_CONFIG = {
  info: {
    badge: "Canales Directos",
    title: {
      main: "Lleve su empresa al ",
      highlight: "siguiente nivel",
      suffix: " tecnológico."
    },
    description: "Un asesor especializado analizará sus necesidades para diseñar una propuesta que maximice su rentabilidad.",
  },
  channels: [
    {
      label: "WhatsApp",
      value: "+57 300 123 4567",
      href: "tel:+573001234567",
      icon: MessageCircleMore,
      color: "bg-blue-600",
      textColor: "text-blue-400"
    },
    {
      label: "Correo Oficial",
      value: "ventas@russoft.com",
      href: "mailto:ventas@russoft.com",
      icon: Mail,
      color: "bg-slate-800",
      textColor: "text-slate-400"
    }
  ],
  form: {
    title: "Solicitar Asesoría",
    subtitle: "Respuesta garantizada en menos de 24 horas.",
    buttonText: "Enviar Solicitud",
    sectors: ["Comercio", "Servicios", "Producción / Fábrica", "Construcción", "Hotelería"]
  }
};

/**
 * SUBCOMPONENTE: FormInput
 * Renderiza un campo de entrada con etiqueta e icono consistente.
 */
const FormInput = ({ label, icon: Icon, ...props }) => (
  <div className="space-y-1.5">
    <label className="ml-1 text-[10px] font-black uppercase tracking-widest text-slate-500 md:text-xs">
      {label}
    </label>
    <div className="group relative">
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-blue-600">
        <Icon size={18} />
      </div>
      <input 
        {...props}
        className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-sm font-medium text-slate-700 outline-none transition-all placeholder:text-slate-400 focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-600/5 md:rounded-2xl md:text-base"
      />
    </div>
  </div>
);

/**
 * COMPONENTE PRINCIPAL: CTA
 */
const CTA = () => {
  const { info, channels, form } = CONTACT_CONFIG;

  return (
    <section id="contacto" className="relative overflow-hidden bg-[#0a192f] py-12 md:py-24">
      
      {/* CAPA DE DECORACIÓN (Glow Effects) */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-full opacity-20">
        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-blue-600 blur-[100px] md:blur-[120px]" />
        <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-emerald-600 blur-[100px] md:blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-16">
          
          {/* COLUMNA IZQUIERDA: INFORMACIÓN DE MARCA */}
          <div className="space-y-8 md:space-y-10 lg:col-span-5">
            <div className="text-center lg:text-left">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-blue-400 md:mb-6">
                <MessageCircleMore size={12} /> {info.badge}
              </div>
              <h2 className="mb-4 text-3xl font-black leading-tight tracking-tighter text-white md:mb-6 md:text-4xl lg:text-5xl">
                {info.title.main} 
                <span className="block italic text-blue-500 sm:inline">{info.title.highlight}</span>
                {info.title.suffix}
              </h2>
              <p className="mx-auto max-w-xl text-base font-medium text-slate-400 lg:mx-0 md:text-lg">
                {info.description}
              </p>
            </div>

            {/* BOTONES DE CONTACTO DIRECTO */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {channels.map((channel, idx) => (
                <a 
                  key={idx}
                  href={channel.href} 
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-3 transition-all hover:bg-white/10 md:rounded-[2rem] md:p-4"
                >
                  <div className={`${channel.color} rounded-xl p-3 text-white shadow-lg transition-transform group-hover:scale-105 md:rounded-2xl md:p-4 shadow-blue-900/40`}>
                    <channel.icon size={20} className="md:h-6 md:w-6" />
                  </div>
                  <div className="overflow-hidden">
                    <p className={`text-[9px] font-black uppercase tracking-widest truncate ${channel.textColor} md:text-[10px]`}>
                      {channel.label}
                    </p>
                    <p className="truncate text-lg font-bold text-white md:text-xl">
                      {channel.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* COLUMNA DERECHA: FORMULARIO */}
          <div className="lg:col-span-7">
            <div className="relative rounded-[2rem] bg-white p-6 shadow-2xl md:rounded-[3rem] md:p-10 lg:p-12">
              
              {/* Icono flotante decorativo */}
              <div className="absolute -right-4 -top-4 hidden h-14 w-14 rotate-12 items-center justify-center rounded-2xl bg-emerald-500 text-white shadow-xl xs:flex md:h-20 md:w-20 md:rounded-3xl">
                <Send size={24} className="md:h-8 md:w-8" />
              </div>

              <div className="mb-8 text-center sm:text-left md:mb-10">
                <h3 className="mb-2 text-2xl font-black tracking-tighter text-[#0a192f] md:text-3xl">
                  {form.title}
                </h3>
                <p className="text-sm font-medium text-slate-500 md:text-base">
                  {form.subtitle}
                </p>
              </div>

              <form className="space-y-4 md:space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
                  <FormInput label="Nombre Completo" icon={User} placeholder="Ej. Juan Pérez" type="text" />
                  <FormInput label="Empresa" icon={Building2} placeholder="Nombre de su compañía" type="text" />
                </div>
                
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
                  <FormInput label="WhatsApp / Celular" icon={MessageCircleMore} placeholder="+57 300..." type="tel" />
                  
                  {/* Selector de Sector */}
                  <div className="space-y-1.5">
                    <label className="ml-1 text-[10px] font-black uppercase tracking-widest text-slate-500 md:text-xs">
                      Sector
                    </label>
                    <div className="group relative">
                      <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-blue-600">
                        <Briefcase size={18} />
                      </div>
                      <select className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-10 text-sm font-medium text-slate-700 outline-none transition-all focus:border-blue-600 focus:bg-white md:rounded-2xl md:text-base">
                        <option>Seleccionar sector...</option>
                        {form.sectors.map((s, i) => <option key={i} value={s}>{s}</option>)}
                      </select>
                      <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
                        <ChevronDown size={18} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Textarea de Mensaje */}
                <div className="space-y-1.5">
                  <label className="ml-1 text-[10px] font-black uppercase tracking-widest text-slate-500 md:text-xs">
                    ¿Cómo podemos ayudarle?
                  </label>
                  <textarea 
                    rows={3} 
                    placeholder="Cuéntenos sobre su proyecto..."
                    className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm font-medium text-slate-700 outline-none transition-all focus:border-blue-600 focus:bg-white md:rounded-[2rem] md:p-6 md:text-base"
                  />
                </div>

                {/* Botón de Envío */}
                <button 
                  type="submit" 
                  className="group flex w-full items-center justify-center gap-3 rounded-xl bg-[#0a192f] py-4 font-black text-white shadow-xl transition-all hover:bg-blue-700 active:scale-[0.98] md:rounded-2xl md:py-5"
                >
                  <span className="text-xs uppercase tracking-widest md:text-sm">
                    {form.buttonText}
                  </span>
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-2" />
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CTA;