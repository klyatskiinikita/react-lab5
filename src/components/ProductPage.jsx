import { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { LoggedInContext, SelectedCategoryContext } from '../App';

function ProductPage({ products }) {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const loggedIn = useContext(LoggedInContext);
  const selectedCategory = useContext(SelectedCategoryContext);

  const [comment, setComment] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Your comment has been added');
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const convertToUSD = (amount) => (amount / 36.92).toFixed(2);
  const convertToUAH = (amount) => (amount * 36.92).toFixed(2);

  const [priceInUAH, setPriceInUAH] = useState(product.price);
  const [priceInUSD, setPriceInUSD] = useState(convertToUSD(product.price));

  const handleUAHChange = (event) => {
    const uahAmount = event.target.value;
    setPriceInUAH(uahAmount);
    setPriceInUSD(convertToUSD(uahAmount));
  };

  const handleUSDChange = (event) => {
    const usdAmount = event.target.value;
    setPriceInUSD(usdAmount);
    setPriceInUAH(convertToUAH(usdAmount));
  };

  return (
    <div>
      {loggedIn && <p>You are logged in.</p>}
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <form onSubmit={handleSubmit}>
        <p>Comment:</p>
        <textarea value={comment} onChange={handleCommentChange}></textarea>
        <button type="submit">Submit</button>
      </form>
      <p>Category: {selectedCategory}</p>
      <p>Price in UAH: {priceInUAH}</p>
      <p>Price in USD: {priceInUSD}</p>
      <input type="text" value={priceInUAH} onChange={handleUAHChange} />
      <input type="text" value={priceInUSD} onChange={handleUSDChange} />
    </div>
  );
}

export default ProductPage;

