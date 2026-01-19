import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const featuredProducts = [
  {
    id: 1,
    name: "Classic Cotton Tee",
    price: 850,
    image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&h=500&fit=crop",
    badge: "Bestseller",
  },
  {
    id: 2,
    name: "Heritage Print Tee",
    price: 1200,
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400&h=500&fit=crop",
    badge: "New",
  },
  {
    id: 3,
    name: "Minimalist Black",
    price: 950,
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=500&fit=crop",
    badge: null,
  },
]

export function FeaturedSection() {
  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-accent uppercase tracking-wider mb-2">
            Featured
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Most loved pieces
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <Link href={`/products/${product.id}`} key={product.id}>
              <Card className="group overflow-hidden border-0 bg-card hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {product.badge && (
                      <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                        {product.badge}
                      </Badge>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium">{product.name}</h3>
                    <p className="text-muted-foreground">BDT {product.price.toLocaleString()}</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
