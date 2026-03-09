"use client";

import { useState } from "react";
import { Button } from "./button";

const categories = [
  {
    label: "General",
    faqs: [
      {
        question: "Lorem ipsum dolor sit amet, consectetur adipiscing?",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
      },
      {
        question: "Ut enim ad minim veniam quis nostrud exercitation?",
        answer:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt.",
      },
      {
        question: "Duis aute irure dolor in reprehenderit voluptate?",
        answer:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
      },
      {
        question: "Excepteur sint occaecat cupidatat non proident sunt?",
        answer:
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti. Nam libero tempore cum soluta nobis est eligendi optio cumque nihil impedit.",
      },
    ],
  },
  {
    label: "Billing",
    faqs: [
      {
        question: "Nemo enim ipsam voluptatem quia voluptas sit?",
        answer:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem. Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta.",
      },
      {
        question: "At vero eos et accusamus iusto odio dignissimos?",
        answer:
          "Nam libero tempore cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime. Temporibus autem quibusdam et aut officiis debitis rerum necessitatibus saepe eveniet.",
      },
      {
        question: "Quis autem vel eum iure reprehenderit qui voluptate?",
        answer:
          "Itaque earum rerum hic tenetur a sapiente delectus ut aut reiciendis voluptatibus maiores alias consequatur. Aut perferendis doloribus asperiores repellat et harum quidem rerum facilis est.",
      },
      {
        question: "Temporibus autem quibusdam officiis debitis rerum?",
        answer:
          "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Vel illum qui dolorem eum fugiat quo voluptas nulla pariatur sit amet.",
      },
    ],
  },
  {
    label: "Security",
    faqs: [
      {
        question: "Neque porro quisquam est qui dolorem ipsum quia?",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi aliquip ex ea.",
      },
      {
        question: "Ut labore et dolore magnam aliquam quaerat voluptatem?",
        answer:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident in culpa qui officia deserunt mollit.",
      },
      {
        question: "Quid est enim aliud gigni posse ex his rebus?",
        answer:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque totam rem aperiam. Eaque ipsa quae ab illo inventore veritatis quasi architecto beatae vitae dicta explicabo.",
      },
      {
        question: "Nisi ut aliquid ex ea commodi consequatur quis?",
        answer:
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium deleniti atque. Nam libero tempore cum soluta nobis eligendi optio cumque nihil impedit quo minus.",
      },
    ],
  },
  {
    label: "Enterprise",
    faqs: [
      {
        question: "Itaque earum rerum hic tenetur a sapiente delectus?",
        answer:
          "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Vel illum qui dolorem eum fugiat quo voluptas nulla pariatur et harum quidem rerum.",
      },
      {
        question: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur?",
        answer:
          "Nam libero tempore cum soluta nobis est eligendi optio cumque nihil impedit quo minus id maxime. Temporibus autem quibusdam et aut officiis debitis rerum necessitatibus saepe eveniet ut.",
      },
      {
        question: "Ut aut reiciendis voluptatibus maiores alias consequatur?",
        answer:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam. Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt.",
      },
      {
        question: "Aut perferendis doloribus asperiores repellat consequatur?",
        answer:
          "Itaque earum rerum hic tenetur a sapiente delectus ut aut reiciendis voluptatibus maiores alias. Aut perferendis doloribus asperiores repellat et harum quidem rerum facilis est et expedita.",
      },
    ],
  },
];

export default function FaqSectionV2() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="bg-background px-6 py-24">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-5xl font-light tracking-tight leading-tight lg:text-6xl">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat, i) => (
            <Button
              key={i}
              onClick={() => setActiveTab(i)}
              variant={i === activeTab ? "default" : "outline"}
              className="rounded-full"
            >
              {cat.label}
            </Button>
          ))}
        </div>

        {/* FAQ list */}
        <div className="border-t border-border divide-y divide-border">
          {categories[activeTab].faqs.map((faq, i) => (
            <div key={i} className="grid sm:grid-cols-[1fr_1.5fr] gap-4 sm:gap-12 py-8">
              <p className="text-sm font-medium">{faq.question}</p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
