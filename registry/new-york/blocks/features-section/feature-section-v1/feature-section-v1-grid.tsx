import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CircleDashed } from "lucide-react";

const features = [
  {
    icon: CircleDashed,
    title: "Lorem ipsum dolor",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: CircleDashed,
    title: "Ut enim ad minim",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    icon: CircleDashed,
    title: "Duis aute irure",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    icon: CircleDashed,
    title: "Excepteur sint occaecat",
    description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

export default function FeatureSectionV1Grid() {
  return (
    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 rounded-none border">
      {features.map((feature) => (
        <Card key={feature.title} className="rounded-none">
          <CardHeader>
            <feature.icon className="w-5 h-5 mb-2" />
            <CardTitle>{feature.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">{feature.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
