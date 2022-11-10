import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/trending/all/day';
async function getMuvies() {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        api_key: 'f895f2516a047e2a437ac29e4da65e26',
      },
    });
    // console.log(response.data.results);
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
}

// console.log(response);

export const Home = () => {
  const [muvies, setMuvies] = useState([]);
  // console.log(data);

  useEffect(() => {
    // const nextImageName = imageName.trim();
    try {
      // setLoading(true);
      // if (imageName === '') {
      //   setLoading(false);
      //   return;
      // }
      getMuvies().then(response => setMuvies(response));
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
            <NavLink end>{item.original_title}</NavLink>
          </li>
        ))}

        {/* <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus nihil animi rem, autem modi beatae assumenda. Dolorum sapiente veniam, excepturi voluptates recusandae quos sunt unde deleniti nulla. Qui, nesciunt quis!</li>
        <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed dignissimos veniam beatae non officia maxime neque nihil dolorem cumque iste quia culpa magni sit similique, a praesentium. Molestias, dolorum eveniet!</li> */}
      </ul>
    </main>
  );
};
