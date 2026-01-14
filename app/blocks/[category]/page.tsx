import {
  getBlockCategoryBySlug,
  getBlocksByCategory,
} from "@/lib/registry";
import { notFound } from "next/navigation";
import BlocksList from "@/components/blocks/blocks-list";

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const blockCategory = getBlockCategoryBySlug(category);

  if (!blockCategory) {
    notFound();
  }

  const blocks = getBlocksByCategory(blockCategory.name);

  return (
    <main className="container mx-auto px-4 py-8 md:py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Explore {blockCategory.displayName} blocks
        </h1>
      </div>
      <BlocksList blocks={blocks} />
    </main>
  );
}
