import { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import styles from './Cast.module.css'
import { fetchCast } from '../../../../mowiesApi';

export default function Cast(){
  const [cast, setCrew] = useState('');

  const {movieId} = useParams();

  useEffect(() => {
    fetchCast(movieId)
      .then((data)=>{setCrew(data.cast)})
  }, [ movieId ])

  return(
    <div>
      <ul className = {styles.actorslist}>
          {cast && cast.map((actor)=>(
          <li key={actor.id}>
            {actor.profile_path===null && <p>No image</p>}<br />
            {actor.profile_path && <img src={`http://image.tmdb.org/t/p/w92${actor.profile_path}`} alt="film poster" className={styles.profilePhoto}></img>}<br/>
            {actor.name}
            <p>{actor.character}</p><br />
          </li>))}
        </ul>
    </div>
  )
}