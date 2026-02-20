import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Systems & Automations — ReachFlow Studio",
  description: "AI receptionists, follow-up sequences, lead pipelines, and internal tools. Automation systems built by ReachFlow Studio.",
};

const BOOKING_URL = "https://cal.com/ryan-ulmer-zbmuxk/discoverycall";

const systems = [
  {
    name: "Google Review Automation",
    description:
      "Automatically prompts satisfied customers to leave a Google review at the right moment — right after a positive experience is confirmed. The workflow detects the trigger (job completion, positive survey response, etc.), waits a short delay, then sends a personalized request with a direct review link. No manual follow-up required. Builds reputation on autopilot.",
    tags: ["n8n", "SMS / Email", "Google Business", "Webhooks"],
  },
  {
    name: "AI Receptionist System",
    description:
      "Full inbound call-handling system that answers, qualifies, and routes calls without a human. Handles common questions, checks availability, and books appointments. After-hours calls are processed and flagged for staff follow-up. Built for Rustic Mountain Dental and designed to deploy across any service business.",
    tags: ["n8n", "Twilio Voice", "OpenAI", "Firestore", "Google Calendar"],
  },
  {
    name: "Missed-Call Text-Back",
    description:
      "When a caller hangs up without reaching anyone, this automation fires a text within seconds. Warm, immediate, and keeps the lead from going to a competitor. Simple to deploy, high-impact for any business that depends on inbound calls. Recovers a percentage of calls that would otherwise be permanently lost.",
    tags: ["n8n", "Twilio SMS", "Webhooks", "Phone Systems"],
  },
  {
    name: "Appointment Reminder Automations",
    description:
      "Configurable reminder sequences delivered via SMS and email before scheduled appointments. Timing, frequency, and messaging are set per client. The system detects confirmation replies and can trigger rescheduling flows when a client needs to change. Measurably reduces no-shows without any manual effort.",
    tags: ["n8n", "Twilio SMS", "Email", "Scheduling", "State Tracking"],
  },
  {
    name: "Quote Follow-Up Sequences",
    description:
      "Multi-step follow-up workflow that re-engages leads who received a quote but didn't respond. Triggers immediately after a quote is sent, then follows up at 24-hour and 72-hour intervals if no reply is detected. Firestore tracks state to prevent duplicate messages and halts the sequence the moment a real conversation begins.",
    tags: ["n8n", "Twilio SMS", "Firestore", "State Tracking", "Multi-Step"],
  },
  {
    name: "CRM + Google Calendar Sync",
    description:
      "Real-time two-way sync between a client's CRM and Google Calendar. New bookings, updates, and cancellations flow automatically between both systems in both directions. Eliminates double-entry, prevents scheduling conflicts, and keeps records accurate without anyone manually moving data.",
    tags: ["n8n", "CRM", "Google Calendar", "Webhooks", "Real-Time Sync"],
  },
  {
    name: "Lead Generation System",
    description:
      "End-to-end outbound pipeline: Apollo for prospect sourcing, Google Sheets for validation and filtering, OpenAI for generating personalized opening lines, and Instantly for email sequencing. Runs on a daily schedule and processes hundreds of leads without manual input. Built and actively used for ReachFlow Studio's own outreach.",
    tags: ["n8n", "Apollo API", "OpenAI", "Google Sheets", "Instantly", "Email Sequences"],
  },
  {
    name: "Manus AI Project Kickoff Automation",
    description:
      "Internal automation that fires when a new deal closes and scaffolds the entire project automatically. Spins up the standard folder structure, creates the project record in the internal system, populates onboarding documents, and sends the client their kickoff questionnaire. Every project starts consistently — nothing falls through during handoff.",
    tags: ["n8n", "Internal Tooling", "Supabase", "Notion", "Onboarding"],
  },
];

export default function Systems() {
  return (
    <>
      {/* PAGE HEADER */}
      <div className="page-header">
        <div className="container">
          <div className="section-label">Systems & Automations</div>
          <h1>The systems</h1>
          <p>
            Automation workflows and AI systems built to run without human
            intervention — from lead generation to client onboarding.
          </p>
        </div>
      </div>

      {/* SYSTEMS GRID */}
      <div className="section">
        <div className="container">
          <div className="systems-grid">
            {systems.map((s) => (
              <div key={s.name} className="system-card">
                <h3>{s.name}</h3>
                <p>{s.description}</p>
                <div className="system-tags">
                  {s.tags.map(t => (
                    <span key={t} className="system-tag">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <div className="container">
          <div className="section-label">Automate your ops</div>
          <h2>Need a system built?</h2>
          <p>
            If you&apos;re doing something manually that should be automated,
            let&apos;s talk about it.
          </p>
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn">
            Book a Discovery Call →
          </a>
        </div>
      </div>
    </>
  );
}
