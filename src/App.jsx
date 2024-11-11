import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import BookSearch from './components/BookSearch';
import './App.css';
import Library from './pages/Library';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchForm from './components/SearchForm';
import AboutPage from './pages/About';


function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <BrowserRouter>
      <Navbar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />


      <div className='app-container'>

        <Sidebar />

        <BookSearch
          searchQuery={searchQuery}
          setBooks={setBooks}
          setIsLoading={setIsLoading}
          books={books}

        />

        <Routes>
          <Route path="/" element={<SearchForm searchQuery={searchQuery} setSearchQuery={setSearchQuery} />} />
          
          <Route path="/Library" element={<Library />} />

          <Route path="/About" element={<AboutPage />} />



        </Routes>



      </div>
    </BrowserRouter>
  );
};

export default App;