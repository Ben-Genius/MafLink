import { Heart } from "lucide-react";
import Image from "next/image";
import logo from "@/assets/images/maflink.jpg";
const Navbar = () => {
  return (
    <nav className="flex w-full items-center justify-between border-b border-neutral-200/50 bg-white/80 backdrop-blur-sm px-4 py-4 dark:border-neutral-700/50 dark:bg-slate-900/80">
      <div className="flex items-center gap-3">
        {/* Logo placeholder - replace with actual logo */}
        <div className="relative">
        
        </div>
        <div>
          <Image
            src={logo}
            alt="Logo"
            width={50}
            height={50}
            className="rounded-lg text-center mx-auto"
          />
          <p className="text-xs text-slate-600 dark:text-slate-400 text-center">
            Nursing Services
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="hidden md:block text-sm font-medium text-slate-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors">
          Services
        </button>
        <button className="hidden md:block text-sm font-medium text-slate-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors">
          About
        </button>
        <button className="hidden md:block text-sm font-medium text-slate-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors">
          Contact
        </button>
        <button className="w-24 md:w-32 transform rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:from-blue-700 hover:to-blue-800 shadow-lg">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
