import Link from "next/link"
import { ArrowRight } from "lucide-react"

const collections = [
  {
    name: "Classic Essentials",
    description: "Timeless basics for everyday wear",
    image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=600&h=400&fit=crop",
    count: "12 Products",
  },
  {
    name: "Heritage Collection",
    description: "Traditional Bangladeshi patterns reimagined",
    image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=600&h=400&fit=crop",
    count: "8 Products",
  },
  {
    name: "Street Style",
    description: "Bold designs for the urban explorer",
    image: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=600&h=400&fit=crop",
    count: "15 Products",
  },
]

export function CollectionsSection() {
  return (
    <section id="collections" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
          <div>
            <p className="text-sm font-medium text-accent uppercase tracking-wider mb-2">
              Collections
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Shop by category
            </h2>
          </div>
          <Link 
            href="/products" 
            className="flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors"
          >
            View All
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {collections.map((collection, index) => (
            <Link href="/products" key={index}>
              <div className="group relative aspect-[3/2] rounded-xl overflow-hidden">
                <img
                  src={collection.image || "/placeholder.svg"}
                  alt={collection.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-sm opacity-80">{collection.count}</p>
                  <h3 className="text-xl font-semibold">{collection.name}</h3>
                  <p className="text-sm opacity-80 mt-1">{collection.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
