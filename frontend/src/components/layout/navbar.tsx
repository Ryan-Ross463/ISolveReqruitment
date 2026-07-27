import { useState } from "react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
        <a href="/" className="flex items-center gap-1 sm:gap-1.5 cursor-pointer group">
          
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
              fill="var(--color-green-sage)" 
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

        {/* Navigation Links with Left-to-Right Animated Underline */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="relative text-base font-medium text-charcoal transition-colors duration-200 hover:text-gray-slate cursor-pointer py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-green-sage after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden items-center gap-4 lg:flex">
          <button className="rounded-lg border border-gray-slate px-5 py-2.5 font-medium text-gray-slate transition hover:bg-gray-slate hover:text-white cursor-pointer">
            Search Jobs
          </button>
          <button className="rounded-lg bg-green-sage px-5 py-2.5 font-medium text-white transition hover:opacity-90 cursor-pointer shadow-sm">
            Find Talent
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-slate lg:hidden cursor-pointer"
          aria-label="Open navigation menu"
        >
          ☰
        </button>

      </div>
    </header>
  );
};

export default Navbar;