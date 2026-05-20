export const personalInfo = {
  name: "Fathur Rahman",
  title: "Frontend Developer",
  subtitle: "UI/UX Enthusiast",
  bio: "Mahasiswa Teknologi Informasi yang passionate dalam membangun antarmuka web yang indah, fungsional, dan berpusat pada pengguna. Saya percaya bahwa code yang baik dan desain yang thoughtful bisa menciptakan pengalaman digital yang benar-benar bermakna.",
  location: "Yogyakarta, Indonesia",
  email: "fathur.rahman@email.com",
  github: "github.com/fathurrahman",
  linkedin: "linkedin.com/in/fathurrahman",
  availableFor: "Internship & Freelance",
};

export const skills = [
  { category: "Frontend", items: ["React.js", "Vue.js", "HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript"] },
  { category: "Styling", items: ["Tailwind CSS", "SASS/SCSS", "Styled Components", "Framer Motion"] },
  { category: "Tools", items: ["Git & GitHub", "Vite", "Figma", "VS Code", "Postman"] },
  { category: "Backend Basics", items: ["Node.js", "Express.js", "REST API", "MySQL"] },
];

export const projects = [
  {
    id: 1,
    title: "NusaMarket",
    category: "E-Commerce",
    description: "Platform e-commerce produk lokal Indonesia dengan fitur filter produk, keranjang belanja, dan checkout yang responsif. Dibangun dengan React dan Tailwind CSS.",
    tech: ["React", "Tailwind CSS", "Context API", "JSON Server"],
    year: "2024",
    color: "#E8562A",
    featured: true,
  },
  {
    id: 2,
    title: "WeatherNow",
    category: "Web App",
    description: "Aplikasi cuaca real-time yang menampilkan kondisi cuaca terkini, prakiraan 7 hari, dan visualisasi data cuaca menggunakan OpenWeather API.",
    tech: ["React", "OpenWeather API", "Chart.js", "CSS Modules"],
    year: "2024",
    color: "#3B82F6",
    featured: true,
  },
  {
    id: 3,
    title: "StudySpace",
    category: "Productivity",
    description: "Aplikasi manajemen tugas dan jadwal belajar untuk mahasiswa dengan fitur Pomodoro timer, to-do list, dan progress tracker.",
    tech: ["React", "LocalStorage", "Tailwind CSS", "Vite"],
    year: "2023",
    color: "#10B981",
    featured: true,
  },
  {
    id: 4,
    title: "BatikLore",
    category: "Company Profile",
    description: "Website company profile untuk UMKM batik lokal Yogyakarta dengan galeri produk, cerita brand, dan halaman kontak.",
    tech: ["HTML", "CSS", "JavaScript", "AOS"],
    year: "2023",
    color: "#C9A84C",
    featured: false,
  },
  {
    id: 5,
    title: "DevBlog",
    category: "Blog",
    description: "Personal blog platform untuk developer dengan fitur artikel, kategori, pencarian, dan mode gelap/terang.",
    tech: ["React", "React Router", "Markdown", "Tailwind CSS"],
    year: "2023",
    color: "#8B5CF6",
    featured: false,
  },
  {
    id: 6,
    title: "Kanban Board",
    category: "Tool",
    description: "Aplikasi manajemen proyek berbasis drag-and-drop dengan kolom To Do, In Progress, dan Done. Mendukung multi-board dan label prioritas.",
    tech: ["React", "DnD Kit", "Zustand", "Tailwind CSS"],
    year: "2024",
    color: "#F59E0B",
    featured: false,
  },
];

export const experiences = [
  {
    role: "Frontend Developer Intern",
    company: "PT. Solusi Digital Nusantara",
    period: "Jul 2024 – Sep 2024",
    description: "Membangun dan memaintain komponen React untuk dashboard admin internal. Berkontribusi dalam migrasi dari Bootstrap ke Tailwind CSS.",
  },
  {
    role: "Web Developer",
    company: "Unit Kegiatan Mahasiswa IT",
    period: "Agu 2023 – Sekarang",
    description: "Mengembangkan dan mengelola website UKM, menangani event registration system, dan melatih anggota baru terkait pengembangan web.",
  },
  {
    role: "Freelance Web Designer",
    company: "Mandiri",
    period: "Jan 2023 – Sekarang",
    description: "Merancang dan mengembangkan website untuk berbagai klien UMKM lokal, dari company profile hingga landing page produk.",
  },
];

export const education = {
  degree: "S1 Teknologi Informasi",
  university: "Universitas Muhammadiyah Yogyakarta",
  period: "2024 – Sekarang",
  gpa: "3.78 / 4.00",
};