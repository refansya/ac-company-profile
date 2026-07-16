"use client";

import { forwardRef, ButtonHTMLAttributes, ReactNode } from "react";

import { Loader2 } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const primaryButtonVariants = cva(
  `
    group
    inline-flex
    items-center
    justify-center
    gap-2

    relative
    overflow-hidden

    rounded-2xl

    font-semibold
    text-white

    select-none

    transition-all
    duration-300
    ease-out

    bg-gradient-to-r
    from-blue-600
    via-blue-500
    to-cyan-500

    shadow-lg

    hover:-translate-y-1
    hover:scale-[1.02]
    hover:shadow-[0_20px_60px_rgba(0,87,255,.35)]

    active:translate-y-0
    active:scale-100

    focus-visible:outline-none
    focus-visible:ring-4
    focus-visible:ring-blue-200

    disabled:pointer-events-none
    disabled:opacity-60
  `,
  {
    variants: {
      size: {
        sm: "h-11 px-5 text-sm",
        md: "h-14 px-8 text-base",
        lg: "h-16 px-10 text-lg",
      },

      fullWidth: {
        true: "w-full",
        false: "",
      },
    },

    defaultVariants: {
      size: "md",
      fullWidth: false,
    },
  },
);

interface PrimaryButtonProps
  extends
    ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof primaryButtonVariants> {
  children: ReactNode;
  loading?: boolean;
  icon?: ReactNode;
}

const PrimaryButton = forwardRef<HTMLButtonElement, PrimaryButtonProps>(
  (
    {
      children,
      className,
      loading = false,
      disabled,
      icon,
      size,
      fullWidth,
      type = "button",
      ...props
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        disabled={loading || disabled}
        aria-busy={loading}
        className={cn(
          primaryButtonVariants({
            size,
            fullWidth,
          }),
          className,
        )}
        {...props}
      >
        {loading ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            <span>Loading...</span>
          </>
        ) : (
          <>
            <span>{children}</span>

            {icon && (
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                {icon}
              </span>
            )}
          </>
        )}
      </button>
    );
  },
);

PrimaryButton.displayName = "PrimaryButton";

export default PrimaryButton;
