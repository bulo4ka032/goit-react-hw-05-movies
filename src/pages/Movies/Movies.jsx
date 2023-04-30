import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovieByQuery } from 'services/fetchMovies';
import MoviesList from 'components/MoviesList/MoviesList';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get('query') ?? '';

    getMovieByQuery(query).then(setMovies);
  }, [searchParams]);

  const handleChange = evt => {
    setQuery(evt.target.value);
  };
  const handleSubmit = evt => {
    evt.preventDefault();
    setSearchParams(query !== '' ? { query } : {});
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Search Film</p>
          <input type="text" onChange={handleChange} />
        </label>
        <button type="submit">Search</button>
      </form>
      <MoviesList movies={movies} />
    </div>
  );
};

export default Movies;
