import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from '../SharedLayout/SharedLayout';
// const SharedLayout = lazy(() => '../SharedLayout/SharedLayout');

// const MyComponent = lazy(() => import('./MyComponent'))
const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('pages/MovieDetails/Cast/Cast'));
const Reviews = lazy(() => import('pages/MovieDetails/Reviews/Reviews'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="muvies" element={<Movies />} />
          <Route path="muvies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />}></Route>
            <Route path="reviews" element={<Reviews />}></Route>
          </Route>
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
};
