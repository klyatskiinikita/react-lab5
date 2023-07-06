import { useState } from 'react';

function CategoryMenu({ categories, onCategoryChange }) {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  function handleCategoryChange(event) {
    const newCategory = event.target.value;
    setSelectedCategory(newCategory);
    onCategoryChange(newCategory);
  }

  const categoryOptions = categories.map(category => (
    <option key={category} value={category}>
      {category}
    </option>
  ));

  return (
    <div>
      <label htmlFor="category-select">Category:</label>
      <select
        id="category-select"
        value={selectedCategory}
        onChange={handleCategoryChange}
      >
        <option value="All">All</option>
        {categoryOptions}
      </select>
    </div>
  );
}

export default CategoryMenu;
