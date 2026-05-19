import { Link } from "react-router-dom";
import {
  addToWatchlist,
  removeFromWatchlist,
  isInWatchlist,
} from "../utils/watchlist";
import "./MovieCard.css";
import {
  FaHeart,
  FaRegHeart,
} from "react-icons/fa";


const MovieCard = ({ movie }) => {
  const saved =
    isInWatchlist(movie.id);
  return (
    <Link to={`/movie/${movie.id}`}>
      <div className="movie-card">

        <div
          className="watchlist-icon"
          onClick={(e) => {
            e.stopPropagation();

            if (saved) {
              removeFromWatchlist(movie.id);
            } else {
              addToWatchlist(movie);
            }

            window.location.reload();
          }}
        >
          {saved ? (
            <FaHeart />
          ) : (
            <FaRegHeart />
          )}
        </div>

        {/* Movie Poster */}
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : "https://via.placeholder.com/500x750?text=No+Image"
          }
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