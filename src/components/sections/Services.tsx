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
      "Evaluaciones de perfil",
      "Informes de adecuación"
    ],
    icon: ClipboardCheck,
  },
  {
    num: "03",
    category: "CONSULTORÍA",
    title: "Consultoría en Capital Humano",
    desc: "Asesoramos en la definición de perfiles y descripción de puestos. Si no sabés qué perfil necesitás, nosotros te ayudamos a definirlo.",
    items: [
      "Definición de perfiles",
      "Descripción de puestos",
      "Estrategia de incorporación",
      "Asesoramiento integral"
    ],
    icon: Handshake,
  }
];

export function Services() {
  return (
    <section id="servicios" className="pt-16 pb-32 bg-white relative overflow-hidden">
      {/* Technical Dot Pattern Background */}
      <div className="absolute inset-0 opacity-[0.1]" style={{ backgroundImage: 'radial-gradient(var(--color-azul) 0.5px, transparent 0.5px)', backgroundSize: '32px 32px' }} />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Perfectly Centered Header */}
        <div className="max-w-[1800px] mx-auto text-center mb-20">
          <Reveal delay={0.1} width="100%">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-[1px] w-8 bg-navy/20" />
              <div className="w-1.5 h-1.5 rounded-full bg-navy/40" />
              <div className="h-[1px] w-8 bg-navy/20" />
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-navy leading-[1.1] tracking-tighter mb-8">
              Nuestros Servicios <br /> Corporativos
            </h2>
          </Reveal>
        </div>

        {/* Professional Itemized Grid - 3 Columns */}
        <div className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={0.3 + index * 0.1} width="100%" className="h-full">
              <div className="group h-full flex flex-col bg-white border-2 border-navy/5 rounded-[40px] transition-all duration-700 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)] hover:-translate-y-3 hover:border-navy relative overflow-hidden">

                {/* Content Wrapper (with padding) */}
                <div className="flex-1 flex flex-col items-start text-left px-10 py-12 pb-16">
                  {/* Category Tag with Icon - Left Aligned */}
                  <div className="mb-6 flex items-center justify-start">
                    <div className="flex items-center gap-3 py-2 px-4 bg-white rounded-full border border-navy/10 shadow-sm">
                      <service.icon className="w-4 h-4 text-navy" />
                      <span className="text-[12px] font-bold text-black/50 tracking-widest uppercase">{service.category}</span>
                    </div>
                  </div>

                  {/* Title - Left Aligned */}
                  <div className="min-h-[80px] flex items-start justify-start w-full">
                    <h3 className="text-2xl md:text-3xl font-bold text-navy mb-3 tracking-tight leading-tight">
                      {service.title}
                    </h3>
                  </div>

                  {/* Description - Left text */}
                  <div className="min-h-[80px] flex items-start w-full max-w-[350px] mb-8">
                    <p className="text-navy/50 text-base leading-relaxed text-left w-full">
                      {service.desc}
                    </p>
                  </div>

                  {/* Sub-items List - Left Aligned */}
                  <ul className="space-y-4 flex flex-col items-start w-full max-w-[320px]">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 group/item text-left w-full">
                        <div className="w-1.5 h-1.5 rounded-full bg-navy mt-2 transition-all group-hover/item:scale-150 shrink-0" />
                        <span className="text-[15px] font-medium text-navy/70 group-hover/item:text-navy transition-colors">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
