"use client";

import type { FormEvent } from "react";
import { ArrowRight } from "lucide-react";

import { Input } from "@/components/ui/input";
import PrimaryButton from "@/components/shared/PrimaryButton";
import { COMPANY } from "@/constants/company";

export default function BookingForm() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const message = [
      "Halo, Project.ID Services! Saya ingin booking layanan.",
      "",
      `Nama: ${formData.get("name")}`,
      `Nomor WhatsApp: ${formData.get("phone")}`,
      `Lokasi: ${formData.get("location")}`,
    ].join("\n");
    const url = new URL(COMPANY.whatsappUrl);

    url.searchParams.set("text", message);
    window.open(url.toString(), "_blank", "noopener,noreferrer");
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <Input name="name" placeholder="Your Name" required />

      <Input name="phone" type="tel" placeholder="Phone Number" required />

      <Input name="location" placeholder="Location" required />

      <PrimaryButton type="submit" fullWidth icon={<ArrowRight size={18} />}>
        Book Service
      </PrimaryButton>
    </form>
  );
}
