"use client"

import { Droplet, Thermometer, Shield, Zap, Lock, Leaf } from "lucide-react"
import { motion } from "framer-motion"

const features = [
  {
    icon: Thermometer,
    title: "Temperature Control",
    description: "Keeps drinks cold for 24hrs or hot for 12hrs",
  },
  {
    icon: Droplet,
    title: "Leak-Proof Design",
    description: "Advanced seal technology prevents spills",
  },
  {
    icon: Shield,
    title: "BPA-Free Materials",
    description: "100% food-grade stainless steel",
  },
  {
    icon: Zap,
    title: "Quick Access Lid",
    description: "One-handed operation for active lifestyles",
  },
  {
    icon: Lock,
    title: "Secure Lock",
    description: "Safety lock prevents accidental opening",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "Reusable and sustainable alternative",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl mb-4 text-balance">{"Premium Features"}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {"Engineered for performance, designed for life"}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card p-8 rounded-lg border border-border hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
