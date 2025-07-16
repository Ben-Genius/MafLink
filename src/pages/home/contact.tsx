"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  Shield,
  Heart,
  Star,
  Calendar,
  CheckCircle,
  Users,
  Globe,
} from "lucide-react";

const contactMethods = [
  {
    icon: Phone,
    title: "Call Us",
    description: "Speak with our care coordinators",
    contact: "+233 20 123 4567",
    subtext: "Available 24/7",
    color:
      "bg-blue-50 border-blue-200 text-blue-700 dark:bg-blue-900/20 dark:border-blue-800 dark:text-blue-400",
  },
  {
    icon: Mail,
    title: "Email Us",
    description: "Send us a detailed message",
    contact: "info@maflinknursing.com",
    subtext: "Response within 2 hours",
    color:
      "bg-green-50 border-green-200 text-green-700 dark:bg-green-900/20 dark:border-green-800 dark:text-green-400",
  },
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Get instant support",
    contact: "Chat Now",
    subtext: "Online now",
    color:
      "bg-purple-50 border-purple-200 text-purple-700 dark:bg-purple-900/20 dark:border-purple-800 dark:text-purple-400",
  },
  {
    icon: Calendar,
    title: "Book Consultation",
    description: "Schedule a free consultation",
    contact: "Schedule Now",
    subtext: "Next available: Today",
    color:
      "bg-orange-50 border-orange-200 text-orange-700 dark:bg-orange-900/20 dark:border-orange-800 dark:text-orange-400",
  },
];

const locations = [
  {
    city: "Accra",
    address: "East Legon, Accra",
    phone: "+233 20 123 4567",
    hours: "24/7 Available",
  },
  {
    city: "Kumasi",
    address: "Adum, Kumasi",
    phone: "+233 20 123 4568",
    hours: "24/7 Available",
  },
  {
    city: "Takoradi",
    address: "Takoradi Market Circle",
    phone: "+233 20 123 4569",
    hours: "24/7 Available",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleInputChange = (e: { target: { name: string; value: any; }; }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
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

      <div className="relative px-4 py-10 md:py-20">
        {/* Trust indicator */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <div className="flex items-center gap-6 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg dark:bg-slate-800/80">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                24/7 Support
              </span>
            </div>
            <div className="w-px h-6 bg-slate-300 dark:bg-slate-600" />
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                Secure & Private
              </span>
            </div>
            <div className="w-px h-6 bg-slate-300 dark:bg-slate-600" />
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-red-500" />
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                Caring Team
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
            Get in Touch
          </span>
          <br />
          <span className="text-slate-800 dark:text-slate-200">
            With Our Care Team
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="relative z-10 mx-auto max-w-2xl text-center text-lg text-slate-600 dark:text-slate-400 mb-12"
        >
          Ready to provide compassionate care for your loved ones? Let's discuss
          how we can help
        </motion.p>

        <div className="max-w-7xl mx-auto">
          {/* Contact methods */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className={`${method.color} rounded-2xl border p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-white/50 rounded-lg">
                    <method.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{method.title}</h3>
                    <p className="text-sm opacity-80">{method.description}</p>
                  </div>
                </div>
                <div className="font-bold text-lg mb-1">{method.contact}</div>
                <div className="text-sm opacity-75 flex items-center gap-1">
                  <CheckCircle className="w-3 h-3" />
                  {method.subtext}
                </div>
              </div>
            ))}
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <Send className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200">
                      Send us a message
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400">
                      We'll get back to you within 2 hours
                    </p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-700 dark:text-slate-300 text-sm font-semibold mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white/80 dark:bg-slate-700/80 text-slate-800 dark:text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-slate-700 dark:text-slate-300 text-sm font-semibold mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+233 20 123 4567"
                        className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white/80 dark:bg-slate-700/80 text-slate-800 dark:text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-700 dark:text-slate-300 text-sm font-semibold mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white/80 dark:bg-slate-700/80 text-slate-800 dark:text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 dark:text-slate-300 text-sm font-semibold mb-2">
                      Service Needed
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white/80 dark:bg-slate-700/80 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm"
                    >
                      <option value="">Select a service</option>
                      <option value="basic">Basic Care</option>
                      <option value="intermediate">Intermediate Care</option>
                      <option value="advanced">Advanced Care</option>
                      <option value="livein">Live-in Care</option>
                      <option value="consultation">Free Consultation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-slate-700 dark:text-slate-300 text-sm font-semibold mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      placeholder="Tell us about your care needs, timeline, and any specific requirements..."
                      className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white/80 dark:bg-slate-700/80 text-slate-800 dark:text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm resize-none"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Location and info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="space-y-6"
            >
              {/* Service areas */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                    <MapPin className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">
                      Service Locations
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      We serve across Ghana
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {locations.map((location, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-200 dark:border-green-800"
                    >
                      <MapPin className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-slate-800 dark:text-slate-200">
                          {location.city}
                        </h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          {location.address}
                        </p>
                        <p className="text-sm text-green-600 dark:text-green-400 font-medium">
                          {location.phone}
                        </p>
                        <div className="flex items-center gap-1 mt-1">
                          <Clock className="w-3 h-3 text-slate-500" />
                          <span className="text-xs text-slate-500">
                            {location.hours}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why choose us */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                    <Star className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">
                      Why Choose MAFLink?
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      Trusted by families across Ghana
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      icon: Shield,
                      title: "Licensed & Certified",
                      description:
                        "All nurses verified by Ghana Nursing Council",
                      color: "text-blue-600 dark:text-blue-400",
                    },
                    {
                      icon: Clock,
                      title: "24/7 Availability",
                      description: "Round-the-clock care and support",
                      color: "text-green-600 dark:text-green-400",
                    },
                    {
                      icon: Heart,
                      title: "Compassionate Care",
                      description: "Treating your family like our own",
                      color: "text-red-500 dark:text-red-400",
                    },
                    {
                      icon: Globe,
                      title: "International Families",
                      description: "Serving Ghanaians worldwide",
                      color: "text-purple-600 dark:text-purple-400",
                    },
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="p-2 bg-slate-100 dark:bg-slate-700 rounded-lg">
                        <feature.icon className={`w-4 h-4 ${feature.color}`} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 dark:text-slate-200">
                          {feature.title}
                        </h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Emergency contact */}
              <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-3xl p-8 shadow-xl border border-red-200 dark:border-red-800">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg">
                    <Phone className="w-6 h-6 text-red-600 dark:text-red-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-red-800 dark:text-red-200">
                      Emergency Care
                    </h3>
                    <p className="text-red-600 dark:text-red-400">
                      Need immediate nursing care?
                    </p>
                  </div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-red-200 dark:border-red-700 dark:bg-red-900/10">
                  <p className="text-red-700 dark:text-red-300 font-bold text-lg mb-2">
                    Call Now: +233 20 123 4567
                  </p>
                  <p className="text-sm text-red-600 dark:text-red-400">
                    Available 24/7 for emergency care needs
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.4 }}
            className="mt-16 text-center"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-200 mb-4">
                Ready to Start Your Care Journey?
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
                Join thousands of families who trust MAFLink for their
                healthcare needs. Get started with a free consultation today.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl">
                  <Calendar className="w-5 h-5" />
                  Book Free Consultation
                </button>
                <button className="flex items-center justify-center gap-2 px-8 py-4 border border-blue-300 bg-white/80 backdrop-blur-sm text-blue-700 font-semibold rounded-xl hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl dark:border-blue-600 dark:bg-slate-800/80 dark:text-blue-400 dark:hover:bg-slate-700/80">
                  <Users className="w-5 h-5" />
                  Speak with Care Coordinator
                </button>
              </div>

              <div className="mt-6 flex items-center justify-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>
                  Free consultation • No obligation • Licensed professionals
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
