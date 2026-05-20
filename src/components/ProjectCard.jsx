export default function ProjectCard({ project, index }) {
  return (
    <div
      className="group relative bg-white rounded-2xl overflow-hidden border border-ink/8 hover:border-ink/20 hover:shadow-xl transition-all duration-500 animate-fade-up"
      style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "both", opacity: 0 }}
    >
      <div className="h-1.5 w-full transition-all duration-500 group-hover:h-2" style={{ backgroundColor: project.color }} />
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <span className="font-mono text-xs text-muted uppercase tracking-widest">{project.category}</span>
            <h3 className="font-display text-xl font-bold text-ink mt-1 group-hover:text-accent transition-colors duration-200">
              {project.title}
            </h3>
          </div>
          <span className="font-mono text-xs text-muted/60">{project.year}</span>
        </div>
        <p className="font-body text-sm text-ink/60 leading-relaxed mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="font-mono text-xs px-2.5 py-1 rounded-full bg-ink/5 text-ink/60">{t}</span>
          ))}
        </div>
        <div className="mt-4 flex justify-end">
          <span className="text-muted/40 group-hover:text-accent group-hover:translate-x-1 transition-all duration-200 text-lg">→</span>
        </div>
      </div>
    </div>
  );
}