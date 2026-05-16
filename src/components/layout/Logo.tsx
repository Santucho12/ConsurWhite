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
      {/* Main Logo Text/Image - PNG includes the icon based on user screenshots */}
      <Image
        src="/CONSURWHITE_logo_4k.png"
        alt="ConsurWhite Logo"
        width={400}
        height={120}
        priority
        quality={100}
        className={cn(
          "object-contain w-auto h-10 md:h-14 mix-blend-multiply"
        )}
      />
    </div>
  );
}
