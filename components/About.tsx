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
        <h2 className="text-5xl font-black gradient-text mb-10">
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
      Computer Science Engineering student passionate
      about Artificial Intelligence, Computer Vision,
      Accessibility Technology and Full Stack Development.
    </p>

    <p className="text-2xl text-slate-300 mt-8 leading-relaxed">
      I enjoy building projects that solve real-world
      problems such as crowd safety systems,
      legal-tech platforms and assistive technologies.
    </p>
  </div>

</div>
      </motion.div>
    </section>
  );
}