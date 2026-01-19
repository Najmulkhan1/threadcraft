import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-xl font-bold tracking-tight">ThreadCraft</span>
              <span className="text-sm font-medium text-accent">BD</span>
            </Link>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              Premium quality t-shirts crafted with love in Bangladesh. Sustainable fashion for the modern world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/products" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Shop All
                </Link>
              </li>
              <li>
                <Link href="/#collections" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Collections
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Returns & Exchange
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Size Guide
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>Dhaka, Bangladesh</li>
              <li>contact@threadcraft.bd</li>
              <li>+880 1XXX-XXXXXX</li>
            </ul>
            <div className="flex gap-4 mt-4">
              <a href="#" className="hover:text-accent transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} ThreadCraft BD. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
