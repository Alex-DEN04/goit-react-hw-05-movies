import { Box } from 'components/Box';
import PropTypes from 'prop-types';

import { Poster, Genres, Genre, Overviev, Text } from './CardStyled';
const posterUrl = 'https://image.tmdb.org/t/p/w500';
const poster = 'https://darth-shop.ru/pictures/product/big/7759_big.jpg';

export const Card = ({
  movie: {
    poster_path,
    title,
    original_title,
    release_date,
    vote_average,
    overview,
    genres,
  },
}) => {
  return (
    <>
      <Box display="flex" boxShadow="0 4px 2px -2px gray" pb={3}>
        {poster_path ? (
          <Poster src={`${posterUrl}${poster_path}`} alt="Poster" />
        ) : (
          <Poster src={poster} alt="Poster" />
        )}
        <Box ml={5}>
          <h2>
            {title || original_title} ({release_date.slice(0, 4)})
          </h2>
          <p>User Score: {Math.round((Number(vote_average) * 100) / 10)} %</p>

          <Overviev>Overviev:</Overviev>
          <Text>{overview}</Text>
          <Genres>Genres:</Genres>
          <Box m={0} p={0} display="flex" as="ul">
            {genres.map(genre => (
              <Genre key={genre.id}>{genre.name}</Genre>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
};

Card.propTypes = {
  poster_path: PropTypes.string,
  title: PropTypes.string,
  original_title: PropTypes.string,
  release_date: PropTypes.string,
  vote_average: PropTypes.number,
  overview: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.object),
};
