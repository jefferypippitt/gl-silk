"use client";

import { useEffect, useState } from "react";
import { UserPlus, Settings, Rocket } from "lucide-react";

const STEPS = [
  { label: "Sign Up",   Icon: UserPlus },
  { label: "Configure", Icon: Settings },
  { label: "Launch",    Icon: Rocket },
];

export function CyclingBadge() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    const interval = setInterval(() => {
      setVisible(false);
      timeoutId = setTimeout(() => {
        setIndex((i) => (i + 1) % STEPS.length);
        setVisible(true);
      }, 200);
    }, 2000);
    return () => {
      clearInterval(interval);
      clearTimeout(timeoutId);
    };
  }, []);

  const { label, Icon } = STEPS[index];

  return (
    <div className="shrink-0 flex items-center justify-center gap-2 rounded-full border border-border bg-background px-4 py-2 shadow-sm min-w-[120px]">
      <span
        className="flex items-center gap-2 transition-all duration-200"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(6px)",
        }}
      >
        <Icon className="w-4 h-4 shrink-0 text-foreground" />
        <span className="text-sm font-medium text-foreground whitespace-nowrap">
          {label}
        </span>
      </span>
    </div>
  );
}
