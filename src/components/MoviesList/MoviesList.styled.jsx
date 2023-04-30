import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const MoviesSList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding: 12px;
  margin: 0 auto;
  justify-content: center;
  list-style: none;
`;

export const MovieItem = styled.li`
  background-color: white;
  padding: 10px 10px 0 10px;
`;

export const MovieLink = styled(Link)`
  text-decoration: none;
`;

export const MoviePoster = styled.img`
  width: 240px;
`;

export const MoviesTitle = styled.p`
  width: 200px;
  margin: 0;
  padding: 6px;
  font-weight: 500;
  font-size: 18px;
  color: black;
`;
