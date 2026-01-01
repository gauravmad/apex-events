import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/Hero/Hero";
import Services from "@/components/Services/Services";
import WhyUs from "@/components/WhyUs/WhyUs";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import Team from "@/components/Team/Team";
import Testimonials from "@/components/Testimonials/Testimonials";
import CTA from "@/components/CTA/CTA";
import FAQ from "@/components/FAQ/FAQ";
import Contact from "@/components/Contact/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Services />
      <WhyUs />
      <HowItWorks />
      <Team />
      <Testimonials />
      {/* <CTA /> */}
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
