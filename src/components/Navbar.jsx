import React, { useState } from 'react';
import '../App.css';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // adicionar a lógica para lidar com a pesquisa, como redirecionar ou filtrar
    console.log("Searching for:", searchQuery);
  };

  return (
    <nav>
      <h1>Navbar</h1>
      <form onSubmit={handleSearchSubmit} className="search-form">
        <input 
          type="text" 
          placeholder="Search..." 
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