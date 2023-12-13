import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './navmenu.css';
import './images/logo.jpg'
import { useNavigate } from 'react-router-dom';
import { categories } from './Data/catrgoriesData'; 

function NavMenu() {
  const validationSchema = Yup.object().shape({
    searchQuery: Yup.string().required('Provide the text'),
  });

  const navigate = useNavigate();

  const [showCategories, setShowCategories] = useState(false);
  const [selectedCategoryData, setSelectedCategoryData] = useState([]);
  const [fetchedCategories, setFetchedCategories] = useState([]);

  useEffect(() => {
    // Simulating fetching data using setTimeout (Replace this with actual fetch logic)
    const fetchData = () => {
      // You can replace this setTimeout with your actual data fetching logic using fetch or Axios
      setTimeout(() => {
        setFetchedCategories(categories);
      }, 1000); // Simulating delay for fetching data (remove this in actual implementation)
    };

    fetchData();
  }, []); // Empty dependency array - runs effect only on component mount

  const handleCategoriesClick = () => {
    setShowCategories(!showCategories); // Toggle dropdown visibility
  };

  const handleCategorySelect = (category) => {
    const filteredCategory = fetchedCategories.filter((cat) => cat.type === category);
    setSelectedCategoryData(filteredCategory);
    setShowCategories(false);

    // Navigate to the '/categories' route after category selection
    navigate('/categories');
  };

  const handleSubmit = (values, { setSubmitting }) => {
    console.log('Search Query:', values.searchQuery);
    // Your authentication or search logic here

    setSubmitting(false);
  };

  return (
    <div className="container">
      <div className="header">
        {/* Company Logo */}
        <div className="logo-container">
          <img src="./images/logo.jpg" alt="Company Logo" className="logo" />
        </div>

        {/* Horizontal Navigation Bar */}
        <div className="horizontal-nav">
          <ul>
            <li><a href="/">Home</a></li>
            <li onClick={handleCategoriesClick}>
              <a href="#">Categories</a>
              {showCategories && (
                <div className="categories-dropdown">
                  <ul>
                    <li onClick={() => handleCategorySelect('Male')}>Mens</li>
                    <li onClick={() => handleCategorySelect('Female')}>Womens</li>
                   
                  </ul>
                </div>
              )}
            </li>
            <li><a href="/cart">Cart</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </div>

        <div className="search-container">
          <h2>Search</h2>
          <Formik
            initialValues={{ searchQuery: '' }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="search-box">
                  <Field type="text" name="searchQuery" placeholder="Search here" />
                  <ErrorMessage name="searchQuery" component="div" className="error-message" />
                </div>

                <button type="submit" disabled={isSubmitting} className="search-button">
                  {isSubmitting ? 'Searching...' : 'Search'}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>

      {selectedCategoryData.length > 0 && (
        <div className="selected-category">
          <ul>
            {selectedCategoryData.map((category, index) => (
              <li key={index}>
                <p>Name: {category.name}</p>
                <p>Price: {category.price}</p>
                <img src={category.image} alt={category.name} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default NavMenu;
