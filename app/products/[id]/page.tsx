"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ArrowLeft, Loader2, Check, Truck, RotateCcw, Shield } from "lucide-react"
import type { Product } from "@/lib/products"

export default function ProductDetailsPage() {
  const params = useParams()
  const router = useRouter()
  const [product, setProduct] = useState<Product | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedSize, setSelectedSize] = useState<string>("")
  const [selectedColor, setSelectedColor] = useState<string>("")

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await fetch(`/api/products/${params.id}`)
        if (!response.ok) {
          throw new Error("Product not found")
        }
        const data = await response.json()
        setProduct(data)
        if (data.sizes.length > 0) setSelectedSize(data.sizes[0])
        if (data.colors.length > 0) setSelectedColor(data.colors[0])
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load product")
      } finally {
        setIsLoading(false)
      }
    }

    fetchProduct()
  }, [params.id])

  if (isLoading) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen pt-16 flex items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
        </main>
        <Footer />
      </>
    )
  }

  if (error || !product) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen pt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
            <p className="text-muted-foreground mb-6">
              Sorry, we couldn&apos;t find the product you&apos;re looking for.
            </p>
            <Button onClick={() => router.push("/products")}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Products
            </Button>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16">
        {/* Breadcrumb */}
        <div className="bg-secondary py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-sm">
              <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                Home
              </Link>
              <span className="text-muted-foreground">/</span>
              <Link href="/products" className="text-muted-foreground hover:text-foreground transition-colors">
                Products
              </Link>
              <span className="text-muted-foreground">/</span>
              <span className="text-foreground">{product.name}</span>
            </nav>
          </div>
        </div>

        {/* Product Details */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Product Image */}
              <div className="relative">
                <div className="aspect-[4/5] rounded-xl overflow-hidden bg-secondary">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
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

              {/* Product Info */}
              <div className="flex flex-col">
                <p className="text-sm text-accent uppercase tracking-wider mb-2">
                  {product.category}
                </p>
                <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                  {product.name}
                </h1>
                <p className="text-2xl font-semibold mb-6">
                  BDT {product.price.toLocaleString()}
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {product.description}
                </p>

                {/* Size Selection */}
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2">Size</label>
                  <Select value={selectedSize} onValueChange={setSelectedSize}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select size" />
                    </SelectTrigger>
                    <SelectContent>
                      {product.sizes.map((size) => (
                        <SelectItem key={size} value={size}>
                          {size}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Color Selection */}
                <div className="mb-8">
                  <label className="block text-sm font-medium mb-2">Color</label>
                  <Select value={selectedColor} onValueChange={setSelectedColor}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select color" />
                    </SelectTrigger>
                    <SelectContent>
                      {product.colors.map((color) => (
                        <SelectItem key={color} value={color}>
                          {color}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Add to Cart Button */}
                <Button
                  size="lg"
                  className="w-full mb-4"
                  disabled={!product.inStock}
                >
                  {product.inStock ? "Add to Cart" : "Out of Stock"}
                </Button>

                {/* Stock Status */}
                {product.inStock && (
                  <p className="flex items-center gap-2 text-sm text-green-600 mb-8">
                    <Check className="h-4 w-4" />
                    In Stock - Ready to ship
                  </p>
                )}

                {/* Features */}
                <div className="border-t border-border pt-8 mt-auto">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                        <Truck className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Free Shipping</p>
                        <p className="text-xs text-muted-foreground">Orders over BDT 2000</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                        <RotateCcw className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Easy Returns</p>
                        <p className="text-xs text-muted-foreground">7 day return policy</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                        <Shield className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Quality Assured</p>
                        <p className="text-xs text-muted-foreground">100% authentic</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Back to Products */}
        <section className="pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/products">
              <Button variant="outline" className="gap-2 bg-transparent">
                <ArrowLeft className="h-4 w-4" />
                Back to Products
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
