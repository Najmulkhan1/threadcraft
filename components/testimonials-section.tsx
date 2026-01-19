import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Rafiq Ahmed",
    location: "Dhaka",
    text: "The quality is exceptional! I've been wearing ThreadCraft tees for over a year now and they still look brand new.",
    rating: 5,
  },
  {
    name: "Fatima Khan",
    location: "Chittagong",
    text: "Finally, a Bangladeshi brand that combines style with quality. The Heritage Collection is absolutely stunning.",
    rating: 5,
  },
  {
    name: "Arif Rahman",
    location: "Sylhet",
    text: "Fast delivery, great packaging, and the t-shirts fit perfectly. Will definitely order again!",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-accent uppercase tracking-wider mb-2">
            Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            What our customers say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 bg-secondary">
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground leading-relaxed mb-4">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div>
                  <p className="font-medium">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
