"use client"

import React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, Loader2, AlertCircle, CheckCircle2 } from "lucide-react"
import { getUser, type User } from "@/lib/auth"
import { toast } from "sonner"

const categories = [
  "Classic Essentials",
  "Heritage Collection",
  "Street Style",
]

const availableSizes = ["S", "M", "L", "XL", "XXL"]

export default function AddProductPage() {
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)
  const [isCheckingAuth, setIsCheckingAuth] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  // Form state
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [image, setImage] = useState("")
  const [category, setCategory] = useState("")
  const [sizes, setSizes] = useState<string[]>([])
  const [colors, setColors] = useState("")
  const [inStock, setInStock] = useState(true)
  const [featured, setFeatured] = useState(false)

  // Check authentication
  useEffect(() => {
    async function checkAuth() {
      const currentUser = await getUser()
      if (!currentUser) {
        router.push("/login")
        return
      }
      setUser(currentUser)
      setIsCheckingAuth(false)
    }
    checkAuth()
  }, [router])

  const handleSizeChange = (size: string, checked: boolean) => {
    if (checked) {
      setSizes([...sizes, size])
    } else {
      setSizes(sizes.filter((s) => s !== size))
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const colorArray = colors.split(",").map((c) => c.trim()).filter(Boolean)

      if (sizes.length === 0) {
        throw new Error("Please select at least one size")
      }

      if (colorArray.length === 0) {
        throw new Error("Please enter at least one color")
      }

      const response = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          description,
          price: parseFloat(price),
          image: image || "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=750&fit=crop",
          category,
          sizes,
          colors: colorArray,
          inStock,
          featured,
        }),
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.error || "Failed to add product")
      }

      setSuccess(true)
      toast.success("Product added successfully!")
      
      // Redirect to products page after a short delay
      setTimeout(() => {
        router.push("/products")
      }, 1500)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to add product")
      toast.error(err instanceof Error ? err.message : "Failed to add product")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isCheckingAuth) {
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

  if (!user) {
    return null // Will redirect to login
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16 pb-12">
        {/* Header */}
        <section className="bg-secondary py-8">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/products">
              <Button variant="ghost" size="sm" className="mb-4 gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Products
              </Button>
            </Link>
            <h1 className="text-3xl font-bold tracking-tight">Add New Product</h1>
            <p className="text-muted-foreground mt-2">
              Fill in the details below to add a new t-shirt to the collection.
            </p>
          </div>
        </section>

        {/* Form */}
        <section className="py-8">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card>
              <CardHeader>
                <CardTitle>Product Details</CardTitle>
                <CardDescription>
                  All fields marked with * are required
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="flex items-center gap-2 p-3 text-sm text-destructive bg-destructive/10 rounded-lg">
                      <AlertCircle className="h-4 w-4 flex-shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  {success && (
                    <div className="flex items-center gap-2 p-3 text-sm text-green-600 bg-green-50 rounded-lg">
                      <CheckCircle2 className="h-4 w-4 flex-shrink-0" />
                      <span>Product added successfully! Redirecting...</span>
                    </div>
                  )}

                  {/* Name */}
                  <div className="space-y-2">
                    <Label htmlFor="name">Product Name *</Label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g., Classic Cotton Tee"
                      required
                      disabled={isSubmitting || success}
                    />
                  </div>

                  {/* Description */}
                  <div className="space-y-2">
                    <Label htmlFor="description">Description *</Label>
                    <Textarea
                      id="description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Describe the product..."
                      rows={4}
                      required
                      disabled={isSubmitting || success}
                    />
                  </div>

                  {/* Price and Category */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="price">Price (BDT) *</Label>
                      <Input
                        id="price"
                        type="number"
                        min="0"
                        step="1"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        placeholder="e.g., 850"
                        required
                        disabled={isSubmitting || success}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="category">Category *</Label>
                      <Select
                        value={category}
                        onValueChange={setCategory}
                        disabled={isSubmitting || success}
                        required
                      >
                        <SelectTrigger id="category">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map((cat) => (
                            <SelectItem key={cat} value={cat}>
                              {cat}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Image URL */}
                  <div className="space-y-2">
                    <Label htmlFor="image">Image URL</Label>
                    <Input
                      id="image"
                      type="url"
                      value={image}
                      onChange={(e) => setImage(e.target.value)}
                      placeholder="https://example.com/image.jpg (optional)"
                      disabled={isSubmitting || success}
                    />
                    <p className="text-xs text-muted-foreground">
                      Leave empty to use a default image
                    </p>
                  </div>

                  {/* Sizes */}
                  <div className="space-y-2">
                    <Label>Available Sizes *</Label>
                    <div className="flex flex-wrap gap-4">
                      {availableSizes.map((size) => (
                        <div key={size} className="flex items-center gap-2">
                          <Checkbox
                            id={`size-${size}`}
                            checked={sizes.includes(size)}
                            onCheckedChange={(checked) =>
                              handleSizeChange(size, checked as boolean)
                            }
                            disabled={isSubmitting || success}
                          />
                          <Label
                            htmlFor={`size-${size}`}
                            className="text-sm font-normal cursor-pointer"
                          >
                            {size}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Colors */}
                  <div className="space-y-2">
                    <Label htmlFor="colors">Colors *</Label>
                    <Input
                      id="colors"
                      value={colors}
                      onChange={(e) => setColors(e.target.value)}
                      placeholder="e.g., White, Black, Navy (comma separated)"
                      required
                      disabled={isSubmitting || success}
                    />
                    <p className="text-xs text-muted-foreground">
                      Enter colors separated by commas
                    </p>
                  </div>

                  {/* Checkboxes */}
                  <div className="flex flex-wrap gap-6">
                    <div className="flex items-center gap-2">
                      <Checkbox
                        id="inStock"
                        checked={inStock}
                        onCheckedChange={(checked) => setInStock(checked as boolean)}
                        disabled={isSubmitting || success}
                      />
                      <Label htmlFor="inStock" className="text-sm font-normal cursor-pointer">
                        In Stock
                      </Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox
                        id="featured"
                        checked={featured}
                        onCheckedChange={(checked) => setFeatured(checked as boolean)}
                        disabled={isSubmitting || success}
                      />
                      <Label htmlFor="featured" className="text-sm font-normal cursor-pointer">
                        Featured Product
                      </Label>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="flex gap-4 pt-4">
                    <Button
                      type="submit"
                      disabled={isSubmitting || success || !category}
                      className="flex-1"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Adding Product...
                        </>
                      ) : success ? (
                        <>
                          <CheckCircle2 className="mr-2 h-4 w-4" />
                          Product Added!
                        </>
                      ) : (
                        "Add Product"
                      )}
                    </Button>
                    <Link href="/products">
                      <Button
                        type="button"
                        variant="outline"
                        disabled={isSubmitting}
                      >
                        Cancel
                      </Button>
                    </Link>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
