
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BookCard from './BookCard';
import { database, ref, set } from '../config/firebaseApi'

const BookSearch = ({ searchQuery, setSearchQuery, books, setBooks, setIsLoading }) => {
  
  const [hasSearched, setHasSearched] = useState(false);

  const handleSavedBook = (book) => {
    const bookRef = ref(database, `books/${book.id}`);

    set(bookRef, {
      title: book.volumeInfo.title,
      authors: book.volumeInfo.authors || ["Unknown"], 
      coverImage: book.volumeInfo.imageLinks?.thumbnail || "",
    })
    .then(() => alert("Book saved!"))
    .catch((error) => console.error("Error saving book", error));
  }
  
  
  useEffect(() => {
    if (!searchQuery) {
      setBooks([]); 
      setHasSearched(false);
      return;
    }

    const timer = setTimeout(() => {
      setIsLoading(true);
      setHasSearched(true);
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
            onSave={() => handleSavedBook(book)}
          />
        ))
      ) : (
        hasSearched && <p>Ops, no books were found.</p>
      )}
    </div>
  );
};

export default BookSearch;