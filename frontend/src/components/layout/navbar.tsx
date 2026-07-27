import { useState, useEffect } from "react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Prevent background scrolling on body when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Employers", href: "/employers" },
    { name: "Candidates", href: "/candidates" },
    { name: "Jobs", href: "/jobs" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 z-50 w-full border-b border-gray-medium bg-cream">
      <div className="mx-auto flex h-20 max-w-[1700px] items-center justify-between px-6 lg:px-8">

        {/* Logo */}
        <a href="/" className="flex items-center gap-1 sm:gap-1.5 group">
          
          {/* Custom 'i' Icon */}
          <svg 
            className="h-11 sm:h-12 w-auto shrink-0 transition-transform duration-300 group-hover:scale-105" 
            viewBox="0 0 20 106" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Top Dot */}
            <circle cx="10" cy="10" r="10" className="fill-gray-slate" />
            
            {/* Upper Stem (Navy) */}
            <path 
              d="M0 28 H20 V54 L0 74 Z" 
              className="fill-gray-slate" 
            />
            
            {/* Bottom Wedge (Gold/Sage) */}
            <path 
              d="M0 80 L20 60 V98 C20 102.5 16.5 106 12 106 H0 Z" 
              className="fill-green-sage" 
            />
          </svg>

          {/* Text Group */}
          <div className="flex flex-col justify-center pt-1.5">
            <span className="text-[36px] sm:text-[42px] font-semibold leading-[0.8] tracking-tight text-gray-slate">
              solve
            </span>
            <span className="mt-0.5 text-[17px] sm:text-[20px] font-normal leading-none text-charcoal tracking-wide">
              Recruitment
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="relative text-base font-medium text-charcoal transition-colors duration-200 hover:text-gray-slate py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-green-sage after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-4 lg:flex">
          <button className="rounded-lg border border-gray-slate px-5 py-2.5 font-medium text-gray-slate transition hover:bg-gray-slate hover:text-white cursor-pointer">
            Search Jobs
          </button>
          <button className="rounded-lg bg-green-sage px-5 py-2.5 font-medium text-white transition hover:opacity-90 cursor-pointer shadow-sm">
            Find Talent
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-2xl text-gray-slate lg:hidden cursor-pointer"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? "✕" : "☰"}
        </button>

      </div>

      {/* Full-Screen Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-0 top-20 h-[calc(100vh-5rem)] bg-cream px-6 py-8 lg:hidden z-50 overflow-y-auto flex flex-col justify-between">
          
          {/* Navigation Links */}
          <div className="flex flex-col gap-6">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="relative w-fit text-2xl font-semibold text-gray-slate py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-green-sage after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Bottom Action Buttons */}
          <div className="flex flex-col gap-3 pt-6 border-t border-gray-medium mb-8">
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="w-full rounded-lg bg-green-sage py-3.5 text-base font-medium text-white transition hover:opacity-90 cursor-pointer shadow-sm"
            >
              Find Talent
            </button>
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="w-full rounded-lg border border-gray-slate py-3.5 text-base font-medium text-gray-slate transition hover:bg-gray-slate hover:text-white cursor-pointer"
            >
              Search Jobs
            </button>
          </div>

        </div>
      )}
    </header>
  );
};

export default Navbar;