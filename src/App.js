import { useState, useEffect, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import './styles.css';

import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import ShoppingList from './components/ShoppingList';
import CategoryMenu from './components/CategoryMenu';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import ProductPage from './components/ProductPage';

export const SelectedCategoryContext = createContext();
export const LoggedInContext = createContext();


function useStatus() {
  const [status, setStatus] = useState('');

  useEffect(() => {
    setStatus('Active');
    return () => {
      setStatus('');
    };
  }, []);

  return status;
}

function useLogState(value) {
  useEffect(() => {
    console.log('State:', value);
  }, [value]);
}

function useTracker(dependencies) {
  useEffect(() => {
    console.log('Dependencies:', dependencies);
  }, dependencies);
}

function DebugHistory() {
  const location = useLocation();
  const [history, setHistory] = useState([]);

  useEffect(() => {
    setHistory((prevHistory) => [...prevHistory, location.pathname]);
  }, [location]);

  return (
    <div id="debug-window">
      <h2>Debug History</h2>
      {history.map((path, index) => (
        <p key={index}>{path}</p>
      ))}
    </div>
  );
}

function App() {
  const [categories, setCategories] = useState([
    'Category A',
    'Category B',
    'Category C',
  ]);

  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const handleCategoryChange = (newCategory) => {
    setSelectedCategory(newCategory);
  };

  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  const products = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Description for Product 1',
      category: 'Category A',
      price: 100,
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description for Product 2',
      category: 'Category B',
      price: 200,
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'Description for Product 3',
      category: 'Category A',
      price: 300,
    },
    {
      id: 4,
      name: 'Product 4',
      description: 'Description for Product 4',
      category: 'Category C',
      price: 400,
    },
  ];

  const status = useStatus();

  useLogState(loggedIn);

  useTracker([selectedCategory, products]);

  useEffect(() => {
    console.log('Effect with dependency on loggedIn:', loggedIn);
    return () => {
      console.log('Cleanup for effect with dependency on loggedIn:', loggedIn);
    };
  }, [loggedIn]);

  useEffect(() => {
    console.log('Effect with dependency on selectedCategory:', selectedCategory);
    return () => {
      console.log('Cleanup for effect with dependency on selectedCategory:', selectedCategory);
    };
  }, [selectedCategory]);

  return (
    <Router>
      <SelectedCategoryContext.Provider value={selectedCategory}>
        <LoggedInContext.Provider value={loggedIn}>
        <div>
          <div>
            <Header />
            {loggedIn ? (
              <LogoutButton onLogout={handleLogout} />
            ) : (
              <LoginButton onLogin={handleLogin} />
            )}
          </div>
          <Body
            className="container"
            products={products}
            categories={categories}
            handleCategoryChange={handleCategoryChange}
          />
          <DebugHistory />
          <Footer />
        </div>
      </LoggedInContext.Provider>
    </SelectedCategoryContext.Provider>
  </Router>
);
}

export default App;

