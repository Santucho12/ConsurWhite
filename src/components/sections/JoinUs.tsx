"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Briefcase, ShieldCheck, FileText, Send } from "lucide-react";
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

    // Open Gmail Compose directly in a new tab
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${recruitmentEmail}&su=Postulación: [Tu Nombre] - [Puesto]`;
    window.open(gmailUrl, '_blank');
  };

  return (
    <section id="unite" className="pt-0 pb-2 md:pb-4 bg-[#FFFFFF] relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10 scale-[0.83] origin-top">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <Reveal delay={0.1}>
              <span className="inline-block text-navy/40 font-bold text-xs tracking-[0.2em] uppercase mb-0">
                Trabajá con nosotros
              </span>
            </Reveal>
            <Reveal delay={0.2}>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-navy mb-8 italic leading-[1.1]">
                Impulsá tu carrera <br /> con <span className="not-italic">ConsurWhite</span>
              </h2>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="text-navy/70 text-lg mb-10 leading-relaxed max-w-xl">
                Buscamos talentos para las industrias más importantes del sector. Si deseas formar parte de nuestro equipo, sigue las instrucciones a continuación para enviarnos tu perfil.
              </p>
            </Reveal>

            <div className="space-y-6">
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
              className="p-1 md:p-1 rounded-[3.5rem] bg-gradient-to-br from-white/10 to-transparent shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]"
            >
              <div className="p-8 md:p-12 rounded-[3.4rem] bg-[#0A192F] text-white relative overflow-hidden">
                {/* Decorative background gradients */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/[0.02] rounded-full blur-3xl -mr-32 -mt-32" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/[0.01] rounded-full blur-3xl -ml-32 -mb-32" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-5 mb-10">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-white/10 to-white/[0.02] border border-white/10 flex items-center justify-center shadow-inner">
                      <Mail className="text-white" size={28} />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold tracking-tight text-white mb-1">Postulación Directa</h3>
                      <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.2em]">Recursos Humanos</p>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    {/* Destination Email */}
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      className="group bg-white/[0.03] rounded-3xl p-6 border border-white/5 hover:border-white/10 transition-all duration-500 relative"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center gap-2 text-white/30 text-[10px] font-black uppercase tracking-widest">
                          <Send size={12} />
                          Enviar a
                        </div>
                        <button 
                          onClick={() => {
                            navigator.clipboard.writeText(recruitmentEmail);
                            setCopied(true);
                            setTimeout(() => setCopied(false), 3000);
                          }}
                          className="text-[10px] font-bold text-white/20 hover:text-white/60 transition-colors uppercase tracking-widest flex items-center gap-1"
                        >
                          {copied ? "¡Copiado!" : "Copiar"}
                        </button>
                      </div>
                      <p className="text-xl md:text-2xl font-bold text-white tracking-tight">{recruitmentEmail}</p>
                    </motion.div>

                    {/* Subject Line */}
                    <div className="bg-white/[0.03] rounded-3xl p-6 border border-white/5 hover:border-white/10 transition-all duration-500">
                      <div className="flex items-center gap-2 text-white/30 text-[10px] font-black uppercase tracking-widest mb-3">
                        <FileText size={12} />
                        Asunto del Email
                      </div>
                      <div className="bg-black/20 rounded-xl p-4 border border-white/5">
                        <p className="text-[14px] md:text-[15px] font-medium text-white/90 leading-relaxed italic">
                          "Postulación: <span className="text-white font-bold not-italic">[Tu Nombre]</span> — <span className="text-white font-bold not-italic">[Puesto]</span>"
                        </p>
                      </div>
                    </div>

                    {/* Requirements */}
                    <div className="bg-white/[0.03] rounded-3xl p-6 border border-white/5">
                      <div className="flex items-center gap-2 text-white/30 text-[10px] font-black uppercase tracking-widest mb-4">
                        <ShieldCheck size={12} />
                        Requisitos
                      </div>
                      <div className="flex items-center gap-4 text-sm font-medium text-white/70">
                        <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-white/40">
                          <FileText size={16} />
                        </div>
                        CV Actualizado (PDF preferentemente)
                      </div>
                    </div>
                  </div>

                  <div className="mt-10 space-y-6">
                    <button 
                      onClick={handleApply}
                      className={`w-full font-black py-6 rounded-[1.5rem] transition-all duration-500 transform hover:-translate-y-1 uppercase tracking-[0.25em] text-[12px] flex items-center justify-center gap-4 group/btn cursor-pointer ${
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
                      <p className="text-white/20 text-[9px] uppercase tracking-[0.3em] font-black text-center">
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
