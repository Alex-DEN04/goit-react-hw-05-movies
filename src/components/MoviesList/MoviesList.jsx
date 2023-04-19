import { NavLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

export const MoviesList = ({ items }) => {
  const location = useLocation();
  return (
    <main>
      <ul>
        {items.map(({ id, title, original_title }) => (
          <li key={id}>
            <NavLink to={`/movies/${id}`} state={{ from: location }}>
              {title || original_title}
            </NavLink>
          </li>
        ))}
      </ul>
    </main>
  );
};

MoviesList.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  original_title: PropTypes.string,
};
