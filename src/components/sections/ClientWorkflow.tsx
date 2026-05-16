"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";
import {
  Users,
  Search,
  Filter,
  FileCheck,
  Handshake,
  Check,
  Send,
  Briefcase,
  ShieldCheck,
  CheckCircle2
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const steps = [
  {
    title: "Análisis de Necesidades",
    desc: "Visitamos sus instalaciones para entender a fondo la necesidad, la cultura de la planta y los requisitos técnicos del puesto.",
    icon: Briefcase,
    color: "navy",
    hex: "#001A33",
  },
  {
    title: "Activación de Búsqueda",
    desc: "Ponemos en marcha nuestro riguroso proceso interno de selección y filtrado para dar con los perfiles más idóneos.",
    icon: Search,
    color: "navy",
    hex: "#001A33",
  },
  {
    title: "Presentación de Candidatos",
    desc: "Le entregamos un informe ejecutivo detallado con los perfiles finalistas, listos para su evaluación.",
    icon: Users,
    color: "navy",
    hex: "#001A33",
  },
  {
    title: "Entrevistas Finales",
    desc: "Coordinamos las entrevistas entre los candidatos seleccionados y el equipo técnico o gerencial de su empresa.",
    icon: FileCheck,
    color: "orange",
    hex: "#FF6B00",
  },
  {
    title: "Elección de candidatos",
    desc: "Usted toma la decisión final. Lo asesoramos en la elección y facilitamos toda la gestión para agilizar el ingreso.",
    icon: CheckCircle2,
    color: "orange",
    hex: "#FF6B00",
  },
  {
    title: "Te Acompañamos en el Proceso",
    desc: "Nuestro compromiso no termina con la elección. Brindamos seguimiento continuo para asegurar la perfecta adaptación del nuevo talento a su equipo.",
    icon: Handshake,
    color: "orange",
    hex: "#FF6B00",
  },
];

function TimelineNode({ index, scrollYProgress, isLast, hex }: { index: number, scrollYProgress: MotionValue<number>, isLast: boolean, hex: string }) {
  // Adjusted thresholds to trigger activation exactly when the line reaches the center
  const threshold = index * 0.17;

  const backgroundColor = useTransform(
    scrollYProgress,
    [threshold - 0.08, threshold],
    ["#F4F6F8", hex]
  );

  const textColor = useTransform(
    scrollYProgress,
    [threshold - 0.08, threshold],
    [hex, "#F4F6F8"]
  );

  const borderColor = useTransform(
    scrollYProgress,
    [threshold - 0.08, threshold],
    ["#E2E8F0", hex]
  );

  return (
    <motion.div
      style={{ backgroundColor, color: textColor, borderColor }}
      className="relative z-20 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center border-[3px] shadow-lg cursor-pointer transition-shadow duration-300"
    >
      {isLast ? (
        <Check className="w-5 h-5 md:w-6 md:h-6" strokeWidth={3} />
      ) : (
        <span className="text-lg md:text-xl font-black">{index + 1}</span>
      )}
    </motion.div>
  );
}

export function WorkWithCompanies() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  return (
    <section id="alianza" className="pt-16 pb-12 md:pt-20 md:pb-16 overflow-hidden relative bg-[#F4F6F8]">

      <div className="container mx-auto px-6 md:px-12 relative z-10">

        {/* New Centered Header Style */}
        <div className="max-w-4xl mx-auto text-center mb-10">
          <Reveal delay={0.2} width="100%">
            <span className="block text-orange font-bold text-[10px] md:text-xs tracking-[0.2em] uppercase mb-0">
              LOS PASOS A SEGUIR JUNTOS
            </span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-navy leading-tight tracking-tight">
              Cómo trabajamos
            </h2>
          </Reveal>
        </div>

        {/* Vertical Timeline */}
        <div ref={containerRef} className="relative max-w-4xl mx-auto">

          {/* Continuous Lines (Single source for smooth transition) */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 -translate-x-1/2 pointer-events-none">
            {/* Background Line */}
            <div className="w-[3px] h-full bg-navy/[0.07]" />

            {/* Progress Line */}
            <motion.div
              style={{
                clipPath: useTransform(scrollYProgress, [0, 1], ["inset(0 0 100% 0)", "inset(0 0 0% 0)"]),
                backgroundImage: "linear-gradient(to bottom, #001A33 0%, #001A33 50%, #FF6B00 85%, #FF6B00 100%)"
              }}
              className="w-[3px] h-full absolute top-0 left-0 z-10"
            />
          </div>

          {/* Steps */}
          <div className="">
            {steps.map((step, i) => {
              const isFirst = i === 0;
              const isLast = i === steps.length - 1;
              const isEven = i % 2 === 0;
              const stepColor = step.color === "navy" ? "text-navy" : "text-orange";

              return (
                <div key={i} className="relative grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-0 min-h-[50px] py-8 md:py-6 group">

                  {/* Local Masks (Hides line above first circle and below last circle) */}
                  <div className="absolute left-6 md:left-1/2 top-0 bottom-0 -translate-x-1/2 pointer-events-none z-[15]">
                    {isFirst && (
                      <div className="absolute top-0 bottom-1/2 w-[5px] bg-[#F4F6F8] -translate-x-1/2" />
                    )}
                    {isLast && (
                      <div className="absolute top-1/2 bottom-0 w-[5px] bg-[#F4F6F8] -translate-x-1/2" />
                    )}
                  </div>

                  {/* Central Node */}
                  <div className="absolute left-6 md:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                    <TimelineNode index={i} scrollYProgress={scrollYProgress} isLast={isLast} hex={step.hex} />
                  </div>

                  {/* Content */}
                  <div className={`
                    pl-16 md:pl-0 
                    ${isEven ? "md:pr-24 md:col-start-1" : "md:pl-24 md:col-start-2"}
                    text-left
                  `}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-10%" }}
                      transition={{ duration: 0.6 }}
                    >
                      <div className={`flex items-center gap-2 mb-2 justify-start`}>
                        {isEven && <div className={`w-6 h-[2px] ${step.color === "navy" ? "bg-navy/10" : "bg-orange/20"}`} />}
                        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-navy/30">Paso {i + 1}</span>
                        {!isEven && <div className={`w-6 h-[2px] ${step.color === "navy" ? "bg-navy/10" : "bg-orange/20"}`} />}
                      </div>
                      <h3 className={`text-2xl md:text-3xl font-black mb-3 leading-tight transition-colors duration-500 ${stepColor}`}>
                        {step.title}
                      </h3>
                      <p className="text-navy/60 text-base md:text-lg leading-relaxed max-w-md">
                        {step.desc}
                      </p>
                      {isLast && <CTABlock />}
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

function CTABlock() {
  return (
    <div className="mt-6 flex items-center">
      <a
        href="/#contacto"
        className="inline-flex items-center justify-center gap-2 bg-navy text-white font-bold text-[12px] uppercase tracking-[0.15em] px-10 py-4 rounded-full transition-all duration-500 group hover:opacity-90 hover:shadow-xl shadow-lg"
      >
        Agendar reunión
        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </a>
    </div>
  );
}
