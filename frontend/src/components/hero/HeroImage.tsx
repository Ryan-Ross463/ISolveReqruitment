import heroImage from "../../assets/images/hero-professionals.jpg";

const HeroImage = () => {
  return (
    <div className="relative mt-6 lg:mt-0">
      {/* Glow background */}
      <div className="absolute -inset-3 sm:-inset-6 rounded-3xl bg-gray-slate/10 blur-2xl sm:blur-3xl" />

      {/* Image container */}
      <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-md">
        <img
          src={heroImage}
          alt="Professional recruitment team"
          className="h-[320px] sm:h-[450px] lg:h-[600px] w-full object-cover transition duration-[3000ms] ease-in-out hover:scale-105"
        />

        {/* Navy overlay */}
        <div className="absolute inset-0 bg-gray-slate/15" />
      </div>

      {/* Floating connection card */}
      <div className="absolute -bottom-4 left-4 sm:-bottom-6 sm:-left-6 z-10 max-w-[calc(100%-2rem)] rounded-xl bg-white p-4 sm:px-6 sm:py-4 shadow-md">
        <p className="text-xs font-semibold text-gray-slate sm:text-sm">
          Connected Talent Network
        </p>

        <p className="mt-0.5 text-[10px] text-black-deep sm:mt-1 sm:text-xs">
          Companies ↔ Candidates ↔ Opportunities
        </p>
      </div>
    </div>
  );
};

export default HeroImage;