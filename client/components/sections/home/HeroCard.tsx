import Float from "@/components/motion/Float";
import BookingWidget from "@/components/widgets/booking/BookingWidget";

export default function HeroCard() {
  return (
    <Float>
      <div className="w-full max-w-xl">
        <BookingWidget />
      </div>
    </Float>
  );
}
