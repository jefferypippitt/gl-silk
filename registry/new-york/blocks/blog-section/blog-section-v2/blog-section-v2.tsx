import Link from "next/link";

const featured = {
  category: "Engineering",
  date: "Mar 2026",
  readTime: "8 min read",
  title: "Lorem ipsum dolor sit amet consectetur",
  excerpt:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.",
};

const posts = [
  {
    index: "01",
    category: "Design",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    date: "Feb 2026",
    readTime: "5 min",
  },
  {
    index: "02",
    category: "Performance",
    title: "Sed do eiusmod tempor incididunt ut labore et dolore",
    date: "Feb 2026",
    readTime: "6 min",
  },
  {
    index: "03",
    category: "Product",
    title: "Ut enim ad minim veniam quis nostrud exercitation ullamco",
    date: "Jan 2026",
    readTime: "4 min",
  },
  {
    index: "04",
    category: "AI",
    title: "Duis aute irure dolor in reprehenderit voluptate velit esse",
    date: "Jan 2026",
    readTime: "7 min",
  },
  {
    index: "05",
    category: "Engineering",
    title: "Schema Migrations Without Downtime",
    date: "Dec 2025",
    readTime: "9 min",
  },
];

export default function BlogSectionV2() {
  return (
    <section className="relative px-6 py-24">
      <div className="mx-auto max-w-5xl">

        {/* Featured Post */}
        <Link href="https://ui.shadcn.com/" target="_blank" rel="noopener noreferrer" className="group block mb-20 relative cursor-pointer">
          <div className="relative">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-8">
              <span className="text-[0.625rem] tracking-[0.25em] uppercase text-muted-foreground">
                Featured
              </span>
              <span className="text-muted-foreground/30 text-xs">·</span>
              <span className="text-[0.625rem] tracking-[0.2em] uppercase text-muted-foreground">
                {featured.category}
              </span>
              <span className="text-muted-foreground/30 text-xs">·</span>
              <span className="text-[0.625rem] tracking-[0.2em] uppercase text-muted-foreground">
                {featured.date}
              </span>
              <span className="text-muted-foreground/30 text-xs">·</span>
              <span className="text-[0.625rem] tracking-[0.2em] uppercase text-muted-foreground">
                {featured.readTime}
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-light tracking-tight leading-[1.05] mb-7 max-w-3xl transition-opacity duration-300 group-hover:opacity-60">
              {featured.title}
            </h2>
            <div className="flex items-end justify-between gap-8">
              <p className="text-muted-foreground max-w-md leading-relaxed text-sm">
                {featured.excerpt}
              </p>
              <div className="flex-shrink-0 hidden sm:flex items-center gap-2 text-sm transition-all duration-300 opacity-0 group-hover:opacity-100 translate-x-3 group-hover:translate-x-0">
                <span className="text-muted-foreground text-[0.625rem] tracking-widest uppercase">
                  Read
                </span>
                <span className="text-foreground">→</span>
              </div>
            </div>
          </div>
        </Link>

        {/* Post List */}
        <div>
          {posts.map((post) => (
            <Link
              key={post.index}
              href="https://ui.shadcn.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 md:gap-6 py-[1.125rem] border-t border-border last:border-b transition-all duration-200 hover:pl-3"
            >
              <span className="text-[0.625rem] text-muted-foreground/40 w-5 flex-shrink-0">
                {post.index}
              </span>
              <span className="text-[0.625rem] tracking-[0.15em] uppercase text-muted-foreground/60 w-20 flex-shrink-0 hidden sm:block">
                {post.category}
              </span>
              <span className="flex-1 text-sm leading-snug text-foreground/75 group-hover:text-foreground transition-colors duration-200">
                {post.title}
              </span>
              <span className="text-[0.625rem] text-muted-foreground/50 flex-shrink-0 hidden md:block">
                {post.date}
              </span>
              <span className="text-[0.625rem] text-muted-foreground/50 w-10 text-right flex-shrink-0 hidden lg:block">
                {post.readTime}
              </span>
              <span className="text-sm text-foreground/50 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-200 -translate-x-1 group-hover:translate-x-0">
                →
              </span>
            </Link>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-10 flex justify-end">
          <Link
            href="https://ui.shadcn.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-[0.625rem] tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            All articles
            <span className="transition-all duration-200 -translate-x-1 group-hover:translate-x-0 opacity-60 group-hover:opacity-100">
              →
            </span>
          </Link>
        </div>

      </div>
    </section>
  );
}
