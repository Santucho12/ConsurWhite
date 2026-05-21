"use client";

import Image from "next/image";
import { Activity, Clock, Shield, Globe, Award, Users, CheckCircle, Timer } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { useRef, useEffect } from "react";
import { animate, useInView } from "framer-motion";

function AnimatedCounter({ to }: { to: number }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView && nodeRef.current) {
      const controls = animate(0, to, {
        duration: 1.5,
        ease: "easeOut",
        onUpdate(value) {
          if (nodeRef.current) {
            nodeRef.current.textContent = Math.round(value).toString();
          }
        },
      });
      return () => controls.stop();
    }
  }, [to, isInView]);

  return <span ref={nodeRef}>0</span>;
}

export function About() {
  return (
    <section
      id="nosotros"
      className="relative z-30 pt-20 md:pt-28 pb-16 md:pb-24 bg-[#F4F6F8] overflow-hidden"
    >
      <div className="container mx-auto px-6 md:px-12 relative z-10">

        {/* New Centered Header Style */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Reveal delay={0.2} width="100%">
            <span className="block text-orange font-bold text-[0.625rem] md:text-xs tracking-[0.2em] uppercase mb-0">
              CONOCENOS
            </span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-navy leading-tight tracking-tight">
              Sobre nosotros
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="relative -translate-y-[10px]">
            <Reveal delay={0.2} width="100%">
              <div className="relative rounded-[32px] overflow-hidden shadow-xl aspect-[4/3.3]">
                <Image
                  src="/hr_interview_premium_1778369464284.png"
                  alt="Equipo ConsurWhite"
                  width={800}
                  height={600}
                  className="object-cover object-center hover:scale-105 transition-transform duration-1000 w-full h-full"
                />
              </div>
            </Reveal>

            {/* Decorative background circle */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-orange/5 rounded-full blur-3xl z-[-1]" />
          </div>

          <div className="flex flex-col">

            <Reveal delay={0.3}>
              <p className="text-navy/70 text-[1.09375rem] mb-8 leading-relaxed max-w-full font-medium">
                ConsurWhite S.R.L. nació en Ingeniero White con un objetivo claro: ser el puente entre las empresas del sector industrial de Bahía Blanca y la región y el talento local que está listo para trabajar. Somos una consultora de Recursos Humanos especializada en la búsqueda, evaluación y presentación de perfiles para industrias que exigen seriedad, responsabilidad y conocimiento del territorio: desde el polo petroquímico y el sector portuario hasta industrias metalúrgicas, agroindustriales, energéticas y logísticas.
                <br></br><br></br>
                Nuestro diferencial no es solo técnico: es la cercanía. Conocemos la zona, conocemos las industrias y entendemos lo que cada empresa necesita. Eso nos permite ofrecer candidatos locales, evaluados y listos para integrarse de manera ágil y eficiente a cada equipo de trabajo.
              </p>
            </Reveal>

            {/* Feature list - The 3 Pillars */}
            <div className="flex flex-col gap-5 mb-8">
              <Reveal delay={0.4}>
                <div className="group relative pl-5 transition-all duration-500 hover:translate-x-2 cursor-default">
                  <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-navy/10 rounded-full group-hover:bg-orange transition-colors duration-500"></div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white border border-navy/5 shadow-sm flex items-center justify-center shrink-0 text-navy group-hover:text-orange group-hover:shadow-md group-hover:border-orange/20 transition-all duration-500">
                      <Shield className="w-4 h-4" />
                    </div>
                    <div className="pt-0.5">
                      <h4 className="text-[1.09375rem] font-bold text-navy mb-1">Presencia local</h4>
                      <p className="text-[0.96875rem] text-navy/70 leading-relaxed">Operamos desde Ingeniero White, en el corazón del polo industrial y petroquímico más importante del país, con alcance en toda Bahía Blanca y la región.</p>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.5}>
                <div className="group relative pl-5 transition-all duration-500 hover:translate-x-2 cursor-default">
                  <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-navy/10 rounded-full group-hover:bg-orange transition-colors duration-500"></div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white border border-navy/5 shadow-sm flex items-center justify-center shrink-0 text-navy group-hover:text-orange group-hover:shadow-md group-hover:border-orange/20 transition-all duration-500">
                      <Activity className="w-4 h-4" />
                    </div>
                    <div className="pt-0.5">
                      <h4 className="text-[1.09375rem] font-bold text-navy mb-1">Mano de obra con garantía</h4>
                      <p className="text-[0.96875rem] text-navy/70 leading-relaxed">Solo presentamos candidatos evaluados, verificados y alineados con los requerimientos de tu empresa.</p>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.6}>
                <div className="group relative pl-5 transition-all duration-500 hover:translate-x-2 cursor-default">
                  <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-navy/10 rounded-full group-hover:bg-orange transition-colors duration-500"></div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white border border-navy/5 shadow-sm flex items-center justify-center shrink-0 text-navy group-hover:text-orange group-hover:shadow-md group-hover:border-orange/20 transition-all duration-500">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div className="pt-0.5">
                      <h4 className="text-[1.09375rem] font-bold text-navy mb-1">Proceso ágil</h4>
                      <p className="text-[0.96875rem] text-navy/70 leading-relaxed">Sin burocracia. Desde el primer contacto hasta la presentación de candidatos en el menor tiempo posible.</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

          </div>
        </div>

        {/* Stats Badges Full Width */}
        <div className="mt-2 sm:mt-4 w-full">
          <Reveal delay={0.7} width="100%">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8 border-t border-navy/10 pt-6">
              {/* Badge 1 */}
              <div className="flex flex-col items-center p-5 md:p-8 rounded-2xl md:rounded-3xl bg-white border border-navy/5 shadow-md hover:shadow-lg transition-all group">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-orange/10 text-orange flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform">
                  <Users className="w-6 h-6 md:w-7 md:h-7" />
                </div>
                <div className="text-4xl md:text-5xl font-black text-navy leading-none mb-1 md:mb-2 tracking-tight flex items-center">
                  +<AnimatedCounter to={10} />
                </div>
                <div className="text-[0.6875rem] md:text-[0.8125rem] font-bold text-navy/60 uppercase tracking-widest text-center leading-relaxed">
                  Clientes<br />satisfechos
                </div>
              </div>

              {/* Badge 2 */}
              <div className="flex flex-col items-center p-5 md:p-8 rounded-2xl md:rounded-3xl bg-white border border-navy/5 shadow-md hover:shadow-lg transition-all group">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-orange/10 text-orange flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform">
                  <CheckCircle className="w-6 h-6 md:w-7 md:h-7" />
                </div>
                <div className="text-4xl md:text-5xl font-black text-navy leading-none mb-1 md:mb-2 tracking-tight flex items-center">
                  +<AnimatedCounter to={18} />
                </div>
                <div className="text-[0.6875rem] md:text-[0.8125rem] font-bold text-navy/60 uppercase tracking-widest text-center leading-relaxed">
                  Proyectos<br />completados
                </div>
              </div>

              {/* Badge 3 */}
              <div className="flex flex-col items-center p-5 md:p-8 rounded-2xl md:rounded-3xl bg-white border border-navy/5 shadow-md hover:shadow-lg transition-all group">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-orange/10 text-orange flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform">
                  <Timer className="w-6 h-6 md:w-7 md:h-7" />
                </div>
                <div className="text-4xl md:text-5xl font-black text-navy leading-none mb-1 md:mb-2 tracking-tight flex items-center">
                  +<AnimatedCounter to={3000} />
                </div>
                <div className="text-[0.6875rem] md:text-[0.8125rem] font-bold text-navy/60 uppercase tracking-widest text-center leading-relaxed">
                  Horas de<br />acompañamiento
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
