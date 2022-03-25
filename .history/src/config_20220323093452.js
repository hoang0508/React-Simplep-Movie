// Fetch
export const fetcher = (...args) => fetch(...args).then((res) => res.json());
// apiLKey
export const apiKey = "6dc4483c77b849ecbf002144ee64855d";
// enpointAPI
const tmdbEndpoint = "https://api.themoviedb.org/3/movie";

export const tmdbAPI = {
  getMovieList: (type) => `${tmdbEndpoint}/${type}?api_key=${apiKey}`, // API List,
  getMovieDetails: (movieId) => `${tmdbEndpoint}/${movieId}?api_key=${apiKey}`, // API details
  getMovieCredits: (movieId) =>
    `${tmdbEndpoint}/${movieId}/credits?api_key=${apiKey}`, // API Credits
  getMovieVideos: (movieId) =>
    `${tmdbEndpoint}/${movieId}/videos?api_key=${apiKey}`,
  getMovieSimilar: (movieId) =>
    `${tmdbEndpoint}/${movieId}/similar?api_key=${apiKey}`,
};
