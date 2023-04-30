const MovieCard = ({ movie }) => {
  const { poster_path, title, release_date, overview, genres, vote_average } =
    movie;
  const poster = `https://image.tmdb.org/t/p/w500/${poster_path}`;
  const year = release_date.slice(0, 4);
  const scores = `${vote_average.toFixed(1)} / 10`;
  return (
    <div>
      <img src={poster} alt="" width="280" />
      <div>
        <h1>
          {title} ({year})
        </h1>
        <p>
          User score: <span>{scores}</span>
        </p>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h3>Genres</h3>
        <ul>
          {genres.map(({ name, id }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MovieCard;
