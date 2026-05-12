"use client";

import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef, ReactNode } from "react";
import { useIntro } from "@/context/IntroContext";

interface RevealProps {
  children: ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  className?: string;
}

export const Reveal = ({ children, width = "fit-content", delay = 0.25, className = "" }: RevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const { isIntroDone } = useIntro();

  useEffect(() => {
    if (isInView && isIntroDone) {
      mainControls.start("visible");
    }
  }, [isInView, isIntroDone, mainControls]);

  return (
    <div 
      ref={ref} 
      className={className}
      style={{ position: "relative", width, overflow: "visible" }}
    >
      <motion.div
        className={className.includes("h-full") ? "h-full" : ""}
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export const FadeIn = ({ children, delay = 0.25 }: { children: ReactNode; delay?: number }) => {
  const mainControls = useAnimation();
  const { isIntroDone } = useIntro();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView && isIntroDone) {
      mainControls.start("visible");
    }
  }, [isInView, isIntroDone, mainControls]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 1.2, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
};
