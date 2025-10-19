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
