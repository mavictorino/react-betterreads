import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BookSearch from './components/BookSearch';
import './App.css';
import BookDetails from './pages/BookDetails';
import Library from './pages/Library';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchForm from './components/SearchForm';
import AboutPage from './pages/About';
import { MantineProvider } from '@mantine/core';



function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <BrowserRouter>
        <Navbar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />


        <div className='app-container'>

          

          <BookSearch
            searchQuery={searchQuery}
            setBooks={setBooks}
            setIsLoading={setIsLoading}
            books={books}

          />

          <Routes>
            <Route path="/" element={<SearchForm searchQuery={searchQuery} setSearchQuery={setSearchQuery} />} />

            <Route path="/book-details/:bookId" element={<BookDetails />} />

            <Route path="/Library" element={<Library />} />

            <Route path="/About" element={<AboutPage />} />



          </Routes>

          <Footer />

        </div>
      </BrowserRouter>
    </MantineProvider>
  );
};

export default App;