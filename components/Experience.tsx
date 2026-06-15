const experiences = [
  {
    year: "2025",
    title: "Web Development Intern",
    company: "ApexPlanet Software"
  },
  {
    year: "2025",
    title: "Content Writer",
    company: "TinkerHub"
  },
  {
    year: "2025",
    title: "HackOdisha Top 10",
    company: "ATHENIS"
  }
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-32 px-6 max-w-5xl mx-auto"
    >
      <h2 className="text-5xl font-black text-center gradient-text mb-16">
        Timeline
      </h2>

      <div className="space-y-8">
        {experiences.map((item) => (
          <div
            key={item.title}
            className="glass p-6 rounded-3xl"
          >
            <p className="text-cyan-400">
              {item.year}
            </p>

            <h3 className="text-2xl font-bold">
              {item.title}
            </h3>

            <p className="text-slate-400">
              {item.company}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}