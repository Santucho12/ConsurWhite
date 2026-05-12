"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";
import { useIntro } from "@/context/IntroContext";

export function CinematicIntro({ children }: { children: React.ReactNode }) {
  const [introState, setIntroState] = useState<'loading' | 'exiting' | 'done'>('loading');
  const { setIntroDone } = useIntro();

  useEffect(() => {
    // Force scroll to top on load/refresh
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
      // Disable automatic scroll restoration by the browser
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual';
      }
    }

    // Disable scrolling during intro
    document.body.style.overflow = 'hidden';

    // The logo stays for 2.5 seconds before starting the exit sequence
    const exitTimer = setTimeout(() => {
      setIntroState('exiting');
      // Re-enable scrolling slightly before it finishes
      document.body.style.overflow = '';
      // Start signaling components to animate
      setIntroDone(true);
    }, 2500);

    // Completely unmount the overlay to allow interaction after the transition
    const doneTimer = setTimeout(() => {
      setIntroState('done');
    }, 5500); // 2.5s hold + 3s fade out

    // Cleanup to prevent memory leaks if component unmounts early
    return () => {
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  // Premium Apple/Linear style easing
  const customEasing = [0.22, 1, 0.36, 1] as const;

  return (
    <>
      <AnimatePresence>
        {introState !== 'done' && (
          <motion.div
            key="cinematic-overlay"
            className={cn(
              "fixed inset-0 z-[100] flex items-center justify-center -cw-white/20",
              introState === 'exiting' && "pointer-events-none"
            )}
            style={{ backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}
            initial={{ opacity: 1 }}
            animate={{ opacity: introState === 'exiting' ? 0 : 1 }}
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
