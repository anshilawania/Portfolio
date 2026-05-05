"use client";
import SectionMotion from "../components/SectionMotion";

export default function Experience() {
  return (
    <SectionMotion className="w-full max-w-4xl mx-auto py-20 px-6 flex flex-col gap-8 items-center" id="experience">
      <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-8">
        Experience
      </h2>
      {/* Responsive Experience Slider for small screens */}
      {/* Mobile Experience Slider: Only show one card at a time, correct background */}
      <div className="w-full block md:hidden">
        {(() => {
          const experiences = [
            {
              company: "Gritsa Technologies",
              title: "Software Engineer",
              period: "Feb 2025 – Current",
              details: [
                "Developed and maintained enterprise-scale full-stack applications",
                "Built scalable data pipelines and automation systems",
                "Managed CI/CD workflows and production systems",
                "Collaborated with international stakeholders",
                "Mentored interns and supported agile delivery",
              ],
            },
            {
              company: "ERP Daddy Software Solutions",
              title: "Web Developer Intern",
              period: "May 2024 – July 2024",
              details: [
                "Worked as a web development intern",
                "Contributed to building a logistics management system",
                "Developed features involving complex algorithms for container placements",
                "Supported operational workflow optimization through scalable web solutions",
              ],
            },
          ];
          const [current, setCurrent] = require('react').useState(0);
          const exp = experiences[current];
          return (
            <div className="flex items-center justify-between w-full max-w-md mx-auto">
              <button
                aria-label="Previous Experience"
                className="text-2xl px-2 py-1 text-[#00bbc4]"
                disabled={current === 0}
                onClick={() => setCurrent((c: number) => Math.max(0, c - 1))}
                style={{ opacity: current === 0 ? 0.3 : 1 }}
              >
                &#60;
              </button>
              <div className="flex flex-col gap-2 p-7 bg-zinc-900/80 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl transition-all w-full max-w-md mx-auto">
                <h3 className="text-xl font-bold gradient-text">{exp.title} <span className="gradient-text">@ {exp.company}</span></h3>
                <span className="text-zinc-400 text-base font-medium">{exp.period}</span>
                <ul className="list-disc list-outside mt-2 text-zinc-300 text-base font-medium space-y-1 pl-5">
                  {exp.details.map((d, i) => (
                    <li key={i} className="leading-snug break-words hyphens-auto">{d}</li>
                  ))}
                </ul>
              </div>
              <button
                aria-label="Next Experience"
                className="text-2xl px-2 py-1 text-[#ec4899]"
                disabled={current === experiences.length - 1}
                onClick={() => setCurrent((c) => Math.min(experiences.length - 1, c + 1))}
                style={{ opacity: current === experiences.length - 1 ? 0.3 : 1 }}
              >
                &#62;
              </button>
            </div>
          );
        })()}
      </div>
      {/* Desktop Timeline with Bullets */}
      <ol className="relative ml-4 sm:ml-4 hidden md:block">
        {/* Gritsa Technologies (Current) */}
        <li className="mb-16 ml-6 group relative pl-8">
          <span className="absolute left-0 top-0 h-full w-1 bg-[#14b8a6]/60 rounded-full" style={{ zIndex: 0 }}></span>
          <span className="absolute -left-3 flex items-center justify-center w-8 h-8 bg-gradient-to-br from-[#14b8a6] to-[#2563eb] rounded-full ring-4 ring-zinc-900/80 shadow-lg group-hover:scale-110 transition-transform" style={{ zIndex: 1 }}></span>
          <div className="flex flex-col gap-2 p-7 bg-gradient-to-br from-[#0f172a]/80 via-[#134e4a]/80 to-[#0f172a]/90 backdrop-blur-xl rounded-2xl border border-[#14b8a6]/30 shadow-2xl group-hover:shadow-[#14b8a6]/40 transition-all" style={{ zIndex: 2 }}>
            <h3 className="text-xl md:text-2xl font-bold gradient-text">Software Engineer <span className="gradient-text">@ Gritsa Technologies</span></h3>
            <span className="text-zinc-400 text-base font-medium">Feb 2025 – Current</span>
            <ul className="list-disc list-inside mt-2 text-zinc-300 text-base md:text-lg font-medium space-y-1">
              <li>Developed and maintained enterprise-scale full-stack applications</li>
              <li>Built scalable data pipelines and automation systems</li>
              <li>Managed CI/CD workflows and production systems</li>
              <li>Collaborated with international stakeholders</li>
              <li>Mentored interns and supported agile delivery</li>
            </ul>
          </div>
        </li>
        {/* ERP Daddy Software Solutions (Previous) */}
        <li className="mb-12 ml-6 group relative pl-8">
          <span className="absolute left-0 top-0 h-full w-1 bg-[#14b8a6]/60 rounded-full" style={{ zIndex: 0 }}></span>
          <span className="absolute -left-3 flex items-center justify-center w-8 h-8 bg-gradient-to-br from-[#2563eb] to-[#14b8a6] rounded-full ring-4 ring-zinc-900/80 shadow-lg group-hover:scale-110 transition-transform" style={{ zIndex: 1 }}></span>
          <div className="flex flex-col gap-2 p-7 bg-gradient-to-br from-[#0f172a]/80 via-[#134e4a]/80 to-[#0f172a]/90 backdrop-blur-xl rounded-2xl border border-[#2563eb]/30 shadow-2xl group-hover:shadow-[#2563eb]/40 transition-all" style={{ zIndex: 2 }}>
            <h3 className="text-xl md:text-2xl font-bold gradient-text">Web Developer Intern <span className="gradient-text">@ ERP Daddy Software Solutions</span></h3>
            <span className="text-zinc-400 text-base font-medium">May 2024 – July 2025</span>
            <ul className="list-disc list-inside mt-2 text-zinc-300 text-base md:text-lg font-medium space-y-1">
              <li>Worked as a web development intern</li>
              <li>Contributed to building a logistics management system</li>
              <li>Developed features involving complex algorithms for container placement and management</li>
              <li>Supported operational workflow optimization through scalable web solutions</li>
            </ul>
          </div>
        </li>
      </ol>
    </SectionMotion>
  );
}
