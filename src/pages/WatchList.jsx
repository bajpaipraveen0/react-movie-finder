import { useState } from "react";
import MovieCard from "../components/MovieCard";

import {
  getWatchlist,
} from "../utils/watchlist";

import "./WatchList.css";

const Watchlist = () => {
  const [movies] = useState(
    () => getWatchlist()
  );

  return (
    <div className="homeContainer watchlist-page">

      <div className="watchlist-header">

        <h1>
          My Watchlist
        </h1>

        <p>
          Movies you saved to watch later
        </p>

      </div>

      {movies.length === 0 && (
        <div className="watchlist-empty">

          <div className="watchlist-icon">
            🎬
          </div>

          <h2>
            Your Watchlist is Empty
          </h2>

          <p>
            Start adding movies to your
            personal watchlist.
          </p>

        </div>
      )}

      <div className="watchlist-grid">

        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
          />
        ))}

      </div>

    </div>
  );
};

export default Watchlist;