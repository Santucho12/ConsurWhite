"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ShieldCheck, ClipboardCheck, GraduationCap, Target, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { useLanguage } from "@/context/LanguageContext";

const stepIcons = [Target, GraduationCap, ShieldCheck, ClipboardCheck] as const;
const stepAccents = ["bg-orange", "bg-navy", "bg-orange", "bg-navy"] as const;

export function SelectionProcess() {
  const { t } = useLanguage();
  const steps = t.selectionProcess.steps.map((step, i) => ({
    ...step,
    icon: stepIcons[i] ?? ShieldCheck,
    accent: stepAccents[i] ?? "bg-navy",
  }));
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
            <span className="block text-orange font-bold text-[0.625rem] md:text-xs tracking-[0.2em] uppercase mb-0">
              {t.selectionProcess.badge}
            </span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-navy leading-tight tracking-tight">
              {t.selectionProcess.title}
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
                <span className={`font-black text-[0.75rem] tracking-wider uppercase ${active === i ? "text-orange" : "text-navy/30"}`}>
                  {step.num}
                </span>
                <span className={`font-bold text-navy text-sm md:text-[1.0625rem] truncate ${active === i ? "text-navy" : ""}`}>
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
            className="grid grid-cols-1 lg:grid-cols-12 gap-5"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(e, { offset, velocity }) => {
              const swipePower = Math.abs(offset.x) * velocity.x;
              if (offset.x < -50 || swipePower < -5000) {
                setActive((prev) => Math.min(steps.length - 1, prev + 1));
              } else if (offset.x > 50 || swipePower > 5000) {
                setActive((prev) => Math.max(0, prev - 1));
              }
            }}
          >
            {/* Left — Main Card */}
            <div className="lg:col-span-7 bg-white rounded-2xl p-5 md:p-8 shadow-sm border border-navy/5 flex flex-col justify-between min-h-[300px] md:min-h-[380px]">
              <div>


                <h3 className="text-xl md:text-2xl lg:text-[1.75rem] font-extrabold text-navy leading-[1.2] mb-4">
                  {current.headline}
                </h3>

                <p className="text-navy/60 text-[0.9375rem] md:text-[1.0625rem] leading-relaxed max-w-[1800px]">
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
                    <span className="text-navy/70 text-[0.875rem] md:text-[1rem] font-medium">{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Stat + Icon + Nav */}
            <div className="lg:col-span-5 flex flex-col gap-5">
              {/* Big Stat Card */}
              <div className="bg-navy rounded-2xl p-5 md:p-6 flex-1 flex flex-col justify-end relative overflow-hidden">
                {/* Decorative large text */}
                <div className="absolute top-[2%] right-[2%] text-white/[0.04] font-black text-[2.5rem] md:text-[3.75rem] leading-none select-none pointer-events-none whitespace-nowrap uppercase">
                  {current.num}
                </div>



                <div>
                  <div className="text-4xl md:text-5xl font-black text-white mb-2">{current.stat}</div>
                  <div className="text-white/60 text-[0.875rem] md:text-[0.9375rem] font-medium leading-snug max-w-[1800px]">{current.statLabel}</div>
                </div>
              </div>

              {/* Step Navigation Card */}
              <div className="bg-white rounded-2xl p-4 border border-navy/5 shadow-sm flex items-center justify-between">
                <div>
                  <div className="text-navy/40 text-[0.625rem] font-bold uppercase tracking-wider mb-0.5">
                    {t.selectionProcess.paso} {active + 1} {t.selectionProcess.of} {steps.length}
                  </div>
                  <div className="text-navy font-bold text-[0.9375rem]">{current.title}</div>
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
