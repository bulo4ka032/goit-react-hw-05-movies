import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavigBar = styled.ul`
  display: flex;
  list-style: none;
  gap: 100px;
`;

export const NavItem = styled(NavLink)`
  text-decoration: none;
  border: none;
  color: white;
  font-size: 25px;
  font-weight: 300;
  letter-spacing: 0.08em;

  &.active {
    font-weight: 450;
  }
`;
