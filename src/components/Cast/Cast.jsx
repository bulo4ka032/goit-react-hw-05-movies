import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCreditsByMovieId } from 'services/fetchMovies';
import CastCard from 'components/CarsCard/CastCard';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getCreditsByMovieId(movieId).then(setCast);
  }, [movieId]);
  return (
    <ul>
      {cast.map(({ profile_path, name, character, id }) => (
        <CastCard
          key={id}
          profile={profile_path}
          name={name}
          role={character}
        />
      ))}
    </ul>
  );
};

export default Cast;
