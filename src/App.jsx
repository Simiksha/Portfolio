import movieImg from "./assets/movie.png";
import expenseImg from "./assets/Expense.png";
import realestateImg from "./assets/realestate.png";

const skills = {
  "Backend Development": [
    "Java",
    "Spring Boot",
    "Spring Security",
    "Spring Data JPA",
    "REST API Development",
    "JWT Authentication"
  ],
  "Frontend Development": [
    "React",
    "Axios",
    "Bootstrap",
    "Media query",
    "HTML",
    "CSS",
    "JavaScript"
  ],
  "Database": [
    "PostgreSQL",
    "MySQL",
    "Database Design"
  ],
  "Tools & Platforms": [
    "Git",
    "GitHub",
    "Postman",
    "IntelliJ IDEA",
    "VS Code",
    "Netlify",
    "Render"
  ],
  "Integrations & Services": [
    "Cloudinary",
    "Razorpay",
    "Brevo"
  ],
  "Core Concepts": [
    "OOP",
    "Exception Handling",
    "Debugging",
    "API Design",
    "Problem Solving"
  ]
};

const projects = [
  {
    title: "Movie Ticket Booking System",
    description:
      "A full-stack web application for browsing movies, filtering shows, selecting seats, and booking tickets with secure authentication and Razorpay payment integration.",
    tech: ["Java", "Spring Boot", "React", "PostgreSQL", "Razorpay"],
    github: "https://github.com/Simiksha/movie-ticket-booking-system",
    demo: "https://drive.google.com/file/d/1fIlViiSaxEJs-wWYDWUK7s9juL-pdNt-/view?usp=sharing",
    image: movieImg,
  },
  {
    title: "Expense Tracker",
    description:
      "A personal finance application to manage transactions, budgets, categories, and reports with secure authentication and email verification.",
    tech: ["Java", "Spring Boot", "React", "PostgreSQL", "Brevo"],
    github: "https://github.com/Simiksha/Expense-Tracker",
    demo: "https://drive.google.com/file/d/1aibdK9yiYqj_KqI16qjQn3ZafEYENytS/view?usp=sharing",
    image: expenseImg,
  },
  {
    title: "RealNest",
    description:
      "A property listing platform with role-based access where customers can manage listings and admins can review and approve properties.",
    tech: ["Spring Boot", "React", "JWT", "PostgreSQL", "Cloudinary"],
    github: "https://github.com/Simiksha/Real-Estate-Platform",
    demo: "https://drive.google.com/file/d/1v4sl0CR77V9g36jLdTp-1OHC2PdtJ9Xf/view?usp=sharing",
    image: realestateImg,
  },
];

const additionalProjects = [
  {
    title: "Student Management System",
    description:
      "Developed RESTful APIs to manage students, courses, and enrollments with full CRUD operations. Tested endpoints using Postman to ensure reliability.",
    tech: ["Java", "Spring Boot", "JPA", "PostgreSQL"],
    github: "https://github.com/Simiksha/Student-Management-System",
  },
  {
    title: "Expense Split System",
    description:
      "Built a console-based expense manager to create groups, split expenses, and track settlements using efficient data structures like HashMap.",
    tech: ["Java", "HashMap"],
    github: "https://github.com/Simiksha/Expense-Split-System/tree/main/src/split",
  },
];

function SectionTitle({ title, subtitle }) {
  return (
    <div className="text-center mb-5">
      <div className="section-accent mx-auto mb-3"></div>
      <h2 className="fw-bold mb-2">{title}</h2>
      {subtitle && <p className="text-secondary mb-0">{subtitle}</p>}
    </div>
  );
}

function SkillCard({ title, items }) {
  return (
    <div className="col-md-6 col-lg-3">
      <div className="card h-100 p-4 custom-card">
        <h5 className="fw-bold mb-3">{title}</h5>
        <div>
          {items.map((item) => (
            <span className="skill-badge" key={item}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="card h-100 custom-card overflow-hidden">
        <img src={project.image} alt={project.title} className="project-image" />

        <div className="p-4 d-flex flex-column h-100">
          <h4 className="fw-bold mb-3">{project.title}</h4>
          <p className="text-secondary mb-2">{project.description}</p>

          <div className="mb-4">
            {project.tech.map((tech) => (
              <span className="skill-badge" key={tech}>
                {tech}
              </span>
            ))}
          </div>

          <p className="text-muted small mb-3">
            Note: Some input steps are shortened in the demo video to keep it concise.
          </p>

          <div className="mt-auto d-flex flex-wrap gap-2">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-dark rounded-pill px-4"
            >
              <i className="bi bi-github me-2"></i>
              GitHub
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="btn btn-dark rounded-pill px-4"
            >
              <i className="bi bi-play-circle me-2"></i>
              Demo Video
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function AdditionalProjectCard({ project }) {
  return (
    <div className="col-md-6">
      <div className="card p-4 custom-card h-100">
        <h5 className="fw-bold mb-2">{project.title}</h5>

        <p className="text-secondary mb-3">{project.description}</p>

        <div className="mb-3">
          {project.tech.map((tech) => (
            <span className="skill-badge" key={tech}>
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline-dark btn-sm rounded-pill px-3"
          >
            <i className="bi bi-github me-2"></i>
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="portfolio-app">

      <nav className="navbar navbar-expand-lg sticky-top">
        <div className="container">
          <a className="navbar-brand fw-bold fs-4" href="#home">
            Simiksha
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#portfolioNavbar"
            aria-controls="portfolioNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="portfolioNavbar">
            <ul className="navbar-nav ms-auto gap-lg-2">
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#education">
                  Education
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section id="home" className="hero-section">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-10">
              <div className="hero-pill mx-auto">
                <span>●</span>
                <span>Java Full Stack Developer</span>
              </div>

              <h1 className="hero-title fw-bold mb-3">Hi, I’m Simiksha</h1>

              <p className="lead text-secondary hero-subtitle mb-4">
                I build full-stack web applications using Java, Spring Boot,
                React, and PostgreSQL, with a focus on secure backend
                development and clean user experiences.
              </p>

              <div className="d-flex justify-content-center flex-wrap gap-3">
                <a href="#projects" className="btn btn-dark rounded-pill px-4 py-2">
                  View Projects
                </a>
                <a href="#contact" className="btn btn-outline-dark rounded-pill px-4 py-2">
                  Contact Me
                </a>
                <a href="https://drive.google.com/file/d/1nosRCCSHwsg72dd7AR6BDm0vq_Itwlvx/view?usp=sharing" className="btn btn-outline-dark rounded-pill px-4 py-2">
                  Resume
                </a>
              </div>

              <div className="cert-badge mx-auto">
                <i className="bi bi-patch-check-fill"></i>
                <span>Certified Java Full-Stack Developer</span>
              </div>

              <div className="hero-stats">
                <div className="stat-box">
                  <h5>3+</h5>
                  <p>Projects Built</p>
                </div>
                <div className="stat-box">
                  <h5>Java</h5>
                  <p>Backend-Focused</p>
                </div>
                <div className="stat-box">
                  <h5>React</h5>
                  <p>Frontend Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section-space">
        <div className="container">
          <SectionTitle title="About Me" subtitle="A quick introduction" />
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="card p-4 p-md-5 custom-card">
                <p className="mb-0 text-secondary fs-5">
                  I am a Java Full Stack Developer with hands-on experience in
                  building real-world web applications using Spring Boot, React,
                  and PostgreSQL. I enjoy creating secure, scalable, and
                  user-friendly applications, and I am currently looking for an
                  opportunity to start my career, contribute to meaningful
                  projects, and continue growing as a developer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="education" className="section-space section-alt">
        <div className="container">
          <SectionTitle title="Education" subtitle="My academic background" />

          <div className="row justify-content-center g-4">
            <div className="col-lg-8">
              <div className="card p-4 custom-card">
                <h5 className="fw-bold mb-1">M.Sc. Information Technology</h5>
                <p className="text-secondary mb-1">Stella Maris College, Chennai</p>
                <p className="text-muted mb-0">2023 - 2025</p>
              </div>
            </div>

            <div className="col-lg-8">
              <div className="card p-4 custom-card">
                <h5 className="fw-bold mb-1">BCA</h5>
                <p className="text-secondary mb-1">Stella Maris College, Chennai</p>
                <p className="text-muted mb-0">2020 - 2023</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container">
          <SectionTitle
            title="Certification"
            subtitle="Professional training and achievements"
          />

          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="card p-4 p-md-5 custom-card text-center">
                <h5 className="fw-bold mb-2">
                  Certified Java Full-Stack Developer
                </h5>

                <p className="text-secondary mb-2">
                  HCL GUVI
                </p>

                <p className="text-muted mb-3">
                  Nov 2025 – Mar 2026
                </p>

                <p className="text-secondary">
                  Completed intensive full-stack training with practical experience in building real-world applications, gaining a strong understanding of backend architecture, API design, and end-to-end application workflows, while continuously improving my problem-solving and development skills.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="section-space section-alt">
        <div className="container">
          <SectionTitle title="Skills" subtitle="Technologies I work with" />
          <div className="row g-4">
            {Object.entries(skills).map(([title, items]) => (
              <SkillCard key={title} title={title} items={items} />
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="section-space">
        <div className="container">
          <SectionTitle title="Projects" subtitle="Some applications I’ve built" />
          <div className="row g-4">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section id="additional-projects" className="section-space section-alt">
        <div className="container">
          <SectionTitle
            title="Additional Projects"
            subtitle="Other projects I’ve worked on"
          />
          <div className="row g-4">
            {additionalProjects.map((project) => (
              <AdditionalProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section-space">
        <div className="container">
          <SectionTitle title="Contact" subtitle="Let’s connect" />
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="card p-4 p-md-5 custom-card text-center">
                <p className="text-secondary fs-5 mb-4">
                  I’m actively seeking full-time opportunities as a Java Developer.
                </p>

                <div className="d-flex justify-content-center flex-wrap gap-3">
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=simikshaleo02@gmail.com&su=Opportunity%20Inquiry"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-dark rounded-pill px-4 py-2"
                  >
                    <i className="bi bi-envelope-fill me-2"></i>
                    Email
                  </a>

                  <a
                    href="https://www.linkedin.com/in/simiksha/"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline-dark rounded-pill px-4 py-2"
                  >
                    <i className="bi bi-linkedin me-2"></i>
                    LinkedIn
                  </a>

                  <a
                    href="https://github.com/Simiksha"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline-dark rounded-pill px-4 py-2"
                  >
                    <i className="bi bi-github me-2"></i>
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}