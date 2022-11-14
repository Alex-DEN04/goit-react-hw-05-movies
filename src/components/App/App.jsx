import { Routes, Route } from 'react-router-dom';
import { Home } from 'pages/Home/Home';
import { Movies } from 'pages/Movies/Movies';
import { MovieDetails } from 'pages/MovieDetails/MovieDetails';
import { Cast } from 'pages/MovieDetails/Cast/Cast';
import { Reviews } from 'pages/MovieDetails/Reviews/Reviews';

import { Link, Menu } from './AppStyled';

export const App = () => {
  return (
    <div>
      <Menu>
        <Link to="/" end>
          Home
        </Link>
        <Link to="/muvies">Movies</Link>
      </Menu>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/muvies" element={<Movies />} />
        <Route path="/muvies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />}></Route>
          <Route path="reviews" element={<Reviews />}></Route>
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};
