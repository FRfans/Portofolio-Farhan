const experiences = [
  {
    role: "Machine Learning Engineering",
    organization: "DBS Coding Camp 2025",
    period: "February 2025 - August 2025",
    description:
      "An intensive machine learning program where I participated as a selected learner and Lead Tutor.",
    points: [
      "Selected as one of the Top 140 participants out of more than 2,200 applicants.",
      "Contributed as a Lead Tutor in technical learning sessions and collaborative projects.",
      "Developed machine learning and deep learning models using Scikit-Learn and PyTorch.",
      "Built recommendation systems and RAG pipelines using Sentence-BERT and FAISS.",
    ],
  },
  {
    role: "Data Scientist - Internship",
    organization: "BPS Kota Batu",
    period: "May 2025 - July 2025",
    description:
      "A data science internship focused on forecasting, API development, and field data validation.",
    points: [
      "Developed a horticultural production forecasting system using Prophet.",
      "Built a forecasting model API using FastAPI with production-ready JSON output.",
      "Evaluated prediction results and translated data insights for stakeholder needs.",
      "Participated in infrastructure and MSME location tagging for spatial data validation.",
    ],
  },
  {
    role: "Bachelor of Informatics Engineering",
    organization: "Universitas Brawijaya",
    period: "August 2022 - Present",
    description:
      "Focused on AI, data analytics, software engineering, and RAG-based LLM research.",
    points: [
      "GPA: 3.8/4.00.",
      "Actively involved in academic and extracurricular technology-based projects.",
      "Conducting research on measuring and reducing hallucination in RAG-based LLM systems.",
    ],
  },
];

const projects = [
  {
    title: "Measurement and Mitigation of LLM Hallucination using RAG",
    category: "AI/RAG",
    icon: "🧠",
    description:
      "A RAG pipeline designed to measure and reduce LLM hallucination through retrieval, mitigation, and evaluation.",
    impact:
      "Focus: reliable AI, hallucination evaluation, and mitigation strategy.",
    stack: [
      "Python",
      "LLM",
      "RAG",
      "Sentence-BERT",
      "FAISS",
      "Prompt Engineering",
      "Evaluation",
    ],
    github: "https://github.com/FRfans/Pengukuran-dan-Reduksi-Halusinasi-RAG",
  },
  {
    title: "Nutriplan Recommendation System & RAG Chatbot",
    category: "AI/RAG",
    icon: "🥗",
    description:
      "A nutrition recommendation system and RAG-based chatbot that provides contextual food-related information.",
    impact:
      "Focus: contextual food recommendation and retrieval-based chatbot.",
    stack: [
      "Python",
      "RAG",
      "Chatbot",
      "Vector Store",
      "Recommendation System",
    ],
    github: "https://github.com/FRfans/Casptone-Project-Nutrplan",
  },
  {
    title: "Personality Classifier with CI/CD, MLflow, and Docker",
    category: "MLOps",
    icon: "⚙️",
    description:
      "An end-to-end personality classification model with experiment tracking, containerization, and deployment workflow.",
    impact:
      "Focus: experiment tracking, model packaging, and deployment workflow.",
    stack: [
      "Python",
      "Scikit-Learn",
      "Random Forest",
      "MLflow",
      "Docker",
      "CI/CD",
    ],
    github: "https://github.com/FRfans/MlOps1",
  },
  {
    title: "Human Activity Classification using MLP & Backpropagation",
    category: "Machine Learning",
    icon: "🏃",
    description:
      "A time-series human activity classification model using Multi-Layer Perceptron and backpropagation.",
    impact: "Focus: supervised learning for time-series activity recognition.",
    stack: [
      "Python",
      "MLP",
      "Backpropagation",
      "Time Series",
      "Classification",
    ],
    github: "https://github.com/FRfans/time-series-human-activities",
  },
  {
    title: "Horticultural Crop Forecasting using Prophet & FastAPI",
    category: "Data Science",
    icon: "🌱",
    description:
      "A horticultural production forecasting system to support regional food security analysis.",
    impact:
      "Focus: time-series forecasting, API output, and stakeholder interpretation.",
    stack: [
      "Python",
      "Prophet",
      "FastAPI",
      "Forecasting",
      "JSON API",
      "Data Analysis",
    ],
    github: "https://github.com/FRfans/Horticultural-Crop-Forecasting",
  },
  {
    title: "CTU-13 Network Traffic Classification using MLP",
    category: "Machine Learning",
    icon: "🛡️",
    description:
      "A CTU-13 network traffic classification model using Multi-Layer Perceptron.",
    impact: "Focus: network traffic classification and deep learning baseline.",
    stack: [
      "Python",
      "MLP",
      "Deep Learning",
      "Network Traffic",
      "Classification",
    ],
    github: "https://github.com/FRfans/CTU--13-Dataset-with-mlp",
  },
  {
    title: "Triv App Sentiment Analysis using LSTM, GRU, and CNN",
    category: "NLP",
    icon: "💬",
    description:
      "A sentiment analysis project on Triv app reviews using multiple NLP-based deep learning models.",
    impact: "Focus: text classification and comparative NLP modeling.",
    stack: ["Python", "NLP", "LSTM", "GRU", "CNN", "Deep Learning"],
    github: "#",
  },
  {
    title: "CIFAKE Image Classification using CNN",
    category: "Computer Vision",
    icon: "🖼️",
    description:
      "An image classification model for distinguishing real and synthetic images using CNN.",
    impact:
      "Focus: image classification for real-vs-synthetic image detection.",
    stack: [
      "Python",
      "CNN",
      "Deep Learning",
      "Image Classification",
      "Computer Vision",
    ],
    github: "https://github.com/FRfans/Cifake_CNN-Clasification",
  },
  {
    title: "Heart Disease Risk Prediction using Random Forest",
    category: "Machine Learning",
    icon: "❤️",
    description:
      "A machine learning model for predicting heart disease risk based on patients’ clinical data.",
    impact: "Focus: clinical risk prediction with Random Forest and tuning.",
    stack: [
      "Python",
      "Pandas",
      "Scikit-Learn",
      "Random Forest",
      "GridSearchCV",
      "Classification",
    ],
    github: "https://github.com/FRfans/Heart-Disease-Risk-Prediction",
  },
  {
    title: "Book Recommendation System using Collaborative Filtering",
    category: "Recommendation System",
    icon: "📚",
    description:
      "A book recommendation system based on user rating patterns using collaborative filtering.",
    impact:
      "Focus: user-item recommendation using similarity and RMSE evaluation.",
    stack: [
      "Python",
      "Pandas",
      "Scikit-Learn",
      "Collaborative Filtering",
      "Cosine Similarity",
      "RMSE",
    ],
    github: "https://github.com/FRfans/Book-Recommendation-System",
  },
  {
    title: "Amazon Stock Segmentation and Cluster Classification",
    category: "Machine Learning",
    icon: "📈",
    description:
      "An Amazon stock data analysis project using K-Means clustering and Random Forest for cluster classification.",
    impact:
      "Focus: stock data segmentation, dimensionality reduction, and cluster labeling.",
    stack: [
      "Python",
      "Pandas",
      "Scikit-Learn",
      "K-Means",
      "PCA",
      "Random Forest",
    ],
    github:
      "https://github.com/FRfans/Amazon-Stock-Clustering-and-Classification",
  },
];

const skillGroups = [
  {
    title: "AI, LLM & RAG",
    level: 86,
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
    level: 88,
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
    level: 84,
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
    level: 78,
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
];

const certifications = [
  {
    title: "AWS Academy Data Engineering",
    issuer: "AWS",
    date: "May 23, 2025",
    description:
      "Covered data engineering fundamentals, cloud data workflows, and modern data management practices.",
  },
  {
    title: "Data Analysis with Python",
    issuer: "Dicoding Indonesia",
    date: "March 2025",
    description:
      "Covered data analysis, dataset exploration, and data processing using Python.",
  },
  {
    title: "Structured Query Language (SQL)",
    issuer: "Dicoding Indonesia",
    date: "March 2025",
    description:
      "Covered relational database queries, data manipulation, and basic insight extraction using SQL.",
  },
  {
    title: "Data Visualization",
    issuer: "Dicoding Indonesia",
    date: "March 2025",
    description:
      "Covered effective data visualization techniques and data storytelling principles.",
  },
  {
    title: "Machine Learning Development",
    issuer: "Dicoding Indonesia",
    date: "April 24, 2025",
    description:
      "Covered machine learning development, model evaluation, and applied ML workflows.",
  },
  {
    title: "Applied Machine Learning",
    issuer: "Dicoding Indonesia",
    date: "May 28, 2025",
    description:
      "Covered applied machine learning for predictive analytics, sentiment analysis, computer vision, and recommendation systems.",
  },
  {
    title: "Microsoft Office Desktop Application",
    issuer: "Trust Training Partners",
    date: "August 26, 2025",
    description:
      "Completed competency training and assessment for Microsoft Office desktop applications.",
  },
];

const processSteps = [
  {
    title: "Research & Problem Framing",
    description:
      "Understand user and stakeholder needs, data context, problem constraints, and success metrics.",
  },
  {
    title: "Data & System Design",
    description:
      "Define the data pipeline, preprocessing flow, retrieval/modeling strategy, experiments, and evaluation structure.",
  },
  {
    title: "Build, Evaluate, Iterate",
    description:
      "Build the model or prototype, evaluate performance, analyze error patterns, and iterate the solution.",
  },
  {
    title: "Deploy & Communicate",
    description:
      "Prepare APIs, documentation, visualizations, and insights so the solution can be used by stakeholders.",
  },
];

const testimonials = [
  {
    quote:
      "I am used to bridging technical requirements and stakeholder needs through models, APIs, and easy-to-understand visualizations.",
    name: "Portfolio Positioning",
    role: "AI/Data Communication",
  },
  {
    quote:
      "My projects are designed not only to achieve strong metrics, but also to be evaluated, explained, and improved over time.",
    name: "Working Principle",
    role: "Reliable Machine Learning",
  },
];

const projectFilters = [
  "All",
  ...new Set(projects.map((project) => project.category)),
];
let currentFilter = "All";
let skillsAnimated = false;
let countersAnimated = false;

function renderExperience() {
  const container = document.querySelector("#experienceTimeline");
  container.innerHTML = experiences
    .map(
      (item) => `
        <article class="timeline-item reveal">
          <span class="timeline-dot" aria-hidden="true"></span>
          <div class="timeline-card">
            <div class="timeline-meta">
              <span>${item.period}</span>
              <span aria-hidden="true">•</span>
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
        <button class="filter-btn ${filter === currentFilter ? "active" : ""}" type="button" data-filter="${filter}" aria-pressed="${filter === currentFilter}">${filter}</button>
      `,
    )
    .join("");

  filterContainer.querySelectorAll(".filter-btn").forEach((button) => {
    button.addEventListener("click", () => {
      currentFilter = button.dataset.filter;
      renderProjectFilters();
      renderProjects();
      setupRevealAnimation();
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
      <article class="project-card reveal visible stagger-item">
        <div
          class="project-thumb project-impact-trigger"
          role="button"
          tabindex="0"
          aria-expanded="false"
          aria-label="Tampilkan project impact ${project.title}"
        >
          <span class="project-category">${project.category}</span>

          <span class="project-icon" aria-hidden="true">${project.icon}</span>

          <div class="project-impact-panel">
            <span class="impact-label">Project Impact</span>
            <p>
              ${
                project.impact ||
                "Demonstrates the ability to build end-to-end solutions from analysis and modeling to evaluation and result presentation."
              }
            </p>
            <small>Click this area to close</small>
          </div>
        </div>

        <div class="project-body">
          <h3>${project.title}</h3>
          <p>${project.description}</p>

          <div class="tag-row">
            ${project.stack
              .map((item) => `<span class="tag">${item}</span>`)
              .join("")}
          </div>

          <div class="project-links">
            <a href="${project.github}" target = "_blank" rel="noreferrer" aria-label="Buka GitHub ${project.title}">
              GitHub ↗
            </a>
          </div>
        </div>
      </article>
    `,
    )
    .join("");
}
function setupProjectImpact() {
  document.addEventListener("click", (event) => {
    const trigger = event.target.closest(".project-impact-trigger");

    if (!trigger) return;

    const card = trigger.closest(".project-card");
    const isOpen = card.classList.contains("impact-open");

    document.querySelectorAll(".project-card.impact-open").forEach((item) => {
      item.classList.remove("impact-open");

      const itemTrigger = item.querySelector(".project-impact-trigger");
      if (itemTrigger) itemTrigger.setAttribute("aria-expanded", "false");
    });

    if (!isOpen) {
      card.classList.add("impact-open");
      trigger.setAttribute("aria-expanded", "true");
    }
  });

  document.addEventListener("keydown", (event) => {
    const trigger = event.target.closest(".project-impact-trigger");

    if (!trigger) return;

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      trigger.click();
    }

    if (event.key === "Escape") {
      const card = trigger.closest(".project-card");
      card.classList.remove("impact-open");
      trigger.setAttribute("aria-expanded", "false");
    }
  });

  document.addEventListener("click", (event) => {
    if (event.target.closest(".project-card")) return;

    document.querySelectorAll(".project-card.impact-open").forEach((card) => {
      card.classList.remove("impact-open");

      const trigger = card.querySelector(".project-impact-trigger");
      if (trigger) trigger.setAttribute("aria-expanded", "false");
    });
  });
}
function renderSkills() {
  const container = document.querySelector("#skillGroups");
  container.innerHTML = skillGroups
    .map(
      (group) => `
        <article class="skill-group">
          <div class="skill-head">
            <h3>${group.title}</h3>
            <span class="skill-percent" data-level="${group.level}">0%</span>
          </div>
          <div class="skill-track" aria-hidden="true">
            <span class="skill-bar" data-level="${group.level}"></span>
          </div>
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
      (cert, index) => `
        <article class="cert-card stagger-item" style="transition-delay: ${index * 45}ms;">
          <span>${cert.date}</span>
          <h3>${cert.title}</h3>
          <p><strong>${cert.issuer}</strong> — ${cert.description}</p>
        </article>
      `,
    )
    .join("");
}

function renderProcess() {
  const container = document.querySelector("#processGrid");
  container.innerHTML = processSteps
    .map(
      (step, index) => `
        <article class="process-card stagger-item" style="transition-delay: ${index * 110}ms;">
          <span class="process-number">0${index + 1}</span>
          <h3>${step.title}</h3>
          <p>${step.description}</p>
        </article>
      `,
    )
    .join("");
}

function renderTestimonials() {
  const container = document.querySelector("#testimonialGrid");
  container.innerHTML = testimonials
    .map(
      (item, index) => `
        <article class="testimonial-card stagger-item" style="transition-delay: ${index * 110}ms;">
          <p>“${item.quote}”</p>
          <h3>${item.name}</h3>
          <span>${item.role}</span>
        </article>
      `,
    )
    .join("");
}

function setupMobileMenu() {
  const toggle = document.querySelector("#menuToggle");
  const links = document.querySelector("#navLinks");

  toggle.addEventListener("click", () => {
    const isOpen = links.classList.toggle("open");
    document.body.classList.toggle("menu-open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  links.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      links.classList.remove("open");
      document.body.classList.remove("menu-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

function setupRevealAnimation() {
  const revealElements = document.querySelectorAll(
    ".reveal:not(.visible), .stagger-item:not(.visible)",
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.14, rootMargin: "0px 0px -6% 0px" },
  );

  revealElements.forEach((element) => observer.observe(element));
}

function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");
      if (!targetId || targetId === "#") return;
      const target = document.querySelector(targetId);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
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

function setupScrollProgress() {
  const progress = document.querySelector("#scrollProgress");
  const update = () => {
    const scrollable =
      document.documentElement.scrollHeight - window.innerHeight;
    const width = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
    progress.style.width = `${width}%`;
  };
  update();
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
}

function setupActiveNav() {
  const sections = [
    "about",
    "projects",
    "process",
    "experience",
    "skills",
    "contact",
  ]
    .map((id) => document.getElementById(id))
    .filter(Boolean);
  const navItems = document.querySelectorAll(".nav-links a");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navItems.forEach((link) => {
          link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${entry.target.id}`,
          );
        });
      });
    },
    { threshold: 0.42 },
  );

  sections.forEach((section) => observer.observe(section));
}

function setupParallax() {
  const parallaxItems = document.querySelectorAll("[data-parallax]");
  let ticking = false;

  const update = () => {
    const y = window.scrollY;
    parallaxItems.forEach((item) => {
      const speed = Number(item.dataset.parallax || 0.05);
      item.style.transform = `translate3d(0, ${y * speed}px, 0)`;
    });
    ticking = false;
  };

  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    },
    { passive: true },
  );
}

function animateCounters() {
  if (countersAnimated) return;
  countersAnimated = true;

  document.querySelectorAll(".counter").forEach((counter) => {
    const target = Number(counter.dataset.target);
    const decimal = Number(counter.dataset.decimal || 0);
    const duration = 1100;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = target * eased;
      counter.textContent = value.toFixed(decimal);
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  });
}

function animateSkills() {
  if (skillsAnimated) return;
  skillsAnimated = true;

  document.querySelectorAll(".skill-bar").forEach((bar) => {
    bar.style.width = `${bar.dataset.level}%`;
  });

  document.querySelectorAll(".skill-percent").forEach((label) => {
    const target = Number(label.dataset.level);
    const start = performance.now();
    const duration = 1000;

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      label.textContent = `${Math.round(target * eased)}%`;
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  });
}

function setupTriggeredAnimations() {
  const skillsSection = document.querySelector("#skills");
  const heroMetrics = document.querySelector("#heroMetrics");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        if (entry.target === skillsSection) animateSkills();
        if (entry.target === heroMetrics) animateCounters();
      });
    },
    { threshold: 0.35 },
  );

  if (skillsSection) observer.observe(skillsSection);
  if (heroMetrics) observer.observe(heroMetrics);
}

function setupCustomCursor() {
  const cursor = document.querySelector("#cursorDot");
  if (!cursor || window.matchMedia("(hover: none)").matches) return;

  window.addEventListener("mousemove", (event) => {
    cursor.style.opacity = "1";
    cursor.style.left = `${event.clientX}px`;
    cursor.style.top = `${event.clientY}px`;
  });

  document
    .querySelectorAll("a, button, input, textarea, .project-card")
    .forEach((item) => {
      item.addEventListener("mouseenter", () =>
        cursor.classList.add("is-active"),
      );
      item.addEventListener("mouseleave", () =>
        cursor.classList.remove("is-active"),
      );
    });
}

function setupContactForm() {
  const form = document.querySelector("#contactForm");
  const note = document.querySelector("#formNote");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const name = encodeURIComponent(data.get("name") || "");
    const email = encodeURIComponent(data.get("email") || "");
    const message = encodeURIComponent(data.get("message") || "");
    const subject = encodeURIComponent("Portfolio Inquiry - Farhan Rahmansyah");
    const body = `Halo Farhan,%0D%0A%0D%0ANama: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0APesan:%0D%0A${message}`;

    window.location.href = `mailto:rahmansyahfr22@gmail.com?subject=${subject}&body=${body}`;
    note.textContent = "Aplikasi email Anda akan terbuka untuk mengirim pesan.";
  });
}

function setupPageLoad() {
  window.addEventListener("load", () => {
    document.body.classList.add("loaded");
    if (window.lucide) window.lucide.createIcons();
  });
}

function init() {
  renderExperience();
  renderProjectFilters();
  renderProjects();
  renderSkills();
  renderCertifications();
  renderProcess();
  renderTestimonials();
  setupProjectImpact();
  setupMobileMenu();
  setupRevealAnimation();
  setupSmoothScroll();
  setupBackToTop();
  setupScrollProgress();
  setupActiveNav();
  setupParallax();
  setupTriggeredAnimations();
  setupCustomCursor();
  setupContactForm();
  setupPageLoad();
}

document.addEventListener("DOMContentLoaded", init);
