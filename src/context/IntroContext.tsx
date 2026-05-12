"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface IntroContextType {
  isIntroDone: boolean;
  setIntroDone: (done: boolean) => void;
}

const IntroContext = createContext<IntroContextType | undefined>(undefined);

export function IntroProvider({ children }: { children: ReactNode }) {
  const [isIntroDone, setIsIntroDone] = useState(false);

  return (
    <IntroContext.Provider value={{ isIntroDone, setIntroDone: setIsIntroDone }}>
      {children}
    </IntroContext.Provider>
  );
}

export function useIntro() {
  const context = useContext(IntroContext);
  if (context === undefined) {
    throw new Error("useIntro must be used within an IntroProvider");
  }
  return context;
}
