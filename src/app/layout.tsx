import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/layout/SmoothScroll";

import { CinematicIntro } from "@/components/layout/CinematicIntro";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "CONSURWHITE S.R.L",
  description: "Especialistas en Recursos Humanos para el sector portuario y petroquímico en Ingeniero White, Bahía Blanca. Profesionalismo, modernidad y experiencia premium.",
  keywords: ["RRHH", "Portuario", "Petroquímico", "Bahía Blanca", "Ingeniero White", "Consultoría", "Búsqueda de Talentos"],
  authors: [{ name: "ConsurWhite S.R.L." }],
  openGraph: {
    title: "CONSURWHITE",
    description: "Conectamos Capital Humano con Grandes Industrias en el sector portuario.",
    type: "website",
    locale: "es_AR",
  },
  icons: {
    icon: "/logo SOLO 512px 512px.svg",
    shortcut: "/logo SOLO 512px 512px.svg",
    apple: "/logo SOLO 512px 512px.svg",
  },
};

import { IntroProvider } from "@/context/IntroContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${montserrat.variable} font-sans antialiased bg-cw-blue`} suppressHydrationWarning>
        <IntroProvider>
          <CinematicIntro>
            <SmoothScroll>
              {children}
              <WhatsAppButton />
            </SmoothScroll>
          </CinematicIntro>
        </IntroProvider>
      </body>
    </html>
  );
}

