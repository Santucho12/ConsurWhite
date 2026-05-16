import { JoinUs } from "@/components/sections/JoinUs";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PostulatePage() {
  return (
    <main className="relative min-h-screen bg-[#FFFFFF] pt-6">
      {/* Back Button */}
      <div className="container mx-auto px-6 md:px-12 relative z-50">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-navy/40 hover:text-navy transition-colors font-bold uppercase tracking-widest text-[11px] group"
        >
          <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
          Volver al Inicio
        </Link>
      </div>

      <div className="pb-0">
        <JoinUs />
      </div>
    </main>
  );
}
