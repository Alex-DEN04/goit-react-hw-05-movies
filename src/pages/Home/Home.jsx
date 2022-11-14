import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { getMovies } from 'api/api';

// console.log(response);

export const Home = () => {
  const [muvies, setMovies] = useState([]);
  // console.log(data);

  useEffect(() => {
    // const nextImageName = imageName.trim();
    try {
      // setLoading(true);
      // if (imageName === '') {
      //   setLoading(false);
      //   return;
      // }
      getMovies().then(response => setMovies(response));
      // setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      <ul>
        {muvies.map(item => (
          <li key={item.id}>
            <NavLink to={`/muvies/${item.id}`} end>
              {item.title}
            </NavLink>
          </li>
        ))}

        {/* <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus nihil animi rem, autem modi beatae assumenda. Dolorum sapiente veniam, excepturi voluptates recusandae quos sunt unde deleniti nulla. Qui, nesciunt quis!</li>
        <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed dignissimos veniam beatae non officia maxime neque nihil dolorem cumque iste quia culpa magni sit similique, a praesentium. Molestias, dolorum eveniet!</li> */}
      </ul>
    </main>
  );
};
