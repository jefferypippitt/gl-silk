import * as React from "react";
import { Suspense } from "react";
import { RegistryItem } from "@/lib/registry";
import { ComponentCard } from "./component-card";

// Import all your components here
import { HelloWorld } from "@/registry/new-york/blocks/hello-world/hello-world";
import { ExampleForm } from "@/registry/new-york/blocks/example-form/example-form";
import { ExampleCard } from "@/registry/new-york/blocks/example-with-css/example-card";
import { SplitTextDemo } from "@/registry/new-york/components/split-text-animation/demo";
import { FadeDemo } from "@/registry/new-york/components/split-text-animation/fade-demo";
import { FadeFastDemo } from "@/registry/new-york/components/split-text-animation/fade-fast-demo";
import { FadeSlowDemo } from "@/registry/new-york/components/split-text-animation/fade-slow-demo";
import { RotateDemo } from "@/registry/new-york/components/split-text-animation/rotate-demo";
import { RotateFastDemo } from "@/registry/new-york/components/split-text-animation/rotate-fast-demo";
import { RotateSlowDemo } from "@/registry/new-york/components/split-text-animation/rotate-slow-demo";
import { ScaleDemo } from "@/registry/new-york/components/split-text-animation/scale-demo";
import { ScaleFastDemo } from "@/registry/new-york/components/split-text-animation/scale-fast-demo";
import { ScaleSlowDemo } from "@/registry/new-york/components/split-text-animation/scale-slow-demo";
import { SlideDemo } from "@/registry/new-york/components/split-text-animation/slide-demo";
import { SlideUpDemo } from "@/registry/new-york/components/split-text-animation/slide-up-demo";
import { SlideDownDemo } from "@/registry/new-york/components/split-text-animation/slide-down-demo";
import { SlideLeftDemo } from "@/registry/new-york/components/split-text-animation/slide-left-demo";
import { SlideRightDemo } from "@/registry/new-york/components/split-text-animation/slide-right-demo";
import { CustomStylingDemo } from "@/registry/new-york/components/split-text-animation/custom-styling-demo";
import { MeshGradientDemo } from "@/registry/new-york/components/mesh-gradient-button/demo";
import { HighEnergyDemo } from "@/registry/new-york/components/mesh-gradient-button/high-energy-demo";
import { OceanThemeDemo } from "@/registry/new-york/components/mesh-gradient-button/ocean-theme-demo";
import { TextCustomizationDemo } from "@/registry/new-york/components/mesh-gradient-button/text-customization-demo";
import { PlayPauseDemo } from "@/registry/new-york/components/play-pause-button/demo";
import { PlayPauseSizesDemo } from "@/registry/new-york/components/play-pause-button/sizes-demo";
import { PlayPauseVariantsDemo } from "@/registry/new-york/components/play-pause-button/variants-demo";
import { PlayPauseIconVariantsDemo } from "@/registry/new-york/components/play-pause-button/icon-variants-demo";
import { PlayPauseRoundedDemo } from "@/registry/new-york/components/play-pause-button/rounded-demo";
import { ThemeToggleDemo } from "@/registry/new-york/components/theme-toggle-button/demo";
import { ThemeToggleSizesDemo } from "@/registry/new-york/components/theme-toggle-button/sizes-demo";
import { ThemeToggleRoundedDemo } from "@/registry/new-york/components/theme-toggle-button/rounded-demo";
import { ThemeToggleColoredDemo } from "@/registry/new-york/components/theme-toggle-button/colored-demo";
import { ThemeToggleDualColorDemo } from "@/registry/new-york/components/theme-toggle-button/dual-color-demo";
import { LiquidGlassButtonDemo } from "@/registry/new-york/components/liquid-glass-button/demo";
import { LiquidGlassSizesDemo } from "@/registry/new-york/components/liquid-glass-button/sizes-demo";
import { LiquidGlassVariantsDemo } from "@/registry/new-york/components/liquid-glass-button/variants-demo";
import { LiquidGlassColorsDemo } from "@/registry/new-york/components/liquid-glass-button/colors-demo";
import { LiquidGlassAdvancedDemo } from "@/registry/new-york/components/liquid-glass-button/advanced-liquid-demo";
import { WarpButtonDemo } from "@/registry/new-york/components/warp-button/demo";
import { WarpButtonInkDemo } from "@/registry/new-york/components/warp-button/ink-demo";
import { WarpButtonHighDistortionDemo } from "@/registry/new-york/components/warp-button/high-distortion-demo";
import { WarpButtonSubtleWarpDemo } from "@/registry/new-york/components/warp-button/subtle-warp-demo";
import { WarpButtonCustomShapeDemo } from "@/registry/new-york/components/warp-button/custom-shape-demo";
import { WarpButtonTextCustomizationDemo } from "@/registry/new-york/components/warp-button/text-customization-demo";
import { Text3DDemo } from "@/registry/new-york/components/text-3d/demo";
import { Text3DGradientDemo } from "@/registry/new-york/components/text-3d/gradient-demo";
import { Text3DAdvancedDemo } from "@/registry/new-york/components/text-3d/advanced-demo";
import { NeubrutalismButtonDemo } from "@/registry/new-york/components/neubrutalism-button/demo";

// Component mapping - add new components here as you create them
const componentMap: Record<string, React.ComponentType> = {
  "hello-world": HelloWorld,
  "example-form": ExampleForm,
  "example-with-css": ExampleCard,
  // Split Text Animations
  "split-text-animation": SplitTextDemo,
  "split-text-fade": FadeDemo,
  "split-text-fade-fast": FadeFastDemo,
  "split-text-fade-slow": FadeSlowDemo,
  "split-text-rotate": RotateDemo,
  "split-text-rotate-fast": RotateFastDemo,
  "split-text-rotate-slow": RotateSlowDemo,
  "split-text-scale": ScaleDemo,
  "split-text-scale-fast": ScaleFastDemo,
  "split-text-scale-slow": ScaleSlowDemo,
  "split-text-slide": SlideDemo,
  "split-text-slide-up": SlideUpDemo,
  "split-text-slide-down": SlideDownDemo,
  "split-text-slide-left": SlideLeftDemo,
  "split-text-slide-right": SlideRightDemo,
  "split-text-custom-styling": CustomStylingDemo,
  // Mesh Gradient Buttons
  "mesh-gradient-button": MeshGradientDemo,
  "mesh-gradient-button-high-energy": HighEnergyDemo,
  "mesh-gradient-button-ocean-theme": OceanThemeDemo,
  "mesh-gradient-button-text-customization": TextCustomizationDemo,
  // Play Pause Buttons
  "play-pause-button": PlayPauseDemo,
  "play-pause-button-sizes": PlayPauseSizesDemo,
  "play-pause-button-variants": PlayPauseVariantsDemo,
  "play-pause-button-icon-variants": PlayPauseIconVariantsDemo,
  "play-pause-button-rounded": PlayPauseRoundedDemo,
  // Theme Toggle Buttons
  "theme-toggle-button": ThemeToggleDemo,
  "theme-toggle-button-sizes": ThemeToggleSizesDemo,
  "theme-toggle-button-rounded": ThemeToggleRoundedDemo,
  "theme-toggle-button-colored": ThemeToggleColoredDemo,
  "theme-toggle-button-dual-color": ThemeToggleDualColorDemo,
  // Liquid Glass Buttons
  "liquid-glass-button": LiquidGlassButtonDemo,
  "liquid-glass-button-sizes": LiquidGlassSizesDemo,
  "liquid-glass-button-variants": LiquidGlassVariantsDemo,
  "liquid-glass-button-colors": LiquidGlassColorsDemo,
  "liquid-glass-button-advanced": LiquidGlassAdvancedDemo,
  // Warp Button
  "warp-button": WarpButtonDemo,
  "warp-button-ink": WarpButtonInkDemo,
  "warp-button-high-distortion": WarpButtonHighDistortionDemo,
  "warp-button-subtle-warp": WarpButtonSubtleWarpDemo,
  "warp-button-custom-shape": WarpButtonCustomShapeDemo,
  "warp-button-text-customization": WarpButtonTextCustomizationDemo,
  // 3D Text
  "text-3d": Text3DDemo,
  "text-3d-gradient": Text3DGradientDemo,
  "text-3d-advanced": Text3DAdvancedDemo,
  // Neubrutalism Button
  "neubrutalism-button": NeubrutalismButtonDemo,
  "neubrutalism-button-demo": NeubrutalismButtonDemo,
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
