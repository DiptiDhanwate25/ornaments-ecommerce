//categories.js file 
import React, { useState } from 'react';
import './categories.css';
import { useNavigate } from 'react-router-dom';

function Categories({
  selectedCategoryData,
  setSelectedCategoryData,
  setShowCategories,
  fetchedCategories,
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6); // Number of items per page
  const navigate =useNavigate();
  // Ensure selectedCategoryData exists and has data before slicing
  const currentItems = selectedCategoryData
    ? selectedCategoryData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
    : [];

  const totalPages = Math.ceil((selectedCategoryData?.length || 0) / itemsPerPage);

  const handleCategorySelect = (category) => {
    const filteredCategory = fetchedCategories.filter((cat) => cat.type === category);
    setSelectedCategoryData(filteredCategory);
    setShowCategories(false);
    navigate('/details');
    setSelectedCategoryData([]);
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (!selectedCategoryData || selectedCategoryData.length === 0) {
    return null;
  }

  return (
    <div className="container">
      <div className="selected-category">
        <ul>
          {currentItems.map((category, index) => (
            <li key={index} onClick={() => handleCategorySelect(category.type)}>
              <p>Name: {category.name}</p>
              <p>Price: {category.price}</p>
              <img src={category.image} alt={category.name} />
            </li>
          ))}
        </ul>
      </div>

      {/* Pagination */}
      <div className="pagination">
        <ul>
          {Array.from({ length: totalPages }, (_, index) => (
            <li key={index + 1}>
              <button onClick={() => paginate(index + 1)}>{index + 1}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Categories;
