"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function StickyCartButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button after scrolling down 300px
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background border-t border-border p-4 shadow-lg"
        >
          <div className="container mx-auto flex items-center justify-between gap-4">
            <div>
              <div className="text-2xl font-bold">{"$49.99"}</div>
              <div className="text-sm text-muted-foreground line-through">{"$79.99"}</div>
            </div>
            <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground">
              <ShoppingCart className="w-5 h-5" />
              {"Add to Cart"}
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
