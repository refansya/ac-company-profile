import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props {
  id?: string;
  children: ReactNode;
  className?: string;
}

export default function Section({ id, children, className }: Props) {
  return (
    <section id={id} className={cn("relative w-full", className)}>
      {children}
    </section>
  );
}
