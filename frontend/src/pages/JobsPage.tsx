import { useEffect, useState } from "react";
import Navbar from '../components/layout/navbar';
import Footer from '../components/layout/Footer';

export interface Vacancy {
  id: number;
  title: string;
  companyName: string;
  location: string;
  salaryRange: string;
  employmentType: string;
  postedTimeAgo: string;
  tags: string[];
}

export default function JobsPage() {
  const [vacancies, setVacancies] = useState<Vacancy[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  // Search & Filter state
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("All");

  useEffect(() => {
    fetch("http://localhost:8080/api/vacancies")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch vacancies");
        return res.json();
      })
      .then((data: Vacancy[]) => {
        setVacancies(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching vacancies:", err);
        setError("Could not load job listings.");
        setLoading(false);
      });
  }, []);

  // Filter logic
  const filteredVacancies = vacancies.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.companyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesType =
      selectedType === "All" || job.employmentType === selectedType;

    return matchesSearch && matchesType;
  });

  return (
    <div className="bg-cream/20 min-h-screen flex flex-col justify-between">
      <div>
        <Navbar />
        
        <div className="mx-auto max-w-[1700px] px-6 lg:px-8 py-12 sm:py-16">
          
          {/* Header */}
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-green-sage">
              Explore Careers
            </span>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-slate sm:text-4xl">
              Current Openings
            </h1>
            <p className="mt-2 text-base text-charcoal">
              Browse active roles curated directly by our recruitment specialists.
            </p>
          </div>

          {/* Search & Filter Bar */}
          <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between bg-white p-4 rounded-xl border border-gray-medium shadow-sm">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search by title, technology, location, or company..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-green-sage focus:outline-none focus:ring-1 focus:ring-green-sage"
              />
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-medium text-charcoal/70">Type:</span>
              {["All", "Full-Time", "Contract"].map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                    selectedType === type
                      ? "bg-gray-slate text-white"
                      : "bg-gray-100 text-charcoal/80 hover:bg-gray-200"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Loading / Error / Empty States */}
          {loading && (
            <div className="mt-12 text-center text-sm font-medium text-charcoal/70">
              Loading active listings...
            </div>
          )}

          {error && (
            <div className="mt-12 text-center text-sm font-medium text-red-500">
              {error}
            </div>
          )}

          {!loading && !error && filteredVacancies.length === 0 && (
            <div className="mt-12 text-center py-12 bg-white rounded-xl border border-gray-medium">
              <p className="text-gray-slate font-medium">No roles match your search filters.</p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedType("All");
                }}
                className="mt-3 text-xs font-semibold text-green-sage hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}

          {/* Job Grid */}
          {!loading && !error && (
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredVacancies.map((job) => (
                <div
                  key={job.id}
                  className="group relative flex flex-col justify-between rounded-xl border border-gray-medium bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs font-medium text-charcoal/70">
                      <span className="rounded-full bg-cream px-3 py-1 text-gray-slate font-semibold border border-gray-medium">
                        {job.employmentType}
                      </span>
                      <span>{job.postedTimeAgo}</span>
                    </div>

                    <h3 className="mt-4 text-xl font-bold text-gray-slate group-hover:text-green-sage transition-colors">
                      {job.title}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-charcoal">
                      {job.companyName}
                    </p>

                    <div className="mt-4 space-y-2 text-xs text-charcoal/80">
                      <div className="flex items-center gap-2">
                        <svg className="h-4 w-4 shrink-0 text-gray-slate" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>{job.location}</span>
                      </div>

                      <div className="flex items-center gap-2 font-medium text-gray-slate">
                        <svg className="h-4 w-4 shrink-0 text-green-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{job.salaryRange}</span>
                      </div>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {job.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded bg-cream/50 px-2 py-0.5 text-[11px] font-medium text-gray-slate border border-gray-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-200/60">
                    <a
                      href={`/jobs/${job.id}`}
                      className="relative inline-flex w-full items-center justify-center rounded-lg border border-gray-slate px-4 py-2 text-sm font-medium text-gray-slate transition duration-200 hover:bg-gray-slate hover:text-white"
                    >
                      Apply Now
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </div>

      <Footer />
    </div>
  );
}