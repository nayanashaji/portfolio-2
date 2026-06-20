"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="
      py-32
      px-6
      max-w-7xl
      mx-auto
      "
    >

      <div className="mb-16 text-center">
        <p
          className="
          text-cyan-400
          uppercase
          tracking-[0.4em]
          text-sm
          "
        >
          Skills
        </p>

        <h2
          className="
          freescpt
          text-6xl
          md:text-8xl
          mt-4
          "
        >
          My{" "}
          <span className="gradient-text">
            Toolkit
          </span>
        </h2>

        <p
          className="
          text-slate-400
          mt-4
          max-w-2xl
          mx-auto
          "
        >
          Technologies, frameworks and concepts
          I use to build modern AI-powered and
          full-stack applications.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="
        glass
        rounded-3xl
        p-6
        mb-10
        overflow-hidden
        "
      >
        <h3
          className="
          text-xl
          font-bold
          mb-4
          "
        >
          Language Usage
        </h3>

        <img
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=nayanashaji&layout=compact&theme=transparent&hide_border=true"
          alt="Language Stats"
          className="
          w-full
          max-w-xl
          mx-auto
          "
        />
      </motion.div>

      <div
        className="
        grid
        md:grid-cols-2
        xl:grid-cols-3
        gap-8
        "
      >
        {skillCategories.map(
          (category, index) => (
            <motion.div
              key={category.title}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -10,
              }}
              className={`
                glass
                rounded-3xl
                p-8
                border
                ${category.border}
                transition-all
                duration-500
                min-h-[260px]
                hover:shadow-[0_0_40px_rgba(0,245,212,0.15)]
              `}
            >
              <div
                className="
                text-5xl
                mb-6
                "
              >
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

              <div
                className="
                flex
                flex-wrap
                gap-3
                "
              >
                {category.skills.map(
                  (skill) => (
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
                  )
                )}
              </div>
            </motion.div>
          )
        )}
      </div>
    </section>
  );
}
