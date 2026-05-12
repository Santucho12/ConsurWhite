"use client";

import { motion } from "framer-motion";
import { Search, BarChart3, Users, FileCheck, Rocket } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const steps = [
  {
    title: "Análisis de Necesidades",
    desc: "Definimos técnicamente el perfil y la cultura organizacional para asegurar un match perfecto.",
    icon: BarChart3,
  },
  {
    title: "Búsqueda Estratégica",
    desc: "Scouting proactivo en redes profesionales y bases especializadas exclusivas de la industria.",
    icon: Search,
  },
  {
    title: "Evaluación Multidimensional",
    desc: "Pruebas técnicas y psicotécnicas rigurosas realizadas por expertos en selección.",
    icon: Users,
  },
  {
    title: "Selección de Finalistas",
    desc: "Presentación de una terna curada con informes detallados sobre competencias y potencial.",
    icon: FileCheck,
  },
  {
    title: "Acompañamiento",
    desc: "Seguimiento continuo durante el onboarding para garantizar una integración exitosa.",
    icon: Rocket,
  },
];

export function SelectionProcess() {
  return (
    <section id="proceso-seleccion" className="py-32 -cw-white relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-20">
          <Reveal delay={0.1}>
            <span className="inline-block px-4 py-1.5 rounded-full -cw-blue/10 -cw-blue font-bold text-xs tracking-widest uppercase mb-6">
              Metodología ConsurWhite
            </span>
          </Reveal>
          <Reveal delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-bold -cw-blue mb-6 italic">
              Cómo seleccionamos el <br /> <span className="-cw-orange not-italic">Talento que impulsa su industria</span>
            </h2>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="-cw-blue/70 text-lg max-w-2xl">
              Nuestro proceso de selección es riguroso y transparente, diseñado para encontrar no solo capacidades técnicas, sino valores alineados a su empresa.
            </p>
          </Reveal>
        </div>

        <div className="relative">
          {/* Vertical Line for desktop */}
          <div className="absolute left-[31px] top-0 bottom-0 w-px -cw-blue/10 hidden lg:block" />

          <div className="space-y-12 relative z-10">
            {steps.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.15} width="100%">
                <div className="flex flex-col lg:flex-row items-start gap-8 group">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full -cw-blue flex items-center justify-center -cw-white border-4 -cw-white shadow-xl relative z-20 group-hover:-cw-orange transition-colors duration-500">
                    <step.icon size={24} />
                    <span className="absolute -right-12 top-1/2 -translate-y-1/2 -cw-blue/10 font-black text-4xl hidden lg:block">
                      0{index + 1}
                    </span>
                  </div>
                  
                  <div className="flex-grow pt-2">
                    <h3 className="text-2xl font-bold -cw-blue mb-3 group-hover:-cw-orange transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="-cw-blue/60 max-w-2xl leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
