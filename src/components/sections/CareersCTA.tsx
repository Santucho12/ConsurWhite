"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Send, Briefcase } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { useLanguage } from "@/context/LanguageContext";

export function CareersCTA() {
  const { t } = useLanguage();
  return (
    <section className="pt-12 pb-24 md:pt-16 md:pb-32 bg-[#F4F6F8] relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="bg-navy rounded-3xl md:rounded-[40px] p-6 md:p-16 overflow-hidden relative group shadow-[0_20px_50px_rgba(0,29,58,0.3)]">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 relative z-10">
            <div className="max-w-3xl text-center lg:text-left">
              <Reveal>
                <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
                  <div className="h-[px] w-6 bg-white/20" />
                  <span className="text-white/40 font-bold uppercase tracking-[0.25em] text-[0.625rem]">
                    {t.careersCta.badge}
                  </span>
                  <div className="h-[px] w-6 bg-white/20 lg:hidden" />
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-4 md:mb-6 leading-[1.15] tracking-tight">
                  {t.careersCta.title1} <br className="hidden md:block" /> {t.careersCta.title2}
                </h2>
              </Reveal>
              <Reveal delay={0.3}>
                <p className="text-white/60 text-[0.875rem] md:text-lg leading-relaxed max-w-2xl px-2 md:px-0">
                  {t.careersCta.desc}
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.4}>
              <div className="w-full md:w-auto">
                <Link href="/postulate" className="block w-full">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-white text-navy w-full md:w-auto px-6 py-4 md:px-12 md:py-5 rounded-full font-bold uppercase tracking-[0.15em] text-[0.75rem] flex items-center justify-center gap-4 shadow-2xl hover:shadow-white/10 transition-all duration-300"
                  >
                    {t.careersCta.cta}
                    <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
