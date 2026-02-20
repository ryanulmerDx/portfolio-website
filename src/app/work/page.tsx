import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Projects — ReachFlow Studio",
  description: "Websites, portals, and platforms built for real clients. See the work ReachFlow Studio has shipped.",
};

const BOOKING_URL = "https://cal.com/ryan-ulmer-zbmuxk/discoverycall";

const projects = [
  {
    num: "01",
    name: "Dead West Tattoo",
    badge: "Local Business · Website",
    description: [
      "Built a clean, modern website for Jamie's tattoo shop — designed to showcase the artist's work and turn local search traffic into booked appointments. The entire site was built mobile-first since the majority of tattoo shop traffic comes from phones.",
      "Focused on photography layout and visual hierarchy to let the portfolio do the selling. Local SEO baked in from the start so the shop ranks when people nearby search for tattoo artists.",
    ],
    outcome: "A professional online presence that matches the quality of the work — and converts local search visitors into booked clients.",
    tags: ["Next.js", "Mobile-First", "Local SEO", "Booking Integration", "Photography Layout"],
  },
  {
    num: "02",
    name: "Rustic Mountain Dental",
    badge: "Healthcare · Website + AI System",
    description: [
      "Built two systems for this dental practice: a professional website and an AI receptionist that handles all inbound calls automatically. The AI system answers calls, qualifies callers, responds to common questions about services and insurance, and routes urgent cases directly to staff.",
      "After-hours calls are handled without going to voicemail. The system collects caller information, logs everything, and sends staff alerts for anything that needs follow-up. No call falls through the cracks.",
    ],
    outcome: "Front desk call volume from routine inquiries dropped significantly. Missed calls effectively eliminated. Staff now focus on patients in the office, not the phone.",
    tags: ["Next.js", "n8n", "Twilio Voice", "OpenAI", "Firestore", "Local SEO"],
  },
  {
    num: "03",
    name: "Southwest Industrial",
    badge: "B2B · Industrial Services",
    description: [
      "Built a professional website for an industrial services company after a three-month sales process — the first major closed deal for ReachFlow Studio. The brief was to make this company look as serious as their work is.",
      "Built for credibility, service clarity, and lead generation. Clean B2B presentation that communicates capability immediately to decision-makers who land from search or referral. Every section is designed to answer the question a buyer has before they move to the next one.",
    ],
    outcome: "A high-trust, high-conversion site that matches the company's level of professionalism and generates qualified inbound leads.",
    tags: ["Next.js", "B2B", "Lead Generation", "Service Pages", "SEO", "Contact Forms"],
  },
  {
    num: "04",
    name: "The Directorate",
    badge: "Membership Platform · Stripe + Auth",
    description: [
      "Built a full subscription portal from scratch — no plug-and-play subscription tools, everything custom. Members sign up, choose their plan, and are granted access to gated content automatically via Stripe-triggered webhooks. Subscription management, cancellations, and plan changes are all self-serve through a member dashboard.",
      "Auth, payments, and access control built end to end. Row-level security in Supabase ensures members can only access what their plan allows. The system handles edge cases — failed payments, expired subscriptions, plan downgrades — automatically.",
    ],
    outcome: "A fully automated membership platform. No manual intervention needed to onboard, manage, or offboard subscribers at any scale.",
    tags: ["Next.js", "Stripe", "Supabase", "Auth.js", "Webhooks", "Gated Content", "Row-Level Security"],
  },
  {
    num: "05",
    name: "The Tire Chair",
    badge: "E-commerce · Conversion Optimization",
    description: [
      "Worked on an e-commerce store with a focus on improving the full funnel — from paid ad click to completed purchase. Restructured product pages for clarity and trust, tightened the ad-to-landing-page flow to reduce drop-off, and worked on marketing strategy alongside the technical implementation.",
      "Analyzed where users were losing interest and made targeted changes to the product page structure, social proof placement, and checkout flow. Worked hands-on with both the technical side and the advertising strategy to ensure the changes translated to real results.",
    ],
    outcome: "Improved purchase conversion rate through better product page structure and a more coherent journey from ad click to checkout.",
    tags: ["E-commerce", "Shopify", "Meta Ads", "Conversion Optimization", "Landing Pages", "Analytics"],
  },
];

export default function Work() {
  return (
    <>
      {/* PAGE HEADER */}
      <div className="page-header">
        <div className="container">
          <div className="section-label">Client Projects</div>
          <h1>The work</h1>
          <p>
            Websites, portals, platforms, and full-stack systems — built and
            shipped for real clients across industries.
          </p>
        </div>
      </div>

      {/* PROJECTS */}
      <div className="section">
        <div className="container">
          <div className="work-grid">
            {projects.map((p) => (
              <div key={p.num} className="work-card">
                <div className="work-number">{p.num}</div>
                <h3>{p.name}</h3>
                <div className="work-badge">{p.badge}</div>
                {p.description.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
                <div className="work-outcome">{p.outcome}</div>
                <div className="work-tags">
                  {p.tags.map(t => (
                    <span key={t} className="work-tag">{t}</span>
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
          <div className="section-label">Start a project</div>
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
