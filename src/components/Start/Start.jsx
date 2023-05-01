import { StartImg, StartText, Container } from './Start.styled';
import start from '../../img/start.png';

const Start = () => {
  return (
    <Container>
      <StartImg src={start} alt="try to search" />
      <StartText>Try to search</StartText>
    </Container>
  );
};

export default Start;
