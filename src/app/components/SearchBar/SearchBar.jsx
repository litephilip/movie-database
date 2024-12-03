import { useState } from 'react';
import { Search } from 'lucide-react';
import './SearchBar.css';

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() !== '') {
      onSearch(query);
    }
    
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
        <button type="submit" className="search-bar-button">
          <Search size={20} />
        </button>
      </form>
    </>
  );
}
