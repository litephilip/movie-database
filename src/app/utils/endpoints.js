const OMDB_API_KEY = 'c93375d';

export async function searchMovies(query) {
  const response = await fetch(
    `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${query}`
  );

  const data = await response.json();
  
  return data;
}