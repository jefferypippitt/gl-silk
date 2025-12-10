import Link from "next/link";
import { PackageIcon, ArrowUpRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";

export default function BlocksPage() {
  return (
    <main className="flex flex-col items-center justify-center px-4 py-16">
      <Empty className="border border-dashed">
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <PackageIcon />
          </EmptyMedia>
          <EmptyTitle>Coming Soon</EmptyTitle>
          <EmptyDescription>
            We&apos;re working on creating pre-built blocks and layouts that you can
            easily integrate into your projects. Stay tuned!
          </EmptyDescription>
        </EmptyHeader>
        <div className="flex gap-4">
          <Button
            variant="link"
            asChild
            className="text-muted-foreground"
            size="sm"
          >
            <Link href="/docs">
              Learn More <ArrowUpRightIcon />
            </Link>
          </Button>
          <Button
            variant="link"
            asChild
            className="text-muted-foreground"
            size="sm"
          >
            <a
              href="https://github.com/jefferypippitt/gl-silk"
              target="_blank"
              rel="noopener noreferrer"
            >
              Star Repo <ArrowUpRightIcon />
            </a>
          </Button>
          <Button
            variant="link"
            asChild
            className="text-muted-foreground"
            size="sm"
          >
            <a
              href="https://github.com/jefferypippitt/gl-silk"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contribute <ArrowUpRightIcon />
            </a>
          </Button>
        </div>
      </Empty>
    </main>
  );
}
