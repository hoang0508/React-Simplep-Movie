import React from "react";
import { useParams } from "react-router-dom";

const MovieDetailsPage = () => {
  const param = useParams();
  console.log(param);
  return <div>MovieDetailsPage</div>;
};

export default MovieDetailsPage;
