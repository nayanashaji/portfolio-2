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
      px-4
      sm:px-6
      "
    >
      <div
        className="
        relative
        glass
        glow
        rounded-[32px]
        md:rounded-[40px]
        border
        border-white/10
        max-w-6xl
        w-full
        p-6
        sm:p-8
        md:p-12
        lg:p-16
        mt-24
        "
      >
        <div className="max-w-5xl">

          <p
            className="
            text-lg
            sm:text-xl
            md:text-2xl
            text-slate-300
            mb-4
            "
          >
            <span className="text-cyan-400">
              •
            </span>{" "}
            Hello, I'm
          </p>

          <h1
            className="
            mondy
            gradient-text
            text-[3.5rem]
            sm:text-[4.5rem]
            md:text-[6rem]
            lg:text-[8rem]
            xl:text-[9rem]
            leading-[0.9]
            "
          >
            NAYANA SHAJI
          </h1>

          <p
            className="
            text-base
            sm:text-lg
            md:text-xl
            lg:text-2xl
            max-w-4xl
            mt-6
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

          <div
            className="
            flex
            flex-col
            sm:flex-row
            gap-4
            mt-10
            "
          >
            <a
              href="#projects"
              className="
              border
              border-cyan-400/40
              rounded-2xl
              px-6
              py-4
              md:px-10
              md:py-5
              text-lg
              md:text-xl
              flex
              items-center
              justify-center
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
              px-6
              py-4
              md:px-10
              md:py-5
              text-lg
              md:text-xl
              flex
              items-center
              justify-center
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

          <div className="mt-12">

            <p className="mb-5 text-slate-300">
              Connect with me
            </p>

            <div className="flex gap-3 sm:gap-4">

              <a
                href="https://linkedin.com/in/nayanashajim"
                target="_blank"
                className="
                glass
                w-12
                h-12
                sm:w-14
                sm:h-14
                md:w-16
                md:h-16
                rounded-xl
                flex
                items-center
                justify-center
                hover:scale-110
                transition
                "
              >
                <FaLinkedin size={22} />
              </a>

              <a
                href="https://github.com/nayanashaji"
                target="_blank"
                className="
                glass
                w-12
                h-12
                sm:w-14
                sm:h-14
                md:w-16
                md:h-16
                rounded-xl
                flex
                items-center
                justify-center
                hover:scale-110
                transition
                "
              >
                <FaGithub size={22} />
              </a>

              <a
                href="https://leetcode.com/u/nayanashaji/"
                target="_blank"
                className="
                glass
                w-12
                h-12
                sm:w-14
                sm:h-14
                md:w-16
                md:h-16
                rounded-xl
                flex
                items-center
                justify-center
                hover:scale-110
                transition
                "
              >
                <SiLeetcode size={22} />
              </a>

              <a
                href="mailto:nayanashajim@gmail.com"
                className="
                glass
                w-12
                h-12
                sm:w-14
                sm:h-14
                md:w-16
                md:h-16
                rounded-xl
                flex
                items-center
                justify-center
                hover:scale-110
                transition
                "
              >
                <HiOutlineMail size={22} />
              </a>

            </div>
          </div>

        </div>

        {/* Desktop Scroll Indicator */}

        <div
          className="
          hidden
          lg:flex
          absolute
          right-12
          bottom-10
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