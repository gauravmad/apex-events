"use client";

import { motion } from "framer-motion";
import { Award, Clock, MapPin, Sparkles, Users, CheckCircle, ShieldCheck, Headphones } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Experienced Professionals",
    description: "Our staff is trained in hospitality standards, ensuring premium service at every event.",
    stat: "5+ Years",
    statLabel: "Industry Experience",
  },
  {
    icon: Users,
    title: "Boys & Girls Available",
    description: "Diverse team to meet all your event requirements, from ushers to coordinators.",
    stat: "2000+",
    statLabel: "Staff Members",
  },
  {
    icon: MapPin,
    title: "Nationwide Coverage",
    description: "We serve all major cities across India, bringing our expertise to your doorstep.",
    stat: "50+",
    statLabel: "Cities Covered",
  },
  {
    icon: Sparkles,
    title: "Flexible Packages",
    description: "Customized staffing solutions for events of all sizes, from intimate to grand.",
    stat: "100%",
    statLabel: "Customizable",
  },
  {
    icon: Clock,
    title: "Quick Response",
    description: "Fast turnaround on inquiries and bookings, even for last-minute events.",
    stat: "24hrs",
    statLabel: "Response Time",
  },
  {
    icon: ShieldCheck,
    title: "Verified Staff",
    description: "All our team members undergo background verification and professional training.",
    stat: "100%",
    statLabel: "Verified",
  },
];

const highlights = [
  "No hidden charges",
  "Uniformed staff",
  "Replacement guarantee",
  "24/7 support during events",
  "Post-event feedback",
  "Long-term partnerships",
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed opacity-5"
          style={{
            backgroundImage: "url('/events.jpeg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-golden/10 border border-golden/20 text-golden text-sm font-medium mb-6">
              Why Choose Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Your Event&apos;s Success is{" "}
              <span className="gradient-text-golden">Our Priority</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              With years of experience and thousands of successful events, we understand 
              what it takes to deliver exceptional service that leaves lasting impressions.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-golden flex-shrink-0" />
                  <span className="text-foreground/80">{highlight}</span>
                </motion.div>
              ))}
            </div>

            {/* Support Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-6 rounded-2xl bg-gradient-to-r from-golden/10 to-golden/5 border border-golden/20"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-golden/20 flex items-center justify-center flex-shrink-0">
                  <Headphones className="w-7 h-7 text-golden" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">24/7 Event Support</h4>
                  <p className="text-muted-foreground text-sm">
                    Our dedicated support team is available round the clock during your event, 
                    ensuring everything runs smoothly.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-golden/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-golden/10 flex items-center justify-center mb-4 group-hover:bg-golden/20 transition-colors">
                  <reason.icon className="w-6 h-6 text-golden" />
                </div>
                <h4 className="font-semibold mb-2">{reason.title}</h4>
                <p className="text-sm text-muted-foreground mb-4">{reason.description}</p>
                <div className="pt-4 border-t border-border">
                  <p className="text-2xl font-bold text-golden">{reason.stat}</p>
                  <p className="text-xs text-muted-foreground">{reason.statLabel}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

