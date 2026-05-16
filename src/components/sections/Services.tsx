"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import { Search, ClipboardCheck, Users, Handshake } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const services = [
  {
    num: "01",
    category: "SELECCIÓN",
    title: "Búsqueda y Selección de Personal",
    desc: "Identificamos, evaluamos y presentamos los candidatos más adecuados para cada posición. Nos especializamos en perfiles para el sector portuario, petroquímico e industrial.",
    items: [
      "Operarios calificados",
      "Técnicos HSE",
      "Ingenieros especialistas",
      "Perfiles administrativos"
    ],
    icon: Search,
  },
  {
    num: "02",
    category: "PRESELECCIÓN",
    title: "Evaluación y Preselección",
    desc: "Realizamos entrevistas exhaustivas y verificación de antecedentes para asegurar que cada candidato cumpla con los requisitos técnicos y actitudinales.",
    items: [
      "Entrevistas por competencias",
      "Verificación de antecedentes",
      "Evaluaciones psicolaborales",
      "Informes de adecuación"
    ],
    icon: ClipboardCheck,
  },
  {
    num: "03",
    category: "CONSULTORÍA",
    title: "Consultoría en Capital Humano",
    desc: "Acompañamos a las organizaciones en el diseño y definición estratégica de perfiles, asegurando que el talento se alinee con los objetivos del negocio.",
    items: [
      "Diseño de estructura",
      "Descripción de puestos",
      "Estrategia de compensaciones",
      "Desarrollo organizacional"
    ],
    icon: Handshake,
  }
];

function ServiceCard({ service, index }: { service: any; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-40% 0px -40% 0px", once: false });

  return (
    <Reveal delay={0.3 + index * 0.1} width="100%" className="h-full">
      <div
        ref={ref}
        data-active={isInView}
        className={cn(
          "group h-full flex flex-col p-6 lg:p-8 rounded-3xl transition-all duration-500 bg-transparent border border-navy/15",
          // Hover for desktop
          "md:hover:border-navy md:hover:shadow-lg md:hover:-translate-y-1",
          // Scroll activation for mobile using data-active attribute
          "max-md:data-[active=true]:border-navy max-md:data-[active=true]:shadow-lg max-md:data-[active=true]:-translate-y-1"
        )}
      >
        {/* Header: Badge and Icon */}
        <div className="flex justify-between items-center mb-6">
          <div className="py-1 px-3 bg-[#F4F6F8] rounded-full transition-colors duration-500 border border-navy/10 md:group-hover:border-navy/30 max-md:group-data-[active=true]:border-navy/30">
            <span className="text-[11px] font-bold tracking-widest uppercase transition-colors duration-500 text-navy/60 md:group-hover:text-navy max-md:group-data-[active=true]:text-navy">
              {service.category}
            </span>
          </div>
          <div className="w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-500 border border-navy/10 md:group-hover:bg-navy md:group-hover:border-navy max-md:group-data-[active=true]:bg-navy max-md:group-data-[active=true]:border-navy">
            <service.icon className="w-4 h-4 transition-colors duration-500 text-navy md:group-hover:text-[#F4F6F8] max-md:group-data-[active=true]:text-[#F4F6F8]" />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl md:text-2xl font-bold text-navy mb-4 tracking-tight leading-tight transition-colors duration-500">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-navy/60 text-[15px] md:text-base leading-snug mb-6">
          {service.desc}
        </p>

        {/* Items List */}
        <ul className="space-y-3 mt-auto border-t border-navy/5 pt-5">
          {service.items.map((item: string, i: number) => (
            <li key={i} className="flex items-start gap-3 group/item cursor-pointer">
              <div className="w-1.5 h-1.5 rounded-full bg-navy mt-2 transition-all duration-300 md:group-hover/item:bg-orange md:group-hover/item:scale-150 shrink-0 max-md:group-data-[active=true]/item:bg-orange" />
              <span className="text-[14px] font-medium text-navy transition-colors duration-300 md:group-hover/item:text-orange">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}

export function Services() {
  return (
    <section id="servicios" className="py-16 md:py-24 bg-[#F4F6F8] relative overflow-hidden">
      {/* Technical Dot Pattern Background */}
      <div className="absolute inset-0 opacity-[0.1]" style={{ backgroundImage: 'radial-gradient(var(--color-azul) 0.5px, transparent 0.5px)', backgroundSize: '32px 32px' }} />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* New Centered Header Style */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Reveal delay={0.2} width="100%">
            <span className="block text-orange font-bold text-[10px] md:text-xs tracking-[0.2em] uppercase mb-0">
              COMO TE AYUDAMOS
            </span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-navy leading-tight tracking-tight">
              Nuestros servicios
            </h2>
          </Reveal>
        </div>

        {/* Premium Editorial Layout - 3 Pillars */}
        <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
