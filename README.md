# BetterReads

BetterReads is a Single Page Application (SPA) designed to make organizing your personal library and discovering new books effortless and enjoyable. With an intuitive interface and dynamic integration with the Google Books API, BetterReads allows you to explore, manage, and personalize your book collection with ease.

![Books Image](./public/assets/books.jpg)

#### Check the deployed version here: https://react-betterreads.netlify.app/

## Features

- Search for books: discover books using Google Books API and add them to your library. 
- Manage your library: perform all CRUD operations (Create, Read, Update, Delete) to curate your book collection. 
- Interactive book details: dive into detailed information about each book in your library. 

## Tech Stack 

- **Frontend:**
    - React: for building dynamic, reusable components.
    - React Router: to enable a seamless SPA experience with multiple views.

- **Backend:**
    - Firebase Realtime Database: for real-time storage and retireval of your library's data.

- **APIs:**
    - Google Books API: for book discovery and search functionality.

## Setup

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/betterreads.git 
   cd betterreads 
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```
3. **Set Up Firebase:** 
    - Create a Firebase project and set up a Realtime Database.
    - Add your Firebase configuration to the project in the `firebaseConfig.js` file under `src/services/`.

4. **Run the application**:

   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3000`.

## Usage

- Navigate to the Home page to search for books and add them to your library.
- View detailed information about a book on the Book Details page.
- Manage your library by adding rate and reviews or deleting books.
- Learn more about the project on the About page.

## Future Features

- Personalized book recommendations.
- Integration with additional book APIs for enhanced discovery.

## Contribution

Contributions are welcome! If you'd like to enhance BetterReads, please follow these steps:

1. Fork the repository. 
2. Create a new branch: 
    ```bash
    git checkout -b feature-name  
    ```
3. Commit your changes:
    ```bash
    git commit -m "Add new feature"  
    ```
4. Push to the branch
    ```bash
    git commit -m "Add new feature"  
    ```
5. Submit a pull request. 
