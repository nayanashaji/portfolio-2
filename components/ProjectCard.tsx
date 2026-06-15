"use client";

import {
  FaGithub,
  FaExternalLinkAlt
} from "react-icons/fa";

export default function ProjectCard({
  project
}: any) {
  return (
    <div
      className="
      glass
      rounded-[32px]
      overflow-hidden
      h-full
      border
      border-white/10
      hover:border-cyan-400/30
      transition-all
      duration-500
      "
    >
      <img
        src={project.image}
        alt={project.title}
        className="
        w-full
        h-64
        object-cover
        "
      />

      <div className="p-8">

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

        {project.achievement && (
          <div
            className="
            mt-5
            inline-block
            px-4
            py-2
            rounded-full
            bg-cyan-500/10
            border
            border-cyan-500/20
            "
          >
            {project.achievement}
          </div>
        )}

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
                rounded-lg
                bg-white/5
                border
                border-white/10
                text-sm
                "
              >
                {tech}
              </span>
            )
          )}
        </div>

        <div
          className="
          flex
          gap-4
          mt-8
          "
        >
          <a
            href={project.github}
            className="
            flex
            items-center
            gap-2
            px-5
            py-3
            glass
            rounded-xl
            "
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href={project.demo}
            className="
            flex
            items-center
            gap-2
            px-5
            py-3
            bg-gradient-to-r
            from-cyan-400
            to-violet-500
            rounded-xl
            "
          >
            <FaExternalLinkAlt />
            Demo
          </a>
        </div>

      </div>
    </div>
  );
}