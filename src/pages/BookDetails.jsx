import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const BookDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const bookDetails = state?.bookDetails;

  if (!bookDetails) {
    return <p>oh, there is no details available, please go back and try again.</p>;
  }

  const {
    volumeInfo: { title, authors, description, categories, imageLinks },
  } = bookDetails;

  return (
    <div className="book-details">
      <button onClick={() => navigate(-1)}>Go Back</button>
      <h1>{title}</h1>
      {imageLinks?.thumbnail && <img src={imageLinks.thumbnail} alt={`${title} cover`} />}
      <p><strong>Authors:</strong> {authors ? authors.join(", ") : "Unknown"}</p>
      <p><strong>Categories:</strong> {categories ? categories.join(", ") : "None"}</p>
      <p><strong>Description:</strong> {description || "No description available."}</p>
    </div>
  );
};

export default BookDetails;