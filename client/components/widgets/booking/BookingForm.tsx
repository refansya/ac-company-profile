import { ArrowRight } from "lucide-react";

import { Input } from "@/components/ui/input";
import PrimaryButton from "@/components/shared/PrimaryButton";

export default function BookingForm() {
  return (
    <form className="space-y-5">
      <Input placeholder="Your Name" />

      <Input placeholder="Phone Number" />

      <Input placeholder="Location" />

      <PrimaryButton type="submit" fullWidth icon={<ArrowRight size={18} />}>
        Book Service
      </PrimaryButton>
    </form>
  );
}
