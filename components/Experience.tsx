"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { experiences } from "@/data/experience";

export default function Experience() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section
      id="experience"
      className="relative py-32 px-6 max-w-6xl mx-auto"
    >
      {/* Heading */}

      <div className="mb-20">
        <p className="text-cyan-400 uppercase tracking-[0.35em] text-sm">
          Experience
        </p>

        <h2 className="text-5xl md:text-7xl font-black mt-3">
          My{" "}
          <span className="gradient-text">
            Journey
          </span>
        </h2>
      </div>

      {/* Timeline */}

      <div className="relative">

        {/* Line */}

        <div
          className="
          absolute
          left-4
          top-0
          bottom-0
          w-[2px]
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

                {/* Timeline Dot */}

                <div
                  className={`
                  absolute
                  left-0
                  top-6
                  w-8
                  h-8
                  rounded-full
                  z-10

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
                      scale: 1.01,
                    }}
                    whileTap={{
                      scale: 0.98,
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
                      "
                    >
                      <div>

                        <h3
                          className="
                          text-2xl
                          md:text-3xl
                          font-bold
                          "
                        >
                          {exp.role}
                        </h3>

                        <p
                          className="
                          text-slate-400
                          mt-2
                          "
                        >
                          {exp.company}
                        </p>

                        <p
                          className="
                          text-cyan-400
                          mt-3
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
                        transition={{
                          duration: 0.3,
                        }}
                        className="
                        text-3xl
                        text-cyan-400
                        "
                      >
                        ▼
                      </motion.div>
                    </div>
                  </motion.button>

                  {/* Expandable Content */}

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
                          duration: 0.35,
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

                          <ul
                            className="
                            space-y-4
                            text-slate-300
                            "
                          >
                            {exp.details.map(
                              (
                                item: string
                              ) => (
                                <li
                                  key={item}
                                  className="
                                  flex
                                  gap-3
                                  "
                                >
                                  <span
                                    className="
                                    text-cyan-400
                                    "
                                  >
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
                              (
                                tech: string
                              ) => (
                                <span
                                  key={tech}
                                  className="
                                  px-4
                                  py-2
                                  rounded-xl
                                  bg-cyan-500/10
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