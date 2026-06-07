"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { useLanguage } from "@/context/LanguageContext";



export function FAQ() {
  const { t } = useLanguage();
  const faqs = t.faq.items;
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
              {t.faq.badge}
            </span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-navy leading-tight tracking-tight">
              {t.faq.title}
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
