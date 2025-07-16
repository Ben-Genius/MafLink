import { Shield, Star, Clock, Heart, Users, Calendar, Phone, MapPin } from "lucide-react";
import { motion } from "motion/react";
import Navbar from "./navBar";

function HeroSectionOne() {
  return (
    <div className=" bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
     

      {/* Decorative elements */}
      <div className="absolute inset-y-0 left-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-green-500 to-transparent" />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px w-full bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
      </div>

      <div className="px-4 py-10 md:py-20 relative">
        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <div className="flex items-center gap-6 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg dark:bg-slate-800/80">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                Licensed & Certified
              </span>
            </div>
            <div className="w-px h-6 bg-slate-300 dark:bg-slate-600" />
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-500" />
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                Trusted Care
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
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative z-20 mx-auto max-w-6xl text-center text-3xl font-bold text-slate-800 md:text-5xl lg:text-7xl dark:text-slate-200 mb-6"
        >
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
            Compassionate care,
          </span>

          <span className="text-slate-800 dark:text-slate-200">
            wherever Home Is
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.8 }}
          className="relative z-10 mx-auto max-w-2xl py-6 text-center text-lg font-normal text-slate-600 dark:text-slate-400"
        >
          Connect with licensed, certified nurses for personalized medical care
          in the comfort of your home. Professional healthcare services for your
          loved ones across Ghana and beyond.
        </motion.p>

        {/* Key features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="flex flex-wrap justify-center gap-4 mb-8"
        >
          {[
            { icon: Heart, text: "Post-Surgical Care" },
            { icon: Users, text: "Elderly Care" },
            { icon: Shield, text: "Chronic Illness Management" },
            { icon: Clock, text: "24/7 Live-in Care" },
          ].map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-lg px-4 py-2 shadow-sm dark:bg-slate-800/60"
            >
              <feature.icon className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                {feature.text}
              </span>
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 1.2 }}
          className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <button className="group flex items-center gap-2 w-60 transform rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl">
            <Calendar className="w-4 h-4" />
            Book Care Now
          </button>
          <button className="group flex items-center gap-2 w-60 transform rounded-lg border border-blue-300 bg-white/80 backdrop-blur-sm px-6 py-3 font-medium text-blue-700 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-50 shadow-lg hover:shadow-xl dark:border-blue-600 dark:bg-slate-800/80 dark:text-blue-400 dark:hover:bg-slate-700/80">
            <Phone className="w-4 h-4" />
            Get Free Consultation
          </button>
        </motion.div>

        {/* Service areas */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 1.4 }}
          className="relative z-10 mt-8 flex items-center justify-center gap-2 text-sm text-slate-600 dark:text-slate-400"
        >
          <MapPin className="w-4 h-4 text-green-600" />
          <span>
            Serving Accra • Kumasi • Takoradi • Ghanaian Families Worldwide
          </span>
        </motion.div>

        {/* Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.6 }}
          className="relative z-10 mt-16 rounded-3xl border border-neutral-200 bg-white/80 backdrop-blur-sm p-6 shadow-2xl dark:border-neutral-700 dark:bg-slate-800/80"
        >
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-2">
              Our Care Packages
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Choose the perfect care plan for your loved ones
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                name: "Basic Care",
                price: "GHS 1,200-2,000",
                duration: "/month",
                features: [
                  "Vital signs monitoring",
                  "Medication reminders",
                  "Basic hygiene assistance",
                ],
                color:
                  "bg-blue-50 border-blue-200 dark:bg-blue-900/20 dark:border-blue-800",
              },
              {
                name: "Intermediate Care",
                price: "GHS 2,500-3,500",
                duration: "/month",
                features: [
                  "Daily vitals",
                  "Medication administration",
                  "Wound care",
                ],
                color:
                  "bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800",
              },
              {
                name: "Advanced Care",
                price: "GHS 4,000-5,500",
                duration: "/month",
                features: [
                  "Complex medical needs",
                  "24/7 on-call",
                  "Specialized procedures",
                ],
                color:
                  "bg-purple-50 border-purple-200 dark:bg-purple-900/20 dark:border-purple-800",
              },
              {
                name: "Live-in Care",
                price: "GHS 6,500-8,000",
                duration: "/month",
                features: [
                  "24-hour presence",
                  "Full medical support",
                  "Continuous supervision",
                ],
                color:
                  "bg-orange-50 border-orange-200 dark:bg-orange-900/20 dark:border-orange-800",
              },
            ].map((pkg, index) => (
              <div
                key={index}
                className={`${pkg.color} rounded-lg border p-4 hover:shadow-md transition-shadow`}
              >
                <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">
                  {pkg.name}
                </h4>
                <div className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-3">
                  {pkg.price}
                  <span className="text-sm font-normal text-slate-600 dark:text-slate-400">
                    {pkg.duration}
                  </span>
                </div>
                <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-1">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-1">
                      <span className="text-green-500 mt-0.5">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default HeroSectionOne;