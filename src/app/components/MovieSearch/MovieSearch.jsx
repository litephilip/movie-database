'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { searchMovies } from '../../utils/endpoints';
import SearchBar from '../SearchBar/SearchBar';
import './MovieSearch.css';

export default function MovieSearch() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const savedMovies = sessionStorage.getItem('movies');
    const savedQuery = sessionStorage.getItem('query');

    if (savedMovies && savedQuery) {
      setMovies(JSON.parse(savedMovies));
      setQuery(savedQuery);
    }
  }, []);

  const handleSearch = async (query) => {
    if (!query) {
      setMovies([]);
      setError(null);
      sessionStorage.removeItem('movies');
      sessionStorage.removeItem('query');
      return;
    }

    try {
      const data = await searchMovies(query);

      if (data?.length) {
        const filteredMovies = data.map((movie) => ({
          imdbID: movie.imdbID,
          imdbRating: movie.imdbRating,
          Title: movie.Title,
          Poster: movie.Poster,
          Type: movie.Type,
          Year: movie.Year,
        }));

        console.log('data', filteredMovies);
        setMovies(filteredMovies);
        setError(null);

        sessionStorage.setItem('movies', JSON.stringify(filteredMovies));
        sessionStorage.setItem('query', query);
      }
    } catch (err) {
      console.error(err);
      setError('Whoopsa, We could not find the movie you are looking for');
    }
  };

  return (
    <div className="movie-search">
      <h1>Search Movies</h1>

      <SearchBar onSearch={handleSearch} hasMovies={movies?.length > 0} />
      {error && !movies?.length && <p className="error">{error}</p>}

      <div className="movie-search-result">
        {movies.map((movie) => (
          <Link href={`/${movie.imdbID}`} key={movie.imdbID}>
            <div className="movie-search-card">
              <img
                src={movie.Poster !== 'N/A' ? movie.Poster : '/placeholder.jpg'}
                alt={movie.Title}
                className="movie-search-poster"
              />
              <h3 className="movie-search-title">{movie.Title}</h3>
              <p className="movie-search-details">
                <span className="movie-search-year"> {movie.Year} </span>
                <span className="movie-search-imdb-rating">
                  {' '}
                  IMDB: {movie.imdbRating}
                </span>
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
