import WhyChooseImage from "./WhyChooseImage";
import WhyChooseFeature from "./WhyChooseFeature";
import WhyChoosePromise from "./WhyChoosePromise";

export default function WhyChooseContent() {
  return (
    <div
      className="
        mt-20
        grid
        items-center
        gap-14
        lg:grid-cols-[440px_1fr]
        xl:grid-cols-[480px_1fr]
        xl:gap-20
      "
    >
      {/* Foto — kiri, vertikal center */}
      <WhyChooseImage />

      {/* Konten — kanan */}
      <div className="flex flex-col gap-10">
        <WhyChooseFeature />
        <WhyChoosePromise />
      </div>
    </div>
  );
}
