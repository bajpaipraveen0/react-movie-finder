import {
  FaReact,
  FaFilm,
  FaHeart,
  FaSearch,
  FaDatabase,
  FaMobileAlt,
  FaRocket,
  FaCode,
} from "react-icons/fa";

import "./About.css";

const About = () => {
  return (
    <div className="about-page">

      {/* HERO */}
      <section className="about-hero">

        <div className="hero-badge">
          🎬 Modern React Movie Platform
        </div>

        <h1>
          Discover Movies <br />
          In A Cinematic Experience
        </h1>

        <p>
          MovieFinder is a modern movie discovery
          application built with React and TMDB API.
          Explore trending movies, search your
          favorites, save watchlists and enjoy a
          premium streaming-inspired interface.
        </p>

        <div className="hero-buttons">

          <button className="primary-btn">
            Explore Movies
          </button>

          <button className="secondary-btn">
            View Source Code
          </button>

        </div>

      </section>

      {/* STATS */}
      <section className="stats-section">

        <div className="stat-card">
          <h2>10K+</h2>
          <p>Movies Available</p>
        </div>

        <div className="stat-card">
          <h2>100%</h2>
          <p>Responsive Design</p>
        </div>

        <div className="stat-card">
          <h2>Fast</h2>
          <p>TMDB API Integration</p>
        </div>

        <div className="stat-card">
          <h2>Modern</h2>
          <p>React Architecture</p>
        </div>

      </section>

      {/* ABOUT */}
      <section className="about-section">

        <div className="about-left">

          <span className="section-tag">
            ABOUT PROJECT
          </span>

          <h2>
            Built To Learn Real-World React
            Development
          </h2>

          <p>
            This project focuses on creating a
            professional movie streaming inspired
            interface while learning modern React
            concepts such as reusable components,
            routing, API integration, state
            management, responsive layouts and
            dynamic UI rendering.
          </p>

          <p>
            The application uses TMDB API to fetch
            real movie data and display trending,
            top-rated and popular movies in an
            interactive user interface.
          </p>

        </div>

        <div className="about-right">

          <div className="glass-card">
            <FaRocket />

            <h3>
              Fast Performance
            </h3>

            <p>
              Optimized React architecture with
              reusable components and efficient API
              handling.
            </p>
          </div>

          <div className="glass-card">
            <FaMobileAlt />

            <h3>
              Fully Responsive
            </h3>

            <p>
              Works seamlessly across desktop,
              tablet and mobile devices.
            </p>
          </div>

        </div>

      </section>

      {/* FEATURES */}
      <section className="features-section">

        <div className="section-header">

          <span className="section-tag">
            FEATURES
          </span>

          <h2>
            Everything You Need
          </h2>

        </div>

        <div className="features-grid">

          <div className="feature-card">
            <FaFilm />

            <h3>
              Trending Movies
            </h3>

            <p>
              Discover the latest trending and
              popular movies from around the world.
            </p>
          </div>

          <div className="feature-card">
            <FaSearch />

            <h3>
              Smart Search
            </h3>

            <p>
              Search movies instantly with dynamic
              TMDB powered search results.
            </p>
          </div>

          <div className="feature-card">
            <FaHeart />

            <h3>
              Watchlist
            </h3>

            <p>
              Save movies to your personal
              watchlist using LocalStorage.
            </p>
          </div>

          <div className="feature-card">
            <FaReact />

            <h3>
              Modern React
            </h3>

            <p>
              Built with reusable React components
              and clean project architecture.
            </p>
          </div>

          <div className="feature-card">
            <FaDatabase />

            <h3>
              Real API Data
            </h3>

            <p>
              Integrated with TMDB API for live
              movie information and details.
            </p>
          </div>

          <div className="feature-card">
            <FaCode />

            <h3>
              Clean Code
            </h3>

            <p>
              Structured and scalable folder
              architecture for learning purposes.
            </p>
          </div>

        </div>

      </section>

      {/* TECH STACK */}
      <section className="tech-section">

        <div className="section-header">

          <span className="section-tag">
            TECH STACK
          </span>

          <h2>
            Technologies Used
          </h2>

        </div>

        <div className="tech-grid">

          <div className="tech-card">
            React JS
          </div>

          <div className="tech-card">
            React Router
          </div>

          <div className="tech-card">
            Swiper JS
          </div>

          <div className="tech-card">
            TMDB API
          </div>

          <div className="tech-card">
            Axios
          </div>

          <div className="tech-card">
            React Icons
          </div>

          <div className="tech-card">
            CSS3
          </div>

          <div className="tech-card">
            Responsive UI
          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="cta-section">

        <h2>
          Ready To Explore Movies?
        </h2>

        <p>
          Start discovering trending and popular
          movies with a modern cinematic UI.
        </p>

        <button className="primary-btn">
          Start Watching
        </button>

      </section>

    </div>
  );
};

export default About;