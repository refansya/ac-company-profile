"use client";

import CountUp from "react-countup";

const stats = [
  {
    value: 250,
    suffix: "+",
    label: "Completed Services",
  },
  {
    value: 98,
    suffix: "%",
    label: "Customer Satisfaction",
  },
  {
    value: 24,
    suffix: "/7",
    label: "Support",
  },
  {
    value: 5,
    suffix: "+",
    label: "Years Experience",
  },
];

export default function WhyChooseStats() {
  return (
    <div className="mt-16 grid grid-cols-2 gap-8">
      {stats.map((item) => (
        <div
          key={item.label}
          className="
            rounded-3xl

            border
            border-slate-200

            bg-white

            p-6

            text-center
          "
        >
          <h3 className="text-4xl font-black text-blue-600">
            <CountUp end={item.value} duration={2} />
            {item.suffix}
          </h3>

          <p className="mt-2 text-sm text-slate-500">{item.label}</p>
        </div>
      ))}
    </div>
  );
}
