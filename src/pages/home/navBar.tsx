"use client";

import { useState } from "react";
import Image from "next/image";
import logo from "@/assets/images/maflink.jpg";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarButton,
} from "@/components/ui/resizable-navbar";

const NavBar = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const navItems = [
    { name: "Home", link: "/" },
    { name: "Services", link: "/services" },
    { name: "About", link: "/about" },
    { name: "Testimonials", link: "/testimonials" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <Navbar className="bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <NavBody>
        {/* Logo */}
        <div className="relative z-20 ">
          <div className="flex items-center gap-3">
            <Image
              src={logo}
              alt="Logo"
              width={50}
              height={40}
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Navigation Items */}
        <NavItems items={navItems} />

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <NavbarButton variant="primary">Sign In</NavbarButton>
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <div className="flex items-center gap-3">
            <Image
              src={logo}
              alt="Logo"
              width={32}
              height={32}
              className="rounded-lg"
            />
            <span className="font-bold text-lg text-slate-800 dark:text-white">
              MAFLink
            </span>
          </div>
          <MobileNavToggle
            isOpen={mobileNavOpen}
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={mobileNavOpen}
          onClose={() => setMobileNavOpen(false)}
        >
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="block w-full px-4 py-2 text-base text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
              onClick={() => setMobileNavOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <div className="mt-4 flex flex-col gap-2 px-4">
            <NavbarButton variant="secondary" className="w-full">
              Sign In
            </NavbarButton>
            <NavbarButton variant="primary" className="w-full">
              Book Care
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
};

export default NavBar;
