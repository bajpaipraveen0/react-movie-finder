import { Link } from "react-router-dom";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFilm,
} from "react-icons/fa";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Logo Section */}
        <div className="footer-logo-section">

          <div className="footer-logo">
            <FaFilm />

            <span>MovieFinder</span>
          </div>

          <p className="footer-description">
            Discover trending, popular and top-rated movies
            from around the world.
          </p>

        </div>

        {/* Navigation */}
        <div className="footer-links">

          <h3>Quick Links</h3>

          <Link to="/">Home</Link>

          <Link to="/search">Search</Link>

          <Link to="/watchlist">Watchlist</Link>

          <Link to="/about">About</Link>

        </div>

        {/* Social Links */}
        <div className="footer-social">

          <h3>Follow</h3>

          <div className="social-icons">

            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>

          </div>

        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        © 2026 MovieFinder. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;