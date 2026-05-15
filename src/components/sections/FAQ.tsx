"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const faqs = [
  {
    question: "¿Cuánto tiempo tarda el proceso de selección?",
    answer: "Depende del perfil y la urgencia. En general, en 5 a 10 días hábiles podemos presentarte candidatos preseleccionados. Para perfiles muy específicos o técnicos, el plazo puede extenderse. Siempre te mantenemos informado del avance."
  },
  {
    question: "¿Solo trabajan con empresas del sector portuario o petroquímico?",
    answer: "Nuestra especialidad es ese sector porque conocemos el territorio y los perfiles. Sin embargo, también podemos acompañar empresas de otros rubros industriales o comerciales en Bahía Blanca y la región."
  },
  {
    question: "¿Cuál es el costo del servicio?",
    answer: "El costo varía según el tipo de búsqueda, la cantidad de posiciones y la complejidad del perfil. Contactanos y te preparamos una propuesta sin compromiso."
  },
  {
    question: "¿Qué pasa si el candidato no funciona?",
    answer: "Trabajamos con garantía. Si el candidato incorporado no supera el período de prueba acordado, realizamos una nueva búsqueda sin costo adicional. Los detalles se establecen en el contrato."
  },
  {
    question: "¿Tienen base de datos de candidatos o buscan desde cero?",
    answer: "Contamos con una red de contactos en el sector y publicamos búsquedas activas. Cada proceso de selección es a medida: no enviamos CVs genéricos, evaluamos y filtramos según los requisitos de tu empresa."
  },
  {
    question: "¿Cómo me contacto para iniciar una búsqueda?",
    answer: "Podés escribirnos por WhatsApp, completar el formulario en esta página, o enviarnos un correo. En menos de 24 horas nos ponemos en contacto."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="pt-12 pb-16 md:pt-20 md:pb-24 bg-[#F4F6F8] overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Reveal delay={0.2} width="100%">
            <span className="block text-orange font-bold text-xs tracking-[0.2em] uppercase mb-0">
              LO QUE NECESITAS SABER
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-tight tracking-tight">
              Preguntas frecuentes
            </h2>
          </Reveal>
        </div>

        {/* FAQ List Section */}
        <div className="max-w-3xl mx-auto flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <Reveal key={index} delay={index * 0.1} width="100%">
                <div 
                  className={`bg-white rounded-2xl transition-all duration-300 border ${
                    isOpen 
                      ? "border-navy/10 shadow-lg shadow-navy/5" 
                      : "border-transparent shadow-sm hover:border-navy/5 hover:shadow-md"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-4 md:px-6 md:py-4 text-left transition-all duration-300 gap-4"
                  >
                    <span className={`text-sm md:text-base font-bold tracking-tight transition-colors duration-300 text-navy`}>
                      {faq.question}
                    </span>
                    
                    <div className={`shrink-0 w-8 h-8 rounded-full border border-navy/10 flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.87,0,0.13,1)] ${
                      isOpen ? "rotate-180 bg-navy text-white border-navy" : "bg-transparent text-navy/40"
                    }`}>
                      <ChevronDown size={16} strokeWidth={3} />
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 md:px-6 pb-4 md:pb-6 pt-0">
                          <p className="text-navy/60 text-[13px] md:text-[14px] leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>


      </div>
    </section>
  );
}
