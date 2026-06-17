"use client";

import {
  useEffect,
  useState,
} from "react";

export default function ScrollProgress() {

  const [progress, setProgress] =
    useState(0);

  useEffect(() => {

    const handleScroll = () => {

      const scrollTop =
        window.scrollY;

      const docHeight =
        document.documentElement
          .scrollHeight -
        window.innerHeight;

      setProgress(
        (scrollTop / docHeight) * 100
      );
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );

  }, []);

  return (
    <div
      className="
      fixed
      right-6
      top-1/2
      -translate-y-1/2
      h-60
      w-2
      glass
      rounded-full
      z-50
      "
    >
      <div
        className="
        w-full
        rounded-full
        bg-gradient-to-b
        from-cyan-400
        via-violet-500
        to-pink-500
        "
        style={{
          height: `${progress}%`,
        }}
      />
    </div>
  );
}