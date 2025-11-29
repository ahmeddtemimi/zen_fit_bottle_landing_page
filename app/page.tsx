import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { ProductGallery } from "@/components/product-gallery"
import { BenefitsSection } from "@/components/benefits-section"
import { ReviewsSection } from "@/components/reviews-section"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"
import { StickyCartButton } from "@/components/sticky-cart-button"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <ProductGallery />
      <BenefitsSection />
      <ReviewsSection />
      <FAQSection />
      <Footer />
      <StickyCartButton />
    </main>
  )
}
