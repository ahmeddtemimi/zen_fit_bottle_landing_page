import { Truck, RefreshCcw, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Shipping Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Truck className="w-6 h-6" />
              <h3 className="text-lg font-semibold">{"Free Shipping"}</h3>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              {"Free standard shipping on all orders. Express shipping available at checkout."}
            </p>
          </div>

          {/* Refund Policy */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <RefreshCcw className="w-6 h-6" />
              <h3 className="text-lg font-semibold">{"30-Day Returns"}</h3>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              {"Not satisfied? Return within 30 days for a full refund, no questions asked."}
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{"Contact Us"}</h3>
            <div className="space-y-3 text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:support@zenfit.com" className="hover:text-primary-foreground transition-colors">
                  {"support@zenfit.com"}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:1-800-ZENFIT" className="hover:text-primary-foreground transition-colors">
                  {"1-800-ZENFIT"}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>{"San Francisco, CA"}</span>
              </div>
            </div>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{"Company"}</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  {"About Us"}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  {"Sustainability"}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  {"Privacy Policy"}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  {"Terms of Service"}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60">
          <p>{"© 2025 ZenFit. All rights reserved."}</p>
        </div>
      </div>
    </footer>
  )
}
