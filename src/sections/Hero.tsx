"use client";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="relative flex flex-col md:flex-row items-center justify-center min-h-[90vh] w-full px-6 py-24 md:py-16 bg-gradient-to-br from-[#18181b] via-[#23272f] to-[#0a0a0a] dark:bg-black/90 overflow-hidden gap-0">
      {/* Animated background gradients and particles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/3 w-[400px] h-[400px] bg-gradient-to-tr from-[#00bbc4]/30 via-[#ec4899]/20 to-[#23272f]/0 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-gradient-to-br from-[#ec4899]/30 via-[#23272f]/0 to-[#00bbc4]/10 rounded-full blur-2xl animate-pulse" />
      </div>
      {/* Info (left) */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
        className="relative z-10 flex-1 flex flex-col items-center md:items-start gap-4 md:gap-5 text-center md:text-left md:mr-0 lg:ml-[12%] md:ml-8 sm:ml-0"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold gradient-text drop-shadow-lg">
          Anshi Lawania
        </h1>
        <h2 className="text-xl md:text-3xl font-semibold gradient-text tracking-wide">
          Full Stack Software Engineer
        </h2>
        <p className="max-w-xl text-lg md:text-xl text-zinc-400 dark:text-zinc-300 font-medium mt-2">
          Experienced in building scalable enterprise applications, AI-powered platforms, and workflow automation systems across product innovation.
        </p>
        <div className="flex gap-4 mt-4">
          <a
            href="https://www.linkedin.com/in/anshilawania/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-3 gradient-text border-2 border-white/40 hover:scale-110 transition-all duration-200 shadow-lg"
            style={{ background: 'var(--main-gradient)' }}
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-2xl" style={{ color: '#ec4899' }} />
          </a>
          <a
            href="https://github.com/anshilawania"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-3 gradient-text border-2 border-white/40 hover:scale-110 transition-all duration-200 shadow-lg"
            style={{ background: 'var(--main-gradient)' }}
            aria-label="GitHub"
          >
            <FaGithub className="text-2xl" style={{ color: '#ec4899' }} />
          </a>
        </div>
        <div className="flex gap-4 mt-6">
          <a
            href="/resume-anshi-lawania.pdf"
            download
            className="px-8 py-3 rounded-full font-bold shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-200 border-2 border-white/40"
          >
            <span className="gradient-text">Download Resume</span>
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-full font-bold hover:scale-105 hover:shadow-2xl transition-transform duration-200 border-2 border-white/40"
          >
            <span className="gradient-text">Contact Me</span>
          </a>
        </div>
      </motion.div>
      {/* Photo (right) */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.1, ease: [0.4, 0, 0.2, 1] }}
        className="relative z-10 flex-1 flex items-end justify-center mt-8 md:mt-0 md:ml-0"
      >
        <div className="relative w-[260px] h-[420px] md:w-[320px] md:h-[520px] flex items-end justify-center bg-transparent p-0 border-none shadow-none">
          <Image
            src="/anshi.png"
            alt="Anshi Lawania standing photo"
            fill
            sizes="(max-width: 768px) 100vw, 320px"
            style={{ objectFit: "cover" }}
            className="rounded-2xl"
            priority
          />
        </div>
      </motion.div>
    </section>
  );
}
