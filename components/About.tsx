"use client";

import { motion } from "framer-motion";

const stats = [
  {
    value: "15+",
    label: "Projects Built",
  },
  {
    value: "5+",
    label: "Hackathons",
  },
  {
    value: "10+",
    label: "Certifications",
  },
  {
    value: "98.25%",
    label: "Higher Secondary",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-32 px-6 max-w-7xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="
        glass
        rounded-3xl
        p-6
        md:p-10
        "
      >
        <h2
          className="
          freescpt
          text-6xl
          md:text-8xl
          gradient-text
          mb-8
          "
        >
          About Me
        </h2>

        <div
          className="
          grid
          lg:grid-cols-[350px_1fr]
          gap-10
          items-center
          "
        >
          {/* Image */}

          <div className="flex justify-center">
            <img
              src="/profile.jpg"
              alt="Nayana Shaji"
              className="
              w-[280px]
              md:w-[320px]
              h-auto
              object-cover
              rounded-[32px]
              border
              border-white/10
              shadow-2xl
              "
            />
          </div>

          {/* Content */}

          <div>
            <h3
              className="
              text-3xl
              md:text-4xl
              font-bold
              mb-6
              "
            >
              Computer Science Engineering Student
            </h3>

            <div
              className="
              flex
              flex-wrap
              gap-3
              mb-6
              "
            >
              <span className="glass px-4 py-2 rounded-full text-sm">
                GEC Thrissur
              </span>

              <span className="glass px-4 py-2 rounded-full text-sm">
                AI & Computer Vision
              </span>

              <span className="glass px-4 py-2 rounded-full text-sm">
                Accessibility Tech
              </span>

              <span className="glass px-4 py-2 rounded-full text-sm">
                Full Stack Development
              </span>
            </div>

            <p
              className="
              text-lg
              md:text-xl
              text-slate-300
              leading-relaxed
              "
            >
              I'm a Computer Science Engineering
              student at Government Engineering
              College Thrissur passionate about
              Artificial Intelligence, Computer
              Vision and building technology that
              creates real-world impact.

              <br />
              <br />

              My work focuses on accessibility,
              safety and intelligent systems.
              From developing a real-time crowd
              stampede prediction platform to
              building AI-powered legal-tech and
              assistive technology solutions, I
              enjoy solving meaningful problems
              through technology.

              <br />
              <br />

              Beyond development, I actively
              participate in hackathons, organize
              technical events, create content for
              student communities and take on
              leadership roles that help bridge
              innovation and collaboration.
            </p>
          </div>
        </div>

        {/* Stats */}

        <div
          className="
          grid
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-4
          gap-5
          mt-12
          "
        >
          {stats.map((item) => (
            <motion.div
              key={item.label}
              whileHover={{
                y: -8,
              }}
              className="
              glass
              rounded-2xl
              p-6
              text-center
              "
            >
              <h4
                className="
                text-3xl
                md:text-4xl
                font-bold
                gradient-text
                "
              >
                {item.value}
              </h4>

              <p
                className="
                text-slate-400
                mt-2
                "
              >
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}