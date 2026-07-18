"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { Loader2 } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const primaryButtonVariants = cva(
  `
    inline-flex
    items-center
    justify-center
    gap-2

    rounded-2xl

    font-semibold
    whitespace-nowrap
    select-none

    transition-all
    duration-300
    ease-out

    focus-visible:outline-none
    focus-visible:ring-4
    focus-visible:ring-blue-200

    disabled:pointer-events-none
    disabled:opacity-60
  `,
  {
    variants: {
      variant: {
        primary: `
          text-white

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
        `,

        white: `
          bg-white
          text-blue-700

          shadow-xl

          hover:bg-blue-50
          hover:-translate-y-1
        `,

        outline: `
          border
          border-blue-200

          bg-transparent

          text-blue-600

          hover:bg-blue-50
          hover:border-blue-500
        `,
      },

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
      variant: "primary",
      size: "md",
      fullWidth: false,
    },
  },
);

export interface PrimaryButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof primaryButtonVariants> {
  asChild?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
}

const PrimaryButton = React.forwardRef<HTMLButtonElement, PrimaryButtonProps>(
  (
    {
      className,
      children,
      loading = false,
      disabled,
      icon,
      asChild = false,
      variant,
      size,
      fullWidth,
      type = "button",
      ...props
    },
    ref,
  ) => {
    /**
     * asChild
     * ------------------------
     * Slot HARUS menerima SATU child.
     * Jangan pernah membungkusnya dengan Fragment.
     */
    if (asChild) {
      return (
        <Slot
          ref={ref}
          className={cn(
            primaryButtonVariants({
              variant,
              size,
              fullWidth,
            }),
            className,
          )}
          {...props}
        >
          {children}
        </Slot>
      );
    }

    return (
      <button
        ref={ref}
        type={type}
        disabled={loading || disabled}
        className={cn(
          primaryButtonVariants({
            variant,
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
            {children}
          </>
        ) : (
          <>
            {children}

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
