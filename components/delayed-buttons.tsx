"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface DelayedButtonsProps {
  delay?: number;
}

export function DelayedButtons({ delay = 2000 }: DelayedButtonsProps) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
      <div
        className={`transition-all duration-700 ${
          show
            ? "animate-in fade-in-0 slide-in-from-bottom-4"
            : "opacity-0 translate-y-4"
        }`}
      >
        <Button asChild size="default">
          <Link href="/docs">Get Started</Link>
        </Button>
      </div>
      <div
        className={`transition-all duration-700 ${
          show
            ? "animate-in fade-in-0 slide-in-from-bottom-4 delay-100"
            : "opacity-0 translate-y-4"
        }`}
      >
        <Button asChild variant="outline" size="default">
          <Link href="/docs/components">View Components</Link>
        </Button>
      </div>
    </div>
  );
}
