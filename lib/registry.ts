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
  { name: "auth", slug: "auth", displayName: "Auth" },
  { name: "contact", slug: "contact", displayName: "Contact" },
  { name: "cta", slug: "cta", displayName: "Cta" },
  { name: "faqs", slug: "faqs", displayName: "Faqs" },
  { name: "header", slug: "header", displayName: "Header" },
  { name: "features", slug: "features", displayName: "Features" },
  { name: "footer", slug: "footer", displayName: "Footer" },
  { name: "form", slug: "form", displayName: "Form" },
  { name: "hero-section", slug: "hero-section", displayName: "Hero Section" },
  {
    name: "image-gallery",
    slug: "image-gallery",
    displayName: "Image Gallery",
  },
  { name: "logo-cloud", slug: "logo-cloud", displayName: "Logo Cloud" },
  { name: "not-found", slug: "not-found", displayName: "Not Found" },
  { name: "pricing", slug: "pricing", displayName: "Pricing" },
  { name: "testimonials", slug: "testimonials", displayName: "Testimonials" },
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
