"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";
import { FadeIn } from "@/components/ui/Reveal";
import { useLenis } from "lenis/react";
import { usePathname, useRouter } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lenis = useLenis();
  const pathname = usePathname();
  const router = useRouter();
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { name: t.nav.home, href: "#inicio" },
    { name: t.nav.about, href: "#nosotros" },
    { name: t.nav.services, href: "#servicios" },
    { name: t.nav.selectionProcess, href: "#proceso-seleccion" },
    { name: t.nav.workWithUs, href: "#alianza" },
  ];

  if (pathname === '/postulate') return null;

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    // Close mobile menu and immediately unlock scroll
    setIsMobileMenuOpen(false);
    document.body.style.overflow = "unset";

    if (pathname !== '/') {
      // If not on home page, navigate to home with the hash
      router.push(`/${href}`);
      return;
    }

    // If on home page, use Lenis for smooth scroll
    setTimeout(() => {
      if (lenis) {
        lenis.scrollTo(href, {
          duration: 2.5, // Reduced from 4.5 so it's not agonizingly slow, but still very smooth
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });
      } else {
        const el = document.querySelector(href);
        if (el) {
          const y = el.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }
    }, 100); // Wait for menu exit animation to start
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

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

            <nav className="hidden lg:flex flex-1 items-center justify-center gap-8 xl:gap-10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="relative text-[0.75rem] font-bold text-navy group py-1 transition-colors uppercase tracking-[0.14em] cursor-pointer"
                >
                  <span>{link.name}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-navy transition-all duration-500 ease-out group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-3">
              <div className={cn(
                "inline-flex items-center rounded-full border-2 p-0.5 transition-all duration-300",
                isScrolled
                  ? "border-navy/30 bg-white/40 backdrop-blur-md"
                  : "border-white/60 bg-white"
              )}>
                <button
                  onClick={() => setLanguage("es")}
                  className={cn(
                    "rounded-full px-3 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.1em] transition-all duration-300",
                    language === "es"
                      ? "bg-navy text-white shadow-sm"
                      : isScrolled ? "bg-transparent text-navy" : "bg-white text-navy"
                  )}
                >
                  ES
                </button>
                <button
                  onClick={() => setLanguage("en")}
                  className={cn(
                    "rounded-full px-3 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.1em] transition-all duration-300",
                    language === "en"
                      ? "bg-navy text-white shadow-sm"
                      : isScrolled ? "bg-transparent text-navy" : "bg-white text-navy"
                  )}
                >
                  EN
                </button>
              </div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <a
                  href="#contacto"
                  onClick={(e) => handleNavClick(e, "#contacto")}
                  className={cn(
                    "group inline-flex items-center justify-center bg-navy text-white rounded-full font-bold uppercase px-8 py-3 text-[0.75rem] tracking-[0.15em] cursor-pointer",
                    isScrolled ? "shadow-md" : "shadow-[0_0_20px_rgba(26,58,82,0.2)]"
                  )}
                >
                  {t.nav.contact}
                </a>
              </motion.div>
            </div>

              {/* Mobile Menu Toggle */}
            <button
              className="md:hidden text-navy"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu size={28} />
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
            className="absolute top-full left-6 right-6 mt-4 p-8 bg-white rounded-3xl md:hidden shadow-2xl border border-navy/5 z-[110]"
          >
            <nav className="flex flex-col gap-6 items-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-lg font-bold text-navy transition-colors uppercase tracking-[0.15em] cursor-pointer"
                >
                  {link.name}
                </a>
              ))}
              <div className="w-full border-t border-navy/10 pt-6 pb-2 mt-2 flex flex-col items-center gap-4">
                <span className="text-[0.625rem] font-bold text-navy/50 uppercase tracking-[0.2em]">{t.nav.companies}</span>
                <a
                  href="#contacto"
                  onClick={(e) => handleNavClick(e, "#contacto")}
                  className="w-full text-center bg-navy text-white px-8 py-4 rounded-full text-[0.8125rem] font-bold uppercase tracking-[0.2em] shadow-xl cursor-pointer hover:bg-navy/90 transition-colors"
                >
                  {t.nav.contact}
                </a>
              </div>

              <div className="w-full border-t border-navy/10 pt-6 flex flex-col items-center gap-4">
                <span className="text-[0.625rem] font-bold text-navy/50 uppercase tracking-[0.2em]">{t.nav.joinTeam}</span>
                <Link
                  href="/postulate"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full text-center bg-transparent border border-navy/30 text-navy px-8 py-4 rounded-full text-[0.8125rem] font-bold uppercase tracking-[0.2em] cursor-pointer hover:bg-navy/5 transition-colors"
                >
                  {t.nav.apply}
                </Link>
              </div>

              <div className="w-full border-t border-navy/10 pt-6 flex flex-col items-center gap-4">
                <button
                  onClick={() => setLanguage(language === "es" ? "en" : "es")}
                  className="w-full text-center border border-navy/30 text-navy px-8 py-4 rounded-full text-[0.8125rem] font-bold uppercase tracking-[0.2em] cursor-pointer hover:bg-navy/5 transition-colors"
                >
                  {language === "es" ? "EN - English" : "ES - Español"}
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
