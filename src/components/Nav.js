import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import { HiUser } from 'react-icons/hi';
import Category from '../redux/categories/Category';

const Nav = () => (
  <Router>
    <div className="navBg">
      <nav className="relative flex flex-wrap bg-white items-center border-b border-slate-200 px-2 py-3 mb-3 nav-layout">
        <h1
          className="px-10 font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap text-blue-500 text-xl"
          href="/"
        >
          Bookstore CMS

        </h1>
        <ul className=" flex flex-col lg:flex-row list-none ">
          <li className="nav-item px-3 py-2 font-mono flex items-center text-gray-400 text-lg hover:opacity-75">
            <Link to="/Books">Books</Link>
          </li>
          <li className="nav-item px-3 py-2 font-mono flex items-center text-gray-400 text-lg hover:opacity-75">
            <Link to="/Category">Category</Link>
          </li>
        </ul>
        <div className=" ml-auto pr-10 flex flex-col lg:flex-row list-none">
          <li className="p-3 border border-slate-300 text-right rounded-full text-blue-500 font-md"><HiUser /></li>
        </div>
      </nav>

      <Routes>
        <Route path="../redux/categories/Category" element={<Category />} />
      </Routes>
    </div>
  </Router>
);

export default Nav;
