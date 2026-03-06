"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const carouselImages = [
  "/images/voice-api.webp",
  "/images/imagine-api.webp",
  "/images/super-fast-api.webp",
  "/images/fast-api.webp",
];

export function HeroSectionV6Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

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
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`hs6-carousel-dot ${index === currentIndex ? "active" : ""}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
