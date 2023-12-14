//navmenu.js

import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './navmenu.css';
import { useNavigate } from 'react-router-dom';
import { categories } from './Data/catrgoriesData';
import Categories from './components/categories';


function NavMenu() {
  const validationSchema = Yup.object().shape({
    searchQuery: Yup.string().required('Provide the text'),
  });

  const navigate = useNavigate();

  const [showCategories, setShowCategories] = useState(false);
  const [selectedCategoryData, setSelectedCategoryData] = useState([]);
  const [fetchedCategories, setFetchedCategories] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      setTimeout(() => {
        setFetchedCategories(categories);
      }, 1000);
    };

    fetchData();
  }, []);

  const handleCategoriesClick = () => {
    setShowCategories(!showCategories);
  };

  const handleCategorySelect = (category) => {
    const filteredCategory = fetchedCategories.filter((cat) => cat.type === category);
    setSelectedCategoryData(filteredCategory);
    setShowCategories(false);
    navigate('/categories');
  };

  const handleSubmit = (values, { setSubmitting }) => {
    console.log('Search Query:', values.searchQuery);
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

      {/* Display selectedCategoryData from Categories component */}
      <Categories
        selectedCategoryData={selectedCategoryData}
        setSelectedCategoryData={setSelectedCategoryData}
        setShowCategories={setShowCategories}
        fetchedCategories={fetchedCategories}
      />
    </div>
  );
}

export default NavMenu;
