import { useState } from "react";
import { projects } from "../data/portfolioData";
import ProjectCard from "../components/ProjectCard";

const categories = ["All", ...new Set(projects.map((p) => p.category))];

export default function Projects() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <main className="pt-28 pb-20 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="mb-12 animate-fade-up" style={{ animationFillMode: "both", opacity: 0 }}>
          <p className="font-mono text-xs text-muted uppercase tracking-widest mb-3">Portfolio</p>
          <h1 className="font-display text-5xl md:text-7xl font-black text-ink leading-tight">
            My <span className="text-accent italic">Projects</span>
          </h1>
          <p className="font-body text-base text-ink/60 mt-4 max-w-xl">
            Kumpulan proyek yang telah saya kerjakan — dari tugas kuliah, freelance, hingga personal project.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-12 animate-fade-up"
          style={{ animationDelay: "0.2s", animationFillMode: "both", opacity: 0 }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`font-mono text-xs px-4 py-2 rounded-full border transition-all duration-200 ${
                active === cat
                  ? "bg-ink text-cream border-ink"
                  : "border-ink/20 text-ink/60 hover:border-ink/40 hover:text-ink"
              }`}
            >
              {cat}
              {cat !== "All" && (
                <span className="ml-2 opacity-50">({projects.filter((p) => p.category === cat).length})</span>
              )}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        <div className="mt-16 grid grid-cols-3 gap-6">
          {[
            { label: "Total Projects", value: projects.length },
            { label: "Categories", value: categories.length - 1 },
            { label: "Technologies", value: [...new Set(projects.flatMap(p => p.tech))].length },
          ].map(({ label, value }) => (
            <div key={label} className="p-5 bg-ink rounded-2xl text-cream text-center">
              <p className="font-display text-4xl font-black text-accent">{value}+</p>
              <p className="font-mono text-xs text-cream/50 uppercase tracking-widest mt-1">{label}</p>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}