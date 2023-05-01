import {
  CastItem,
  CastPhoto,
  CastName,
  CastCharacter,
} from './CastCard.styled';
import NullPhoto from '../../img/notfound.png';
const CastCard = ({ role, name, profile }) => {
  const photo = `https://image.tmdb.org/t/p/w500/${profile}`;
  return (
    <CastItem>
      <CastPhoto
        src={profile ? photo : NullPhoto}
        alt={name}
        width="250"
        height="380"
      />
      <CastName>{name}</CastName>
      <CastCharacter>Character: {role}</CastCharacter>
    </CastItem>
  );
};

export default CastCard;
