"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Send, Briefcase } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export function CareersCTA() {
  return (
    <section className="pt-12 pb-24 md:pt-16 md:pb-32 bg-[#F4F6F8] relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="bg-navy rounded-[40px] p-8 md:p-16 overflow-hidden relative group shadow-[0_20px_50px_rgba(0,29,58,0.3)]">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
            <div className="max-w-3xl text-center lg:text-left">
              <Reveal>
                <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
                  <div className="h-[px] w-6 bg-white/20" />
                  <span className="text-white/40 font-bold uppercase tracking-[0.25em] text-[10px]">
                    Oportunidades Laborales
                  </span>
                  <div className="h-[px] w-6 bg-white/20 lg:hidden" />
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
                  Impulsá tu carrera <br /> con ConsurWhite
                </h2>
              </Reveal>
              <Reveal delay={0.3}>
                <p className="text-white/60 text-[17px] md:text-lg leading-relaxed max-w-2xl">
                  Buscamos talentos para las industrias más importantes del sector. Cargá tu CV en nuestra base de datos y postulate para formar parte de nuestras próximas búsquedas laborales.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.4}>
              <Link href="/postulate">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-white text-navy px-12 py-5 rounded-full font-bold uppercase tracking-[0.15em] text-[12px] flex items-center gap-4 shadow-2xl hover:shadow-white/10 transition-all duration-300"
                >
                  Postularme Ahora
                  <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
