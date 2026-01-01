"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "How far in advance should I book event staff?",
    answer: "We recommend booking at least 2-3 weeks in advance for regular events. For large weddings or corporate events during peak season (October-February), booking 4-6 weeks ahead ensures availability of your preferred staff. However, we also handle last-minute requests based on availability.",
  },
  {
    question: "Do you provide uniforms for the staff?",
    answer: "Yes, all our staff come in professional uniforms appropriate for your event type. For weddings, we provide elegant formal attire. For corporate events, we provide business formal. If you have specific uniform requirements or color themes, we can accommodate custom uniforms at an additional cost.",
  },
  {
    question: "Can we choose the number of boys and girls for our event?",
    answer: "Absolutely! You have complete flexibility in choosing the gender ratio for your event staff. Simply let us know your requirements during booking, and we'll ensure the perfect team composition for your event.",
  },
  {
    question: "Are your staff trained for VIP and high-profile events?",
    answer: "Yes, we have a specialized team trained for VIP events, celebrity weddings, and high-profile corporate gatherings. They undergo additional training in discretion, protocol, and handling sensitive situations. Please mention your VIP requirements during booking.",
  },
  {
    question: "What is your service coverage area?",
    answer: "We provide event staffing services across all major cities in India, including Mumbai, Delhi, Bangalore, Chennai, Hyderabad, Kolkata, Pune, Ahmedabad, and many more. We also serve tier-2 cities and destination wedding locations.",
  },
  {
    question: "What happens if a staff member doesn't show up?",
    answer: "We maintain a backup pool for every event. In the rare case of a no-show, we immediately dispatch a replacement. Our commitment is zero disruption to your event. We've maintained a 99.5% attendance rate across all our events.",
  },
  {
    question: "Can I meet or interview the staff before the event?",
    answer: "Yes, for large events (20+ staff), we offer a pre-event briefing session where you can meet the team. For premium packages, we can arrange individual staff meetings. This helps ensure everyone understands your event vision and specific requirements.",
  },
  {
    question: "What are your payment terms?",
    answer: "We require a 30% advance at booking confirmation, with the remaining 70% due 48 hours before the event. We accept bank transfers, UPI, and all major credit/debit cards. For regular clients, we offer flexible monthly billing options.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 relative overflow-hidden bg-card/30">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-golden/5 blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-golden/5 blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-golden/10 border border-golden/20 text-golden text-sm font-medium mb-6">
            Got Questions?
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked{" "}
            <span className="gradient-text-golden">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our event staffing services.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <div
                className={`rounded-2xl border transition-all duration-300 ${
                  openIndex === index
                    ? "bg-card border-golden/30"
                    : "bg-card/50 border-border hover:border-golden/20"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-start gap-4 text-left"
                >
                  <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                    openIndex === index ? "bg-golden/20" : "bg-secondary"
                  }`}>
                    {openIndex === index ? (
                      <Minus className="w-5 h-5 text-golden" />
                    ) : (
                      <Plus className="w-5 h-5 text-muted-foreground" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className={`font-semibold text-lg transition-colors ${
                      openIndex === index ? "text-golden" : "text-foreground"
                    }`}>
                      {faq.question}
                    </h3>
                  </div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pl-20">
                        <p className="text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Still Have Questions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-secondary/50 border border-border">
            <HelpCircle className="w-6 h-6 text-golden" />
            <span className="text-muted-foreground">
              Still have questions?{" "}
              <a href="#contact" className="text-golden hover:underline font-medium">
                Contact us
              </a>{" "}
              and we&apos;ll be happy to help.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

