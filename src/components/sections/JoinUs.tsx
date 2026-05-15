"use client";

import { motion } from "framer-motion";
import { Upload, Send, Briefcase } from "lucide-react";
import { Reveal, FadeIn } from "@/components/ui/Reveal";

export function JoinUs() {
  return (
    <section id="unite" className="py-16 md:py-24 bg-[#F4F6F8] relative overflow-hidden">
      {/* Abstract geometric shapes for premium feel */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03]">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 100 L100 0" stroke="currentColor" strokeWidth="0.1" className="text-navy" />
          <path d="M0 0 L100 100" stroke="currentColor" strokeWidth="0.1" className="text-navy" />
        </svg>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <Reveal delay={0.1}>
              <span className="inline-block text-orange font-bold text-xs tracking-[0.2em] uppercase mb-0">
                OPORTUNIDADES DE CARRERA
              </span>
            </Reveal>
            <Reveal delay={0.2}>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-navy mb-8 italic">
                Impulsá tu carrera con <br /> <span className="not-italic">ConsurWhite</span>
              </h2>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="text-navy/70 text-lg mb-10 leading-relaxed">
                Buscamos profesionales talentosos para las empresas más importantes del sector industrial, portuario y petroquímico. Cargá tu CV en nuestra base de datos exclusiva y formá parte de nuestras próximas búsquedas.
              </p>
            </Reveal>

            <div className="space-y-6">
              {[
                { icon: Briefcase, text: "Acceso a búsquedas exclusivas y confidenciales." },
                { icon: Send, text: "Tu perfil directamente en manos de líderes de la industria." },
              ].map((item, i) => (
                <FadeIn key={i} delay={0.4 + i * 0.1}>
                  <div className="flex items-center gap-4 text-navy/80 font-medium">
                    <div className="w-10 h-10 rounded-xl bg-navy/5 flex items-center justify-center text-orange">
                      <item.icon size={20} />
                    </div>
                    {item.text}
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="p-10 md:p-12 rounded-[40px] bg-navy text-white shadow-2xl relative group"
            >
              <div className="absolute inset-0 bg-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[40px]" />
              
              <h3 className="text-2xl font-bold mb-8 relative z-10">Envianos tu CV</h3>
              
              <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-white/50 text-xs font-bold uppercase tracking-widest mb-2 ml-1">Nombre Completo</label>
                  <input 
                    type="text" 
                    placeholder="Ej. Juan Pérez" 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-orange transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-white/50 text-xs font-bold uppercase tracking-widest mb-2 ml-1">Correo Electrónico</label>
                  <input 
                    type="email" 
                    placeholder="juan@ejemplo.com" 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-orange transition-colors"
                  />
                </div>
                
                <div className="pt-4">
                  <label className="block text-white/50 text-xs font-bold uppercase tracking-widest mb-4 ml-1">Archivo de CV (PDF/Word)</label>
                  <div className="border-2 border-dashed border-white/10 rounded-3xl p-8 text-center hover:border-orange/50 transition-colors cursor-pointer group/upload">
                    <Upload className="mx-auto text-white/20 group-hover/upload:text-orange group-hover/upload:scale-110 transition-all mb-4" size={32} />
                    <p className="text-white/40 text-sm">Arrastrá tu archivo aquí o <span className="text-orange font-bold">buscalo en tu equipo</span></p>
                  </div>
                </div>

                <button className="w-full bg-orange hover:bg-orange/90 text-white font-bold py-5 rounded-2xl shadow-xl shadow-orange/20 transition-all duration-300 transform active:scale-[0.98] mt-4 uppercase tracking-widest text-sm">
                  Enviar Postulación
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
