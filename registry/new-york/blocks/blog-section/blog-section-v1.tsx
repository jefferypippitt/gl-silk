"use client"

import "./blog-section-v1.css"
import { useCallback, useEffect, useRef, useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

type BlogCard = {
  id: string
  label: string
  title: string
  description: string
  image: string
  imageAlt: string
  tone?: "light" | "dark"   // dark tone will make the overlay darker for the description text
  variant: "lead" | "side" | "base" | "feature"
}

const PLACEHOLDER_IMAGE = "/images/shadcn1.webp"

const posts: BlogCard[] = [
  {
    id: "lorem",
    label: "Lorem",
    title: "Lorem ipsum dolor\nsit amet consectetur",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    image: PLACEHOLDER_IMAGE,
    imageAlt: "lorem ipsum dolor sit amet consectetur",
    tone: "dark",
    variant: "lead",
  },
  {
    id: "ipsum",
    label: "Ipsum",
    title: "Adipiscing elit sed\ndo eiusmod tempor",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    image: PLACEHOLDER_IMAGE,
    imageAlt: "adipiscing elit sed do eiusmod tempor",
    tone: "dark",
    variant: "side",
  },
  {
    id: "dolor",
    label: "Dolor",
    title: "Incididunt ut labore\net dolore magna",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    image: PLACEHOLDER_IMAGE,
    imageAlt: "incididunt ut labore et dolore magna",
    tone: "dark",
    variant: "base",
  },
  {
    id: "amet",
    label: "Amet",
    title: "Ut enim ad minim veniam\nquis nostrud exercitation",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: PLACEHOLDER_IMAGE,
    imageAlt: "amet consectetur adipisicing elit",
    tone: "dark",
    variant: "feature",
  },
]

function BlogCardItem({
  card,
  isExpanded,
  onToggle,
}: {
  card: BlogCard
  isExpanded: boolean
  onToggle: () => void
}) {
  const descRef = useRef<HTMLParagraphElement>(null)
  const [canScrollUp, setCanScrollUp] = useState(false)
  const [canScrollDown, setCanScrollDown] = useState(false)

  const checkScroll = useCallback(() => {
    const el = descRef.current
    if (!el) return
    setCanScrollUp(el.scrollTop > 2)
    setCanScrollDown(el.scrollTop + el.clientHeight < el.scrollHeight - 2)
  }, [])

  useEffect(() => {
    if (isExpanded) {
      // Small delay so the expand animation reveals the content first
      const timer = setTimeout(checkScroll, 80)
      return () => clearTimeout(timer)
    }
    setCanScrollUp(false)
    setCanScrollDown(false)
  }, [isExpanded, checkScroll])

  return (
    <article
      className={cn(
        "blog1-card",
        `blog1-card--${card.variant}`,
        card.tone === "dark" ? "blog1-card--dark" : "blog1-card--light",
        isExpanded && "blog1-card--expanded"
      )}
    >
      <button
        type="button"
        className="blog1-card-button"
        onClick={onToggle}
        aria-label={card.title.replace(/\n/g, " ")}
        aria-expanded={isExpanded}
        aria-controls={`blog1-desc-${card.id}`}
      >
        <img
          src={card.image}
          alt={card.imageAlt}
          className="blog1-card-image"
          loading="lazy"
        />
        <div className="blog1-card-link">
          <div className="blog1-card-content">
            <p className="blog1-card-label">{card.label}</p>
            <h3 className="blog1-card-title">
              {card.title.split("\n").map((line) => (
                <span key={line}>
                  {line}
                  <br />
                </span>
              ))}
            </h3>
          </div>
        </div>
        <div id={`blog1-desc-${card.id}`} className="blog1-card-footer">
          <div className="blog1-card-footer-inner">
            {(canScrollUp || canScrollDown) && (
              <span className="blog1-scroll-hint" aria-hidden="true">
                {canScrollDown ? (
                  <ChevronDown className="blog1-scroll-hint-icon" />
                ) : (
                  <ChevronUp className="blog1-scroll-hint-icon" />
                )}
              </span>
            )}
            <p
              ref={descRef}
              className="blog1-card-description"
              onScroll={checkScroll}
            >
              {card.description}
            </p>
          </div>
        </div>
      </button>
    </article>
  )
}

export function BlogSectionV1({
  className,
  ...props
}: React.ComponentProps<"section">) {
  const [expandedPostId, setExpandedPostId] = useState<string | null>(null)

  return (
    <section className={cn("blog1-section", className)} {...props}>
      <div className="blog1-shell">
        <header className="blog1-header">
          <h2 className="blog1-heading">News & Updates</h2>
          <Avatar>
            <AvatarImage
              src="https://github.com/shadcn.png"
              alt="@shadcn"

            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </header>

        <div className="blog1-grid">
          {posts.map((card) => (
            <BlogCardItem
              key={card.id}
              card={card}
              isExpanded={expandedPostId === card.id}
              onToggle={() =>
                setExpandedPostId((currentId) =>
                  currentId === card.id ? null : card.id
                )
              }
            />
          ))}
        </div>
      </div>
    </section>
  )
}
