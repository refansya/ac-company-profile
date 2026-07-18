const SERVICES = [
  "Air Conditioning",
  "HVAC",
  "Preventive Maintenance",
  "Electronic",
];

export default function HeroServiceTags() {
  return (
    <div className="mt-12 flex flex-wrap gap-3">
      {SERVICES.map((service) => (
        <span
          key={service}
          className="
            rounded-full
            border
            border-slate-200
            bg-white
            px-4
            py-2
            text-sm
            font-medium
            shadow-sm
          "
        >
          {service}
        </span>
      ))}
    </div>
  );
}