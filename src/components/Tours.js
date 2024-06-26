// Tours.js
import React from 'react';
import Tour from './Tour';

const Tours = ({ tours, removeTour }) => {
  return (
    <div>
      {tours.map((tour) => (
        <Tour key={tour.id} tour={tour} removeTour={removeTour} />
      ))}
    </div>
  );
};

export default Tours;
