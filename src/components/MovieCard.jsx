import { Link } from "react-router-dom";
import "./MovieCard.css";

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.id}`}>
      <div className="movie-card">

        {/* Movie Poster */}
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="movie-poster"
        />

        {/* Movie Details */}
        <div className="p-4 movie-content">
          <h2 className="movie-title">
            {movie.title}
          </h2>

          <div className="movie-info">
            <p>⭐ {movie.vote_average?.toFixed(1)}</p>
            <span>{movie.release_date}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;