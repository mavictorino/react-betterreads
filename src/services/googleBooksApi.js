
import axios from 'axios';

const GOOGLE_BOOKS_API = 'https://www.googleapis.com/books/v1/volumes';
const apiKey = import.meta.env.VITE_GOOGLE_BOOKS_API_KEY;

/* Search for books on Google Books */
export const searchBooks = async (query) => {
  try {
    const response = await axios.get(GOOGLE_BOOKS_API, {
      params: {
        q: query,
        key: apiKey, 
      },
    });
    return response.data.items || []; // Return array of books if found
  } catch (error) {
    console.error('Error fetching books:', error);
    return []; // Return empty array if there's an error
  }
};