import React, { useState } from "react";

interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  salary: string;
  posted: string;
}

const SAMPLE_JOBS: Job[] = [
  {
    id: "1",
    title: "Senior Financial Manager",
    department: "Finance & Accounting",
    location: "Johannesburg (Hybrid)",
    type: "Full-Time",
    salary: "R850k - R1.1M p.a.",
    posted: "2 days ago",
  },
  {
    id: "2",
    title: "HR Business Partner",
    department: "Human Resources",
    location: "Sandton, GP",
    type: "Full-Time",
    salary: "R650k - R750k p.a.",
    posted: "Just posted",
  },
  {
    id: "3",
    title: "Lead Full-Stack Developer",
    department: "IT & Software",
    location: "Remote / Cape Town",
    type: "Full-Time",
    salary: "R900k - R1.2M p.a.",
    posted: "3 days ago",
  },
  {
    id: "4",
    title: "Operations Director",
    department: "Executive & Operations",
    location: "Pretoria, GP",
    type: "Full-Time",
    salary: "R1.3M - R1.6M p.a.",
    posted: "1 week ago",
  },
];

const FeaturedJobs: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Finance & Accounting",
    "Human Resources",
    "IT & Software",
    "Executive & Operations",
  ];

  const filteredJobs = SAMPLE_JOBS.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || job.department === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="bg-gray-light py-16 sm:py-24 border-y border-gray-medium">
      <div className="mx-auto max-w-[1700px] px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-10">
          <span className="text-xs font-semibold uppercase tracking-widest text-green-sage">
            Current Opportunities
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-gray-slate">
            Featured Vacancies
          </h2>
          <p className="mt-3 text-base text-charcoal">
            Explore active roles directly managed by our team. Fast-track your application today.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="mb-10 rounded-2xl bg-white p-4 sm:p-6 shadow-sm border border-gray-medium max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            
            {/* Search Input */}
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search job title or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-lg border border-gray-medium bg-cream px-4 py-3 text-sm text-gray-slate placeholder-gray-400 focus:border-green-sage focus:outline-none"
              />
            </div>

            {/* Category Filter */}
            <div className="sm:w-64">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full rounded-lg border border-gray-medium bg-cream px-4 py-3 text-sm text-gray-slate focus:border-green-sage focus:outline-none"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

          </div>
        </div>

        {/* Job Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <div
                key={job.id}
                className="flex flex-col justify-between rounded-xl border border-gray-medium bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md hover:border-green-sage"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="rounded-md bg-cream px-3 py-1 text-xs font-medium text-gray-slate border border-gray-medium">
                      {job.department}
                    </span>
                    <span className="text-xs text-gray-400">{job.posted}</span>
                  </div>

                  <h3 className="mt-4 text-xl font-bold text-gray-slate">
                    {job.title}
                  </h3>

                  <div className="mt-4 flex flex-wrap gap-y-2 gap-x-4 text-sm text-charcoal">
                    <div className="flex items-center gap-1.5">
                      <span>📍</span>
                      {job.location}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span>💼</span>
                      {job.type}
                    </div>
                    <div className="flex items-center gap-1.5 font-medium text-gray-slate">
                      <span>💰</span>
                      {job.salary}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-medium flex items-center justify-between">
                  <a
                    href={`/jobs/${job.id}`}
                    className="text-sm font-semibold text-green-sage hover:underline cursor-pointer"
                  >
                    View Details →
                  </a>
                  <a
                    href={`/apply/${job.id}`}
                    className="rounded-lg bg-gray-slate px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-slate/90 cursor-pointer"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12 text-charcoal bg-white rounded-xl border border-gray-medium">
              <p className="text-lg font-medium">No active vacancies found matching your search.</p>
              <p className="text-sm text-gray-400 mt-1">Try clearing your filters or submit a general CV below.</p>
            </div>
          )}
        </div>

        {/* General CV Drop Callout */}
        <div className="mt-12 max-w-4xl mx-auto rounded-2xl bg-gray-slate p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div>
            <h4 className="text-xl font-bold">Don't see a role for you right now?</h4>
            <p className="mt-1 text-sm text-gray-300">
              Submit your CV to our private database and be first in line when matching roles open up.
            </p>
          </div>
          <a
            href="/candidates"
            className="shrink-0 rounded-lg bg-green-sage px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90 cursor-pointer"
          >
            Submit General CV
          </a>
        </div>

      </div>
    </section>
  );
};

export default FeaturedJobs;