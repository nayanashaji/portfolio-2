"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-32 px-6 max-w-7xl mx-25"
    >
      <div className="mb-16">
        <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm">
          Skills
        </p>

        <h2 className="freescpt text-8xl md:text-7xl font-black mt-2">
          My{" "}
          <span className="gradient-text">
            Toolkit
          </span>
        </h2>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{
              opacity: 0,
              y: 50
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.1
            }}
            className={`
              glass
              rounded-3xl
              p-8
              border
              ${category.border}
              hover:-translate-y-2
              transition-all
              duration-500
              min-h-[260px]
            `}
          >
            <div className="text-4xl mb-6">
              {category.icon}
            </div>

            <h3
              className="
              text-xl
              font-bold
              uppercase
              tracking-wider
              mb-6
              "
            >
              {category.title}
            </h3>

            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className={`
                    px-4
                    py-2
                    rounded-xl
                    border
                    text-sm
                    font-medium
                    transition-all
                    duration-300
                    hover:scale-105
                    ${category.badge}
                  `}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}