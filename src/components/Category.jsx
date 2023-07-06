import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CategoriesContext } from '../App.js';

function Category({ category, products }) {
  const filteredProducts = products.filter(
    (product) => product.category === category
  );

  return (
    <div>
      <h2>{category}</h2>
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Category;
