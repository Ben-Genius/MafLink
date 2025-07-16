"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  HelpCircle,
  Shield,
  Clock,
  MapPin,
  Phone,
  Users,
  Heart,
  ChevronDown,
  CheckCircle,
  Star,
} from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
  icon: React.ElementType;
}
const faqs = [
  {
    question: "How do I book nursing care with MAFLink?",
    answer:
      "Simply visit our website, choose your service package, and complete the booking form. Our team will contact you to confirm details and schedule your care within 24 hours.",
    category: "booking",
    icon: Phone,
  },
  {
    question: "Are your nurses licensed?",
    answer:
      "Yes! All MAFLink nurses hold valid licenses from the Nursing and Midwifery Council of Ghana and undergo thorough background checks, continuous training, and performance evaluations.",
    category: "certification",
    icon: Shield,
  },
  {
    question: "Can I arrange care from abroad for my family in Ghana?",
    answer:
      "Absolutely. Many Ghanaians in the diaspora use our services for family back home. We offer multilingual support, international payment options, and regular family updates.",
    category: "international",
    icon: MapPin,
  },
  {
    question: "What types of care do you provide?",
    answer:
      "We offer post-surgical care, elderly care, chronic illness management, medication administration, wound care, physical therapy support, and 24/7 live-in care services.",
    category: "services",
    icon: Heart,
  },
  {
    question: "How quickly can care begin?",
    answer:
      "Emergency care can begin within 2-4 hours. Regular care typically starts within 24-48 hours after booking, depending on your location and specific needs.",
    category: "timing",
    icon: Clock,
  },
  {
    question: "Do you serve areas outside Accra?",
    answer:
      "Yes! We serve Greater Accra, Ashanti Region (Kumasi), Western Region (Takoradi), and are expanding to other regions. Contact us for availability in your area.",
    category: "coverage",
    icon: MapPin,
  },
];

const categories = [
  { id: "all", label: "All Questions", icon: HelpCircle },
  { id: "booking", label: "Booking", icon: Phone },
  { id: "certification", label: "Certification", icon: Shield },
  { id: "services", label: "Services", icon: Heart },
  { id: "timing", label: "Timing", icon: Clock },
  { id: "coverage", label: "Coverage", icon: MapPin },
];

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory =
      selectedCategory === "all" || faq.category === selectedCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Decorative elements */}
      <div className="absolute inset-y-0 left-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-green-500 to-transparent" />
      </div>

      <div className="relative px-4 py-10 md:py-20">
        {/* Trust indicator */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <div className="flex items-center gap-4 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg dark:bg-slate-800/80">
            <div className="flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                Quick Answers
              </span>
            </div>
            <div className="w-px h-6 bg-slate-300 dark:bg-slate-600" />
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                24/7 Support
              </span>
            </div>
          </div>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-20 mx-auto max-w-4xl text-center text-3xl font-bold text-slate-800 md:text-5xl lg:text-6xl dark:text-slate-200 mb-6"
        >
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
            Frequently Asked
          </span>
          <br />
          <span className="text-slate-800 dark:text-slate-200">Questions</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="relative z-10 mx-auto max-w-2xl text-center text-lg text-slate-600 dark:text-slate-400 mb-12"
        >
          Get instant answers to common questions about our nursing care
          services
        </motion.p>

        <div className="max-w-6xl mx-auto">
          {/* Search bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mb-8"
          >
            <div className="relative max-w-md mx-auto">
              <HelpCircle className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm text-slate-800 dark:text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </motion.div>

          {/* Category filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-blue-600 text-white shadow-lg transform -translate-y-0.5"
                    : "bg-white/60 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 hover:bg-white/80 dark:hover:bg-slate-800/80"
                } backdrop-blur-sm`}
              >
                <category.icon className="w-4 h-4" />
                <span className="text-sm font-medium">{category.label}</span>
              </button>
            ))}
          </motion.div>

          {/* FAQ Items */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1 max-w-4xl mx-auto">
            {filteredFaqs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <FAQItem
                        question={item.question}
                        answer={item.answer}
                        icon={item.icon} category={""}                />
              </motion.div>
            ))}
          </div>

          {/* No results message */}
          {filteredFaqs.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <HelpCircle className="w-12 h-12 text-slate-400 mx-auto mb-4" />
              <p className="text-slate-600 dark:text-slate-400">
                No questions found. Try adjusting your search or category
                filter.
              </p>
            </motion.div>
          )}

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="mt-16 text-center"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl dark:bg-slate-800/80 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4">
                Still have questions?
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                Our care coordinators are available 24/7 to help you find the
                perfect nursing solution
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg">
                  <Phone className="w-4 h-4" />
                  Call Now: +233 20 123 4567
                </button>
                <button className="flex items-center gap-2 px-6 py-3 border border-blue-300 bg-white/80 backdrop-blur-sm text-blue-700 font-medium rounded-lg hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg dark:border-blue-600 dark:bg-slate-800/80 dark:text-blue-400 dark:hover:bg-slate-700/80">
                  <Users className="w-4 h-4" />
                  Live Chat Support
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function FAQItem({ question, answer, icon: Icon }: FAQItem) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200 dark:border-slate-700 dark:bg-slate-800/80 shadow-lg hover:shadow-xl transition-all duration-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-white/60 dark:hover:bg-slate-800/60 transition-colors duration-200 rounded-2xl"
      >
        <div className="flex items-center gap-4">
          <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
            <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          </div>
          <span className="text-lg font-semibold text-slate-800 dark:text-slate-200 pr-4">
            {question}
          </span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-slate-500" />
        </motion.div>
      </button>

      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-6 pt-2">
          <div className="pl-12">
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              {answer}
            </p>
            <div className="flex items-center gap-2 mt-3 text-sm text-green-600 dark:text-green-400">
              <CheckCircle className="w-4 h-4" />
              <span>Verified Answer</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
