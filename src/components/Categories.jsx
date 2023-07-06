import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CategoriesContext } from '../App';

function Categories({ categories, selectedCategory, products }) {
  return (
    <div>
      <h2>All categories</h2>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>
            <Link to={`/category/${category}`}>{category}</Link>
          </li>
        ))}
      </ul>

    </div>
  );
}export default Categories;
