import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <p className="text-sm font-medium text-accent uppercase tracking-wider mb-4">
              Made in Bangladesh
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-balance">
              Premium quality meets authentic design
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
              Discover our collection of handcrafted t-shirts that blend traditional Bangladeshi artistry with modern fashion. Every piece tells a story.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/products">
                <Button size="lg" className="gap-2 w-full sm:w-auto">
                  Explore Collection
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/#about">
                <Button variant="outline" size="lg" className="w-full sm:w-auto bg-transparent">
                  Our Story
                </Button>
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="aspect-[4/5] bg-secondary rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=1000&fit=crop"
                alt="Premium t-shirt collection"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-card p-4 rounded-xl shadow-lg">
              <p className="text-2xl font-bold">500+</p>
              <p className="text-sm text-muted-foreground">Happy Customers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
