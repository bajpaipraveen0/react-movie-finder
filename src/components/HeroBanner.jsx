import { useEffect, useState } from "react";

import {
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";

import {
  Swiper,
  SwiperSlide,
} from "swiper/react";

import {
  fetchTrendingMovies,
} from "../services/homeApi";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./HeroBanner.css";

const HeroBanner = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const data = await fetchTrendingMovies();

      setMovies(data.slice(0, 10));
    };

    getMovies();
  }, []);

  return (
    <div className="hero-banner-wrapper">

      <Swiper
        modules={[
          Autoplay,
          EffectCoverflow
        ]}
        effect="coverflow"
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        speed={1000}        
  centeredSlides= {true}
  centeredSlidesBounds= {true}

        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 250,
          modifier: 2,
          slideShadows: false,
          scale: 0.85,
        }}
        className="hero-swiper"
      >
        {movies.map((movie) => (
          <SwiperSlide
            key={movie.id}
            className="hero-slide"
          >
            <div
              className="hero-card"
              style={{
                backgroundImage: `url(
                  https://image.tmdb.org/t/p/original${movie.backdrop_path}
                )`,
              }}
            >

              <div className="hero-overlay"></div>

              <div className="hero-content">

                <h1>
                  {movie.title}
                </h1>

                <p>
                  {movie.overview}
                </p>

                <div className="hero-meta">

                  <span>
                    ⭐ {movie.vote_average.toFixed(1)}
                  </span>

                  <span>
                    {movie.release_date}
                  </span>

                </div>

                <button>
                  Watch Now
                </button>

              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
};

export default HeroBanner;