"use client"

import { motion } from "framer-motion"
import { useState } from "react"

const images = [
  {
    src: "/black-fitness-water-bottle-front-view-premium-prod.jpg",
    alt: "ZenFit Bottle - Front View",
  },
  {
    src: "/black-fitness-water-bottle-side-angle-showing-text.jpg",
    alt: "ZenFit Bottle - Side View",
  },
  {
    src: "/black-fitness-water-bottle-top-lid-detail-close-up.jpg",
    alt: "ZenFit Bottle - Lid Detail",
  },
  {
    src: "/black-fitness-water-bottle-being-held-by-hand-life.jpg",
    alt: "ZenFit Bottle - In Use",
  },
  {
    src: "/black-fitness-water-bottle-with-ice-and-water-drop.jpg",
    alt: "ZenFit Bottle - With Ice",
  },
]

export function ProductGallery() {
  const [selectedImage, setSelectedImage] = useState(0)

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl mb-4 text-balance">{"Every Detail Matters"}</h2>
          <p className="text-lg text-muted-foreground">{"Precision crafted for the modern athlete"}</p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Main Image */}
          <motion.div
            key={selectedImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative aspect-square mb-8 bg-muted/30 rounded-2xl overflow-hidden"
          >
            <img
              src={images[selectedImage].src || "/placeholder.svg"}
              alt={images[selectedImage].alt}
              className="w-full h-full object-contain p-8"
            />
          </motion.div>

          {/* Thumbnail Grid */}
          <div className="grid grid-cols-5 gap-4">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`relative aspect-square bg-muted/30 rounded-lg overflow-hidden border-2 transition-all ${
                  selectedImage === index ? "border-primary" : "border-transparent hover:border-border"
                }`}
              >
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-full object-contain p-2"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
