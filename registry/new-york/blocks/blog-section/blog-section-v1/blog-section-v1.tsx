import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";

const posts = [
  {
    image: "/images/collections-api.webp",
    category: "Design",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    image: "/images/super-fast-api.webp",
    category: "Performance",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    image: "/images/tiny-api.webp",
    category: "Engineering",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    image: "/images/voice-api.webp",
    category: "AI",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing magna aliqua.",
  },
  {
    image: "/images/imagine-api.webp",
    category: "AI",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    image: "/images/fast-api.webp",
    category: "Product",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export default function BlogSectionV1() {
  return (
    <section className="relative px-6 py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between gap-4">
          <h1 className="text-4xl font-light tracking-tight leading-tight lg:text-5xl">
            Latest Updates
          </h1>
          <Avatar className="size-10">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <Card key={i} className="relative w-full pt-0 overflow-hidden group h-full flex flex-col">
              <div className="relative overflow-hidden">
                <div className="absolute inset-0 z-10" />
                <img
                  src={post.image}
                  alt={post.title}
                  className="relative aspect-video w-full object-cover"
                />
              </div>
              <CardHeader className="flex-1">
                <CardAction>
                  <Badge variant="secondary">{post.category}</Badge>
                </CardAction>
                <CardTitle className="leading-snug">{post.title}</CardTitle>
                <CardDescription>{post.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button variant="outline" className="w-full" size="sm" asChild>
                  <Link href="https://ui.shadcn.com/" target="_blank" rel="noopener noreferrer">
                    Read Article
                    <ChevronRightIcon className="size-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
