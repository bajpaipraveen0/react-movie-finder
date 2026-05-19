import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const links = ["Home", "Search", "WatchList", "About"];

const HookIcon = () => (
  <svg width="10" height="12" viewBox="0 0 10 18" fill="none">
    <circle
      cx="5"
      cy="3"
      r="2.5"
      stroke="#6b6b7a"
      strokeWidth="1.2"
      fill="none"
    />
    <line
      x1="5"
      y1="5.5"
      x2="5"
      y2="13"
      stroke="#6b6b7a"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <path
      d="M5 13 Q5 17 9 17"
      stroke="#6b6b7a"
      strokeWidth="1.2"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

const WireSVG = ({ height = 32 }) => (
  <svg width="2" height={height} viewBox={`0 0 2 ${height}`}>
    <line
      x1="1"
      y1="0"
      x2="1"
      y2={height}
      stroke="#3a3a4a"
      strokeWidth="1.5"
      strokeDasharray="2 2"
    />
  </svg>
);

function WireAssembly({ left, wireHeight, delay, settled }) {
  return (
    <div
      className={`wire-assembly ${settled ? "wire-visible" : ""}`}
      style={{
        left,
        transitionDelay: `${delay + 0.2}s`,
      }}
    >
      <HookIcon />
      <WireSVG height={wireHeight} />
    </div>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [settled, setSettled] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setSettled(true), 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="app-container">
      <div className="background-glow" />

      <div className="hanging-wrapper">
        <div className="hanger-container">
          <WireAssembly
            left="15%"
            wireHeight={15}
            delay={0}
            settled={settled}
          />

          <WireAssembly
            left="50%"
            wireHeight={15}
            delay={0.06}
            settled={settled}
          />

          <WireAssembly
            left="85%"
            wireHeight={15}
            delay={0.12}
            settled={settled}
          />

          <div
            className={`navbar-wrapper ${!settled ? "navbar-animation" : ""}`}
          >
            <div className="navbar">
              <Link to="/" className="logo-wrapper">
                <div className="logo-box">MF</div>
                <span className="logo-text">MovieFinder</span>
              </Link>

              <nav className="desktop-nav">
                {links.map((link) => (
                  <NavLink
                    key={link}
                    to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                    className={({ isActive }) =>
                      `nav-link-item ${isActive ? "active-link" : ""}`
                    }
                  >
                    {link}
                  </NavLink>
                ))}
              </nav>

              <div className="nav-actions">
                <Link to="/login" className="nav-link-item desktop-only">
                  Log in
                </Link>

                <Link to="/signup" className="cta-btn desktop-only">
                  Get started
                </Link>

                <button
                  className="hamburger-btn"
                  onClick={() => setMenuOpen((o) => !o)}
                  aria-label="Toggle menu"
                >
                  <span
                    className={`ham-line ${menuOpen ? "line-1-open" : ""}`}
                  />

                  <span
                    className={`ham-line ${menuOpen ? "line-2-open" : ""}`}
                  />

                  <span
                    className={`ham-line ${menuOpen ? "line-3-open" : ""}`}
                  />
                </button>
              </div>
            </div>

            {menuOpen && (
              <div className="mobile-drawer">
                {links.map((link) => (
                  <NavLink
                    key={link}
                    to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                    className={({ isActive }) =>
                      `drawer-link ${isActive ? "active-link" : ""}`
                    }
                    onClick={() => setMenuOpen(false)}
                  >
                    {link}
                  </NavLink>
                ))}

                <div className="drawer-divider" />

                <div className="drawer-actions">
                  <Link
                    to="/login"
                    className="drawer-link center-text"
                    onClick={() => setMenuOpen(false)}
                  >
                    Log in
                  </Link>

                  <Link
                    to="/signup"
                    className="drawer-cta-btn"
                    onClick={() => setMenuOpen(false)}
                  >
                    Get started
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}