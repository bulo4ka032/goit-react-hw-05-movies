import { useEffect, useState, Suspense } from 'react';
import { useLocation, useParams, Link, Outlet } from 'react-router-dom';
import { getMovieById } from 'services/fetchMovies';
import MovieCard from 'components/MovieCard/MovieCard';

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
    <div>
      <Link to={backLink}>Go Back</Link>
      <MovieCard movie={movieDetails} />
      <div>
        <Link to={'cast'} state={{ from: backLink }}>
          Cast
        </Link>
        <Link to={'reviews'} state={{ from: backLink }}>
          Reviews
        </Link>
      </div>
      <Suspense fallback={<div>LOADING SUBPAGE...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
