import SectionMotion from "../components/SectionMotion";

export default function About() {
  return (
    <SectionMotion id="about" className="w-full max-w-4xl mx-auto py-20 px-6 flex flex-col gap-8 items-center">
      <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-4">
        About Me
      </h2>
      <div className="text-lg md:text-xl text-zinc-300 dark:text-zinc-300 font-medium text-center max-w-2xl">
        <p>
          I am a full stack software engineer with a passion for building scalable enterprise applications, AI-powered platforms, and workflow automation systems. I have done B.Tech in Computer Science from Sharda University Agra. My journey has led me to my current role at Gritsa Technologies.
        </p>
        <p className="mt-4">
          I thrive in fast-paced, innovative environments, collaborating with international teams and mentoring others. My technical strengths span modern frontend frameworks, robust backend systems, and cloud-native DevOps.
        </p>
      </div>
    </SectionMotion>
  );
}
