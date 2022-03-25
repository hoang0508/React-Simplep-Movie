// Fetch
export const fetcher = (...args) => fetch(...args).then((res) => res.json());
// apiLKey
export const apiKey = "6dc4483c77b849ecbf002144ee64855d";
// enpointAPI
const tmdbEndpoint = "https://api.themoviedb.org/3/movie";

export const tmdbAPI = {
  getMovieList: (type) => `${tmdbEndpoint}/${type}?api_key=${apiKey}`,
  getMovieDetails: (movieId, type) =>
    `${tmdbEndpoint}/${movieId}/${type}?api_key=${apiKey}`,
  getMovieCredits: (movieId) =>
    `${tmdbEndpoint}/${movieId}/credits?api_key=${apiKey}`,
};
