import React from 'react';

const MealDetails = (params) => {
  return (
    <div>
      <h1>Meal: {params.params.slug}</h1>
    </div>
  )
}

export default MealDetails;
