import React from "react";

const MovieCart = ({ item }) => {
  const { title, vote_average, release_date, poster_path } = item;
  return (
    <div className="movie-cart rounded-lg p-3 bg-slate-800 text-white">
      <img
        src={poster_path}
        alt=""
        className="w-full h-[250px] object-cover rounded-lg mb-5"
      />
      <h3 className="font-bold mb-3 text-xl">{title}</h3>
      <div className="flex justify-between items-center text-sm opacity-50 mb-10">
        <span>{new Date(release_date).getFullYear()}</span>
        <span>{vote_average}</span>
      </div>
      <button className="py-3 px-6 bg-primary capitalize rounded-lg text-center w-full">
        Watch now
      </button>
    </div>
  );
};

export default MovieCart;
