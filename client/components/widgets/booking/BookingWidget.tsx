import GlassCard from "@/components/shared/GlassCard";

import BookingHeader from "./BookingHeader";
import BookingForm from "./BookingForm";
import BookingFeatures from "./BookingFeatures";

export default function BookingWidget() {
  return (
    <GlassCard
      className="
    p-8
    bg-white/90"
    >
      <BookingHeader />

      <BookingForm />

      <BookingFeatures />
    </GlassCard>
  );
}
