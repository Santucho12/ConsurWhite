"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Briefcase } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export function CareersCTA() {
  return (
    <section className="py-24 -cw-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="-cw-blue rounded-[40px] p-8 md:p-16 overflow-hidden relative group">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 -cw-orange/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:-cw-orange/20 transition-colors duration-700" />
          <div className="absolute bottom-0 left-0 w-64 h-64 -cw-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
            <div className="max-w-2xl text-center lg:text-left">
              <Reveal>
                <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl -cw-white/10 flex items-center justify-center -cw-orange">
                    <Briefcase size={20} />
                  </div>
                  <span className="-cw-orange font-bold uppercase tracking-widest text-xs">
                    ¿Sos profesional del sector?
                  </span>
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <h2 className="text-3xl md:text-5xl font-bold -cw-white mb-6 leading-tight">
                  Estamos buscando talento <br /> 
                  <span className="-cw-white/60 italic font-light">para las próximas búsquedas.</span>
                </h2>
              </Reveal>
              <Reveal delay={0.3}>
                <p className="-cw-white/50 text-lg leading-relaxed">
                  Sumate a nuestra base de datos exclusiva y recibí notificaciones sobre oportunidades laborales en el sector portuario e industrial.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.4}>
              <Link href="/postulate">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="-cw-white -cw-blue px-10 py-5 rounded-2xl font-bold uppercase tracking-widest text-sm flex items-center gap-3 shadow-xl hover:-cw-orange hover:-cw-white transition-all duration-300"
                >
                  Postulate Ahora
                  <ArrowRight size={18} />
                </motion.button>
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
