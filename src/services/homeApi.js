import axios from "axios";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const BASE_URL = "https://api.themoviedb.org/3";

/* Trending */

export const fetchTrendingMovies = async (
  page = 1
) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/trending/movie/week`,
      {
        params: {
          api_key: API_KEY,
          page,
        },
      }
    );

    return response.data.results;
  } catch (error) {
    console.error(
      "Error fetching trending movies:",
      error
    );

    return [];
  }
};

/* Popular */

export const fetchPopularMovies = async (
  page = 1
) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/popular`,
      {
        params: {
          api_key: API_KEY,
          page,
        },
      }
    );

    return response.data.results;
  } catch (error) {
    console.error(
      "Error fetching popular movies:",
      error
    );

    return [];
  }
};

/* Top Rated */

export const fetchTopRatedMovies = async (
  page = 1
) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/top_rated`,
      {
        params: {
          api_key: API_KEY,
          page,
        },
      }
    );

    return response.data.results;
  } catch (error) {
    console.error(
      "Error fetching top rated movies:",
      error
    );

    return [];
  }
};

/* Upcoming */

export const fetchUpcomingMovies = async (
  page = 1
) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/upcoming`,
      {
        params: {
          api_key: API_KEY,
          page,
        },
      }
    );

    return response.data.results;
  } catch (error) {
    console.error(
      "Error fetching upcoming movies:",
      error
    );

    return [];
  }
};

/* Movie Details */

export const fetchMovieDetails = async (
  id
) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${id}`,
      {
        params: {
          api_key: API_KEY,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error(
      "Error fetching movie details:",
      error
    );

    return null;
  }
};

/* Movie Credits */

export const fetchMovieCredits = async (
  id
) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${id}/credits`,
      {
        params: {
          api_key: API_KEY,
        },
      }
    );

    return response.data.cast;
  } catch (error) {
    console.error(
      "Error fetching movie credits:",
      error
    );

    return [];
  }
};

/* Similar Movies */

export const fetchSimilarMovies = async (
  id,
  page = 1
) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${id}/similar`,
      {
        params: {
          api_key: API_KEY,
          page,
        },
      }
    );

    return response.data.results;
  } catch (error) {
    console.error(
      "Error fetching similar movies:",
      error
    );

    return [];
  }
};