// Static registry mapping for Turbopack compatibility
import { HelloWorld } from "@/registry/new-york/blocks/hello-world/hello-world";
import { ExampleForm } from "@/registry/new-york/blocks/example-form/example-form";
import PokemonPage from "@/registry/new-york/blocks/complex-component/page";
import { ExampleCard } from "@/registry/new-york/blocks/example-with-css/example-card";
import { SplitTextDemo } from "@/registry/new-york/components/split-text-animation/demo";
import { FadeDemo } from "@/registry/new-york/components/split-text-animation/fade-demo";
import { FadeFastDemo } from "@/registry/new-york/components/split-text-animation/fade-fast-demo";
import { FadeSlowDemo } from "@/registry/new-york/components/split-text-animation/fade-slow-demo";
import { SlideDemo } from "@/registry/new-york/components/split-text-animation/slide-demo";
import { SlideUpDemo } from "@/registry/new-york/components/split-text-animation/slide-up-demo";
import { SlideDownDemo } from "@/registry/new-york/components/split-text-animation/slide-down-demo";
import { SlideLeftDemo } from "@/registry/new-york/components/split-text-animation/slide-left-demo";
import { SlideRightDemo } from "@/registry/new-york/components/split-text-animation/slide-right-demo";
import { ScaleDemo } from "@/registry/new-york/components/split-text-animation/scale-demo";
import { ScaleFastDemo } from "@/registry/new-york/components/split-text-animation/scale-fast-demo";
import { ScaleSlowDemo } from "@/registry/new-york/components/split-text-animation/scale-slow-demo";
import { RotateDemo } from "@/registry/new-york/components/split-text-animation/rotate-demo";
import { RotateFastDemo } from "@/registry/new-york/components/split-text-animation/rotate-fast-demo";
import { RotateSlowDemo } from "@/registry/new-york/components/split-text-animation/rotate-slow-demo";

export const componentRegistry: Record<string, React.ComponentType> = {
  "hello-world": HelloWorld,
  "example-form": ExampleForm,
  "complex-component": PokemonPage,
  "example-with-css": ExampleCard,
  "split-text-animation": SplitTextDemo,
  "split-text-fade": FadeDemo,
  "split-text-fade-fast": FadeFastDemo,
  "split-text-fade-slow": FadeSlowDemo,
  "split-text-slide": SlideDemo,
  "split-text-slide-up": SlideUpDemo,
  "split-text-slide-down": SlideDownDemo,
  "split-text-slide-left": SlideLeftDemo,
  "split-text-slide-right": SlideRightDemo,
  "split-text-scale": ScaleDemo,
  "split-text-scale-fast": ScaleFastDemo,
  "split-text-scale-slow": ScaleSlowDemo,
  "split-text-rotate": RotateDemo,
  "split-text-rotate-fast": RotateFastDemo,
  "split-text-rotate-slow": RotateSlowDemo,
};
