import React from 'react';

const LodgeCard = ({ imageUrl, type, location, price }) => {
  return (
    <div className="lodge-card">
      <div className="lodge-content">
        <div className="lodge-image">
          <img
            src={imageUrl}
            alt={`${type} in ${location}`}
            className="image-icon"
          />
          <div className="image-text">image</div>
        </div>
        <div className="lodge-type">{`${type} - ${location}`}</div>
        <div className="lodge-price">Price: {price}</div>
      </div>
    </div>
  );
};

export default LodgeCard;