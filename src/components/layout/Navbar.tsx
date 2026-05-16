"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";
import { FadeIn } from "@/components/ui/Reveal";

const navLinks = [
  { name: "Inicio", href: "/#inicio" },
  { name: "Sobre nosotros", href: "/#nosotros" },
  { name: "Servicios", href: "/#servicios" },
  { name: "Proceso de Selección", href: "/#proceso-seleccion" },
  { name: "Cómo trabajamos", href: "/#alianza" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className="fixed top-0 left-0 w-full z-[100] transition-all duration-[650ms] px-0 pt-4"
    >
      <FadeIn delay={0.1}>
        <div className="flex justify-center w-full px-4 md:px-0">
          <div
            className={cn(
              "w-full transition-all duration-[650ms] overflow-visible flex items-center justify-between h-20 px-8 md:px-12 rounded-full",
              isScrolled 
                ? "max-w-7xl bg-white/40 backdrop-blur-md border border-white/60 shadow-xl" 
                : "max-w-[94rem] bg-transparent border-transparent"
            )}
          >
            <Link href="/" className="hover:opacity-90 transition-opacity shrink-0">
              <Logo />
            </Link>

            {/* Desktop Nav - Centered Links */}
            <nav className="hidden lg:flex flex-1 items-center justify-center gap-8 xl:gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative text-[12px] font-bold text-navy group py-1 transition-colors uppercase tracking-[0.14em]"
                >
                  <span>{link.name}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-navy transition-all duration-500 ease-out group-hover:w-full" />
                </Link>
              ))}
            </nav>

            {/* Desktop Action Button */}
            <div className="hidden md:block">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <Link
                  href="#contacto"
                  className={cn(
                    "group inline-flex items-center justify-center bg-navy text-white rounded-full font-bold uppercase px-8 py-3 text-[12px] tracking-[0.15em]",
                    isScrolled ? "shadow-md" : "shadow-[0_0_20px_rgba(26,58,82,0.2)]"
                  )}
                >
                  Contacto
                </Link>
              </motion.div>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden text-navy"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </FadeIn>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-6 right-6 mt-4 p-8 glass rounded-3xl md:hidden shadow-deep"
          >
            <nav className="flex flex-col gap-6 items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-bold text-navy transition-colors uppercase tracking-[0.15em]"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="#contacto"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-center bg-navy text-white px-8 py-4 rounded-full text-[13px] font-bold uppercase tracking-[0.2em] shadow-xl"
              >
                Contacto
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
