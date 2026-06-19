"use client";

import {
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

import { SiLeetcode } from "react-icons/si";

import {
  HiOutlineMail,
  HiArrowRight,
  HiDownload,
} from "react-icons/hi";

export default function Hero() {
  return (
    <section
      id="home"
      className="
      min-h-screen
      flex
      items-center
      justify-center
      px-6
      "
    >
      <div
        className="
        relative
        glass
        glow
        rounded-[40px]
        border
        border-white/10
        max-w-6xl
        w-full
        p-16
        mt-10
        "
      >
        <p className="text-3xl text-slate-300 mb-6">
          <span className="text-cyan-400">•</span>{" "}
          Hello, I'm
        </p>

        <h1
          className="
          mondy
          gradient-text
          text-[6rem]
          md:text-[8rem]
          leading-none
          "
        >
          NAYANA SHAJI
        </h1>

        <p
          className="
          text-xl
          md:text-2xl
          max-w-4xl
          mt-8
          text-slate-300
          leading-relaxed
          "
        >
          Building{" "}
          <span className="gradient-text">
            AI-powered
          </span>{" "}
          solutions for accessibility,
          safety and{" "}
          <span className="gradient-text">
            real-world impact.
          </span>
        </p>

        {/* Buttons */}

        <div className="flex flex-wrap gap-6 mt-12">

          <a
            href="#projects"
            className="
            border
            border-cyan-400/40
            rounded-2xl
            px-10
            py-5
            text-xl
            flex
            items-center
            gap-3
            hover:bg-cyan-400/10
            transition
            "
          >
            View Projects
            <HiArrowRight />
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            className="
            rounded-2xl
            px-10
            py-5
            text-xl
            flex
            items-center
            gap-3
            bg-gradient-to-r
            from-cyan-400
            via-violet-500
            to-pink-500
            hover:scale-105
            transition
            "
          >
            Download Resume
            <HiDownload />
          </a>
        </div>

        {/* Socials */}

        <div className="mt-16">

          <p className="mb-5 text-slate-300">
            Connect with me
          </p>

          <div className="flex gap-4">

            <a
              href="https://linkedin.com/in/nayanashajim"
              target="_blank"
              className="
              glass
              w-16
              h-16
              rounded-xl
              flex
              items-center
              justify-center
              hover:scale-110
              transition
              "
            >
              <FaLinkedin size={24} />
            </a>

            <a
              href="https://github.com/nayanashaji"
              target="_blank"
              className="
              glass
              w-16
              h-16
              rounded-xl
              flex
              items-center
              justify-center
              hover:scale-110
              transition
              "
            >
              <FaGithub size={24} />
            </a>

            <a
              href="https://leetcode.com/u/nayanashaji/"
              target="_blank"
              className="
              glass
              w-16
              h-16
              rounded-xl
              flex
              items-center
              justify-center
              hover:scale-110
              transition
              "
            >
              <SiLeetcode size={24} />
            </a>

            <a
              href="mailto:nayanashajim@gmail.com"
              className="
              glass
              w-16
              h-16
              rounded-xl
              flex
              items-center
              justify-center
              hover:scale-110
              transition
              "
            >
              <HiOutlineMail size={24} />
            </a>

          </div>
        </div>

        {/* Scroll */}

        <div
          className="
          absolute
          right-12
          bottom-10
          flex
          items-center
          gap-4
          "
        >
          <span className="text-slate-400">
            Scroll Down
          </span>

          <div
            className="
            w-10
            h-16
            rounded-full
            border
            border-white/20
            flex
            justify-center
            "
          >
            <div
              className="
              w-2
              h-2
              bg-cyan-400
              rounded-full
              mt-2
              animate-bounce
              "
            />
          </div>
        </div>

      </div>
    </section>
  );
}