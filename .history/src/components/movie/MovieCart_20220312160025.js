import React from "react";

const MovieCart = () => {
  return (
    <div className="movie-cart rounded-lg p-3 bg-slate-800 text-white">
      <img
        src="http://genk.mediacdn.vn/2019/8/20/1-15662898065871774855253.jpg"
        alt=""
        className="w-full h-[250px] object-cover rounded-lg mb-5"
      />
      <h3 className="font-bold mb-3 text-xl">Spiderman: Homecoming</h3>
      <div className="flex justify-between items-center text-sm opacity-50 mb-10">
        <span>2017</span>
        <span>7.4</span>
      </div>
      <button className="py-3 px-6 bg-primary capitalize rounded-lg text-center w-full">
        Watch now
      </button>
    </div>
  );
};

export default MovieCart;
