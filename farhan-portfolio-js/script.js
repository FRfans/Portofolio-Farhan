/*
  Portfolio Farhan Rahmansyah
  Edit data di bawah ini untuk menambah project, skill, sertifikasi, atau pengalaman.
*/

const experiences = [
  {
    role: "Machine Learning Engineering",
    organization: "DBS Coding Camp 2025",
    period: "Februari 2025 - Agustus 2025",
    description:
      "Program intensif machine learning dengan pengalaman sebagai peserta terpilih dan Lead Tutor.",
    points: [
      "Terpilih sebagai Top 140 peserta terbaik dari lebih dari 2.200 peserta.",
      "Berkontribusi sebagai Lead Tutor dalam pembelajaran technical dan collaborative project.",
      "Mengembangkan model machine learning/deep learning menggunakan Scikit-Learn dan PyTorch.",
      "Membangun sistem rekomendasi serta RAG menggunakan Sentence-BERT dan FAISS.",
    ],
  },
  {
    role: "Data Scientist - Internship",
    organization: "Badan Pusat Statistik Kota Batu",
    period: "Mei 2025 - Juli 2025",
    description:
      "Internship data science untuk kebutuhan forecasting, API, dan validasi data lapangan.",
    points: [
      "Mengembangkan sistem forecasting produksi hortikultura menggunakan Prophet.",
      "Membangun API model forecasting menggunakan FastAPI dengan format JSON production-ready.",
      "Melakukan evaluasi hasil prediksi dan interpretasi data untuk kebutuhan stakeholder.",
      "Terlibat dalam tagging lokasi infrastruktur dan UMKM untuk validasi data spasial lapangan.",
    ],
  },
  {
    role: "S1 Teknik Informatika",
    organization: "Universitas Brawijaya",
    period: "Agustus 2022 - Sekarang",
    description:
      "Fokus pada AI, data analytics, software engineering, dan penelitian LLM berbasis RAG.",
    points: [
      "IPK 3.8/4.00.",
      "Aktif dalam proyek akademik dan ekstrakurikuler berbasis teknologi.",
      "Mengerjakan penelitian pengukuran dan reduksi halusinasi pada LLM berbasis RAG.",
    ],
  },
];

const projects = [
  {
    title: "Pengukuran dan Reduksi Halusinasi LLM berbasis RAG",
    category: "AI/RAG",
    icon: "🧠",
    description:
      "Pipeline RAG untuk mengukur dan mengurangi halusinasi pada LLM menggunakan retrieval, mitigasi, dan evaluasi.",
    stack: [
      "Python",
      "LLM",
      "RAG",
      "Sentence-BERT",
      "FAISS",
      "Prompt Engineering",
      "Model Evaluation",
    ],
    github: "#",
    demo: "#",
  },
  {
    title: "Nutriplan Recommendation System & RAG Chatbot",
    category: "AI/RAG",
    icon: "🥗",
    description:
      "Sistem rekomendasi nutrisi dan chatbot berbasis RAG untuk memberikan informasi makanan yang lebih kontekstual.",
    stack: [
      "Python",
      "RAG",
      "Chatbot",
      "Vector Store",
      "Recommendation System",
    ],
    github: "#",
    demo: "#",
  },
  {
    title: "Personality Classifier with CI/CD, MLflow, and Docker",
    category: "MLOps",
    icon: "⚙️",
    description:
      "Model klasifikasi kepribadian end-to-end dengan tracking eksperimen, containerization, dan workflow deployment.",
    stack: [
      "Python",
      "Scikit-Learn",
      "Random Forest",
      "MLflow",
      "Docker",
      "CI/CD",
    ],
    github: "#",
    demo: "#",
  },
  {
    title: "Human Activity Classification using MLP & Backpropagation",
    category: "Machine Learning",
    icon: "🏃",
    description:
      "Klasifikasi aktivitas manusia berbasis data time series menggunakan MLP dan backpropagation.",
    stack: [
      "Python",
      "MLP",
      "Backpropagation",
      "Time Series",
      "Classification",
    ],
    github: "#",
    demo: "#",
  },
  {
    title: "Forecasting Tanaman Hortikultura using Prophet & FastAPI",
    category: "Data Science",
    icon: "🌱",
    description:
      "Sistem forecasting produksi hortikultura untuk mendukung analisis ketahanan pangan daerah.",
    stack: [
      "Python",
      "Prophet",
      "FastAPI",
      "Forecasting",
      "JSON API",
      "Data Analysis",
    ],
    github: "#",
    demo: "#",
  },
  {
    title: "CTU-13 Network Traffic Classification using MLP",
    category: "Machine Learning",
    icon: "🛡️",
    description:
      "Model klasifikasi traffic jaringan CTU-13 menggunakan Multi-Layer Perceptron.",
    stack: [
      "Python",
      "MLP",
      "Deep Learning",
      "Network Traffic",
      "Classification",
    ],
    github: "#",
    demo: "#",
  },
  {
    title: "Sentiment Analysis Aplikasi Triv using LSTM, GRU, and CNN",
    category: "NLP",
    icon: "💬",
    description:
      "Analisis sentimen ulasan aplikasi Triv menggunakan beberapa model deep learning berbasis NLP.",
    stack: ["Python", "NLP", "LSTM", "GRU", "CNN", "Deep Learning"],
    github: "#",
    demo: "#",
  },
  {
    title: "CIFAKE Image Classification using CNN",
    category: "Computer Vision",
    icon: "🖼️",
    description:
      "Model klasifikasi gambar CIFAKE untuk membedakan citra asli dan citra sintetis menggunakan CNN.",
    stack: [
      "Python",
      "CNN",
      "Deep Learning",
      "Image Classification",
      "Computer Vision",
    ],
    github: "#",
    demo: "#",
  },
  {
    title: "Heart Disease Risk Prediction using Random Forest",
    category: "Machine Learning",
    icon: "❤️",
    description:
      "Model machine learning untuk memprediksi risiko penyakit jantung berdasarkan data klinis pasien.",
    stack: [
      "Python",
      "Pandas",
      "Scikit-Learn",
      "Random Forest",
      "GridSearchCV",
      "Classification",
    ],
    github: "#",
    demo: "#",
  },
  {
    title: "Book Recommendation System using Collaborative Filtering",
    category: "Recommendation System",
    icon: "📚",
    description:
      "Sistem rekomendasi buku berdasarkan pola rating pengguna menggunakan collaborative filtering.",
    stack: [
      "Python",
      "Pandas",
      "Scikit-Learn",
      "Collaborative Filtering",
      "Cosine Similarity",
      "RMSE",
    ],
    github: "#",
    demo: "#",
  },
  {
    title: "Amazon Stock Segmentation and Cluster Classification",
    category: "Machine Learning",
    icon: "📈",
    description:
      "Analisis data saham Amazon dengan clustering K-Means dan klasifikasi hasil cluster menggunakan Random Forest.",
    stack: [
      "Python",
      "Pandas",
      "Scikit-Learn",
      "K-Means",
      "PCA",
      "Random Forest",
    ],
    github: "#",
    demo: "#",
  },
];

const skillGroups = [
  {
    title: "AI, LLM & RAG",
    skills: [
      "LLM",
      "RAG",
      "Prompt Engineering",
      "Sentence-BERT",
      "FAISS",
      "Vector Store",
      "Chatbot",
    ],
  },
  {
    title: "Machine Learning & Deep Learning",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "Scikit-Learn",
      "Random Forest",
      "K-Means",
      "PCA",
      "MLP",
      "CNN",
      "LSTM",
      "GRU",
    ],
  },
  {
    title: "Data Science & Analytics",
    skills: [
      "Python",
      "SQL",
      "Pandas",
      "Data Analysis",
      "Data Visualization",
      "Forecasting",
      "Prophet",
      "Model Evaluation",
    ],
  },
  {
    title: "Backend, MLOps & Tools",
    skills: [
      "FastAPI",
      "JSON API",
      "Docker",
      "MLflow",
      "CI/CD",
      "Git",
      "Experiment Tracking",
    ],
  },
  {
    title: "Bahasa",
    skills: ["Indonesia", "Inggris"],
  },
];

const certifications = [
  {
    title: "AWS Academy Data Engineering",
    issuer: "AWS",
    date: "23 Mei 2025",
    description:
      "Fondasi data engineering, cloud data workflow, dan praktik pengelolaan data modern.",
  },
  {
    title: "Analisis Data dengan Python",
    issuer: "Dicoding Indonesia",
    date: "Maret 2025",
    description:
      "Analisis data, eksplorasi dataset, dan pengolahan data menggunakan Python.",
  },
  {
    title: "Structured Query Language (SQL)",
    issuer: "Dicoding Indonesia",
    date: "Maret 2025",
    description:
      "Query database relasional, manipulasi data, dan dasar pengambilan insight menggunakan SQL.",
  },
  {
    title: "Visualisasi Data",
    issuer: "Dicoding Indonesia",
    date: "Maret 2025",
    description:
      "Penyajian insight melalui chart dan visualisasi data yang komunikatif.",
  },
  {
    title: "Pengembangan Machine Learning",
    issuer: "Dicoding Indonesia",
    date: "24 April 2025",
    description:
      "Pengembangan model ML, evaluasi, dan penerapan workflow machine learning.",
  },
  {
    title: "Machine Learning Terapan",
    issuer: "Dicoding Indonesia",
    date: "28 Mei 2025",
    description:
      "Mempelajari penerapan machine learning untuk predictive analytics, sentiment analysis, computer vision, dan recommendation system.",
  },
  {
    title: "Microsoft Office Desktop Application",
    issuer: "Trust Training Partners",
    date: "26 Agustus 2025",
    description:
      "Pelatihan dan asesmen kompetensi penggunaan aplikasi Microsoft Office Desktop.",
  },
];

const projectFilters = [
  "All",
  ...new Set(projects.map((project) => project.category)),
];
let currentFilter = "All";

function renderExperience() {
  const container = document.querySelector("#experienceTimeline");
  container.innerHTML = experiences
    .map(
      (item) => `
    <article class="timeline-item reveal">
      <span class="timeline-dot"></span>
      <div class="timeline-card">
        <div class="timeline-meta">
          <span>${item.period}</span>
          <span>•</span>
          <span>${item.organization}</span>
        </div>
        <h3>${item.role}</h3>
        <p>${item.description}</p>
        <ul>
          ${item.points.map((point) => `<li>${point}</li>`).join("")}
        </ul>
      </div>
    </article>
  `,
    )
    .join("");
}

function renderProjectFilters() {
  const filterContainer = document.querySelector("#projectFilters");
  filterContainer.innerHTML = projectFilters
    .map(
      (filter) => `
    <button class="filter-btn ${filter === currentFilter ? "active" : ""}" data-filter="${filter}">${filter}</button>
  `,
    )
    .join("");

  filterContainer.querySelectorAll(".filter-btn").forEach((button) => {
    button.addEventListener("click", () => {
      currentFilter = button.dataset.filter;
      renderProjectFilters();
      renderProjects();
    });
  });
}

function renderProjects() {
  const grid = document.querySelector("#projectGrid");
  const filteredProjects =
    currentFilter === "All"
      ? projects
      : projects.filter((project) => project.category === currentFilter);

  grid.innerHTML = filteredProjects
    .map(
      (project) => `
    <article class="project-card reveal visible">
      <div class="project-top">
        <div>
          <span class="tag">${project.category}</span>
          <h3 style="margin-top: 12px;">${project.title}</h3>
        </div>
        <span class="project-icon" aria-hidden="true">${project.icon}</span>
      </div>
      <p>${project.description}</p>
      <div class="tag-row">
        ${project.stack.map((item) => `<span class="tag">${item}</span>`).join("")}
      </div>
      <div class="project-links">
        <a href="${project.github}" aria-label="Buka GitHub ${project.title}">GitHub ↗</a>
        <a href="${project.demo}" aria-label="Buka demo ${project.title}">Demo ↗</a>
      </div>
    </article>
  `,
    )
    .join("");
}

function renderSkills() {
  const container = document.querySelector("#skillGroups");
  container.innerHTML = skillGroups
    .map(
      (group) => `
    <article class="skill-group">
      <h3>${group.title}</h3>
      <div class="skill-tags">
        ${group.skills.map((skill) => `<span class="tag">${skill}</span>`).join("")}
      </div>
    </article>
  `,
    )
    .join("");
}

function renderCertifications() {
  const container = document.querySelector("#certGrid");
  container.innerHTML = certifications
    .map(
      (cert) => `
    <article class="cert-card reveal">
      <span>${cert.date}</span>
      <h3>${cert.title}</h3>
      <p><strong>${cert.issuer}</strong> — ${cert.description}</p>
    </article>
  `,
    )
    .join("");
}

function setupMobileMenu() {
  const toggle = document.querySelector("#menuToggle");
  const links = document.querySelector("#navLinks");

  toggle.addEventListener("click", () => {
    links.classList.toggle("open");
    document.body.classList.toggle("menu-open");
  });

  links.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      links.classList.remove("open");
      document.body.classList.remove("menu-open");
    });
  });
}

function setupRevealAnimation() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 },
  );

  document
    .querySelectorAll(".reveal")
    .forEach((element) => observer.observe(element));
}

function setupBackToTop() {
  const button = document.querySelector("#backToTop");
  window.addEventListener("scroll", () => {
    button.classList.toggle("show", window.scrollY > 700);
  });
  button.addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" }),
  );
}

function setupActiveNav() {
  const sections = ["about", "experience", "projects", "skills", "contact"].map(
    (id) => document.getElementById(id),
  );
  const navItems = document.querySelectorAll(".nav-links a");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) current = section.id;
    });

    navItems.forEach((link) => {
      link.classList.toggle(
        "active",
        link.getAttribute("href") === `#${current}`,
      );
    });
  });
}

function init() {
  renderExperience();
  renderProjectFilters();
  renderProjects();
  renderSkills();
  renderCertifications();
  setupMobileMenu();
  setupRevealAnimation();
  setupBackToTop();
  setupActiveNav();
}

document.addEventListener("DOMContentLoaded", init);
