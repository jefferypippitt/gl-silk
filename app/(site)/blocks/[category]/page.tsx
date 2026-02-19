import {
  getBlockCategoryBySlug,
  getBlocksByCategory,
} from "@/lib/registry";
import { notFound } from "next/navigation";
import BlocksList from "@/components/blocks/blocks-list";
import Container from "@/components/container";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

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
    <Container className="py-8 md:py-12">
      <div className="mb-12">
        <Link
          href="/blocks"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors mb-4"
        >
          <ChevronLeft className="h-4 w-4" />
          All blocks
        </Link>
        <h1 className="text-3xl font-semibold tracking-tighter md:text-4xl">
          {blockCategory.displayName} blocks
        </h1>
      </div>

      <div className="mt-8 mb-8">
        <BlocksList blocks={blocks} />
      </div>
    </Container>
  );
}
