import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovieByQuery } from 'services/fetchMovies';
import { Container, Form, Title, Submit, Input } from './Movie.styled';
import { BsSearchHeart } from 'react-icons/bs';
import MoviesList from 'components/MoviesList/MoviesList';
import sad from '../../img/sad.png';
import Error from 'components/Error/Error';
import Start from 'components/Start/Start';
const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const [status, setStatus] = useState('start');
  useEffect(() => {
    const query = searchParams.get('query') ?? '';

    getMovieByQuery(query).then(setMovies);

    if (movies.length > 0) {
      setStatus('resolved');
    }
  }, [searchParams, movies]);

  const handleChange = evt => {
    setQuery(evt.target.value);
    setStatus('start');
  };
  const handleSubmit = evt => {
    evt.preventDefault();
    if (movies.length === 0 && query) {
      setStatus('nothing');
    }
    setSearchParams(query !== '' ? { query } : {});
  };
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <label>
          <Title>Search Film</Title>
          <Input
            type="text"
            onChange={handleChange}
            placeholder="Search search search"
            required
          />
        </label>
        <Submit type="submit">
          <BsSearchHeart />
        </Submit>
      </Form>
      {status === 'start' ? (
        <Start />
      ) : status === 'resolved' ? (
        <MoviesList movies={movies} />
      ) : !query ? (
        <Start />
      ) : (
        <Error message={`No results for ${query}`} img={sad} />
      )}
    </Container>
  );
};

export default Movies;
