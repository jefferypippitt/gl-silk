import FeatureSectionV1Grid from "./feature-section-v1-grid";

export default function FeatureSectionV1() {
  return (
    <section className="py-16 md:py-20 lg:py-24">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl tracking-tight sm:text-4xl lg:text-5xl">
            Lorem ipsum dolor sit amet
          </h1>
          <p className="mt-4 font-light text-muted-foreground sm:text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <FeatureSectionV1Grid />
      </div>
    </section>
  );
}
