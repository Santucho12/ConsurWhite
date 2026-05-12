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
      {/* Icon SVG */}
      <Image
        src="/logo SOLO 512px 512px.svg"
        alt="ConsurWhite Icon"
        width={100}
        height={100}
        priority
        className={cn(
          "object-contain w-auto h-16 md:h-20 -ml-3"
        )}
      />
      
      {/* Main Logo Text/Image */}
      {!isIcon && (
        <Image
          src="/CONSURWHITE_logo_4k.png"
          alt="ConsurWhite Logo"
          width={600}
          height={180}
          priority
          className={cn(
            "object-contain w-auto h-12 md:h-16 -ml-2"
          )}
        />
      )}
    </div>
  );
}
