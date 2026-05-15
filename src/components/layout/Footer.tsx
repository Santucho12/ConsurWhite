"use client";

import Link from "next/link";
import { Instagram, Linkedin, MessageCircle } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy pt-20 pb-10 text-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <Link href="/" className="mb-8 block">
              <Logo variant="footer" />
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Especialistas en consultoría de Recursos Humanos para el sector industrial, portuario y petroquímico.
            </p>
          </div>

          <div>
            <h4 className="text-orange font-bold uppercase tracking-widest text-xs mb-8">Navegación</h4>
            <ul className="space-y-4">
              {[
                { name: "Inicio", href: "/#inicio" },
                { name: "Sobre Nosotros", href: "/#nosotros" },
                { name: "Servicios", href: "/#servicios" },
                { name: "Postulantes", href: "/postulate" },
                { name: "Contacto", href: "/#contacto" }
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href} 
                    className="text-white/60 hover:text-orange transition-colors text-sm font-medium"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-orange font-bold uppercase tracking-widest text-xs mb-8">Legal</h4>
            <ul className="space-y-4">
              {["Privacidad", "Términos de Servicio", "Cookies"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-white/60 hover:text-orange transition-colors text-sm font-medium">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-orange font-bold uppercase tracking-widest text-xs mb-8">Redes Sociales</h4>
            <div className="flex gap-4">
              {[
                { icon: Instagram, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: MessageCircle, href: "#" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-10 h-10 rounded-full border text-white/10 flex items-center justify-center text-white/60 hover:text-orange hover:border-orange transition-all duration-300"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t text-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-xs">
            © {currentYear} ConsurWhite S.R.L. Todos los derechos reservados.
          </p>
          <p className="text-white/30 text-xs flex items-center gap-1">
            Diseñado con <span className="text-orange">♥</span> en Bahía Blanca
          </p>
        </div>
      </div>
    </footer>
  );
}
