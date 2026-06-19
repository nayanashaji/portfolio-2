"use client";

import CountUp from "react-countup";

export default function Achievements() {
  return (
    <section className="py-32 px-6 max-w-6xl mx-auto">
      <h2 className="freescpt text-8xl font-black text-center gradient-text mb-16">
        Achievements
      </h2>

      <div className="grid md:grid-cols-4 gap-6">

        <div className="glass p-8 rounded-3xl text-center">
          <h3 className="text-5xl font-bold">
            <CountUp end={6} />
          </h3>
          <p>Projects</p>
        </div>

        <div className="glass p-8 rounded-3xl text-center">
          <h3 className="text-5xl font-bold">
            Top 10
          </h3>
          <p>HackOdisha</p>
        </div>

        <div className="glass p-8 rounded-3xl text-center">
          <h3 className="text-5xl font-bold">
            Top 15
          </h3>
          <p>Hack For Nothing</p>
        </div>

        <div className="glass p-8 rounded-3xl text-center">
          <h3 className="text-5xl font-bold">
            <CountUp end={3} />
          </h3>
          <p>Hackathons</p>
        </div>

      </div>
    </section>
  );
}