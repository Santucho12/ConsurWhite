import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/layout/SmoothScroll";

import { CinematicIntro } from "@/components/layout/CinematicIntro";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "CONSURWHITE S.R.L",
  description: "Consultora de Recursos Humanos en Ingeniero White, Bahía Blanca. Conectamos empresas del sector industrial con mano de obra local calificada. Seriedad, responsabilidad y respaldo profesional.",
  keywords: ["RRHH", "Portuario", "Petroquímico", "Bahía Blanca", "Ingeniero White", "Consultoría", "Búsqueda de Talentos"],
  authors: [{ name: "ConsurWhite S.R.L." }],
  openGraph: {
    title: "CONSURWHITE",
    description: "Conectamos capital humano con la industria de Bahía Blanca y la región.",
    type: "website",
    locale: "es_AR",
  },
  twitter: {
    card: "summary_large_image",
    title: "CONSURWHITE",
    description: "Conectamos capital humano con la industria de Bahía Blanca y la región.",
  },
  icons: {
    icon: "/logo SOLO 512px 512px.svg",
    shortcut: "/logo SOLO 512px 512px.svg",
    apple: "/logo SOLO 512px 512px.svg",
  },
};

import { IntroProvider } from "@/context/IntroContext";
import { LanguageProvider } from "@/context/LanguageContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${outfit.variable} font-sans antialiased bg-cw-blue`} suppressHydrationWarning>
        <LanguageProvider>
          <IntroProvider>
            <CinematicIntro>
              <SmoothScroll>
                {children}
                <WhatsAppButton />
              </SmoothScroll>
            </CinematicIntro>
          </IntroProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}

