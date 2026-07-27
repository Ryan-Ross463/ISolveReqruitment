const advantages = [
  {
    icon: (
      <svg className="h-6 w-6 text-green-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    title: "Direct Founder Partnership",
    description:
      "You work directly with the business founder from initial consultation through to final placement. No junior account managers or hand-offs.",
  },
  {
    icon: (
      <svg className="h-6 w-6 text-green-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Deeply Vetted Shortlists",
    description:
      "Quality always takes priority over quantity. Every CV delivered is thoroughly evaluated for technical capability and cultural fit.",
  },
  {
    icon: (
      <svg className="h-6 w-6 text-green-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Agile & Personalized Service",
    description:
      "Without corporate bureaucracy, recruitment decisions happen swiftly. Communication is direct, transparent, and tailored to your timeline.",
  },
];

const BoutiqueAdvantage = () => {
  return (
    <section className="bg-cream py-16 sm:py-20 lg:py-24 border-t border-gray-medium">
      <div className="mx-auto max-w-[1700px] px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-green-sage">
            The Boutique Difference
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-slate sm:text-4xl">
            Why partner with a specialist recruiter?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-charcoal">
            Big recruitment agencies focus on volume. We focus on relationships, accuracy, and long-term retention.
          </p>
        </div>

        {/* Advantage Cards Grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {advantages.map((item, index) => (
            <div
              key={index}
              className="group relative flex flex-col justify-between rounded-2xl border border-gray-medium bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div>
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-green-sage/10">
                  {item.icon}
                </div>

                <h3 className="mt-6 text-xl font-bold text-gray-slate">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-charcoal">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center text-xs font-medium text-green-sage">
                <span>Tailored Approach</span>
                <span className="ml-1">✦</span>
              </div>
            </div>
          ))}
        </div>

        {/* Personal Founder Callout Banner */}
        <div className="mt-12 rounded-2xl bg-gray-slate p-8 text-white sm:p-10 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h3 className="text-2xl font-bold">
              Ready for a more personalized recruitment experience?
            </h3>
            <p className="mt-2 text-sm sm:text-base text-gray-200">
              Whether you need to fill a critical role or seek high-level market advice, let's connect directly.
            </p>
          </div>
          <a
            href="/contact"
            className="shrink-0 rounded-lg bg-green-sage px-6 py-3.5 font-medium text-white transition hover:opacity-90 shadow-sm cursor-pointer"
          >
            Schedule a Call
          </a>
        </div>

      </div>
    </section>
  );
};

export default BoutiqueAdvantage;