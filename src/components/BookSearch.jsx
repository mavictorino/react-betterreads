import React, { useEffect, useState } from "react";
import axios from "axios";
import BookCard from "./BookCard";
import { useNavigate } from "react-router-dom";
import { database, ref, set } from "../config/firebaseApi";

const BookSearch = ({ searchQuery, setBooks, setIsLoading, books }) => {
  const [hasSearched, setHasSearched] = useState(false);
  const navigate = useNavigate();

  const handleMoreDetails = async (bookId) => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes/${bookId}?key=${import.meta.env.VITE_GOOGLE_BOOKS_API_KEY}`
      );
      const bookDetails = response.data;
      navigate(`/book-details/${bookId}`, { state: { bookDetails } });
    } catch (error) {
      console.error("Error fetching book details:", error);
    }
  };

  const handleSavedBook = (book) => {
    const bookId = book.id;
    const bookRef = ref(database, `library/${bookId}`);

    const bookData = {
      id: bookId,
      title: book.volumeInfo.title,
      authors: book.volumeInfo.authors || ["Unknown"],
      coverImage: book.volumeInfo.imageLinks?.thumbnail || "",
    };

    set(bookRef, bookData)
      .then(() => alert("Book saved!"))
      .catch((error) => console.error("Error saving book:", error));
  };

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
    }, 500);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  return (
    <div className="book-list">
      {hasSearched && !books.length ? (
        <p>No books found.</p>
      ) : (
        books.map((book) => (
          <BookCard
            key={book.id}
            title={book.volumeInfo.title}
            authors={book.volumeInfo.authors || []}
            imageUrl={book.volumeInfo.imageLinks?.thumbnail || ""}
            onSave={() => handleSavedBook(book)}
            onMoreDetails={() => handleMoreDetails(book.id)}
          />
        ))
      )}
    </div>
  );
};

export default BookSearch;
