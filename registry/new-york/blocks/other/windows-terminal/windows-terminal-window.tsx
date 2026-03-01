"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { cn } from "./utils"
import WindowsTerminalTitlebar from "./windows-terminal-titlebar"

type TerminalStep = {
  type: "command" | "prompt" | "output" | "success" | "error" | "blank" | "loading"
  text: string
  prefix?: string
}

const STEPS: TerminalStep[] = [
  {
    type: "command",
    text: "pnpm create next-app@latest lorem --yes",
  },
  { type: "blank", text: "" },
  { type: "output", text: "Creating a new Next.js app in C:\\Users\\lorem\\lorem." },
  { type: "output", text: "Using pnpm." },
  { type: "blank", text: "" },
  { type: "output", text: "Installing dependencies:" },
  { type: "output", text: "  - next" },
  { type: "output", text: "  - react" },
  { type: "output", text: "  - react-dom" },
  { type: "blank", text: "" },
  { type: "output", text: "Installing devDependencies:" },
  { type: "output", text: "  - tailwindcss" },
  { type: "output", text: "  - typescript" },
  { type: "output", text: "  - eslint-config-next" },
  { type: "blank", text: "" },
  { type: "loading", text: "Packages: +350" },
  { type: "output", text: "  + next 16.1.6" },
  { type: "output", text: "  + react 19.2.3" },
  { type: "output", text: "  + tailwindcss 4.2.1" },
  { type: "output", text: "  + typescript 5.9.3" },
  { type: "blank", text: "" },
  { type: "success", text: "✓ Types generated successfully" },
  { type: "success", text: "✓ Initialized a git repository." },
  { type: "blank", text: "" },
  { type: "success", text: "Success! Created lorem at C:\\Users\\lorem\\lorem" },
]

const PROMPT_PS = "PS"
const PROMPT_PATH = " C:\\Users\\lorem"
const PROMPT_ARROW = ">"

export default function WindowsTerminalWindow() {
  const bodyRef = useRef<HTMLDivElement>(null)
  const cursorRef = useRef<HTMLSpanElement>(null)
  const finalPromptRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const body = bodyRef.current
    const cursor = cursorRef.current
    const finalPrompt = finalPromptRef.current
    if (!body || !cursor || !finalPrompt) return

    const lineEls = Array.from(body.querySelectorAll<HTMLElement>("[data-line]"))
    const typedEls = Array.from(body.querySelectorAll<HTMLElement>("[data-typed]"))
    const spinnerEls = Array.from(body.querySelectorAll<HTMLElement>("[data-spinner]"))

    typedEls.forEach((el) => (el.textContent = ""))
    spinnerEls.forEach((el) => (el.textContent = "|"))
    gsap.set(lineEls, { opacity: 0, y: 4, display: "flex" })
    gsap.set(finalPrompt, { opacity: 0, y: 4 })
    gsap.set(cursor, { opacity: 0 })

    const tl = gsap.timeline({ delay: 0.6 })
    let typedIdx = 0
    let spinnerIdx = 0

    STEPS.forEach((step, i) => {
      const lineEl = lineEls[i]
      if (!lineEl) return

      if (step.type === "command" || step.type === "prompt") {
        const typedEl = typedEls[typedIdx++]
        tl.to(lineEl, { opacity: 1, y: 0, duration: 0.12 })
        if (typedEl) {
          const obj = { chars: 0 }
          tl.to(obj, {
            chars: step.text.length,
            duration: step.text.length * 0.028,
            ease: `steps(${step.text.length})`,
            onUpdate() {
              typedEl.textContent = step.text.slice(0, Math.round(obj.chars))
            },
          })
          tl.to({}, { duration: step.type === "prompt" ? 0.8 : 0.4 })
        }
      } else if (step.type === "loading") {
        const spinnerEl = spinnerEls[spinnerIdx++]
        const frames = ["|", "/", "—", "\\", "|", "/", "—", "\\"]
        tl.to(lineEl, { opacity: 1, y: 0, duration: 0.1 })
        if (spinnerEl) {
          const state = { frame: 0 }
          tl.to(state, {
            frame: frames.length * 4,
            duration: 1.2,
            ease: "none",
            onUpdate() {
              spinnerEl.textContent = frames[Math.floor(state.frame) % frames.length]
            },
            onComplete() {
              spinnerEl.textContent = ""
            },
          })
        }
        tl.to(lineEl, { opacity: 0, duration: 0.1 })
        tl.set(lineEl, { display: "none" })
      } else if (step.type === "blank") {
        tl.to(lineEl, { opacity: 1, y: 0, duration: 0.05 })
      } else {
        tl.to(lineEl, { opacity: 1, y: 0, duration: 0.15 }, ">-0.02")
      }
    })

    tl.to(finalPrompt, { opacity: 1, y: 0, duration: 0.12 })
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
  }, [])

  return (
    <div className="wt-terminal">
      <WindowsTerminalTitlebar tabLabel="Windows PowerShell" />

      <div className="wt-body" ref={bodyRef}>
        {STEPS.map((step, i) => (
          <div
            key={i}
            data-line
            className={cn(
              "wt-line",
              step.type === "command" && "wt-line-command",
              step.type === "blank" && "wt-line-blank"
            )}
          >
            {step.type === "command" ? (
              <>
                <span className="wt-prompt">
                  <span className="wt-prompt-ps">{PROMPT_PS}</span>
                  <span className="wt-prompt-path">{PROMPT_PATH}</span>
                  <span className="wt-prompt-arrow">{PROMPT_ARROW}</span>
                </span>
                <span data-typed className="wt-typed" />
              </>
            ) : step.type === "prompt" ? (
              <>
                <span className="wt-text">{step.prefix}</span>
                <span data-typed className="wt-typed" />
              </>
            ) : step.type === "blank" ? (
              <br />
            ) : step.type === "loading" ? (
              <>
                <span data-spinner className="wt-spinner">|</span>
                <span className="wt-text">{step.text}</span>
              </>
            ) : (
              <span
                className={
                  step.type === "success"
                    ? "wt-text-success"
                    : step.type === "error"
                      ? "wt-text-error"
                      : "wt-text"
                }
              >
                {step.text}
              </span>
            )}
          </div>
        ))}

        <div ref={finalPromptRef} className="wt-line">
          <span className="wt-prompt">
            <span className="wt-prompt-ps">{PROMPT_PS}</span>
            <span className="wt-prompt-path">{PROMPT_PATH}</span>
            <span className="wt-prompt-arrow">{PROMPT_ARROW}</span>
          </span>
          <span ref={cursorRef} className="wt-cursor">█</span>
        </div>
      </div>
    </div>
  )
}
