import { useEffect, useState } from "react";

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

const FeaturedJobs = () => {
  const [vacancies, setVacancies] = useState<Vacancy[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("http://localhost:8080/api/vacancies")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch vacancies");
        }
        return res.json();
      })
      .then((data: Vacancy[]) => {
        setVacancies(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching vacancies:", err);
        setError("Could not load featured positions.");
        setLoading(false);
      });
  }, []);

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24 border-t border-gray-medium">
      <div className="mx-auto max-w-[1700px] px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-green-sage">
              Live Opportunities
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-slate sm:text-4xl">
              Featured Positions
            </h2>
            <p className="mt-2 text-base text-charcoal">
              Hand-picked roles from trusted hiring partners.
            </p>
          </div>

          <a
            href="/jobs"
            className="group inline-flex items-center gap-2 font-medium text-gray-slate transition hover:text-green-sage"
          >
            View all open roles 
            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </a>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="mt-12 text-center text-sm font-medium text-charcoal/70">
            Loading live opportunities...
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="mt-12 text-center text-sm font-medium text-red-500">
            {error}
          </div>
        )}

        {/* Job Cards Grid */}
        {!loading && !error && (
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {vacancies.map((job) => (
              <div
                key={job.id}
                className="group relative flex flex-col justify-between rounded-xl border border-gray-medium bg-cream/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg"
              >
                <div>
                  {/* Meta Header */}
                  <div className="flex items-center justify-between text-xs font-medium text-charcoal/70">
                    <span className="rounded-full bg-cream px-3 py-1 text-gray-slate font-semibold border border-gray-medium">
                      {job.employmentType}
                    </span>
                    <span>{job.postedTimeAgo}</span>
                  </div>

                  {/* Job Title & Company */}
                  <h3 className="mt-4 text-xl font-bold text-gray-slate group-hover:text-green-sage transition-colors">
                    {job.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-charcoal">
                    {job.companyName}
                  </p>

                  {/* Details with SVGs */}
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

                  {/* Tags */}
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {job.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded bg-white px-2 py-0.5 text-[11px] font-medium text-gray-slate border border-gray-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action */}
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
    </section>
  );
};

export default FeaturedJobs;