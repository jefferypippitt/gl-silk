import type { Metadata } from "next";
import Container from "@/components/container";
import { getChangelogEntries } from "@/lib/changelog";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getChangelogMDXComponents } from "@/components/mdx/mdx-components";
import { ArrowUpRightIcon } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Changelog",
  description: "Recent updates",
};

const badgeColorClasses = [
  "bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300 [a&]:hover:bg-blue-100 [a&]:hover:text-blue-800 dark:[a&]:hover:bg-blue-900 dark:[a&]:hover:text-blue-200",
  "bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300 [a&]:hover:bg-green-100 [a&]:hover:text-green-800 dark:[a&]:hover:bg-green-900 dark:[a&]:hover:text-green-200",
  "bg-sky-50 text-sky-700 dark:bg-sky-950 dark:text-sky-300 [a&]:hover:bg-sky-100 [a&]:hover:text-sky-800 dark:[a&]:hover:bg-sky-900 dark:[a&]:hover:text-sky-200",
  "bg-purple-50 text-purple-700 dark:bg-purple-950 dark:text-purple-300 [a&]:hover:bg-purple-100 [a&]:hover:text-purple-800 dark:[a&]:hover:bg-purple-900 dark:[a&]:hover:text-purple-200",
  "bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300 [a&]:hover:bg-red-100 [a&]:hover:text-red-800 dark:[a&]:hover:bg-red-900 dark:[a&]:hover:text-red-200",
];

export default function ChangelogPage() {
  const entries = getChangelogEntries();

  return (
    <Container className="border-b border-border/40 pt-8 md:pt-12">
      <div className="mb-12">
        <h1 className="text-3xl font-semibold tracking-tighter md:text-4xl">
          Changelog
        </h1>
        <p className="mt-2 text-muted-foreground">
          Latest updates and announcements.
        </p>
      </div>

      <div className="-mx-6 space-y-0 sm:-mx-8 lg:-mx-10">
        {entries.length === 0 && (
          <p className="px-6 text-sm text-muted-foreground sm:px-8 lg:px-10">
            No changelog entries yet. Add one in <code>content/changelog</code>.
          </p>
        )}

        {entries.map((entry) => (
          <Card
            key={`${entry.date}-${entry.title}`}
            className="rounded-none border-x-0 border-t-0 border-border/40 py-0 shadow-none first:border-t"
          >
            <article className="px-6 py-4 md:py-6 sm:px-8 lg:px-10">
              <time
                dateTime={entry.date}
                className="tracking-tight text-sm font-light font-pixel-circle"
              >
                {entry.dateDisplay}
              </time>

              <div className="pl-8 md:pl-12">
                <h2 className="mt-1 text-lg font-semibold tracking-tight">
                  {entry.title}
                </h2>

                {entry.summary && (
                  <p className="mt-2 text-sm text-muted-foreground">
                    {entry.summary}
                  </p>
                )}

                {entry.description && (
                  <p className="mt-2 text-sm text-muted-foreground">
                    {entry.description}
                  </p>
                )}

                <div className="mt-3 text-sm prose prose-sm dark:prose-invert max-w-none prose-p:my-3 prose-headings:tracking-tight prose-headings:font-semibold">
                  <entry.body components={getChangelogMDXComponents()} />
                </div>

                {entry.items.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {entry.items.map((item, index) => (
                      <span key={item.name}>
                        {item.href ? (
                          <Badge
                            asChild
                            className={`transition-colors ${badgeColorClasses[index % badgeColorClasses.length]}`}
                          >
                            <Link href={item.href}>
                              {item.label} <ArrowUpRightIcon data-icon="inline-end" />
                            </Link>
                          </Badge>
                        ) : (
                          <Badge className={`transition-colors ${badgeColorClasses[index % badgeColorClasses.length]}`}>
                            {item.label}
                          </Badge>
                        )}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </article>
          </Card>
        ))}
      </div>
    </Container>
  );
}
