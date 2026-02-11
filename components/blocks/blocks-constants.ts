// Group categories for tabs
export const CATEGORY_GROUPS = [
  { id: "landing-page", label: "Landing Page" },
  { id: "application-ui", label: "Application UI" },
  { id: "e-commerce", label: "E-commerce" },
] as const;

// Map actual categories to groups
export const CATEGORY_TO_GROUP: Record<string, string> = {
  // Landing Page
  "landing-page": "landing-page",
  "hero-section": "landing-page",
  cta: "landing-page",
  features: "landing-page",
  testimonials: "landing-page",
  faqs: "landing-page",
  pricing: "landing-page",
  "logo-cloud": "landing-page",
  blog: "landing-page",
  team: "landing-page",
  stats: "landing-page",
  newsletter: "landing-page",

  // Application UI
  auth: "application-ui",
  form: "application-ui",
  header: "application-ui",
  footer: "application-ui",
  "not-found": "application-ui",
  contact: "application-ui",
  dashboard: "application-ui",
  sidebar: "application-ui",
  profile: "application-ui",
  settings: "application-ui",
  table: "application-ui",
  notification: "application-ui",

  // E-commerce
  "image-gallery": "e-commerce",
  "product-card": "e-commerce",
  "shopping-cart": "e-commerce",
  checkout: "e-commerce",

  // Other
  "coming-soon": "other",
};
