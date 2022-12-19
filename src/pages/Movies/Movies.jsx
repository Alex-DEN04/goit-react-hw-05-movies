import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { searchMovie } from 'api/api';
import { Loader } from 'components/Loader/Loader';
import { SearchForm } from '../../components/Form/Form';
import { MoviesList } from 'components/MoviesList/MoviesList';

const Movies = props => {
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const handleSubmit = ({ input }) => {
    const value = input.trim();
    setSearchParams(value !== '' ? { query: value } : {});
  };

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);
        const { data } = await searchMovie(query);
        if (data.results.length === 0 && query.trim() === '') {
          return;
        }
        setMovies(data.results);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };
    if (query) {
      fetchMovie();
    }
    return () => {
      setMovies(null);
      setError(null);
    };
  }, [query]);

  return (
    <>
      <SearchForm onSubmit={handleSubmit} />
      {error && <div>Sorry, no movies were found with the name {query}.</div>}
      {movies && <MoviesList items={movies} />}
      {loading && <Loader />}
    </>
  );
};
export default Movies;
