"use client";

import React from "react";
import nursecare from "@/assets/images/nursecare.jpeg";
import nurse2 from "@/assets/images/nurse2.jpeg";
import homecare from "@/assets/images/homecare.jpeg";
import homecare2 from "@/assets/images/house2.jpeg";
import homecare3 from "@/assets/images/homecare3.jpeg";
import homecare4 from "@/assets/images/homecare4.png";

import { motion } from "motion/react";
import {
  IconClock,
  IconCurrencyDollar,
  IconSparkles,
  IconShield,
  IconHeart,
  IconUsers,
} from "@tabler/icons-react";
import Card from "@/components/ui/card";

// Mock Carousel and Card components since we don't have access to the actual components

const Carousel = ({ items }: { items: React.ReactNode[] }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
    {items}
  </div>
);

const CardContent = ({
  description,
  features,
  duration,
  price,
}: {
  description: string;
  features: string[];
  duration: string;
  price: string;
}) => (
  <div className="space-y-4">
    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
      {description}
    </p>

    <div className="space-y-2">
      <h4 className="text-sm font-semibold text-slate-800 dark:text-white mb-2">
        Key Features:
      </h4>
      <ul className="space-y-1">
        {features.map((feature, idx) => (
          <li
            key={idx}
            className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400"
          >
            <IconSparkles className="w-3 h-3 text-blue-500 mt-0.5 flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>
    </div>

    <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-600">
      <div className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
        <IconClock className="w-3 h-3" />
        {duration}
      </div>
      <div className="flex items-center gap-1 text-sm font-semibold text-blue-600 dark:text-blue-400">
        {price}
      </div>
    </div>
  </div>
);

const AppleCardsCarouselDemo = () => {
  // Mock data since we don't have access to mafCards

  const cards = mafCards.map((card, index) => (
    <Card
      key={index}
      card={{
        ...card,
        src: typeof card.src === "string" ? card.src : card.src.src,
      }}
      index={index}
      layout={true}
    />
  ));

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Hero Section */}
      <div className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-green-600/5"></div>
        <div className="relative container mx-auto px-4">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-6">
              Flexible Healthcare Services
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              Discover our comprehensive range of home-based healthcare services
              designed to meet your unique needs with professional care and
              compassion.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-8 mb-12">
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                <IconShield className="w-5 h-5 text-green-500" />
                <span className="text-sm font-medium">
                  Licensed Professionals
                </span>
              </div>
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                <IconHeart className="w-5 h-5 text-red-500" />
                <span className="text-sm font-medium">Compassionate Care</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                <IconUsers className="w-5 h-5 text-blue-500" />
                <span className="text-sm font-medium">
                  500+ Families Served
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-7xl mx-auto"
          >
      

            <Carousel items={cards} />
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-4">
                Why Choose MAFLink?
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                Experience the difference of professional, compassionate
                healthcare in your home
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <IconShield className="w-8 h-8 text-blue-500" />,
                  title: "Licensed & Insured",
                  description:
                    "All our healthcare professionals are fully licensed and insured for your peace of mind.",
                },
                {
                  icon: <IconHeart className="w-8 h-8 text-red-500" />,
                  title: "Compassionate Care",
                  description:
                    "We treat every patient with the same care and respect we would show our own family.",
                },
                {
                  icon: <IconUsers className="w-8 h-8 text-green-500" />,
                  title: "Experienced Team",
                  description:
                    "Our team has years of experience in home healthcare and medical support.",
                },
                {
                  icon: <IconClock className="w-8 h-8 text-purple-500" />,
                  title: "24/7 Support",
                  description:
                    "Round-the-clock support ensures help is always available when you need it.",
                },
                {
                  icon: <IconSparkles className="w-8 h-8 text-yellow-500" />,
                  title: "Personalized Care",
                  description:
                    "Every care plan is tailored to meet your specific needs and preferences.",
                },
                {
                  icon: (
                    <IconCurrencyDollar className="w-8 h-8 text-green-600" />
                  ),
                  title: "Affordable Pricing",
                  description:
                    "Quality healthcare shouldn't break the bank. We offer competitive, transparent pricing.",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="text-center p-6 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                >
                  <div className="flex justify-center mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const mafCards = [
  {
    category: "Basic Care Package",
    title: "Essential Support for Independent Patients",
    src: "https://img.freepik.com/free-photo/africa-humanitarian-aid-doctor-taking-care-patient_23-2149117843.jpg?t=st=1752687277~exp=1752690877~hmac=407fc3604fc6bce6bf54d9dd889783882685feb9a0d056d4a066249fa7189a38&w=2000",
    content: (
      <CardContent
        description="For relatively independent patients needing minor assistance."
        features={[
          "Vital signs monitoring (3x/week)",
          "Medication reminders / supervision",
          "Basic hygiene assistance",
          "Health education to patient/family",
          "Weekly nurse report",
        ]}
        duration="2–4 hours/day, 3–5 days/week"
        price="GHS 1,200 - 2,000/month"
      />
    ),
  },
  {
    category: "Intermediate Care Package",
    title: "Skilled Nursing for Daily Needs",
    src: nursecare,
    content: (
      <CardContent
        description="For patients needing skilled nursing care but still mostly ambulant."
        features={[
          "Daily vitals monitoring",
          "Medication administration (oral, injections)",
          "Wound care and dressing changes",
          "Catheter/NG tube care",
          "Monitoring chronic conditions",
          "Post-operative support",
        ]}
        duration="4–6 hours/day, 7 days/week"
        price="GHS 2,500 - 3,500/month"
      />
    ),
  },
  {
    category: "Advanced Medical / Specialized Care",
    title: "Comprehensive Medical Management",
    src: "https://img.freepik.com/free-photo/african-american-female-medic-does-respiratory-consultation-with-stethoscope_482257-122729.jpg?t=st=1752688245~exp=1752691845~hmac=8a554980d106705a837dd87f5cd15670bfcad4796963c5372d724dd546ae911d&w=2000",
    content: (
      <CardContent
        description="For patients with complex medical needs requiring frequent monitoring."
        features={[
          "Twice daily vitals and assessments",
          "Full medication administration",
          "Catheter care and stoma care",
          "Suctioning, tube feeding",
          "Tracheostomy management",
          "End-of-life care / palliative support",
          "24/7 on-call nurse access",
        ]}
        duration="6–8 hours/day, 7 days/week"
        price="GHS 4,000 - 5,500/month"
      />
    ),
  },
  {
    category: "Live-In Home Nursing",
    title: "24/7 Comprehensive Care at Home",
    src: nurse2,
    content: (
      <CardContent
        description="For patients needing round-the-clock care and supervision."
        features={[
          "24-hour nurse presence",
          "All medications and clinical procedures",
          "Companionship & supervision",
          "Full ADL support",
          "In-bed physiotherapy and mobility assistance",
          "End-of-life care, daily documentation",
        ]}
        duration="24/7 presence"
        price="GHS 6,500 - 8,000/month"
      />
    ),
  },
  {
    category: "Geriatric Care Package",
    title: "Dedicated Elderly Support",
    src: homecare,
    content: (
      <CardContent
        description="Elderly individuals needing long-term personal and medical care."
        features={[
          "Daily living assistance",
          "Memory care (dementia, Alzheimer's)",
          "Medication management",
          "Vital monitoring",
          "Social interaction and companionship",
          "Safety assessments",
        ]}
        duration="6–8 hours daily or live-in"
        price="GHS 7,000 - 8,500/month"
      />
    ),
  },
  {
    category: "Physiotherapy & Rehabilitation",
    title: "Recover Faster, Move Better",
    src: homecare2,
    content: (
      <CardContent
        description="For stroke patients, injury recovery, and post-surgery rehab."
        features={[
          "Guided physical therapy exercises",
          "Ambulation support",
          "Muscle stimulation and mobility training",
          "Pain management",
          "Family education on therapy routines",
        ]}
        duration="Per session / weekly / monthly"
        price="From GHS 300/session to GHS 3,000/month"
      />
    ),
  },
  {
    category: "Companion & Emotional Support",
    title: "Emotional Wellbeing and Daily Assistance",
    src: homecare3,
    content: (
      <CardContent
        description="For elderly or isolated individuals needing non-medical support."
        features={[
          "Conversation and emotional care",
          "Recreational activities",
          "Errand assistance",
          "Meal preparation",
          "Reading, games, outdoor walks",
        ]}
        duration="2–3 hours/day, 5 days/week"
        price="GHS 120 per visit, GHS 1,850 monthly"
      />
    ),
  },
  {
    category: "Maternal & Infant Care",
    title: "Care for New Mothers and Babies",
    src: homecare4,
    content: (
      <CardContent
        description="For new mothers, infants, and high-risk pregnancy support."
        features={[
          "Postnatal care for mothers",
          "Baby care (bathing, feeding, hygiene)",
          "Breastfeeding support",
          "Post-Caesarean monitoring",
          "Jaundice checks",
          "Family education on newborn care",
        ]}
        duration="4–6 hours/day, 7 days/week"
        price="GHS 3,000 - 3,800/month"
      />
    ),
  },
];

export default AppleCardsCarouselDemo;
