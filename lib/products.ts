export interface Product {
  id: number
  name: string
  description: string
  price: number
  image: string
  category: string
  sizes: string[]
  colors: string[]
  inStock: boolean
  featured: boolean
}

// Mock product data - simulating data from an Express server
export const products: Product[] = [
  {
    id: 1,
    name: "Classic Cotton Tee",
    description: "Our signature 100% cotton t-shirt, crafted with premium Bangladeshi cotton. Features a comfortable fit with reinforced stitching for durability. Perfect for everyday wear.",
    price: 850,
    image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&h=750&fit=crop",
    category: "Classic Essentials",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["White", "Black", "Navy", "Gray"],
    inStock: true,
    featured: true,
  },
  {
    id: 2,
    name: "Heritage Print Tee",
    description: "A unique t-shirt featuring traditional Bangladeshi nakshi kantha-inspired patterns. Hand-printed using eco-friendly dyes on premium cotton fabric.",
    price: 1200,
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&h=750&fit=crop",
    category: "Heritage Collection",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Cream", "Blue", "Green"],
    inStock: true,
    featured: true,
  },
  {
    id: 3,
    name: "Minimalist Black",
    description: "Sleek and sophisticated, this all-black tee is a wardrobe essential. Made with fade-resistant dye for lasting color, featuring a modern slim fit.",
    price: 950,
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&h=750&fit=crop",
    category: "Classic Essentials",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black"],
    inStock: true,
    featured: true,
  },
  {
    id: 4,
    name: "Dhaka Street Style",
    description: "Inspired by the vibrant streets of Dhaka, this urban-styled tee features bold graphics and a relaxed fit. Perfect for those who want to stand out.",
    price: 1100,
    image: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=600&h=750&fit=crop",
    category: "Street Style",
    sizes: ["M", "L", "XL"],
    colors: ["White", "Gray"],
    inStock: true,
    featured: false,
  },
  {
    id: 5,
    name: "Bengal Tiger Graphic Tee",
    description: "Show your pride with our Bengal Tiger graphic tee. Features an artistic rendering of the Royal Bengal Tiger, screen-printed on soft cotton.",
    price: 1350,
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=600&h=750&fit=crop",
    category: "Street Style",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Orange", "Black", "White"],
    inStock: true,
    featured: false,
  },
  {
    id: 6,
    name: "Organic Cotton Basic",
    description: "Sustainably sourced organic cotton from local farms. Soft, breathable, and environmentally conscious. The perfect everyday basic.",
    price: 990,
    image: "https://images.unsplash.com/photo-1622445275576-721325763afe?w=600&h=750&fit=crop",
    category: "Classic Essentials",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Natural", "Sage", "Stone"],
    inStock: true,
    featured: false,
  },
  {
    id: 7,
    name: "Rickshaw Art Tee",
    description: "Celebrate the iconic Bangladeshi rickshaw art with this colorful, hand-designed tee. Each piece is a tribute to our vibrant street culture.",
    price: 1250,
    image: "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=600&h=750&fit=crop",
    category: "Heritage Collection",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Multi", "Blue Base", "Red Base"],
    inStock: false,
    featured: false,
  },
  {
    id: 8,
    name: "Vintage Wash Tee",
    description: "Pre-washed for that perfect broken-in feel. Features a vintage-inspired cut and soft hand feel that gets better with every wash.",
    price: 1050,
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=600&h=750&fit=crop",
    category: "Street Style",
    sizes: ["M", "L", "XL", "XXL"],
    colors: ["Faded Black", "Washed Blue", "Vintage Gray"],
    inStock: true,
    featured: false,
  },
  {
    id: 9,
    name: "Premium V-Neck",
    description: "Elegant V-neck design with a refined fit. Made from a cotton-modal blend for extra softness and a subtle sheen.",
    price: 1150,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=750&fit=crop",
    category: "Classic Essentials",
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Black", "Maroon"],
    inStock: true,
    featured: false,
  },
  {
    id: 10,
    name: "Sundarbans Collection Tee",
    description: "Part of our limited Sundarbans collection, featuring subtle nature-inspired designs. A portion of proceeds supports mangrove conservation.",
    price: 1450,
    image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=600&h=750&fit=crop",
    category: "Heritage Collection",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Forest Green", "Ocean Blue", "Sunset Orange"],
    inStock: true,
    featured: false,
  },
]

// Simulates fetching from an Express server API
export async function getProducts(): Promise<Product[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100))
  return products
}

export async function getProductById(id: number): Promise<Product | undefined> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100))
  return products.find((p) => p.id === id)
}

export async function getFeaturedProducts(): Promise<Product[]> {
  await new Promise((resolve) => setTimeout(resolve, 100))
  return products.filter((p) => p.featured)
}

// For add item functionality - simulates POST to Express server
let nextId = products.length + 1
export async function addProduct(product: Omit<Product, "id">): Promise<Product> {
  await new Promise((resolve) => setTimeout(resolve, 200))
  const newProduct = { ...product, id: nextId++ }
  products.push(newProduct)
  return newProduct
}
