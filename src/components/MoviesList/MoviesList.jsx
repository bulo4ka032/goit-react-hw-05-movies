import { useLocation } from 'react-router-dom';
import {
  MoviesSList,
  MovieItem,
  MovieLink,
  MoviePoster,
  MoviesTitle,
} from './MoviesList.styled';
const MoviesList = ({ movies }) => {
  const location = useLocation();
  const imgBaseUrl = 'https://image.tmdb.org/t/p/w500/';
  return (
    <MoviesSList>
      {movies.map(({ id, poster_path, title, overview, original_title }) => (
        <MovieItem key={id}>
          <MovieLink to={`/movies/${id}`} state={{ from: location }}>
            <MoviePoster src={`${imgBaseUrl}${poster_path}`} alt={overview} />
            <MoviesTitle>{title ?? original_title}</MoviesTitle>
          </MovieLink>
        </MovieItem>
      ))}
    </MoviesSList>
  );
};

export default MoviesList;
