import { CircleDashed } from "lucide-react";

const features = [
  {
    number: "01",
    title: "Lorem ipsum dolor sit",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    number: "02",
    title: "Ut enim ad minim",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    number: "03",
    title: "Duis aute irure dolor",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    number: "04",
    title: "Excepteur sint occaecat",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

export default function FeatureSectionV3List() {
  return (
    <ul className="m-0 list-none p-0 border-t border-border">
      {features.map((feature) => (
        <li
          key={feature.number}
          className="group grid grid-cols-[5.5rem_1fr_5.5rem] items-center gap-8 border-b border-border py-9 max-sm:grid-cols-[3.5rem_1fr]"
        >
          <span className="text-5xl font-extralight tracking-tighter tabular-nums text-foreground/10 transition-colors duration-300 group-hover:text-foreground/30 max-sm:text-4xl">
            {feature.number}
          </span>
          <div>
            <h3 className="mb-1.5 text-lg font-medium tracking-tight text-foreground/60 transition-colors duration-300 group-hover:text-foreground">
              {feature.title}
            </h3>
            <p className="m-0 max-w-2xl text-sm leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-foreground/60">
              {feature.description}
            </p>
          </div>
          <CircleDashed className="h-6 w-6 justify-self-end text-foreground/10 transition-colors duration-300 group-hover:text-foreground/30 max-sm:hidden" />
        </li>
      ))}
    </ul>
  );
}
