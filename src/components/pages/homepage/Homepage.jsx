import { Link, useLocation} from 'react-router-dom';
import { useEffect, useState } from 'react';
import moviesApi from '../movies/moviesApi';


export default function Homepage(){

  const [movies, setMovies] = useState('');

  useEffect(() => {
    moviesApi().then(
        data => {
          setMovies(data.results);
        }
      )
  }, []);
 
  return(
    <div>
      <ul>
        {movies && movies.map((movie)=>(
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`}> 
            {movie.title || movie.name} 
          </Link>
        </li>))}
      </ul>
    </div>
  )
}