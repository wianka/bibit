import axios from 'axios';

const useGetMoviesList = async (params?: any) => {
  const resourceUrl = 'http://www.omdbapi.com/?apikey=faf7e5bb';

  try {
    const result = await axios.get(resourceUrl, { params });
    return result;

  } catch (error) {
    console.warn('error when get data movies', error);
  }
}

export default useGetMoviesList;
