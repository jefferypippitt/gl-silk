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

    // Clear container first
    containerRef.current.innerHTML = "";

    // Get computed styles from container to inherit font properties
    const containerStyles = window.getComputedStyle(containerRef.current);
    const fontFamily = containerStyles.fontFamily;
    const fontSize = containerStyles.fontSize;
    const fontWeight = containerStyles.fontWeight;
    const lineHeight = containerStyles.lineHeight;

    // Split text into characters
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
        // Inherit font properties from parent
        charSpan.style.fontFamily = fontFamily;
        charSpan.style.fontSize = fontSize;
        charSpan.style.fontWeight = fontWeight;
        charSpan.style.lineHeight = lineHeight;
        // Don't set inline color - let CSS handle theme changes
        wordSpan.appendChild(charSpan);
        chars.push(charSpan);
      });

      containerRef.current?.appendChild(wordSpan);
    });

    // Set initial state based on animation type
    const setInitialState = () => {
      chars.forEach((char) => {
        gsap.set(char, { opacity: 0 });

        switch (animationType) {
          case "fade":
            gsap.set(char, { opacity: 0 });
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
    };

    setInitialState();

    // Create animation timeline
    const tl = gsap.timeline({
      delay,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    // Animate characters
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
      // Cleanup
      tl.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [text, animationType, direction, duration, stagger, delay]);

  return (
    <div ref={containerRef} className={`split-text-animation ${className}`} />
  );
}
