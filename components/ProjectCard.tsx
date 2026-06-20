"use client";

import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

export default function ProjectCard({
  project,
}: any) {
  return (
    <div
      className="
      glass
      rounded-[32px]
      overflow-hidden
      border
      border-white/10
      hover:border-cyan-400/40
      hover:shadow-[0_0_50px_rgba(0,245,212,0.15)]
      transition-all
      duration-500
      h-full
      group
      "
    >
      {/* Image Section */}

      <div className="relative overflow-hidden">

        <img
          src={project.image}
          alt={project.title}
          className="
          w-full
          h-72
          object-cover
          transition-transform
          duration-700
          group-hover:scale-110
          "
        />

        <div
          className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black
          via-black/30
          to-transparent
          "
        />

        {project.achievement && (
          <div
            className="
            absolute
            top-4
            right-4
            px-4
            py-2
            rounded-full
            bg-cyan-500/20
            backdrop-blur-lg
            border
            border-cyan-400/30
            text-sm
            font-semibold
            "
          >
            🏆 {project.achievement}
          </div>
        )}

        <div
          className="
          absolute
          bottom-5
          left-5
          "
        >
          <span
            className="
            text-xs
            uppercase
            tracking-[0.3em]
            text-cyan-400
            "
          >
            Featured Project
          </span>
        </div>

      </div>

      {/* Content */}

      <div
        className="
        p-8
        flex
        flex-col
        h-[420px]
        "
      >
        <h3
          className="
          text-3xl
          font-bold
          gradient-text
          "
        >
          {project.title}
        </h3>

        <p
          className="
          text-lg
          text-white
          mt-3
          font-medium
          "
        >
          {project.description}
        </p>

        <p
          className="
          text-slate-400
          mt-4
          leading-relaxed
          "
        >
          {project.details}
        </p>

        {/* Tech Stack */}

        <div
          className="
          flex
          flex-wrap
          gap-2
          mt-6
          "
        >
          {project.tech.map(
            (tech: string) => (
              <span
                key={tech}
                className="
                px-3
                py-1
                rounded-full
                text-sm
                border
                border-white/10
                bg-white/5
                hover:border-cyan-400/30
                transition
                "
              >
                {tech}
              </span>
            )
          )}
        </div>

        {/* Push buttons down */}

        <div className="mt-auto">

          <div
            className="
            flex
            gap-4
            pt-8
            "
          >
            <a
              href={project.github}
              target="_blank"
              className="
              flex-1
              flex
              items-center
              justify-center
              gap-2
              py-3
              rounded-xl
              glass
              hover:scale-105
              transition
              "
            >
              <FaGithub />
              GitHub
            </a>

            <a
              href={project.demo}
              target="_blank"
              className="
              flex-1
              flex
              items-center
              justify-center
              gap-2
              py-3
              rounded-xl
              bg-gradient-to-r
              from-cyan-400
              via-violet-500
              to-pink-500
              hover:scale-105
              transition
              "
            >
              <FaExternalLinkAlt />
              Demo
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}