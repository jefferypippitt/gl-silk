"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { cn } from "./utils"
import MacOsTerminalTitlebar from "./mac-os-terminal-titlebar"

type TerminalStep = {
  type: "command" | "prompt" | "output" | "success" | "error" | "blank" | "loading"
  text: string
  prefix?: string
}

const STEPS: TerminalStep[] = [
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

const PROMPT = "lorem@MacBook-Air - %"

export default function MacOsTerminalWindow() {
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
    spinnerEls.forEach((el) => (el.textContent = "⠋"))
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
            duration: step.text.length * 0.032,
            ease: `steps(${step.text.length})`,
            onUpdate() {
              typedEl.textContent = step.text.slice(0, Math.round(obj.chars))
            },
          })
          tl.to({}, { duration: step.type === "prompt" ? 0.8 : 0.35 })
        }
      } else if (step.type === "loading") {
        const spinnerEl = spinnerEls[spinnerIdx++]
        const frames = ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"]
        tl.to(lineEl, { opacity: 1, y: 0, duration: 0.1 })
        if (spinnerEl) {
          const state = { frame: 0 }
          tl.to(state, {
            frame: frames.length * 3,
            duration: 1.35,
            ease: "none",
            onUpdate() {
              spinnerEl.textContent = frames[Math.floor(state.frame) % frames.length]
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
    <div className="mot-terminal">
      <MacOsTerminalTitlebar
        title="projects"
        subtitle="-zsh"
        dimensions="80×20"
        showIcon={true}
      />

      <div className="mot-body" ref={bodyRef}>
        {STEPS.map((step, i) => (
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
                <span className="mot-prompt">{PROMPT}</span>
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
                <span data-spinner className="mot-spinner">⠋</span>
                <span className="mot-text">{step.text}</span>
              </>
            ) : (
              <span
                className={
                  step.type === "success"
                    ? "mot-text-success"
                    : step.type === "error"
                      ? "mot-text-error"
                      : "mot-text"
                }
              >
                {step.text}
              </span>
            )}
          </div>
        ))}

        <div ref={finalPromptRef} className="mot-line">
          <span className="mot-prompt">{PROMPT}</span>
          <span ref={cursorRef} className="mot-cursor">▋</span>
        </div>
      </div>
    </div>
  )
}
