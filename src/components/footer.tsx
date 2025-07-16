"use client";

import Link from "next/link";
import { Heart } from "lucide-react";
import Image from "next/image";
import logo from "@/assets/images/maflink.jpg";
export default function Footer() {
  return (
    <footer className="bg-white/80 backdrop-blur-md border-t border-gray-200/50 dark:bg-slate-900/80 dark:backdrop-blur-md dark:border-slate-700/50 text-gray-800 dark:text-white py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="">
              <Image
                src={logo}
                alt="Logo"
                width={60}
                height={60}
                className="rounded-lg text-center"
              />
            </div>
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              MAFLink
            </span>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Compassionate care, wherever home is. Providing premium nursing
            services across Ghana and for families worldwide.
          </p>
        </div>

        {/* Middle Links */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Quick Links
          </h3>
          <ul className="space-y-1 text-sm">
            <li>
              <Link
                href="/"
                className="hover:underline text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="hover:underline text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/testimonials"
                className="hover:underline text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Testimonials
              </Link>
            </li>
            <li>
              <Link
                href="/faq"
                className="hover:underline text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:underline text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Right Contact Info */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Contact
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Accra, Ghana
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            +233 20 123 4567
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            info@maflinknursing.com
          </p>
          <div className="flex gap-3 mt-2">
            <a
              href="#"
              className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
            >
              <span className="sr-only">Facebook</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.877v-6.987H7.898v-2.89h2.54V9.797c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.632.771-1.632 1.562v1.875h2.773l-.443 2.89h-2.33V21.877C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
            >
              <span className="sr-only">Instagram</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.355 3.608 1.33.975.975 1.268 2.242 1.33 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.355 2.633-1.33 3.608-.975.975-2.242 1.268-3.608 1.33-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.355-3.608-1.33-.975-.975-1.268-2.242-1.33-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.849c.062-1.366.355-2.633 1.33-3.608.975-.975 2.242-1.268 3.608-1.33C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.012 7.052.07 5.78.128 4.629.427 3.676 1.38 2.723 2.334 2.424 3.486 2.366 4.758.307 5.752.295 6.161.295 12s.012 6.248.07 7.529c.058 1.272.357 2.423 1.31 3.377.953.954 2.105 1.253 3.377 1.311 1.281.058 1.69.07 7.529.07s6.248-.012 7.529-.07c1.272-.058 2.423-.357 3.377-1.311.954-.954 1.253-2.105 1.311-3.377.058-1.281.07-1.69.07-7.529s-.012-6.248-.07-7.529c-.058-1.272-.357-2.423-1.311-3.377-.954-.953-2.105-1.253-3.377-1.311C15.668.012 15.259 0 12 0z" />
                <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM18.406 4.594a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-xs text-gray-500 dark:text-gray-400">
        &copy; {new Date().getFullYear()} MAFLink Nursing Services. All rights
        reserved.
      </div>
    </footer>
  );
}
