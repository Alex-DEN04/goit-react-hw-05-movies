import React from 'react';
import { Outlet } from 'react-router-dom';

import { Link, Menu, Container } from './SharedLayoutStyled';

export const SharedLayout = () => {
  return (
    <Container>
      <Menu>
        <Link to="/" end>
          Home
        </Link>
        <Link to="/muvies">Movies</Link>
      </Menu>
      <Outlet />
    </Container>
  );
}
