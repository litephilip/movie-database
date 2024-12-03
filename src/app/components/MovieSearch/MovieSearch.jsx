'use client';
import Link from 'next/link';
import { useState, useMemo } from 'react';
import { searchMovies } from '../../utils/Endpoints';
import SearchBar from '../SearchBar/SearchBar';
import './MovieSearch.css';

export default function MovieSearch() {
  const [movies, setMovies] = useState(() => {
    const savedMovies = sessionStorage.getItem('movies');
    return savedMovies ? JSON.parse(savedMovies) : [];
  });
  const [error, setError] = useState(null);

  const handleSearch = async (query) => {
    try {
      if (!query) {
        setMovies([]);
        setError(null);
        return;
      }

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
      }
    } catch (err) {
      console.error(err);
      setError('Whoopsa, You need to type a movie title');
    }
  };

  console.log('movies', movies);

  return (
    <div className="movie-search">
      <h1>Search Movies</h1>

      <SearchBar onSearch={handleSearch} hasMovies={movies?.length > 0} />
      {error && <p className="error">{error}</p>}

      <div className="movie-result">
        {useMemo(() => {
          {
            movies.map((movie) => (
              <Link href={`/${movie.imdbID}`} key={movie.imdbID}>
                <div className="movie-card">
                  <img
                    src={
                      movie.Poster !== 'N/A' ? movie.Poster : '/placeholder.jpg'
                    }
                    alt={movie.Title}
                    className="movie-poster"
                  />
                  <h3 className="movie-title">{movie.Title}</h3>
                  <p className="movie-details">
                    <span className="year"> {movie.Year} </span>
                    <span className="imdb-rating">
                      {' '}
                      IMDB: {movie.imdbRating}
                    </span>
                  </p>
                </div>
              </Link>
            ));
          }
        }, [movies])}
      </div>
    </div>
  );
}
