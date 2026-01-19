import { Leaf, Heart, Award, Truck } from "lucide-react"

const features = [
  {
    icon: Leaf,
    title: "Sustainable Fashion",
    description: "Eco-friendly materials and ethical production practices",
  },
  {
    icon: Heart,
    title: "Crafted with Love",
    description: "Each piece is made with attention to detail and care",
  },
  {
    icon: Award,
    title: "Premium Quality",
    description: "100% cotton and superior stitching for lasting comfort",
  },
  {
    icon: Truck,
    title: "Nationwide Delivery",
    description: "Fast shipping across Bangladesh and international",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&h=800&fit=crop"
                alt="ThreadCraft BD workshop"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Stats overlay */}
            <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-xl shadow-lg hidden md:block">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-3xl font-bold text-accent">5+</p>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-accent">10K+</p>
                  <p className="text-sm text-muted-foreground">Items Sold</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-sm font-medium text-accent uppercase tracking-wider mb-2">
              Our Story
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
              Born in Bangladesh, crafted for the world
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              ThreadCraft BD started with a simple vision: to showcase the incredible craftsmanship of Bangladesh to the world. Our country has a rich textile heritage, and we wanted to create a brand that honors this tradition while embracing modern design sensibilities.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Every t-shirt in our collection is designed in Dhaka and produced in partnership with local artisans who share our commitment to quality and sustainability.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <feature.icon className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
