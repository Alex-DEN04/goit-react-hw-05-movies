import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieCredits } from 'api/api';
import { ActorImg, List } from './CastStyled';
import { Loader } from 'components/Loader/Loader';

const Cast = () => {
  const [state, setState] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();
  const avatar =
    'https://kartinkin.net/pics/uploads/posts/2022-09/1662642152_1-kartinkin-net-p-risunok-na-avatarku-dlya-muzhchin-instagra-1.jpg';
  const pathPosterUrl = 'https://image.tmdb.org/t/p/w300';

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
      {loading && <Loader />}
      {state && (
        <List>
          {state.cast.map(({ cast_id, profile_path, name, character }) => (
            <li key={cast_id}>
              {profile_path ? (
                <ActorImg
                  src={`${pathPosterUrl}${profile_path}`}
                  alt="avatar"
                />
              ) : (
                <ActorImg src={avatar} alt="avatar" />
              )}
              <p>{name}</p>
              <p>Character: {character}</p>
            </li>
          ))}
        </List>
      )}
      {error && <div> Something went wrong, please try again </div>}
    </>
  );
};
export default Cast;
