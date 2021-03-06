import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { apiKey, fetcher } from "../config";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}>`,
    fetcher
  );
  console.log(
    "🚀 ~ file: MovieDetailsPage.js ~ line 12 ~ MovieDetailsPage ~ data",
    data
  );
  return <div>MovieDetailsPage</div>;
};

export default MovieDetailsPage;
