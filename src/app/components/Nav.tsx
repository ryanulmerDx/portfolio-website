const BOOKING_URL = "https://cal.com/ryan-ulmer-zbmuxk/discoverycall";

export default function Nav() {
  return (
    <nav>
      <div className="container">
        <div className="nav-inner">
          <a href="/" className="nav-brand">
            <span className="nav-brand-text">ReachFlow<em>Studio</em></span>
          </a>
          <div className="nav-links">
            <a href="/work" className="nav-link">Work</a>
            <a href="/systems" className="nav-link">Systems</a>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="nav-cta">
              Book a Call
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
