import React from "react";
import { useNavigate } from "react-router-dom";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/scss";
import useSWR from "swr";
import { fetcher } from "../../config";
import Button from "../button/Button";

const Banner = () => {
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=6dc4483c77b849ecbf002144ee64855d`,
    fetcher
  );
  const movie = data?.results || [];
  return (
    <section className="banner h-[500px] page-container mb-20">
      <Swiper grabCursor={"true"} slidesPerView={"auto"}>
        {movie &&
          movie.length > 0 &&
          movie.map((item) => (
            <SwiperSlide key={item.id}>
              <BannerItem item={item} />
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

const BannerItem = ({ item }) => {
  const { title, poster_path, id } = item;
  const navigate = useNavigate();
  // Button Navigate
  const hanldeClickNavigate = (e) => {
    e.preventDefault();
    navigate(`/movie/${id}`);
  };
  return (
    <div className="w-full h-full rounded-lg relative">
      <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg"></div>
      <img
        src={`https://image.tmdb.org/t/p/original/${poster_path}`}
        alt=""
        className="w-full h-full object-cover rounded-lg object-center"
      />
      <div className="absolute left-5 bottom-5 text-white">
        <h2 className="font-bold text-3xl mb-3">{title}</h2>
        <div className="flex items-center gap-x-3 mb-8">
          <span className="py-2 px-4 border border-white rounded-md">
            Adventure
          </span>
          <span className="py-2 px-4 border border-white rounded-md">
            Adventure
          </span>
          <span className="py-2 px-4 border border-white rounded-md">
            Adventure
          </span>
        </div>
        <Button onClick={(e) => hanldeClickNavigate(e)}></Button>
        {/* <button className="py-3 px-6 rounded-lg bg-primary text-white font-medium">
          Watch Now
        </button> */}
      </div>
    </div>
  );
};

export default Banner;
