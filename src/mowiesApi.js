const BASE_URL = 'https://api.themoviedb.org/3';

async function moviesApi(url = '') {
  const response = await fetch(url);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

export function fetchPopularMowies() {
  return moviesApi(`${BASE_URL}/trending/all/day?api_key=0840ee49b4e805937e2935e9747ee2d4`);
}

export function fetchMovieDetails(movieId) {
  return moviesApi(`${BASE_URL}/movie/${movieId}?api_key=0840ee49b4e805937e2935e9747ee2d4&language=en-US`);
}

export function fetchCast(movieId) {
  return moviesApi(`${BASE_URL}/movie/${movieId}/credits?api_key=0840ee49b4e805937e2935e9747ee2d4&language=en-US`);
}

export function fetchReview(movieId) {
  return moviesApi(`${BASE_URL}/movie/${movieId}/reviews?api_key=0840ee49b4e805937e2935e9747ee2d4&language=en-US&page=1`);
}
  
export function fetchMoviesByTitle(inputValue) {
  return moviesApi(`${BASE_URL}/search/movie/?api_key=0840ee49b4e805937e2935e9747ee2d4&language=en-US&page=1&include_adult=false&query=${inputValue}`);
}