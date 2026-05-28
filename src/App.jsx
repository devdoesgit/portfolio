import { useEffect, useState } from 'react';
import { ArrowUpRight, Github, Award, Trophy } from 'lucide-react';
import AchievementsSection from './components/AchievementsSection.jsx';
import ContactSection from './components/ContactSection.jsx';
import HeroBoard from './components/HeroBoard.jsx';
import { SectionHeader, SectionShell } from './components/ui.jsx';
import { education, experience, profile, projects, skillGroups } from './data/portfolio.js';

const sections = ['about', 'experience', 'projects', 'achievements', 'contact'];

const services = [
  'Full-stack web apps',
  'SaaS MVPs and dashboards',
  'Backend APIs and integrations',
  'AI / automation tools',
];

function isExternalLink(href) {
  return /^https?:\/\//.test(href);
}

function linkProps(href) {
  return isExternalLink(href) ? { target: '_blank', rel: 'noreferrer' } : {};
}

function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
      setScrolled(window.scrollY > 40);
      setPastHero(window.scrollY > window.innerHeight * 0.55);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return { progress, scrolled, pastHero };
}

function useReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    elements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.92 && rect.bottom > 0) {
        element.classList.add('is-visible');
      }
      observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);
}

function useActiveSection(sectionIds) {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-30% 0px -60% 0px',
        threshold: 0,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeSection;
}

function Nav({ scrolled, pastHero, activeSection }) {
  return (
    <nav
      className={['site-nav', scrolled ? 'scrolled' : '', pastHero ? 'site-nav--visible' : ''].filter(Boolean).join(' ')}
      aria-label="Primary navigation"
    >
      <a className="nav-logo" href="#top" aria-label="Back to top">
        {profile.firstName}<span>.</span>
      </a>
      <div className="nav-links">
        {sections.map((section) => (
          <a
            key={section}
            href={`#${section}`}
            className={activeSection === section ? 'active' : ''}
          >
            {section}
          </a>
        ))}
      </div>
      <a className="nav-cta" href={`mailto:${profile.email}`}>
        <span>Contact</span>
        <ArrowUpRight size={14} />
      </a>
    </nav>
  );
}

function Status({ value }) {
  return <span className="project-status">{value}</span>;
}

function ProjectCard({ project, index }) {
  const hasImage = !!(project.photo || project.preview);
  return (
    <article className={project.featured ? 'board-card project-card featured' : 'board-card project-card'} data-reveal>
      <div className="project-header">
        <div className="project-header-left">
          <h3 className="project-title">
            {project.title}
            {project.best && <Trophy size={18} className="project-best-trophy" />}
            <span>{project.subtitle}</span>
          </h3>
        </div>
        {project.status && (
          <div className="project-header-right">
            <Status value={project.status} />
          </div>
        )}
      </div>

      <div className={`project-body ${hasImage ? 'with-image' : 'no-image'}`}>
        <div className="project-body-left">
          <p className="project-desc">{project.description}</p>
          {project.metrics?.length > 0 && (
            <ul className="project-metrics">
              {project.metrics.map((metric) => (
                <li key={metric}>{metric}</li>
              ))}
            </ul>
          )}
          <div className="project-links">
            {project.links.map((link) => (
              <a className="text-link" href={link.href} key={link.label} {...linkProps(link.href)}>
                {link.label === 'GitHub' && <Github size={13} />}
                {link.label}
                <ArrowUpRight size={13} />
              </a>
            ))}
          </div>
        </div>

        {hasImage && (
          <div className="project-body-right">
            <div className="project-photo-wrap">
              <img
                src={project.photo || project.preview}
                alt={`${project.title} preview`}
                className="project-photo"
                style={{ transform: `rotate(${Math.random() * 4 - 2}deg)` }}
              />
            </div>
          </div>
        )}
      </div>
    </article>
  );
}


function About() {
  return (
    <SectionShell id="about" variant="light">
      <SectionHeader number="01" title="About" note="what I build →" />
      <div className="about-grid">
        <div className="board-card about-text" data-reveal>
          <p>
            I help clients turn rough product ideas into working software: responsive frontends, backend APIs, database
            design, auth flows, admin dashboards, automation, and deployable MVPs.
          </p>
          <p>
            My strongest edge is backend-heavy full-stack work — the interface clients use, wired to reliable services,
            queues, storage, search, payments, and third-party APIs.
          </p>
          <p>
            Before freelancing, I worked on production systems at MyGlamm and Good Glamm Group: payment reliability,
            campaign APIs, distributed services, and container memory optimization.
          </p>
          <div className="service-strip" aria-label="Freelance services">
            {services.map((service) => (
              <span key={service}>{service}</span>
            ))}
          </div>
          <div className="link-row">
            <a href={profile.resumeUrl} className="pill-link" {...linkProps(profile.resumeUrl)}>
              Resume <ArrowUpRight size={14} />
            </a>
            <a href={profile.projectsUrl} className="pill-link pill-link--ghost" {...linkProps(profile.projectsUrl)}>
              Proof of work <ArrowUpRight size={14} />
            </a>
            <a href={profile.linkedinUrl} className="pill-link pill-link--ghost" {...linkProps(profile.linkedinUrl)}>
              LinkedIn <ArrowUpRight size={14} />
            </a>
            <a href="https://github.com/devdoesgit" className="pill-link pill-link--ghost" {...linkProps('https://github.com/devdoesgit')}>
              GitHub <ArrowUpRight size={14} />
            </a>
            <a href="https://leetcode.com/u/andrewflik/" className="pill-link pill-link--ghost" {...linkProps('https://leetcode.com/u/andrewflik/')}>
              LeetCode <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
        <div className="board-card skills-panel" data-reveal>
          <h3 className="panel-label">Toolkit</h3>
          {skillGroups.map((group) => (
            <div className="skill-row" key={group.category}>
              <span className="skill-cat">{group.category}</span>
              <div className="skill-items">
                {group.skills.map((skill) => (
                  <span className="skill-pill" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

function Experience() {
  return (
    <SectionShell id="experience" variant="warm">
      <SectionHeader number="02" title="Experience" note="2.8yr in prod →" />
      <div className="timeline">
        {experience.map((item, i) => (
          <article className="board-card timeline-item" data-reveal key={`${item.company}-${item.date}`} style={{ '--card-rotate': `${i % 2 === 0 ? -0.6 : 0.6}deg` }}>
            <div className="timeline-date">{item.date}</div>
            <div>
              <h3 className="timeline-company">{item.company}</h3>
              <div className="timeline-role">
                {item.role} · {item.location}
              </div>
              <ul className="timeline-bullets">
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
        {education.map((item) => (
          <article className="board-card timeline-item timeline-item--edu" data-reveal key={item.school}>
            <div className="timeline-date">{item.date}</div>
            <div>
              <h3 className="timeline-company">{item.school}</h3>
              <div className="timeline-role">
                {item.degree} · {item.location}
              </div>
              <ul className="timeline-bullets">
                <li>{item.detail}</li>
              </ul>
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}

function Projects() {
  return (
    <SectionShell id="projects" variant="light">
      <SectionHeader number="03" title="Featured projects" />
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard project={project} index={index} key={project.title} />
        ))}
      </div>
    </SectionShell>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-shell">
        <p className="footer-tagline">Built with care — full stack, end to end.</p>
        <div className="footer-socials">
          <a href={profile.linkedinUrl} {...linkProps(profile.linkedinUrl)}>
            LinkedIn
          </a>
          <a href="https://github.com/devdoesgit" {...linkProps('https://github.com/devdoesgit')}>
            GitHub
          </a>
          <a href={`mailto:${profile.email}`}>Email</a>
        </div>
        <div className="footer-row">
          <span>
            © 2026 {profile.firstName} {profile.lastName}
          </span>
          <div className="footer-links">
            {sections.map((section) => (
              <a href={`#${section}`} key={section}>
                {section}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const { progress, scrolled, pastHero } = useScrollProgress();
  const activeSection = useActiveSection(sections);
  useReveal();

  return (
    <>
      <div className="scroll-line" style={{ width: `${progress}%` }} />
      <Nav scrolled={scrolled} pastHero={pastHero} activeSection={activeSection} />
      <main>
        <HeroBoard />
        <About />
        <Experience />
        <Projects />
        <AchievementsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
