// Fetch
export const fetcher = (...args) => fetch(...args).then((res) => res.json());
// apiLKey
export const apiKey = "6dc4483c77b849ecbf002144ee64855d";
// enpointAPI
const tmdbEndpoint = "https://api.themoviedb.org/3/movie";

export const tmdbAPI = {
  getMovieList: (type, page = "1") =>
    `${tmdbEndpoint}/${type}?api_key=${apiKey}&page=${page}`, // API List,
  getMovieDetails: (movieId) => `${tmdbEndpoint}/${movieId}?api_key=${apiKey}`, // API details
  getMovieMeta: (movieId, type) =>
    `${tmdbEndpoint}/${movieId}/${type}?api_key=${apiKey}`, // API Meta(chung)
  imagesOriginal: (url) => `https://image.tmdb.org/t/p/original/${url}`, // img original
  images500: (poster_path) => `https://image.tmdb.org/t/p/w500/${poster_path}`,
};
