import { NextResponse } from "next/server"
import { products } from "@/lib/products"

// GET /api/products/[id] - Fetch a single product by ID
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const productId = parseInt(id, 10)

  // Simulate Express server delay
  await new Promise((resolve) => setTimeout(resolve, 100))

  const product = products.find((p) => p.id === productId)

  if (!product) {
    return NextResponse.json(
      { error: "Product not found" },
      { status: 404 }
    )
  }

  return NextResponse.json(product)
}
