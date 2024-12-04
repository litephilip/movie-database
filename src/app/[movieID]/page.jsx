import { getMovieDetails } from '../utils/endpoints';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import './MovieDetails.css';

export default async function MovieDetails({ params }) {
  console.log('params', params);

  const { movieID } = params;

  const movie = await getMovieDetails(movieID);

  if (!movie || movie.Response === 'False') {
    return <p>Movie not found</p>;
  }

  console.log('movie', movie);

  return (
    <div className="movie-details">
      <div className="movie-header">
        <Link href="/" className="back-button">
          <ArrowLeft size={32} strokeWidth={2.5} />
          <span>Back to Home</span>
        </Link>
        <img
          className="movie-poster"
          src={movie.Poster !== 'N/A' ? movie.Poster : '/placeholder.jpg'}
          alt={movie.Title}
        />
        <div className="movie-info">
          <h1 className="movie-title">{movie.Title}</h1>
          <div className="movie-meta">
            <span className="movie-rating">{movie.Rated}</span>
            <span>{movie.Runtime}</span>
            <span>{movie.Year}</span>
            <span className="movie-imdb">IMDB {movie.imdbRating}</span>
          </div>
          <p className="movie-plot">{movie.Plot}</p>
          <div className="movie-extra">
            <p>
              <strong>Genre:</strong> {movie.Genre}
            </p>
            <p>
              <strong>Director:</strong> {movie.Director}
            </p>
            <p>
              <strong>Actor:</strong> {movie.Actors}
            </p>
            <p>
              <strong>Subtitles:</strong> {movie.Language}
            </p>
            <p>
              <strong>Country:</strong> {movie.Country}
            </p>
            <p>
              <strong>Language:</strong> {movie.Language}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
