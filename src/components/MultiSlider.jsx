import { useEffect, useState } from "react";

import { Navigation, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import MovieCard from "./MovieCard";

import "./MultiSlider.css";
import "swiper/css";
import "swiper/css/navigation";

const MultiSlider = ({ title, fetchMovies }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const data = await fetchMovies();
      setMovies(data);
    };

    getMovies();
  }, [fetchMovies]);

  return (
    <div className="slider-section">

      <h2 className="slider-title">
        {title}
      </h2>

      <Swiper
        modules={[Navigation, A11y]}
        spaceBetween={20}
        slidesPerView={5}
        navigation
        loop={true}
        breakpoints={{
          320: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <MovieCard movie={movie} />
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
};

export default MultiSlider;