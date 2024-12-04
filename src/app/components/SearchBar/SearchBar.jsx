import { useState } from 'react';
import { Search, X } from 'lucide-react';
import './SearchBar.css';

export default function SearchBar({ onSearch, hasMovies }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() !== '') {
      onSearch(query);
    }

    sessionStorage.removeItem('movies');
  };

  const handleClear = () => {
    setQuery('');
    onSearch('');
    sessionStorage.removeItem('movies');
  };

  return (
    <>
      <form className="search-bar" onSubmit={handleSubmit}>
        <input
          type="text"
          className="search-bar-input"
          placeholder="Search movies.."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {hasMovies && (
          <button
            type="button"
            className="delete-button"
            onClick={handleClear}
            aria-label="Clear search"
          >
            <X size={20} strokeWidth={2.75} />
          </button>
        )}
        <button type="submit" className="search-bar-button">
          <Search size={20} />
        </button>
      </form>
    </>
  );
}
