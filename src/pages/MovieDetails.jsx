import { useEffect, useState } from "react";

import { fetchMovieDetails } from "../services/homeApi";
import { useParams } from "react-router-dom";
import "./MovieDetails.css";

const MovieDetails = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getMovie = async () => {
      const data = await fetchMovieDetails(id);

      console.log(data);

      setMovie(data);
    };

    getMovie();
  }, [id]);

  if (!movie) {
    return <h1>Loading...</h1>;
  }

    return (
                <div className="movie-details">

      {/* Backdrop Banner */}
      <div
        className="movie-backdrop"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
        }}
      >
        <div className="backdrop-overlay"></div>
      </div>

      {/* Main Content */}
      <div className="movie-content-wrapper">

        {/* Poster */}
        <div className="movie-poster-section">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="movie-poster"
          />
        </div>

        {/* Details */}
        <div className="movie-info-section">

          <h1 className="movie-title">
            {movie.title}
          </h1>

          <p className="movie-tagline">
            {movie.tagline}
          </p>

          {/* Meta Info */}
          <div className="movie-meta">
            <span>⭐ {movie.vote_average.toFixed(1)}</span>
            <span>{movie.runtime} min</span>
            <span>{movie.release_date}</span>
            <span>{movie.status}</span>
          </div>

          {/* Genres */}
          <div className="genre-container">
            {movie.genres.map((genre) => (
              <span key={genre.id} className="genre-badge">
                {genre.name}
              </span>
            ))}
          </div>

          {/* Overview */}
          <div className="movie-section">
            <h3>Overview</h3>

            <p>{movie.overview}</p>
          </div>

          {/* Budget + Revenue */}
          <div className="movie-stats">

            <div className="stat-box">
              <h4>Budget</h4>
              <p>${movie.budget.toLocaleString()}</p>
            </div>

            <div className="stat-box">
              <h4>Revenue</h4>
              <p>${movie.revenue.toLocaleString()}</p>
            </div>

            <div className="stat-box">
              <h4>Votes</h4>
              <p>{movie.vote_count}</p>
            </div>

          </div>

          {/* Languages */}
          <div className="movie-section">
            <h3>Languages</h3>

            <div className="language-list">
              {movie.spoken_languages.map((language) => (
                <span key={language.iso_639_1}>
                  {language.english_name}
                </span>
              ))}
            </div>
          </div>

          {/* Production Companies */}
          <div className="movie-section">
            <h3>Production Companies</h3>

            <div className="company-list">
              {movie.production_companies.map((company) => (
                <div key={company.id} className="company-card">

                  {company.logo_path && (
                    <img
                      src={`https://image.tmdb.org/t/p/w200${company.logo_path}`}
                      alt={company.name}
                    />
                  )}

                  <p>{company.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* IMDb Button */}
          <a
            href={`https://www.imdb.com/title/${movie.imdb_id}`}
            target="_blank"
            rel="noreferrer"
            className="imdb-button"
          >
            View on IMDb
          </a>

        </div>
      </div>
    </div>
        )
    }

export default MovieDetails