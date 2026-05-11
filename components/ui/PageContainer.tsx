import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PageContainerProps {
  children: ReactNode;
  className?: string;
}

export default function PageContainer({
  children,
  className,
}: PageContainerProps) {
  return (
    <div className={cn("min-h-screen bg-zinc-950 text-white", className)}>
      <div className="container mx-auto px-4 py-8 sm:py-12">
        {children}
      </div>
    </div>
  );
}
