import React from "react";
import useSWR from "swr";
import MovieCart from "../components/movie/MovieCart";
import MovieList from "../components/movie/MovieList";
import { fetcher } from "../config";

const MoviePage = () => {
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/popular?api_key=6dc4483c77b849ecbf002144ee64855d`,
    fetcher
  );
  const movies = data?.results || [];
  return (
    <>
      <div className="py-10">
        <div className="flex">
          <div className="flex-1">
            <input
              type="text"
              className="w-full"
              placeholder="Type here to search..."
            />
          </div>
        </div>
        <div className="grid grid-cols-4 gap-10">
          {movies &&
            movies.length > 0 &&
            movies.map((item) => <MovieCart key={item} item={item} />)}
        </div>
      </div>
    </>
  );
};

export default MoviePage;
