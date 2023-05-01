import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovieByQuery } from 'services/fetchMovies';
import { Container, Form, Title, Submit, Input } from './Movie.styled';
import { BsSearchHeart } from 'react-icons/bs';
import MoviesList from 'components/MoviesList/MoviesList';
import sad from '../../img/sad.png';
import Error from 'components/Error/Error';
const Movies = () => {
  const [movies, setMovies] = useState(['hello']);
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
      {movies.length === 0 ? (
        <Error message="Try too search" img={sad} />
      ) : (
        <MoviesList movies={movies} />
      )}
    </Container>
  );
};

export default Movies;
