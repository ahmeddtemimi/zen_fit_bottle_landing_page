"use client"

import { Button } from "@/components/ui/button"
import { ShoppingCart, Star } from "lucide-react"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted rounded-full text-sm">
              <Star className="w-4 h-4 fill-foreground" />
              <span>{"Rated 4.9/5 by 10,000+ customers"}</span>
            </div>

            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl tracking-tight text-balance">
              {"Hydration Perfected"}
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
              {
                "Experience the ultimate in temperature-controlled hydration. Keep drinks cold for 24 hours or hot for 12 hours with our premium stainless steel design."
              }
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
              <div className="text-center sm:text-left">
                <div className="text-4xl font-bold">{"$49.99"}</div>
                <div className="text-sm text-muted-foreground line-through">{"$79.99"}</div>
              </div>

              <Button
                size="lg"
                className="h-14 px-8 text-base gap-2 bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <ShoppingCart className="w-5 h-5" />
                {"Add to Cart"}
              </Button>
            </div>

            <div className="flex items-center gap-8 justify-center lg:justify-start text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>{"Free Shipping"}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>{"30-Day Returns"}</span>
              </div>
            </div>
          </motion.div>

          {/* Right Product Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square">
              <img src="/premium-black-fitness-water-bottle-centered-on-whi.jpg" alt="ZenFit Bottle" className="w-full h-full object-contain" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
