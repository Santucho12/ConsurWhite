import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { SelectionProcess } from "@/components/sections/SelectionProcess";
import { WorkWithCompanies } from "@/components/sections/ClientWorkflow";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { CareersCTA } from "@/components/sections/CareersCTA";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <SelectionProcess />
      <WorkWithCompanies />
      <FAQ />
      <Contact />
      <CareersCTA />
      <Footer />
    </main>
  );
}
