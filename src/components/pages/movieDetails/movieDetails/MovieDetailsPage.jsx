import { useParams, Link, Outlet, useNavigate} from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from './MovieDetails.module.css';
import { fetchMovieDetails } from '../../../../mowiesApi';

export default function   MovieDetails(){

  const { movieId } = useParams();
  const [filmData, setFilmData] = useState('');
  const  navigate = useNavigate();

  useEffect(() => {
    fetchMovieDetails(movieId)
      .then(
      data => {
        setFilmData(data);
      }
    )
  }, [movieId]);

  const goBack = (event) => {
    event.preventDefault()
    navigate(-1)
  }

  return(
    <div>
      <button className = {styles.backBatton} onClick={goBack}>back</button><br />

      <img src={`http://image.tmdb.org/t/p/w92${filmData.poster_path}`} alt="film poster"></img><br />

      <h1>{filmData.title || filmData.name}</h1>
        <span>User score: { filmData.vote_average } </span>
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