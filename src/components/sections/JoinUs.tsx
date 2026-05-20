"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Briefcase, ShieldCheck, FileText, Send, ArrowLeft } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export function JoinUs() {
  const recruitmentEmail = "info@consurwhite.com";
  const [copied, setCopied] = useState(false);

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    // Copy email to clipboard
    navigator.clipboard.writeText(recruitmentEmail);
    setCopied(true);
    
    // Reset "Copied" message after 3 seconds
    setTimeout(() => setCopied(false), 3000);

    const subject = "Postulación: [Tu Nombre] - [Puesto]";

    // Detect mobile device
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    if (isMobile) {
      window.location.href = `mailto:${recruitmentEmail}?subject=${encodeURIComponent(subject)}`;
    } else {
      // Open Gmail Compose directly in a new tab
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${recruitmentEmail}&su=${encodeURIComponent(subject)}`;
      window.open(gmailUrl, '_blank');
    }
  };

  return (
    <section id="unite" className="pt-4 md:pt-8 pb-16 md:pb-24 bg-[#FFFFFF] relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <Reveal delay={0.05}>
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-navy/40 hover:text-navy transition-colors font-bold uppercase tracking-widest text-[0.6875rem] group mb-4 md:mb-6"
          >
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
            Volver al Inicio
          </Link>
        </Reveal>
        <div className="flex flex-col lg:flex-row items-start gap-8 md:gap-16">
          <div className="w-full lg:w-1/2 mt-4 md:mt-0">
            <Reveal delay={0.2}>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-navy mb-5 md:mb-8 italic leading-[1.1]">
                Impulsá tu carrera <br /> con <span className="not-italic">ConsurWhite</span>
              </h2>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="text-navy/70 text-[1rem] md:text-lg mb-6 md:mb-10 leading-relaxed max-w-xl">
                Buscamos talentos para las industrias más importantes del sector. Si deseas formar parte de nuestro equipo, sigue las instrucciones a continuación para enviarnos tu perfil.
              </p>
            </Reveal>

            <div className="space-y-4 md:space-y-6">
              {[
                { icon: <Briefcase size={20} />, text: "Conexión directa con las empresas líderes del polo industrial." },
                { icon: <Send size={20} />, text: "Tu perfil en manos de quienes toman las decisiones." },
                { icon: <ShieldCheck size={20} />, text: "Confidencialidad absoluta en todo tu proceso de postulación." }
              ].map((item, index) => (
                <Reveal key={index} delay={0.4 + index * 0.1}>
                  <div className="flex items-center gap-4 text-navy/60 group cursor-default">
                    <div className="w-10 h-10 rounded-xl bg-navy/5 flex items-center justify-center text-navy/40 group-hover:bg-navy group-hover:text-white transition-all duration-500">
                      {item.icon}
                    </div>
                    <p className="text-sm font-medium tracking-tight">{item.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="p-1 rounded-[2rem] md:rounded-[3.5rem] bg-gradient-to-br from-white/10 to-transparent shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] md:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] w-full lg:scale-[0.9] lg:origin-top-right"
            >
              <div className="p-6 md:p-12 rounded-[1.9rem] md:rounded-[3.4rem] bg-[#0A192F] text-white relative overflow-hidden">
                {/* Decorative background gradients */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/[0.02] rounded-full blur-3xl -mr-32 -mt-32" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/[0.01] rounded-full blur-3xl -ml-32 -mb-32" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 md:gap-5 mb-8 md:mb-10">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-white/10 to-white/[0.02] border border-white/10 flex items-center justify-center shadow-inner shrink-0">
                      <Mail className="text-white w-5 h-5 md:w-7 md:h-7" />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-1 leading-none">Postulación Directa</h3>
                      <p className="text-white/40 text-[0.5625rem] md:text-[0.625rem] font-black uppercase tracking-[0.2em]">Recursos Humanos</p>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    {/* Destination Email */}
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      className="group bg-white/[0.03] rounded-2xl md:rounded-3xl p-5 md:p-6 border border-white/5 hover:border-white/10 transition-all duration-500 relative"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center gap-2 text-white/30 text-[0.5625rem] md:text-[0.625rem] font-black uppercase tracking-widest">
                          <Send size={12} />
                          Enviar a
                        </div>
                        <button 
                          onClick={() => {
                            navigator.clipboard.writeText(recruitmentEmail);
                            setCopied(true);
                            setTimeout(() => setCopied(false), 3000);
                          }}
                          className="text-[0.5625rem] md:text-[0.625rem] font-bold text-white/20 hover:text-white/60 transition-colors uppercase tracking-widest flex items-center gap-1"
                        >
                          {copied ? "¡Copiado!" : "Copiar"}
                        </button>
                      </div>
                      <p className="text-[1.0625rem] md:text-2xl font-bold text-white tracking-tight break-all md:break-normal">{recruitmentEmail}</p>
                    </motion.div>

                    {/* Subject Line */}
                    <div className="bg-white/[0.03] rounded-2xl md:rounded-3xl p-5 md:p-6 border border-white/5 hover:border-white/10 transition-all duration-500">
                      <div className="flex items-center gap-2 text-white/30 text-[0.5625rem] md:text-[0.625rem] font-black uppercase tracking-widest mb-3">
                        <FileText size={12} />
                        Asunto del Email
                      </div>
                      <div className="bg-black/20 rounded-xl p-4 md:p-4 border border-white/5">
                        <p className="text-[0.8125rem] md:text-[0.9375rem] font-medium text-white/90 leading-relaxed italic">
                          "Postulación: <span className="text-white font-bold not-italic">[Tu Nombre]</span> — <span className="text-white font-bold not-italic">[Puesto]</span>"
                        </p>
                      </div>
                    </div>

                    {/* Requirements */}
                    <div className="bg-white/[0.03] rounded-2xl md:rounded-3xl p-5 md:p-6 border border-white/5">
                      <div className="flex items-center gap-2 text-white/30 text-[0.5625rem] md:text-[0.625rem] font-black uppercase tracking-widest mb-4">
                        <ShieldCheck size={12} />
                        Requisitos
                      </div>
                      <div className="flex items-center gap-3 md:gap-4 text-[0.8125rem] md:text-sm font-medium text-white/70">
                        <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-white/40 shrink-0">
                          <FileText size={16} />
                        </div>
                        <span className="leading-tight">CV Actualizado (PDF preferentemente)</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 md:mt-10 space-y-6">
                    <button 
                      onClick={handleApply}
                      className={`w-full font-black py-5 md:py-6 rounded-2xl md:rounded-[1.5rem] transition-all duration-500 transform hover:-translate-y-1 uppercase tracking-[0.15em] md:tracking-[0.25em] text-[0.6875rem] md:text-[0.75rem] flex items-center justify-center gap-3 md:gap-4 group/btn cursor-pointer ${
                        copied 
                          ? "bg-green-500 text-white shadow-[0_20px_40px_rgba(34,197,94,0.3)]" 
                          : "bg-white text-[#0A192F] shadow-[0_20px_40px_rgba(255,255,255,0.1)] hover:shadow-[0_25px_50px_rgba(255,255,255,0.15)]"
                      }`}
                    >
                      {copied ? "¡Email Copiado!" : "Redactar Email Ahora"}
                      <Send size={16} className={`${copied ? "scale-110" : "group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1"} transition-transform duration-500`} />
                    </button>

                    <div className="flex items-center justify-center gap-3 pt-4">
                      <div className="h-px w-8 bg-white/10" />
                      <p className="text-white/20 text-[0.5625rem] uppercase tracking-[0.3em] font-black text-center">
                        Proceso de Selección 2024
                      </p>
                      <div className="h-px w-8 bg-white/10" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
