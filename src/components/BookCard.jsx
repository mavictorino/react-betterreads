import React, { useState } from "react";

function BookCard({
  bookId,
  title,
  authors,
  imageUrl,
  review,
  rating,
  onUpdate,
  onDeleteReview,
}) {
  const [newReview, setNewReview] = useState(review || "");
  const [newRating, setNewRating] = useState(rating || 1);

  const handleUpdate = () => {
    if (onUpdate) {
      console.log("Calling update with:", { newReview, newRating }); // Debugging
      onUpdate(bookId, { review: newReview, rating: newRating });
    }
  };

  const handleDelete = () => {
    if (onDeleteReview) {
      console.log("Calling delete for:", bookId); // Debugging
      onDeleteReview(bookId);
    }
  };

  return (
    <div className="card">
      {imageUrl ? (
        <img src={imageUrl} alt={`${title} cover`} className="card-img" />
      ) : (
        <div className="placeholder-img">No Image Available</div>
      )}
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-authors">
          {authors ? authors.join(", ") : "No authors available"}
        </p>

        {review && rating ? (
          <>
            <p>
              <strong>Review:</strong> {review}
            </p>
            <p>
              <strong>Rating:</strong> {rating}/5
            </p>
            <button onClick={handleDelete} className="btn-delete">
              Delete Review
            </button>
          </>
        ) : (
          <>
            <textarea
              value={newReview}
              onChange={(e) => setNewReview(e.target.value)}
              placeholder="Write a review"
            />
            <select
              value={newRating}
              onChange={(e) => setNewRating(Number(e.target.value))}
            >
              {[1, 2, 3, 4, 5].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
            <button onClick={handleUpdate} className="btn-save">
              Save Review
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default BookCard;