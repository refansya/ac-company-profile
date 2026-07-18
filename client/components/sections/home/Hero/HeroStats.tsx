"use client";

import CountUp from "react-countup";

const stats = [
  {
    value: 250,
    suffix: "+",
    label: "Completed Projects",
  },
  {
    value: 98,
    suffix: "%",
    label: "Customer Satisfaction",
  },
  {
    value: 24,
    suffix: "/7",
    label: "Emergency Support",
  },
];

export default function HeroStats() {
  return (
    <div className="mt-14 grid max-w-xl grid-cols-3 gap-8">
      {stats.map((item) => (
        <div key={item.label}>
          <h3 className="text-4xl font-black text-slate-900">
            <CountUp end={item.value} duration={2.5} />
            {item.suffix}
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-500">{item.label}</p>
        </div>
      ))}
    </div>
  );
}
