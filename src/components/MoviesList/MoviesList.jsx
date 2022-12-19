import { NavLink, useLocation } from 'react-router-dom';

export const MoviesList = ({ items }) => {
  const location = useLocation();
  return (
    <main>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <NavLink to={`/muvies/${item.id}`} state={{ from: location }}>
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </main>
  );
};
