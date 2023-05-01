import { ErrorContainer, ErrorImg, ErrorMessage } from './Error.styled';
import PropTypes from 'prop-types';

const Error = ({ message, img }) => {
  return (
    <ErrorContainer>
      <ErrorImg src={img} alt="error" />
      <ErrorMessage>{message}</ErrorMessage>
    </ErrorContainer>
  );
};

Error.propTypes = {
  message: PropTypes.string.isRequired,
  img: PropTypes.string,
};

export default Error;
