"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { motion } from "framer-motion"

const faqs = [
  {
    question: "How long does the bottle keep drinks cold or hot?",
    answer:
      "The ZenFit Bottle uses advanced vacuum insulation technology to keep drinks cold for up to 24 hours and hot for up to 12 hours. Actual performance may vary based on environmental conditions and initial temperature.",
  },
  {
    question: "Is the bottle dishwasher safe?",
    answer:
      "Yes! The ZenFit Bottle is dishwasher safe. We recommend placing it on the top rack for best results. The lid components are also dishwasher safe.",
  },
  {
    question: "What is the bottle capacity?",
    answer:
      "The ZenFit Bottle has a 32oz (950ml) capacity, perfect for staying hydrated throughout your workout or daily activities without constant refills.",
  },
  {
    question: "Does it fit in standard cup holders?",
    answer:
      "Yes, the ZenFit Bottle is designed with a standard diameter base that fits most car cup holders, gym equipment holders, and backpack pockets.",
  },
  {
    question: "What materials is the bottle made from?",
    answer:
      "The bottle is made from premium 18/8 food-grade stainless steel that's BPA-free, toxin-free, and 100% safe for daily use. The exterior has a durable powder-coated finish.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We offer a 30-day money-back guarantee. If you're not completely satisfied with your ZenFit Bottle, return it within 30 days for a full refund. We also provide a lifetime warranty against manufacturing defects.",
  },
]

export function FAQSection() {
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
          <h2 className="font-serif text-4xl md:text-5xl mb-4 text-balance">{"Frequently Asked Questions"}</h2>
          <p className="text-lg text-muted-foreground">{"Everything you need to know about ZenFit Bottle"}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
