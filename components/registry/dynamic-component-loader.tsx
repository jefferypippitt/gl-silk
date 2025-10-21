import * as React from "react";
import { Suspense } from "react";
import { RegistryItem } from "@/lib/registry";
import { ComponentCard } from "./component-card";

// Import all your components here
import { HelloWorld } from "@/registry/new-york/blocks/hello-world/hello-world";
import { ExampleForm } from "@/registry/new-york/blocks/example-form/example-form";
import { ExampleCard } from "@/registry/new-york/blocks/example-with-css/example-card";
import { SplitTextDemo } from "@/registry/new-york/components/split-text-animation/demo";
import { MeshGradientDemo } from "@/registry/new-york/components/mesh-gradient-button/demo";
import { PlayPauseDemo } from "@/registry/new-york/components/play-pause-button/demo";

// Component mapping - add new components here as you create them
const componentMap: Record<string, React.ComponentType> = {
  "hello-world": HelloWorld,
  "example-form": ExampleForm,
  "example-with-css": ExampleCard,
  "split-text-animation": SplitTextDemo,
  "mesh-gradient-button": MeshGradientDemo,
  "play-pause-button": PlayPauseDemo,
};

interface DynamicComponentLoaderProps {
  item: RegistryItem;
}

export function DynamicComponentLoader({ item }: DynamicComponentLoaderProps) {
  const Component = componentMap[item.name];

  if (!Component) {
    return (
      <ComponentCard item={item}>
        <div className="text-sm text-muted-foreground">
          Component not found: {item.name}
        </div>
      </ComponentCard>
    );
  }

  return (
    <ComponentCard item={item}>
      <Suspense
        fallback={
          <div className="flex items-center justify-center h-32">
            <div className="text-sm text-muted-foreground">Loading...</div>
          </div>
        }
      >
        <Component />
      </Suspense>
    </ComponentCard>
  );
}
