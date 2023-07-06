import { useState } from 'react';
import { Link } from 'react-router-dom';

function ShoppingList({ category, products }) {
  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleProductSelect = (productId) => {
    const index = selectedProducts.indexOf(productId);
    if (index === -1) {
      setSelectedProducts([...selectedProducts, productId]);
    } else {
      const updatedSelectedProducts = [...selectedProducts];
      updatedSelectedProducts.splice(index, 1);
      setSelectedProducts(updatedSelectedProducts);
    }
  };

  const renderProduct = (product) => (
    <div key={product.id} className="product-item">
      <input
        type="checkbox"
        checked={selectedProducts.includes(product.id)}
        onChange={() => handleProductSelect(product.id)}
      />
      <Link to={`/product/${product.id}`} className="product-link">
        {product.name}
      </Link>
  </div>
  );

  const filteredProducts = category === 'All'
    ? products
    : products.filter((product) => product.category === category);

  return (
    <div>
      <h2>{category}</h2>
      <div>{filteredProducts.map(renderProduct)}</div>
      <div>Selected count: {selectedProducts.length}</div>
      <div>Displayed count: {filteredProducts.length}</div>
    </div>
  );
}

export default ShoppingList;
