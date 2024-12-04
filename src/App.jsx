import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import './App.css';
import BookDetails from './pages/BookDetails';
import Library from './pages/Library';
import SearchForm from './components/SearchForm';
import AboutPage from './pages/About';
import LandingPage from './pages/LandingPage/LandingPage';
import Layout from './components/Layout'; 
import '../src/pages/LandingPage/LandingPage.css';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route
              path="/home"
              element={<SearchForm searchQuery={searchQuery} setSearchQuery={setSearchQuery} />}
            />
            <Route path="/book-details/:bookId" element={<BookDetails />} />
            <Route path="/library" element={<Library />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
