const BOOKING_URL = "https://cal.com/ryan-ulmer-zbmuxk/discoverycall";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <div className="hero">
        <div className="container">
          <div className="hero-eyebrow">ReachFlow Studio</div>
          <h1>
            We build complete<br />
            <span className="accent">technical systems</span><br />
            for startups.
          </h1>
          <p className="hero-sub">
            Full-stack applications, automation workflows, AI integrations,
            and payment infrastructure — delivered as production-ready systems.
          </p>
          <div className="hero-stack">
            {["Next.js", "React", "TypeScript", "Supabase", "n8n", "Stripe", "OpenAI", "Auth Systems", "AI Agents", "Webhooks"].map(t => (
              <span key={t} className="stack-tag">{t}</span>
            ))}
          </div>
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn">
            Book a Discovery Call →
          </a>
        </div>
      </div>

      {/* WHAT WE BUILD */}
      <div className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-label">Capabilities</div>
            <h2>What we build</h2>
            <p>
              We handle the full technical stack — from frontend to backend,
              automation to AI — so you can focus on the business.
            </p>
          </div>
          <div className="cards-grid">
            <div className="cap-card">
              <div className="cap-icon">▣</div>
              <h3>Full-Stack Web Apps</h3>
              <p>
                Production-grade applications built with modern frameworks.
                Fast, scalable, and maintainable from day one.
              </p>
              <div className="cap-tags">
                {["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL"].map(t => (
                  <span key={t} className="cap-tag">{t}</span>
                ))}
              </div>
            </div>
            <div className="cap-card">
              <div className="cap-icon">⟳</div>
              <h3>Automation & Workflows</h3>
              <p>
                End-to-end workflow automation that eliminates manual work
                and keeps your operations running without intervention.
              </p>
              <div className="cap-tags">
                {["n8n", "Webhooks", "APIs", "Scheduling", "State Tracking"].map(t => (
                  <span key={t} className="cap-tag">{t}</span>
                ))}
              </div>
            </div>
            <div className="cap-card">
              <div className="cap-icon">◈</div>
              <h3>AI-Powered Systems</h3>
              <p>
                Practical AI integrations that solve real business problems —
                not demos, but systems that run in production reliably.
              </p>
              <div className="cap-tags">
                {["OpenAI", "Claude", "LLM Pipelines", "AI Agents", "RAG"].map(t => (
                  <span key={t} className="cap-tag">{t}</span>
                ))}
              </div>
            </div>
            <div className="cap-card">
              <div className="cap-icon">◻</div>
              <h3>Payments & Auth</h3>
              <p>
                Secure, compliant payment flows and authentication systems
                that protect your users and your revenue.
              </p>
              <div className="cap-tags">
                {["Stripe", "Subscriptions", "Auth.js", "OAuth", "Row-Level Security"].map(t => (
                  <span key={t} className="cap-tag">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* OUR WORK */}
      <div className="section section-alt">
        <div className="container">
          <div className="section-header">
            <div className="section-label">Our Work</div>
            <h2>Built for real businesses</h2>
            <p>
              Client websites, portals, and platforms alongside the automation
              and AI systems that power their operations.
            </p>
          </div>
          <div className="category-grid">
            <a href="/work" className="category-card">
              <div className="category-count">5 Projects</div>
              <h3>Client Projects</h3>
              <p>
                Websites, membership portals, e-commerce stores, and full-stack
                platforms — built and shipped for real clients across industries.
              </p>
              <div className="category-link">View client projects →</div>
            </a>
            <a href="/systems" className="category-card">
              <div className="category-count">8 Systems</div>
              <h3>Systems & Automations</h3>
              <p>
                AI receptionists, follow-up sequences, lead pipelines, and
                internal tools — automation workflows that run without anyone watching.
              </p>
              <div className="category-link">View all systems →</div>
            </a>
          </div>
        </div>
      </div>

      {/* HOW IT WORKS */}
      <div className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-label">Process</div>
            <h2>How it works</h2>
            <p>
              A straightforward three-step process — from first conversation
              to a system running in production.
            </p>
          </div>
          <div className="steps">
            <div className="step">
              <div className="step-num">STEP 01</div>
              <h3>Discovery Call</h3>
              <p>
                We learn about your business, the problems you&apos;re trying to
                solve, and what success looks like. No pressure — just a focused
                30-minute conversation.
              </p>
              <div className="step-arrow">→</div>
            </div>
            <div className="step">
              <div className="step-num">STEP 02</div>
              <h3>Scoped Proposal</h3>
              <p>
                We send a written proposal with clear scope, deliverables,
                timeline, and fixed price. You know exactly what you&apos;re
                getting before anything begins.
              </p>
              <div className="step-arrow">→</div>
            </div>
            <div className="step">
              <div className="step-num">STEP 03</div>
              <h3>We Build It</h3>
              <p>
                We build, test, and deploy your system. You get regular updates,
                a handoff walkthrough, and documentation so your team can
                operate it from day one.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <div className="container">
          <div className="section-label">Let&apos;s talk</div>
          <h2>Ready to build?</h2>
          <p>
            Tell us what you&apos;re working on. We&apos;ll figure out together
            whether we&apos;re the right fit.
          </p>
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn">
            Book a Discovery Call →
          </a>
        </div>
      </div>
    </>
  );
}
