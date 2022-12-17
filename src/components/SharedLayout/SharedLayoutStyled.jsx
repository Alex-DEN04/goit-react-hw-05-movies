import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  color: black;
  text-decoration: none;

  &.active {
    color: red;
  }
`;

export const Menu = styled.nav`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 20px;
  gap: 15px;
  margin-bottom: 15px;
  box-shadow: 0 4px 2px -2px gray;
  font-size: 20px;
  font-weight: bold;
`;

export const Container = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
`;
