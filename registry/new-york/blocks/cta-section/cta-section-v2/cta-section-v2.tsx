import { Button } from "./button"
import CtaSectionV2Shader from "./cta-section-v2-shader"

export default function CtaSectionV2() {
  return (
    <section className="py-16 md:py-20 lg:py-24">
      <div className="container mx-auto max-w-6xl px-4">
        <CtaSectionV2Shader
          className="px-4 py-14 sm:px-8 sm:py-20 md:px-12 md:py-24 lg:px-16 lg:py-32"
          contentClassName="mx-auto flex w-full max-w-4xl flex-col items-center gap-7 text-center sm:gap-9 md:gap-10"
        >
          <div className="flex w-full flex-col items-center gap-2">
            <h1 className="text-sm leading-tight tracking-tight text-white"> Let's talk</h1>
            <h2 className="max-w-[18ch] text-balance break-words text-3xl leading-tight tracking-tight text-white sm:max-w-2xl sm:text-4xl md:text-5xl lg:max-w-3xl lg:text-6xl">
              Lorem ipsum dolor sit amet.
            </h2>
            <p className="max-w-xl text-balance break-words text-sm text-white/80 sm:max-w-2xl sm:text-base md:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="flex w-full max-w-sm flex-col items-stretch gap-3 sm:max-w-md md:max-w-none md:flex-row md:items-center md:justify-center">
            <Button
              variant="default"
              className="w-full md:w-auto"
            >
              Start For Free
            </Button>
            <Button
              variant="secondary"
              className="w-full md:w-auto"
            >
              Book a Demo
            </Button>
          </div>
        </CtaSectionV2Shader>
      </div>
    </section>
  )
}
