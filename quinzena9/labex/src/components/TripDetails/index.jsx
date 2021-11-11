import React from 'react';
import { useParams } from 'react-router';

export const TripDetails = () => {
  const { tripId } = useParams();

  console.log(tripId);

  return (
    <div>
      <h1>Trip details</h1>
    </div>
  );
};
