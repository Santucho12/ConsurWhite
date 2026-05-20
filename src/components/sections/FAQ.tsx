"use client";

import { useState, useEffect } from "react";
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
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    if (window.innerWidth >= 768) {
      setOpenIndex(0);
    }
  }, []);

  return (
    <section id="faq" className="pt-12 pb-16 md:pt-20 md:pb-24 bg-[#F4F6F8] overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Reveal delay={0.2} width="100%">
            <span className="block text-orange font-bold text-[0.625rem] md:text-xs tracking-[0.2em] uppercase mb-0">
              LO QUE NECESITAS SABER
            </span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-navy leading-tight tracking-tight">
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
                  className={`bg-white rounded-[20px] transition-all duration-400 border overflow-hidden ${
                    isOpen 
                      ? "border-navy/10 shadow-[0_8px_30px_rgb(0,0,0,0.06)]" 
                      : "border-navy/5 shadow-sm hover:border-navy/15 hover:shadow-md"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-5 md:px-7 md:py-5 text-left transition-all duration-300 gap-4 group"
                  >
                    <span className="text-[0.9375rem] md:text-[1rem] font-bold tracking-tight transition-colors duration-300 text-navy">
                      {faq.question}
                    </span>
                    
                    <div className={`shrink-0 w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.87,0,0.13,1)] ${
                      isOpen ? "rotate-180 bg-navy text-white border-navy shadow-md" : "bg-white text-navy border-navy/20 group-hover:bg-navy/5"
                    }`}>
                      <ChevronDown size={18} strokeWidth={2.5} />
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <div className="px-5 md:px-7 pb-6 pt-0">
                          <p className="text-navy text-[0.875rem] md:text-[0.9375rem] leading-relaxed">
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
