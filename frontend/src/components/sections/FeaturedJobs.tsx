const featuredJobs = [
  {
    id: 1,
    title: "Senior Full Stack Engineer",
    company: "TechScale Solutions",
    location: "Johannesburg (Hybrid)",
    type: "Full-Time",
    salary: "R 85,000 - R 110,000 / month",
    tags: ["React", "Node.js", "TypeScript", "AWS"],
    posted: "2 days ago",
  },
  {
    id: 2,
    title: "Lead UX/UI Designer",
    company: "Innovate Digital",
    location: "Cape Town (Remote)",
    type: "Full-Time",
    salary: "R 70,000 - R 90,000 / month",
    tags: ["Figma", "Design Systems", "User Research"],
    posted: "1 day ago",
  },
  {
    id: 3,
    title: "DevOps Specialist",
    company: "FinTech Global",
    location: "Pretoria (On-site)",
    type: "Contract",
    salary: "R 650 - R 800 / hour",
    tags: ["Kubernetes", "Docker", "CI/CD", "Terraform"],
    posted: "Just now",
  },
];

const FeaturedJobs = () => {
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

        {/* Job Cards Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredJobs.map((job) => (
            <div
              key={job.id}
              className="group relative flex flex-col justify-between rounded-xl border border-gray-medium bg-cream/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg"
            >
              <div>
                {/* Meta Header */}
                <div className="flex items-center justify-between text-xs font-medium text-charcoal/70">
                  <span className="rounded-full bg-cream px-3 py-1 text-gray-slate font-semibold border border-gray-medium">
                    {job.type}
                  </span>
                  <span>{job.posted}</span>
                </div>

                {/* Job Title & Company */}
                <h3 className="mt-4 text-xl font-bold text-gray-slate group-hover:text-green-sage transition-colors">
                  {job.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-charcoal">
                  {job.company}
                </p>

                {/* Details */}
                <div className="mt-4 space-y-1.5 text-xs text-charcoal/80">
                  <div className="flex items-center gap-1.5">
                    <span>📍</span> {job.location}
                  </div>
                  <div className="flex items-center gap-1.5 font-medium text-gray-slate">
                    <span>💰</span> {job.salary}
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

      </div>
    </section>
  );
};

export default FeaturedJobs;