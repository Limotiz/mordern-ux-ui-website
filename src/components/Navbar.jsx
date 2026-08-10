import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-slate-950/20 backdrop-blur-sm border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">

          <div className="flex items-center space-x-3 group cursor-pointer">
            <div>
              <img
                src="/Ufungamano round logo.png"
                alt="Christian Student Leadership Centre"
                className="w-10 h-10 sm:w-16 sm:h-16"
              />
            </div>
            <span className="text-lg sm:text-xl md:text-2xl font-medium">
              <span className="text-white">Christian Student</span>{' '}
              <span className="text-white">Leadership Centre</span>
              <span className="text-orange-400 block text-center text-sm sm:text-base ">Ufungamano House</span>
            </span>
          </div>

          <div className="hidden md:flex justify-between gap-8">
            <a href="#home" className="text-gray-300 hover:text-orange-500 text-sm lg:text-base">
              Home
            </a>
            <a href="#about" className="text-gray-300 hover:text-orange-500 text-sm lg:text-base">
              About
            </a>
            <a href="#programmes" className="text-gray-300 hover:text-orange-500 text-sm lg:text-base">
              Programmes
            </a>
            <a href="#services" className="text-gray-300 hover:text-orange-500 text-sm lg:text-base">
              Catering Services
            </a>
            <a href="#contact" className="text-gray-300 hover:text-orange-500 text-sm lg:text-base">
              Contact
            </a>
          </div>

          <button className="md:hidden">
            <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

        </div>
      </div>
    </nav>
  );
}