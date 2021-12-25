import { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { fetchReview } from '../../../../mowiesApi';


export default function Cast(){
  const [reviews, setReviews] = useState('');

  const {movieId} = useParams();

  useEffect(() => {
    fetchReview(movieId)
      .then((data)=>{setReviews(data.results)})
  }, [movieId ])

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