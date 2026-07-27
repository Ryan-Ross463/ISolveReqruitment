import Navbar from "../components/layout/navbar";
import Hero from "../components/hero/Hero";
import DualPathways from "../components/sections/DualPathways";
import FeaturedJobs from "../components/sections/FeaturedJobs";

const Home = () => {
  return (
    <>
      <Navbar />

      <main className="pt-20">
        <Hero />
        <DualPathways />
        <FeaturedJobs />
      </main>
    </>
  );
};

export default Home;