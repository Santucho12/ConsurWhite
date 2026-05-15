"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Briefcase } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export function CareersCTA() {
  return (
    <section className="pt-16 md:pt-24 pb-20 md:pb-28 bg-[#F4F6F8] relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="bg-navy rounded-[40px] p-8 md:p-16 overflow-hidden relative group">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-orange/20 transition-colors duration-700" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#F4F6F8]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
            <div className="max-w-2xl text-center lg:text-left">
              <Reveal>
                <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
                  <div className="h-[1px] w-6 bg-orange/40" />
                  <span className="text-orange font-bold uppercase tracking-[0.25em] text-[10px]">
                    Oportunidades
                  </span>
                  <div className="h-[1px] w-6 bg-orange/40 lg:hidden" />
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                  Estamos buscando <br className="hidden md:block" /> 
                  <span className="italic font-serif font-medium">nuevo talento.</span>
                </h2>
              </Reveal>
              <Reveal delay={0.3}>
                <p className="text-[#F4F6F8]/50 text-lg leading-relaxed">
                  Sumate a nuestra base de datos exclusiva y recibí notificaciones sobre oportunidades laborales en el sector portuario e industrial.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.4}>
              <Link href="/postulate">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-[#F4F6F8] text-navy px-10 py-5 rounded-2xl font-bold uppercase tracking-widest text-sm flex items-center gap-3 shadow-xl hover:bg-orange hover:text-[#F4F6F8] transition-all duration-300"
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
