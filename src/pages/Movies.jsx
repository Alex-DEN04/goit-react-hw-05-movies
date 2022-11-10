import { useParams } from 'react-router-dom';

export const MovieDetails = () => {
  const { productId } = useParams();
  return <div>Now showing product with id - {productId}</div>;
};

export const Movies = () => {
  return (
    <section>
      <div>
        <input type="text" />
        <button type="submit">Search</button>
      </div>
    </section>
  );
};
