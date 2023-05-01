import {
  Container,
  Poster,
  Title,
  Score,
  OverviewTitle,
  Overview,
  Genre,
  GenresList,
  GenresTitle,
  ScoreNum,
} from './MovieCard.styled';
import FileNotFound from '../../img/FileNotFound.jpg';
const MovieCard = ({ movie }) => {
  const { poster_path, title, release_date, overview, genres, vote_average } =
    movie;
  const poster = `https://image.tmdb.org/t/p/w500/${poster_path}`;
  const year = release_date.slice(0, 4);
  const scores = `${vote_average.toFixed(1)} / 10`;
  return (
    <Container>
      <Poster src={!poster_path ? FileNotFound : poster} alt="" width="280" />
      <div>
        <Title>
          {title} ({year})
        </Title>
        <Score>
          User score: <ScoreNum>{scores}</ScoreNum>
        </Score>
        <OverviewTitle>Overview</OverviewTitle>
        <Overview>{overview}</Overview>
        <GenresTitle>Genres</GenresTitle>
        <GenresList>
          {genres.map(({ name, id }) => (
            <Genre key={id}>{name}</Genre>
          ))}
        </GenresList>
      </div>
    </Container>
  );
};

export default MovieCard;
