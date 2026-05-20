import { useState } from "react";
import { personalInfo } from "../data/portfolioData";

const contactItems = [
  { label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}`, icon: "✉️" },
  { label: "GitHub", value: personalInfo.github, href: "https://github.com", icon: "🐙" },
  { label: "LinkedIn", value: personalInfo.linkedin, href: "https://linkedin.com", icon: "💼" },
  { label: "Location", value: personalInfo.location, href: null, icon: "📍" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.email && form.message) {
      setSent(true);
      setForm({ name: "", email: "", message: "" });
    }
  };

  return (
    <main className="pt-28 pb-20 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="mb-16 animate-fade-up" style={{ animationFillMode: "both", opacity: 0 }}>
          <p className="font-mono text-xs text-muted uppercase tracking-widest mb-3">Hubungi Saya</p>
          <h1 className="font-display text-5xl md:text-7xl font-black text-ink leading-tight">
            Get In <span className="text-accent italic">Touch</span>
          </h1>
          <p className="font-body text-base text-ink/60 mt-4 max-w-lg">
            Punya proyek menarik atau sekadar ingin berkenalan? Saya selalu terbuka untuk diskusi baru.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="animate-slide-right" style={{ animationFillMode: "both", opacity: 0 }}>
            <h2 className="font-display text-2xl font-bold text-ink mb-6">Let's talk</h2>
            <div className="space-y-4 mb-10">
              {contactItems.map((item) => (
                <div key={item.label} className="flex items-center gap-4 p-4 rounded-xl border border-ink/8 hover:border-ink/20 hover:bg-white transition-all duration-300 group">
                  <span className="text-xl w-8 text-center">{item.icon}</span>
                  <div>
                    <p className="font-mono text-xs text-muted uppercase tracking-wider">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
                        className="text-sm font-medium text-ink group-hover:text-accent transition-colors duration-200">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-ink">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-5 bg-ink rounded-2xl text-cream">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="font-mono text-xs text-cream/60 uppercase tracking-widest">Status</span>
              </div>
              <p className="font-display text-lg font-bold">Currently Open</p>
              <p className="text-sm text-cream/60 mt-1">for {personalInfo.availableFor}</p>
            </div>
          </div>

          <div className="animate-fade-up" style={{ animationDelay: "0.2s", animationFillMode: "both", opacity: 0 }}>
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-8 bg-white rounded-2xl border border-ink/10">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-2xl mb-4">✓</div>
                <h3 className="font-display text-2xl font-bold text-ink mb-2">Pesan Terkirim!</h3>
                <p className="text-sm text-ink/60 mb-6">Terima kasih sudah menghubungi saya. Saya akan segera membalas.</p>
                <button onClick={() => setSent(false)} className="text-sm font-medium text-accent underline underline-offset-4">
                  Kirim pesan lain
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="font-mono text-xs text-muted uppercase tracking-widest block mb-2">Nama</label>
                  <input type="text" name="name" value={form.name} onChange={handleChange}
                    placeholder="Nama lengkap kamu" required
                    className="w-full px-4 py-3 bg-white border border-ink/15 rounded-xl text-sm text-ink placeholder-muted focus:outline-none focus:border-accent transition-colors duration-200 font-body" />
                </div>
                <div>
                  <label className="font-mono text-xs text-muted uppercase tracking-widest block mb-2">Email</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange}
                    placeholder="email@example.com" required
                    className="w-full px-4 py-3 bg-white border border-ink/15 rounded-xl text-sm text-ink placeholder-muted focus:outline-none focus:border-accent transition-colors duration-200 font-body" />
                </div>
                <div>
                  <label className="font-mono text-xs text-muted uppercase tracking-widest block mb-2">Pesan</label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={5}
                    placeholder="Ceritakan proyekmu atau sekadar sapa..." required
                    className="w-full px-4 py-3 bg-white border border-ink/15 rounded-xl text-sm text-ink placeholder-muted focus:outline-none focus:border-accent transition-colors duration-200 font-body resize-none" />
                </div>
                <button type="submit"
                  className="w-full bg-ink text-cream font-medium text-sm py-3.5 rounded-xl hover:bg-accent transition-all duration-300 group flex items-center justify-center gap-2">
                  Kirim Pesan
                  <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}