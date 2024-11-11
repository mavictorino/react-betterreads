import React, { useState } from "react";

function BookCard({ bookId, title, authors, imageUrl, onSave, review: initialReview, rating: initialRating, onUpdate }) {

  const [review, setReview] = useState(initialReview || "");
  const [rating, setRating] = useState(initialRating || 1);
  const [updateMessage, setUpdateMessage] = useState("");

  const handleUpdate = () => {
    if (onUpdate && review && rating) {
      onUpdate(bookId, { review, rating });
      setUpdateMessage("Review saved!")
      setReview("");
      setRating(1);

      setTimeout(() => setUpdateMessage(""), 2000);
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
          {authors ? authors : "No authors available"}
        </p>
        <button className="btn-details">See more details</button>
        <button className="btn-save" onClick={onSave}>Save to your Library</button>

        <textarea value={review} onChange={(e) => setReview(e.target.value)} placeholder="Review" />
        <select value={rating} onChange={(e) => setRating(Number(e.target.value))}>
          {[1, 2, 3, 4, 5].map((num) => (
            <option key={num} value={num}>{num}</option>
          ))}
        </select>
        <button onClick={handleUpdate}>Update Review</button>
        {updateMessage && <p>{updateMessage}</p>}

      </div>
    </div>
  );
}

export default BookCard;