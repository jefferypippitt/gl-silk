// Static registry mapping for Turbopack compatibility
import MacOsTerminal from "@/registry/new-york/blocks/other/mac-os-terminal/mac-os-terminal";
import WindowsTerminal from "@/registry/new-york/blocks/other/windows-terminal/windows-terminal";
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
import { WarpButtonDemo } from "@/registry/new-york/components/warp-button/demo";
import { WarpButtonInkDemo } from "@/registry/new-york/components/warp-button/ink-demo";
import { WarpButtonHighDistortionDemo } from "@/registry/new-york/components/warp-button/high-distortion-demo";
import { WarpButtonSubtleWarpDemo } from "@/registry/new-york/components/warp-button/subtle-warp-demo";
import { WarpButtonCustomShapeDemo } from "@/registry/new-york/components/warp-button/custom-shape-demo";
import { WarpButtonTextCustomizationDemo } from "@/registry/new-york/components/warp-button/text-customization-demo";
import { Text3DDemo } from "@/registry/new-york/components/text-3d/demo";
import { Text3DGradientDemo } from "@/registry/new-york/components/text-3d/gradient-demo";
import { Text3DAdvancedDemo } from "@/registry/new-york/components/text-3d/advanced-demo";
import { DitherWaveDemo } from "@/registry/new-york/components/dither-wave/demo";
import { NeubrutalismButtonDemo } from "@/registry/new-york/components/neubrutalism-button/demo";
import { NeubrutalismButtonOutlineDemo } from "@/registry/new-york/components/neubrutalism-button/outline-demo";
import { NeubrutalismButtonDestructiveDemo } from "@/registry/new-york/components/neubrutalism-button/destructive-demo";
import { NeubrutalismButtonSecondaryDemo } from "@/registry/new-york/components/neubrutalism-button/secondary-demo";
import HeroSectionV1 from "@/registry/new-york/blocks/hero-section/hero-section-v1/hero-section-v1";
import HeroSectionV2 from "@/registry/new-york/blocks/hero-section/hero-section-v2/hero-section-v2";
import HeroSectionV3 from "@/registry/new-york/blocks/hero-section/hero-section-v3/hero-section-v3";
import HeroSectionV4 from "@/registry/new-york/blocks/hero-section/hero-section-v4/hero-section-v4";
import HeroSectionV5 from "@/registry/new-york/blocks/hero-section/hero-section-v5/hero-section-v5";
import FeatureSectionV1 from "@/registry/new-york/blocks/features-section/feature-section-v1/feature-section-v1";
import FeatureSectionV2 from "@/registry/new-york/blocks/features-section/feature-section-v2/feature-section-v2";
import CtaSectionV1 from "@/registry/new-york/blocks/cta-section/cta-section-v1/cta-section-v1";
import CtaSectionV2 from "@/registry/new-york/blocks/cta-section/cta-section-v2/cta-section-v2";
import HeroSectionV6 from "@/registry/new-york/blocks/hero-section/hero-section-v6/hero-section-v6";



export const componentRegistry: Record<string, React.ComponentType> = {
  "mac-os-terminal": MacOsTerminal,
  "windows-terminal": WindowsTerminal,
  "cta-section-v1": CtaSectionV1,
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
  "warp-button-demo": WarpButtonDemo,
  "warp-button-ink": WarpButtonInkDemo,
  "warp-button-high-distortion": WarpButtonHighDistortionDemo,
  "warp-button-subtle-warp": WarpButtonSubtleWarpDemo,
  "warp-button-custom-shape": WarpButtonCustomShapeDemo,
  "warp-button-text-customization": WarpButtonTextCustomizationDemo,
  "text-3d": Text3DDemo,
  "text-3d-gradient": Text3DGradientDemo,
  "text-3d-advanced": Text3DAdvancedDemo,
  "dither-wave-demo": DitherWaveDemo,
  "neubrutalism-button": NeubrutalismButtonDemo,
  "neubrutalism-button-demo": NeubrutalismButtonDemo,
  "neubrutalism-button-outline": NeubrutalismButtonOutlineDemo,
  "neubrutalism-button-destructive": NeubrutalismButtonDestructiveDemo,
  "neubrutalism-button-secondary": NeubrutalismButtonSecondaryDemo,
  "hero-section-v1": HeroSectionV1,
  "hero-section-v2": HeroSectionV2,
  "hero-section-v3": HeroSectionV3,
  "hero-section-v4": HeroSectionV4,
  "hero-section-v5": HeroSectionV5,
  "hero-section-v6": HeroSectionV6,
  "feature-section-v1": FeatureSectionV1,
  "feature-section-v2": FeatureSectionV2,
  "cta-section-v2": CtaSectionV2,

};