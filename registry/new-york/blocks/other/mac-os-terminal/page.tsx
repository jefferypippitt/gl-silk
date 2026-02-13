import { MacOsTerminal } from "../mac-os-terminal"

export default function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center p-8 bg-background">
      <MacOsTerminal />
    </div>
  )
}
