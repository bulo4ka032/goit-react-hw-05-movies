import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewsByMovieId } from 'services/fetchMovies';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getReviewsByMovieId(movieId).then(setReviews);
  }, [movieId]);

  console.log(reviews);

  if (reviews.length > 0) {
    return (
      <ul>
        {' '}
        {reviews.map(({ author, content, id }) => {
          return (
            <li key={id}>
              <h4>{author}</h4>
              <p>{content}</p>
            </li>
          );
        })}
      </ul>
    );
  } else {
    return <p>There is no reviews yet</p>;
  }
};

export default Reviews;
