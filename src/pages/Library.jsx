import React, { useEffect, useState } from "react";
import { getUserLibrary, updateUserLibraryBook, deleteUserLibraryBookReview } from "../config/firebaseApi";
import BookCard from "../components/BookCard";

const Library = () => {
  const [savedBooks, setSavedBooks] = useState([]);

  const fetchSavedBooks = async () => {
    try {
      const books = await getUserLibrary();
      const formattedBooks = Object.entries(books || {}).map(([id, data]) => ({
        id,
        ...data,
      }));
      setSavedBooks(formattedBooks);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  useEffect(() => {
    fetchSavedBooks();
  }, []);

  const handleUpdate = async (bookId, updatedData) => {
    console.log("Updating book:", bookId, updatedData); // Debugging
    try {
      await updateUserLibraryBook(bookId, updatedData);
      setSavedBooks((prevBooks) =>
        prevBooks.map((book) =>
          book.id === bookId ? { ...book, ...updatedData } : book
        )
      );
    } catch (error) {
      console.error("Error updating book:", error);
    }
  };

  const handleDeleteReview = async (bookId) => {
    console.log("Deleting review for book:", bookId); // Debugging
    try {
      await deleteUserLibraryBookReview(bookId);
      setSavedBooks((prevBooks) =>
        prevBooks.map((book) =>
          book.id === bookId
            ? { ...book, review: undefined, rating: undefined }
            : book
        )
      );
    } catch (error) {
      console.error("Error deleting review:", error);
    }
  };

  return (
    <div className="library">
      <h2>Your Library</h2>
      {savedBooks.length > 0 ? (
        savedBooks.map((book) => (
          <BookCard
            key={book.id}
            bookId={book.id}
            title={book.title}
            authors={book.authors}
            imageUrl={book.coverImage}
            review={book.review}
            rating={book.rating}
            onUpdate={handleUpdate}
            onDeleteReview={handleDeleteReview}
          />
        ))
      ) : (
        <p>You have no books saved in your library.</p>
      )}
    </div>
  );
};

export default Library;