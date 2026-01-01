"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight, MapPin } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Bride",
    location: "Mumbai",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop",
    content: "Apex Events made our wedding absolutely seamless! The staff were incredibly professional, well-trained, and handled every guest with such care. I couldn't have asked for better service.",
    rating: 5,
    event: "Wedding Reception",
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    role: "Event Manager",
    location: "Delhi",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop",
    content: "We've partnered with Apex Events for multiple corporate conferences. Their coordinators are sharp, punctual, and always go the extra mile. Highly recommend for any corporate event.",
    rating: 5,
    event: "Tech Conference",
  },
  {
    id: 3,
    name: "Anita Desai",
    role: "Party Host",
    location: "Bangalore",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770&auto=format&fit=crop",
    content: "My daughter's birthday party was a huge success thanks to Apex Events. The staff were energetic, friendly, and kept everything running smoothly. Will definitely book again!",
    rating: 5,
    event: "Birthday Party",
  },
  {
    id: 4,
    name: "Vikram Malhotra",
    role: "CEO",
    location: "Pune",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1770&auto=format&fit=crop",
    content: "Exceptional service! Apex Events provided top-notch staff for our product launch. Professional attire, great communication skills, and they truly understood our brand vision.",
    rating: 5,
    event: "Product Launch",
  },
  {
    id: 5,
    name: "Meera Patel",
    role: "Wedding Planner",
    location: "Ahmedabad",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop",
    content: "As a wedding planner, I've worked with many staffing agencies. Apex Events stands out for their reliability and the quality of their staff. They're now my go-to partner.",
    rating: 5,
    event: "Multiple Weddings",
  },
];

const portfolioImages = [
  {
    src: "/team.jpeg",
    title: "Circus Maximus Stadium Tour",
    location: "Delhi",
  },
  {
    src: "/img67.jpeg",
    title: "Corporate Conference",
    location: "Mumbai",
  },
  {
    src: "/img3.jpeg",
    title: "Kalaari Capital Event",
    location: "Lucknow",
  },
  {
    src: "/events.jpeg",
    title: "Event Setup & Management",
    location: "Delhi",
  },
  {
    src: "/img6.jpeg",
    title: "Fashion Exhibition",
    location: "Surat",
  },
  {
    src: "/img2.jpeg",
    title: "Corporate Staff",
    location: "Mumbai",
  },
  {
    src: "/img5.jpeg",
    title: "Event Anchoring",
    location: "Lucknow",
  },
  {
    src: "/img.jpeg",
    title: "Professional Coordinator",
    location: "Delhi",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [autoPlay]);

  const handlePrev = () => {
    setAutoPlay(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setAutoPlay(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-b from-card/30 via-background to-card/30" />

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
            Client Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Trusted by{" "}
            <span className="gradient-text-golden">Event Organizers</span>{" "}
            Across India
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our clients have to say 
            about their experience with Apex Events.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="mb-20">
          <div className="relative max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-card rounded-3xl p-8 md:p-12 border border-border relative"
              >
                {/* Quote Icon */}
                <div className="absolute top-8 right-8 w-16 h-16 rounded-full bg-golden/10 flex items-center justify-center">
                  <Quote className="w-8 h-8 text-golden" />
                </div>

                <div className="flex flex-col md:flex-row gap-8 items-start">
                  {/* Author Image */}
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-golden/30">
                      <img
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    {/* Rating */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-golden text-golden" />
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-lg md:text-xl text-foreground/90 mb-6 leading-relaxed">
                      &ldquo;{testimonials[currentIndex].content}&rdquo;
                    </p>

                    {/* Author Info */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                      <div>
                        <h4 className="font-semibold text-golden">{testimonials[currentIndex].name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonials[currentIndex].role}</p>
                      </div>
                      <div className="hidden sm:block w-px h-8 bg-border" />
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {testimonials[currentIndex].location}
                        </span>
                        <span className="px-2 py-1 rounded-full bg-golden/10 text-golden text-xs">
                          {testimonials[currentIndex].event}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-8">
              <motion.button
                onClick={handlePrev}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 rounded-full bg-secondary border border-border flex items-center justify-center hover:border-golden/30 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>
              
              {/* Dots */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setAutoPlay(false);
                      setCurrentIndex(index);
                    }}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex ? "w-8 bg-golden" : "bg-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>

              <motion.button
                onClick={handleNext}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 rounded-full bg-secondary border border-border flex items-center justify-center hover:border-golden/30 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Portfolio Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            Our <span className="text-golden">Event Portfolio</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-fr">
            {portfolioImages.map((image, index) => (
              <motion.div
                key={image.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer"
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <h4 className="font-semibold text-white text-sm">{image.title}</h4>
                  <p className="text-xs text-white/70 flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {image.location}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

