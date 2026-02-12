"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import "./faq-section-v1.css"
import { cn } from "@/lib/utils"
import { Plus, Minus } from "lucide-react"

/* ─── FAQ Data ───────────────────────────────── */

const faqItems = [
    {
        question: "Lorem ipsum dolor sit amet consectetur?",
        answer: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
        question: "Quis autem vel eum iure reprehenderit?",
        answer: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    },
    {
        question: "Ut enim ad minima veniam nostrud exercitation?",
        answer: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt in culpa.",
    },
    {
        question: "Neque porro quisquam est qui dolorem ipsum?",
        answer: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi.",
    },
    {
        question: "Sed ut perspiciatis unde omnis iste natus?",
        answer: "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.",
    },
]

/* ─── Accordion Item ─────────────────────────── */

function AccordionItem({
    question,
    answer,
    isOpen,
    onToggle,
}: {
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
        <div className="faq1-item">
            <button
                className="faq1-trigger"
                onClick={onToggle}
                aria-expanded={isOpen}
            >
                <span className="faq1-question">{question}</span>
                <span className="faq1-icon">
                    {isOpen ? (
                        <Minus className="faq1-icon-svg" />
                    ) : (
                        <Plus className="faq1-icon-svg" />
                    )}
                </span>
            </button>
            <div
                className="faq1-content-wrapper"
                style={{ height }}
            >
                <div ref={contentRef} className="faq1-content">
                    <p className="faq1-answer">{answer}</p>
                </div>
            </div>
        </div>
    )
}

/* ─── Main Component ─────────────────────────── */

export function FaqSectionV1({
    className,
    ...props
}: React.ComponentProps<"section">) {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const handleToggle = useCallback((index: number) => {
        setOpenIndex((prev) => (prev === index ? null : index))
    }, [])

    return (
        <section
            className={cn("faq1-section", className)}
            {...props}
        >
            {/* Subtle grain texture */}
            <div className="faq1-grain" aria-hidden="true" />

            <div className="faq1-inner">
                {/* Eyebrow */}
                <p className="faq1-eyebrow">
                    Frequenter Interrogata
                </p>

                {/* Headline */}
                <h2 className="faq1-headline">
                    Lorem ipsum dolor
                    <br />
                    <em>sit amet</em>
                </h2>

                {/* Description */}
                <p className="faq1-description">
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation.
                </p>

                {/* Accordion */}
                <div className="faq1-accordion">
                    {faqItems.map((item, index) => (
                        <AccordionItem
                            key={index}
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
