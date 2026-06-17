"use client";

export default function AuroraBackground() {
  return (
    <div
      className="
      fixed
      inset-0
      z-0
      pointer-events-none
      overflow-hidden
      "
    >

      <div
        className="
        absolute
        inset-0
        opacity-70
        animate-gradient
        "
        style={{
          background: `
          radial-gradient(
            circle at 20% 20%,
            rgba(0,245,212,0.12),
            transparent 35%
          ),

          radial-gradient(
            circle at 80% 30%,
            rgba(123,97,255,0.25),
            transparent 35%
          ),

          radial-gradient(
            circle at 50% 80%,
            rgba(255,94,168,0.18),
            transparent 35%
          )
        `,
        }}
      />

      <div className="orb orb-cyan" />

      <div className="orb orb-violet" />

      <div className="orb orb-pink" />
    </div>
  );
}