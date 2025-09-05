import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { FeaturedResources } from "@/components/featured-resources"
import { Championships } from "@/components/championships"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <FeaturedResources />
        <Championships />
      </main>
      <Footer />
    </div>
  )
}
