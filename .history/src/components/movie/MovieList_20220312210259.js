import React, { useEffect, useState } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/scss";
import useSWR from "swr";
import { fetcher } from "../../config";
import MovieCart from "./MovieCart";
// https://api.themoviedb.org/3/movie/now_playing?api_key=6dc4483c77b849ecbf002144ee64855d
const MovieList = () => {
  const [movie, setMovie] = useState([]);
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=6dc4483c77b849ecbf002144ee64855d`,
    fetcher
  );
  useEffect(() => {
    setMovie(data.results);
  }, [data]);
  console.log(movie);
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
