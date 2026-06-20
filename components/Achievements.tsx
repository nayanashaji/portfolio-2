"use client";

import { motion } from "framer-motion";

const achievements = [
  {
    title: "AIR 4",
    subtitle: "Grade 10",
    icon: "🏆",
  },
  {
    title: "98.25%",
    subtitle: "Higher Secondary",
    icon: "🎓",
  },
  {
    title: "Top 10",
    subtitle: "HackOdisha 5.0",
    icon: "🚀",
  },
  {
    title: "Top 15",
    subtitle: "Hack For Nothing",
    icon: "💡",
  },
  {
    title: "Head Girl",
    subtitle: "School Leadership",
    icon: "👑",
  },
  {
    title: "Class Rep",
    subtitle: "GEC Thrissur",
    icon: "🎯",
  },
  {
    title: "Writer",
    subtitle: "TinkerHub GECT",
    icon: "✍️",
  },
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="py-32 px-6 max-w-7xl mx-auto"
    >
      <div className="text-center mb-16">
        <p className="text-cyan-400 uppercase tracking-[0.4em] text-sm">
          Highlights
        </p>

        <h2 className="freescpt text-6xl md:text-8xl mt-4">
          My{" "}
          <span className="gradient-text">
            Achievements
          </span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
        {achievements.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.05,
            }}
            whileHover={{
              y: -8,
            }}
            className="
            glass
            rounded-3xl
            p-8
            text-center
            border
            border-white/10
            hover:border-cyan-400/30
            transition-all
            duration-500
            "
          >
            <div className="text-5xl mb-4">
              {item.icon}
            </div>

            <h3
              className="
              text-4xl
              font-bold
              gradient-text
              "
            >
              {item.title}
            </h3>

            <p
              className="
              text-slate-300
              mt-3
              text-lg
              "
            >
              {item.subtitle}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}