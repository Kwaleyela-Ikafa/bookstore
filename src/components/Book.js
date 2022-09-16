/* eslint-disable react/prop-types */
import React from 'react';

const Book = ({ title, author }) => (
  <>
    <div className="book-container">
      <h2>{title}</h2>
      <h2>{author}</h2>
      <button type="submit">Remove</button>
    </div>
  </>
);

export default Book;
