import React from "react";

function BookCard({ title, authors, imageUrl }) {
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
        <button className="btn btn-details">See more details</button>
      </div>
    </div>
  );
}

export default BookCard;