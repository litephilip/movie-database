'use client';

import { useState } from 'react';
import { searchMovies } from '../../utils/endpoints';
import SearchBar from '../SearchBar/SearchBar';
import './MovieSearch.css';

export default function MovieSearch() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async (query) => {
    try {
      const data = await searchMovies(query);
      console.log(data);

      if (data.Response === 'True') {
        setMovies(data.Search);
        setError(null);
      } else {
        setMovies([]);
        setError(data.Error);
      }
    } catch (err) {
      setError('Something went wrong. Please try again later.');
    }
  };

  return (
    <div>
      <h1>Moviie Search</h1>
      <SearchBar onSearch={handleSearch} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div className="movie-result">
        {movies.map((movie) => (
          <div key={movie.imdbID} style={{ margin: '1rem 0' }}>
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
            <img
              src={movie.Poster !== 'N/A' ? movie.Poster : '/placeholder.jpg'}
              alt={movie.Title}
              style={{ width: '150px' }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
