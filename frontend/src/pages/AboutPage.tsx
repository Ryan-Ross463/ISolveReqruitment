import React, { useEffect, useState } from 'react';
import Navbar from '../components/layout/navbar';
import Footer from '../components/layout/Footer';

// Define an interface matching your Java CompanyStatsDto fields
interface CompanyStats {
  popiaCompliance: string;
  headquarters: string;
  searchType: string;
  partnershipModel: string;
}

const AboutPage = () => {
  const [stats, setStats] = useState<CompanyStats | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Fetch data from your Java Spring Boot backend endpoint
    fetch('http://localhost:8080/api/about/stats')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch company stats');
        }
        return res.json();
      })
      .then((data: CompanyStats) => {
        setStats(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error connecting to backend:', err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="bg-cream text-charcoal min-h-screen flex flex-col">
      
      {/* Top Navigation */}
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative px-6 py-20 lg:px-8 lg:py-28 max-w-[1700px] mx-auto w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-medium/30 text-gray-slate text-xs font-semibold uppercase tracking-wider mb-6">
              <span>About iSolve Recruitment</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-slate leading-[1.1]">
              Redefining boutique recruitment across South Africa.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-charcoal/80 leading-relaxed">
              We aren’t a volume-driven placement mill. We are strategic talent partners dedicated to connecting exceptional professionals with forward-thinking organizations in Gauteng and beyond.
            </p>
          </div>
        </section>

        {/* Mission & Values Grid */}
        <section className="border-t border-gray-medium bg-white px-6 py-20 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-[1700px]">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              
              {/* Value 1 */}
              <div className="p-8 rounded-2xl bg-cream border border-gray-medium/60 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-gray-slate text-white flex items-center justify-center font-bold text-lg mb-6">
                    01
                  </div>
                  <h3 className="text-xl font-semibold text-gray-slate">Boutique Approach</h3>
                  <p className="mt-4 text-sm leading-relaxed text-charcoal/80">
                    Every organization has a unique culture and technical DNA. We deep-dive into your operational environment to ensure every placement is a seamless long-term cultural and technical fit.
                  </p>
                </div>
              </div>

              {/* Value 2 */}
              <div className="p-8 rounded-2xl bg-cream border border-gray-medium/60 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-green-sage text-white flex items-center justify-center font-bold text-lg mb-6">
                    02
                  </div>
                  <h3 className="text-xl font-semibold text-gray-slate">Market Expertise</h3>
                  <p className="mt-4 text-sm leading-relaxed text-charcoal/80">
                    Rooted in South Africa, we understand the distinct regulatory, economic, and talent landscapes—ensuring compliance with local standards like POPIA and deep industry insight.
                  </p>
                </div>
              </div>

              {/* Value 3 */}
              <div className="p-8 rounded-2xl bg-cream border border-gray-medium/60 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-gray-slate text-white flex items-center justify-center font-bold text-lg mb-6">
                    03
                  </div>
                  <h3 className="text-xl font-semibold text-gray-slate">Absolute Transparency</h3>
                  <p className="mt-4 text-sm leading-relaxed text-charcoal/80">
                    Clear communication forms the foundation of our client and candidate relationships. No hidden fees, no ghosting—just honest, straightforward talent advisory.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Stats / Impact Bar (Dynamically populated from Spring Boot) */}
        <section className="border-t border-gray-medium px-6 py-16 lg:px-8 bg-cream">
          <div className="mx-auto max-w-[1700px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
            
            <div className="p-6">
              <p className="text-2xl lg:text-3xl font-bold text-gray-slate min-h-[2.5rem] flex items-center justify-center">
                {loading ? "..." : stats?.popiaCompliance}
              </p>
              <p className="mt-2 text-sm text-charcoal/70 font-medium uppercase tracking-wider">POPIA Compliant</p>
            </div>

            <div className="p-6">
              <p className="text-2xl lg:text-3xl font-bold text-green-sage min-h-[2.5rem] flex items-center justify-center">
                {loading ? "..." : stats?.headquarters}
              </p>
              <p className="mt-2 text-sm text-charcoal/70 font-medium uppercase tracking-wider">Headquartered Hub</p>
            </div>

            <div className="p-6">
              <p className="text-xl lg:text-2xl font-bold text-gray-slate min-h-[2.5rem] flex items-center justify-center">
                {loading ? "..." : stats?.searchType}
              </p>
              <p className="mt-2 text-sm text-charcoal/70 font-medium uppercase tracking-wider">Search Strategy</p>
            </div>

            <div className="p-6">
              <p className="text-xl lg:text-2xl font-bold text-green-sage min-h-[2.5rem] flex items-center justify-center">
                {loading ? "..." : stats?.partnershipModel}
              </p>
              <p className="mt-2 text-sm text-charcoal/70 font-medium uppercase tracking-wider">Operating Model</p>
            </div>

          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
};

export default AboutPage;