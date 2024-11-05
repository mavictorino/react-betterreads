import React, { useEffect, useState } from 'react';
import { getUserLibrary } from '../config/firebaseApi';
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

    return (
        <div className='library'>
            <h2>Your Library</h2>
            {savedBooks.length > 0 ? (
                savedBooks.map((book) => (
                    <BookCard
                    key={book.id}
                    title={book.title}
                    authors={book.authors}
                    imageUrl={book.coverImage}
                    />
                ))
            ) : (
                <p>You have no books saved in your library.</p>
            )}


        </div>
    );
};

export default Library