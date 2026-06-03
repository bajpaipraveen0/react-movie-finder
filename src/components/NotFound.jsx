import { Link } from "react-router-dom";
import {
  FaHome,
  FaFilm,
} from "react-icons/fa";

import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found">

      <div className="not-found-content">

        <div className="error-badge">
          <FaFilm />
          Movie Not Found
        </div>

        <h1>404</h1>

        <h2>
          Oops! This Scene Doesn't Exist
        </h2>

        <p>
          The page you're looking for has
          vanished like a deleted scene.
          Let's get you back to the movies.
        </p>

        <div className="not-found-actions">

          <Link
            to="/"
            className="home-btn"
          >
            <FaHome />
            Back To Home
          </Link>

        </div>

      </div>

      {/* Background Glow */}
      <div className="glow glow-1"></div>
      <div className="glow glow-2"></div>

    </div>
  );
};

export default NotFound;