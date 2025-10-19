import * as React from "react";
import { RegistryItem } from "@/lib/registry";
import { ComponentCard } from "./component-card";

// Import all your components here
import { HelloWorld } from "@/registry/new-york/blocks/hello-world/hello-world";
import { ExampleForm } from "@/registry/new-york/blocks/example-form/example-form";
import PokemonPage from "@/registry/new-york/blocks/complex-component/page";
import { ExampleCard } from "@/registry/new-york/blocks/example-with-css/example-card";
import { SplitTextDemo } from "@/registry/new-york/components/split-text-animation/demo";

// Component mapping - add new components here as you create them
const componentMap: Record<string, React.ComponentType> = {
  "hello-world": HelloWorld,
  "example-form": ExampleForm,
  "complex-component": PokemonPage,
  "example-with-css": ExampleCard,
  "split-text-animation": SplitTextDemo,
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
      <Component />
    </ComponentCard>
  );
}
