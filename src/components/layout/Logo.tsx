import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "full" | "icon" | "footer";
}

export function Logo({ className, variant = "full" }: LogoProps) {
  const isIcon = variant === "icon";
  
  return (
    <div className={cn("relative group flex items-center gap-0", className)}>
      {/* Icon SVG - High resolution source */}
      <Image
        src="/logo SOLO 512px 512px.svg"
        alt="ConsurWhite Icon"
        width={180}
        height={180}
        priority
        className={cn(
          "object-contain w-auto h-12 md:h-16 -ml-2 hidden md:block"
        )}
      />
      
      {/* Main Logo Text/Image */}
      {!isIcon && (
        <Image
          src="/CONSURWHITE_logo_4k.png"
          alt="ConsurWhite Logo"
          width={500}
          height={150}
          priority
          quality={100}
          className={cn(
            "object-contain w-auto h-8 md:h-12 md:-ml-2 mix-blend-multiply"
          )}
        />
      )}
    </div>
  );
}
