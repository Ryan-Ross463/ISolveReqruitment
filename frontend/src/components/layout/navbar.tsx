const Navbar = () => {
  const navigation = [
    { name: "Home", href: "/" },
    { name: "Employers", href: "/employers" },
    { name: "Candidates", href: "/candidates" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Insights", href: "/insights" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 z-50 w-full border-b border-[var(--color-gray-medium)] bg-[var(--color-cream)]">
      <div className="mx-auto flex h-20 max-w-[1700px] items-center justify-between px-6 lg:px-8">

        {/* Logo */}
        <a href="/" className="flex flex-col leading-none">
          <span className="text-3xl font-extrabold tracking-tight text-[var(--color-gray-slate)]">
            iSolve
          </span>

          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-black-deep)]">
            Recruitment
          </span>
        </a>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="nav-link text-sm font-medium text-[var(--color-charcoal)] transition hover:text-[var(--color-green-forest)]"
            >
              {item.name}
            </a>
          ))}
        </nav>


        {/* CTA */}
        <div className="hidden items-center gap-4 lg:flex">
          <button
            className="rounded-lg border border-[var(--color-gray-slate)] px-5 py-2.5 font-medium text-[var(--color-gray-slate)] transition hover:bg-[var(--color-gray-slate)] hover:text-white"
          >
            Search Jobs
          </button>

          <button
            className="rounded-lg bg-[var(--color-green-forest)] px-5 py-2.5 font-medium text-white transition hover:bg-[var(--color-green-sage)]"
          >
            Find Talent
          </button>
        </div>


        {/* Mobile Menu */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg text-[var(--color-gray-slate)] lg:hidden"
          aria-label="Open navigation menu"
        >
          ☰
        </button>

      </div>
    </header>
  );
};

export default Navbar;