"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Reveal } from "@/components/ui/Reveal";
import { Send } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const gradientRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax effect for the background image - moving UP to avoid white space at top
      gsap.to(imageRef.current, {
        yPercent: -10,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Darken overlay on scroll - Balanced middle ground
      gsap.to(overlayRef.current, {
        opacity: 1,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "15% top", // Starts at 15% scroll
          end: "95% top",  // Finishes at 95% scroll
          scrub: true,
        },
      });

      // Fade out the white gradient to prevent ugly gray mixing
      gsap.to(gradientRef.current, {
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "10% top",
          end: "80% top",
          scrub: true,
        },
      });

      // Cinematic Fade for the content block (no movement)
      gsap.to(contentRef.current, {
        opacity: 0,
        ease: "power2.in",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "10% top", // Starts at 10%
          end: "80% top",   // Finishes at 80%
          scrub: true,
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="inicio"
      className="relative h-[125vh] w-full bg-navy"
    >
      {/* Sticky wrapper */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Background Image Container */}
        <div ref={imageRef} className="absolute top-0 left-0 z-0 h-[115%] w-full">
          <Image
            src="/ChatGPT Image 10 may 2026, 17_09_45.png"
            alt="ConsurWhite Portuario"
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        {/* Base Gradient - Always visible to ensure text legibility */}
        <div
          ref={gradientRef}
          className="absolute inset-0 z-10 bg-gradient-to-r from-white/80 from-10% via-white/40 via-40% to-transparent to-70%"
        />

        {/* Darkening Overlay - Solid Black */}
        <div
          ref={overlayRef}
          className="absolute inset-0 z-15 bg-black opacity-0 pointer-events-none"
        />

        {/* Content */}
        <div
          ref={contentRef}
          className="container mx-auto px-6 md:px-12 relative z-20 h-full flex items-center"
        >
          <div className="max-w-3xl transform translate-y-8">
            <Reveal delay={0.1}>
              <h1 className="text-[48px] md:text-[78px] font-bold text-navy leading-[1.05] mb-8 tracking-tight">
                Conectamos <br />
                <span>capital humano</span> <br />
                con empresas.
              </h1>
            </Reveal>

            <Reveal delay={0.3}>
              <h2 className="text-lg text-slate-600 font-medium max-w-xl mb-10 leading-relaxed">
                En ConsurWhite conectamos empresas del sector portuario y petroquímico de Ingeniero White con la mano de obra local calificada que necesitan. Rápido, confiable y con respaldo profesional.
              </h2>
            </Reveal>

            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Reveal delay={0.5}>
                <Link href="#alianza">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="group relative overflow-hidden bg-navy text-white px-8 py-4 rounded-full font-bold uppercase text-sm tracking-[0.1em] flex items-center justify-center gap-3 transition-shadow duration-500 shadow-xl shadow-navy/20 hover:shadow-2xl hover:shadow-navy/30 cursor-pointer w-full sm:w-auto"
                  >
                    Contratar Personal
                  </motion.button>
                </Link>
              </Reveal>
              <Reveal delay={0.6}>
                <Link href="#servicios">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="px-8 py-4 rounded-full font-bold uppercase text-sm tracking-[0.1em] text-navy bg-white/40 backdrop-blur-md border border-white/60 shadow-sm hover:shadow-md transition-shadow duration-500 cursor-pointer w-full sm:w-auto"
                  >
                    Conocer ConsurWhite
                  </motion.button>
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
