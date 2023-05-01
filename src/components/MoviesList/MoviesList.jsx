import { useLocation } from 'react-router-dom';
import {
  MoviesSList,
  MovieItem,
  MovieLink,
  MoviePoster,
  MoviesTitle,
} from './MoviesList.styled';
import FileNotFound from '../../img/FileNotFound.jpg';
import PropTypes from 'prop-types';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  const imgBaseUrl = 'https://image.tmdb.org/t/p/w500/';
  return (
    <MoviesSList>
      {movies.map(({ id, poster_path, title, overview, original_title }) => (
        <MovieItem key={id}>
          <MovieLink to={`/movies/${id}`} state={{ from: location }}>
            <MoviePoster
              src={!poster_path ? FileNotFound : `${imgBaseUrl}${poster_path}`}
              alt={overview}
            />
            <MoviesTitle>{title ?? original_title}</MoviesTitle>
          </MovieLink>
        </MovieItem>
      ))}
    </MoviesSList>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      poster_path: PropTypes.string,
      title: PropTypes.string,
      overview: PropTypes.string,
      original_title: PropTypes.string,
    })
  ).isRequired,
};

export default MoviesList;
