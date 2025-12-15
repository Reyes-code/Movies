const API = process.env.REACT_APP_TMDB_API_URL || "https://api.themoviedb.org/3";

export function get(path) {
  return fetch(API + path, {
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_TMDB_API_KEY}`,
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((result) => result.json());
}