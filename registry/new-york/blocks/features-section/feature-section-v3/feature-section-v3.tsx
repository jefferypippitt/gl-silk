import FeatureSectionV3List from "./feature-section-v3-list";

export default function FeatureSectionV3() {
  return (
    <section className="py-20 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-end justify-between gap-8 pb-10 max-sm:flex-col max-sm:items-start max-sm:gap-3">
          <p className="uppercase font-medium">
            Features
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-tight text-right max-sm:text-left">
            Lorem ipsum dolor
            <br />
            <span className="text-foreground/60">sit amet elit.</span>
          </h2>
        </div>
        <FeatureSectionV3List />
      </div>
    </section>
  );
}
