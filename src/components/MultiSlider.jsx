import {
  Navigation,
  A11y,
} from "swiper/modules";

import {
  Swiper,
  SwiperSlide,
} from "swiper/react";

import {
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

import MovieCard from "./MovieCard";

import "./MultiSlider.css";

import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

const MultiSlider = ({
  title,
  movies = [],
  category,
}) => {

  const sliderId =
    title.replace(/\s+/g, "-").toLowerCase();

  return (
    <div className="slider-section">

      <div className="slider-top">

        <h2 className="slider-title">
          {title}
        </h2>

        <div className="slider-navigation">

          <Link
            to={`/movies/${category}`}
            className="see-all-btn"
          >
            See All
          </Link>

          <button
            className={`slider-prev-${sliderId}`}
          >
            <FaChevronLeft />
          </button>

          <button
            className={`slider-next-${sliderId}`}
          >
            <FaChevronRight />
          </button>

        </div>

      </div>

      <Swiper
        modules={[
          Navigation,
          A11y,
        ]}

        navigation={{
          prevEl:
            `.slider-prev-${sliderId}`,

          nextEl:
            `.slider-next-${sliderId}`,
        }}

        spaceBetween={20}

        slidesPerView={5}

        loop={movies.length > 5}

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