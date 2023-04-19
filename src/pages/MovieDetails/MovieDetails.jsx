import {
  useParams,
  useNavigate,
  NavLink,
  Outlet,
  useLocation,
} from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import { BsArrowLeft } from 'react-icons/bs';

import { getMovieById } from 'api/api';
import { Card } from '../../components/Card/Card';
import { Loader } from '../../components/Loader/Loader';
import { Button } from './MovieDetalisStyled';
import { Box } from 'components/Box';

const MovieDetails = () => {
  const [state, setState] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);
        const { data } = await getMovieById(movieId);
        setState(data);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };
    fetchMovie();
    return () => {
      setState(null);
      setError(null);
    };
  }, [movieId]);

  const goBack = () => navigate(location.state.from);
  return (
    <>
      <Button onClick={goBack}>
        <BsArrowLeft />
        Go back
      </Button>
      {error && <div>Now showing product with id - {movieId}</div>}

      {state && (
        <>
          <Card movie={state} />
          <div>
            <p>Additional information:</p>
            <Box boxShadow="0 4px 2px -2px gray" pb={3} as="ul">
              <li>
                <NavLink to={'cast'} state={{ from: location.state.from }}>
                  Cast
                </NavLink>
              </li>
              <li>
                <NavLink to={'reviews'} state={{ from: location.state.from }}>
                  Reviews
                </NavLink>
              </li>
            </Box>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </div>
        </>
      )}
      {loading && <Loader />}
    </>
  );
};
export default MovieDetails;
