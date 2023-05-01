import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCreditsByMovieId } from 'services/fetchMovies';
import { CastList } from './Cast.styled';
import CastCard from 'components/CastCard/CastCard';
import Error from 'components/Error/Error';
import sad from '../../img/sad.png';
// import NotFound from '../../img/notfound.png';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getCreditsByMovieId(movieId).then(setCast);
  }, [movieId]);
  if (cast.length === 0) {
    return (
      <Error message="Sorry, but we don't know about cast yet" img={sad} />
    );
  } else {
    return (
      <CastList>
        {cast.map(({ profile_path, name, character, id }) => (
          <CastCard
            key={id}
            profile={profile_path}
            name={name}
            role={character}
          />
        ))}
      </CastList>
    );
  }
};

export default Cast;
