import React from 'react';
import propTypes from 'prop-types';

const Book = ({ id, title, author }) => (
  <li key={id}>
    <p>{title}</p>
    <p>{author}</p>
    <button type="submit">Remove</button>
  </li>
);

Book.propTypes = {
  id: propTypes.number.isRequired,
  title: propTypes.string.isRequired,
  author: propTypes.string.isRequired,
};

export default Book;
