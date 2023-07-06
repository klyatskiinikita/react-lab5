
import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CategoryMenu from './CategoryMenu';
import ShoppingList from './ShoppingList';
import ProductPage from './ProductPage';
import Categories from './Categories'; 
import Category from './Category'; 
import { SelectedCategoryContext } from '../App';

function Body({ products, categories, handleCategoryChange }) {
const selectedCategory = useContext(SelectedCategoryContext);
  return (
    <main>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <SelectedCategoryContext.Provider value={selectedCategory}>
              <CategoryMenu categories={categories} onCategoryChange={handleCategoryChange} />
              <ShoppingList category={selectedCategory} products={products} />
            </SelectedCategoryContext.Provider>
          }
        />
        <Route path="/product/:id" element={<ProductPage products={products} />} />
        <Route
          path="/categories"
          element={
            <SelectedCategoryContext.Provider value={selectedCategory}>
              <Categories categories={categories} />
            </SelectedCategoryContext.Provider>
          }
        />
        {categories.map((category, index) => (
          <Route
            key={index}
            path={`/category/${category}`}
            element={
              <SelectedCategoryContext.Provider value={category}>
                <Category category={category} products={products} />
              </SelectedCategoryContext.Provider>
            }
          />
        ))}
      </Routes>
    </main>
  );
}
export default Body;
