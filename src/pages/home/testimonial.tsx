"use client";

import {
  IconArrowLeft,
  IconArrowRight,
  IconStar,
  IconHeart,
  IconShield,
  IconUsers,
} from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
  rating: number;
  service: string;
};

const AnimatedTestimonials = ({
  testimonials,
  autoplay = true,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 6000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 font-sans antialiased">
      <div className="relative grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-20">
        {/* Image Section */}
        <div className="relative">
          <div className="relative h-96 w-full lg:h-[500px]">
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-blue-100 to-green-100 rounded-full blur-xl opacity-70"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-green-100 to-blue-100 rounded-full blur-xl opacity-70"></div>

            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index)
                      ? 40
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{
                    duration: 0.6,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <div className="relative h-full w-full">
                    <img
                      src={testimonial.src}
                      alt={testimonial.name}
                      width={500}
                      height={500}
                      draggable={false}
                      className="h-full w-full rounded-3xl object-cover object-center shadow-2xl border-4 border-white dark:border-slate-700"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-3xl"></div>

                    {/* Service badge */}
                    <div className="absolute top-4 right-4 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-slate-700 dark:text-slate-300">
                      {testimonial.service}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col justify-center py-8">
          <motion.div
            key={active}
            initial={{
              y: 30,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -30,
              opacity: 0,
            }}
            transition={{
              duration: 0.4,
              ease: "easeInOut",
            }}
            className="space-y-6"
          >
            {/* Quote Icon */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M6.5 10c.223 0 .437.034.65.065.542.542 1.17 1.074 1.85 1.588v5.297c0 .657-.533 1.19-1.191 1.19H1.191C.533 18.14 0 17.607 0 16.95V9.358c0-4.636 2.175-9.053 6.5-9.053v2.695c-2.142 0-3.5 1.78-3.5 4.308v2.692z" />
                  <path d="M18.5 10c.223 0 .437.034.65.065.542.542 1.17 1.074 1.85 1.588v5.297c0 .657-.533 1.19-1.191 1.19H13.191c-.658 0-1.191-.533-1.191-1.19V9.358c0-4.636 2.175-9.053 6.5-9.053v2.695c-2.142 0-3.5 1.78-3.5 4.308v2.692z" />
                </svg>
              </div>
              <div className="flex">
                {[...Array(testimonials[active].rating)].map((_, i) => (
                  <IconStar
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
            </div>

            {/* Quote */}
            <motion.blockquote className="text-xl lg:text-2xl leading-relaxed text-slate-700 dark:text-slate-200 font-medium">
              {testimonials[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.blockquote>

            {/* Author */}
            <div className="space-y-2">
              <h4 className="text-2xl font-bold text-slate-800 dark:text-white">
                {testimonials[active].name}
              </h4>
              <p className="text-slate-600 dark:text-slate-400 flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 2C6.13 2 3 5.13 3 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                {testimonials[active].designation}
              </p>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-12">
            <div className="flex gap-3">
              <button
                onClick={handlePrev}
                className="group/button flex h-12 w-12 items-center justify-center rounded-full bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700"
              >
                <IconArrowLeft className="h-5 w-5 text-slate-600 dark:text-slate-400 transition-transform duration-300 group-hover/button:-translate-x-1" />
              </button>
              <button
                onClick={handleNext}
                className="group/button flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-green-500 shadow-lg hover:shadow-xl transition-all duration-300 text-white"
              >
                <IconArrowRight className="h-5 w-5 transition-transform duration-300 group-hover/button:translate-x-1" />
              </button>
            </div>

            {/* Progress indicators */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActive(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === active
                      ? "bg-gradient-to-r from-blue-500 to-green-500 w-8"
                      : "bg-slate-300 dark:bg-slate-600 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function TestimonialsPage() {
  const testimonials = [
    {
      quote:
        "MAFLink took excellent care of my mother after her surgery. The nurses were professional, respectful, and truly compassionate. It felt like having family around.",
      name: "Esi O.",
      designation: "Accra, Ghana",
      src: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2400&fit=crop&ixlib=rb-4.0.3",
      rating: 5,
      service: "Post-Surgery Care",
    },
    {
      quote:
        "Being in the UK, I was worried about my father's health in Ghana. MAFLink's services gave me peace of mind knowing he's receiving top-notch care right at home.",
      name: "Kwame A.",
      designation: "London, UK",
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2400&fit=crop&ixlib=rb-4.0.3",
      rating: 5,
      service: "Remote Family Care",
    },
    {
      quote:
        "The physiotherapy support from MAFLink helped my grandmother recover faster than we expected. Their team is skilled, gentle, and very attentive.",
      name: "Abena S.",
      designation: "Kumasi, Ghana",
      src: "https://images.unsplash.com/photo-1494790108755-2616c9c0d8d0?q=80&w=2400&fit=crop&ixlib=rb-4.0.3",
      rating: 5,
      service: "Physiotherapy",
    },
    {
      quote:
        "As a new mother, I was nervous managing everything after my c-section. MAFLink's nurses guided me through recovery and newborn care with so much patience.",
      name: "Afia M.",
      designation: "Takoradi, Ghana",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2400&fit=crop&ixlib=rb-4.0.3",
      rating: 5,
      service: "Maternal Care",
    },
    {
      quote:
        "My uncle with chronic illness receives excellent care from MAFLink. Their staff is always on time, polite, and highly professional. I'd recommend them anytime.",
      name: "Yaw D.",
      designation: "Tema, Ghana",
      src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2400&fit=crop&ixlib=rb-4.0.3",
      rating: 5,
      service: "Chronic Care",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Hero Section */}
      <div className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-green-600/10 dark:from-blue-600/5 dark:to-green-600/5"></div>
        <div className="relative container mx-auto px-4 text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-6">
              Trusted by Families
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              Real stories from families who've experienced the compassionate
              care and professional excellence of MAFLink
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <IconUsers className="w-8 h-8 text-blue-500" />
                </div>
                <div className="text-3xl font-bold text-slate-800 dark:text-white">
                  500+
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  Families Served
                </div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <IconStar className="w-8 h-8 text-yellow-500" />
                </div>
                <div className="text-3xl font-bold text-slate-800 dark:text-white">
                  4.9
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  Average Rating
                </div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <IconHeart className="w-8 h-8 text-red-500" />
                </div>
                <div className="text-3xl font-bold text-slate-800 dark:text-white">
                  98%
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  Satisfaction Rate
                </div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <IconShield className="w-8 h-8 text-green-500" />
                </div>
                <div className="text-3xl font-bold text-slate-800 dark:text-white">
                  24/7
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  Support Available
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-7xl mx-auto"
          >
            <AnimatedTestimonials testimonials={testimonials} />
          </motion.div>
        </div>
      </div>

      {/* Call to Action */}
   
    </main>
  );
}
