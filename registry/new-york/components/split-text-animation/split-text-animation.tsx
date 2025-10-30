"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

interface SplitTextAnimationProps {
  text: string;
  animationType?: "fade" | "slide" | "scale" | "rotate";
  direction?: "up" | "down" | "left" | "right";
  duration?: number;
  stagger?: number;
  delay?: number;
  className?: string;
}

export function SplitTextAnimation({
  text,
  animationType = "fade",
  direction = "up",
  duration = 0.8,
  stagger = 0.05,
  delay = 0,
  className = "",
}: SplitTextAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    containerRef.current.innerHTML = "";

    const containerStyles = window.getComputedStyle(containerRef.current);
    const words = text.split(" ");
    const chars: HTMLSpanElement[] = [];

    words.forEach((word) => {
      const wordSpan = document.createElement("span");
      wordSpan.style.display = "inline-block";
      wordSpan.style.marginRight = "0.25em";

      word.split("").forEach((char) => {
        const charSpan = document.createElement("span");
        charSpan.textContent = char;
        charSpan.style.display = "inline-block";
        charSpan.style.opacity = "0";
        charSpan.style.fontFamily = containerStyles.fontFamily;
        charSpan.style.fontSize = containerStyles.fontSize;
        charSpan.style.fontWeight = containerStyles.fontWeight;
        charSpan.style.lineHeight = containerStyles.lineHeight;
        wordSpan.appendChild(charSpan);
        chars.push(charSpan);
      });

      containerRef.current?.appendChild(wordSpan);
    });

    chars.forEach((char) => {
      gsap.set(char, { opacity: 0 });

      switch (animationType) {
        case "fade":
          break;
        case "slide":
          const slideDistance = 50;
          gsap.set(char, {
            opacity: 0,
            y:
              direction === "up"
                ? slideDistance
                : direction === "down"
                ? -slideDistance
                : 0,
            x:
              direction === "left"
                ? slideDistance
                : direction === "right"
                ? -slideDistance
                : 0,
          });
          break;
        case "scale":
          gsap.set(char, { opacity: 0, scale: 0 });
          break;
        case "rotate":
          gsap.set(char, { opacity: 0, rotation: 180 });
          break;
      }
    });

    const tl = gsap.timeline({
      delay,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    switch (animationType) {
      case "fade":
        tl.to(chars, {
          opacity: 1,
          duration,
          stagger,
          ease: "power2.out",
        });
        break;
      case "slide":
        tl.to(chars, {
          opacity: 1,
          y: 0,
          x: 0,
          duration,
          stagger,
          ease: "power2.out",
        });
        break;
      case "scale":
        tl.to(chars, {
          opacity: 1,
          scale: 1,
          duration,
          stagger,
          ease: "back.out(1.7)",
        });
        break;
      case "rotate":
        tl.to(chars, {
          opacity: 1,
          rotation: 0,
          duration,
          stagger,
          ease: "back.out(1.7)",
        });
        break;
    }

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [text, animationType, direction, duration, stagger, delay]);

  return (
    <div ref={containerRef} className={`split-text-animation ${className}`} />
  );
}
