import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'api/api';

export const Cast = () => {
  const [state, setState] = useState(null);
  const { movieId } = useParams();
  useEffect(() => {
    const fetchMovieCredits = async () => {
      try {
        const { data } = await getMovieCredits(movieId);
        setState(data);
        console.log(data);
      } catch (e) {}
    };
    fetchMovieCredits();
  }, [movieId]);

  return (
    <>
      {state && (
        <ul>
          {state.cast.map(item => (
            <li key={item.id}>
              <img src={item.profile_path} alt="" />
              <p>{item.name}</p>
              <p>Character: {item.character}</p>
            </li>
          ))}
        </ul>
      )}
      ;
    </>
  );
};
