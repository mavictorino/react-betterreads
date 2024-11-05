import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import BookSearch from './components/BookSearch';
import './App.css';
import Library from './pages/Library';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div>
      <Navbar 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery} 
      />
      <BookSearch 
        searchQuery={searchQuery} 
        setBooks={setBooks} 
        setIsLoading={setIsLoading} 
        books={books}
              
      />
      <Library /> 
    </div>
  );
};

export default App;