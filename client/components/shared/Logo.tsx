import Image from "next/image";

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <div
      className={`
        flex
        items-center
        shrink-0
        transition-transform
        duration-300
        hover:scale-[1.02]
        ${className}
      `}
    >
      <Image
        src="/logo/logomain.svg"
        alt="PROJECT.ID SERVICES"
        width={240}
        height={70}
        priority
        className="
          h-11
          w-auto
          object-contain
          select-none
        "
      />
    </div>
  );
}
