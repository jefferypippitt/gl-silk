import { loader } from "fumadocs-core/source";
import { changelog as changelogCollection } from "fumadocs-mdx:collections/server";
import { getRegistryItems, RegistryItem } from "./registry";
import type { ReactNode } from "react";

type ChangelogBody = (props: { components?: Record<string, unknown> }) => ReactNode;

export interface ChangelogItem {
  name: string;
  label: string;
  href?: string;
}

export interface ChangelogEntry {
  title: string;
  summary?: string;
  description?: string;
  date: string;
  dateDisplay: string;
  url: string;
  items: ChangelogItem[];
  body: ChangelogBody;
}

interface ChangelogFrontmatter {
  title?: string;
  description?: string;
  summary?: string;
  date?: string | Date;
  items?: string[];
}

const changelogSource = loader({
  baseUrl: "/changelog",
  source: changelogCollection.toFumadocsSource(),
});

const ISO_DATE_REGEX = /^\d{4}-\d{2}-\d{2}$/;

function normalizeDate(input: string | Date | undefined): string | null {
  if (!input) return null;

  if (input instanceof Date) {
    if (Number.isNaN(input.getTime())) return null;
    return input.toISOString().slice(0, 10);
  }

  const value = input.trim();
  if (ISO_DATE_REGEX.test(value)) return value;

  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return null;

  return parsed.toISOString().slice(0, 10);
}

function resolveEntryItems(
  names: string[] | undefined,
  byName: Map<string, RegistryItem>
): ChangelogItem[] {
  if (!Array.isArray(names) || names.length === 0) return [];

  return Array.from(new Set(names))
    .map((name): ChangelogItem | null => {
      if (typeof name !== "string") return null;
      const key = name.trim();
      if (!key) return null;

      const registryItem = byName.get(key);
      if (!registryItem) {
        // Keep MDX-defined items visible even when missing from registry.json.
        return { name: key, label: key };
      }

      const isBlock = registryItem.type === "registry:block";
      const href = registryItem.category
        ? isBlock
          ? `/blocks/${registryItem.category}#${encodeURIComponent(registryItem.name)}`
          : `/docs/components/${registryItem.category}/${registryItem.name}`
        : undefined;

      return {
        name: registryItem.name,
        label: registryItem.title || registryItem.name,
        href,
      };
    })
    .filter((item): item is ChangelogItem => Boolean(item));
}

export function getChangelogEntries(): ChangelogEntry[] {
  const itemsByName = new Map(getRegistryItems().map((item) => [item.name, item]));
  const pages = changelogSource.getPages();

  return pages
    .map((page): ChangelogEntry | null => {
      const data = page.data as ChangelogFrontmatter;
      const date = normalizeDate(data.date);
      if (!date) return null;

      const rawDate = typeof data.date === 'string' ? data.date : date;
      const dateDisplay = rawDate.includes(',') ? rawDate : date;

      const entry: ChangelogEntry = {
        title: data.title ?? "Untitled release",
        date,
        dateDisplay,
        url: page.url,
        items: resolveEntryItems(data.items, itemsByName),
        body: page.data.body as ChangelogBody,
      };

      if (data.summary) entry.summary = data.summary;
      if (data.description) entry.description = data.description;

      return entry;
    })
    .filter((entry): entry is ChangelogEntry => Boolean(entry))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
