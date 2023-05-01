import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewsByMovieId } from 'services/fetchMovies';
import { ReviewsList, ReviewItem, Author, Content } from './Reviews.styled';
import Error from 'components/Error/Error';
import sad from '../../img/sad.png';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getReviewsByMovieId(movieId).then(setReviews);
  }, [movieId]);

  console.log(reviews);

  if (reviews.length > 0) {
    return (
      <ReviewsList>
        {' '}
        {reviews.map(({ author, content, id }) => {
          return (
            <ReviewItem key={id}>
              <Author>{author}</Author>
              <Content>{content}</Content>
            </ReviewItem>
          );
        })}
      </ReviewsList>
    );
  } else {
    return <Error message="Sorry, but there are no reviews yet" img={sad} />;
  }
};

export default Reviews;
