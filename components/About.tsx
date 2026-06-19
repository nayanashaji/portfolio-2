"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-32 px-6 max-w-6xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass rounded-3xl p-10"
      >
        <h2 className="freescpt text-8xl font-black gradient-text mb-5 px-2">
          About Me
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-10">

  <img
    src="/profile.jpg"
    alt="Profile"
    className="
    w-[320px]
    h-[420px]
    object-cover
    rounded-[32px]
    "
  />

  <div className="max-w-2xl">
    <p className="text-2xl text-slate-300 leading-relaxed">
      I'm a CS Engineering student at GEC Thrissur building things that sit at the intersection of AI and real-world impact. I've shipped a crowd stampede detector, an AI legal tool that cracked Top 10 at HackOdisha 5.0, and a braille phone cover... all from hackathon ideas. I care about accessibility, messy problems, and tech that actually helps people.
    </p>
  </div>

</div>
      </motion.div>
    </section>
  );
}