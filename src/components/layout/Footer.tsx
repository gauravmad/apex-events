"use client";

import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Twitter, Phone, Mail, MapPin, ArrowUp } from "lucide-react";
import Link from "next/link";

const footerLinks = {
  services: [
    { name: "Corporate Events", href: "#services" },
    { name: "Wedding Staffing", href: "#services" },
    { name: "Private Parties", href: "#services" },
    { name: "Product Launches", href: "#services" },
  ],
  company: [
    { name: "About Us", href: "#why-us" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
  ],
  support: [
    { name: "Contact Us", href: "#contact" },
    { name: "Get a Quote", href: "#contact" },
    { name: "Terms of Service", href: "#" },
    { name: "Privacy Policy", href: "#" },
  ],
};

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0a0a0f] border-t border-border">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg gradient-golden flex items-center justify-center">
                <span className="text-xl font-bold text-black">AE</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-golden">Apex Events</span>
                <span className="text-xs text-muted-foreground tracking-wider uppercase">Professional Staffing</span>
              </div>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Professional event staffing solutions across India. We provide trained manpower for corporate events, weddings, and private celebrations.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-golden hover:bg-secondary/80 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-golden font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-golden font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-golden font-semibold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+918797109335" className="flex items-start gap-3 text-muted-foreground hover:text-foreground transition-colors">
                  <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>+91 87971 09335</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@apexevent.in" className="flex items-start gap-3 text-muted-foreground hover:text-foreground transition-colors">
                  <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>info@apexevent.in</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>Mumbai, Maharashtra<br />Pan-India Services</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm text-center md:text-left">
            © {new Date().getFullYear()} Apex Events. All rights reserved. Professional Event Staff Across India.
          </p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 rounded-full bg-golden text-black flex items-center justify-center hover:bg-golden-light transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}

