'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

// ====== NAVBAR ======
function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <a className="nav-logo" onClick={() => scrollTo('hero')}>EN.</a>
        <ul className="nav-links">
          <li><a className="nav-link" onClick={() => scrollTo('about')}>About</a></li>
          <li><a className="nav-link" onClick={() => scrollTo('skills')}>Skills</a></li>
          <li><a className="nav-link" onClick={() => scrollTo('experience')}>Experience</a></li>
          <li><a className="nav-link" onClick={() => scrollTo('education')}>Education</a></li>
          <li><a className="nav-link nav-cta" onClick={() => scrollTo('contact')}>Contact Me</a></li>
        </ul>
      </div>
    </nav>
  );
}

// ====== HERO SECTION ======
function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-bg">
        <div className="hero-grid"></div>
        <div className="hero-orb hero-orb-1"></div>
        <div className="hero-orb hero-orb-2"></div>
        <div className="hero-orb hero-orb-3"></div>
      </div>
      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-badge">
            <span className="hero-badge-dot"></span>
            Available for new opportunities
          </div>
          <h1 className="hero-title">
            Hi, I&apos;m{' '}
            <span className="hero-title-gradient">Eslam Naaser</span>
            <br />
            Software Engineer
          </h1>
          <p className="hero-subtitle">
            A passionate software engineer and DEPI trainer, dedicated to building 
            robust, scalable solutions and empowering the next generation of developers. 
            Graduate of AAST with a 3.53 GPA.
          </p>
          <div className="hero-tags">
            <span className="hero-tag">⚛️ React / Next.js</span>
            <span className="hero-tag">🚀 Software Engineering</span>
            <span className="hero-tag">🎓 DEPI Trainer</span>
          </div>
          <div className="hero-actions">
            <button
              className="btn-primary"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch ✉️
            </button>
            <button
              className="btn-secondary"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More →
            </button>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <div className="hero-image-frame">
            <div className="hero-image-ring"></div>
            <div className="hero-image-circle">
              <Image
                src="/personal-image.jpeg"
                alt="Eslam Naaser - Software Engineer"
                width={380}
                height={380}
                priority
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
              />
            </div>
            <div className="hero-stat-badge hero-stat-badge-1">
              <span className="hero-stat-icon">🎓</span>
              <div className="hero-stat-text">
                <span className="hero-stat-value">3.53 GPA</span>
                <span className="hero-stat-label">AAST Graduate</span>
              </div>
            </div>
            <div className="hero-stat-badge hero-stat-badge-2">
              <span className="hero-stat-icon">👨‍🏫</span>
              <div className="hero-stat-text">
                <span className="hero-stat-value">DEPI</span>
                <span className="hero-stat-label">Trainer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ====== ABOUT SECTION ======
function About() {
  return (
    <section id="about" className="section">
      <div className="section-container">
        <div className="about-grid reveal">
          <div className="about-image-side">
            <div className="about-image-container">
              <Image
                src="/personal-image.jpeg"
                alt="Eslam Naaser at Microsoft"
                width={600}
                height={450}
                style={{ width: '100%', height: '450px', objectFit: 'cover', objectPosition: 'top', transition: 'transform 0.5s ease', display: 'block' }}
              />
              <div className="about-image-overlay"></div>
            </div>
            <div className="about-card-float">
              <div className="about-card-float-title">GPA Score</div>
              <div className="about-card-float-value">3.53 / 4.0</div>
            </div>
          </div>

          <div className="about-content">
            <div className="section-header" style={{ textAlign: 'left', marginBottom: 0 }}>
              <div className="section-badge">✨ About Me</div>
              <h2 className="section-title">
                Passionate about <span>Technology</span>
              </h2>
            </div>
            <p className="about-text">
              I&apos;m a software engineer with a strong foundation in modern web technologies, 
              particularly React and Next.js. I graduated from the Arab Academy for Science, 
              Technology & Maritime Transport (AAST) with a GPA of 3.53.
            </p>
            <p className="about-text">
              Beyond building software, I serve as a trainer for the Digital Egypt Pioneers Initiative 
              (DEPI), where I mentor and guide the next generation of Egyptian software developers — 
              helping them gain practical skills in modern technologies and become job-ready.
            </p>
            <div className="about-highlights">
              <div className="about-highlight-card">
                <div className="about-highlight-icon">🏛️</div>
                <div className="about-highlight-title">AAST Graduate</div>
                <div className="about-highlight-sub">3.53 GPA</div>
              </div>
              <div className="about-highlight-card">
                <div className="about-highlight-icon">👨‍🏫</div>
                <div className="about-highlight-title">DEPI Trainer</div>
                <div className="about-highlight-sub">Digital Egypt Pioneers Initiative</div>
              </div>
              <div className="about-highlight-card">
                <div className="about-highlight-icon">⚛️</div>
                <div className="about-highlight-title">Frontend Expert</div>
                <div className="about-highlight-sub">React & Next.js</div>
              </div>
              <div className="about-highlight-card">
                <div className="about-highlight-icon">💡</div>
                <div className="about-highlight-title">Problem Solver</div>
                <div className="about-highlight-sub">Software Engineer</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ====== SKILLS SECTION ======
function Skills() {
  const skills = [
    {
      category: 'Frontend Development',
      items: [
        { icon: '⚛️', name: 'React.js' },
        { icon: '🔺', name: 'Next.js' },
        { icon: '🎨', name: 'HTML5' },
        { icon: '💅', name: 'CSS3' },
        { icon: '🟡', name: 'JavaScript' },
        { icon: '🔷', name: 'TypeScript' },
      ],
    },
    {
      category: 'Backend & Tools',
      items: [
        { icon: '🟢', name: 'Node.js' },
        { icon: '🐘', name: 'PostgreSQL' },
        { icon: '🍃', name: 'MongoDB' },
        { icon: '🐙', name: 'Git & GitHub' },
        { icon: '🐳', name: 'Docker' },
        { icon: '☁️', name: 'Cloud Services' },
      ],
    },
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="section-container">
        <div className="section-header">
          <div className="section-badge">⚡ Skills</div>
          <h2 className="section-title">My <span>Tech Stack</span></h2>
          <p className="section-desc">Technologies and tools I work with to build amazing products</p>
        </div>

        <div className="skills-categories reveal">
          {skills.map((cat) => (
            <div key={cat.category}>
              <h3 className="skills-category-title">{cat.category}</h3>
              <div className="skills-grid">
                {cat.items.map((skill) => (
                  <div key={skill.name} className="skill-card">
                    <span className="skill-icon">{skill.icon}</span>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ====== EXPERIENCE SECTION ======
function Experience() {
  return (
    <section id="experience" className="section">
      <div className="section-container">
        <div className="section-header">
          <div className="section-badge">💼 Experience</div>
          <h2 className="section-title">My <span>Journey</span></h2>
          <p className="section-desc">Professional experience and roles I&apos;ve held</p>
        </div>

        <div className="experience-timeline reveal">
          <div className="exp-item">
            <div className="exp-dot"></div>
            <div className="exp-card">
              <div className="exp-header">
                <div className="exp-role">DEPI Trainer</div>
                <div className="exp-period">2024 – Present</div>
              </div>
              <div className="exp-company">Digital Egypt Pioneers Initiative (DEPI)</div>
              <p className="exp-description">
                Training and mentoring students across Egypt as part of the Digital Egypt Pioneers Initiative — 
                a national program to upskill Egyptian youth in modern technology fields. 
                I deliver hands-on sessions covering software engineering fundamentals, 
                web development with React and Next.js, and professional best practices to help 
                trainees become job-ready developers.
              </p>
              <div className="exp-tags">
                <span className="exp-tag">React.js</span>
                <span className="exp-tag">Next.js</span>
                <span className="exp-tag">Mentoring</span>
                <span className="exp-tag">Web Development</span>
                <span className="exp-tag">Training</span>
              </div>
            </div>
          </div>

          <div className="exp-item">
            <div className="exp-dot"></div>
            <div className="exp-card">
              <div className="exp-header">
                <div className="exp-role">Software Engineer</div>
                <div className="exp-period">Ongoing</div>
              </div>
              <div className="exp-company">Software Development</div>
              <p className="exp-description">
                Building and architecting modern web applications using React, Next.js, and related 
                technologies. Focused on delivering clean, performant, and scalable code with 
                exceptional user experiences.
              </p>
              <div className="exp-tags">
                <span className="exp-tag">React.js</span>
                <span className="exp-tag">Next.js</span>
                <span className="exp-tag">TypeScript</span>
                <span className="exp-tag">Node.js</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ====== EDUCATION SECTION ======
function Education() {
  return (
    <section id="education" className="section education-section">
      <div className="section-container">
        <div className="section-header">
          <div className="section-badge">🎓 Education</div>
          <h2 className="section-title">Academic <span>Background</span></h2>
          <p className="section-desc">My educational foundation and academic achievements</p>
        </div>

        <div className="education-grid reveal">
          <div className="edu-card">
            <div className="edu-icon">🏛️</div>
            <div className="edu-degree">Bachelor of Computer Engineering</div>
            <div className="edu-school">Arab Academy for Science, Technology & Maritime Transport (AAST)</div>
            <div className="edu-details">
              <div className="edu-detail">
                <span className="edu-detail-icon">📍</span>
                <span>Egypt</span>
              </div>
              <div className="edu-detail">
                <span className="edu-detail-icon">📅</span>
                <span>Graduated</span>
              </div>
            </div>
            <div className="edu-gpa">
              <span className="edu-gpa-label">Cumulative GPA</span>
              <span className="edu-gpa-value">3.53 / 4.0</span>
            </div>
          </div>

          <div className="edu-card">
            <div className="edu-icon">🚀</div>
            <div className="edu-degree">DEPI Training Program</div>
            <div className="edu-school">Digital Egypt Pioneers Initiative</div>
            <div className="edu-details">
              <div className="edu-detail">
                <span className="edu-detail-icon">🎯</span>
                <span>Modern Web Development</span>
              </div>
              <div className="edu-detail">
                <span className="edu-detail-icon">👨‍💻</span>
                <span>React.js & Next.js Track</span>
              </div>
              <div className="edu-detail">
                <span className="edu-detail-icon">📅</span>
                <span>2024 – Present (Trainer)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ====== CONTACT SECTION ======
function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section">
      <div className="section-container">
        <div className="section-header">
          <div className="section-badge">📬 Contact</div>
          <h2 className="section-title">Let&apos;s <span>Connect</span></h2>
          <p className="section-desc">Have a project in mind or want to collaborate? I&apos;d love to hear from you!</p>
        </div>

        <div className="contact-wrapper reveal">
          <div className="contact-info">
            <div>
              <h3 className="contact-title">Get In <span>Touch</span></h3>
              <p className="contact-desc">
                I&apos;m currently open to new opportunities and collaborations. 
                Whether you have a project, question, or just want to say hello — 
                feel free to reach out!
              </p>
            </div>
            <div className="contact-links">
              <a
                id="contact-linkedin"
                href="https://www.linkedin.com/in/eslamnaaser"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <div className="contact-link-icon">💼</div>
                <div>
                  <div style={{ fontWeight: 600, color: 'var(--text-primary)', marginBottom: '2px' }}>LinkedIn</div>
                  <div style={{ fontSize: '0.8rem' }}>linkedin.com/in/eslamnaaser</div>
                </div>
              </a>
              <a
                id="contact-github"
                href="https://github.com/eslamnaaser454"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <div className="contact-link-icon">🐙</div>
                <div>
                  <div style={{ fontWeight: 600, color: 'var(--text-primary)', marginBottom: '2px' }}>GitHub</div>
                  <div style={{ fontSize: '0.8rem' }}>github.com/eslamnaaser454</div>
                </div>
              </a>
              <a
                id="contact-email"
                href="mailto:eslam@example.com"
                className="contact-link"
              >
                <div className="contact-link-icon">✉️</div>
                <div>
                  <div style={{ fontWeight: 600, color: 'var(--text-primary)', marginBottom: '2px' }}>Email</div>
                  <div style={{ fontSize: '0.8rem' }}>Send me an email directly</div>
                </div>
              </a>
            </div>
          </div>

          <div className="contact-form">
            {submitted ? (
              <div className="form-success">
                <div className="form-success-icon">🎉</div>
                <div style={{ fontSize: '1.2rem', fontWeight: 700 }}>Message Sent!</div>
                <div style={{ color: 'var(--text-secondary)' }}>
                  Thanks for reaching out! I&apos;ll get back to you soon.
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">Your Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className="form-input"
                      placeholder="John Doe"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="email">Email Address</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="form-input"
                      placeholder="john@example.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="subject">Subject</label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    className="form-input"
                    placeholder="Project collaboration, job offer..."
                    value={form.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-textarea"
                    placeholder="Tell me about your project or opportunity..."
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button
                  id="submit-btn"
                  type="submit"
                  className="form-submit"
                  disabled={loading}
                >
                  {loading ? '⏳ Sending...' : '🚀 Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ====== FOOTER ======
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">EN.</div>
      <p className="footer-text">
        Eslam Naaser — Software Engineer & DEPI Trainer<br />
        Built with Next.js &amp; ❤️
      </p>
      <div className="footer-social">
        <a
          id="footer-linkedin"
          href="https://www.linkedin.com/in/eslamnaaser"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-social-link"
          title="LinkedIn"
        >
          💼
        </a>
        <a
          id="footer-github"
          href="https://github.com/eslamnaaser454"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-social-link"
          title="GitHub"
        >
          🐙
        </a>
        <a
          id="footer-email"
          href="mailto:eslam@example.com"
          className="footer-social-link"
          title="Email"
        >
          ✉️
        </a>
      </div>
    </footer>
  );
}

// ====== SCROLL REVEAL HOOK ======
function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

// ====== MAIN PAGE ======
export default function Home() {
  useScrollReveal();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
