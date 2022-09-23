import React from 'react';
import propTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookStore } from '../redux/books/Books';

const Book = ({ book }) => {
  const { title, author } = book;
  const dispatch = useDispatch();

  const clickHandler = (id) => {
    dispatch(removeBookStore(id));
  };

  return (
    <li>
      <p>{title}</p>
      <p>{author}</p>
      <button type="button" onClick={() => clickHandler(book.item_id)}>Remove</button>
    </li>
  );
};

Book.propTypes = {
  book: propTypes.shape({
    item_id: propTypes.string,
    title: propTypes.string,
    author: propTypes.string,
  }).isRequired,
};

export default Book;
