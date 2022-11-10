import { Routes, Route } from 'react-router-dom';
import { Home } from 'pages/Home';
import { Movies } from 'pages/Movies';
import { MovieDetails } from 'pages/Movies';

import { Link, Menu } from './AppStyled';

export const App = () => {
  return (
    <div>
      <Menu>
        <Link to="/" end>Home</Link>
        <Link to="/muvies" >Movies</Link>
      </Menu>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/muvies" element={<Movies />} />
        <Route path="/muvies/:movieId" element={<MovieDetails />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};
