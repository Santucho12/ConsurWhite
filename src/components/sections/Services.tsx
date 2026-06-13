"use client";

import { motion } from "framer-motion";
import { Search, Users, BarChart3, ChevronRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const services = [
  {
    num: "01",
    category: "RECRUITING",
    title: "Recruiting & Selection",
    desc: "Identificamos y evaluamos el talento técnico y operativo que impulsa la industria. Especialistas en perfiles para los sectores portuario y petroquímico.",
    items: [
      "Operarios calificados y técnicos",
      "Especialistas en Seguridad e Higiene",
      "Ingeniería y mantenimiento industrial",
      "Personal administrativo especializado"
    ],
    icon: Search,
  },
  {
    num: "02",
    category: "EXECUTIVE",
    title: "Executive Search",
    desc: "Búsqueda estratégica de mandos medios y gerenciales. Encontramos líderes con la visión y experiencia necesaria para dirigir proyectos complejos.",
    items: [
      "Headhunting estratégico",
      "Evaluación de potencial directivo",
      "Mapeo de mercado de talentos",
      "Mandos medios y gerencias"
    ],
    icon: Users,
  },
  {
    num: "03",
    category: "CONSULTING",
    title: "HR Consulting",
    desc: "Asesoramiento integral en la gestión de capital humano. Optimizamos sus procesos internos para mejorar la eficiencia y el clima organizacional.",
    items: [
      "Definición de perfiles y puestos",
      "Auditoría de procesos de RRHH",
      "Desarrollo de cultura organizacional",
      "Estrategias de retención de talento"
    ],
    icon: BarChart3,
  }
];

export function Services() {
  return (
    <section id="servicios" className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-4xl mb-24">
          <Reveal delay={0.1}>
            <span className="inline-block text-[11px] font-bold tracking-[0.3em] text-navy/40 uppercase mb-6">
              Soluciones de Capital Humano
            </span>
          </Reveal>
          <Reveal delay={0.2}>
            <h2 className="text-5xl md:text-7xl font-black text-navy leading-[0.95] tracking-tighter mb-10">
              Nuestros Pilares <br /> de Servicio
            </h2>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="h-1 w-24 bg-navy mb-10" />
            <p className="text-xl text-navy/60 leading-relaxed max-w-2xl font-medium">
              Ofrecemos un enfoque especializado y técnico para cada necesidad de talento, garantizando eficiencia y calidad en cada incorporación.
            </p>
          </Reveal>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={0.4 + index * 0.1} width="100%">
              <div className="group relative flex flex-col h-full border-t border-navy/10 pt-12 hover:border-navy transition-colors duration-700">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-navy/[0.03] rounded-2xl group-hover:bg-navy group-hover:text-white transition-all duration-500">
                      <service.icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold tracking-[0.2em] text-navy/40 group-hover:text-navy/60 transition-colors">
                      {service.category}
                    </span>
                  </div>
                  <span className="text-4xl font-black text-navy/5 tabular-nums group-hover:text-navy/10 transition-colors">
                    {service.num}
                  </span>
                </div>

                <h3 className="text-3xl font-bold text-navy mb-6 tracking-tight">
                  {service.title}
                </h3>
                
                <p className="text-navy/60 text-base leading-relaxed mb-10 flex-1">
                  {service.desc}
                </p>

                <ul className="space-y-4 mb-12">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-semibold text-navy/80 group/item">
                      <div className="w-1 h-1 rounded-full bg-navy/20 group-hover:bg-navy transition-colors" />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] text-navy uppercase group/btn cursor-pointer">
                    <span>Saber más</span>
                    <ChevronRight className="w-3 h-3 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
