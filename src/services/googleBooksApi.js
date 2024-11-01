
import axios from 'axios';

const GOOGLE_BOOKS_API = 'https://www.googleapis.com/books/v1/volumes';
const API_KEY = 'AIzaSyCbYyRveD5TdYoIitzHuekFKpfpJKh5iHA';

/* Search for books on Google Books */
export const searchBooks = async (query) => {
  try {
    const response = await axios.get(GOOGLE_BOOKS_API, {
      params: {
        q: query,
        key: API_KEY, 
      },
    });
    return response.data.items || []; // Return array of books if found
  } catch (error) {
    console.error('Error fetching books:', error);
    return []; // Return empty array if there's an error
  }
};