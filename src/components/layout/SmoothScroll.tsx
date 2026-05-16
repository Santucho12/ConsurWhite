"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { ReactNode, useEffect } from "react";
import { useIntro } from "@/context/IntroContext";
import { usePathname } from "next/navigation";

export function SmoothScroll({ children }: { children: ReactNode }) {
  const { isIntroDone } = useIntro();
  const pathname = usePathname();
  const lenis = useLenis();

  // Scroll to top on route change
  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    }
  }, [pathname, lenis]);

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
