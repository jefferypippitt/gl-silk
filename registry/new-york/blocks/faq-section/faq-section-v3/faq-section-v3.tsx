"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const faqs = [
  {
    question: "Lorem ipsum dolor sit amet consectetur adipiscing elit?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
  },
  {
    question: "Ut enim ad minim veniam quis nostrud exercitation ullamco?",
    answer:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    question: "Duis aute irure dolor in reprehenderit voluptate velit esse?",
    answer:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
  {
    question: "Excepteur sint occaecat cupidatat non proident sunt culpa?",
    answer:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt neque porro quisquam est qui dolorem ipsum quia dolor sit.",
  },
  {
    question: "Quis autem vel eum iure reprehenderit qui voluptate velit?",
    answer:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident similique sunt in culpa.",
  },
  {
    question: "Nam libero tempore cum soluta nobis eligendi optio cumque?",
    answer:
      "Temporibus autem quibusdam et aut officiis debitis rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus ut aut reiciendis voluptatibus.",
  },
];

export default function FaqSectionV3() {
  const [active, setActive] = useState(0);

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-16 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between border-b border-border pb-6">
          <div>
            <h2 className="text-5xl font-light tracking-tight leading-tight lg:text-6xl">
              Questions &<br />Answers.
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-[200px] sm:text-right leading-relaxed">
            Still need help?{" "}
            <Link
              href="#"
              className="text-foreground underline underline-offset-4 hover:opacity-60 transition-opacity duration-200"
            >
              Contact us
            </Link>
          </p>
        </div>

        {/* Two-panel body */}
        <div className="grid md:grid-cols-[1fr_1.2fr] gap-12 md:gap-0">
          {/* Left — question list */}
          <div className="md:border-r border-border md:pr-12">
            {faqs.map((faq, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`group w-full text-left flex items-start gap-5 py-5 border-b border-border transition-all duration-200 ${i === active
                  ? "opacity-100"
                  : "opacity-35 hover:opacity-60"
                  }`}
              >
                <span
                  className={`mt-0.5 shrink-0 text-xs tabular-nums ${i === active ? "text-foreground" : "text-muted-foreground"
                    }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className={`flex-1 text-sm font-normal leading-snug ${i === active ? "text-foreground" : "text-muted-foreground"
                    }`}
                >
                  {faq.question}
                </span>
                <ArrowRight
                  className={`mt-0.5 shrink-0 h-3.5 w-3.5 transition-all duration-200 ${i === active
                    ? "opacity-100 text-foreground translate-x-0"
                    : "opacity-0 -translate-x-1"
                    }`}
                />
              </button>
            ))}
          </div>

          {/* Right — active answer */}
          <div className="md:pl-16 flex flex-col justify-start">
            <h3 className="text-xl font-light tracking-tight leading-snug mb-5 max-w-sm">
              {faqs[active].question}
            </h3>

            <p className="text-sm leading-relaxed text-muted-foreground max-w-sm">
              {faqs[active].answer}
            </p>

            {/* Pagination dots */}
            <div className="flex items-center gap-1.5 mt-10">
              {faqs.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`transition-all duration-200 rounded-full ${i === active
                    ? "w-5 h-1.5 bg-foreground"
                    : "w-1.5 h-1.5 bg-foreground/20 hover:bg-foreground/40"
                    }`}
                  aria-label={`Go to question ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
