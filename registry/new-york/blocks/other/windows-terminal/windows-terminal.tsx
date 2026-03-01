import "./windows-terminal.css"
import WindowsTerminalWindow from "./windows-terminal-window"

export default function WindowsTerminal() {
  return (
    <section className="relative w-full max-w-[560px] mx-auto px-4 py-10">
      <WindowsTerminalWindow />
    </section>
  )
}
