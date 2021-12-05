import { useParams, Link, Outlet} from 'react-router-dom';
import { useEffect, useState } from 'react';
// import Review from './Review';

export default function   MovieDetails(){

  const { movieId } = useParams();
  const [filmData, setFilmData] = useState('');

  useEffect(() => {
    return fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=0840ee49b4e805937e2935e9747ee2d4&language=en-US`)
      .then(responce=>responce.json())
      .then(
      data => {
        setFilmData(data);
      }
    )
  }, [movieId]);


  return(
    <div>
      <img src={`http://image.tmdb.org/t/p/w92${filmData.poster_path}`} alt="film poster"></img>
      <h1>{filmData.title || filmData.name}</h1>
        <span></span>
      <h2>Overview</h2>
        <span>{filmData.overview}</span>
      <h3>Genres</h3>
        <ul>
          {filmData.genres && filmData.genres.map((genre)=>(
          <li key={genre.id}>{genre.name}</li>))}
        </ul>
      <span>Aditional Information</span>
      <ul>
        <li>
          <Link to={`cast`}>Cast</Link>
        </li>
        <li>
          <Link to={`review`}>Review</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  )
}