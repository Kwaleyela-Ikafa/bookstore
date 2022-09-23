import React from 'react';
import propTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/Books';

const Book = ({
  id, title, author, category,
}) => {
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(removeBook(id));
  };

  return (
    <li>
      <span>{category}</span>
      <p>{title}</p>
      <p>{author}</p>
      <button type="submit" onClick={clickHandler}>Remove</button>
    </li>
  );
};

Book.propTypes = {
  id: propTypes.number.isRequired,
  title: propTypes.string.isRequired,
  author: propTypes.string.isRequired,
  category: propTypes.string.isRequired,
};

export default Book;
