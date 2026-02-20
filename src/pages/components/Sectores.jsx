import React, { useState, useRef } from 'react';
import { LayoutGrid, ChevronRight, Briefcase } from 'lucide-react';
import SectorDetail from './SectorDetail';

const Sectores = () => {
  const [activeSector, setActiveSector] = useState(null);
  const detailRef = useRef(null);

  const config = {
  header: {
    tag: "Experticia Sectorial",
    title: "Soluciones a tu Medida",
  },
  sectors: [
    {
      id: "notarias",
      name: "Notarías (Biometría)",
      summary: "Seguridad y agilidad en los trámites notariales mediante identificación biométrica.",
      description: "Este módulo permite el registro y validación de huellas, firma y fotografía en tiempo real, integrándose directamente con los servicios solicitados por el usuario para una autenticación irrefutable.",
      goals: [
        "Eliminar la suplantación de identidad mediante huella digital.",
        "Agilizar el reconocimiento de características físicas intransferibles.",
        "Digitalizar el flujo de autenticación de contratos y documentos."
      ],
      valueProp: "Buscamos un cambio de cultura donde el notario y el usuario sientan tranquilidad total en cada proceso legal."
    },
    {
      id: "salud",
      name: "Sector Salud (RIPS)",
      summary: "Gestión integral de prestación de servicios de salud y reportes normativos.",
      description: "Centraliza la generación de RIPS, historias clínicas y facturación de servicios médicos bajo la normatividad vigente del Ministerio de Salud.",
      goals: [
        "Automatización completa en la generación de archivos RIPS.",
        "Control detallado de citas y agendas médicas.",
        "Historias clínicas digitales con altos estándares de seguridad."
      ],
      valueProp: "Reducción del 40% en tiempos de auditoría de cuentas médicas."
    },
    {
      id: "supermercados",
      name: "Supermercados y Retail",
      summary: "Control de inventarios masivos y puntos de venta de alta velocidad.",
      description: "Optimiza la rotación de productos mediante un sistema POS ágil conectado en tiempo real con la bodega y facturación electrónica.",
      goals: [
        "Gestión de múltiples bodegas y transferencias entre sedes.",
        "Control de fechas de vencimiento y lotes de productos.",
        "Integración con balanzas y lectores de códigos de barras."
      ],
      valueProp: "Visibilidad total del stock para evitar quiebres de inventario en horas pico."
    },
    {
      id: "restaurantes",
      name: "Gastronomía y Bares",
      summary: "Administración de mesas, comandas y costos de recetas (Food Cost).",
      description: "Solución integral para el servicio a la mesa o mostrador, permitiendo el control preciso de insumos por plato preparado.",
      goals: [
        "Liquidación automática de propinas y cuentas divididas.",
        "Control de inventario por ingredientes y sub-recetas.",
        "Comandero digital para comunicación directa con cocina."
      ],
      valueProp: "Control exacto de márgenes de utilidad por cada plato vendido."
    },
    {
      id: "ferreterias",
      name: "Ferreterías y Construcción",
      summary: "Gestión de miles de referencias y ventas por unidades de medida variables.",
      description: "Manejo eficiente de productos con diversas medidas (metros, kilos, unidades) y control de créditos a maestros de obra.",
      goals: [
        "Búsqueda avanzada por referencias técnicas y marcas.",
        "Control de cartera y cupos de crédito parametrizables.",
        "Gestión de remisiones y entregas parciales de mercancía."
      ],
      valueProp: "Facilita la venta de productos complejos con un motor de búsqueda ultra rápido."
    },
    {
      id: "farmacias",
      name: "Droguerías y Farmacias",
      summary: "Control estricto de medicamentos, lotes y normatividad sanitaria.",
      description: "Cumplimiento de las exigencias de entes reguladores para el manejo de medicamentos de control especial y trazabilidad.",
      goals: [
        "Trazabilidad completa por número de lote y registro INVIMA.",
        "Alertas automáticas de próximos vencimientos.",
        "Manejo de convenios con EPS y aseguradoras."
      ],
      valueProp: "Seguridad legal y operativa en el despacho de productos farmacéuticos."
    },
    {
      id: "estaciones",
      name: "Estaciones de Gasolina",
      summary: "Integración con surtidores y control de inventario de combustibles.",
      description: "Sistema especializado en el flujo de caja diario por islas, turnos de isleros y lectura de galonaje.",
      goals: [
        "Sincronización con protocolos de comunicación de surtidores.",
        "Control de inventario de combustibles (Líquidos y GNV).",
        "Facturación automática por placa de vehículo."
      ],
      valueProp: "Cuadre de caja exacto por turno, eliminando fugas de dinero."
    },
    {
      id: "manufactura",
      name: "Industria y Manufactura",
      summary: "Planeación de la producción y costeo de materia prima.",
      description: "Transforma materias primas en productos terminados con un seguimiento detallado de costos indirectos y mano de obra.",
      goals: [
        "Explosión de materiales (BOM) y órdenes de producción.",
        "Cálculo automático de costos de producción reales vs estimados.",
        "Control de mermas y desperdicios de material."
      ],
      valueProp: "Optimización de la cadena de producción para maximizar la rentabilidad fabril."
    },
    {
      id: "propiedad",
      name: "Propiedad Horizontal",
      summary: "Administración eficiente de copropiedades y recaudo de cartera.",
      description: "Gestión de presupuestos, cuotas de administración, fondos de reserva e integración con pasarelas de pago.",
      goals: [
        "Generación masiva de cuentas de cobro vía email.",
        "Control de residentes, parqueaderos y áreas comunes.",
        "Contabilidad NIIF específica para copropiedades."
      ],
      valueProp: "Transparencia financiera y reducción de la morosidad en el recaudo."
    },
    {
      id: "cooperativas",
      name: "Cooperativas y Fondos",
      summary: "Gestión de aportes, créditos y servicios para asociados.",
      description: "Estructura contable sólida para el manejo de ahorros y colocación de créditos con diferentes líneas de financiación.",
      goals: [
        "Liquidación automática de intereses y extractos mensuales.",
        "Gestión de cupos de crédito basados en aportes.",
        "Cumplimiento de reportes a la SuperSolidaria."
      ],
      valueProp: "Fomento de la confianza del asociado mediante una gestión financiera impecable."
    }
  ]
};

  const handleSectorClick = (sector) => {
    setActiveSector(sector);
    // En móvil, damos un respiro antes del scroll para que la animación de la card se vea
    setTimeout(() => {
      const offset = 80; // Compensación para el Navbar fijo
      const elementPosition = detailRef.current?.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }, 300);
  };

  return (
    <section id="sectores" className="py-16 lg:py-24 bg-[#0a192f] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-10 lg:mb-16">
          <span className="text-blue-400 font-bold text-[10px] lg:text-xs uppercase tracking-[0.3em] block mb-3">
            {config.header.tag}
          </span>
          <h2 className="text-3xl lg:text-5xl font-black text-white tracking-tight">
            {config.header.title}
          </h2>
        </div>

        {/* Grid: 2 columnas en móviles pequeños para evitar scroll infinito */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 mb-12">
          {config.sectors.map((sector) => (
            <button
              key={sector.id}
              onClick={() => handleSectorClick(sector)}
              className={`group flex flex-col items-start p-4 lg:p-6 rounded-xl lg:rounded-2xl border transition-all duration-300 text-left active:scale-95 ${
                activeSector?.id === sector.id 
                ? 'bg-blue-600 border-blue-400 shadow-xl' 
                : 'bg-white/5 border-white/10'
              }`}
            >
              <Briefcase className={`mb-3 w-5 h-5 lg:w-6 lg:h-6 ${activeSector?.id === sector.id ? 'text-white' : 'text-blue-400'}`} />
              <span className={`text-xs lg:text-base font-bold leading-tight ${activeSector?.id === sector.id ? 'text-white' : 'text-slate-200'}`}>
                {sector.name}
              </span>
            </button>
          ))}
        </div>

        <div ref={detailRef} className="scroll-mt-24">
          {activeSector && (
            <SectorDetail 
              data={activeSector} 
              onClose={() => setActiveSector(null)} 
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Sectores;