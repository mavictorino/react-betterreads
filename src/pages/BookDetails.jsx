import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const BookDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const bookDetails = state?.bookDetails;

  if (!bookDetails) {
    return (
      <div className="book-details no-details">
        <p>Oh, there are no details available, please go back and try again.</p>;
        <button onClick={() => navigate(-1)} className="back-button">Go Back</button>
      </div>
    );
  }

  const {
    volumeInfo: { title, authors, description, categories, imageLinks },
  } = bookDetails;

  return (
    <div className="book-details">
      <button onClick={() => navigate(-1)} className="back-button">Go Back</button>
      <div className="details-container">
        {imageLinks?.thumbnail && (
          <img
            src={imageLinks.thumbnail}
            alt={`${title} cover`}
            className="book-cover"
          />
        )}
        <div className="text-details">
          <h1>{title}</h1>
          <p><strong>Authors:</strong> {authors ? authors.join(", ") : "Unknown"}</p>
          <p><strong>Categories:</strong> {categories ? categories.join(", ") : "None"}</p>
          <p><strong>Description:</strong> {description || "No description available."}</p>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
