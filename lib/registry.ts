import registry from "@/registry.json";

export interface RegistryItem {
  name: string;
  type: string;
  category?: string;
  title?: string;
  description?: string;
  registryDependencies?: string[];
  dependencies?: string[];
  files?: Array<{
    path: string;
    type: string;
    target?: string;
  }>;
}

export interface Registry {
  $schema: string;
  name: string;
  homepage: string;
  items: RegistryItem[];
}

export function getRegistryItems(): RegistryItem[] {
  return (registry as Registry).items;
}

export function getRegistryItemByName(name: string): RegistryItem | undefined {
  return getRegistryItems().find((item) => item.name === name);
}

export function getRegistryItemsByType(type: string): RegistryItem[] {
  return getRegistryItems().filter((item) => item.type === type);
}

export function getRegistryItemsByCategory(category: string): RegistryItem[] {
  return getRegistryItems().filter((item) => item.category === category);
}

export function getAllCategories(): string[] {
  const categories = getRegistryItems()
    .map((item) => item.category)
    .filter((category): category is string => !!category);
  return Array.from(new Set(categories));
}

// Block-specific helper functions
export function getBlocks(): RegistryItem[] {
  return getRegistryItemsByType("registry:block");
}

export function getBlocksByCategory(category: string): RegistryItem[] {
  return getBlocks().filter((item) => item.category === category);
}

// Block category configuration
export interface BlockCategory {
  name: string;
  slug: string;
  displayName: string;
  description?: string;
}

export const BLOCK_CATEGORIES: BlockCategory[] = [
  // Landing Page
  { name: "hero-section", slug: "hero-section", displayName: "Hero Section" },
  { name: "features", slug: "features", displayName: "Features" },
  { name: "cta", slug: "cta", displayName: "CTA" },
  { name: "pricing", slug: "pricing", displayName: "Pricing" },
  { name: "testimonials", slug: "testimonials", displayName: "Testimonials" },
  { name: "faqs", slug: "faqs", displayName: "FAQs" },
  { name: "logo-cloud", slug: "logo-cloud", displayName: "Logo Cloud" },
  { name: "blog", slug: "blog", displayName: "Blog" },
  { name: "team", slug: "team", displayName: "Team" },
  { name: "stats", slug: "stats", displayName: "Stats" },
  { name: "newsletter", slug: "newsletter", displayName: "Newsletter" },

  // Application UI
  { name: "auth", slug: "auth", displayName: "Auth" },
  { name: "form", slug: "form", displayName: "Form" },
  { name: "header", slug: "header", displayName: "Header" },
  { name: "footer", slug: "footer", displayName: "Footer" },
  { name: "contact", slug: "contact", displayName: "Contact" },
  { name: "not-found", slug: "not-found", displayName: "Not Found" },
  { name: "dashboard", slug: "dashboard", displayName: "Dashboard" },
  { name: "sidebar", slug: "sidebar", displayName: "Sidebar" },
  { name: "profile", slug: "profile", displayName: "Profile" },
  { name: "settings", slug: "settings", displayName: "Settings" },
  { name: "table", slug: "table", displayName: "Table" },
  { name: "notification", slug: "notification", displayName: "Notification" },

  // E-commerce
  {
    name: "image-gallery",
    slug: "image-gallery",
    displayName: "Image Gallery",
  },
  {
    name: "product-card",
    slug: "product-card",
    displayName: "Product Card",
  },
  {
    name: "shopping-cart",
    slug: "shopping-cart",
    displayName: "Shopping Cart",
  },
  { name: "checkout", slug: "checkout", displayName: "Checkout" },

  // Other
  { name: "coming-soon", slug: "coming-soon", displayName: "Coming Soon" },
];

export function getBlockCategories(): BlockCategory[] {
  return BLOCK_CATEGORIES;
}

export function getBlockCategoryBySlug(
  slug: string
): BlockCategory | undefined {
  return BLOCK_CATEGORIES.find((category) => category.slug === slug);
}
