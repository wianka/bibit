export const getMovies = (fetcher: (args: URL | string) => void) => {
  const resourceUrl = 'http://www.omdbapi.com/?apikey=faf7e5bb';
  return fetcher(resourceUrl);
}