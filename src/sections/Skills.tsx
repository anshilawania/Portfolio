"use client";
import SectionMotion from "../components/SectionMotion";
import { FaAws, FaNodeJs, FaReact, FaDatabase, FaDocker } from "react-icons/fa";
import { SiTypescript, SiJavascript, SiAngular, SiNextdotjs, SiDotnet, SiPostgresql, SiSupabase } from "react-icons/si";

const skills = [
  { name: "Angular", icon: <SiAngular className="text-[#dd0031]" /> },
  { name: "React", icon: <FaReact className="text-[#61dafb]" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-[#fff]" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-[#f7df1e]" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-[#3178c6]" /> },
  { name: ".NET Core", icon: <SiDotnet className="text-[#512bd4]" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-[#3c873a]" /> },
  { name: "REST APIs", icon: <FaReact className="text-[#61dafb]" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-[#336791]" /> },
  { name: "Redshift", icon: <FaDatabase className="text-[#8c4fff]" /> },
  { name: "SQL", icon: <FaDatabase className="text-[#f29111]" /> },
  { name: "Supabase", icon: <SiSupabase className="text-[#3ecf8e]" /> },
  { name: "AWS", icon: <FaAws className="text-[#ff9900]" /> },
  { name: "CI/CD", icon: <FaReact className="text-[#61dafb]" /> },
  { name: "Airflow", icon: <FaReact className="text-[#017cee]" /> },
];

export default function Skills() {
  return (
    <SectionMotion id="skills" className="w-full max-w-5xl mx-auto py-20 px-6 flex flex-col items-center relative overflow-hidden">
      {/* Animated background gradients and particles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/3 w-[320px] h-[320px] bg-gradient-to-tr from-[#00bbc4]/30 via-[#ec4899]/20 to-[#23272f]/0 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[220px] h-[220px] bg-gradient-to-br from-[#ec4899]/30 via-[#23272f]/0 to-[#00bbc4]/10 rounded-full blur-2xl animate-pulse" />
      </div>
      <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-8 z-10">
        Skills
      </h2>
      <div className="grid w-full z-10 gap-8 justify-center"
        style={{
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))'
        }}
      >
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center justify-center gap-3 p-6 rounded-2xl bg-zinc-900/70 backdrop-blur-md border border-zinc-800 shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-200 group"
          >
            <span className="text-4xl md:text-5xl drop-shadow-glow group-hover:animate-bounce">
              {skill.icon}
            </span>
            <span className="text-lg md:text-xl font-semibold text-zinc-200 dark:text-zinc-100">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </SectionMotion>
  );
}
