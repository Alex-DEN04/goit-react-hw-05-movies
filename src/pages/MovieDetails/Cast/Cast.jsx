import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'api/api';

export const Cast = () => {
  const [state, setState] = useState(null);
  const { movieId } = useParams();
  // const url = `https://api.themoviedb.org/3movie/${movieId}/credits`;
  useEffect(() => {
    const fetchMovieCast = async () => {
      try {
        const { data } = await getMovieCast(movieId);
        setState(data);
        console.log(data);
      } catch (e) {}
    };
    fetchMovieCast();
  }, [movieId]);

  return (
    <>
      {state && (
        <ul>
          {state.cast.map(item => (
            <li key={item.id}>
              <img src={item.profile_path} alt="" />
              <p>{item.name}</p>
            </li>
          ))}
        </ul>
      )}
      ;
    </>
  );
};
