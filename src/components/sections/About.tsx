"use client";

import Image from "next/image";
import { Activity, Clock, Shield, Globe, Award } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

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
            <span className="block text-orange font-bold text-xs tracking-[0.2em] uppercase mb-0">
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
              <p className="text-navy/70 text-[17.5px] mb-8 leading-relaxed max-w-full font-medium">
                ConsurWhite S.R.L. nació en Ingeniero White con el objetivo de conectar a las empresas del sector portuario y petroquímico de Bahía Blanca con talento local calificado. Somos una consultora de Recursos Humanos especializada en la búsqueda y evaluación de perfiles para industrias que exigen compromiso, responsabilidad y conocimiento del entorno operativo.
                <br></br><br></br>
                Nuestro diferencial es la cercanía con el territorio y el profundo entendimiento del sector, lo que nos permite ofrecer profesionales locales listos para integrarse de manera ágil y eficiente a cada equipo de trabajo.
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
                      <h4 className="text-[17.5px] font-bold text-navy mb-1">Presencia local</h4>
                      <p className="text-[15.5px] text-navy/70 leading-relaxed">Operamos en Ingeniero White, en el corazón del polo petroquímico más importante del país.</p>
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
                      <h4 className="text-[17.5px] font-bold text-navy mb-1">Mano de obra con garantía</h4>
                      <p className="text-[15.5px] text-navy/70 leading-relaxed">Solo presentamos candidatos evaluados, verificados y alineados con los requerimientos de tu empresa.</p>
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
                      <h4 className="text-[17.5px] font-bold text-navy mb-1">Proceso ágil</h4>
                      <p className="text-[15.5px] text-navy/70 leading-relaxed">Sin burocracia. Desde el primer contacto hasta la presentación de candidatos en el menor tiempo posible.</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
