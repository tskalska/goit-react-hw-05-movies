export default function moviesApi() { 
  return fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=0840ee49b4e805937e2935e9747ee2d4`)
    .then(responce=>responce.json())
    // .then(data=>console.log(data.results));
}
// moviesApi();