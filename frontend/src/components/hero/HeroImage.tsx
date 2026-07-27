import heroImage from "../../assets/images/hero-professionals.jpg";


const HeroImage = () => {
  return (
    <div className="relative">

      {/* Glow background */}
      <div
        className="
          absolute
          -inset-6
          rounded-3xl
          bg-[var(--color-gray-slate)]/10
          blur-3xl
        "
      />


      {/* Image container */}
      <div
        className="
          relative
          overflow-hidden
          rounded-3xl
          shadow-[var(--shadow-md)]
        "
      >

        <img
          src={heroImage}
          alt="Professional recruitment team"
          className="
            h-[600px]
            w-full
            object-cover
            transition
            duration-[3000ms]
            ease-in-out
            hover:scale-105
          "
        />


        {/* Navy overlay */}
        <div
          className="
            absolute
            inset-0
            bg-[var(--color-gray-slate)]/15
          "
        />

      </div>


      {/* Floating connection card */}
      <div
        className="
          absolute
          -bottom-6
          -left-6
          rounded-xl
          bg-white
          px-6
          py-4
          shadow-[var(--shadow-md)]
        "
      >

        <p className="text-sm font-semibold text-[var(--color-gray-slate)]">
          Connected Talent Network
        </p>

        <p className="mt-1 text-xs text-[var(--color-black-deep)]">
          Companies ↔ Candidates ↔ Opportunities
        </p>

      </div>


    </div>
  );
};


export default HeroImage;