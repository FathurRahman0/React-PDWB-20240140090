import { personalInfo, skills, experiences, education } from "../data/portfolioData";

export default function About() {
  return (
    <main className="pt-28 pb-20 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="mb-16 animate-fade-up" style={{ animationFillMode: "both", opacity: 0 }}>
          <p className="font-mono text-xs text-muted uppercase tracking-widest mb-3">Who I Am</p>
          <h1 className="font-display text-5xl md:text-7xl font-black text-ink leading-tight">
            About <span className="text-accent italic">Me</span>
          </h1>
        </div>

        <div className="grid md:grid-cols-5 gap-12 mb-20">
          <div className="md:col-span-2 animate-slide-right" style={{ animationFillMode: "both", opacity: 0 }}>
            <div className="relative">
              <div className="aspect-[4/5] bg-ink/5 rounded-2xl overflow-hidden border border-ink/10 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                    <span className="font-display text-3xl font-bold text-accent">FR</span>
                  </div>
                  <p className="font-mono text-xs text-muted">Photo Here</p>
                </div>
              </div>
              <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-accent/30 rounded-2xl -z-10" />
            </div>

            <div className="mt-6 p-5 bg-ink rounded-2xl text-cream">
              <p className="font-mono text-xs text-cream/40 uppercase tracking-widest mb-4">Quick Info</p>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-cream/50">Location</span>
                  <span className="font-medium">{personalInfo.location}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-cream/50">Education</span>
                  <span className="font-medium">{education.degree}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-cream/50">GPA</span>
                  <span className="font-medium text-gold">{education.gpa}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-cream/50">Open for</span>
                  <span className="font-medium text-green-400">{personalInfo.availableFor}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-3 animate-fade-up" style={{ animationDelay: "0.2s", animationFillMode: "both", opacity: 0 }}>
            <p className="font-display text-xl italic text-accent mb-6">
              "Membangun pengalaman web yang indah dan bermakna."
            </p>
            <p className="font-body text-base text-ink/70 leading-relaxed mb-6">{personalInfo.bio}</p>
            <p className="font-body text-base text-ink/70 leading-relaxed mb-8">
              Saat tidak sedang coding, saya suka mengeksplorasi desain UI terbaru, mengikuti perkembangan teknologi web, dan berkontribusi pada komunitas developer lokal. Saya percaya bahwa kolaborasi dan komunikasi yang baik adalah kunci dari setiap proyek sukses.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="mailto:fathur.rahman@email.com" className="inline-flex items-center gap-2 bg-ink text-cream text-sm font-medium px-5 py-2.5 rounded-full hover:bg-accent transition-all duration-300">
                Email Me →
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border border-ink/20 text-ink text-sm font-medium px-5 py-2.5 rounded-full hover:border-ink/50 transition-all duration-300">
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="mb-20">
          <p className="font-mono text-xs text-muted uppercase tracking-widest mb-3">Keahlian</p>
          <h2 className="font-display text-3xl font-bold text-ink mb-10">
            Skills & <span className="text-accent italic">Technologies</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((group) => (
              <div key={group.category} className="p-5 bg-white rounded-2xl border border-ink/8 hover:border-ink/20 hover:shadow-md transition-all duration-300">
                <h3 className="font-mono text-xs text-accent uppercase tracking-widest mb-4">{group.category}</h3>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-ink/70">
                      <span className="w-1 h-1 rounded-full bg-accent/60" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className="mb-20">
          <p className="font-mono text-xs text-muted uppercase tracking-widest mb-3">Pengalaman</p>
          <h2 className="font-display text-3xl font-bold text-ink mb-10">
            Work <span className="text-accent italic">Experience</span>
          </h2>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-ink/10 hidden md:block" />
            <div className="space-y-8">
              {experiences.map((exp, i) => (
                <div key={i} className="md:pl-12 relative">
                  <div className="hidden md:block absolute left-3 top-2 w-2 h-2 rounded-full bg-accent -translate-x-1/2" />
                  <div className="p-6 bg-white rounded-2xl border border-ink/8 hover:border-ink/20 hover:shadow-md transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-2">
                      <h3 className="font-display text-lg font-bold text-ink">{exp.role}</h3>
                      <span className="font-mono text-xs text-muted">{exp.period}</span>
                    </div>
                    <p className="font-medium text-sm text-accent mb-2">{exp.company}</p>
                    <p className="font-body text-sm text-ink/60 leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Education */}
        <div>
          <p className="font-mono text-xs text-muted uppercase tracking-widest mb-3">Pendidikan</p>
          <h2 className="font-display text-3xl font-bold text-ink mb-8">
            <span className="text-accent italic">Education</span>
          </h2>
          <div className="p-6 bg-ink text-cream rounded-2xl flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="font-display text-xl font-bold mb-1">{education.degree}</h3>
              <p className="text-cream/60 text-sm">{education.university}</p>
            </div>
            <div className="text-right">
              <p className="font-mono text-sm text-cream/50">{education.period}</p>
              <p className="font-display text-2xl font-bold text-gold mt-1">{education.gpa}</p>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}