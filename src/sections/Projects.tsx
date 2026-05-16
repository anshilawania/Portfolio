
import dynamic from "next/dynamic";
import SectionMotion from "../components/SectionMotion";
const ProjectCarousel = dynamic(() => import("../components/ProjectCarousel"));

export default function Projects() {
  return (
    <SectionMotion id="projects" className="w-full max-w-5xl mx-auto py-20 px-6 flex flex-col gap-8 items-center">
      <h2 className="text-3xl md:text-5xl font-bold gradient-text">
        Projects
      </h2>
      <ProjectCarousel />
    </SectionMotion>
  );
}
