import Image from "next/image";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import Typewriter from "@/components/Typewriter";
import { about, experience, profile, projects, skills } from "@/data/portfolio";

function SectionTitle({ num, title }: { num: string; title: string }) {
  return (
    <h2 className="section-title">
      <span className="mono accent">{num}.</span> {title}
    </h2>
  );
}

export default function Home() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <>
      <Nav />
      <main id="top">
        {/* Hero */}
        <section className="hero container">
          <div className="glow" aria-hidden />
          <div className="glow glow-2" aria-hidden />
          <a href={profile.currently.url} className="status" target="_blank" rel="noreferrer">
            <span className="status-dot" aria-hidden />
            Currently building <strong>{profile.currently.label}</strong> ↗
          </a>
          <p className="mono accent">Hi, my name is</p>
          <h1 className="gradient-text">{profile.name}.</h1>
          <h2 className="hero-sub">
            <Typewriter words={profile.roles} />
          </h2>
          <p className="hero-tagline">{profile.tagline}</p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View my work
            </a>
            {profile.resumeUrl && (
              <a href={profile.resumeUrl} className="btn" target="_blank" rel="noreferrer">
                Résumé
              </a>
            )}
            <a href={`mailto:${profile.email}`} className="btn">
              Contact me
            </a>
          </div>
          <div className="hero-socials mono small">
            {profile.socials.map((s) => (
              <a key={s.label} href={s.url} target="_blank" rel="noreferrer">
                {s.label} ↗
              </a>
            ))}
            <span className="muted">📍 {profile.location}</span>
          </div>
        </section>

        {/* About */}
        <section id="about" className="section container">
          <Reveal>
            <SectionTitle num="01" title="About me" />
            <div className="about">
              {about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </Reveal>
        </section>

        {/* Skills */}
        <section id="skills" className="section container">
          <Reveal>
            <SectionTitle num="02" title="Skills" />
            <div className="skills-grid">
              {skills.map((s) => (
                <div key={s.group} className="card">
                  <h3>{s.group}</h3>
                  <ul className="tags">
                    {s.items.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* Projects */}
        <section id="projects" className="section container">
          <Reveal>
            <SectionTitle num="03" title="Things I've built" />
          </Reveal>
          <div className="featured">
            {featured.map((p) => (
              <Reveal key={p.title}>
                <article className="card project featured-card">
                  {p.image && (
                    <a
                      href={p.live ?? p.github}
                      className="shot"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="shot-bar" aria-hidden>
                        <span />
                        <span />
                        <span />
                      </div>
                      <Image
                        src={p.image}
                        alt={`Screenshot of ${p.title}`}
                        width={1440}
                        height={810}
                        sizes="(max-width: 720px) 100vw, 520px"
                      />
                    </a>
                  )}
                  <div className="featured-body">
                    <p className="mono accent small">Featured project</p>
                    <h3>{p.title}</h3>
                    <p>{p.description}</p>
                    <ul className="tech mono">
                      {p.tech.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                    <ProjectLinks github={p.github} live={p.live} />
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          {others.length > 0 && (
            <div className="projects-grid">
              {others.map((p) => (
                <Reveal key={p.title}>
                  <article className="card project">
                    <h3>{p.title}</h3>
                    <p>{p.description}</p>
                    <ul className="tech mono">
                      {p.tech.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                    <ProjectLinks github={p.github} live={p.live} />
                  </article>
                </Reveal>
              ))}
            </div>
          )}
        </section>

        {/* Experience */}
        <section id="experience" className="section container">
          <Reveal>
            <SectionTitle num="04" title="Experience & Education" />
            <ol className="timeline">
              {experience.map((e) => (
                <li key={e.role + e.org}>
                  <p className="mono small muted">{e.period}</p>
                  <h3>
                    {e.role} <span className="accent">@ {e.org}</span>
                  </h3>
                  <ul>
                    {e.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </Reveal>
        </section>

        {/* Contact */}
        <section id="contact" className="section container contact">
          <Reveal>
            <p className="mono accent">05. What&apos;s next?</p>
            <h2 className="contact-title">Get in touch</h2>
            <p className="muted">
              I&apos;m open to new opportunities and collaborations. Whether you have a question or
              just want to say hi, my inbox is open.
            </p>
            <div className="contact-actions">
              <a href={`mailto:${profile.email}`} className="btn btn-primary">
                Say hello
              </a>
              {profile.phone && (
                <a
                  href={`https://wa.me/${profile.phone.replace(/\D/g, "")}`}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp
                </a>
              )}
            </div>
            <p className="contact-details mono small muted">
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
              {profile.phone && (
                <>
                  {" · "}
                  <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>{profile.phone}</a>
                </>
              )}
            </p>
          </Reveal>
        </section>
      </main>

      <footer className="footer container">
        <div className="socials">
          {profile.socials.map((s) => (
            <a key={s.label} href={s.url} target="_blank" rel="noreferrer">
              {s.label}
            </a>
          ))}
        </div>
        <p className="mono small muted">
          © {new Date().getFullYear()} {profile.name}. Built with Next.js.
        </p>
      </footer>
    </>
  );
}

function ProjectLinks({ github, live }: { github?: string; live?: string }) {
  return (
    <div className="project-links mono small">
      {github && (
        <a href={github} target="_blank" rel="noreferrer">
          Code ↗
        </a>
      )}
      {live && (
        <a href={live} target="_blank" rel="noreferrer">
          Live ↗
        </a>
      )}
    </div>
  );
}
