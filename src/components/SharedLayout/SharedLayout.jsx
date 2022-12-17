import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Loader } from 'components/Loader/Loader';
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
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
