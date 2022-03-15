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
          <button className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
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
