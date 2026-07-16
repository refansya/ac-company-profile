import Link from "next/link";

import Logo from "@/components/shared/Logo";

export default function NavbarBrand() {
  return (
    <Link
      href="#home"
      aria-label="PROJECT.ID SERVICES"
      className="
        flex
        items-center
        shrink-0
        transition-transform
        duration-300
        hover:scale-[1.03]
      "
    >
      <Logo className="scale-110" />
    </Link>
  );
}
