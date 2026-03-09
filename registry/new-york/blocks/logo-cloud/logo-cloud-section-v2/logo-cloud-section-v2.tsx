import { Vercel } from "@/components/ui/svgs/vercel";
import { PolarShLight } from "@/components/ui/svgs/polarShLight";
import { Paypal } from "@/components/ui/svgs/paypal";
import { HorizontalBeam, FanBeams, CARD_H, CARD_GAP } from "./animated-beam";
import { CyclingBadge } from "./cycling-badge";

function StripeMarkIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Stripe">
      <rect x="0" y="0" width="48" height="36" rx="5" fill="white" fillOpacity="0.95" />
      <rect x="0" y="9" width="48" height="8" fill="white" fillOpacity="0.35" />
    </svg>
  );
}

export default function LogoCloudSectionV2() {
  return (
    <section className="py-16 md:py-20 lg:py-24">
      <div className="container mx-auto max-w-5xl px-4">

        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Get paid from anywhere
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Connect with top payment providers in just a few minutes
          </p>
        </div>

        {/* Diagram */}
        <div className="flex items-center justify-center">

          {/* Host logo */}
          <div className="shrink-0 w-[64px] h-[64px] rounded-2xl bg-card border border-border shadow-sm flex items-center justify-center">
            <Vercel className="w-8 h-8 fill-foreground" />
          </div>

          <HorizontalBeam />

          <CyclingBadge />

          <FanBeams />

          {/* Payment provider cards */}
          <div className="shrink-0 flex flex-col" style={{ gap: CARD_GAP }}>

            <div className="rounded-2xl bg-[#635BFF] shadow-sm flex items-center justify-center" style={{ width: CARD_H, height: CARD_H }}>
              <StripeMarkIcon className="w-9 h-7" />
            </div>

            <div className="rounded-2xl bg-card border border-border shadow-sm flex items-center justify-center" style={{ width: CARD_H, height: CARD_H }}>
              <PolarShLight className="w-9 h-9" />
            </div>

            <div className="rounded-2xl bg-card border border-border shadow-sm flex items-center justify-center" style={{ width: CARD_H, height: CARD_H }}>
              <Paypal className="w-8 h-9" />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
