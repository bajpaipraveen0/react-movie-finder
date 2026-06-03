import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaFilm,
} from "react-icons/fa";

import { Link } from "react-router-dom";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-top">

        <div className="footer-brand">

          <div className="footer-logo">
            <FaFilm />
            <span>MovieFinder</span>
          </div>

          <p>
            Discover trending, popular and top-rated
            movies from around the world. Explore
            detailed movie information, cast,
            ratings and build your personal
            watchlist.
          </p>

          <div className="footer-social">

            <a href="#">
              <FaGithub />
            </a>

            <a href="#">
              <FaLinkedin />
            </a>

            <a href="#">
              <FaTwitter />
            </a>

            <a href="#">
              <FaInstagram />
            </a>

          </div>

        </div>

        <div className="footer-links">

          <h3>Navigation</h3>

          <Link to="/">Home</Link>
          <Link to="/search">Search</Link>
          <Link to="/watchlist">Watchlist</Link>
          <Link to="/about">About</Link>

        </div>

        <div className="footer-links">

          <h3>Categories</h3>

          <Link to="/movies/trending">
            Trending
          </Link>

          <Link to="/movies/popular">
            Popular
          </Link>

          <Link to="/movies/top-rated">
            Top Rated
          </Link>

          <Link to="/movies/upcoming">
            Upcoming
          </Link>

        </div>

        <div className="footer-links">

          <h3>Tech Stack</h3>

          <span>React JS</span>
          <span>TMDB API</span>
          <span>Swiper JS</span>
          <span>React Router</span>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © 2026 MovieFinder. Built with React &
          TMDB API. Made with ❤️ by Praveen Bajpai
        </p>

      </div>

    </footer>
  );
};

export default Footer;