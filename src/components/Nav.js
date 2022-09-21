import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import Category from '../redux/categories/Category';

const Nav = () => (
  <Router>
    <div className="main">
      <header>
        <nav>
          <h1>Bookstore CMS</h1>
          <ul>
            <li>
              <Link to="/Books">Books</Link>
            </li>
            <li>
              <Link to="/Category">Category</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="../redux/categories/Category" element={<Category />} />
      </Routes>
    </div>
  </Router>
);

export default Nav;
