import Navbar from "../components/layout/navbar";
import Hero from "../components/home/hero";
import TrustedCompanies from "../components/home/trustedCompanies";
import About from "../components/home/about";
import Services from "../components/home/services";
import RecruitmentProcess from "../components/home/recruitmentProcess";
import FeaturedVacancies from "../components/home/featuredVacancies";
import Statistics from "../components/home/statistics";
import Testimonials from "../components/home/testimonials";
import CallToAction from "../components/home/callToAction";
import Contact from "../components/home/contact";
import Footer from "../components/layout/footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <TrustedCompanies />
        <About />
        <Services />
        <RecruitmentProcess />
        <FeaturedVacancies />
        <Statistics />
        <Testimonials />
        <CallToAction />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
