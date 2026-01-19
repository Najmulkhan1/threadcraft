import { Instagram } from "lucide-react"

const instagramPosts = [
  "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=300&h=300&fit=crop",
  "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=300&h=300&fit=crop",
  "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=300&h=300&fit=crop",
  "https://images.unsplash.com/photo-1622445275576-721325763afe?w=300&h=300&fit=crop",
  "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=300&h=300&fit=crop",
  "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=300&h=300&fit=crop",
]

export function InstagramSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-accent uppercase tracking-wider mb-2">
            Follow Us
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            @threadcraft.bd
          </h2>
          <p className="text-muted-foreground">
            Tag us in your photos for a chance to be featured
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {instagramPosts.map((image, index) => (
            <a
              href="#"
              key={index}
              className="group relative aspect-square overflow-hidden rounded-lg"
            >
              <img
                src={image || "/placeholder.svg"}
                alt={`Instagram post ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Instagram className="h-8 w-8 text-white" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
