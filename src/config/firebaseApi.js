import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get, update, remove } from "firebase/database";
import firebaseConfig from "../services/firebaseConfig";

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export const getUserLibrary = async () => {
    const dbRef = ref(database, 'books');
    try {
        const snapshot = await get (dbRef);
        if (snapshot.exists()) {
            return snapshot.val();
        } else {
            console.log('Ops, no books found');
            return {};
        }
    } catch (error) {
        console.error('Error retrieving saved books', error);
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

export { database, ref, set, get, update, remove };