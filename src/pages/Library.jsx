import React, { useEffect, useState } from 'react';
import { getUserLibrary, updateUserLibraryBook } from '../config/firebaseApi';
import BookCard from '../components/BookCard';

const Library = () => {
    const [savedBooks, setSavedBooks] = useState([]);

    useEffect(() => {
        const getBooks = async () => {
            const books = await getUserLibrary();
            setSavedBooks(Object.values(books));
        };

        getBooks();
    }, []);

    const handleUpdate = async (bookId, updatedData) => {
        await updateUserLibraryBook(bookId, updatedData); // Update in Firebase
        setSavedBooks(prevBooks => 
            prevBooks.map(book => book.id === bookId ? { ...book, ...updatedData } : book)
        );
    };

    return (
        <div className='library'>
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
                        onUpdate={(updatedData) => handleUpdate(book.id, updatedData)}
                    />
                ))
            ) : (
                <p>You have no books saved in your library.</p>
            )}


        </div>
    );
};

export default Library