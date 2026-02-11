import Link from "next/link";
import { getBlocksByCategory } from "@/lib/registry";
import type { BlockCategory } from "@/lib/registry";
import { BlockCategorySkeleton } from "./block-category-skeleton";

interface BlocksCategoriesProps {
    categories: BlockCategory[];
}

export default function BlocksCategories({ categories }: BlocksCategoriesProps) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {categories.length > 0 ? (
                categories.map((category) => {
                    const blocks = getBlocksByCategory(category.name);
                    const blockCount = blocks.length;

                    return (
                        <Link
                            key={category.slug}
                            href={`/blocks/${category.slug}`}
                            className="group"
                        >
                            <div className="rounded-xl border border-border/60 bg-card transition-all duration-200 hover:border-border hover:shadow-sm overflow-hidden">
                                {/* Skeleton illustration */}
                                <div className="transition-transform duration-300 group-hover:scale-[1.02]">
                                    <BlockCategorySkeleton category={category.name} />
                                </div>
                                {/* Label */}
                                <div className="flex items-center justify-between border-t border-border/40 px-3 py-2.5">
                                    <span className="text-sm font-medium text-foreground">
                                        {category.displayName}
                                    </span>
                                    <span className="text-xs text-muted-foreground tabular-nums">
                                        {blockCount === 0
                                            ? "Soon"
                                            : `${blockCount} ${blockCount === 1 ? "block" : "blocks"}`}
                                    </span>
                                </div>
                            </div>
                        </Link>
                    );
                })
            ) : (
                <div className="col-span-full text-center text-muted-foreground py-12">
                    No blocks found in this category.
                </div>
            )}
        </div>
    );
}
