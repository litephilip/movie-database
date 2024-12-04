import { getMovieDetails } from '../utils/endpoints';
import MovieDetails from '../components/MovieDetails/MovieDetails';

export default async function MovieDetailsPage({ params }) {
  const { movieID } = params;

  const movie = await getMovieDetails(movieID);

  return <MovieDetails movie={movie} />;
}

