import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import MovieCard from "../components/MovieCard";

import {
  fetchTrendingMovies,
  fetchPopularMovies,
  fetchTopRatedMovies,
  fetchUpcomingMovies,
} from "../services/homeApi";

import "./CategoryMovies.css";

const categoryApis = {
  trending: fetchTrendingMovies,
  popular: fetchPopularMovies,
  "top-rated": fetchTopRatedMovies,
  upcoming: fetchUpcomingMovies,
};

const CategoryMovies = () => {
  const { category } = useParams();

  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMovies = async () => {
      try {
        setLoading(true);

        const apiFunction =
          categoryApis[category];

        if (!apiFunction) {
          setMovies([]);
          return;
        }

        const data =
          await apiFunction(page);

        setMovies(data);

        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });

      } catch (error) {
        console.error(
          "Error fetching category movies:",
          error
        );
      } finally {
        setLoading(false);
      }
    };

    getMovies();
  }, [category, page]);

  if (loading) {
    return (
      <div className="loading-container">
        <h2>Loading Movies...</h2>
      </div>
    );
  }

  return (
    <div className="category-page container">

      <div className="category-header">

        <h1>
          {category
            ?.replace("-", " ")
            .replace(
              /\b\w/g,
              (char) => char.toUpperCase()
            )}
        </h1>

      </div>

      <div className="movies-grid">

        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
          />
        ))}

      </div>

      <div className="pagination">

        <button
          disabled={page === 1}
          onClick={() =>
            setPage((prev) => prev - 1)
          }
        >
          ← Previous
        </button>

        {Array.from(
          { length: 5 },
          (_, index) => {
            const pageNumber =
              Math.max(1, page - 2) + index;

            return (
              <button
                key={pageNumber}
                className={
                  page === pageNumber
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setPage(pageNumber)
                }
              >
                {pageNumber}
              </button>
            );
          }
        )}

        <button
          onClick={() =>
            setPage((prev) => prev + 1)
          }
        >
          Next →
        </button>

      </div>

    </div>
  );
};

export default CategoryMovies;