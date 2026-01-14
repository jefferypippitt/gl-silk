// Group categories for tabs
export const CATEGORY_GROUPS = [
  { id: "landing-page", label: "Landing Page" },
  { id: "application-ui", label: "Application UI" },
  { id: "e-commerce", label: "E-commerce" },
] as const;

// Map actual categories to groups
export const CATEGORY_TO_GROUP: Record<string, string> = {
  "landing-page": "landing-page",
  "hero-section": "landing-page",
  cta: "landing-page",
  features: "landing-page",
  testimonials: "landing-page",
  faqs: "landing-page",
  pricing: "landing-page",
  "logo-cloud": "landing-page",
  auth: "application-ui",
  form: "application-ui",
  header: "application-ui",
  footer: "application-ui",
  "not-found": "application-ui",
  contact: "application-ui",
  "image-gallery": "e-commerce",
  "coming-soon": "other",
};
