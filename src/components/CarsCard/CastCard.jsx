const CastCard = ({ role, name, profile }) => {
  const photo = `https://image.tmdb.org/t/p/w500/${profile}`;
  return (
    <li>
      <img src={photo} alt={name} />
      <p>{name}</p>
      <p>Character: {role}</p>
    </li>
  );
};

export default CastCard;
