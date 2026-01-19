import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=1200&h=600&fit=crop"
              alt="T-shirt collection"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/80" />
          </div>
          
          <div className="relative py-16 px-8 sm:py-24 sm:px-16 text-center text-primary-foreground">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Ready to elevate your wardrobe?
            </h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
              Join thousands of satisfied customers who have discovered the ThreadCraft difference. Premium quality, authentic design, sustainable fashion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products">
                <Button variant="secondary" size="lg" className="gap-2">
                  Shop Now
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/#contact">
                <Button variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
