"use client";

import Image from "next/image";
import { Activity, Clock, Shield, Globe, Award } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export function About() {
  return (
    <section
      id="nosotros"
      className="relative z-30 pt-32 pb-16 bg-white overflow-hidden"
    >
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <Reveal delay={0.2}>
              <div className="relative rounded-[40px] overflow-hidden shadow-2xl -translate-y-5">
                <Image
                  src="/hr_interview_premium_1778369464284.png"
                  alt="Equipo ConsurWhite"
                  width={800}
                  height={1000}
                  className="object-cover hover:scale-105 transition-transform duration-1000 aspect-[4/3.8]"
                />
              </div>
            </Reveal>

            {/* Decorative background circle */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-orange/5 rounded-full blur-3xl z-[-1]" />
          </div>

          <div className="flex flex-col">
            <Reveal delay={0.2}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-navy mb-8 leading-[1.05] tracking-tighter">
                Sobre nosotros

              </h2>
            </Reveal>

            <Reveal delay={0.3}>
              <p className="text-navy/70 text-[17px] mb-12 leading-relaxed max-w-xl font-medium">
                ConsurWhite S.R.L. nació en Ingeniero White con el objetivo de conectar a las empresas del sector portuario y petroquímico de Bahía Blanca con talento local calificado. Somos una consultora de Recursos Humanos especializada en la búsqueda y evaluación de perfiles para industrias que exigen compromiso, responsabilidad y conocimiento del entorno operativo.
                <br></br><br></br>
                Nuestro diferencial es la cercanía con el territorio y el profundo entendimiento del sector, lo que nos permite ofrecer profesionales locales listos para integrarse de manera ágil y eficiente a cada equipo de trabajo.
              </p>
            </Reveal>

            {/* Feature list - The 3 Pillars */}
            <div className="flex flex-col gap-3 mb-12">
              <Reveal delay={0.4}>
                <div className="flex items-center gap-4 p-3.5 bg-navy/[0.03] rounded-xl border border-navy/5 group hover:bg-white hover:shadow-xl transition-all duration-500">
                  <div className="w-9 h-9 rounded-lg bg-navy/5 flex items-center justify-center shrink-0 group-hover:bg-navy group-hover:text-white transition-colors">
                    <Shield className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy text-sm mb-0.5">Presencia local</h4>
                    <p className="text-[12px] text-navy/60 leading-tight">Operamos en Ingeniero White, en el corazón del polo petroquímico más importante del país.</p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.5}>
                <div className="flex items-center gap-4 p-3.5 bg-navy/[0.03] rounded-xl border border-navy/5 group hover:bg-white hover:shadow-xl transition-all duration-500">
                  <div className="w-9 h-9 rounded-lg bg-navy/5 flex items-center justify-center shrink-0 group-hover:bg-navy group-hover:text-white transition-colors">
                    <Activity className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy text-sm mb-0.5">Mano de obra con garantía</h4>
                    <p className="text-[12px] text-navy/60 leading-tight">Solo presentamos candidatos evaluados, verificados y alineados con los requerimientos de tu empresa.</p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.6}>
                <div className="flex items-center gap-4 p-3.5 bg-navy/[0.03] rounded-xl border border-navy/5 group hover:bg-white hover:shadow-xl transition-all duration-500">
                  <div className="w-9 h-9 rounded-lg bg-navy/5 flex items-center justify-center shrink-0 group-hover:bg-navy group-hover:text-white transition-colors">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy text-sm mb-0.5">Proceso ágil</h4>
                    <p className="text-[12px] text-navy/60 leading-tight">Sin burocracia. Desde el primer contacto hasta la presentación de candidatos en el menor tiempo posible.</p>
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
