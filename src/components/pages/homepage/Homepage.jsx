import { useEffect, useState } from 'react';
import MoviesList from '../movies/MoviesList';
import { fetchPopularMowies } from '../../../mowiesApi';


export default function Homepage(){

  const [movies, setMovies] = useState('');

  useEffect(() => {
    fetchPopularMowies().then(
          data => {
            setMovies(data.results);
          }
        )
  }, []);
 
  return(
    

    <div>
     <MoviesList 
        movies={movies}
      />
    </div>
  )
}