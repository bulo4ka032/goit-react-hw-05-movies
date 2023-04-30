import { useEffect, useState } from 'react';
import { getTrandibgMovies } from 'services/fetchMovies';

import MoviesList from 'components/MoviesList/MoviesList';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrandibgMovies().then(setMovies);
  }, []);

  return (
    <div>
      <MoviesList movies={movies} />
    </div>
  );
};

export default Home;
