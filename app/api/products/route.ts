import { NextResponse } from "next/server"
import { products, type Product } from "@/lib/products"

// GET /api/products - Fetch all products
export async function GET() {
  // Simulate Express server delay
  await new Promise((resolve) => setTimeout(resolve, 100))
  
  return NextResponse.json(products)
}

// POST /api/products - Add a new product
export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    // Validate required fields
    const requiredFields = ["name", "description", "price", "image", "category", "sizes", "colors"]
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        )
      }
    }

    const newProduct: Product = {
      id: products.length + 1,
      name: body.name,
      description: body.description,
      price: Number(body.price),
      image: body.image,
      category: body.category,
      sizes: body.sizes,
      colors: body.colors,
      inStock: body.inStock ?? true,
      featured: body.featured ?? false,
    }

    products.push(newProduct)

    return NextResponse.json(newProduct, { status: 201 })
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    )
  }
}
