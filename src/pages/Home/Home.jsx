import { useState, useEffect } from 'react';
import { getMovies } from 'api/api';
import {Loader} from 'components/Loader/Loader';
import {MoviesList} from 'components/MoviesList/MoviesList';

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const trendingMovies = async () => {
      try {
        setLoading(true);
        const response = await getMovies();
        setMovies(response);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };
    trendingMovies();
    
    return () => {
      setMovies(null);
      setError(null);
    };
  }, []);

  return (
    <>
      {error && <div>Something went wrong, please try again</div>}
      <h1>Trending today</h1>
      {movies && <MoviesList items={movies} />}
      {loading && <Loader />}
    </>
  );
};
