import Link from "next/link";
import { ArrowRight, PhoneCall } from "lucide-react";

import { Button } from "@/components/ui/button";
import PrimaryButton from "@/components/shared/PrimaryButton";

export default function HeroButtons() {
  return (
    <div className="mt-10 flex flex-wrap gap-4">
      <PrimaryButton icon={<ArrowRight size={18} />}>
        Book Service
      </PrimaryButton>

      <Link href="https://wa.me/6281776756863">
        <Button variant="outline" size="lg" className="h-14 rounded-xl px-8">
          <PhoneCall className="mr-2 h-4 w-4" />
          Call Now
        </Button>
      </Link>
    </div>
  );
}
