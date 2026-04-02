import movieImg from "./assets/movie.png";
import expenseImg from "./assets/Expense.png";
import realestateImg from "./assets/realestate.png";
import certificateImg from "./assets/certificate.png";

const skills = {
  Backend: ["Java", "Spring Boot", "Spring Security", "JWT", "REST APIs"],
  Frontend: ["React", "Bootstrap", "Axios", "HTML", "CSS", "JavaScript"],
  Database: ["PostgreSQL", "MySQL"],
  Tools: ["Git", "GitHub", "Postman", "Cloudinary", "Razorpay", "Netlify", "Render"],
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
      <style>{`
        html {
          scroll-behavior: smooth;
        }

        body {
          background: #f8f9fa;
          color: #212529;
        }

        .portfolio-app {
          min-height: 100vh;
          background: #f8f9fa;
        }

        .navbar {
          background: rgba(255, 255, 255, 0.9) !important;
          backdrop-filter: blur(12px);
          box-shadow: 0 8px 24px rgba(15, 23, 42, 0.06);
          border-bottom: 1px solid rgba(0, 0, 0, 0.04);
        }

        .nav-link {
          font-weight: 500;
          color: #495057 !important;
          transition: color 0.2s ease;
        }

        .nav-link:hover {
          color: #111827 !important;
        }

        .section-space {
          padding: 80px 0;
        }

        .hero-section {
          padding: 130px 0 100px;
          background:
            radial-gradient(circle at top left, rgba(13, 110, 253, 0.10), transparent 32%),
            radial-gradient(circle at bottom right, rgba(32, 201, 151, 0.10), transparent 28%),
            linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%);
          position: relative;
          overflow: hidden;
        }

        .hero-section::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(0,0,0,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.02) 1px, transparent 1px);
          background-size: 28px 28px;
          mask-image: linear-gradient(to bottom, rgba(0,0,0,0.6), transparent 85%);
          pointer-events: none;
        }

        .hero-title {
          font-size: clamp(2.4rem, 4vw, 4rem);
          line-height: 1.2;
        }

        .hero-subtitle {
          max-width: 760px;
          margin: 0 auto;
        }

        .hero-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border-radius: 999px;
          background: rgba(255,255,255,0.85);
          border: 1px solid rgba(13, 110, 253, 0.12);
          box-shadow: 0 8px 24px rgba(15, 23, 42, 0.05);
          margin-bottom: 1rem;
          font-size: 0.95rem;
          color: #495057;
        }

        .cert-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 16px;
          border-radius: 14px;
          background: rgba(255,255,255,0.88);
          border: 1px solid rgba(0,0,0,0.05);
          box-shadow: 0 10px 25px rgba(15, 23, 42, 0.05);
          margin-top: 1rem;
          color: #495057;
          font-size: 0.95rem;
        }

        .hero-stats {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
          max-width: 720px;
          margin: 2.5rem auto 0;
        }

        .stat-box {
          background: rgba(255,255,255,0.78);
          border: 1px solid rgba(0,0,0,0.05);
          border-radius: 18px;
          padding: 18px 14px;
          box-shadow: 0 10px 25px rgba(15, 23, 42, 0.05);
        }

        .stat-box h5 {
          font-size: 1.4rem;
          margin-bottom: 4px;
          font-weight: 700;
        }

        .stat-box p {
          margin: 0;
          color: #6c757d;
          font-size: 0.92rem;
        }

        .section-accent {
          width: 64px;
          height: 4px;
          border-radius: 999px;
          background: linear-gradient(90deg, #0d6efd, #20c997);
        }

        .custom-card {
          border: 1px solid rgba(0, 0, 0, 0.04);
          border-radius: 24px;
          box-shadow: 0 14px 32px rgba(15, 23, 42, 0.06);
          transition: transform 0.28s ease, box-shadow 0.28s ease, border-color 0.28s ease;
          background: rgba(255, 255, 255, 0.92);
          backdrop-filter: blur(10px);
        }

        .custom-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 18px 40px rgba(15, 23, 42, 0.1);
          border-color: rgba(13, 110, 253, 0.16);
        }

        .skill-badge {
          display: inline-block;
          background: linear-gradient(180deg, #f8f9fa 0%, #eef2f6 100%);
          color: #212529;
          border: 1px solid rgba(0,0,0,0.04);
          border-radius: 999px;
          padding: 7px 13px;
          font-size: 0.9rem;
          margin: 4px 6px 0 0;
        }

        .project-image {
          width: 100%;
          height: 240px;
          object-fit: cover;
          border-top-left-radius: 24px;
          border-top-right-radius: 24px;
          border-bottom: 1px solid #f1f1f1;
          transition: transform 0.35s ease;
        }

        .custom-card:hover .project-image {
          transform: scale(1.03);
        }

        .section-alt {
          background: linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%);
        }

        .footer-text {
          color: #6c757d;
          font-size: 0.95rem;
        }

        @media (max-width: 991px) {
          .hero-section {
            padding: 100px 0 70px;
          }

          .section-space {
            padding: 70px 0;
          }

          .hero-stats {
            grid-template-columns: 1fr;
            max-width: 320px;
          }
        }
      `}</style>

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

      <section id="additional-projects" className="section-space bg-white">
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

      <section id="contact" className="section-space section-alt">
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
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=your-simikshaleo02@gmail.com&su=Opportunity%20Inquiry"
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