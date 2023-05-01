import { ErrorContainer, ErrorImg, ErrorMessage } from './Error.styled';

const Error = ({ message, img }) => {
  return (
    <ErrorContainer>
      <ErrorImg src={img} alt="error" />
      <ErrorMessage>{message}</ErrorMessage>
    </ErrorContainer>
  );
};

export default Error;
