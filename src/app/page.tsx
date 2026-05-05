import dynamic from "next/dynamic";
const Hero = dynamic(() => import("../sections/Hero"));
const About = dynamic(() => import("../sections/About"));
const Skills = dynamic(() => import("../sections/Skills"));
const Experience = dynamic(() => import("../sections/Experience"));
const Projects = dynamic(() => import("../sections/Projects"));
const Contact = dynamic(() => import("../sections/Contact"));

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen w-full bg-black font-sans dark:bg-black">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      {/* <Education /> removed */}
      <Contact />
    </main>
  );
}
