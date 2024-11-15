import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get, update, remove } from "firebase/database";
import firebaseConfig from "../services/firebaseConfig";

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export const getUserLibrary = async () => {
  const dbRef = ref(database, 'library'); // Ensure the path matches where books are saved
  try {
      const snapshot = await get(dbRef);
      if (snapshot.exists()) {
          return snapshot.val(); // Returns an object with book IDs as keys
      } else {
          console.log('No books found in library');
          return {};
      }
  } catch (error) {
      console.error('Error retrieving saved books:', error);
      return {};
  }
};

export const updateUserLibraryBook = async (bookId, updatedData) => {
    const db = getDatabase();
    const bookRef = ref(db, `library/${bookId}`);
    
    try {
      await update(bookRef, updatedData);
      console.log("Book updated successfully in Firebase.");
    } catch (error) {
      console.error("Error updating book in Firebase:", error);
    }
  };

  export const deleteUserLibraryBookReview = async (bookId) => {
      
    const db = getDatabase();
    const bookRef = ref(db, `library/${bookId}`);
  
    try {
      await update(bookRef, { review: null, rating: null }); 
      console.log(`Review and rating deleted for book ID: ${bookId}`);
    } catch (error) {
      console.error("Error deleting review and rating:", error);
    }
  };

export { database, ref, set, get, update, remove };