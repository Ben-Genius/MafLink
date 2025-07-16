"use client";
import { motion } from "motion/react";
import {
  Heart,
  Shield,
  Clock,
  Users,
  Star,
  Phone,
  Calendar,
  MapPin,
} from "lucide-react";
import FAQPage from "@/pages/home/faq";
import TestimonialsPage from "@/pages/home/testimonial";
import ContactPage from "@/pages/home/contact";
import Navbar from "@/pages/home/navBar";
import HeroSectionOne from "@/pages/home/heroSectionOne";
import AppleCardsCarouselDemo from "@/pages/home/heroContent";

export default function Home() {
  return (
    <>
      <Navbar />
      {/* 1. Hero Section - Keep your existing HeroSectionOne */}
      <HeroSectionOne />

      {/* 2. Services/Care Packages - Move this up from AppleCardsCarouselDemo */}
      <section className="">
        <AppleCardsCarouselDemo />
      </section>

      {/* 4. Testimonials */}
      <TestimonialsPage />

      {/* 5. FAQ */}
      <FAQPage />

      {/* 6. Contact */}
      <ContactPage />
    </>
  );
}
