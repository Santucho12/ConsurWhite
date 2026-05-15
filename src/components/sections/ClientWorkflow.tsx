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
  ArrowRight,
  Briefcase,
  ShieldCheck,
  CheckCircle2
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const steps = [
  {
    title: "Análisis de Relevamientos",
    desc: "Analizamos técnica y culturalmente el puesto en sus instalaciones para asegurar un match perfecto desde el primer día.",
    icon: Briefcase,
    color: "navy",
    hex: "#001A33",
  },
  {
    title: "Sourcing Territorial",
    desc: "Activamos nuestra red estratégica en Ingeniero White para encontrar el talento local que otros no ven.",
    icon: Search,
    color: "navy",
    hex: "#001A33",
  },
  {
    title: "Evaluación Técnica",
    desc: "Evaluamos las habilidades operativas reales en el campo para validar la destreza técnica del candidato.",
    icon: Filter,
    color: "navy",
    hex: "#001A33",
  },
  {
    title: "Entrevista Psicotécnica",
    desc: "Analizamos la conducta, responsabilidad y el manejo de la presión en entornos industriales exigentes.",
    icon: Users,
    color: "navy",
    hex: "#001A33",
  },
  {
    title: "Presentación de Candidatos",
    desc: "Le presentamos a los mejores perfiles seleccionados con informes detallados para que usted tome la decisión final.",
    icon: Users,
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
    <section id="alianza" className="py-20 md:py-28 overflow-hidden relative bg-[#F4F6F8]">

      <div className="container mx-auto px-6 md:px-12 relative z-10">

        {/* New Centered Header Style */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Reveal delay={0.2} width="100%">
            <span className="block text-orange font-bold text-xs tracking-[0.2em] uppercase mb-0">
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
                <div key={i} className="relative grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-0 min-h-[60px] py-4 md:py-6 group">

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
                  <div className="absolute left-6 md:left-1/2 top-0 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 z-20">
                    <TimelineNode index={i} scrollYProgress={scrollYProgress} isLast={isLast} hex={step.hex} />
                  </div>

                  {/* Content */}
                  <div className={`
                    pl-16 md:pl-0 
                    ${isEven ? "md:pr-24 md:text-right md:col-start-1" : "md:pl-24 md:text-left md:col-start-2"}
                  `}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.6 }}
                    >
                      <div className={`flex items-center gap-2 mb-2 ${isEven ? "justify-end" : "justify-start"}`}>
                        {isEven && <div className={`w-6 h-[2px] ${step.color === "navy" ? "bg-navy/10" : "bg-orange/20"}`} />}
                        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-navy/30">Paso {i + 1}</span>
                        {!isEven && <div className={`w-6 h-[2px] ${step.color === "navy" ? "bg-navy/10" : "bg-orange/20"}`} />}
                      </div>
                      <h3 className={`text-2xl md:text-3xl font-black mb-3 leading-tight transition-colors duration-500 ${stepColor}`}>
                        {step.title}
                      </h3>
                      <p className="text-navy/60 text-base md:text-lg leading-relaxed max-w-md mx-auto md:mx-0">
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
    <div className="mt-6 flex items-center gap-6">
      <a
        href="#contacto"
        className="inline-flex items-center gap-3 bg-navy text-white font-bold text-[13px] uppercase tracking-[0.15em] px-8 py-4 rounded-xl hover:bg-orange transition-colors duration-500 group"
      >
        Contactar
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
      </a>
      <span className="text-navy/30 text-sm hidden md:inline">Sin compromiso</span>
    </div>
  );
}
