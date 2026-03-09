"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const carouselImages = [
  "/images/voice-api.webp",
  "/images/imagine-api.webp",
  "/images/collections-api.webp",
  "/images/fast-api.webp",
];

const INTERVAL_MS = 4000;
const DOT_SIZE = 6;
const RING_SIZE = 16;
const STROKE_WIDTH = 1.5;
const RADIUS = (RING_SIZE - STROKE_WIDTH) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export function HeroSectionV6Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [resetKey, setResetKey] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const advance = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    setResetKey((k) => k + 1);
  }, []);

  const goTo = useCallback((index: number) => {
    setCurrentIndex(index);
    setResetKey((k) => k + 1);
  }, []);

  useEffect(() => {
    timerRef.current = setInterval(advance, INTERVAL_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [advance, resetKey]);

  return (
    <div className="hs6-carousel rounded-xl border border-border bg-card overflow-hidden shadow-xl">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="hs6-carousel-slide"
          style={{ backgroundImage: `url(${carouselImages[currentIndex]})` }}
          role="img"
          aria-label={`Product preview ${currentIndex + 1}`}
        />
      </AnimatePresence>

      <div className="hs6-carousel-indicators">
        <div className="hs6-dots-backdrop">
          {carouselImages.map((_, index) => {
            const isActive = index === currentIndex;
            return (
              <button
                key={index}
                onClick={() => goTo(index)}
                className="hs6-dot-wrapper"
                aria-label={`Go to slide ${index + 1}`}
              >
                {isActive && (
                  <svg
                    className="hs6-dot-ring"
                    width={RING_SIZE}
                    height={RING_SIZE}
                    viewBox={`0 0 ${RING_SIZE} ${RING_SIZE}`}
                  >
                    <circle
                      cx={RING_SIZE / 2}
                      cy={RING_SIZE / 2}
                      r={RADIUS}
                      fill="none"
                      stroke="rgba(255,255,255,0.2)"
                      strokeWidth={STROKE_WIDTH}
                    />
                    <motion.circle
                      key={resetKey}
                      cx={RING_SIZE / 2}
                      cy={RING_SIZE / 2}
                      r={RADIUS}
                      fill="none"
                      stroke="rgba(255,255,255,0.9)"
                      strokeWidth={STROKE_WIDTH}
                      strokeLinecap="round"
                      strokeDasharray={CIRCUMFERENCE}
                      initial={{ strokeDashoffset: CIRCUMFERENCE }}
                      animate={{ strokeDashoffset: 0 }}
                      transition={{
                        duration: INTERVAL_MS / 1000,
                        ease: "linear",
                      }}
                      style={{
                        transformOrigin: "center",
                        transform: "rotate(-90deg)",
                      }}
                    />
                  </svg>
                )}

                <motion.span
                  className="hs6-dot-core"
                  animate={{
                    scale: isActive ? 1 : 0.7,
                    opacity: isActive ? 1 : 0.4,
                  }}
                  whileHover={{ scale: isActive ? 1 : 0.9, opacity: 0.8 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  style={{
                    width: DOT_SIZE,
                    height: DOT_SIZE,
                  }}
                />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
