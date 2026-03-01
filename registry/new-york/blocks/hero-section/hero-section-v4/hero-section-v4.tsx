import { Button } from "./button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import HeroSectionV4DitherDark from "./hero-section-v4-dither-dark";
import HeroSectionV4DitherLight from "./hero-section-v4-dither-light";
import "./hero-section-v4.css";

export default function HeroSectionV4() {
  return (
    <section className="py-16 md:py-20 lg:py-24">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="secondary" className="mb-4">
            Announcing Our Latest Release
            <ArrowRight />
          </Badge>
        </div>
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl">
              Lorem ipsum dolor sit amet
            </h1>
            <p className="mt-4 text-muted-foreground sm:text-lg">
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
            </p>
            <div className="mt-8 flex gap-4 flex-col sm:flex-row justify-center lg:justify-start">
              <Button variant="default">
                Get started
              </Button>
              <Button variant="outline">
                See it in action
              </Button>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="mx-auto max-w-[300px]">
              <div className="hs4-dither-light">
                <HeroSectionV4DitherLight />
              </div>
              <div className="hs4-dither-dark">
                <HeroSectionV4DitherDark />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
