import { Skeleton } from "@/components/ui/skeleton";

interface BlockCategorySkeletonProps {
  category: string;
}

/**
 * Miniature skeleton illustrations representing what each block category
 * typically looks like in a real web application.
 */
export function BlockCategorySkeleton({ category }: BlockCategorySkeletonProps) {
  const skeletonMap: Record<string, React.ReactNode> = {
    // Landing Page
    "hero-section": <HeroSkeleton />,
    cta: <CTASkeleton />,
    features: <FeaturesSkeleton />,
    testimonials: <TestimonialsSkeleton />,
    faqs: <FAQsSkeleton />,
    pricing: <PricingSkeleton />,
    "logo-cloud": <LogoCloudSkeleton />,
    blog: <BlogSkeleton />,
    team: <TeamSkeleton />,
    stats: <StatsSkeleton />,
    newsletter: <NewsletterSkeleton />,

    // Application UI
    auth: <AuthSkeleton />,
    form: <FormSkeleton />,
    header: <HeaderSkeleton />,
    footer: <FooterSkeleton />,
    "not-found": <NotFoundSkeleton />,
    contact: <ContactSkeleton />,
    dashboard: <DashboardSkeleton />,
    sidebar: <SidebarSkeleton />,
    profile: <ProfileSkeleton />,
    settings: <SettingsSkeleton />,
    table: <TableSkeleton />,
    notification: <NotificationSkeleton />,

    // E-commerce
    "image-gallery": <ImageGallerySkeleton />,
    "product-card": <ProductCardSkeleton />,
    "shopping-cart": <ShoppingCartSkeleton />,
    checkout: <CheckoutSkeleton />,

    // Other
    other: <OtherSkeleton />,
  };

  return (
    <div className="w-full aspect-[16/10] rounded-md border border-border/50 bg-background/50 p-3 overflow-hidden">
      {skeletonMap[category] || <DefaultSkeleton />}
    </div>
  );
}

/* ─── Hero Section ─── centered badge, big heading, paragraph, two buttons */
function HeroSkeleton() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-1.5">
      <Skeleton className="h-1.5 w-10 rounded-full" />
      <Skeleton className="h-2.5 w-28 rounded-sm" />
      <Skeleton className="h-2.5 w-24 rounded-sm" />
      <div className="mt-0.5 flex flex-col items-center gap-1">
        <Skeleton className="h-1 w-32 rounded-full" />
        <Skeleton className="h-1 w-28 rounded-full" />
      </div>
      <div className="mt-1.5 flex gap-1.5">
        <Skeleton className="h-2.5 w-10 rounded-full" />
        <Skeleton className="h-2.5 w-10 rounded-full opacity-50" />
      </div>
    </div>
  );
}

/* ─── CTA ─── left-aligned heading with right button */
function CTASkeleton() {
  return (
    <div className="flex h-full flex-col justify-center gap-2 px-1">
      <div className="flex items-end justify-between gap-4">
        <div className="flex flex-1 flex-col gap-1.5">
          <Skeleton className="h-2.5 w-24 rounded-sm" />
          <Skeleton className="h-1 w-full max-w-[100px] rounded-full" />
          <Skeleton className="h-1 w-full max-w-[80px] rounded-full" />
        </div>
        <Skeleton className="h-3 w-12 shrink-0 rounded-full" />
      </div>
      <Skeleton className="h-px w-full opacity-30" />
    </div>
  );
}

/* ─── Features ─── 2x2 grid of icon + text cards */
function FeaturesSkeleton() {
  return (
    <div className="flex h-full flex-col gap-1.5">
      <div className="flex flex-col items-center gap-1 pb-1">
        <Skeleton className="h-1 w-8 rounded-full" />
        <Skeleton className="h-2 w-20 rounded-sm" />
      </div>
      <div className="grid grid-cols-2 gap-1.5 flex-1">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="flex flex-col items-center gap-1 rounded-md border border-border/30 p-1.5"
          >
            <Skeleton className="size-3 rounded-md" />
            <Skeleton className="h-1 w-10 rounded-full" />
            <Skeleton className="h-0.5 w-14 rounded-full opacity-50" />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Testimonials ─── quote with avatar */
function TestimonialsSkeleton() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-2">
      {/* Quote marks */}
      <div className="flex gap-0.5">
        <Skeleton className="size-2 rounded-full opacity-30" />
        <Skeleton className="size-2 rounded-full opacity-30" />
      </div>
      <div className="flex flex-col items-center gap-1">
        <Skeleton className="h-1 w-32 rounded-full" />
        <Skeleton className="h-1 w-28 rounded-full" />
        <Skeleton className="h-1 w-20 rounded-full" />
      </div>
      <div className="mt-1 flex items-center gap-1.5">
        <Skeleton className="size-3.5 rounded-full" />
        <div className="flex flex-col gap-0.5">
          <Skeleton className="h-1 w-10 rounded-full" />
          <Skeleton className="h-0.5 w-8 rounded-full opacity-50" />
        </div>
      </div>
    </div>
  );
}

/* ─── FAQs ─── accordion-style lines */
function FAQsSkeleton() {
  return (
    <div className="flex h-full flex-col gap-1 justify-center px-1">
      <Skeleton className="h-2 w-16 rounded-sm mb-1" />
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          className="flex items-center justify-between rounded-md border border-border/30 px-2 py-1.5"
        >
          <Skeleton className="h-1 w-20 rounded-full" />
          <Skeleton className="size-2 rounded-sm opacity-40" />
        </div>
      ))}
    </div>
  );
}

/* ─── Pricing ─── three price columns */
function PricingSkeleton() {
  return (
    <div className="flex h-full flex-col gap-1.5">
      <div className="flex flex-col items-center gap-0.5 pb-0.5">
        <Skeleton className="h-2 w-14 rounded-sm" />
        <Skeleton className="h-0.5 w-24 rounded-full opacity-50" />
      </div>
      <div className="grid grid-cols-3 gap-1 flex-1">
        {[false, true, false].map((featured, i) => (
          <div
            key={i}
            className={`flex flex-col items-center gap-1 rounded-md border p-1.5 ${featured ? "border-foreground/30 bg-accent/50" : "border-border/30"
              }`}
          >
            <Skeleton className="h-1 w-6 rounded-full" />
            <Skeleton className="h-2.5 w-8 rounded-sm" />
            <div className="flex flex-col gap-0.5 w-full mt-0.5">
              <Skeleton className="h-0.5 w-full rounded-full opacity-40" />
              <Skeleton className="h-0.5 w-full rounded-full opacity-40" />
              <Skeleton className="h-0.5 w-3/4 rounded-full opacity-40" />
            </div>
            <Skeleton className="mt-auto h-2 w-full rounded-full" />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Logo Cloud ─── row of logo placeholders */
function LogoCloudSkeleton() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-3">
      <Skeleton className="h-1 w-24 rounded-full opacity-50" />
      <div className="flex items-center gap-3">
        {[...Array(5)].map((_, i) => (
          <Skeleton
            key={i}
            className="size-5 rounded-md"
            style={{ opacity: 0.3 + (i % 3) * 0.2 }}
          />
        ))}
      </div>
      <div className="flex items-center gap-3">
        {[...Array(4)].map((_, i) => (
          <Skeleton
            key={i}
            className="size-5 rounded-md"
            style={{ opacity: 0.4 + (i % 2) * 0.15 }}
          />
        ))}
      </div>
    </div>
  );
}

/* ─── Auth ─── centered card with form inputs and button */
function AuthSkeleton() {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="flex w-3/4 max-w-[120px] flex-col gap-1.5 rounded-md border border-border/40 p-2">
        <Skeleton className="h-2 w-16 rounded-sm" />
        <Skeleton className="h-0.5 w-full rounded-full opacity-40" />
        <div className="flex flex-col gap-1 mt-0.5">
          <Skeleton className="h-0.5 w-5 rounded-full opacity-60" />
          <Skeleton className="h-2.5 w-full rounded-sm opacity-30" />
          <Skeleton className="h-0.5 w-6 rounded-full opacity-60" />
          <Skeleton className="h-2.5 w-full rounded-sm opacity-30" />
        </div>
        <Skeleton className="h-2.5 w-full rounded-sm mt-0.5" />
        <Skeleton className="h-2.5 w-full rounded-sm opacity-40" />
      </div>
    </div>
  );
}

/* ─── Form ─── card with labeled inputs and submit */
function FormSkeleton() {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="flex w-4/5 max-w-[130px] flex-col gap-1.5 rounded-md border border-border/40 p-2">
        <Skeleton className="h-2 w-14 rounded-sm" />
        <div className="grid grid-cols-2 gap-1">
          <div className="flex flex-col gap-0.5">
            <Skeleton className="h-0.5 w-6 rounded-full opacity-50" />
            <Skeleton className="h-2.5 w-full rounded-sm opacity-30" />
          </div>
          <div className="flex flex-col gap-0.5">
            <Skeleton className="h-0.5 w-6 rounded-full opacity-50" />
            <Skeleton className="h-2.5 w-full rounded-sm opacity-30" />
          </div>
        </div>
        <div className="flex flex-col gap-0.5">
          <Skeleton className="h-0.5 w-5 rounded-full opacity-50" />
          <Skeleton className="h-2.5 w-full rounded-sm opacity-30" />
        </div>
        <div className="flex flex-col gap-0.5">
          <Skeleton className="h-0.5 w-8 rounded-full opacity-50" />
          <Skeleton className="h-5 w-full rounded-sm opacity-20" />
        </div>
        <Skeleton className="h-2.5 w-full rounded-sm mt-0.5" />
      </div>
    </div>
  );
}

/* ─── Header / Navbar ─── logo + nav links + button */
function HeaderSkeleton() {
  return (
    <div className="flex h-full flex-col justify-center gap-2 px-1">
      <div className="flex items-center justify-between rounded-md border border-border/30 px-2 py-1.5">
        <Skeleton className="h-2.5 w-8 rounded-sm" />
        <div className="flex items-center gap-2">
          <Skeleton className="h-1 w-6 rounded-full" />
          <Skeleton className="h-1 w-6 rounded-full" />
          <Skeleton className="h-1 w-6 rounded-full" />
          <Skeleton className="h-1 w-6 rounded-full" />
        </div>
        <Skeleton className="h-2.5 w-8 rounded-full" />
      </div>
      {/* Page content hint */}
      <div className="flex-1 flex flex-col items-center justify-center gap-1 opacity-30">
        <Skeleton className="h-2 w-20 rounded-sm" />
        <Skeleton className="h-1 w-28 rounded-full" />
      </div>
    </div>
  );
}

/* ─── Footer ─── multi-column footer layout */
function FooterSkeleton() {
  return (
    <div className="flex h-full flex-col justify-end gap-1.5 px-1">
      {/* Page content hint */}
      <div className="flex-1 flex flex-col items-center justify-center gap-1 opacity-20">
        <Skeleton className="h-1.5 w-16 rounded-sm" />
        <Skeleton className="h-1 w-24 rounded-full" />
      </div>
      {/* Footer */}
      <div className="rounded-md border-t border-border/40 pt-1.5">
        <div className="grid grid-cols-4 gap-2 px-1 pb-1.5">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex flex-col gap-0.5">
              <Skeleton className="h-1 w-8 rounded-full" />
              <Skeleton className="h-0.5 w-6 rounded-full opacity-40" />
              <Skeleton className="h-0.5 w-7 rounded-full opacity-40" />
              <Skeleton className="h-0.5 w-5 rounded-full opacity-40" />
            </div>
          ))}
        </div>
        <Skeleton className="h-px w-full opacity-20" />
        <div className="flex items-center justify-between py-1">
          <Skeleton className="h-0.5 w-16 rounded-full opacity-30" />
          <div className="flex gap-1">
            <Skeleton className="size-2 rounded-full opacity-30" />
            <Skeleton className="size-2 rounded-full opacity-30" />
            <Skeleton className="size-2 rounded-full opacity-30" />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Not Found (404) ─── big number + message + button */
function NotFoundSkeleton() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-1.5">
      <div className="flex items-baseline gap-0.5">
        <Skeleton className="h-6 w-5 rounded-sm" />
        <Skeleton className="h-6 w-5 rounded-sm" />
        <Skeleton className="h-6 w-5 rounded-sm" />
      </div>
      <Skeleton className="h-1.5 w-20 rounded-full" />
      <Skeleton className="h-1 w-28 rounded-full opacity-50" />
      <Skeleton className="mt-1 h-2.5 w-14 rounded-full" />
    </div>
  );
}

/* ─── Contact ─── form + info sidebar */
function ContactSkeleton() {
  return (
    <div className="flex h-full gap-2 px-1 items-center">
      {/* Info side */}
      <div className="flex w-2/5 flex-col gap-1.5 rounded-md border border-border/30 p-2">
        <Skeleton className="h-2 w-10 rounded-sm" />
        <Skeleton className="h-0.5 w-full rounded-full opacity-40" />
        <Skeleton className="h-0.5 w-3/4 rounded-full opacity-40" />
        <div className="mt-1 flex flex-col gap-1">
          <div className="flex items-center gap-1">
            <Skeleton className="size-2 rounded-full opacity-40" />
            <Skeleton className="h-0.5 w-10 rounded-full opacity-40" />
          </div>
          <div className="flex items-center gap-1">
            <Skeleton className="size-2 rounded-full opacity-40" />
            <Skeleton className="h-0.5 w-12 rounded-full opacity-40" />
          </div>
        </div>
      </div>
      {/* Form side */}
      <div className="flex flex-1 flex-col gap-1 rounded-md border border-border/30 p-2">
        <Skeleton className="h-0.5 w-5 rounded-full opacity-50" />
        <Skeleton className="h-2 w-full rounded-sm opacity-25" />
        <Skeleton className="h-0.5 w-5 rounded-full opacity-50" />
        <Skeleton className="h-2 w-full rounded-sm opacity-25" />
        <Skeleton className="h-0.5 w-8 rounded-full opacity-50" />
        <Skeleton className="h-4 w-full rounded-sm opacity-20" />
        <Skeleton className="h-2.5 w-full rounded-sm mt-0.5" />
      </div>
    </div>
  );
}

/* ─── Image Gallery ─── masonry-like grid of image placeholders */
function ImageGallerySkeleton() {
  return (
    <div className="flex h-full flex-col gap-1.5">
      <div className="flex items-center justify-between">
        <Skeleton className="h-2 w-14 rounded-sm" />
        <div className="flex gap-1">
          <Skeleton className="h-1.5 w-5 rounded-full opacity-40" />
          <Skeleton className="h-1.5 w-5 rounded-full opacity-40" />
          <Skeleton className="h-1.5 w-5 rounded-full opacity-40" />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-1 flex-1">
        <Skeleton className="rounded-md col-span-2 row-span-2" />
        <Skeleton className="rounded-md" />
        <Skeleton className="rounded-md" />
        <Skeleton className="rounded-md" />
        <Skeleton className="rounded-md" />
        <Skeleton className="rounded-md" />
      </div>
    </div>
  );
}

/* ─── Blog ─── article card grid */
function BlogSkeleton() {
  return (
    <div className="flex h-full flex-col gap-1.5">
      <div className="flex items-center justify-between">
        <Skeleton className="h-2 w-10 rounded-sm" />
        <Skeleton className="h-1 w-8 rounded-full opacity-40" />
      </div>
      <div className="grid grid-cols-3 gap-1.5 flex-1">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="flex flex-col gap-1 rounded-md border border-border/30 overflow-hidden"
          >
            <Skeleton className="h-8 w-full rounded-none" />
            <div className="flex flex-col gap-0.5 px-1.5 pb-1.5">
              <Skeleton className="h-1 w-8 rounded-full opacity-40" />
              <Skeleton className="h-1.5 w-full rounded-sm" />
              <Skeleton className="h-0.5 w-full rounded-full opacity-40" />
              <Skeleton className="h-0.5 w-3/4 rounded-full opacity-40" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Team ─── team member cards with avatars */
function TeamSkeleton() {
  return (
    <div className="flex h-full flex-col gap-1.5">
      <div className="flex flex-col items-center gap-0.5 pb-1">
        <Skeleton className="h-1 w-8 rounded-full opacity-50" />
        <Skeleton className="h-2 w-16 rounded-sm" />
      </div>
      <div className="grid grid-cols-4 gap-1.5 flex-1">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="flex flex-col items-center gap-1 rounded-md border border-border/30 p-1.5"
          >
            <Skeleton className="size-5 rounded-full" />
            <Skeleton className="h-1 w-10 rounded-full" />
            <Skeleton className="h-0.5 w-8 rounded-full opacity-40" />
            <div className="flex gap-0.5 mt-0.5">
              <Skeleton className="size-1.5 rounded-full opacity-30" />
              <Skeleton className="size-1.5 rounded-full opacity-30" />
              <Skeleton className="size-1.5 rounded-full opacity-30" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Stats ─── metric counters in a row */
function StatsSkeleton() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-2.5">
      <div className="flex flex-col items-center gap-0.5">
        <Skeleton className="h-2 w-20 rounded-sm" />
        <Skeleton className="h-1 w-28 rounded-full opacity-40" />
      </div>
      <div className="flex w-full justify-center gap-3">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex flex-col items-center gap-1">
            <Skeleton className="h-4 w-10 rounded-sm" />
            <Skeleton className="h-0.5 w-8 rounded-full opacity-50" />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Newsletter ─── email signup strip */
function NewsletterSkeleton() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-2 px-2">
      <Skeleton className="size-4 rounded-full opacity-30" />
      <Skeleton className="h-2 w-24 rounded-sm" />
      <div className="flex flex-col items-center gap-1">
        <Skeleton className="h-1 w-32 rounded-full opacity-50" />
        <Skeleton className="h-1 w-28 rounded-full opacity-50" />
      </div>
      <div className="flex gap-1 mt-0.5">
        <Skeleton className="h-3 w-24 rounded-sm opacity-25" />
        <Skeleton className="h-3 w-10 rounded-sm" />
      </div>
      <Skeleton className="h-0.5 w-20 rounded-full opacity-30" />
    </div>
  );
}

/* ─── Dashboard ─── stat cards + chart area + sidebar hints */
function DashboardSkeleton() {
  return (
    <div className="flex h-full gap-1.5">
      {/* Main area */}
      <div className="flex flex-1 flex-col gap-1.5">
        {/* Stat cards row */}
        <div className="grid grid-cols-3 gap-1">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="flex flex-col gap-0.5 rounded-md border border-border/30 p-1.5"
            >
              <Skeleton className="h-0.5 w-6 rounded-full opacity-40" />
              <Skeleton className="h-2.5 w-8 rounded-sm" />
              <Skeleton className="h-0.5 w-10 rounded-full opacity-30" />
            </div>
          ))}
        </div>
        {/* Chart area */}
        <div className="flex-1 rounded-md border border-border/30 p-1.5 flex flex-col gap-1">
          <Skeleton className="h-1 w-10 rounded-full" />
          <div className="flex items-end gap-1 flex-1">
            {[40, 65, 45, 80, 55, 70, 50, 90, 60].map((h, i) => (
              <Skeleton
                key={i}
                className="flex-1 rounded-sm"
                style={{ height: `${h}%`, opacity: 0.3 + (i % 3) * 0.15 }}
              />
            ))}
          </div>
        </div>
      </div>
      {/* Mini sidebar */}
      <div className="flex w-1/4 flex-col gap-1 rounded-md border border-border/30 p-1.5">
        <Skeleton className="h-1 w-8 rounded-full" />
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center gap-1">
            <Skeleton className="size-2 rounded-full opacity-40" />
            <Skeleton className="h-0.5 flex-1 rounded-full opacity-40" />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Sidebar ─── sidebar nav + content area */
function SidebarSkeleton() {
  return (
    <div className="flex h-full gap-1.5">
      {/* Sidebar */}
      <div className="flex w-1/3 flex-col gap-1.5 rounded-md border border-border/30 p-1.5">
        <Skeleton className="h-2.5 w-10 rounded-sm" />
        <Skeleton className="h-px w-full opacity-20" />
        <div className="flex flex-col gap-1">
          {["w-14", "w-12", "w-16", "w-10", "w-14", "w-11"].map((w, i) => (
            <div key={i} className="flex items-center gap-1">
              <Skeleton className="size-2 rounded-sm opacity-40" />
              <Skeleton className={`h-1 ${w} rounded-full ${i === 0 ? "opacity-80" : "opacity-40"}`} />
            </div>
          ))}
        </div>
        <div className="mt-auto">
          <Skeleton className="h-px w-full opacity-20 mb-1" />
          <div className="flex items-center gap-1">
            <Skeleton className="size-2.5 rounded-full" />
            <Skeleton className="h-1 w-10 rounded-full opacity-50" />
          </div>
        </div>
      </div>
      {/* Content */}
      <div className="flex flex-1 flex-col gap-1.5 p-1">
        <Skeleton className="h-2 w-16 rounded-sm" />
        <Skeleton className="h-1 w-24 rounded-full opacity-40" />
        <div className="flex-1 rounded-md border border-border/20 p-1.5 flex flex-col gap-1">
          <Skeleton className="h-0.5 w-full rounded-full opacity-20" />
          <Skeleton className="h-0.5 w-full rounded-full opacity-20" />
          <Skeleton className="h-0.5 w-3/4 rounded-full opacity-20" />
        </div>
      </div>
    </div>
  );
}

/* ─── Profile ─── user profile with avatar, info, and activity */
function ProfileSkeleton() {
  return (
    <div className="flex h-full flex-col gap-2">
      {/* Cover */}
      <Skeleton className="h-6 w-full rounded-md opacity-30" />
      {/* Avatar + info */}
      <div className="flex items-center gap-2 px-2 -mt-3">
        <Skeleton className="size-6 rounded-full shrink-0 border-2 border-background" />
        <div className="flex flex-col gap-0.5 mt-2">
          <Skeleton className="h-1.5 w-14 rounded-sm" />
          <Skeleton className="h-0.5 w-10 rounded-full opacity-40" />
        </div>
        <div className="ml-auto mt-2">
          <Skeleton className="h-2.5 w-8 rounded-full" />
        </div>
      </div>
      {/* Bio */}
      <div className="flex flex-col gap-0.5 px-2">
        <Skeleton className="h-0.5 w-full rounded-full opacity-30" />
        <Skeleton className="h-0.5 w-3/4 rounded-full opacity-30" />
      </div>
      {/* Stats row */}
      <div className="flex justify-center gap-4 px-2">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex flex-col items-center gap-0.5">
            <Skeleton className="h-1.5 w-4 rounded-sm" />
            <Skeleton className="h-0.5 w-6 rounded-full opacity-40" />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Settings ─── toggle rows and sections */
function SettingsSkeleton() {
  return (
    <div className="flex h-full flex-col gap-1.5 px-1 justify-center">
      <Skeleton className="h-2 w-12 rounded-sm" />
      <Skeleton className="h-0.5 w-24 rounded-full opacity-40" />
      <Skeleton className="h-px w-full opacity-15 my-0.5" />
      {[...Array(4)].map((_, i) => (
        <div key={i} className="flex items-center justify-between py-0.5">
          <div className="flex flex-col gap-0.5">
            <Skeleton className="h-1 w-16 rounded-full" />
            <Skeleton className="h-0.5 w-24 rounded-full opacity-30" />
          </div>
          <Skeleton className="h-2 w-4 rounded-full opacity-50" />
        </div>
      ))}
      <Skeleton className="h-px w-full opacity-15 my-0.5" />
      <div className="flex gap-1">
        <Skeleton className="h-2.5 w-10 rounded-sm" />
        <Skeleton className="h-2.5 w-10 rounded-sm opacity-40" />
      </div>
    </div>
  );
}

/* ─── Table ─── data table with header and rows */
function TableSkeleton() {
  return (
    <div className="flex h-full flex-col gap-1.5 px-0.5">
      <div className="flex items-center justify-between">
        <Skeleton className="h-2 w-12 rounded-sm" />
        <div className="flex gap-1">
          <Skeleton className="h-2.5 w-14 rounded-sm opacity-25" />
          <Skeleton className="h-2.5 w-8 rounded-sm" />
        </div>
      </div>
      {/* Table */}
      <div className="flex-1 rounded-md border border-border/30 overflow-hidden">
        {/* Header row */}
        <div className="flex gap-2 border-b border-border/30 bg-accent/30 px-2 py-1">
          <Skeleton className="h-0.5 w-3 rounded-full opacity-40" />
          <Skeleton className="h-0.5 w-10 rounded-full opacity-40" />
          <Skeleton className="h-0.5 flex-1 rounded-full opacity-40" />
          <Skeleton className="h-0.5 w-8 rounded-full opacity-40" />
          <Skeleton className="h-0.5 w-6 rounded-full opacity-40" />
        </div>
        {/* Data rows */}
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="flex gap-2 border-b border-border/15 px-2 py-1.5"
          >
            <Skeleton className="size-1.5 rounded-sm opacity-25" />
            <Skeleton className="h-1 w-10 rounded-full opacity-30" />
            <Skeleton className="h-1 flex-1 rounded-full opacity-20" />
            <Skeleton className="h-1 w-8 rounded-full opacity-30" />
            <Skeleton className="h-1 w-6 rounded-full opacity-20" />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Notification ─── stacked notification cards */
function NotificationSkeleton() {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="flex w-4/5 max-w-[140px] flex-col gap-1 rounded-md border border-border/40 p-2">
        <div className="flex items-center justify-between mb-0.5">
          <Skeleton className="h-1.5 w-14 rounded-sm" />
          <Skeleton className="h-1 w-6 rounded-full opacity-30" />
        </div>
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="flex items-start gap-1.5 rounded-md border border-border/25 p-1.5"
          >
            <Skeleton className="size-2.5 shrink-0 rounded-full" />
            <div className="flex flex-1 flex-col gap-0.5">
              <Skeleton className="h-1 w-16 rounded-full" />
              <Skeleton className="h-0.5 w-full rounded-full opacity-30" />
              <Skeleton className="h-0.5 w-6 rounded-full opacity-20" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Product Card ─── e-commerce product grid */
function ProductCardSkeleton() {
  return (
    <div className="flex h-full flex-col gap-1.5">
      <div className="flex items-center justify-between">
        <Skeleton className="h-2 w-14 rounded-sm" />
        <Skeleton className="h-1 w-8 rounded-full opacity-40" />
      </div>
      <div className="grid grid-cols-3 gap-1.5 flex-1">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="flex flex-col gap-1 rounded-md border border-border/30 overflow-hidden"
          >
            <Skeleton className="h-8 w-full rounded-none" />
            <div className="flex flex-col gap-0.5 px-1.5 pb-1.5">
              <Skeleton className="h-1 w-full rounded-full" />
              <div className="flex items-center justify-between">
                <Skeleton className="h-1.5 w-6 rounded-sm" />
                <Skeleton className="h-0.5 w-6 rounded-full opacity-30 line-through" />
              </div>
              <div className="flex gap-0.5 mt-0.5">
                {[...Array(5)].map((_, j) => (
                  <Skeleton
                    key={j}
                    className="size-1 rounded-full"
                    style={{ opacity: j < 4 ? 0.6 : 0.2 }}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Shopping Cart ─── cart sidebar with items */
function ShoppingCartSkeleton() {
  return (
    <div className="flex h-full items-center justify-end">
      <div className="flex h-full w-3/5 max-w-[150px] flex-col gap-1.5 rounded-l-md border border-border/40 p-2">
        <div className="flex items-center justify-between">
          <Skeleton className="h-1.5 w-10 rounded-sm" />
          <Skeleton className="size-2 rounded-sm opacity-30" />
        </div>
        <Skeleton className="h-px w-full opacity-20" />
        {/* Cart items */}
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex items-center gap-1.5">
            <Skeleton className="size-5 shrink-0 rounded-md" />
            <div className="flex flex-1 flex-col gap-0.5">
              <Skeleton className="h-1 w-12 rounded-full" />
              <Skeleton className="h-0.5 w-6 rounded-full opacity-40" />
            </div>
            <Skeleton className="h-1 w-5 rounded-full" />
          </div>
        ))}
        <Skeleton className="h-px w-full opacity-20 mt-auto" />
        <div className="flex items-center justify-between">
          <Skeleton className="h-1 w-6 rounded-full opacity-50" />
          <Skeleton className="h-1.5 w-8 rounded-sm" />
        </div>
        <Skeleton className="h-3 w-full rounded-sm" />
      </div>
    </div>
  );
}

/* ─── Checkout ─── multi-step checkout form */
function CheckoutSkeleton() {
  return (
    <div className="flex h-full gap-2 px-0.5">
      {/* Form side */}
      <div className="flex flex-1 flex-col gap-1.5">
        {/* Steps */}
        <div className="flex items-center gap-1 mb-0.5">
          {[true, false, false].map((active, i) => (
            <div key={i} className="flex items-center gap-0.5">
              <Skeleton
                className={`size-2 rounded-full ${active ? "" : "opacity-30"}`}
              />
              <Skeleton
                className={`h-0.5 w-6 rounded-full ${active ? "" : "opacity-30"}`}
              />
              {i < 2 && <Skeleton className="h-px w-3 opacity-20" />}
            </div>
          ))}
        </div>
        <Skeleton className="h-1.5 w-14 rounded-sm" />
        <div className="grid grid-cols-2 gap-1">
          <div className="flex flex-col gap-0.5">
            <Skeleton className="h-0.5 w-6 rounded-full opacity-50" />
            <Skeleton className="h-2.5 w-full rounded-sm opacity-25" />
          </div>
          <div className="flex flex-col gap-0.5">
            <Skeleton className="h-0.5 w-6 rounded-full opacity-50" />
            <Skeleton className="h-2.5 w-full rounded-sm opacity-25" />
          </div>
        </div>
        <div className="flex flex-col gap-0.5">
          <Skeleton className="h-0.5 w-8 rounded-full opacity-50" />
          <Skeleton className="h-2.5 w-full rounded-sm opacity-25" />
        </div>
        <div className="flex flex-col gap-0.5">
          <Skeleton className="h-0.5 w-10 rounded-full opacity-50" />
          <Skeleton className="h-2.5 w-full rounded-sm opacity-25" />
        </div>
        <Skeleton className="h-3 w-full rounded-sm mt-auto" />
      </div>
      {/* Order summary side */}
      <div className="flex w-2/5 flex-col gap-1 rounded-md border border-border/30 p-1.5">
        <Skeleton className="h-1 w-10 rounded-full" />
        <Skeleton className="h-px w-full opacity-20" />
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <Skeleton className="size-3 rounded-md" />
              <Skeleton className="h-0.5 w-8 rounded-full opacity-40" />
            </div>
            <Skeleton className="h-0.5 w-5 rounded-full opacity-40" />
          </div>
        ))}
        <Skeleton className="h-px w-full opacity-20 mt-auto" />
        <div className="flex items-center justify-between">
          <Skeleton className="h-1 w-6 rounded-full" />
          <Skeleton className="h-1.5 w-8 rounded-sm" />
        </div>
      </div>
    </div>
  );
}

/* ─── Other ─── placeholder */
function OtherSkeleton() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-2">
      <Skeleton className="size-5 rounded-full opacity-30" />
      <Skeleton className="h-2 w-16 rounded-sm" />
      <Skeleton className="h-1 w-24 rounded-full opacity-40" />
    </div>
  );
}

/* ─── Default fallback ─── */
function DefaultSkeleton() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-1.5">
      <Skeleton className="size-4 rounded-md opacity-30" />
      <Skeleton className="h-1.5 w-14 rounded-full" />
      <Skeleton className="h-1 w-20 rounded-full opacity-50" />
    </div>
  );
}
