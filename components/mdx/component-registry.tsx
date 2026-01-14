// Static registry mapping for Turbopack compatibility
import { HelloWorld } from "@/registry/new-york/blocks/hello-world/hello-world";
import { ExampleForm } from "@/registry/new-york/blocks/example-form/example-form";
import { ExampleCard } from "@/registry/new-york/blocks/example-with-css/example-card";
import { LoginFormV1 } from "@/registry/new-york/blocks/auth/login-form-v1";
import { SignupForm } from "@/registry/new-york/blocks/auth/sign-up-form-v1";
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
import { NeubrutalismButtonOutlineDemo } from "@/registry/new-york/components/neubrutalism-button/outline-demo";
import { NeubrutalismButtonDestructiveDemo } from "@/registry/new-york/components/neubrutalism-button/destructive-demo";
import { NeubrutalismButtonSecondaryDemo } from "@/registry/new-york/components/neubrutalism-button/secondary-demo";

export const componentRegistry: Record<string, React.ComponentType> = {
  "hello-world": HelloWorld,
  "example-form": ExampleForm,
  "example-with-css": ExampleCard,
  "login-form-v1": LoginFormV1,
  "sign-up-form-v1": SignupForm,
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
  "split-text-custom-styling": CustomStylingDemo,
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
  "theme-toggle-rounded": ThemeToggleRoundedDemo,
  "theme-toggle-colored": ThemeToggleColoredDemo,
  "theme-toggle-dual-color": ThemeToggleDualColorDemo,
  "liquid-glass-button-demo": LiquidGlassButtonDemo,
  "liquid-glass-sizes": LiquidGlassSizesDemo,
  "liquid-glass-variants": LiquidGlassVariantsDemo,
  "liquid-glass-colors": LiquidGlassColorsDemo,
  "liquid-glass-advanced": LiquidGlassAdvancedDemo,
  "warp-button-demo": WarpButtonDemo,
  "warp-button-ink": WarpButtonInkDemo,
  "warp-button-high-distortion": WarpButtonHighDistortionDemo,
  "warp-button-subtle-warp": WarpButtonSubtleWarpDemo,
  "warp-button-custom-shape": WarpButtonCustomShapeDemo,
  "warp-button-text-customization": WarpButtonTextCustomizationDemo,
  "text-3d": Text3DDemo,
  "text-3d-gradient": Text3DGradientDemo,
  "text-3d-advanced": Text3DAdvancedDemo,
  "neubrutalism-button": NeubrutalismButtonDemo,
  "neubrutalism-button-demo": NeubrutalismButtonDemo,
  "neubrutalism-button-outline": NeubrutalismButtonOutlineDemo,
  "neubrutalism-button-destructive": NeubrutalismButtonDestructiveDemo,
  "neubrutalism-button-secondary": NeubrutalismButtonSecondaryDemo,
};
