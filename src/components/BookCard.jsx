import React, { useState, useEffect } from 'react';
import { searchBooks } from '../services/googleBooksApi';

function BookCard() {
    const [bookData, setBookData] = useState(null); // state to store book data

    useEffect(() => {
        const getData = async () => {
            const query = "React Programming"; // Example search term
            const books = await searchBooks(query);
            setBookData(books[0]); // Set the first result for testing
        };
        
        getData();
    }, []);
    console.log(bookData);

    return (
        
        <>
            
            <div className="card">
                {bookData ? (
                    <>
                        <img 
                            src={bookData.volumeInfo.imageLinks?.thumbnail || "./images/book.png"} 
                            alt={bookData.volumeInfo.title} 
                        />
                        <h3 className="card-title">{bookData.volumeInfo.title}</h3>
                        <h4>{bookData.volumeInfo.authors || "No description available"}</h4>
                        <button>See more details</button>
                        
                    </>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </>
    );
}

export default BookCard;