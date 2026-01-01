"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Users, MapPin, Calendar } from "lucide-react";

const stats = [
  { number: "500+", label: "Events Served", icon: Calendar },
  { number: "50+", label: "Cities Covered", icon: MapPin },
  { number: "2000+", label: "Trained Staff", icon: Users },
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/img67.jpeg')",
          }}
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/80 to-black/60" />
        <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2 }}
          className="absolute top-20 right-20 w-96 h-96 rounded-full bg-golden blur-[120px]"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute bottom-20 left-20 w-64 h-64 rounded-full bg-golden blur-[100px]"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-golden/10 border border-golden/20 text-golden text-sm mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-golden animate-pulse" />
              Trusted by 500+ Events Across India
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            >
              Seamless{" "}
              <span className="gradient-text-golden">Event Staffing</span>{" "}
              Across India
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-muted-foreground mb-10 max-w-xl"
            >
              Professional manpower for corporate events, weddings, and private parties — 
              wherever your celebration takes you.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-16"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-golden text-black font-semibold rounded-full hover:bg-golden-light transition-all shadow-lg shadow-golden/20"
              >
                Book Staff Now
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-foreground font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-all"
              >
                <Play className="w-5 h-5" />
                See Our Work
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-3 gap-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="text-center md:text-left"
                >
                  <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                    <stat.icon className="w-5 h-5 text-golden" />
                    <span className="text-3xl md:text-4xl font-bold text-golden">{stat.number}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Floating Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block relative"
          >
            <div className="relative w-full h-[600px]">
              {/* Main Image Card */}
              <motion.div
                initial={{ y: 20 }}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-0 w-80 h-96 rounded-2xl overflow-hidden border-2 border-golden/30 shadow-2xl shadow-black/50"
              >
                <img
                  src="/img6.jpeg"
                  alt="Wedding Event Staff"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-xs text-golden uppercase tracking-wider">Exhibition Events</span>
                  <h3 className="text-lg font-semibold text-white">Premium Event Staff</h3>
                </div>
              </motion.div>

              {/* Secondary Image Card */}
              <motion.div
                initial={{ y: 20 }}
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-10 left-0 w-72 h-80 rounded-2xl overflow-hidden border-2 border-golden/20 shadow-2xl shadow-black/50"
              >
                <img
                  src="/img3.jpeg"
                  alt="Corporate Event Staff"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-xs text-golden uppercase tracking-wider">Corporate Events</span>
                  <h3 className="text-lg font-semibold text-white">Professional Coordinators</h3>
                </div>
              </motion.div>

              {/* Floating Badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1, rotate: [0, 5, -5, 0] }}
                transition={{ 
                  scale: { duration: 0.5, delay: 0.8 },
                  rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute top-1/3 left-10 bg-card/90 backdrop-blur-xl p-4 rounded-2xl border border-golden/20 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-golden/20 flex items-center justify-center">
                    <Users className="w-6 h-6 text-golden" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-golden">2000+</p>
                    <p className="text-xs text-muted-foreground">Trained Staff</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-golden/50 flex justify-center pt-2"
        >
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5], y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-golden"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

