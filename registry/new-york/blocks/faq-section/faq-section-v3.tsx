"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import "./faq-section-v3.css"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

/* ─── FAQ Data ───────────────────────────────── */

const faqItems = [
    {
        category: "General",
        question: "Lorem ipsum dolor sit amet consectetur adipiscing?",
        answer: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
        category: "Pricing",
        question: "Quis autem vel eum iure reprehenderit qui voluptatem?",
        answer: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    },
    {
        category: "Security",
        question: "Ut enim ad minima veniam nostrud exercitation?",
        answer: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt in culpa.",
    },
    {
        category: "Integrations",
        question: "Neque porro quisquam est qui dolorem ipsum quia dolor?",
        answer: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi.",
    },
    {
        category: "Support",
        question: "Temporibus autem quibusdam et aut officiis debitis?",
        answer: "Nam libero tempore cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est.",
    },
    {
        category: "Platform",
        question: "Sed ut perspiciatis unde omnis iste natus error sit?",
        answer: "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    },
]

/* ─── FAQ Card ───────────────────────────────── */

function FaqCard({
    category,
    question,
    answer,
    isOpen,
    onToggle,
}: {
    category: string
    question: string
    answer: string
    isOpen: boolean
    onToggle: () => void
}) {
    const contentRef = useRef<HTMLDivElement>(null)
    const [height, setHeight] = useState(0)

    useEffect(() => {
        if (contentRef.current) {
            setHeight(isOpen ? contentRef.current.scrollHeight : 0)
        }
    }, [isOpen])

    return (
        <div className={cn("faq3-card", isOpen && "faq3-card--open")}>
            <button
                className="faq3-card-trigger"
                onClick={onToggle}
                aria-expanded={isOpen}
            >
                <span className="faq3-card-top">
                    <Badge variant="outline" className="faq3-category font-mono">{category}</Badge>
                    <span
                        className={cn(
                            "faq3-icon",
                            isOpen && "faq3-icon--open"
                        )}
                        aria-hidden="true"
                    >
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M8 3.5v9M3.5 8h9"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                            />
                        </svg>
                    </span>
                </span>
                <span className="faq3-card-question">{question}</span>
            </button>

            <div className="faq3-card-body" style={{ height }}>
                <div ref={contentRef} className="faq3-card-answer-wrap">
                    <p className="faq3-card-answer">{answer}</p>
                </div>
            </div>
        </div>
    )
}

/* ─── Main Component ─────────────────────────── */

export function FaqSectionV3({
    className,
    ...props
}: React.ComponentProps<"section">) {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const handleToggle = useCallback((index: number) => {
        setOpenIndex((prev) => (prev === index ? null : index))
    }, [])

    return (
        <section className={cn("faq3-section", className)} {...props}>
            <div className="faq3-container">
                <header className="faq3-header">
                    <h2 className="faq3-headline">
                        Frequently asked questions
                    </h2>
                    <p className="faq3-subtext">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </header>

                <div className="faq3-grid">
                    {faqItems.map((item, index) => (
                        <FaqCard
                            key={item.question}
                            category={item.category}
                            question={item.question}
                            answer={item.answer}
                            isOpen={openIndex === index}
                            onToggle={() => handleToggle(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
