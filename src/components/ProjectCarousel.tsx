"use client";
const projects = [
  {
    title: "Enterprise Smart Transfer Platform",
    description:
      "Automated enterprise-grade file transfer and workflow system. Secure scheduling, event-driven synchronization, dashboards, diagnostics.",
    stack: ["Node.js", ".NET Core", "PostgreSQL", "AWS", "CI/CD"],
    image: "/Smart Tranfer.png",
  },
  {
    title: "Autonomous AI Product Manager + Developer Workspace",
    description:
      "AI-powered startup execution platform. PRDs, sprint planning, architecture generation, SaaS deployment automation.",
    stack: ["Next.js", "AI", "Node.js", "Supabase", "AWS"],
    image: "/PM.png",
  },
  {
    title: "Personal Data Exposure Dashboard",
    description:
      "Privacy-focused digital footprint and breach monitoring platform. Risk scoring, data exposure intelligence, automated dashboards.",
    stack: ["React", "Node.js", "Redshift", "Airflow"],
    image: "/Cyber.jpg",
  },
];


import { useState } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


export default function ProjectCarousel() {
  const [current, setCurrent] = useState(0);
  // Responsive: slider for mobile, grid for desktop
  return (
    <div className="w-full flex flex-col items-center">
      {/* Mobile slider */}
      <div className="block md:hidden w-full">
        <div className="flex items-center justify-between w-full max-w-sm mx-auto">
          <button
            aria-label="Previous Project"
            className="text-2xl px-2 py-1 text-[#00bbc4]"
            disabled={current === 0}
            onClick={() => setCurrent((c) => Math.max(0, c - 1))}
            style={{ opacity: current === 0 ? 0.3 : 1 }}
          >
            <FaChevronLeft />
          </button>
          <div
            key={projects[current].title}
            className="flex flex-col items-center border-2 border-white/30 shadow-2xl rounded-3xl overflow-hidden min-h-[400px] max-h-[440px] max-w-[420px] w-[370px] bg-zinc-900/80 backdrop-blur-xl transition-transform duration-300"
          >
            <div className="w-full h-56 relative">
              <Image
                src={projects[current].image}
                alt={projects[current].title}
                fill
                style={{ objectFit: "cover" }}
                className="transition-all duration-500"
                sizes="(max-width: 768px) 100vw, 370px"
                priority
              />
            </div>
            <div className="flex-1 flex flex-col gap-2 items-center text-center px-4 py-4 w-full">
              <h3 className="text-xl font-bold gradient-text mb-1">
                {projects[current].title}
              </h3>
              <p className="text-white text-sm font-medium mb-1">
                {projects[current].description}
              </p>
              <div className="flex flex-wrap gap-2 mt-1 justify-center">
                {projects[current].stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 rounded-full border border-white/30 text-pink-400 text-xs font-semibold shadow bg-pink-400/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <button
            aria-label="Next Project"
            className="text-2xl px-2 py-1 text-[#ec4899]"
            disabled={current === projects.length - 1}
            onClick={() => setCurrent((c) => Math.min(projects.length - 1, c + 1))}
            style={{ opacity: current === projects.length - 1 ? 0.3 : 1 }}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
      {/* Desktop grid */}
      <div className="hidden md:grid grid-cols-3 gap-10 w-full">
        {projects.map((project) => (
          <div
            key={project.title}
            className="flex flex-col items-center border-2 border-white/30 shadow-2xl rounded-3xl p-0 md:p-0 overflow-hidden min-h-[380px] max-w-[480px] w-full bg-zinc-900/80 backdrop-blur-xl transition-transform duration-300 hover:scale-105 hover:shadow-pink-500/40 hover:shadow-2xl"
          >
            <div className="w-full h-44 relative">
              <Image
                src={project.image}
                alt={project.title}
                fill
                style={{ objectFit: "cover" }}
                className="transition-all duration-500"
                sizes="(max-width: 768px) 100vw, 400px"
                priority
              />
            </div>
            <div className="flex-1 flex flex-col gap-3 items-center text-center px-6 py-6 w-full">
              <h3 className="text-2xl font-bold gradient-text mb-1">
                {project.title}
              </h3>
              <p className="text-white text-base md:text-lg font-medium mb-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-2 justify-center">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full border border-white/30 text-pink-400 text-xs font-semibold shadow bg-pink-400/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
