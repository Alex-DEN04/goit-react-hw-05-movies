import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { getMovieById } from 'api/api';
import { BsArrowLeft } from 'react-icons/bs';

import {Loader} from '../../components/Loader/Loader';
import { Poster, Button, Genres, Genre } from './MovieDetalisStyled';
import { Box } from 'components/Box';

export const MovieDetails = () => {
  const [state, setState] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  const navigate = useNavigate();
  const posterUrl = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);
        const { data } = await getMovieById(movieId);
        setState(data);
        setError(null);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };
    fetchMovie();
  }, [movieId]);

  const goBack = () => navigate(-1);
  return (
    <>
      <Button onClick={goBack}>
        <BsArrowLeft />
        Go back
      </Button>
      {error && <div>Now showing product with id - {movieId}</div>}

      {state && (
        <>
          <Box display="flex" boxShadow="0 4px 2px -2px gray" pb={3}>
            <Poster src={`${posterUrl}${state.poster_path}`} alt="" />
            <Box ml={5}>
              <h2>
                {state.title} ({state.release_date.slice(0, 4)})
              </h2>
              <p>
                User Score:{' '}
                {Math.round((Number(state.vote_average) * 100) / 10)} %
              </p>

              <h3>Overviev:</h3>
              <p>{state.overview}</p>
              <Genres>Genres:</Genres>
              <Box m={0} p={0} display="flex" as="ul">
                {state.genres.map(genre => (
                  <Genre key={genre.id}>{genre.name}</Genre>
                ))}
              </Box>
            </Box>
          </Box>
          <div>
            <p>Additional information:</p>
            <Box boxShadow="0 4px 2px -2px gray" pb={3} as="ul">
              <li>
                <NavLink to={'cast'}>Cast</NavLink>
              </li>
              <li>
                <NavLink to={'reviews'}>Reviews</NavLink>
              </li>
            </Box>
            <Outlet />
          </div>
        </>
      )}
      {loading && <Loader />}
    </>
  );
};
