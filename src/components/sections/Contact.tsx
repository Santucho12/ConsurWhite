"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, Instagram, Linkedin, MessageCircle } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const contactSchema = z.object({
  nombre: z.string().min(2, "El nombre es requerido"),
  empresa: z.string().optional(),
  email: z.string().email("Email inválido"),
  mensaje: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormValues) => {
    console.log(data);
    // Handle form submission
    alert("¡Mensaje enviado con éxito!");
  };

  return (
    <section id="contacto" className="py-12 md:py-16 relative overflow-hidden bg-[#F4F6F8]">
      {/* Background blobs */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-orange/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-navy/5 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6 md:px-12">
        {/* New Centered Header Style */}
        <div className="max-w-4xl mx-auto text-center mb-10">
          <Reveal delay={0.2} width="100%">
            <span className="block text-orange font-bold text-xs tracking-[0.2em] uppercase mb-0">
              CONTÁCTENOS
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-tight tracking-tight">
              Construyamos su próximo <br className="hidden md:block" /> gran equipo.
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>


            <div className="space-y-6">
              {[
                { icon: Phone, label: "Teléfono", value: "+54 291 456-7890", href: "tel:+542914567890" },
                { icon: Mail, label: "Email", value: "contacto@consurwhite.com.ar", href: "mailto:contacto@consurwhite.com.ar" },
                { icon: MapPin, label: "Ubicación", value: "Calle Belgrano 123, Ingeniero White, Bahía Blanca", href: "#" },
              ].map((item, index) => (
                <Reveal key={item.label} delay={0.4 + index * 0.1}>
                  <a href={item.href} className="flex items-center gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-navy/5 flex items-center justify-center text-navy group-hover:bg-navy group-hover:text-white transition-all duration-500">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-navy/50 uppercase tracking-widest mb-1">{item.label}</p>
                      <p className="text-lg font-bold text-navy">{item.value}</p>
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>

            <div className="flex gap-4 mt-12">
              {[
                { icon: Instagram, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: MessageCircle, href: "https://wa.me/542914567890" },
              ].map((social, i) => (
                <Reveal key={i} delay={0.7 + i * 0.1}>
                  <a
                    href={social.href}
                    className="w-12 h-12 rounded-full border border-navy/10 flex items-center justify-center text-navy hover:bg-navy hover:border-navy hover:text-white transition-all duration-500"
                  >
                    <social.icon size={20} />
                  </a>
                </Reveal>
              ))}
            </div>
          </div>

          <div>
            <Reveal delay={0.3}>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="glass p-8 md:p-10 rounded-[32px] shadow-deep border border-white"
              >
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-navy/70 ml-2">Nombre Completo</label>
                      <input
                        {...register("nombre")}
                        className="w-full bg-white/50 border border-navy/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-orange/30 transition-all"
                        placeholder="Juan Pérez"
                      />
                      {errors.nombre && <p className="text-red-500 text-xs ml-2">{errors.nombre.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-navy/70 ml-2">Empresa</label>
                      <input
                        {...register("empresa")}
                        className="w-full bg-white/50 border border-navy/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-orange/30 transition-all"
                        placeholder="Opcional"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-navy/70 ml-2">Email Corporativo</label>
                    <input
                      {...register("email")}
                      className="w-full bg-white/50 border border-navy/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-orange/30 transition-all"
                      placeholder="juan@empresa.com"
                    />
                    {errors.email && <p className="text-red-500 text-xs ml-2">{errors.email.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-navy/70 ml-2">¿Cómo podemos ayudar?</label>
                    <textarea
                      {...register("mensaje")}
                      rows={4}
                      className="w-full bg-white/50 border border-navy/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-orange/30 transition-all resize-none"
                      placeholder="Cuéntanos sobre tu necesidad de búsqueda o consultoría..."
                    />
                    {errors.mensaje && <p className="text-red-500 text-xs ml-2">{errors.mensaje.message}</p>}
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-navy text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-3 hover:bg-navy/90 transition-all duration-500 shadow-xl"
                  >
                    Enviar Mensaje
                    <Send size={18} />
                  </button>
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
