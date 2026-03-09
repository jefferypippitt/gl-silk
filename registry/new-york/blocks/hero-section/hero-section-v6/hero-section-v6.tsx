import { ArrowRightIcon } from "lucide-react";
import { Button } from "./button";
import { HeroSectionV6Carousel } from "./hero-section-v6-carousel";
import { HeroSectionV6Stats } from "./hero-section-v6-stats";
import "./hero-section-v6.css";

export default function HeroSectionV6() {
  return (
    <section className="hs6-hero relative min-h-screen py-16 md:py-20 lg:py-24">
      <div className="hs6-bg-pattern" aria-hidden="true" />
      <div className="container mx-auto relative z-10 max-w-6xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="mx-auto lg:mx-0 max-w-xl text-center lg:text-left">
            <h1 className="text-3xl  sm:text-4xl lg:text-5xl">
              Lorem ipsum dolor sit amet consectetur.
            </h1>
            <p className="mt-4 text-muted-foreground md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipiscing elit vitae cursus morbi consectetur adipiscing elit.

            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row justify-center lg:justify-start">
              <Button variant="default" size="default">
                Get Started <ArrowRightIcon className="w-4 h-4" />
              </Button>
            </div>
            <HeroSectionV6Stats />
          </div>
          <div className="relative">
            <HeroSectionV6Carousel />
          </div>
        </div>
      </div>
    </section>
  );
}
