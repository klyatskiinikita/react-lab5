import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <header>
      <h1>Заголовок сайту</h1>
      <nav>
        <ul>
          <li><Link to="/">Main page</Link></li>
          <li><Link to="/categories">All categories</Link></li>
          {props.loggedIn && (
            <li><a href="#">Logged-in link</a></li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;

