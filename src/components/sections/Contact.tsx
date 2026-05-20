"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Send, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { useState } from "react";
import Link from "next/link";

const contactSchema = z.object({
  nombre: z.string().min(2, "El nombre es requerido"),
  empresa: z.string().min(2, "El nombre de la empresa es requerido"),
  email: z.string().email("Email corporativo inválido"),
  mensaje: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      // Obtén tu Access Key gratuita en https://web3forms.com/ y reemplázala aquí
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          access_key: "551a2057-79f8-487e-95c9-df2b8986c355",
          "Nombre del Contacto": data.nombre,
          "Empresa / Organización": data.empresa || "No especificada",
          "Email de Respuesta": data.email,
          "Mensaje": data.mensaje,
          subject: `Nuevo contacto: ${data.empresa || data.nombre} - ConsurWhite`,
          from_name: "Web ConsurWhite",
        }),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        reset(); // Limpia el formulario
        setTimeout(() => setSubmitSuccess(false), 5000);
      } else {
        alert("Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.");
      }
    } catch (error) {
      alert("Error de red. Verifica tu conexión e inténtalo nuevamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">

        {/* Centered Header */}
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
          <Reveal delay={0.1} width="100%">
            <span className="inline-block bg-orange/10 text-orange font-bold text-[0.625rem] md:text-xs tracking-[0.2em] uppercase px-4 py-1.5 rounded-full mb-4 border border-orange/20">
              EXCLUSIVO PARA EMPRESAS
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-navy leading-tight tracking-tight mb-4">
              Construyamos tu próximo gran equipo.
            </h2>
            <p className="text-navy/60 text-[0.875rem] md:text-[1rem] max-w-2xl mx-auto font-medium leading-relaxed">
              Este formulario es únicamente para empresas interesadas en contratar personal técnico u operativo. 
              Si buscás trabajo y querés enviarnos tu CV, por favor hacé clic en <Link href="/postulate" className="text-orange hover:underline font-bold">Postularme</Link> para cargar tus datos.
            </p>
          </Reveal>
        </div>

        <div className="max-w-3xl mx-auto">
          <Reveal delay={0.2}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-2 text-left">
                  <label className="text-[0.6875rem] font-bold text-navy uppercase tracking-[0.2em]">Nombre Completo</label>
                  <input
                    {...register("nombre")}
                    className="w-full bg-transparent border-b-2 border-navy/20 py-3 text-[1rem] font-medium text-navy focus:outline-none focus:border-navy transition-colors placeholder:text-navy/30"
                    placeholder="Ej. Juan Pérez"
                  />
                  {errors.nombre && <p className="text-navy/60 text-xs mt-1 font-medium">{errors.nombre.message}</p>}
                </div>
                <div className="space-y-2 text-left">
                  <label className="text-[0.6875rem] font-bold text-navy uppercase tracking-[0.2em]">Empresa</label>
                  <input
                    {...register("empresa")}
                    className="w-full bg-transparent border-b-2 border-navy/20 py-3 text-[1rem] font-medium text-navy focus:outline-none focus:border-navy transition-colors placeholder:text-navy/30"
                    placeholder="Ej. Nombre de tu empresa"
                  />
                  {errors.empresa && <p className="text-navy/60 text-xs mt-1 font-medium">{errors.empresa.message}</p>}
                </div>
              </div>

              <div className="space-y-2 text-left">
                <label className="text-[0.6875rem] font-bold text-navy uppercase tracking-[0.2em]">Email Corporativo</label>
                <input
                  {...register("email")}
                  className="w-full bg-transparent border-b-2 border-navy/20 py-3 text-[1rem] font-medium text-navy focus:outline-none focus:border-navy transition-colors placeholder:text-navy/30"
                  placeholder="juan@empresa.com"
                />
                {errors.email && <p className="text-navy/60 text-xs mt-1 font-medium">{errors.email.message}</p>}
              </div>

              <div className="space-y-2 text-left">
                <label className="text-[0.6875rem] font-bold text-navy uppercase tracking-[0.2em]">Mensaje</label>
                <textarea
                  {...register("mensaje")}
                  rows={4}
                  className="w-full bg-transparent border-b-2 border-navy/20 py-3 text-[1rem] font-medium text-navy focus:outline-none focus:border-navy transition-colors placeholder:text-navy/30 resize-none"
                  placeholder="Cuéntanos sobre tu necesidad..."
                />
                {errors.mensaje && <p className="text-navy/60 text-xs mt-1 font-medium">{errors.mensaje.message}</p>}
              </div>

              <div className="flex flex-col items-center text-center pt-5">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group inline-flex items-center gap-4 bg-navy text-white text-[0.8125rem] font-bold uppercase tracking-[0.15em] px-8 py-4 rounded-full hover:bg-navy/90 transition-colors disabled:opacity-70"
                >
                  {isSubmitting ? "Procesando..." : submitSuccess ? "Solicitud Enviada" : "Solicitar Asesoramiento"}
                  {submitSuccess ? <CheckCircle2 className="w-4 h-4 text-green-400" /> : <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                </button>
                <p className="text-[0.8125rem] text-navy/50 mt-4 font-medium leading-relaxed max-w-md mx-auto">
                  * Al enviar este formulario, tu consulta nos llegará por correo electrónico y un asesor de ConsurWhite se pondrá en contacto contigo a la brevedad.
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
