import React, { useState } from "react";


const BookCard = ({
  bookId,
  title,
  authors,
  imageUrl,
  review,
  rating,
  showReviewRating = false,
  onUpdate,
  onDeleteReview,
  onSave,
  onMoreDetails,
}) => {
  const [newReview, setNewReview] = useState(review || "");
  const [newRating, setNewRating] = useState(rating || 1);

  const handleUpdate = () => {
    if (onUpdate) {
      onUpdate(bookId, { review: newReview, rating: newRating });
    }
  };

  const handleDelete = () => {
    if (onDeleteReview) {
      onDeleteReview(bookId);
    }
  };

  return (
    <div className="book-card">
      <div className="book-card-image-container">
        {imageUrl ? (
          <img src={imageUrl} alt={`${title} cover`} className="book-card-image" />
        ) : (
          <div className="book-card-placeholder">No Image Available</div>
        )}
      </div>

      <div className="book-card-content">
        <h3 className="book-card-title">{title}</h3>
        <p className="book-card-authors">
          {authors ? authors.join(", ") : "No authors available"}
        </p>

        {showReviewRating && review && rating ? (
          <div className="book-card-review-container">
            <p>
              <strong>Review:</strong> {review}
            </p>
            <p>
              <strong>Rating:</strong> {rating}/5
            </p>
            <button
              onClick={handleDelete}
              className="book-card-button book-card-delete-button"
            >
              Delete Review
            </button>
          </div>
        ) : showReviewRating ? (
          <div>
            <textarea
              value={newReview}
              onChange={(e) => setNewReview(e.target.value)}
              placeholder="Write a review"
              className="book-card-textarea"
            ></textarea>
            <select
              value={newRating}
              onChange={(e) => setNewRating(Number(e.target.value))}
              className="book-card-select"
            >
              {[1, 2, 3, 4, 5].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
            <button
              onClick={handleUpdate}
              className="book-card-button book-card-save-button"
            >
              Save Review
            </button>
          </div>
        ) : null}

        {!showReviewRating && onSave && (
          <button
            onClick={onSave}
            className="book-card-button book-card-save-button"
          >
            Add to Library
          </button>
        )}

        <button
          onClick={onMoreDetails}
          className="book-card-button book-card-details-button"
        >
          More Details
        </button>
      </div>
    </div>
  );
};

export default BookCard;

