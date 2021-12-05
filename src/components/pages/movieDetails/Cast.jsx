import { useEffect} from 'react';
import { useParams } from 'react-router-dom';


export default function Cast(){
  const {movieId} = useParams();

  useEffect(() => {
    return fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=0840ee49b4e805937e2935e9747ee2d4&language=en-US`)
      .then(responce=>responce.json())
      .then(console.log(movieId))
  }, [])

  return(
    <div>
      <p>Cast</p> 
    </div>
  )
}