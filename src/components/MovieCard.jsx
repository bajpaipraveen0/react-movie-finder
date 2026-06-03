import { useState } from "react";
import { Link } from "react-router-dom";
import {
  addToWatchlist,
  removeFromWatchlist,
  isInWatchlist,
} from "../utils/watchlist";

import {
  FaHeart,
  FaRegHeart,
} from "react-icons/fa";

import "./MovieCard.css";

const MovieCard = ({ movie }) => {

  const [saved, setSaved] = useState(
    isInWatchlist(movie.id)
  );

  const handleWatchlist = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (saved) {
      removeFromWatchlist(movie.id);
    } else {
      addToWatchlist(movie);
    }

    setSaved(!saved);
  };

  return (
    <Link to={`/movie/${movie.id}`}>
      <div className="movie-card">

        <button
          className="watchlist-icon"
          onClick={handleWatchlist}
        >
          {saved ? (
            <FaHeart />
          ) : (
            <FaRegHeart />
          )}
        </button>

        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : "https://via.placeholder.com/500x750?text=No+Image"
          }
          alt={movie.title}
          className="movie-poster"
        />

        <div className="movie-content">
          <h2 className="movie-title">
            {movie.title}
          </h2>

          <div className="movie-info">
            <p>
              ⭐ {movie.vote_average?.toFixed(1)}
            </p>

            <span>
              {movie.release_date}
            </span>
          </div>
        </div>

      </div>
    </Link>
  );
};

export default MovieCard;