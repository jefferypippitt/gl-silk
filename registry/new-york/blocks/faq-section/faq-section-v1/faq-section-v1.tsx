import { Plus, Minus } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion";

const faqs = [
  {
    question: "Lorem ipsum dolor sit amet consectetur adipiscing elit?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    question: "Ut enim ad minim veniam, quis nostrud exercitation ullamco?",
    answer:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    question: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur?",
    answer:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    question: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum?",
    answer:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    question: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?",
    answer:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

export default function FaqSectionV1() {
  return (
    <section className="relative bg-background px-6 py-24 overflow-hidden">
      {/* Watermark */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 select-none font-black uppercase leading-none text-foreground/[0.025] text-[20vw] pr-6"
      >
        FAQ
      </span>

      <div className="relative mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-16 flex flex-col gap-4 max-w-xl">
          <p className="text-[0.6875rem] tracking-[0.22em] uppercase text-muted-foreground font-medium">
            Got questions
          </p>
          <h2 className="text-5xl font-light tracking-tight leading-tight lg:text-6xl">
            Everything you
            <br />
            need to know.
          </h2>
        </div>

        {/* Accordion */}
        <Accordion
          type="single"
          collapsible
          defaultValue="item-0"
          className="border-t border-border"
        >
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger>
                <span className="mt-0.5 w-8 shrink-0 font-mono text-xs tabular-nums text-muted-foreground/60 transition-colors duration-300 group-hover:text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex-1 text-lg font-light tracking-tight transition-colors duration-300 group-hover:text-foreground">
                  {faq.question}
                </span>
                <span className="mt-1 shrink-0 text-muted-foreground transition-colors duration-300 group-hover:text-foreground group-data-[state=open]:hidden">
                  <Plus className="h-4 w-4" />
                </span>
                <span className="mt-1 shrink-0 text-muted-foreground transition-colors duration-300 group-hover:text-foreground group-data-[state=closed]:hidden">
                  <Minus className="h-4 w-4" />
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <p className="pl-14 text-sm leading-relaxed text-muted-foreground max-w-2xl">
                  {faq.answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
