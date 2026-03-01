import { Card } from "@/components/ui/card";

const features = [
  {
    title: "Lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non velit vitae orci aliquet.",
  },
  {
    title: "Lorem & Ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non velit vitae orci aliquet.",
  },
  {
    title: "Lorem ipsum dolor sit",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non velit vitae orci aliquet.",
  },
];

export default function HeroSectionV5Features() {
  return (
    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-0 rounded-none border border-border overflow-hidden">
      {features.map((feature) => (
        <Card
          key={feature.title}
          className="rounded-none border-0 border-r border-border last:border-r-0"
        >
          <div className="p-4">
            <h3 className="text-sm font-semibold text-foreground mb-2">{feature.title}</h3>
            <p className="text-sm text-muted-foreground">{feature.description}</p>
          </div>
        </Card>
      ))}
    </div>
  );
}
