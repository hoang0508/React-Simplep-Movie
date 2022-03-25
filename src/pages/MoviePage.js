import React, { useEffect, useState } from "react";
import useSWR from "swr";
import MovieCart from "components/movie/MovieCart";
import { fetcher, tmdbAPI } from "config";
import useDebounce from "hooks/useDebounce";
import ReactPaginate from "react-paginate";
const itemsPerPage = 20;
const MoviePage = () => {
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  // Page
  const [nextpage, setNextPage] = useState(1);
  // input Filter
  const [filter, setFilter] = useState("");
  // useDebound
  const filterDebounce = useDebounce(filter, 500);
  // url
  const [url, setUrl] = useState(
    // `https://api.themoviedb.org/3/movie/popular?api_key=6dc4483c77b849ecbf002144ee64855d&page=${nextpage}`
    tmdbAPI.getMovieList("popular", nextpage)
  );
  // func Onchange
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };
  // Fetch API
  const { data, error } = useSWR(url, fetcher);
  // loading
  const loading = !data && !error;
  // useEffect (debounde, filter)
  useEffect(() => {
    if (filterDebounce) {
      setUrl(
        // `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${filterDebounce}&page=${nextpage}`
        tmdbAPI.getMovieSearch(filterDebounce, nextpage)
      );
    } else {
      setUrl(
        // `https://api.themoviedb.org/3/movie/popular?api_key=6dc4483c77b849ecbf002144ee64855d&page=${nextpage}`
        tmdbAPI.getMovieList("popular", nextpage)
      );
    }
  }, [filterDebounce, nextpage]);
  // Kiểm tra có data hay không ?
  // if (!data) return null;
  const movies = data?.results || [];
  // useFfetch Phân trang pagination
  useEffect(() => {
    if (!data || !data.total_pages) return null;
    setPageCount(Math.ceil(data.total_results / itemsPerPage));
  }, [data, itemOffset]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.total_results;
    setItemOffset(newOffset);
    // setNextPage
    setNextPage(event.selected + 1);
  };
  return (
    <>
      <div className="py-10 page-container">
        <div className="flex mb-10">
          <div className="flex-1">
            <input
              type="text"
              className="w-full p-4 bg-slate-800 text-white outline-none"
              placeholder="Type here to search..."
              onChange={(e) => handleFilterChange(e)}
            />
          </div>
          <button className="p-4 text-white bg-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
        {loading && (
          <div className="w-10 h-10 border-4 border-primary border-t-transparent border-t-4 rounded-full animate-spin mx-auto"></div>
        )}
        <div className="grid grid-cols-4 gap-10">
          {!loading &&
            movies &&
            movies.length > 0 &&
            movies.map((item) => <MovieCart key={item.id} item={item} />)}
        </div>
        <div className="mt-10">
          <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
            className="pagination"
          />
        </div>
      </div>
    </>
  );
};

export default MoviePage;
