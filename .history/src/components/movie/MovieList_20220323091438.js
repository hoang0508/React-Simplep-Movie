import React, { useEffect, useState } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/scss";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "../../config";
import MovieCart from "./MovieCart";
// https://api.themoviedb.org/3/movie/now_playing?api_key=6dc4483c77b849ecbf002144ee64855d
const MovieList = ({ type = "now_playing" }) => {
  const [movies, setMovies] = useState([]);
  // Call API
  const { data } = useSWR(
    // Custom tối ưu API , Ở file config
    tmdbAPI.getMovieList(type),
    fetcher
  );
  // UseEffect
  useEffect(() => {
    setMovies(data?.results);
  }, [data]);
  return (
    <div className="movie-list">
      <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
        {movies &&
          movies.length > 0 &&
          movies.map((item) => (
            <SwiperSlide key={item.id}>
              <MovieCart item={item} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default MovieList;
