import React from 'react';

const SearchForm = ({ searchQuery, setSearchQuery }) => {
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  return (
    <div className='homepage'>
      <div className='welcome'>
        <h2>Welcome to BetterReads</h2>
      </div>
      <form onSubmit={handleSearchSubmit} className="search-form">
        <input
          type="text"
          id="search"
          placeholder="Search for books..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="search-input"
        />
        <button type="submit" className="search-button">Search</button>
      </form>
    </div>
  );
};

export default SearchForm;