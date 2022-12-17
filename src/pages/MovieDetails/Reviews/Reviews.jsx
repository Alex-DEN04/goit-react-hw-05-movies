import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'api/api';
import { Loader } from 'components/Loader/Loader';

const Reviews = () => {
  const [state, setState] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        const { data } = await getMovieReviews(movieId);
        setState(data);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };
    fetchMovieReviews();

    return () => {
      setState(null);
      setError(null);
    };
  }, [movieId]);

  return (
    <>
      {loading && <Loader />}
      {state &&
        ((state.results.length < 1 && (
          <p>We don't have any reviews for this film</p>
        )) || (
          <ul>
            {state.results.map(item => (
              <li key={item.id}>
                <h4>Author: {item.author}</h4>
                <p>{item.content}</p>
              </li>
            ))}
          </ul>
        ))}
      {error && <div> Something went wrong, please try again </div>}
    </>
  );
};
export default Reviews;