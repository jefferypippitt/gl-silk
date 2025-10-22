// Static registry mapping for Turbopack compatibility
import { HelloWorld } from "@/registry/new-york/blocks/hello-world/hello-world";
import { ExampleForm } from "@/registry/new-york/blocks/example-form/example-form";
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
import { ThemeToggleVariantsDemo } from "@/registry/new-york/components/theme-toggle-button/variants-demo";
import { ThemeToggleIconVariantsDemo } from "@/registry/new-york/components/theme-toggle-button/icon-variants-demo";
import { ThemeToggleRoundedDemo } from "@/registry/new-york/components/theme-toggle-button/rounded-demo";
import { ThemeToggleColoredDemo } from "@/registry/new-york/components/theme-toggle-button/colored-demo";
import { ThemeToggleDualColorDemo } from "@/registry/new-york/components/theme-toggle-button/dual-color-demo";
import { ThemeToggleIntegratedDemo } from "@/registry/new-york/components/theme-toggle-button/theme-toggle-integrated-demo";
import { ThemeToggleWithTextDemo } from "@/registry/new-york/components/theme-toggle-button/with-text-demo";
import { ThemeToggleAdvancedDemo } from "@/registry/new-york/components/theme-toggle-button/advanced-demo";

export const componentRegistry: Record<string, React.ComponentType> = {
  "hello-world": HelloWorld,
  "example-form": ExampleForm,
  "example-with-css": ExampleCard,
  "split-text-demo": SplitTextDemo,
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
  "mesh-gradient-demo": MeshGradientDemo,
  "high-energy-demo": HighEnergyDemo,
  "ocean-theme-demo": OceanThemeDemo,
  "text-customization-demo": TextCustomizationDemo,
  "play-pause-demo": PlayPauseDemo,
  "play-pause-sizes": PlayPauseSizesDemo,
  "play-pause-variants": PlayPauseVariantsDemo,
  "play-pause-icon-variants": PlayPauseIconVariantsDemo,
  "play-pause-rounded": PlayPauseRoundedDemo,
  "theme-toggle-demo": ThemeToggleDemo,
  "theme-toggle-sizes": ThemeToggleSizesDemo,
  "theme-toggle-variants": ThemeToggleVariantsDemo,
  "theme-toggle-icon-variants": ThemeToggleIconVariantsDemo,
  "theme-toggle-rounded": ThemeToggleRoundedDemo,
  "theme-toggle-colored": ThemeToggleColoredDemo,
  "theme-toggle-dual-color": ThemeToggleDualColorDemo,
  "theme-toggle-integrated": ThemeToggleIntegratedDemo,
  "theme-toggle-with-text": ThemeToggleWithTextDemo,
  "theme-toggle-advanced": ThemeToggleAdvancedDemo,
};
