"use client"

import { useEffect, useRef } from "react"
import "./mac-os-terminal.css"
import gsap from "gsap"
import { cn } from "@/lib/utils"

/* ─── Types ──────────────────────────────────── */

export interface TerminalStep {
  type:
  | "command"
  | "prompt"
  | "output"
  | "success"
  | "error"
  | "blank"
  | "loading"
  text: string
  prefix?: string
}

/* ─── Default Content ────────────────────────── */

const DEFAULT_STEPS: TerminalStep[] = [
  {
    type: "command",
    text: 'pnpm dlx shadcn@latest create --preset "https://ui.shadcn.com/init?base=radix&style=nova&baseColor=neutral&theme=neutral&iconLibrary=lucide&font=inter&menuAccent=subtle&menuColor=default&radius=default&template=next&rtl=false" --template next',
  },
  {
    type: "prompt",
    prefix: "√ What is your project named? ",
    text: "hello-world",
  },
  { type: "loading", text: "Creating a new Next.js project..." },
  { type: "success", text: "√ Created a new Next.js project." },
  { type: "success", text: "√ Writing components.json." },
  { type: "success", text: "√ Checking registry." },
  { type: "success", text: "√ Updating CSS variables in app\\globals.css" },
  { type: "success", text: "√ Updating app\\globals.css" },
  { type: "success", text: "√ Installing dependencies." },
  { type: "success", text: "√ Updating fonts." },
  { type: "blank", text: "" },
  { type: "output", text: "√ Created 1 file:" },
  { type: "output", text: "  - lib\\utils.ts" },
  { type: "blank", text: "" },
  { type: "success", text: "Success! Project initialization completed." },
  { type: "output", text: "You may now add components." },
]

/* ─── Component ──────────────────────────────── */

export function MacOsTerminal({
  steps = DEFAULT_STEPS,
  title = "projects",
  subtitle = "-zsh",
  dimensions = "80×20",
  prompt = "lorem@MacBook-Air - %",
  showIcon = true,
  className,
  ...props
}: {
  steps?: TerminalStep[]
  title?: string
  subtitle?: string
  dimensions?: string
  prompt?: string
  showIcon?: boolean
} & React.ComponentProps<"div">) {
  const bodyRef = useRef<HTMLDivElement>(null)
  const cursorRef = useRef<HTMLSpanElement>(null)
  const finalPromptRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const body = bodyRef.current
    const cursor = cursorRef.current
    const finalPrompt = finalPromptRef.current
    if (!body || !cursor || !finalPrompt) return

    const lineEls = Array.from(
      body.querySelectorAll<HTMLElement>("[data-line]")
    )
    const typedEls = Array.from(
      body.querySelectorAll<HTMLElement>("[data-typed]")
    )
    const spinnerEls = Array.from(
      body.querySelectorAll<HTMLElement>("[data-spinner]")
    )

    /* Reset state */
    typedEls.forEach((el) => (el.textContent = ""))
    spinnerEls.forEach((el) => (el.textContent = "⠋"))
    gsap.set(lineEls, { opacity: 0, y: 4, display: "flex" })
    gsap.set(finalPrompt, { opacity: 0, y: 4 })
    gsap.set(cursor, { opacity: 0 })

    const tl = gsap.timeline({ delay: 0.6 })

    let typedIdx = 0
    let spinnerIdx = 0

    steps.forEach((step, i) => {
      const lineEl = lineEls[i]
      if (!lineEl) return

      if (step.type === "command" || step.type === "prompt") {
        const typedEl = typedEls[typedIdx++]
        /* Reveal the line */
        tl.to(lineEl, { opacity: 1, y: 0, duration: 0.12 })
        /* Type characters one-by-one */
        if (typedEl) {
          const obj = { chars: 0 }
          tl.to(obj, {
            chars: step.text.length,
            duration: step.text.length * 0.032,
            ease: `steps(${step.text.length})`,
            onUpdate() {
              typedEl.textContent = step.text.slice(0, Math.round(obj.chars))
            },
          })
          if (step.type === "prompt") {
            /* Pause before the success line after user input */
            tl.to({}, { duration: 0.8 })
          } else {
            /* Small pause after command finishes */
            tl.to({}, { duration: 0.35 })
          }
        }
      } else if (step.type === "loading") {
        const spinnerEl = spinnerEls[spinnerIdx++]
        const frames = ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"]
        const cycles = 3

        tl.to(lineEl, { opacity: 1, y: 0, duration: 0.1 })

        if (spinnerEl) {
          const state = { frame: 0 }
          tl.to(state, {
            frame: frames.length * cycles,
            duration: 1.35,
            ease: "none",
            onUpdate() {
              spinnerEl.textContent =
                frames[Math.floor(state.frame) % frames.length]
            },
            onComplete() {
              spinnerEl.textContent = "⠿"
            },
          })
        }
        tl.to(lineEl, { opacity: 0, duration: 0.1 })
        tl.set(lineEl, { display: "none" })
      } else if (step.type === "blank") {
        tl.to(lineEl, { opacity: 1, y: 0, duration: 0.05 })
      } else {
        /* Output / success / error lines fade in quickly */
        tl.to(lineEl, { opacity: 1, y: 0, duration: 0.15 }, ">-0.02")
      }
    })

    /* Reveal final prompt after all terminal steps are complete */
    tl.to(finalPrompt, { opacity: 1, y: 0, duration: 0.12 })

    /* Show blinking cursor */
    tl.to(cursor, { opacity: 1, duration: 0.1 })

    const blink = gsap.to(cursor, {
      opacity: 0,
      duration: 0.53,
      repeat: -1,
      yoyo: true,
      ease: "steps(1)",
      paused: true,
    })
    tl.call(() => { blink.play() })

    return () => {
      tl.kill()
      blink.kill()
    }
  }, [steps])

  return (
    <div className={cn("mot-wrapper", className)} {...props}>
      <div className="mot-terminal">
        {/* Title bar */}
        <div className="mot-titlebar">
          <div className="mot-dots">
            <span className="mot-dot mot-dot-close" />
            <span className="mot-dot mot-dot-minimize" />
            <span className="mot-dot mot-dot-maximize" />
          </div>
          <div className="mot-title-group">
            {showIcon && (
              <svg
                className="mot-title-icon"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.5 5.4C1.5 4.516 2.216 3.8 3.1 3.8H6.2L7.34 5H12.9C13.784 5 14.5 5.716 14.5 6.6V11.9C14.5 12.784 13.784 13.5 12.9 13.5H3.1C2.216 13.5 1.5 12.784 1.5 11.9V5.4Z"
                  fill="currentColor"
                  opacity="0.18"
                />
                <path
                  d="M1.5 5.4C1.5 4.516 2.216 3.8 3.1 3.8H6.2L7.34 5H12.9C13.784 5 14.5 5.716 14.5 6.6V11.9C14.5 12.784 13.784 13.5 12.9 13.5H3.1C2.216 13.5 1.5 12.784 1.5 11.9V5.4Z"
                  stroke="currentColor"
                  strokeWidth="1.1"
                  strokeLinejoin="round"
                />
                <path
                  d="M1.5 6.35H14.5"
                  stroke="currentColor"
                  strokeWidth="1"
                  opacity="0.65"
                />
              </svg>
            )}
            <span className="mot-title">
              {title}
              {subtitle && ` \u2014 ${subtitle}`}
              {dimensions && ` \u2014 ${dimensions}`}
            </span>
          </div>
          <div className="mot-dots-spacer" />
        </div>

        {/* Terminal body */}
        <div className="mot-body" ref={bodyRef}>
          {steps.map((step, i) => (
            <div
              key={i}
              data-line
              className={cn(
                "mot-line",
                step.type === "command" && "mot-line-command",
                step.type === "blank" && "mot-line-blank"
              )}
            >
              {step.type === "command" ? (
                <>
                  <span className="mot-prompt">{prompt}</span>
                  <span data-typed className="mot-typed" />
                </>
              ) : step.type === "prompt" ? (
                <>
                  <span className="mot-text">{step.prefix}</span>
                  <span data-typed className="mot-typed" />
                </>
              ) : step.type === "blank" ? (
                <br />
              ) : step.type === "loading" ? (
                <>
                  <span data-spinner className="mot-spinner">
                    ⠋
                  </span>
                  <span className="mot-text">{step.text}</span>
                </>
              ) : (
                <span
                  className={cn(
                    step.type === "success"
                      ? "mot-text-success"
                      : step.type === "error"
                        ? "mot-text-error"
                        : "mot-text"
                  )}
                >
                  {step.text}
                </span>
              )}
            </div>
          ))}

          {/* Final prompt with blinking cursor */}
          <div ref={finalPromptRef} className="mot-line">
            <span className="mot-prompt">{prompt}</span>
            <span ref={cursorRef} className="mot-cursor">
              ▋
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
