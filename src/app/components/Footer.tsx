const BOOKING_URL = "https://cal.com/ryan-ulmer-zbmuxk/discoverycall";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">
            ReachFlow<span>Studio</span>
          </div>
          <div className="footer-links">
            <a href="/work">Client Projects</a>
            <a href="/systems">Systems</a>
            <a href="mailto:ryanulmer747@gmail.com">ryanulmer747@gmail.com</a>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">Book a Call</a>
          </div>
        </div>
        <div className="footer-copy">
          © {new Date().getFullYear()} ReachFlow Studio. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
