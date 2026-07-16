import * as React from "react";
import { Input as InputPrimitive } from "@base-ui/react/input";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={cn(
        `
        h-14
        w-full
        min-w-0

        rounded-2xl

        border
        border-slate-300

        bg-white

        px-5

        text-base
        text-slate-900

        placeholder:text-slate-400

        transition-all
        duration-200

        outline-none

        hover:border-slate-300

        focus:border-[var(--color-primary)]
        focus:bg-white
        focus:ring-4
        focus:ring-blue-100

        disabled:pointer-events-none
        disabled:cursor-not-allowed
        disabled:opacity-60
        disabled:bg-slate-100

        aria-invalid:border-red-500
        aria-invalid:ring-4
        aria-invalid:ring-red-100

        file:border-0
        file:bg-transparent
        file:text-sm
        file:font-medium

        md:text-base
        `,
        className,
      )}
      {...props}
    />
  );
}

export { Input };
