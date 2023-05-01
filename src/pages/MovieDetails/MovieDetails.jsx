import { useEffect, useState, Suspense } from 'react';
import { useLocation, useParams, Outlet } from 'react-router-dom';
import { getMovieById } from 'services/fetchMovies';
import MovieCard from 'components/MovieCard/MovieCard';
import Loader from 'components/Loader/Loader';
import {
  Arrow,
  GoBack,
  GoBackText,
  Container,
  CastRevLink,
  MoreContainer,
} from './MovieDetails.styled';
const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLink = location.state?.from ?? '/';
  useEffect(() => {
    getMovieById(movieId).then(setMovieDetails);
  }, [movieId]);

  if (!movieDetails) return null;

  return (
    <Container>
      <MovieCard movie={movieDetails} />
      <div>
        <GoBack to={backLink}>
          <Arrow />
          <GoBackText>Go Back</GoBackText>
        </GoBack>
        <MoreContainer>
          <CastRevLink to={'cast'} state={{ from: backLink }}>
            Cast
          </CastRevLink>
          <CastRevLink to={'reviews'} state={{ from: backLink }}>
            Reviews
          </CastRevLink>
        </MoreContainer>
      </div>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default MovieDetails;
