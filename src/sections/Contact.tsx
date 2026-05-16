"use client";

import { useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import SectionMotion from "../components/SectionMotion";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Replace with your Formspree endpoint
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/xpqbgezw";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        setError("Something went wrong. Please try again later.");
      }
    } catch {
      setError("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <SectionMotion id="contact" className="w-full max-w-3xl mx-auto py-20 px-6 flex flex-col gap-8 items-center relative overflow-hidden">
      {/* Animated background gradients and particles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/3 w-[220px] h-[220px] bg-gradient-to-tr from-[#00bbc4]/30 via-[#ec4899]/20 to-[#23272f]/0 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[180px] h-[180px] bg-gradient-to-br from-[#ec4899]/30 via-[#23272f]/0 to-[#00bbc4]/10 rounded-full blur-2xl animate-pulse" />
      </div>
      <h2 className="text-3xl md:text-5xl font-bold gradient-text z-10">
        Contact Me
      </h2>
      {submitted ? (
        <div className="flex flex-col items-center justify-center w-full bg-zinc-900/70 backdrop-blur-md rounded-2xl border border-zinc-800 shadow-lg p-8 z-10">
          <span className="text-2xl gradient-text mb-2">Thank you!</span>
          <span className="text-zinc-200">Your message has been sent.</span>
        </div>
      ) : (
        <form
          className="flex flex-col gap-6 w-full bg-zinc-900/70 backdrop-blur-md rounded-2xl border border-zinc-800 shadow-lg p-8 z-10"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-700 text-zinc-100 focus:outline-none focus:border-[#00ffe7] transition-all"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-700 text-zinc-100 focus:outline-none focus:border-[#00ffe7] transition-all"
          />
          <textarea
            name="message"
            required
            placeholder="Your Message"
            rows={5}
            className="px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-700 text-zinc-100 focus:outline-none focus:border-[#00ffe7] transition-all"
          />
          <button
            type="submit"
            className="px-8 py-3 rounded-full font-bold shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-200 border-2 border-white/40 sm:px-4 sm:py-2 sm:rounded-lg"
            style={{ background: 'linear-gradient(90deg, rgba(0,187,196,0.5) 0%, rgba(236,72,153,0.5) 100%)' }}
            disabled={loading}
          >
            <span style={{ color: '#fff' }}>{loading ? "Sending..." : "Send Message"}</span>
          </button>
          {error && <span className="text-red-400 text-sm mt-2">{error}</span>}
        </form>
      )}
      <div className="flex gap-4 mt-4 z-10">
        <a
          href="mailto:anshilawania@gmail.com"
          className="rounded-full p-3 border-2 border-white/40 hover:scale-110 transition-all duration-200 shadow-lg"
          aria-label="Email"
        >
          <FaEnvelope className="text-2xl" style={{ color: '#ec4899' }} />
        </a>
        <a
          href="https://www.linkedin.com/in/anshilawania/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full p-3 border-2 border-white/40 hover:scale-110 transition-all duration-200 shadow-lg"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="text-2xl" style={{ color: '#ec4899' }} />
        </a>
        <a
          href="https://github.com/anshilawania"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full p-3 border-2 border-white/40 hover:scale-110 transition-all duration-200 shadow-lg"
          aria-label="GitHub"
        >
          <FaGithub className="text-2xl" style={{ color: '#ec4899' }} />
        </a>
      </div>
      <div className="mt-6 text-zinc-400 text-center text-base font-medium z-10">
        <span className="gradient-text">
          <strong>Recruiters & clients:</strong> Lets connect and build something impactful together!
        </span>
      </div>
    </SectionMotion>
  );
}
