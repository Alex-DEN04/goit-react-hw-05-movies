import { NavLink } from 'react-router-dom';

export const MoviesList = ({ items }) => {
  return (
    <main>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <NavLink to={`/muvies/${item.id}`}>{item.title}</NavLink>
          </li>
        ))}
      </ul>
    </main>
  );
};
