"use client";

import { useEffect, useState } from "react";

const links = [
  "home",
  "about",
  "skills",
  "projects",
  "experience",
  "certifications",
  "contact",
];

export default function Navbar() {
  const [active, setActive] =
    useState("home");

  useEffect(() => {
    const sections =
      document.querySelectorAll("section");

    const observer =
      new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActive(
                entry.target.id
              );
            }
          });
        },
        {
          threshold: 0.4,
        }
      );

    sections.forEach((section) =>
      observer.observe(section)
    );

    return () =>
      sections.forEach((section) =>
        observer.unobserve(section)
      );
  }, []);

  return (
    <nav
      className="
      fixed
      top-6
      left-1/2
      -translate-x-1/2
      z-50
      "
    >
      <div
        className="
        glass
        rounded-full
        px-8
        py-4
        flex
        gap-8
        "
      >
        {links.map((link) => (
          <a
            key={link}
            href={`#${link}`}
            className="
            relative
            capitalize
            "
          >
            <span
              className={
                active === link
                  ? "text-cyan-400"
                  : "text-white"
              }
            >
              {link}
            </span>

            {active === link && (
              <div
                className="
                absolute
                left-1/2
                -translate-x-1/2
                mt-2
                w-2
                h-2
                rounded-full
                bg-cyan-400
                "
              />
            )}
          </a>
        ))}
      </div>
    </nav>
  );
}