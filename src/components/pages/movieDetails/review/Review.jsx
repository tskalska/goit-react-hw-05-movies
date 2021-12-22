import { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';


export default function Cast(){
  const [reviews, setReviews] = useState('');

  const {movieId} = useParams();

  useEffect(() => {
    return fetch(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=0840ee49b4e805937e2935e9747ee2d4&language=en-US&page=1`)
      .then(responce=>responce.json())
      .then((data)=>{setReviews(data.results)})
  }, [ ])

  return(
    <div>
      <ul>
          {reviews.length === 0 && <span>We don't have any reviews for this mowie</span>}
          {reviews && reviews.map((review)=>(
            <li key={review.id}>
              <h3>{review.author_details.name}</h3><br />
              <p>{review.content} Review</p>
            </li>))
          }
        </ul>
    </div>
  )
}