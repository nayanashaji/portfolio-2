"use client";

import { useEffect, useState } from "react";

export default function MouseSpotlight() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const update = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", update);

    return () =>
      window.removeEventListener(
        "mousemove",
        update
      );
  }, []);

  return (
    <div
      className="
      fixed
      inset-0
      pointer-events-none
      z-0
      "
      style={{
        background: `
        radial-gradient(
          200px circle at
          ${position.x}px
          ${position.y}px,
          rgba(0,245,212,1),
          transparent 20%
        )
        `,
      }}
    />
  );
}