// utils/tmdb.js
const apiKey = '746ca63ecae7c3c09c3f556aa97a1535';

const baseUrl = 'https://api.themoviedb.org/3';

export async function fetchPopularMovies() {
  const response = await fetch(`${baseUrl}/movie/popular?api_key=${apiKey}`);
  const data = await response.json();
  return data.results;
}

export async function fetchAllMovies() {
    const response = await fetch(`${baseUrl}/discover/movie?api_key=${apiKey}`);
    const data = await response.json();
    return data.results;
  }

export async function fetchMovieDetails(id) {
  const response = await fetch(`${baseUrl}/movie/${id}?api_key=${apiKey}`);
  const data = await response.json();
  return data;
}
