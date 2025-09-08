import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import BentoGrid from "@/components/bento-grid"
import { Footer } from "@/components/footer"
import { LanguageThemeOverlay } from "@/components/language-theme-overlay"
import WelcomePopup from "@/components/welcome-popup"

export default function HomePage() {
  return (
    <main className="min-h-screen animated-flag-bg">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <BentoGrid />
      <Footer />
      <LanguageThemeOverlay />
      <WelcomePopup />
    </main>
  )
}
