import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getBlocksByCategory } from "@/lib/registry";
import type { BlockCategory } from "@/lib/registry";

interface BlocksCategoriesProps {
    categories: BlockCategory[];
}

export default function BlocksCategories({ categories }: BlocksCategoriesProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                            <Card>
                                <CardHeader className="text-center">
                                    <CardTitle>
                                        {category.displayName}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="text-center">
                                    {blockCount === 0 ? (
                                        <Badge variant="outline">
                                            Coming Soon
                                        </Badge>
                                    ) : (
                                        <Badge variant="default">
                                            {blockCount} {blockCount === 1 ? "block" : "blocks"}
                                        </Badge>
                                    )}
                                </CardContent>
                            </Card>
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
