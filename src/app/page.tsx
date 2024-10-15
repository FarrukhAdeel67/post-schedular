import Hero from "@/components/Hero"
import OnBoardModal from "@/components/OnBoardModal"

// Stateful components were separated to keep this file server-side, avoiding "use client" here.
export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <OnBoardModal />
    </div>
  )
}
