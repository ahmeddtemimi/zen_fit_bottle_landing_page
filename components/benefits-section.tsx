"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function BenefitsSection() {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-muted rounded-2xl overflow-hidden">
              <img
                src="/athletic-person-drinking-from-black-water-bottle-d.jpg"
                alt="Person using ZenFit Bottle during workout"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="font-serif text-4xl md:text-5xl mb-6 text-balance">{"Your Perfect Workout Companion"}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {
                  "Whether you're crushing your gym session, hiking mountain trails, or simply staying hydrated throughout the day, the ZenFit Bottle adapts to your lifestyle."
                }
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary-foreground font-bold text-sm">{"1"}</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{"All-Day Temperature Retention"}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {"Advanced vacuum insulation technology maintains your drink temperature from morning to night."}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary-foreground font-bold text-sm">{"2"}</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{"Built to Last"}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {"Military-grade stainless steel construction withstands drops, dents, and daily wear."}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary-foreground font-bold text-sm">{"3"}</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{"Easy to Clean"}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {"Wide mouth opening and dishwasher-safe components make cleaning effortless."}
                  </p>
                </div>
              </div>
            </div>

            <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground">
              {"Shop Now"}
              <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
