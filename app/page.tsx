import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { FeaturedSection } from "@/components/featured-section"
import { CollectionsSection } from "@/components/collections-section"
import { AboutSection } from "@/components/about-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection } from "@/components/cta-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { InstagramSection } from "@/components/instagram-section"

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Section 1: Hero */}
        <HeroSection />
        
        {/* Section 2: Featured Products */}
        <FeaturedSection />
        
        {/* Section 3: Collections */}
        <CollectionsSection />
        
        {/* Section 4: About Us */}
        <AboutSection />
        
        {/* Section 5: Testimonials */}
        <TestimonialsSection />
        
        {/* Section 6: CTA */}
        <CTASection />
        
        {/* Section 7: Instagram Feed */}
        <InstagramSection />
        
        {/* Newsletter (bonus) */}
        <NewsletterSection />
      </main>
      <Footer />
    </>
  )
}
