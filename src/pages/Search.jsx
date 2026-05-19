import { useEffect, useState } from "react";

import MovieCard from "../components/MovieCard";

import { fetchSearchMovies } from "../services/searchApi";

import "./Search.css";

const Search = () => {
    const [query, setQuery] = useState("");

    const [movies, setMovies] = useState([]);

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const delayDebounce = setTimeout(async () => {

            if (query.trim() !== "") {

                setLoading(true);

                const data = await fetchSearchMovies(query);

                setMovies(data);

                setLoading(false);

            } else {
                setMovies([]);
            }

        }, 500);

        return () => clearTimeout(delayDebounce);

    }, [query]);

    return (
        <div className="homeContainer search-page">

            {/* Header */}
            <div className="search-header">

                {/* Left Content */}
                <div className="search-title-section">

                    <h1>
                        Search Movies
                    </h1>

                    <p>
                        Discover trending and popular movies
                    </p>

                </div>

                {/* Right Search */}
                <div className="search-input-wrapper">

                    <input
                        type="text"
                        placeholder="Search movies..."
                        className="search-box"
                        value={query}
                        onChange={(e) =>
                            setQuery(e.target.value)
                        }
                    />

                    <span className="search-icon">
                        🔍
                    </span>

                </div>

            </div>

            {/* Loading */}
            {loading && (
                <h2 className="search-message">
                    Searching movies...
                </h2>
            )}

            {/* Initial Empty State */}
            {!loading &&
                query === "" && (
                    <div className="search-empty-state">

                        <div className="search-empty-icon">
                            🎬
                        </div>

                        <h2>
                            Search Your Favorite Movies
                        </h2>

                        <p>
                            Discover trending, popular and top-rated
                            movies from around the world.
                        </p>

                    </div>
                )}

            {/* No Results */}
            {!loading &&
                query &&
                movies.length === 0 && (
                    <div className="search-empty-state">

                        <div className="search-empty-icon">
                            😢
                        </div>

                        <h2>
                            No Movies Found
                        </h2>

                        <p>
                            Try searching with another movie name.
                        </p>

                    </div>
                )}

            {/* Results */}
            <div className="search-results">

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

export default Search;