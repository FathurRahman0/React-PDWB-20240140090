import { Link } from "react-router-dom";
import { personalInfo, projects, skills } from "../data/portfolioData";

export default function Home() {
  const featured = projects.filter((p) => p.featured);

  return (
    <main>
      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center relative overflow-hidden px-6 pt-24 pb-16">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-accent/5 blur-3xl" />
          <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-gold/5 blur-3xl" />
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: "linear-gradient(#1A1A2E 1px, transparent 1px), linear-gradient(90deg, #1A1A2E 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }} />
        </div>

        <div className="max-w-6xl mx-auto w-full">
          <div className="inline-flex items-center gap-2 border border-ink/15 rounded-full px-4 py-1.5 mb-8 animate-fade-in"
            style={{ animationDelay: "0.1s", animationFillMode: "both", opacity: 0 }}>
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="font-mono text-xs text-ink/60">Available for {personalInfo.availableFor}</span>
          </div>

          <h1 className="font-display text-5xl md:text-8xl font-black text-ink leading-none mb-2 animate-fade-up"
            style={{ animationDelay: "0.2s", animationFillMode: "both", opacity: 0 }}>
            {personalInfo.name.split(" ")[0]}
            <br />
            <span className="text-accent italic">{personalInfo.name.split(" ")[1]}</span>
          </h1>

          <div className="flex items-center gap-4 mb-8 animate-fade-up"
            style={{ animationDelay: "0.35s", animationFillMode: "both", opacity: 0 }}>
            <span className="font-mono text-sm text-muted uppercase tracking-widest">{personalInfo.title}</span>
            <span className="w-12 h-px bg-muted/40" />
            <span className="font-mono text-sm text-muted uppercase tracking-widest">{personalInfo.subtitle}</span>
          </div>

          <p className="font-body text-base md:text-lg text-ink/60 max-w-xl leading-relaxed mb-12 animate-fade-up"
            style={{ animationDelay: "0.45s", animationFillMode: "both", opacity: 0 }}>
            {personalInfo.bio}
          </p>

          <div className="flex flex-wrap items-center gap-4 animate-fade-up"
            style={{ animationDelay: "0.55s", animationFillMode: "both", opacity: 0 }}>
            <Link to="/projects" className="inline-flex items-center gap-2 bg-ink text-cream font-medium text-sm px-6 py-3 rounded-full hover:bg-accent transition-all duration-300 group">
              View Projects
              <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 border border-ink/20 text-ink font-medium text-sm px-6 py-3 rounded-full hover:border-ink/50 transition-all duration-300">
              Get In Touch
            </Link>
          </div>

          <p className="mt-12 font-mono text-xs text-muted animate-fade-in"
            style={{ animationDelay: "0.8s", animationFillMode: "both", opacity: 0 }}>
            📍 {personalInfo.location}
          </p>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="font-mono text-xs text-muted/50">scroll</span>
          <span className="w-px h-8 bg-muted/30" />
        </div>
      </section>

      {/* SKILLS STRIP */}
      <section className="py-16 bg-ink text-cream overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <p className="font-mono text-xs text-cream/40 uppercase tracking-widest mb-6">Tech Stack</p>
          <div className="flex flex-wrap gap-3">
            {skills.flatMap((s) => s.items).map((skill) => (
              <span key={skill} className="font-mono text-sm px-3 py-1.5 border border-cream/15 rounded-full text-cream/70 hover:border-accent hover:text-cream transition-all duration-200">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="font-mono text-xs text-muted uppercase tracking-widest mb-2">Selected Work</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-ink">
                Featured <span className="italic text-accent">Projects</span>
              </h2>
            </div>
            <Link to="/projects" className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-ink/50 hover:text-accent transition-colors duration-200">
              All projects →
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {featured.map((project, i) => (
              <div key={project.id} className="group relative bg-white rounded-2xl overflow-hidden border border-ink/8 hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
                <div className="h-1.5 w-full" style={{ backgroundColor: project.color }} />
                <div className="p-6">
                  <span className="font-mono text-xs text-muted uppercase tracking-widest">{project.category}</span>
                  <h3 className="font-display text-xl font-bold text-ink mt-1 mb-2 group-hover:text-accent transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="font-body text-sm text-ink/60 leading-relaxed mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="font-mono text-xs px-2.5 py-1 rounded-full bg-ink/5 text-ink/60">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link to="/projects" className="text-sm font-medium text-accent underline underline-offset-4">
              See all projects →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="relative bg-ink rounded-3xl px-8 md:px-16 py-16 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-accent/10 blur-3xl" />
            <div className="relative z-10">
              <p className="font-mono text-xs text-cream/40 uppercase tracking-widest mb-4">Let's Work Together</p>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-cream mb-6 max-w-lg">
                Have a project in <span className="text-accent italic">mind?</span>
              </h2>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-accent text-cream font-medium text-sm px-6 py-3 rounded-full hover:bg-accent/80 transition-all duration-300 group">
                Start a conversation
                <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}