
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BookCard from './BookCard';

const BookSearch = ({ searchQuery, setSearchQuery, books, setBooks, setIsLoading }) => {
  
  useEffect(() => {
    if (!searchQuery) {
      setBooks([]); 
      return;
    }

    const timer = setTimeout(() => {
      setIsLoading(true);
      axios
        .get(
          `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&key=${import.meta.env.VITE_GOOGLE_BOOKS_API_KEY}`
        )
        .then((response) => {
          setBooks(response.data.items || []);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching books:", error);
          setIsLoading(false);
        });
    }, 500);  // using time interval to avoid multiple requests to api and enhance performance

    return () => clearTimeout(timer);
  }, [searchQuery]);

  return (
    <div className="book-list">
      {books.length > 0 ? (
        books.map((book) => (
          <BookCard
            key={book.id}
            title={book.volumeInfo.title}
            authors={book.volumeInfo.authors || []}
            imageUrl={book.volumeInfo.imageLinks?.thumbnail || "https://placehold.co/400"}
          />
        ))
      ) : (
        <p>Oops, no books were found.</p>
      )}
    </div>
  );
};

export default BookSearch;