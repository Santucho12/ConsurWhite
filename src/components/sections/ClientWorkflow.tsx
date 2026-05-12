"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MessageSquare, FileText, Settings, LineChart } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const workflow = [
  {
    title: "Contacto Inicial",
    desc: "Realizamos una reunión técnica para entender profundamente los objetivos, desafíos y la cultura de su organización.",
    icon: MessageSquare,
    image: "/service_selection_1778550969384.png"
  },
  {
    title: "Propuesta Estratégica",
    desc: "Diseñamos un plan de acción a medida, con plazos claros y metodologías adaptadas a sus necesidades específicas.",
    icon: FileText,
    image: "/service_evaluation_1778551081108.png"
  },
  {
    title: "Ejecución y Gestión",
    desc: "Implementamos el proceso de reclutamiento o consultoría, manteniendo una comunicación fluida y constante.",
    icon: Settings,
    image: "/service_management_1778551124842.png"
  },
  {
    title: "Resultados y Valor",
    desc: "Entregamos el talento o la solución acordada, con un seguimiento posterior para asegurar el éxito a largo plazo.",
    icon: LineChart,
    image: "/service_structure_1778551151378.png"
  },
];

export function ClientWorkflow() {
  return (
    <section id="alianza" className="py-32 -cw-blue relative overflow-hidden">
      {/* Decorative background gradients */}
      <div className="absolute -top-24 -right-24 w-96 h-96 -cw-orange/10 rounded-full blur-[100px]" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 -cw-white/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <Reveal delay={0.1}>
            <span className="inline-block px-4 py-1.5 rounded-full -cw-orange/20 -cw-orange font-bold text-xs tracking-widest uppercase mb-6">
              Para Empresas
            </span>
          </Reveal>
          <Reveal delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-bold -cw-white mb-6">
              Su Alianza con <span className="-cw-orange">ConsurWhite</span>
            </h2>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="-cw-white/60 text-lg">
              Simplificamos la gestión de capital humano a través de un proceso transparente y enfocado en resultados de alto impacto.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {workflow.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.1} width="100%">
              <div className="relative h-full flex flex-col rounded-3xl -cw-white/5 border -cw-white/10 hover:-cw-white/[0.08] transition-all duration-500 group overflow-hidden">
                <div className="flex-1 p-8 pb-8 relative z-10">
                  <div className="w-14 h-14 rounded-2xl -cw-orange flex items-center justify-center -cw-white mb-8 group-hover:scale-110 transition-transform duration-500">
                    <item.icon size={28} />
                  </div>
                  <div className="absolute top-8 right-8 -cw-white/5 font-black text-6xl leading-none">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold -cw-white mb-4">
                    {item.title}
                  </h3>
                  <p className="-cw-white/40 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom Image Wrapper */}
                <div className="w-full h-40 sm:h-48 relative overflow-hidden shrink-0 mt-auto">
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    fill 
                    className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-40 group-hover:opacity-60 grayscale group-hover:grayscale-0"
                  />
                  {/* Overlay gradient to blend image with card seamlessly */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1118]/80 to-transparent pointer-events-none" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
