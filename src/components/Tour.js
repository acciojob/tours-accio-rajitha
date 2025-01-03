import React, { useState } from 'react';

const Tour = ({ tour, removeTour }) => {
  const [showInfo, setShowInfo] = useState(false);

  const { id, name, info, image, price } = tour;

  return (
    <article>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <h4>${price}</h4>
      <p id={`tour-item-para-${id}`}>
        {showInfo ? info : `${info.substring(0, 200)}...`}
        <button
          id={`see-more-${id}`} // Dynamic ID remains as expected by the test
          onClick={() => setShowInfo(!showInfo)}
        >
          {showInfo ? 'Show less' : 'See more'} {/* Ensure no trailing spaces */}
        </button>
      </p>
      <button id={`delete-btn-${id}`} onClick={() => removeTour(id)}>
        Not Interested
      </button>
    </article>
  );
};

export default Tour;
