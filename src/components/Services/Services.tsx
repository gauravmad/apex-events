"use client";

import { motion } from "framer-motion";
import { Building2, Heart, PartyPopper, Rocket, Users, Shield, Clock, Star } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Corporate Events",
    description: "Event coordinators, reception staff, ushers, and technical support for conferences, seminars, and corporate gatherings.",
    features: ["Event Coordinators", "Reception Staff", "Technical Support", "Ushers"],
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop",
  },
  {
    icon: Heart,
    title: "Wedding Events",
    description: "Complete wedding staffing including waiters, hosts, ushers, security, and setup & teardown support.",
    features: ["Waiters & Servers", "Hosts & Ushers", "Security Personnel", "Setup Team"],
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop",
  },
  {
    icon: PartyPopper,
    title: "Private Parties",
    description: "Birthday parties, anniversaries, and intimate celebrations with professional staff tailored to your needs.",
    features: ["Party Staff", "Bartenders", "Service Crew", "Event Helpers"],
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=2070&auto=format&fit=crop",
  },
  {
    icon: Rocket,
    title: "Product Launches",
    description: "Brand ambassadors, promotional staff, and event coordinators for impactful product launches.",
    features: ["Brand Ambassadors", "Promo Staff", "Coordinators", "Registration Team"],
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=2070&auto=format&fit=crop",
  },
];

const features = [
  {
    icon: Users,
    title: "Boys & Girls Available",
    description: "Diverse team for all event requirements",
  },
  {
    icon: Shield,
    title: "Trained Professionals",
    description: "All staff trained in hospitality standards",
  },
  {
    icon: Clock,
    title: "Flexible Hours",
    description: "Available for events of any duration",
  },
  {
    icon: Star,
    title: "Uniformed Staff",
    description: "Professional appearance guaranteed",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-linear-to-b from-background via-card/30 to-background" />
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-golden/5 blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-golden/5 blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-golden/10 border border-golden/20 text-golden text-sm font-medium mb-6">
            Our Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Professional Staffing for{" "}
            <span className="gradient-text-golden">Every Occasion</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From intimate gatherings to grand celebrations, we provide trained manpower 
            tailored to your event&apos;s unique requirements.
          </p>
        </motion.div>

        {/* Services Grid - 4 Column Hover Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative h-[400px] rounded-2xl overflow-hidden cursor-pointer">
                {/* Background Image */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Dark Overlay - Always visible */}
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-black/20 transition-all duration-500 group-hover:from-black/95 group-hover:via-black/70 group-hover:to-black/50" />
                
                {/* Icon Badge */}
                <div className="absolute top-4 right-4 w-12 h-12 rounded-xl bg-golden/20 backdrop-blur-xl flex items-center justify-center border border-golden/30 transition-all duration-300 group-hover:bg-golden group-hover:border-golden">
                  <service.icon className="w-6 h-6 text-golden transition-colors duration-300 group-hover:text-black" />
                </div>

                {/* Default Content - Title at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transition-all duration-500">
                  <h3 className="text-2xl font-bold text-white mb-2 transition-all duration-300 group-hover:text-golden">
                    {service.title}
                  </h3>
                  
                  {/* Description - Shows on hover */}
                  <div className="overflow-hidden transition-all duration-500 max-h-0 opacity-0 group-hover:max-h-[200px] group-hover:opacity-100">
                    <p className="text-white/80 text-sm mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Features */}
                    <div className="space-y-2">
                      {service.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-2 text-sm text-white/70"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-golden" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Border on hover */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent transition-colors duration-300 group-hover:border-golden/50" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 rounded-2xl bg-secondary/50 border border-border hover:border-golden/30 transition-all"
            >
              <div className="w-14 h-14 rounded-xl bg-golden/10 flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-7 h-7 text-golden" />
              </div>
              <h4 className="font-semibold mb-2">{feature.title}</h4>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
