const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-medium bg-cream text-charcoal">
      <div className="mx-auto max-w-[1700px] px-6 py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          
          {/* Column 1: Brand & Location */}
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center gap-1 sm:gap-1.5 group w-fit">
              {/* Custom 'i' Icon */}
              <svg 
                className="h-10 sm:h-11 w-auto shrink-0 transition-transform duration-300 group-hover:scale-105" 
                viewBox="0 0 20 106" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="10" cy="10" r="10" className="fill-gray-slate" />
                <path d="M0 28 H20 V54 L0 74 Z" className="fill-gray-slate" />
                <path d="M0 80 L20 60 V98 C20 102.5 16.5 106 12 106 H0 Z" className="fill-green-sage" />
              </svg>

              <div className="flex flex-col justify-center pt-1">
                <span className="text-[32px] sm:text-[36px] font-semibold leading-[0.8] tracking-tight text-gray-slate">
                  solve
                </span>
                <span className="mt-0.5 text-[15px] sm:text-[18px] font-normal leading-none text-charcoal tracking-wide">
                  Recruitment
                </span>
              </div>
            </a>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-charcoal/80">
              Personalized, strategic recruitment connecting exceptional talent with organizations across South Africa.
            </p>

            <div className="mt-4 flex items-center gap-2 text-xs font-medium text-gray-slate">
              <span>📍 Gauteng, South Africa</span>
              <span>•</span>
              <span className="text-green-sage">Boutique Agency</span>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-slate">
              Navigation
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href="/" className="transition hover:text-green-sage">Home</a>
              </li>
              <li>
                <a href="/about" className="transition hover:text-green-sage">About Us</a>
              </li>
              <li>
                <a href="/employers" className="transition hover:text-green-sage">For Employers</a>
              </li>
              <li>
                <a href="/candidates" className="transition hover:text-green-sage">For Candidates</a>
              </li>
              <li>
                <a href="/jobs" className="transition hover:text-green-sage">Search Jobs</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Utility Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-slate">
              Candidates & Talent
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href="/contact" className="transition hover:text-green-sage">Submit CV</a>
              </li>
              <li>
                <a href="/jobs" className="transition hover:text-green-sage">Featured Positions</a>
              </li>
              <li>
                <a href="/contact" className="transition hover:text-green-sage">Book Consultation</a>
              </li>
              <li>
                <a href="/privacy" className="transition hover:text-green-sage">Privacy & POPIA Policy</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Social */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-slate">
              Connect
            </h3>
            <p className="mt-4 text-sm text-charcoal/80">
              Have questions or looking to fill a strategic role?
            </p>
            
            <div className="mt-4 space-y-2 text-sm font-medium text-gray-slate">
              <div>
                <a href="mailto:info@isolverecruitment.co.za" className="hover:text-green-sage transition">
                  info@isolverecruitment.co.za
                </a>
              </div>
            </div>

            <div className="mt-5">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-gray-medium bg-white px-3.5 py-2 text-xs font-medium text-gray-slate transition hover:border-gray-slate hover:bg-gray-slate hover:text-white"
              >
                {/* Updated Custom 'i' Icon matching Navbar brand mark */}
                <svg 
                  className="h-4 w-4 shrink-0 transition-transform duration-300" 
                  viewBox="0 0 20 106" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="10" cy="10" r="10" className="fill-current" />
                  <path d="M0 28 H20 V54 L0 74 Z" className="fill-current" />
                  <path d="M0 80 L20 60 V98 C20 102.5 16.5 106 12 106 H0 Z" className="fill-current opacity-80" />
                </svg>
                Connect on LinkedIn
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar / Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-medium/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-charcoal/70">
          <p>© {currentYear} iSolve Recruitment. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="/privacy" className="hover:text-gray-slate">Privacy Policy</a>
            <a href="/terms" className="hover:text-gray-slate">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;