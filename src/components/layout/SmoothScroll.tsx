"use client";

import { ReactLenis } from "lenis/react";
import { ReactNode } from "react";
import { useIntro } from "@/context/IntroContext";

export function SmoothScroll({ children }: { children: ReactNode }) {
  const { isIntroDone } = useIntro();

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.035,
        duration: 2.1,
        smoothWheel: isIntroDone,
      }}
    >
      {children}
    </ReactLenis>
  );
}
