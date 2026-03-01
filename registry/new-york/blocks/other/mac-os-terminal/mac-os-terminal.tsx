import "./mac-os-terminal.css"
import MacOsTerminalWindow from "./mac-os-terminal-window"

export default function MacOsTerminal() {
  return (
    <section className="relative w-full max-w-[560px] mx-auto px-4 py-10">
      <MacOsTerminalWindow />
    </section>
  );
}
