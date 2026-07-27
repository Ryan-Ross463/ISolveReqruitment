import Navbar from "../components/layout/navbar";
import Hero from "../components/hero/Hero";
import DualPathways from "../components/sections/DualPathways";
import FeaturedJobs from "../components/sections/FeaturedJobs";
import BoutiqueAdvantage from "../components/sections/BoutiqueAdvantage";
import Footer from "../components/layout/Footer";

const Home = () => {
  return (
    <>
      <Navbar />

      <main className="pt-20">
        <Hero />
        <DualPathways />
        <FeaturedJobs />
        <BoutiqueAdvantage />
      </main>

      <Footer />
    </>
  );
};

export default Home;