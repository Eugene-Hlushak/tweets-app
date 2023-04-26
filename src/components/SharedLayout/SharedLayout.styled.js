import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderWrapper = styled.header`
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
`;

export const HeaderContainer = styled.div`
  padding: 20px;
`;

export const Nav = styled.nav``;

export const Link = styled(NavLink)`
  display: inline-block;
  margin-right: 10px;
  width: 80px;
  padding: 10px;
  border: 2px solid black;
  border-radius: 8px;
  text-align: center;
  text-decoration: none;
  color: black;
  &.active {
    color: #5cd3a8;
    border-color: #5cd3a8;
  }
`;
