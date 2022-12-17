import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieCredits } from 'api/api';
import { ActorImg } from './CastStyled';
import { Loader } from 'components/Loader/Loader';

export const Cast = () => {
  const [state, setState] = useState(null);
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieCredits = async () => {
      try {
        const { data } = await getMovieCredits(movieId);
        setState(data);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };
    fetchMovieCredits();

    return () => {
      setState(null);
      setError(null);
    };
  }, [movieId]);

  return (
    <>
      {loading && <Loader/>}
      {state && (
        <ul>
          {state.cast.map(item => (
            <li key={item.id}>
              {item.profile_path && (
                <ActorImg
                  src={`https://image.tmdb.org/t/p/w300${item.profile_path}`}
                  alt=""
                />
              )}
              <p>{item.name}</p>
              <p>Character: {item.character}</p>
            </li>
          ))}
        </ul>
      )};
      {error && <div> Something went wrong, please try again </div>}
    </>
  );
};
