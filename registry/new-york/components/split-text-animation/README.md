# Split Text Animation

A beautiful split text animation component using GSAP with multiple animation types and directions.

## Features

- ✨ Multiple animation types (fade, slide, scale, rotate)
- 🎯 Four directions (up, down, left, right)
- 📜 Scroll-triggered animations
- ⚡ Highly customizable
- 🎨 Smooth easing functions
- 🔧 TypeScript support

## Installation

```bash
pnpm add gsap
```

## Usage

### Basic Example

```tsx
import { SplitTextAnimation } from "@/registry/new-york/components/split-text-animation/split-text-animation";

export function MyComponent() {
  return (
    <SplitTextAnimation
      text="Build Beautiful Interfaces"
      animationType="fade"
    />
  );
}
```

### All Animation Types

```tsx
// Fade In
<SplitTextAnimation
  text="Fade In Text"
  animationType="fade"
  duration={0.8}
  stagger={0.03}
/>

// Slide Up
<SplitTextAnimation
  text="Slide Up Text"
  animationType="slide"
  direction="up"
  duration={0.8}
  stagger={0.03}
/>

// Scale In
<SplitTextAnimation
  text="Scale In Text"
  animationType="scale"
  duration={0.6}
  stagger={0.04}
/>

// Rotate In
<SplitTextAnimation
  text="Rotate In Text"
  animationType="rotate"
  duration={0.7}
  stagger={0.04}
/>
```

## Props

| Prop            | Type                                       | Default  | Description                           |
| --------------- | ------------------------------------------ | -------- | ------------------------------------- |
| `text`          | `string`                                   | required | The text to animate                   |
| `animationType` | `"fade" \| "slide" \| "scale" \| "rotate"` | `"fade"` | Type of animation                     |
| `direction`     | `"up" \| "down" \| "left" \| "right"`      | `"up"`   | Direction for slide animation         |
| `duration`      | `number`                                   | `0.8`    | Animation duration in seconds         |
| `stagger`       | `number`                                   | `0.05`   | Delay between each character          |
| `delay`         | `number`                                   | `0`      | Initial delay before animation starts |

## Animation Types

### Fade

Simple fade-in effect for each character.

### Slide

Slides characters from a direction (up, down, left, right).

### Scale

Scales characters from 0 to 1 with a bounce effect.

### Rotate

Rotates characters 180 degrees with a bounce effect.

## Customization

You can customize the styling by wrapping the component:

```tsx
<div className="text-center">
  <SplitTextAnimation
    text="Custom Styled Text"
    animationType="fade"
    className="text-6xl font-bold"
  />
</div>
```

## Performance

- Uses GSAP for optimal performance
- ScrollTrigger for efficient scroll-based animations
- Proper cleanup on unmount

## Browser Support

Works in all modern browsers that support GSAP.
