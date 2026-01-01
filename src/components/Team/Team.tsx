"use client";

import { motion } from "framer-motion";
import { Star, Users } from "lucide-react";

const teamMembers = [
  {
    name: "Professional Coordinator",
    role: "Event Management",
    image: "/img.jpeg",
    specialty: "Corporate Events",
  },
  {
    name: "Corporate Staff",
    role: "Reception & Ushering",
    image: "/img2.jpeg",
    specialty: "VIP Events",
  },
  {
    name: "Event Host",
    role: "Anchoring & Hosting",
    image: "/img5.jpeg",
    specialty: "Live Events",
  },
  {
    name: "Brand Ambassador",
    role: "Exhibition Staff",
    image: "/img6.jpeg",
    specialty: "Trade Shows",
  },
  {
    name: "Event Coordinator",
    role: "Corporate Events",
    image: "/img3.jpeg",
    specialty: "Conferences",
  },
  {
    name: "Professional Staff",
    role: "Event Support",
    image: "/img4.jpeg",
    specialty: "All Events",
  },
];

export default function Team() {
  return (
    <section className="py-24 relative overflow-hidden bg-card/30">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-golden/5 blur-[200px]" />
      </div>

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
            Our Professionals
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Meet Our{" "}
            <span className="gradient-text-golden">Expert Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our trained professionals are the backbone of every successful event. 
            Here&apos;s a glimpse of the talent we bring to your celebrations.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name + index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                {/* Image Container */}
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border-2 border-border group-hover:border-golden/50 transition-colors">
                  <img
                    src={member.image}
                    alt={member.role}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="inline-block px-2 py-1 rounded-full bg-golden/20 text-golden text-xs mb-2">
                      {member.specialty}
                    </span>
                    <h4 className="font-semibold text-white text-sm">{member.role}</h4>
                  </div>

                  {/* Hover Badge */}
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-8 h-8 rounded-full bg-golden flex items-center justify-center">
                      <Star className="w-4 h-4 text-black fill-black" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 p-8 rounded-3xl bg-linear-to-r from-golden/10 via-golden/5 to-golden/10 border border-golden/20"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-golden/20 flex items-center justify-center">
                <Users className="w-8 h-8 text-golden" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-golden">2000+ Trained Staff</h3>
                <p className="text-muted-foreground">Ready to serve at your next event</p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-center">
              <div>
                <p className="text-3xl font-bold text-foreground">500+</p>
                <p className="text-sm text-muted-foreground">Male Staff</p>
              </div>
              <div className="w-px h-12 bg-border hidden md:block" />
              <div>
                <p className="text-3xl font-bold text-foreground">300+</p>
                <p className="text-sm text-muted-foreground">Female Staff</p>
              </div>
              <div className="w-px h-12 bg-border hidden md:block" />
              <div>
                <p className="text-3xl font-bold text-foreground">100+</p>
                <p className="text-sm text-muted-foreground">Coordinators</p>
              </div>
              <div className="w-px h-12 bg-border hidden md:block" />
              <div>
                <p className="text-3xl font-bold text-foreground">50+</p>
                <p className="text-sm text-muted-foreground">Anchors/Hosts</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

