export default function Footer() {
  return (
    <footer className="border-t border-ink/10 py-8 mt-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-body text-sm text-muted">
          © 2024 <span className="text-ink font-medium">Fathur Rahman</span>. Crafted with React + Vite + Tailwind.
        </p>
        <div className="flex items-center gap-6">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="text-sm text-muted hover:text-accent transition-colors duration-200">GitHub</a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-sm text-muted hover:text-accent transition-colors duration-200">LinkedIn</a>
          <a href="mailto:fathur.rahman@email.com" className="text-sm text-muted hover:text-accent transition-colors duration-200">Email</a>
        </div>
      </div>
    </footer>
  );
}