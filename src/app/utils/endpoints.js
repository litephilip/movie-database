const OMDB_API_KEY = 'c93375d';

export async function getMovieDetails(imdbID) {
  const response = await fetch(
    `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${imdbID}&plot=short`
  );

  const data = await response.json();
  console.log('getDETAISL', data);
  
  return data;
}

export async function searchMovies(query) {
  const response = await fetch(
    `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${query}`
  );

  const searchData = await response.json();

  if (searchData.Response === 'True') {
    const moviesWithDetails = await Promise.all(
      searchData.Search.map(async (movie) => {

        const details = await getMovieDetails(movie.imdbID);
        return {
          ...movie,
          ...details, 
        };
      })
    );

    return moviesWithDetails;

  } else {
    throw new Error(searchData.Error);
  }
}
