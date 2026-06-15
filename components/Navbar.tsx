"use client";

export default function Navbar() {
  return (
    <nav
      className="
      fixed
      top-5
      left-1/2
      -translate-x-1/2
      glass
      px-8
      py-4
      rounded-full
      z-50
      "
    >
      <div className="flex gap-8">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Timeline</a>
      </div>
    </nav>
  );
}