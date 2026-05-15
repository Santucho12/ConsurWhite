"use client";

import { motion } from "framer-motion";
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

export function Services() {
  return (
    <section id="servicios" className="py-16 md:py-24 bg-[#F4F6F8] relative overflow-hidden">
      {/* Technical Dot Pattern Background */}
      <div className="absolute inset-0 opacity-[0.1]" style={{ backgroundImage: 'radial-gradient(var(--color-azul) 0.5px, transparent 0.5px)', backgroundSize: '32px 32px' }} />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* New Centered Header Style */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Reveal delay={0.2} width="100%">
            <span className="block text-orange font-bold text-xs tracking-[0.2em] uppercase mb-0">
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
            <Reveal key={service.title} delay={0.3 + index * 0.1} width="100%" className="h-full">
              <div className="group h-full flex flex-col p-6 lg:p-8 border border-navy/15 rounded-3xl hover:border-navy hover:shadow-lg hover:-translate-y-1 transition-all duration-500 bg-transparent">

                {/* Header: Badge and Icon */}
                <div className="flex justify-between items-center mb-6">
                  <div className="py-1 px-3 bg-[#F4F6F8] border border-navy/10 rounded-full group-hover:border-navy/30 transition-colors duration-500">
                    <span className="text-[11px] font-bold text-navy/60 tracking-widest uppercase group-hover:text-navy transition-colors duration-500">
                      {service.category}
                    </span>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-navy/10 flex items-center justify-center group-hover:bg-navy group-hover:border-navy transition-colors duration-500">
                    <service.icon className="w-4 h-4 text-navy group-hover:text-[#F4F6F8] transition-colors duration-500" />
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
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 group/item cursor-pointer">
                      <div className="w-1.5 h-1.5 rounded-full bg-navy mt-2 transition-all duration-300 group-hover/item:bg-orange group-hover/item:scale-150 shrink-0" />
                      <span className="text-[14px] font-medium text-navy group-hover/item:text-orange transition-colors duration-300">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
