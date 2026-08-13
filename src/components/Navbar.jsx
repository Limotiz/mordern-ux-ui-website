import { Menu,X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const[mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
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
          </div>{/* Nav Links */}
<div className="hidden md:flex justify-between gap-8">

  <a
    href="#home"
    className="text-gray-300 hover:text-orange-500 text-sm lg:text-base"
  >
    Home
  </a>

  {/* About Dropdown */}
  <div className="relative group">
    <a
      href="#about"
      className="text-gray-300 hover:text-orange-500 text-sm lg:text-base"
    >
      About
    </a>
    <div className="absolute left-0 top-full hidden group-hover:block pt-2">
      <div className="w-48 bg-slate-900 border border-slate-700 rounded-lg shadow-lg py-2">
        <a
          href="#about-us"
          className="block px-4 py-2 text-gray-300 hover:text-orange-500 hover:bg-slate-800"
        >
          About Us
        </a>

        <a
          href="#mission"
          className="block px-4 py-2 text-gray-300 hover:text-orange-500 hover:bg-slate-800"
        >
          Our Mission
        </a>

        <a
          href="#vision"
          className="block px-4 py-2 text-gray-300 hover:text-orange-500 hover:bg-slate-800"
        >
          Our Vision
        </a>
      </div>
    </div>
  </div>

<div className="relative group">
  <a
    href="#programmes"
    className="text-gray-300 hover:text-orange-500 text-sm lg:text-base"
  >
    Programmes
  </a>

  <div>
 <div className="absolute left-0 top-full hidden group-hover:block pt-2">
      <div className="w-48 bg-slate-900 border border-slate-700 rounded-lg shadow-lg py-2">
        <h1 className="text-center font-bold">Thematic Areas</h1>
        <a
          href="#about-us"
          className="block px-4 py-2 text-gray-300 hover:text-orange-500 hover:bg-slate-800"
        >
          LEADERSHIP AND CAPACITY DEVELOPMENT  
        </a>

        <a
          href="#mission"
          className="block px-4 py-2 text-gray-300 hover:text-orange-500 hover:bg-slate-800"
        >
          MENTORSHIP AND LIFE - SKILLS
        </a>

        <a
          href="#vision"
          className="block px-4 py-2 text-gray-300 hover:text-orange-500 hover:bg-slate-800"
        >
          STUDENT CHURCH ENGAGEMENT PROGRAMME
        </a>
        <a
          href="#vision"
          className="block px-4 py-2 text-gray-300 hover:text-orange-500 hover:bg-slate-800"
        >
          STUDENT SPIRITUAL FORMATION PROGRAMME
        </a>
        
         <a
          href="#vision"
          className="block px-4 py-2 text-gray-300 hover:text-orange-500 hover:bg-slate-800"
        >
          STUDENT WELLNESS PROGRAMME
        </a>
      </div>
    </div>
  </div>
</div>
  

  <a
    href="#services"
    className="text-gray-300 hover:text-orange-500 text-sm lg:text-base"
  >
    Catering Services
  </a>

  <a
    href="#contact"
    className="text-gray-300 hover:text-orange-500 text-sm lg:text-base"
  >
    Contact
  </a>

</div>

          <button 
          className="md:hidden p-2 text-gray-300 hover:text-white" 
          onClick={() => setMobileMenuIsOpen((prev) => !prev)}>

            {mobileMenuIsOpen ? (
            <X className="w-5 h-5 sm:w-6 sm:h-6"/>
            ) : (

            <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
            )
            }
          </button>

        </div>
      </div>
      {mobileMenuIsOpen && (
        <div className="md:hidden bg_slatr-900/95 backdrop-blur-lg border-t border-slate-800 animate-in slide-in-from-top duration-300">
          <div className="px-4 py-4 sm:py-6 space-y-3 sm:space-y-4">            
            <a href="#home" 
               onClick={() => setMobileMenuIsOpen(false)}
            className="block text-gray-300 hover:text-orange-500 text-sm lg:text-base">
              Home
            </a>
            <a href="#about" 
               onClick={() => setMobileMenuIsOpen(false)}
            className="block text-gray-300 hover:text-orange-500 text-sm lg:text-base">
              About
            </a>
            <a href="#programmes" 
               onClick={() => setMobileMenuIsOpen(false)}
            className="block text-gray-300 hover:text-orange-500 text-sm lg:text-base">
              Programmes
            </a>
            <a href="#services" 
               onClick={() => setMobileMenuIsOpen(false)}
            className="block text-gray-300 hover:text-orange-500 text-sm lg:text-base">
              Catering Services
            </a>
            <a href="#contact" 
               onClick={() => setMobileMenuIsOpen(false)}
            className="block text-gray-300 hover:text-orange-500 text-sm lg:text-base">
              Contact
            </a>
            </div>
        </div>
      )}
    </nav>
  );
}