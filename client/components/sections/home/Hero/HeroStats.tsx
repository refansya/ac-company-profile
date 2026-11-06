"use client";

import { useEffect, useRef } from "react";

const stats = [
  { value: 250, suffix: "+", label: "Completed Projects" },
  { value: 98, suffix: "%", label: "Customer Satisfaction" },
  { value: 24, suffix: "/7", label: "Emergency Support" },
];

function Counter({ end, duration = 2000 }: { end: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;

    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let frame = 0;
    const startTime = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      el.textContent = String(Math.round(end * eased));

      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      el.textContent = String(end);
    };
  }, [end, duration]);

  return <span ref={ref}>{end}</span>;
}

export default function HeroStats() {
  return (
    <div className="grid max-w-xl grid-cols-3 gap-8">
      {stats.map((item) => (
        <div key={item.label}>
          <h3 className="text-4xl font-black text-slate-900">
            <Counter end={item.value} />
            {item.suffix}
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-500">{item.label}</p>
        </div>
      ))}
    </div>
  );
}
