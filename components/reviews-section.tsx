"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

const reviews = [
  {
    name: "Sarah Martinez",
    avatar: "/professional-woman-smiling-headshot.png",
    rating: 5,
    text: "Best water bottle I've ever owned! Keeps my water ice cold through my entire workout. The quality is exceptional.",
    date: "Verified Purchase",
  },
  {
    name: "James Chen",
    avatar: "/professional-man-smiling-headshot.png",
    rating: 5,
    text: "Love the sleek design and the leak-proof cap. Takes it everywhere - gym, office, hiking trips. Worth every penny!",
    date: "Verified Purchase",
  },
  {
    name: "Emily Rodriguez",
    avatar: "/professional-woman-athlete-headshot.jpg",
    rating: 5,
    text: "As a marathon runner, hydration is crucial. This bottle keeps up with my training schedule perfectly.",
    date: "Verified Purchase",
  },
  {
    name: "Michael Thompson",
    avatar: "/professional-man-fitness-headshot.jpg",
    rating: 5,
    text: "The temperature retention is incredible. My coffee stays hot for hours during my morning commute.",
    date: "Verified Purchase",
  },
  {
    name: "Lisa Park",
    avatar: "/professional-woman-yoga-headshot.jpg",
    rating: 5,
    text: "Elegant, functional, and eco-friendly. Everything I wanted in a water bottle and more!",
    date: "Verified Purchase",
  },
  {
    name: "David Johnson",
    avatar: "/professional-man-outdoor-headshot.jpg",
    rating: 5,
    text: "Durable construction and perfect size. The one-handed operation is a game changer during workouts.",
    date: "Verified Purchase",
  },
]

export function ReviewsSection() {
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
          <div className="flex items-center justify-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-foreground" />
            ))}
          </div>
          <h2 className="font-serif text-4xl md:text-5xl mb-4 text-balance">{"Loved by Athletes Everywhere"}</h2>
          <p className="text-lg text-muted-foreground">{"Over 10,000 five-star reviews from satisfied customers"}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card p-6 rounded-lg border border-border"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={review.avatar || "/placeholder.svg"}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold">{review.name}</div>
                  <div className="text-sm text-muted-foreground">{review.date}</div>
                </div>
              </div>

              <div className="flex gap-1 mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-foreground" />
                ))}
              </div>

              <p className="text-muted-foreground leading-relaxed">{review.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
