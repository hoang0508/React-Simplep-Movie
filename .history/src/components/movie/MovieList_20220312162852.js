import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/scss";
import MovieCart from "./MovieCart";
const MovieList = () => {
  return (
    <div className="movie-list">
      <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
        <SwiperSlide>
          <MovieCart />
        </SwiperSlide>
        <SwiperSlide>
          <MovieCart />
        </SwiperSlide>
        <SwiperSlide>
          <MovieCart />
        </SwiperSlide>
        <SwiperSlide>
          <MovieCart />
        </SwiperSlide>
        <SwiperSlide>
          <MovieCart />
        </SwiperSlide>
        <SwiperSlide>
          <MovieCart />
        </SwiperSlide>
        <SwiperSlide>
          <MovieCart />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MovieList;
