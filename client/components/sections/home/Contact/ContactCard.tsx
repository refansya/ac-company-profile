"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";

interface ContactCardProps {
  icon: ReactNode;
  title: string;
  value: string;
  href?: string;
  description?: string;
  className?: string;
}

export default function ContactCard({
  icon,
  title,
  value,
  href,
  description,
  className,
}: ContactCardProps) {
  const Card = (
    <div
      className={cn(
        `
        group
        relative
        overflow-hidden

        rounded-[28px]

        border
        border-slate-200/80

        bg-white/90
        backdrop-blur-xl

        p-6

        shadow-lg
        shadow-sky-100/40

        transition-all
        duration-300

        hover:-translate-y-1
        hover:border-sky-300
        hover:shadow-2xl
        hover:shadow-sky-200/40
        `,
        className,
      )}
    >
      {/* Soft Glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-16
          -top-16
          h-44
          w-44
          rounded-full
          bg-sky-300/15
          blur-3xl
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      />

      <div className="relative z-10 flex items-start gap-5">
        {/* Icon */}
        <div
          className="
            flex
            h-14
            w-14
            shrink-0
            items-center
            justify-center

            rounded-2xl

            bg-gradient-to-br
            from-sky-500
            to-blue-600

            text-white

            shadow-lg
            shadow-sky-200

            transition-transform
            duration-300

            group-hover:scale-105
          "
        >
          {icon}
        </div>

        {/* Content */}
        <div className="min-w-0 flex-1">
          <p
            className="
              text-xs
              font-semibold
              uppercase
              tracking-[0.18em]
              text-sky-600
            "
          >
            {title}
          </p>

          <h3
            className="
              mt-2

              break-words

              text-lg
              font-semibold

              text-slate-900

              transition-colors
              duration-300

              group-hover:text-sky-700
            "
          >
            {value}
          </h3>

          {description && (
            <p
              className="
                mt-2

                text-sm
                leading-6

                text-slate-500
              "
            >
              {description}
            </p>
          )}

          {href && (
            <div
              className="
                mt-5

                inline-flex
                items-center
                gap-2

                text-sm
                font-medium

                text-sky-600

                transition-all
                duration-300

                group-hover:gap-3
              "
            >
              <span>Open</span>

              <ArrowUpRight
                size={17}
                className="
                  transition-transform
                  duration-300
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );

  if (!href) return Card;

  return (
    <Link
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="block"
    >
      {Card}
    </Link>
  );
}
