'use client';

export default function Home() {
  const BOOKING_URL = "https://cal.com/ryan-ulmer-zbmuxk/discoverycall";

  return (
    <>
      <style jsx global>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --green: #2563eb;
          --bg: #0a0a0a;
          --bg-alt: #050505;
          --card-bg: #111;
          --text: #e8e8e8;
          --muted: #888;
          --border: #222;
          --font-mono: 'IBM Plex Mono', monospace;
        }

        html { scroll-behavior: smooth; }

        body {
          background: var(--bg);
          color: var(--text);
          font-family: var(--font-mono);
          font-size: 15px;
          line-height: 1.7;
          -webkit-font-smoothing: antialiased;
        }

        .container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* NAV */
        nav {
          position: sticky;
          top: 0;
          z-index: 100;
          background: rgba(10, 10, 10, 0.92);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--border);
        }
        .nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 60px;
        }
        .nav-brand {
          font-size: 15px;
          font-weight: 600;
          letter-spacing: 0.04em;
          color: var(--text);
          text-decoration: none;
        }
        .nav-brand span { color: var(--green); }
        .nav-cta {
          font-family: var(--font-mono);
          font-size: 13px;
          font-weight: 500;
          color: var(--green);
          border: 1px solid var(--green);
          padding: 7px 18px;
          border-radius: 4px;
          text-decoration: none;
          letter-spacing: 0.03em;
          transition: background 0.2s, color 0.2s;
        }
        .nav-cta:hover { background: var(--green); color: #fff; }

        /* SECTIONS */
        section {
          padding: 100px 0;
        }
        section.alt {
          background: var(--bg-alt);
        }

        .section-label {
          font-size: 11px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--green);
          margin-bottom: 16px;
        }

        h1, h2, h3 {
          font-family: 'Space Mono', monospace;
          line-height: 1.2;
          color: var(--text);
        }

        /* HERO */
        .hero {
          padding: 130px 0 120px;
          background: var(--bg);
          background-image:
            linear-gradient(rgba(37, 99, 235, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(37, 99, 235, 0.03) 1px, transparent 1px);
          background-size: 44px 44px;
          position: relative;
        }
        .hero::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--green), transparent);
          opacity: 0.4;
        }
        .hero-eyebrow {
          font-size: 12px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--green);
          margin-bottom: 28px;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .hero-eyebrow::before {
          content: '';
          display: inline-block;
          width: 24px;
          height: 1px;
          background: var(--green);
        }
        .hero h1 {
          font-size: clamp(36px, 6vw, 72px);
          font-weight: 700;
          margin-bottom: 24px;
          max-width: 820px;
        }
        .hero h1 .accent { color: var(--green); }
        .hero-sub {
          font-size: clamp(15px, 2vw, 18px);
          color: var(--muted);
          max-width: 560px;
          margin-bottom: 44px;
          line-height: 1.8;
        }
        .hero-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 44px;
        }
        .stack-tag {
          font-size: 11px;
          letter-spacing: 0.06em;
          color: var(--muted);
          border: 1px solid var(--border);
          padding: 4px 10px;
          border-radius: 3px;
        }

        /* BUTTONS */
        .btn {
          display: inline-block;
          font-family: var(--font-mono);
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0.04em;
          background: var(--green);
          color: #fff;
          padding: 14px 32px;
          border-radius: 4px;
          text-decoration: none;
          transition: opacity 0.2s, transform 0.15s;
        }
        .btn:hover { opacity: 0.88; transform: translateY(-1px); }

        /* CAPABILITY CARDS */
        .cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 1px;
          background: var(--border);
          border: 1px solid var(--border);
          border-radius: 6px;
          overflow: hidden;
          margin-top: 56px;
        }
        .cap-card {
          background: var(--card-bg);
          padding: 36px 30px;
          transition: background 0.2s;
        }
        .cap-card:hover { background: #161616; }
        .cap-icon {
          font-size: 22px;
          margin-bottom: 18px;
          color: var(--green);
          opacity: 0.7;
        }
        .cap-card h3 {
          font-size: 15px;
          font-weight: 700;
          margin-bottom: 12px;
        }
        .cap-card p {
          font-size: 13px;
          color: var(--muted);
          line-height: 1.75;
        }
        .cap-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: 18px;
        }
        .cap-tag {
          font-size: 10px;
          letter-spacing: 0.07em;
          color: var(--green);
          border: 1px solid rgba(37, 99, 235, 0.25);
          padding: 3px 8px;
          border-radius: 2px;
          text-transform: uppercase;
        }

        /* WORK CARDS */
        .work-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2px;
          background: var(--border);
          border: 1px solid var(--border);
          border-radius: 6px;
          overflow: hidden;
          margin-top: 56px;
        }
        .work-card {
          background: var(--card-bg);
          padding: 40px 36px;
          transition: background 0.2s;
          position: relative;
        }
        .work-card:hover { background: #141414; }
        .work-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 3px;
          height: 100%;
          background: var(--green);
          opacity: 0;
          transition: opacity 0.2s;
        }
        .work-card:hover::before { opacity: 1; }
        .work-number {
          font-size: 11px;
          letter-spacing: 0.15em;
          color: var(--green);
          opacity: 0.5;
          margin-bottom: 14px;
        }
        .work-card h3 {
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 10px;
        }
        .work-type {
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--muted);
          margin-bottom: 20px;
        }
        .work-card p {
          font-size: 13px;
          color: var(--muted);
          line-height: 1.8;
          margin-bottom: 14px;
        }
        .work-outcome {
          font-size: 13px;
          color: var(--green);
          border-left: 2px solid rgba(37, 99, 235, 0.3);
          padding-left: 14px;
          margin: 20px 0;
          line-height: 1.7;
        }
        .work-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
          margin-top: 22px;
        }
        .work-tag {
          font-size: 11px;
          color: var(--muted);
          border: 1px solid var(--border);
          padding: 4px 10px;
          border-radius: 3px;
        }

        /* HOW IT WORKS */
        .steps {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2px;
          background: var(--border);
          border: 1px solid var(--border);
          border-radius: 6px;
          overflow: hidden;
          margin-top: 56px;
        }
        .step {
          background: var(--card-bg);
          padding: 44px 36px;
          position: relative;
        }
        .step-num {
          font-size: 11px;
          letter-spacing: 0.15em;
          color: var(--green);
          opacity: 0.5;
          margin-bottom: 20px;
        }
        .step h3 {
          font-size: 17px;
          font-weight: 700;
          margin-bottom: 14px;
        }
        .step p {
          font-size: 13px;
          color: var(--muted);
          line-height: 1.8;
        }
        .step-arrow {
          position: absolute;
          right: -13px;
          top: 50%;
          transform: translateY(-50%);
          width: 26px;
          height: 26px;
          background: var(--bg-alt);
          border: 1px solid rgba(37, 99, 235, 0.4);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
          color: var(--green);
          z-index: 1;
        }

        /* CTA SECTION */
        .cta-section {
          text-align: center;
          padding: 120px 0;
        }
        .cta-section h2 {
          font-size: clamp(28px, 5vw, 52px);
          font-weight: 700;
          margin-bottom: 20px;
        }
        .cta-section p {
          font-size: 15px;
          color: var(--muted);
          margin-bottom: 44px;
          max-width: 480px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.8;
        }

        /* FOOTER */
        footer {
          background: var(--bg);
          border-top: 1px solid var(--border);
          padding: 48px 0;
        }
        .footer-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 20px;
        }
        .footer-brand {
          font-size: 13px;
          font-weight: 600;
          color: var(--text);
        }
        .footer-brand span { color: var(--green); }
        .footer-links {
          display: flex;
          gap: 28px;
          flex-wrap: wrap;
        }
        .footer-links a {
          font-size: 13px;
          color: var(--muted);
          text-decoration: none;
          transition: color 0.2s;
        }
        .footer-links a:hover { color: var(--green); }
        .footer-copy {
          font-size: 12px;
          color: #444;
          width: 100%;
          margin-top: 24px;
          padding-top: 24px;
          border-top: 1px solid var(--border);
        }

        /* SECTION HEADERS */
        .section-header {
          max-width: 600px;
          margin-bottom: 0;
        }
        .section-header h2 {
          font-size: clamp(26px, 4vw, 40px);
          font-weight: 700;
          margin-bottom: 16px;
        }
        .section-header p {
          font-size: 14px;
          color: var(--muted);
          line-height: 1.8;
        }

        /* RESPONSIVE */
        @media (max-width: 900px) {
          .work-grid { grid-template-columns: 1fr; }
          .steps { grid-template-columns: 1fr; }
          .step-arrow { display: none; }
        }
        @media (max-width: 640px) {
          section { padding: 72px 0; }
          .hero { padding: 90px 0 80px; }
          .cards-grid { grid-template-columns: 1fr; }
          .nav-cta { display: none; }
        }
      `}</style>

      {/* NAV */}
      <nav>
        <div className="container">
          <div className="nav-inner">
            <span className="nav-brand">
              ReachFlow<span>Studio</span>
            </span>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="nav-cta">
              Book a Call
            </a>
          </div>
        </div>
      </nav>

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
      <section>
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
      </section>

      {/* FEATURED WORK */}
      <section className="alt">
        <div className="container">
          <div className="section-header">
            <div className="section-label">Featured Work</div>
            <h2>Client projects</h2>
            <p>
              A selection of systems we&apos;ve designed and shipped for clients
              across industries.
            </p>
          </div>
          <div className="work-grid">

            <div className="work-card">
              <div className="work-number">01</div>
              <div className="work-type">Operations AI · Internal Tooling</div>
              <h3>Ops AI System</h3>
              <p>
                Built a centralized AI command layer for a growing operations team.
                The system routes natural-language queries to the right internal
                tools — CRM lookups, status checks, scheduling, and reporting —
                eliminating context-switching across a dozen separate dashboards.
              </p>
              <p>
                Includes role-based access, audit logging, and a structured prompt
                layer that enforces consistent, safe outputs regardless of phrasing.
              </p>
              <div className="work-outcome">
                Ops team handles 3× the workload with the same headcount.
                New staff onboarding cut from two weeks to three days.
              </div>
              <div className="work-tags">
                {["Next.js", "OpenAI", "Supabase", "n8n", "TypeScript", "RBAC"].map(t => (
                  <span key={t} className="work-tag">{t}</span>
                ))}
              </div>
            </div>

            <div className="work-card">
              <div className="work-number">02</div>
              <div className="work-type">AI Voice · Appointment Automation</div>
              <h3>AI Receptionist</h3>
              <p>
                Deployed an AI receptionist system for a service business losing
                revenue to missed calls. Uses a two-webhook n8n architecture with
                Twilio Voice — handling inbound calls, checking calendar
                availability, and booking appointments autonomously.
              </p>
              <p>
                Firestore-backed conversation memory maintains context across
                multi-turn calls. Ambiguous requests escalate to a human operator.
              </p>
              <div className="work-outcome">
                Zero missed calls during business hours. Manual scheduling
                eliminated entirely. System runs 24/7 without maintenance.
              </div>
              <div className="work-tags">
                {["n8n", "Twilio Voice", "OpenAI", "Firestore", "Google Calendar", "TwiML"].map(t => (
                  <span key={t} className="work-tag">{t}</span>
                ))}
              </div>
            </div>

            <div className="work-card">
              <div className="work-number">03</div>
              <div className="work-type">SMS Automation · Sales Ops</div>
              <h3>Quote Follow-Up Automation</h3>
              <p>
                Built a time-delayed SMS sequence system to follow up on open
                quotes and missed calls automatically. Triggers immediately on
                new quote creation, then re-engages at 24-hour and 72-hour
                intervals if no response is detected.
              </p>
              <p>
                Firestore state tracking prevents duplicate messages and detects
                replies, halting further automation when a conversation starts.
              </p>
              <div className="work-outcome">
                Follow-up coverage inside the critical 72-hour window reached
                100%. Sales team now focuses only on warm leads.
              </div>
              <div className="work-tags">
                {["n8n", "Twilio SMS", "Firestore", "Webhooks", "Schedule Nodes"].map(t => (
                  <span key={t} className="work-tag">{t}</span>
                ))}
              </div>
            </div>

            <div className="work-card">
              <div className="work-number">04</div>
              <div className="work-type">Data Pipeline · Outbound Sales</div>
              <h3>Lead Enrichment Pipeline</h3>
              <p>
                End-to-end lead processing pipeline from Apollo to Instantly.
                Imports leads, filters by qualification criteria, validates
                against a Google Sheets ruleset, enriches each record with
                scraped company context, and generates LLM-powered personalized
                opening lines.
              </p>
              <p>
                Runs in batch mode on a schedule — hundreds of leads processed
                daily with consistent formatting across every record.
              </p>
              <div className="work-outcome">
                400+ leads processed per day. Personalization quality improved
                reply rates by an estimated 3× over templated outreach.
              </div>
              <div className="work-tags">
                {["n8n", "Apollo API", "OpenAI", "Google Sheets", "Instantly", "Web Scraping"].map(t => (
                  <span key={t} className="work-tag">{t}</span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section>
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
      </section>

      {/* CTA */}
      <section className="alt cta-section">
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
      </section>

      {/* FOOTER */}
      <footer>
        <div className="container">
          <div className="footer-inner">
            <div className="footer-brand">
              ReachFlow<span>Studio</span>
            </div>
            <div className="footer-links">
              <a href="mailto:ryanulmer747@gmail.com">ryanulmer747@gmail.com</a>
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">Book a Call</a>
            </div>
          </div>
          <div className="footer-copy">
            © {new Date().getFullYear()} ReachFlow Studio. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
