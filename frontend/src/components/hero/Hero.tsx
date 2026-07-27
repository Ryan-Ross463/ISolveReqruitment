import HeroImage from "./HeroImage";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gray-light py-16 lg:py-24">
      {/* Removed unnecessary 'relative' from grid container */}
      <div className="mx-auto grid max-w-[1700px] items-center gap-12 px-6 lg:grid-cols-2 lg:px-8">

        {/* Content */}
        <div className="relative z-10 max-w-xl">
          {/* Boutique Subtitle Badge */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-green-sage/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-green-sage">
            <span>✦</span> Boutique Recruitment Partner
          </div>

          <h1 className="text-4xl font-bold leading-tight text-gray-slate sm:text-5xl lg:text-6xl">
            Recruitment solutions built around people and opportunity.
          </h1>

          <p className="mt-6 text-base leading-relaxed text-charcoal sm:text-lg">
            Work directly with a dedicated specialist committed to connecting exceptional talent with organisations through personalized, strategic recruitment.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <button className="rounded-lg bg-green-sage px-6 py-3.5 font-medium text-white transition hover:opacity-90 cursor-pointer shadow-sm">
              Find Talent
            </button>

            <button className="rounded-lg border border-gray-slate px-6 py-3.5 font-medium text-gray-slate transition hover:bg-gray-slate hover:text-white cursor-pointer">
              Search Jobs
            </button>
          </div>
        </div>

        {/* Image */}
        <HeroImage />

      </div>
    </section>
  );
};

export default Hero;