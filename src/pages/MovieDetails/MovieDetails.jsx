import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { getMovieById } from 'api/api';

export const MovieDetails = () => {
  const [state, setState] = useState(null);
  // const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const { data } = await getMovieById(movieId);
        console.log(data);
        setState(data);
        setError(null);
      } catch (e) {
        setError(e);
      } finally {
        // setLoader(false);
        // console.log(state);
        // setState(null)
      }
    };
    fetchMovie();
  }, [movieId]);

  const goBack = () => navigate(-1);
  return (
    <>
      <button onClick={goBack}>On back</button>
      {error && <div>Now showing product with id - {movieId}</div>}

      {state && (
        <>
          <div>
            <div>{state.poster_path}</div>
            <h1>
              {state.title} ({state.release_date.slice(0, 4)})
            </h1>
            <p>
              User Score: {Math.round((Number(state.vote_average) * 100) / 10)}{' '}
              %
            </p>
            <p>
              Overviev: <br />
              {state.overview}
            </p>
            <ul>
              Genres:
              {state.genres.map(genre => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
          </div>
          <div>
            <p>Additional information:</p>
            <ul>
              <li>
                <NavLink to={'cast'}>Cast</NavLink>
              </li>
              <li>
                <NavLink to={'reviews'}>Reviews</NavLink>
              </li>
            </ul>
            <Outlet />
          </div>
        </>
      )}
    </>
  );
};
