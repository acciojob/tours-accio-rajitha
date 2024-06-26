// Tour.js
import React, { useState } from 'react';

const Tour = ({ tour, removeTour }) => {
  const [showInfo, setShowInfo] = useState(false);

  const { id, name, info, image, price } = tour;

  return (
    <article>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <h4>${price}</h4>
      <p>
        {showInfo ? info : `${info.substring(0, 200)}...`}
        <button onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? 'Show less' : 'Read more'}
        </button>
      </p>
      <button onClick={() => removeTour(id)}>Not Interested</button>
    </article>
  );
};

export default Tour;
