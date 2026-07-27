import NetworkBackground from "./NetworkBackground";
import HeroImage from "./HeroImage";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[var(--color-gray-light)]">

      {/* Animated Network */}
      <NetworkBackground />


      <div className="relative mx-auto grid min-h-screen max-w-[1700px] items-center gap-12 px-6 lg:grid-cols-2 lg:px-8">

        {/* Content */}
        <div className="relative z-10 max-w-xl">

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-green-forest)]">
            Connecting Talent. Building Futures.
          </p>


          <h1 className="text-5xl font-bold leading-tight text-[var(--color-gray-slate)] lg:text-6xl">
            Recruitment solutions built around people and opportunity.
          </h1>


          <p className="mt-6 text-lg leading-relaxed text-[var(--color-charcoal)]">
            We connect organisations with exceptional talent through strategic recruitment solutions designed for long-term success.
          </p>


          <div className="mt-8 flex gap-4">

            <button className="rounded-lg bg-[var(--color-green-forest)] px-6 py-3 font-medium text-white transition hover:bg-[var(--color-green-sage)]">
              Find Talent
            </button>


            <button className="rounded-lg border border-[var(--color-gray-slate)] px-6 py-3 font-medium text-[var(--color-gray-slate)] transition hover:bg-[var(--color-gray-slate)] hover:text-white">
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