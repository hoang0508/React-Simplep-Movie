import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/scss";
import useSWR from "swr";
import { fetcher } from "../../config";
import MovieCart from "./MovieCart";
// https://api.themoviedb.org/3/movie/now_playing?api_key=6dc4483c77b849ecbf002144ee64855d
const MovieList = () => {
  const { data, error } = useSWR("/api/user/123", fetcher);
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
