import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'api/api';

export const Reviews = () => {
    const [state, setState] = useState(null);
    const [error, setError] = useState(null)
  const { movieId } = useParams();
  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        const {data} = await getMovieReviews(movieId);
        setState(data);
        console.log(data);
      } catch (e) {
        setError(e)
      }
        
    };
    fetchMovieReviews();
  }, [movieId]);

  return (
      <>
        {state && (
        <ul>
            {state.results.map(item => (
            <li key={item.id}>
              <p>Author: {item.author}</p>
              <p>{item.content}</p>
            </li>
          ))}
        </ul>
      )}
      ;
    </>
  );
};
