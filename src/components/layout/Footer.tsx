"use client";

import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white pt-10 lg:pt-16 pb-8 text-navy relative overflow-hidden border-t border-navy/5 shadow-[0_-4px_20px_rgba(0,0,0,0.02)]">
      {/* Decorative background element */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-navy/[0.01] rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-8 lg:mb-12">
          
          {/* Brand Column */}
          <div className="flex flex-col items-center lg:items-center text-center">
            <Link href="/" className="mb-6 block group">
              <Logo variant="footer" className="transition-transform duration-500 group-hover:scale-105" />
            </Link>
            <p className="text-navy/60 text-[0.9375rem] leading-relaxed max-w-sm mb-6 italic">
              "Liderando la conexión entre el talento local y las potencias industriales de la región."
            </p>
            <div className="flex gap-3 justify-center">
              {[
                { 
                  name: "Instagram",
                  href: "#", 
                  hover: "hover:bg-[#E4405F]",
                  icon: (
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  )
                },
                { 
                  name: "LinkedIn",
                  href: "#", 
                  hover: "hover:bg-[#0077B5]",
                  icon: (
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  )
                },
                { 
                  name: "WhatsApp",
                  href: "#", 
                  hover: "hover:bg-[#25D366]",
                  icon: (
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.407 3.481 2.239 2.24 3.477 5.221 3.475 8.397-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.301-.15-1.785-.881-2.06-.981-.278-.1-.48-.15-.679.15-.199.301-.768.979-.941 1.179-.173.199-.347.225-.648.075-.301-.15-1.27-.468-2.42-1.493-.893-.795-1.496-1.777-1.671-2.078-.174-.301-.019-.462.132-.612.135-.135.301-.351.451-.526.15-.175.2-.301.3-.501.1-.199.05-.376-.025-.526-.075-.15-.679-1.636-.931-2.24-.246-.587-.497-.508-.679-.517-.176-.008-.376-.01-.576-.01-.2 0-.526.075-.801.376-.275.301-1.051 1.028-1.051 2.508 0 1.48 1.077 2.909 1.227 3.109.15.199 2.12 3.236 5.135 4.54.717.31 1.277.495 1.711.633.721.23 1.375.197 1.892.121.577-.085 1.785-.73 2.035-1.435.25-.705.25-1.307.175-1.435-.075-.125-.276-.199-.577-.35z"/>
                    </svg>
                  )
                },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={cn(
                    "w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm border border-navy/5",
                    "bg-white text-navy/60 hover:text-white hover:shadow-lg hover:border-transparent",
                    social.hover
                  )}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="hidden md:flex flex-col items-center text-center">
            <div className="w-full">
              <h4 className="text-navy font-black uppercase tracking-[0.2em] text-[0.625rem] mb-6 flex justify-center items-center gap-2">
                Navegación
              </h4>
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
                      className="text-navy/50 hover:text-navy transition-all duration-300 text-[0.8125rem] font-bold uppercase tracking-wider block"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Info Column */}
          <div className="flex flex-col items-center text-center lg:items-center">
            <h4 className="text-navy font-black uppercase tracking-[0.2em] text-[0.625rem] mb-6 flex items-center justify-center gap-2">
              Contacto Directo
            </h4>
            <div className="space-y-4">
              {[
                { icon: MapPin, label: "Ubicación", value: "Ingeniero White, Bahía Blanca" },
                { icon: Phone, label: "Teléfono", value: "+54 9 291 533-6645" },
                { icon: Mail, label: "Email", value: "administracion@consurwhite.com" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 group text-left">
                  <div className="w-11 h-11 rounded-full bg-white border border-navy/5 flex items-center justify-center text-orange shrink-0 transition-transform duration-300 group-hover:scale-110 shadow-sm">
                    <item.icon size={20} />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[0.625rem] font-black uppercase tracking-[0.15em] text-navy/30 mb-1 leading-none">
                      {item.label}
                    </p>
                    <p className="text-[0.875rem] text-navy font-bold leading-none">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-navy/5 flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-center">
            <p className="text-navy/30 text-[0.6875rem] font-medium tracking-wide">
              © {currentYear} CONSURWHITE S.R.L.
            </p>
            <div className="hidden md:block h-3 w-px bg-navy/10" />
            <p className="text-navy/30 text-[0.6875rem] font-medium tracking-wide uppercase">
              Ingeniero White, Argentina
            </p>
          </div>
          
        </div>
      </div>
    </footer>
  );
}
