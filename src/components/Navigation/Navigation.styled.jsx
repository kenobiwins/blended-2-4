import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavItem = styled(NavLink)`
  text-decoration: none;
  font-size: 32px;

  &.active {
    color: green;
  }

  &:not(.active):hover,
  &:not(.active):focus {
    color: blue;
  }
`;
