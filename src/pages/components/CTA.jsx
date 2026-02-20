import React from 'react';
import { MessageCircleMore, Mail, Send, Building2, User, Briefcase, ArrowRight, ChevronDown } from 'lucide-react';

// --- SUBCOMPONENTE: INPUT ESTILIZADO ---
const FormInput = ({ label, icon: Icon, ...props }) => (
  <div className="space-y-1.5">
    <label className="text-[10px] md:text-xs font-black uppercase tracking-widest text-slate-500 ml-1">
      {label}
    </label>
    <div className="relative group">
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors">
        <Icon size={18} />
      </div>
      <input 
        {...props}
        className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl md:rounded-2xl focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-600/5 outline-none transition-all text-slate-700 font-medium placeholder:text-slate-400 text-sm md:text-base"
      />
    </div>
  </div>
);

const ContactoRedesign = () => {
  const sectors = ["Comercio", "Servicios", "Producción / Fábrica", "Construcción", "Hotelería"];

  return (
    <section id="contacto" className="py-12 md:py-24 bg-[#0a192f] relative overflow-hidden">
      {/* Decoración de fondo optimizada */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-600 rounded-full blur-[100px] md:blur-[120px]" />
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-emerald-600 rounded-full blur-[100px] md:blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Columna Izquierda: Info de Marca */}
          <div className="lg:col-span-5 space-y-8 md:space-y-10">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-black uppercase tracking-[0.2em] mb-4 md:mb-6 border border-blue-500/20">
                <MessageCircleMore size={12} /> Canales Directos
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tighter mb-4 md:mb-6">
                Lleve su empresa al <span className="text-blue-500 italic block sm:inline">siguiente nivel</span> tecnológico.
              </h2>
              <p className="text-slate-400 text-base md:text-lg font-medium max-w-xl mx-auto lg:mx-0">
                Un asesor especializado analizará sus necesidades para diseñar una propuesta que maximice su rentabilidad.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              <a href="tel:+573001234567" className="flex items-center gap-4 p-3 md:p-4 bg-white/5 border border-white/10 rounded-2xl md:rounded-[2rem] hover:bg-white/10 transition-all group">
                <div className="bg-blue-600 p-3 md:p-4 rounded-xl md:rounded-2xl text-white shadow-lg shadow-blue-900/40 group-hover:scale-105 transition-transform">
                  <MessageCircleMore size={20} className="md:w-6 md:h-6" />
                </div>
                <div className="overflow-hidden">
                  <p className="text-[9px] md:text-[10px] font-black text-blue-400 uppercase tracking-widest truncate">WhatsApp</p>
                  <p className="text-lg md:text-xl font-bold text-white truncate">+57 300 123 4567</p>
                </div>
              </a>

              <a href="mailto:ventas@russoft.com" className="flex items-center gap-4 p-3 md:p-4 bg-white/5 border border-white/10 rounded-2xl md:rounded-[2rem] hover:bg-white/10 transition-all group">
                <div className="bg-slate-800 p-3 md:p-4 rounded-xl md:rounded-2xl text-white group-hover:scale-105 transition-transform">
                  <Mail size={20} className="md:w-6 md:h-6" />
                </div>
                <div className="overflow-hidden">
                  <p className="text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest truncate">Correo Oficial</p>
                  <p className="text-lg md:text-xl font-bold text-white truncate">ventas@russoft.com</p>
                </div>
              </a>
            </div>
          </div>

          {/* Columna Derecha: Formulario */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-[2rem] md:rounded-[3rem] p-6 md:p-10 lg:p-12 shadow-2xl relative">
              {/* Icono flotante - Oculto en móviles muy pequeños para no estorbar */}
              <div className="absolute -top-4 -right-4 w-14 h-14 md:w-20 md:h-20 bg-emerald-500 rounded-2xl md:rounded-3xl flex items-center justify-center text-white shadow-xl rotate-12 hidden xs:flex">
                <Send size={24} className="md:w-8 md:h-8" />
              </div>

              <div className="mb-8 md:mb-10 text-center sm:text-left">
                <h3 className="text-2xl md:text-3xl font-black text-[#0a192f] tracking-tighter mb-2">Solicitar Asesoría</h3>
                <p className="text-slate-500 font-medium text-sm md:text-base">Respuesta garantizada en menos de 24 horas.</p>
              </div>

              <form className="space-y-4 md:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                  <FormInput label="Nombre Completo" icon={User} placeholder="Ej. Juan Pérez" type="text" />
                  <FormInput label="Empresa" icon={Building2} placeholder="Nombre de su compañía" type="text" />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                  <FormInput label="WhatsApp / Celular" icon={MessageCircleMore} placeholder="+57 300..." type="tel" />
                  <div className="space-y-1.5">
                    <label className="text-[10px] md:text-xs font-black uppercase tracking-widest text-slate-500 ml-1">Sector</label>
                    <div className="relative group">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none group-focus-within:text-blue-600 transition-colors">
                        <Briefcase size={18} />
                      </div>
                      <select className="w-full pl-11 pr-10 py-3 bg-slate-50 border border-slate-200 rounded-xl md:rounded-2xl focus:bg-white focus:border-blue-600 outline-none appearance-none text-slate-700 font-medium text-sm md:text-base transition-all">
                        <option>Seleccionar sector...</option>
                        {sectors.map((s, i) => <option key={i} value={s}>{s}</option>)}
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                        <ChevronDown size={18} />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] md:text-xs font-black uppercase tracking-widest text-slate-500 ml-1">¿Cómo podemos ayudarle?</label>
                  <textarea 
                    rows={3} 
                    placeholder="Cuéntenos sobre su proyecto..."
                    className="w-full p-4 md:p-6 bg-slate-50 border border-slate-200 rounded-xl md:rounded-[2rem] focus:bg-white focus:border-blue-600 outline-none transition-all text-slate-700 font-medium text-sm md:text-base resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-[#0a192f] hover:bg-blue-700 text-white font-black py-4 md:py-5 rounded-xl md:rounded-2xl transition-all shadow-xl flex items-center justify-center gap-3 group active:scale-[0.98]"
                >
                  <span className="uppercase tracking-widest text-xs md:text-sm">Enviar Solicitud</span>
                  <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactoRedesign;