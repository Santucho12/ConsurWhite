"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ShieldCheck, ClipboardCheck, GraduationCap, Target, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const steps = [
  {
    num: "Primer paso",
    tag: "Búsqueda",
    title: "Búsqueda Activa",
    headline: "Buscamos a los mejores talentos directamente.",
    desc: "Conocemos muy bien la zona industrial y portuaria de Ingeniero White. No esperamos a que lleguen los currículums: salimos a buscar a las personas con experiencia comprobada, usando nuestra gran red de contactos en el sector.",
    stat: "+500",
    statLabel: "Personas en nuestra base",
    icon: Target,
    accent: "bg-orange",
    bullets: ["Contactos en la industria", "Base de datos al día", "Fuerte presencia en Ingeniero White"],
  },
  {
    num: "Segundo paso",
    tag: "Revisión",
    title: "Revisión Técnica",
    headline: "Comprobamos que cada persona sabe hacer bien su trabajo.",
    desc: "Nuestro equipo revisa al detalle los permisos, certificados y la experiencia práctica de cada persona. Nos aseguramos de que el candidato realmente sepa hacer el trabajo antes de enviarlo a su empresa.",
    stat: "100%",
    statLabel: "Habilidades comprobadas",
    icon: GraduationCap,
    accent: "bg-navy",
    bullets: ["Control de licencias y permisos", "Revisión de conocimientos", "Chequeo de experiencia previa"],
  },
  {
    num: "Tercer paso",
    tag: "Entrevista",
    title: "Evaluación Psicológica",
    headline: "En la industria, la seguridad y la responsabilidad son claves.",
    desc: "Hacemos entrevistas enfocadas en el trabajo en planta: evaluamos cómo manejan la presión, el respeto por las normas de seguridad y el trabajo en equipo. Solo elegimos a personas muy seguras y responsables.",
    stat: "0",
    statLabel: "Problemas por mala selección",
    icon: ShieldCheck,
    accent: "bg-orange",
    bullets: ["Entrevistas para industria", "Actitud hacia la seguridad", "Capacidad para trabajar bajo presión"],
  },
  {
    num: "Paso final",
    tag: "Presentación",
    title: "Selección Final",
    headline: "Solo le presentamos a los candidatos ideales para su equipo.",
    desc: "Antes de enviar a una persona, armamos un resumen completo: revisamos su historia laboral, llamamos a sus empleos anteriores y nos aseguramos de que se adapte bien a la forma de trabajar de su empresa.",
    stat: "48hs",
    statLabel: "Tiempo promedio de respuesta",
    icon: ClipboardCheck,
    accent: "bg-navy",
    bullets: ["Resumen completo del candidato", "Llamadas a empleos anteriores", "Buen ajuste con su empresa"],
  },
];

export function SelectionProcess() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });
  const current = steps[active];
  const Icon = current.icon;

  useEffect(() => {
    if (!isInView) return;

    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % steps.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <section ref={sectionRef} id="proceso-seleccion" className="bg-[#F4F6F8] py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">

        {/* New Centered Header Style */}
        <div className="max-w-4xl mx-auto text-center mb-8 md:mb-16">
          <Reveal delay={0.2} width="100%">
            <span className="block text-orange font-bold text-[11px] md:text-xs tracking-[0.2em] uppercase mb-0">
              COMO ELEGIMOS EL CAPITAL HUMANO
            </span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-navy leading-tight tracking-tight">
              Proceso de selección
            </h2>
          </Reveal>
        </div>

        {/* Mobile Step Indicator (Dots) */}
        <div className="flex justify-center items-center gap-2 mb-8 md:hidden">
          {steps.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-1.5 rounded-full transition-all duration-500 ease-out ${
                active === i ? "w-8 bg-orange" : "w-1.5 bg-navy/20 hover:bg-navy/40"
              }`}
              aria-label={`Ir al paso ${i + 1}`}
            />
          ))}
        </div>

        {/* Tab Navigator (Desktop) */}
        <div className="relative mb-6 hidden md:block">
          {/* Background line */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-navy/10" />
          {/* Active line */}
          <motion.div
            className="absolute bottom-0 h-[2px] bg-orange"
            animate={{ left: `${(active / steps.length) * 100}%`, width: `${(1 / steps.length) * 100}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 35 }}
          />
          <div className="grid grid-cols-4">
            {steps.map((step, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`
                  group flex flex-col items-start gap-2 pb-5 pt-2 pr-3 text-left transition-all duration-300
                  ${active === i ? "opacity-100" : "opacity-40 hover:opacity-70"}
                `}
              >
                <span className={`font-black text-[12px] tracking-wider uppercase ${active === i ? "text-orange" : "text-navy/30"}`}>
                  {step.num}
                </span>
                <span className={`font-bold text-navy text-sm md:text-[17px] truncate ${active === i ? "text-navy" : ""}`}>
                  {step.title}
                </span>

              </button>
            ))}
          </div>
        </div>

        {/* Main Content Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-5 cursor-grab active:cursor-grabbing"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = Math.abs(offset.x) * velocity.x;
              if (swipe < -10000) {
                setActive((prev) => Math.min(steps.length - 1, prev + 1));
              } else if (swipe > 10000) {
                setActive((prev) => Math.max(0, prev - 1));
              }
            }}
          >
            {/* Left — Main Card */}
            <div className="lg:col-span-7 bg-white rounded-2xl p-5 md:p-8 shadow-sm border border-navy/5 flex flex-col justify-between min-h-[300px] md:min-h-[380px]">
              <div>


                <h3 className="text-xl md:text-2xl lg:text-[28px] font-extrabold text-navy leading-[1.2] mb-4">
                  {current.headline}
                </h3>

                <p className="text-navy/60 text-[15px] md:text-[17px] leading-relaxed max-w-[1800px]">
                  {current.desc}
                </p>
              </div>

              {/* Checklist */}
              <div className="mt-8 flex flex-col gap-2.5">
                {current.bullets.map((b, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full bg-orange/10 flex items-center justify-center shrink-0">
                      <div className="w-1 h-1 rounded-full bg-orange" />
                    </div>
                    <span className="text-navy/70 text-[14px] md:text-[16px] font-medium">{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Stat + Icon + Nav */}
            <div className="lg:col-span-5 flex flex-col gap-5">
              {/* Big Stat Card */}
              <div className="bg-navy rounded-2xl p-5 md:p-6 flex-1 flex flex-col justify-end relative overflow-hidden">
                {/* Decorative large text */}
                <div className="absolute top-[2%] right-[2%] text-white/[0.04] font-black text-[40px] md:text-[60px] leading-none select-none pointer-events-none whitespace-nowrap uppercase">
                  {current.num}
                </div>



                <div>
                  <div className="text-4xl md:text-5xl font-black text-white mb-2">{current.stat}</div>
                  <div className="text-white/60 text-[14px] md:text-[15px] font-medium leading-snug max-w-[1800px]">{current.statLabel}</div>
                </div>
              </div>

              {/* Step Navigation Card */}
              <div className="bg-white rounded-2xl p-4 border border-navy/5 shadow-sm flex items-center justify-between">
                <div>
                  <div className="text-navy/40 text-[10px] font-bold uppercase tracking-wider mb-0.5">
                    Paso {active + 1} de {steps.length}
                  </div>
                  <div className="text-navy font-bold text-[15px]">{current.title}</div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setActive(Math.max(0, active - 1))}
                    disabled={active === 0}
                    className="w-9 h-9 rounded-full border border-navy/10 flex items-center justify-center text-navy/40 hover:border-navy/30 hover:text-navy transition-all disabled:opacity-20 disabled:cursor-not-allowed"
                  >
                    <ArrowRight className="w-3.5 h-3.5 rotate-180" />
                  </button>
                  <button
                    onClick={() => setActive(Math.min(steps.length - 1, active + 1))}
                    disabled={active === steps.length - 1}
                    className="w-9 h-9 rounded-full bg-navy flex items-center justify-center text-white hover:bg-navy/90 transition-all disabled:opacity-20 disabled:cursor-not-allowed shadow-sm"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
