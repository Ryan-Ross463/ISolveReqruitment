import Navbar from "../components/layout/navbar";
import Hero from "../components/hero/Hero";

const Home = () => {
  return (
    <>
      <Navbar />

      <main className="pt-20">
        <Hero />
      </main>
    </>
  );
};

export default Home;