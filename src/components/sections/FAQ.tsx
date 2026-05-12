"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const faqs = [
  {
    question: "¿En qué industrias se especializan?",
    answer: "Nuestra especialización principal es el sector portuario y petroquímico de la región de Bahía Blanca e Ingeniero White, aunque brindamos servicios a empresas de logística e industria pesada en general."
  },
  {
    question: "¿Qué tipos de perfiles suelen reclutar?",
    answer: "Desde mandos medios y gerenciales hasta perfiles técnicos altamente especializados (ingenieros, técnicos químicos, operadores de planta, especialistas en seguridad industrial y medio ambiente)."
  },
  {
    question: "¿Cómo garantizan la calidad de los candidatos?",
    answer: "Implementamos un proceso de validación de 3 etapas: 1) Análisis técnico de antecedentes, 2) Entrevistas por competencias, 3) Evaluaciones psicotécnicas a medida de la cultura organizacional del cliente."
  },
  {
    question: "¿Realizan búsquedas fuera de Bahía Blanca?",
    answer: "Sí, aunque nuestra base es local, contamos con una red nacional para captar talentos que deseen radicarse en la zona o para posiciones remotas en áreas de soporte administrativo y técnico."
  },
  {
    question: "¿Cuánto tiempo toma un proceso de búsqueda promedio?",
    answer: "Un proceso estándar de selección demora entre 15 y 30 días, dependiendo de la especificidad técnica del perfil y la urgencia del requerimiento."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-32 -cw-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
          <div className="lg:col-span-1">
            <Reveal delay={0.1}>
              <span className="-cw-orange font-bold uppercase tracking-widest text-xs mb-4 block">Preguntas Frecuentes</span>
            </Reveal>
            <Reveal delay={0.2}>
              <h2 className="text-4xl font-bold -cw-blue mb-6">Claridad y <br />Transparencia</h2>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="-cw-blue/60 leading-relaxed">
                Respondemos a las inquietudes más comunes de nuestros clientes y candidatos para establecer una base de confianza desde el primer contacto.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-2 space-y-4">
            {faqs.map((faq, index) => (
              <Reveal key={index} delay={index * 0.1} width="100%">
                <div className="overflow-hidden">
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className={`w-full flex items-center justify-between p-8 text-left transition-all duration-300 rounded-[24px] ${
                      openIndex === index ? "-cw-blue -cw-white shadow-xl" : "-cw-blue/5 -cw-blue hover:-cw-blue/10"
                    }`}
                  >
                    <span className="text-lg font-bold">{faq.question}</span>
                    {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                  </button>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                      >
                        <div className="p-8 -cw-blue/70 leading-relaxed -cw-white">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
