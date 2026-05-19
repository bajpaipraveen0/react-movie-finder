const WATCHLIST_KEY = "movie_watchlist";

/* Get Watchlist */

export const getWatchlist = () => {
  const movies =
    localStorage.getItem(WATCHLIST_KEY);

  return movies ? JSON.parse(movies) : [];
};

/* Add Movie */

export const addToWatchlist = (movie) => {
  const movies = getWatchlist();

  const alreadyExists = movies.find(
    (item) => item.id === movie.id
  );

  if (alreadyExists) return;

  const updatedMovies = [...movies, movie];

  localStorage.setItem(
    WATCHLIST_KEY,
    JSON.stringify(updatedMovies)
  );
};

/* Remove Movie */

export const removeFromWatchlist = (
  movieId
) => {
  const movies = getWatchlist();

  const updatedMovies = movies.filter(
    (movie) => movie.id !== movieId
  );

  localStorage.setItem(
    WATCHLIST_KEY,
    JSON.stringify(updatedMovies)
  );
};

/* Check Exists */

export const isInWatchlist = (movieId) => {
  const movies = getWatchlist();

  return movies.some(
    (movie) => movie.id === movieId
  );
};