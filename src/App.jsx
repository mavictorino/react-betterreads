import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import BookSearch from './components/BookSearch';
import './App.css';
import Library from './pages/Library';
import { BrowserRouter, Route, Routes } from "react-router-dom";


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

      <Sidebar />

      <BookSearch 
        searchQuery={searchQuery} 
        setBooks={setBooks} 
        setIsLoading={setIsLoading} 
        books={books}
              
      />
      <BrowserRouter>
        <Routes>
          <Route path="/Library" element={<Library />} />



        </Routes>
      
      </BrowserRouter>
       
    </div>
  );
};

export default App;