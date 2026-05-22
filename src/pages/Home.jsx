import { useEffect, useState } from "react";

import HeroBanner from "../components/HeroBanner";
import MultiSlider from "../components/MultiSlider";

import {
  fetchTrendingMovies,
  fetchPopularMovies,
  fetchTopRatedMovies,
  fetchUpcomingMovies,
} from "../services/homeApi";


const Home = () => {

  const [trendingMovies, setTrendingMovies] =
    useState([]);

  const [popularMovies, setPopularMovies] =
    useState([]);

  const [topRatedMovies, setTopRatedMovies] =
    useState([]);

  const [upcomingMovies, setUpcomingMovies] =
    useState([]);

  useEffect(() => {

    const getMovies = async () => {

      const trending =
        await fetchTrendingMovies();

      const popular =
        await fetchPopularMovies();

      const topRated =
        await fetchTopRatedMovies();

      const upcoming =
        await fetchUpcomingMovies();

      setTrendingMovies(trending);

      setPopularMovies(popular);

      setTopRatedMovies(topRated);

      setUpcomingMovies(upcoming);
    };

    getMovies();

  }, []);

  return (
    <div className="homeContainer container">

      <HeroBanner />

      <MultiSlider
        title="Trending Movies"
        movies={trendingMovies}
        category="trending"
      />

      <MultiSlider
        title="Popular Movies"
        movies={popularMovies}
        category="popular"
      />

      <MultiSlider
        title="Top Rated Movies"
        movies={topRatedMovies}
        category="top-rated"
      />

      <MultiSlider
        title="Upcoming Movies"
        movies={upcomingMovies}
        category="upcoming"
      />

    </div>
  );
};

export default Home;