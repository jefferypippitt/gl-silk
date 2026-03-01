import { Button } from "./button";

export default function CtaSectionV1() {
  return (
    <section className="py-16 md:py-20 lg:py-24">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="bg-muted rounded-2xl px-8 py-20 sm:px-16 sm:py-28 md:py-32 flex flex-col items-center gap-10 text-center">
          <h1 className="text-4xl leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Try Lorem now.
          </h1>
          <Button variant="default" size="lg" className="rounded-full">
            Get started
          </Button>
        </div>
      </div>
    </section>
  );
}
