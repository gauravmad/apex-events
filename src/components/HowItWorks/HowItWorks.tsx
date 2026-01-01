"use client";

import { motion } from "framer-motion";
import { MessageSquare, Users, CheckCircle, PartyPopper, ArrowRight } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: MessageSquare,
    title: "Tell Us Your Event Details",
    description: "Share your event type, location, date, and specific requirements with us.",
    details: ["Event type & theme", "Venue location", "Date & duration", "Special requirements"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    step: "02",
    icon: Users,
    title: "Choose Your Team",
    description: "Select from our pool of trained staff — boys, girls, coordinators, or full team.",
    details: ["Male/Female staff", "Coordinators", "Helpers & ushers", "Full event team"],
    color: "from-golden-dark to-golden",
  },
  {
    step: "03",
    icon: CheckCircle,
    title: "Confirm & Relax",
    description: "Finalize the booking and let our team handle everything at your venue.",
    details: ["Instant confirmation", "Staff assignment", "Briefing session", "On-site delivery"],
    color: "from-green-500 to-emerald-500",
  },
  {
    step: "04",
    icon: PartyPopper,
    title: "Enjoy Your Event",
    description: "Our professional team ensures your event runs seamlessly from start to finish.",
    details: ["Professional service", "Real-time support", "Quality assurance", "Event success"],
    color: "from-purple-500 to-pink-500",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden bg-card/30">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-golden/5 blur-[200px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-golden/10 border border-golden/20 text-golden text-sm font-medium mb-6">
            Simple Process
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How{" "}
            <span className="gradient-text-golden">It Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Booking professional event staff has never been easier. 
            Just four simple steps to a successful event.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-golden/30 to-transparent" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                {/* Step Card */}
                <motion.div
                  whileHover={{ y: -10 }}
                  className="group h-full"
                >
                  {/* Step Number */}
                  <div className="relative flex justify-center mb-8">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-20 h-20 rounded-2xl bg-linear-to-br from-golden/20 to-golden/10 border-2 border-golden/30 flex items-center justify-center relative z-10 group-hover:border-golden transition-colors"
                    >
                      <step.icon className="w-8 h-8 text-golden" />
                    </motion.div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-lg bg-golden flex items-center justify-center text-sm font-bold text-black">
                      {step.step}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center p-6 rounded-2xl bg-card border border-border group-hover:border-golden/30 transition-all h-full">
                    <h3 className="text-xl font-bold mb-3 text-golden">{step.title}</h3>
                    <p className="text-muted-foreground mb-6">{step.description}</p>
                    
                    {/* Details */}
                    <ul className="space-y-2">
                      {step.details.map((detail) => (
                        <li key={detail} className="flex items-center justify-center gap-2 text-sm text-foreground/70">
                          <div className="w-1.5 h-1.5 rounded-full bg-golden" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>

                {/* Arrow - Show between steps on desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-24 -right-4 transform translate-x-1/2 z-20">
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="text-golden"
                    >
                      <ArrowRight className="w-6 h-6" />
                    </motion.div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-golden text-black font-semibold rounded-full hover:bg-golden-light transition-all shadow-lg shadow-golden/20"
          >
            Start Your Booking
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

