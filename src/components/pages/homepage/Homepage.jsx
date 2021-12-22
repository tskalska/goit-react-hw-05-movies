import { useEffect, useState } from 'react';
import moviesApi from '../movies/moviesApi';
import FilmsList from '../movies/FilmsList';


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
     <FilmsList 
        movies={movies}
      />
    </div>
  )
}