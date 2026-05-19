import HeroBanner from "../components/HeroBanner";
import MultiSlider from "../components/MultiSlider";

import {
  fetchTrendingMovies,
  fetchPopularMovies,
  fetchTopRatedMovies,
  fetchUpcomingMovies,
} from "../services/homeApi";

const Home = () => {
  return (
    <div className="homeContainer container">

      <HeroBanner />

      <MultiSlider title="Trending Movies"
        fetchMovies={fetchTrendingMovies} />
      <MultiSlider
        title="Popular Movies"
        fetchMovies={fetchPopularMovies}
      />

      <MultiSlider
        title="Top Rated Movies"
        fetchMovies={fetchTopRatedMovies}
      />

      <MultiSlider
        title="Upcoming Movies"
        fetchMovies={fetchUpcomingMovies}
      />
    </div>
  );
};

export default Home;