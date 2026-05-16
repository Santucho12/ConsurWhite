"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";
import { useIntro } from "@/context/IntroContext";
import { usePathname } from "next/navigation";

export function CinematicIntro({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isPostulatePage = pathname?.includes("/postulate");
  
  const { setIntroDone } = useIntro();
  const [introState, setIntroState] = useState<'loading' | 'exiting' | 'done'>(
    isPostulatePage ? 'done' : 'loading'
  );

  useEffect(() => {
    // Immediate bypass for postulate page
    if (isPostulatePage) {
      setIntroState('done');
      setIntroDone(true);
      document.body.style.overflow = '';
      return;
    }

    // Reset intro when returning to home page
    if (pathname === '/') {
      setIntroState('loading');
      setIntroDone(false);
      
      // Disable scrolling during intro
      document.body.style.overflow = 'hidden';

      const exitTimer = setTimeout(() => {
        setIntroState('exiting');
        document.body.style.overflow = '';
        setIntroDone(true);
      }, 2500);

      const doneTimer = setTimeout(() => {
        setIntroState('done');
      }, 5500);

      return () => {
        clearTimeout(exitTimer);
        clearTimeout(doneTimer);
      };
    } else {
      // Immediate skip for other pages
      setIntroState('done');
      setIntroDone(true);
      document.body.style.overflow = '';
    }
  }, [pathname, setIntroDone, isPostulatePage]);

  useEffect(() => {
    // Force scroll to top on load/refresh
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual';
      }
    }
  }, [pathname]);

  // Premium Apple/Linear style easing
  const customEasing = [0.22, 1, 0.36, 1] as const;

  return (
    <>
      <AnimatePresence mode="wait">
        {introState !== "done" && (
          <motion.div
            key="cinematic-overlay"
            className={cn(
              "fixed inset-0 z-[9999] flex items-center justify-center bg-white/5",
              introState === "exiting" && "pointer-events-none"
            )}
            style={{ 
              backdropFilter: 'blur(20px)', 
              WebkitBackdropFilter: 'blur(20px)' 
            }}
            initial={{ opacity: 1 }}
            animate={{ opacity: introState === "exiting" ? 0 : 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 3, ease: customEasing }}
          >
            {/* Logo Container - Progressive Reveal Loader */}
            <motion.div
              initial={{ 
                clipPath: "inset(0 100% 0 0)", 
                opacity: 0, 
                scale: 2.8 
              }}
              animate={{ 
                clipPath: "inset(0 0% 0 0)",
                opacity: introState === 'exiting' ? 0 : 1, 
                scale: 2.8
              }}
              transition={{ 
                clipPath: { duration: 2.5, ease: customEasing },
                opacity: { duration: introState === 'exiting' ? 2.5 : 0.5, ease: customEasing },
                scale: { duration: 2.5, ease: customEasing }
              }}
              className="relative z-10 -translate-y-[20px]"
            >
              <div className="drop-shadow-2xl">
                <Logo />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content - No wrapper to preserve position: fixed for Navbar */}
      {children}
    </>
  );
}
