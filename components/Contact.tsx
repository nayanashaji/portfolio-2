"use client";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import { SiLeetcode } from "react-icons/si";

import { HiOutlineMail } from "react-icons/hi";

export default function Contact() {
  return (
    <section
      id="contact"
      className="
      py-32
      px-6
      max-w-5xl
      mx-auto
      "
    >
      <div
        className="
        glass
        glow
        rounded-[40px]
        p-12
        md:p-16
        text-center
        "
      >
        <p
          className="
          text-cyan-400
          uppercase
          tracking-[0.4em]
          text-sm
          "
        >
          Get In Touch
        </p>

        <h2
          className="
          freescpt
          text-6xl
          md:text-8xl
          mt-4
          "
        >
          Let's{" "}
          <span className="gradient-text">
            Build Something
          </span>
        </h2>

        <p
          className="
          mt-8
          text-lg
          md:text-xl
          text-slate-300
          max-w-2xl
          mx-auto
          "
        >
          Interested in AI, accessibility,
          developer tools, hackathons or
          innovative software projects?
          I'd love to connect.
        </p>

        {/* Email CTA */}

        <a
          href="mailto:nayanashajim@gmail.com"
          className="
          inline-flex
          items-center
          gap-3
          mt-10
          px-8
          py-4
          rounded-2xl
          bg-gradient-to-r
          from-cyan-400
          via-violet-500
          to-pink-500
          text-lg
          hover:scale-105
          transition
          "
        >
          <HiOutlineMail />
          Send an Email
        </a>

        {/* Socials */}

        <div
          className="
          flex
          justify-center
          flex-wrap
          gap-5
          mt-12
          "
        >
          <a
            href="https://github.com/nayanashaji"
            target="_blank"
            className="
            glass
            p-4
            rounded-xl
            hover:scale-110
            transition
            "
          >
            <FaGithub size={24} />
          </a>

          <a
            href="https://www.linkedin.com/in/nayanashajim/"
            target="_blank"
            className="
            glass
            p-4
            rounded-xl
            hover:scale-110
            transition
            "
          >
            <FaLinkedin size={24} />
          </a>

          <a
            href="https://leetcode.com/u/nayanashaji/"
            target="_blank"
            className="
            glass
            p-4
            rounded-xl
            hover:scale-110
            transition
            "
          >
            <SiLeetcode size={24} />
          </a>
        </div>

        <p
          className="
          mt-10
          text-slate-500
          text-sm
          "
        >
          © 2026 Nayana Shaji
        </p>
      </div>
    </section>
  );
}