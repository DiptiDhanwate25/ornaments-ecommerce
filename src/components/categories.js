// categories.js

import React from 'react';
import '../components/categories.js'; // Import the CSS file

function Categories({ selectedCategoryData }) {
  if (!selectedCategoryData || selectedCategoryData.length === 0) {
    return null; // Return null if no categories are selected
  }

  return (
    <div className="category-details">
      {/* <h3>Selected Category Data:</h3> */}
      <ul>
        {selectedCategoryData.map((category, index) => (
          <li key={index}>
            <img src={category.image} alt={category.name} />
            <p>Name: {category.name}</p>
            <p>Price: {category.price}</p>
           
           </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
