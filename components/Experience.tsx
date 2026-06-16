"use client";

import { useState } from "react";
import { experiences } from "@/data/experience";

export default function Experience() {

  const [active, setActive] =
    useState<number | null>(0);

  return (
    <section
      id="experience"
      className="py-32 px-6 max-w-6xl mx-auto"
    >
      <h2 className="text-5xl font-black mb-16">
        My{" "}
        <span className="gradient-text">
          Journey
        </span>
      </h2>

      <div className="relative">

        <div
          className="
          absolute
          left-4
          top-0
          bottom-0
          w-[2px]
          bg-white/10
          "
        />

        <div className="space-y-8">

          {experiences.map((exp, index) => {

            const isOpen =
              active === index;

            return (

              <div
                key={exp.id}
                className="relative"
              >

                <div
                  className="
                  absolute
                  left-0
                  top-4
                  w-8
                  h-8
                  rounded-full
                  bg-cyan-500
                  shadow-[0_0_20px_rgba(0,245,212,0.6)]
                  "
                />

                <div className="ml-16">

                  <button
                    onClick={() =>
                      setActive(
                        isOpen
                          ? null
                          : index
                      )
                    }
                    className="
                    w-full
                    text-left
                    glass
                    p-6
                    rounded-3xl
                    hover:border-cyan-400/30
                    transition-all
                    "
                  >
                    <div className="flex justify-between items-center">

                      <div>

                        <h3
                          className="
                          text-2xl
                          font-bold
                          "
                        >
                          {exp.role}
                        </h3>

                        <p className="text-slate-400">
                          {exp.company}
                        </p>

                        <p className="text-cyan-400 mt-2">
                          {exp.period}
                        </p>

                      </div>

                      <div className="text-3xl">
                        {isOpen ? "−" : "+"}
                      </div>

                    </div>

                  </button>

                  {isOpen && (

                    <div
                      className="
                      glass
                      rounded-3xl
                      p-6
                      mt-4
                      animate-in
                      fade-in
                      "
                    >

                      <ul
                        className="
                        list-disc
                        ml-5
                        space-y-3
                        "
                      >
                        {exp.details.map(
                          (item) => (
                            <li key={item}>
                              {item}
                            </li>
                          )
                        )}
                      </ul>

                      <div
                        className="
                        flex
                        flex-wrap
                        gap-2
                        mt-6
                        "
                      >

                        {exp.tech.map(
                          (tech) => (
                            <span
                              key={tech}
                              className="
                              px-3
                              py-1
                              rounded-lg
                              bg-cyan-500/10
                              border
                              border-cyan-500/20
                              "
                            >
                              {tech}
                            </span>
                          )
                        )}

                      </div>

                    </div>

                  )}

                </div>

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}