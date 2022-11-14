import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const trendingPeriod = '/trending/movie/day';

export const getMovies = async () => {
  const response = await axios.get(`${BASE_URL}${trendingPeriod}`, {
    params: {
      // media_type: 'all',
      // time_window: 'day',

      api_key: 'f895f2516a047e2a437ac29e4da65e26',
    },
  });
  return response.data.results;
};

export const getMovieById = async id => {
  const response = await axios.get(`${BASE_URL}/movie/${id}`, {
    params: {
      api_key: 'f895f2516a047e2a437ac29e4da65e26',
    },
  });
  return response;
};

export const getMovieCredits = async id => {
  const response = await axios.get(`${BASE_URL}/movie/${id}/credits`, {
    params: {
      api_key: 'f895f2516a047e2a437ac29e4da65e26',
    },
  });
  return response;
};

export const getMovieReviews = async id => {
  const response = await axios.get(`${BASE_URL}/movie/${id}/reviews`, {
    params: {
      api_key: 'f895f2516a047e2a437ac29e4da65e26',
    },
  });
  return response;
};