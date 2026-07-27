const DualPathways = () => {
  return (
    <section className="bg-cream py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1700px] px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-slate sm:text-4xl">
            Tailored recruitment solutions for both sides of opportunity
          </h2>
          <p className="mt-4 text-base sm:text-lg text-charcoal">
            Whether you are looking to strengthen your organization or take the next step in your career, we provide dedicated, personal guidance.
          </p>
        </div>

        {/* Dual Cards Grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
          
          {/* Pathway 1: For Employers */}
          <div className="group relative flex flex-col justify-between rounded-2xl border border-gray-medium bg-white p-8 sm:p-10 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div>
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gray-slate/10 text-gray-slate">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1e-10M9 11h1e-10M12 7h1e-10M12 11h1e-10M15 7h1e-10M15 11h1e-10" />
                </svg>
              </div>
              <span className="ml-3 text-xs font-semibold uppercase tracking-widest text-gray-slate">
                For Employers
              </span>

              <h3 className="mt-6 text-2xl font-bold text-gray-slate sm:text-3xl">
                Looking to hire exceptional talent?
              </h3>

              <p className="mt-4 text-base leading-relaxed text-charcoal">
                Partner directly with a dedicated recruitment specialist. We take the time to understand your company culture, technical requirements, and long-term vision.
              </p>

              <ul className="mt-6 space-y-2.5 text-sm font-medium text-charcoal">
                <li className="flex items-center gap-2">
                  <span className="text-green-sage">✓</span> Direct founder partnership & single point of contact
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-sage">✓</span> Rigorous, pre-vetted candidate shortlists
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-sage">✓</span> Tailored executive & specialist search
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100">
              <a
                href="/employers"
                className="inline-flex w-full items-center justify-center rounded-lg bg-gray-slate px-6 py-3.5 text-base font-medium text-white transition hover:bg-gray-slate/90 shadow-sm"
              >
                Find Talent
              </a>
            </div>
          </div>

          {/* Pathway 2: For Candidates */}
          <div className="group relative flex flex-col justify-between rounded-2xl border border-gray-medium bg-white p-8 sm:p-10 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div>
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-green-sage/15 text-green-sage">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <span className="ml-3 text-xs font-semibold uppercase tracking-widest text-green-sage">
                For Candidates
              </span>

              <h3 className="mt-6 text-2xl font-bold text-gray-slate sm:text-3xl">
                Ready to advance your career?
              </h3>

              <p className="mt-4 text-base leading-relaxed text-charcoal">
                Explore curated opportunities with leading organizations. We support you through every stage from portfolio review to salary negotiation.
              </p>

              <ul className="mt-6 space-y-2.5 text-sm font-medium text-charcoal">
                <li className="flex items-center gap-2">
                  <span className="text-green-sage">✓</span> Confidential job matching & guidance
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-sage">✓</span> Direct access to hiring managers
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-sage">✓</span> Interview prep & offer negotiation support
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100">
              <a
                href="/jobs"
                className="inline-flex w-full items-center justify-center rounded-lg bg-green-sage px-6 py-3.5 text-base font-medium text-white transition hover:opacity-90 shadow-sm"
              >
                Explore Jobs
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DualPathways;