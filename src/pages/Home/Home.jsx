import { useEffect, useState } from 'react';
import { getTrandibgMovies } from 'services/fetchMovies';
import { Title } from './Home.styled';
import MoviesList from 'components/MoviesList/MoviesList';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrandibgMovies().then(setMovies);
  }, []);

  return (
    <div>
      <Title>Trending to week</Title>
      <MoviesList movies={movies} />
    </div>
  );
};

export default Home;
