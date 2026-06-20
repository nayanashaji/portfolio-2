"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { experiences } from "@/data/experience";

export default function Experience() {
  const [active, setActive] =
    useState<number | null>(0);

  return (
    <section
      id="experience"
      className="
      py-32
      px-6
      max-w-7xl
      mx-auto
      "
    >
      <div className="text-center mb-20">
        <p
          className="
          text-cyan-400
          uppercase
          tracking-[0.4em]
          text-sm
          "
        >
          Experience
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
            Journey
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
          Leadership roles, internships,
          community involvement and experiences
          that shaped my growth as a developer.
        </p>
      </div>

      <div className="relative">

        <div
          className="
          absolute
          left-4
          top-0
          bottom-0
          w-[3px]
          rounded-full
          bg-gradient-to-b
          from-cyan-400
          via-violet-500
          to-pink-500
          "
        />

        <div className="space-y-10">

          {experiences.map((exp, index) => {
            const isOpen =
              active === index;

            return (
              <div
                key={exp.id}
                className="relative"
              >

                {/* Dot */}

                <div
                  className={`
                  absolute
                  left-0
                  top-5
                  w-8
                  h-8
                  rounded-full
                  z-10
                  transition-all

                  ${
                    isOpen
                      ? "bg-cyan-400 shadow-[0_0_30px_rgba(0,245,212,0.8)]"
                      : "bg-violet-500"
                  }
                  `}
                />

                <div className="ml-16">

                  <motion.button
                    whileHover={{
                      y: -3,
                    }}
                    whileTap={{
                      scale: 0.99,
                    }}
                    onClick={() =>
                      setActive(
                        isOpen
                          ? null
                          : index
                      )
                    }
                    className="
                    glass
                    glow
                    w-full
                    text-left
                    rounded-3xl
                    p-6
                    border
                    border-white/10
                    hover:border-cyan-400/30
                    transition-all
                    "
                  >
                    <div
                      className="
                      flex
                      justify-between
                      items-center
                      gap-4
                      "
                    >
                      <div>

                        <div
                          className="
                          flex
                          flex-wrap
                          gap-3
                          items-center
                          "
                        >
                          <h3
                            className="
                            text-xl
                            md:text-3xl
                            font-bold
                            gradient-text
                            "
                          >
                            {exp.role}
                          </h3>

                          {exp.current && (
                            <span
                              className="
                              px-3
                              py-1
                              rounded-full
                              text-xs
                              bg-cyan-500/15
                              text-cyan-400
                              "
                            >
                              CURRENT
                            </span>
                          )}
                        </div>

                        <p
                          className="
                          text-slate-300
                          mt-2
                          "
                        >
                          {exp.company}
                        </p>

                        <p
                          className="
                          text-cyan-400
                          mt-2
                          text-sm
                          "
                        >
                          {exp.period}
                        </p>

                      </div>

                      <motion.div
                        animate={{
                          rotate:
                            isOpen
                              ? 180
                              : 0,
                        }}
                        className="
                        text-cyan-400
                        text-2xl
                        "
                      >
                        ▼
                      </motion.div>
                    </div>
                  </motion.button>

                  <AnimatePresence>

                    {isOpen && (

                      <motion.div
                        initial={{
                          opacity: 0,
                          height: 0,
                        }}
                        animate={{
                          opacity: 1,
                          height: "auto",
                        }}
                        exit={{
                          opacity: 0,
                          height: 0,
                        }}
                        transition={{
                          duration: 0.3,
                        }}
                        className="
                        overflow-hidden
                        "
                      >
                        <div
                          className="
                          glass
                          rounded-3xl
                          p-8
                          mt-4
                          border
                          border-cyan-400/10
                          "
                        >

                          <div
                            className="
                            inline-flex
                            mb-6
                            px-4
                            py-2
                            rounded-full
                            bg-cyan-500/10
                            border
                            border-cyan-500/20
                            "
                          >
                            🏆 {exp.achievement}
                          </div>

                          <ul
                            className="
                            space-y-4
                            text-slate-300
                            "
                          >
                            {exp.details.map(
                              (item) => (
                                <li
                                  key={item}
                                  className="
                                  flex
                                  gap-3
                                  "
                                >
                                  <span className="text-cyan-400">
                                    ●
                                  </span>

                                  <span>
                                    {item}
                                  </span>
                                </li>
                              )
                            )}
                          </ul>

                          <div
                            className="
                            flex
                            flex-wrap
                            gap-3
                            mt-8
                            "
                          >
                            {exp.tech.map(
                              (tech) => (
                                <span
                                  key={tech}
                                  className="
                                  px-4
                                  py-2
                                  rounded-xl
                                  bg-gradient-to-r
                                  from-cyan-500/10
                                  to-violet-500/10
                                  border
                                  border-cyan-500/20
                                  text-sm
                                  "
                                >
                                  {tech}
                                </span>
                              )
                            )}
                          </div>

                        </div>
                      </motion.div>

                    )}

                  </AnimatePresence>

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}