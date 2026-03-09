import type { CSSProperties } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import "./feature-section-v4.css";

const features = [
  {
    id: "a",
    tag: "Lorem ipsum",
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/images/super-fast-api.webp",
    cols: "sm:col-span-6",
    large: true,
  },
  {
    id: "b",
    tag: "Lorem ipsum",
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/images/business-api.webp",
    cols: "sm:col-span-6",
    large: true,
  },
  {
    id: "c",
    tag: "Lorem ipsum",
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/images/collections-api.webp",
    cols: "sm:col-span-4",
    large: false,
  },
  {
    id: "d",
    tag: "Lorem ipsum",
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/images/tiny-api.webp",
    cols: "sm:col-span-4",
    large: false,
  },
  {
    id: "e",
    tag: "Lorem ipsum",
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/images/voice-api.webp",
    cols: "sm:col-span-4",
    large: false,
  },
] as const;

export default function FeatureSectionV4() {
  return (
    <section className="py-16 md:py-20 lg:py-24">
      <div className="container mx-auto max-w-4xl px-4">
        <header className="mb-14 sm:mb-16">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Lorem ipsum dolor
          </h2>
          <p className="mt-4 text-muted-foreground">
            Sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam quis nostrud.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-12 gap-2">
          {features.map(({ id, tag, title, description, image, cols, large }, index) => (
            <Card
              key={id}
              className={cn("fsv4-card fsv4-animate pt-0 overflow-hidden", cols)}
              style={{ animationDelay: `${index * 70}ms` } as CSSProperties}
            >
              <div
                className="relative h-[180px] overflow-hidden border-b border-border"
              >
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
              <div className="flex flex-col gap-1.5 px-5 pt-4 pb-5">
                <span className="text-[0.63rem] font-medium tracking-[0.14em] uppercase text-muted-foreground">
                  {tag}
                </span>
                <h3 className="text-base font-medium tracking-tight leading-snug text-foreground">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
