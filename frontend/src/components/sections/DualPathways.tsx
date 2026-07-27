import React from "react";

const DualPathways: React.FC = () => {
  return (
    <section className="bg-cream py-16 sm:py-24">
      <div className="mx-auto max-w-[1700px] px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-slate">
            How Can We Help You Today?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-charcoal">
            Whether you are looking to secure executive talent or step into your next career milestone, we offer dedicated, single-point-of-contact guidance.
          </p>
        </div>

        {/* Pathway Cards Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          
          {/* Card 1: For Employers */}
          <div className="group relative flex flex-col justify-between rounded-2xl border border-gray-medium bg-white p-8 sm:p-10 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <div>
              <span className="inline-block rounded-full bg-gray-slate/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gray-slate">
                For Employers
              </span>
              <h3 className="mt-6 text-2xl sm:text-3xl font-bold text-gray-slate">
                Looking to Hire Exceptional Talent?
              </h3>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-charcoal">
                Partner directly with a senior specialist who understands your industry. Skip the automated screening algorithms and get hand-vetted, high-calibre candidates tailored to your culture.
              </p>
              
              <ul className="mt-6 space-y-3 text-sm text-charcoal">
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-green-sage" />
                  Direct partnership with founder & senior recruiters
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-green-sage" />
                  Tailored headhunting & deep candidate vetting
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-green-sage" />
                  Transparent, boutique search process
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-medium">
              <a
                href="/employers"
                className="inline-flex w-full items-center justify-center rounded-lg bg-gray-slate px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-gray-slate/90 cursor-pointer shadow-sm"
              >
                Request Talent & Consultation
              </a>
            </div>
          </div>

          {/* Card 2: For Candidates */}
          <div className="group relative flex flex-col justify-between rounded-2xl border border-gray-medium bg-white p-8 sm:p-10 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <div>
              <span className="inline-block rounded-full bg-green-sage/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-green-sage">
                For Job Seekers
              </span>
              <h3 className="mt-6 text-2xl sm:text-3xl font-bold text-gray-slate">
                Ready for Your Next Career Move?
              </h3>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-charcoal">
                Discover active opportunities across key sectors or register your CV in our private talent pool for unadvertised executive roles.
              </p>

              <ul className="mt-6 space-y-3 text-sm text-charcoal">
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-gray-slate" />
                  Access to exclusive & confidential roles
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-gray-slate" />
                  Personalized career advice & interview preparation
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-gray-slate" />
                  Direct representation to hiring managers
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-medium flex flex-col sm:flex-row gap-3">
              <a
                href="/jobs"
                className="inline-flex flex-1 items-center justify-center rounded-lg bg-green-sage px-6 py-3.5 text-sm font-semibold text-white transition hover:opacity-90 cursor-pointer shadow-sm"
              >
                Explore Open Jobs
              </a>
              <a
                href="/candidates"
                className="inline-flex flex-1 items-center justify-center rounded-lg border border-gray-slate px-6 py-3.5 text-sm font-semibold text-gray-slate transition hover:bg-gray-slate hover:text-white cursor-pointer"
              >
                Submit Your CV
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DualPathways;