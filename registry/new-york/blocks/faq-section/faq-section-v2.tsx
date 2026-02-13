"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import "./faq-section-v2.css"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

/* ─── FAQ Data ───────────────────────────────── */

const faqItems = [
    {
        question: "Lorem ipsum dolor sit amet consectetur adipiscing?",
        answer: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
        question: "Quis autem vel eum iure reprehenderit qui voluptatem?",
        answer: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    },
    {
        question: "Ut enim ad minima veniam nostrud exercitation ullamco?",
        answer: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt in culpa.",
    },
    {
        question: "Neque porro quisquam est qui dolorem ipsum quia dolor?",
        answer: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi.",
    },
    {
        question: "Temporibus autem quibusdam et aut officiis debitis?",
        answer: "Nam libero tempore cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est.",
    },
    {
        question: "Sed ut perspiciatis unde omnis iste natus error sit?",
        answer: "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    },
]

/* ─── Accordion Item ─────────────────────────── */

function FaqItem({
    index,
    question,
    answer,
    isOpen,
    onToggle,
}: {
    index: number
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
        <div className="faq2-item">
            <button
                className="faq2-trigger"
                onClick={onToggle}
                aria-expanded={isOpen}
            >
                <span className="faq2-index">
                    {String(index + 1).padStart(2, "0")}
                </span>
                <span className="faq2-question">{question}</span>
                <span className={cn("faq2-chevron", isOpen && "faq2-chevron--open")}>
                    <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                    >
                        <path
                            d="M3.5 5.25L7 8.75L10.5 5.25"
                            stroke="currentColor"
                            strokeWidth="1.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </span>
            </button>
            <div
                className="faq2-content-wrapper"
                style={{ height }}
            >
                <div ref={contentRef} className="faq2-content">
                    <p className="faq2-answer">{answer}</p>
                </div>
            </div>
        </div>
    )
}

/* ─── Main Component ─────────────────────────── */

export function FaqSectionV2({
    className,
    ...props
}: React.ComponentProps<"section">) {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    const handleToggle = useCallback((index: number) => {
        setOpenIndex((prev) => (prev === index ? null : index))
    }, [])

    return (
        <section
            className={cn("faq2-section", className)}
            {...props}
        >
            <div className="faq2-container">
                {/* Left Column — Sticky Header */}
                <div className="faq2-header">
                    <div className="faq2-header-inner">
                        <Badge variant="outline">FAQ</Badge>
                        <h2 className="faq2-headline">
                            Frequently asked
                            <br />
                            questions
                        </h2>
                        <p className="faq2-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
                        </p>
                    </div>
                </div>

                {/* Right Column — FAQ Items */}
                <div className="faq2-list">
                    {faqItems.map((item, index) => (
                        <FaqItem
                            key={index}
                            index={index}
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
