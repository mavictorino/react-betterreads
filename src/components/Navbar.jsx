import React from 'react';
import '../App.css';

const Navbar = ({ searchQuery, setSearchQuery }) => {
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    
    console.log("Searching for:", searchQuery);
  };

  return (
    <nav>
      <h1>BetterReads</h1>
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
    </nav>
  );
};

export default Navbar;