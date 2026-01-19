import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Product } from "@/lib/products"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.id}`}>
      <Card className="group overflow-hidden border-0 bg-card hover:shadow-lg transition-shadow h-full">
        <CardContent className="p-0">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-4 left-4 flex flex-col gap-2">
              {product.featured && (
                <Badge className="bg-accent text-accent-foreground">
                  Featured
                </Badge>
              )}
              {!product.inStock && (
                <Badge variant="secondary" className="bg-muted text-muted-foreground">
                  Out of Stock
                </Badge>
              )}
            </div>
          </div>
          <div className="p-4">
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
              {product.category}
            </p>
            <h3 className="font-medium line-clamp-1">{product.name}</h3>
            <p className="text-muted-foreground mt-1">
              BDT {product.price.toLocaleString()}
            </p>
            <div className="flex gap-1 mt-2">
              {product.colors.slice(0, 3).map((color, index) => (
                <span
                  key={index}
                  className="text-xs text-muted-foreground"
                >
                  {color}{index < Math.min(product.colors.length - 1, 2) && ","}
                </span>
              ))}
              {product.colors.length > 3 && (
                <span className="text-xs text-muted-foreground">
                  +{product.colors.length - 3} more
                </span>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
