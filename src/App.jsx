import movieImg from "./assets/movie.png";
import expenseImg from "./assets/Expense.png";
import realestateImg from "./assets/realestate.png";

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
      "A full-stack web application for browsing movies, filtering shows, selecting seats, and booking tickets with secure authentication and Razorpay payment integration. Demo video showcases the complete workflow.",
    tech: ["Java", "Spring Boot", "React", "PostgreSQL", "Razorpay"],
    github: "https://github.com/Simiksha/movie-ticket-booking-system",
    demo: "https://drive.google.com/file/d/1fIlViiSaxEJs-wWYDWUK7s9juL-pdNt-/view?usp=sharing",
    image: movieImg,
  },
  {
    title: "Expense Tracker",
    description:
      "A personal finance application to manage transactions, budgets, categories, and reports with secure authentication and email verification. Demo video highlights the main user flow.",
    tech: ["Java", "Spring Boot", "React", "PostgreSQL", "Brevo"],
    github: "https://github.com/Simiksha/Expense-Tracker",
    demo: "https://drive.google.com/file/d/1aibdK9yiYqj_KqI16qjQn3ZafEYENytS/view?usp=sharing",
    image: expenseImg,
  },
  {
    title: "RealNest",
    description:
      "A property listing platform with role-based access where customers can manage listings and admins can review and approve properties. Demo video shows the key application features.",
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
    github: "https://github.com/Simiksha/Expense-Split-System/blob/main/src/split/Split.java",
  },
];

function SectionTitle({ title, subtitle }) {
  return (
    <div className="text-center mb-5">
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
        <img
          src={project.image}
          alt={project.title}
          className="project-image"
        />

        <div className="p-4 d-flex flex-column h-100">
          <h4 className="fw-bold mb-3">{project.title}</h4>
          <p className="text-secondary mb-3">{project.description}</p>
          <div className="mb-4">
            {project.tech.map((tech) => (
              <span className="skill-badge" key={tech}>
                {tech}
              </span>
            ))}
          </div>

          <p className="text-muted small mb-2">
            Note: Some input steps are shortened in the demo video to keep it concise.
          </p>

          <div className="mt-auto d-flex flex-wrap gap-2">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-dark rounded-pill px-4"
            >
              GitHub
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="btn btn-dark rounded-pill px-4"
            >
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
          background: #ffffff !important;
          box-shadow: 0 2px 14px rgba(0, 0, 0, 0.06);
        }

        .section-space {
          padding: 80px 0;
        }

        .hero-section {
          padding: 120px 0 90px;
          background: #ffffff;
        }

        .hero-title {
          font-size: clamp(2.4rem, 4vw, 4rem);
          line-height: 1.2;
        }

        .hero-subtitle {
          max-width: 760px;
          margin: 0 auto;
        }

        .custom-card {
          border: none;
          border-radius: 20px;
          box-shadow: 0 10px 28px rgba(0, 0, 0, 0.06);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          background: #ffffff;
        }

        .custom-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 14px 34px rgba(0, 0, 0, 0.08);
        }

        .skill-badge {
          display: inline-block;
          background: #e9ecef;
          color: #212529;
          border-radius: 999px;
          padding: 7px 13px;
          font-size: 0.9rem;
          margin: 4px 6px 0 0;
        }

        .project-image {
          width: 100%;
          height: 240px;
          object-fit: cover;
          border-top-left-radius: 20px;
          border-top-right-radius: 20px;
          border-bottom: 1px solid #f1f1f1;
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
              <p className="text-uppercase text-secondary fw-semibold mb-3">
                Java Full Stack Developer
              </p>
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
                <a href="#" className="btn btn-outline-secondary rounded-pill px-4 py-2">
                  Resume
                </a>
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

      <section id="skills" className="section-space bg-white">
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

      <section className="section-space bg-white">
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

      <section id="contact" className="section-space bg-white">
        <div className="container">
          <SectionTitle title="Contact" subtitle="Let’s connect" />
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="card p-4 p-md-5 custom-card text-center">
                <p className="text-secondary fs-5 mb-4">
                  I’m open to full-stack developer opportunities where I can contribute and grow as a developer.
                </p>
                <div className="d-flex justify-content-center flex-wrap gap-3 mb-4">
                  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=simikshaleo02@gmail.com" target="_blank" className="btn btn-dark rounded-pill px-4 py-2">
                    Email
                  </a>
                  <a href="https://www.linkedin.com/in/simiksha/" className="btn btn-outline-dark rounded-pill px-4 py-2">
                    LinkedIn
                  </a>
                  <a href="https://github.com/Simiksha" target="_blank" rel="noreferrer" className="btn btn-outline-dark rounded-pill px-4 py-2">
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