import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { apiKey, fetcher } from "../config";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`,
    fetcher
  );
  console.log(
    "🚀 ~ file: MovieDetailsPage.js ~ line 12 ~ MovieDetailsPage ~ data",
    data
  );
  return (
    <>
      <div
        className="w-full h-screen bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500/${data?.backdrop_path})`,
        }}
      ></div>
    </>
  );
};

export default MovieDetailsPage;
