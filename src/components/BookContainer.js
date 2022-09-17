import React from 'react';
import AddBook from './BookInput';
import BookList from './BookList';
import Nav from './Nav';

const BookContainer = () => (
  <>
    <Nav />
    <div>
      <BookList />
      <AddBook />
    </div>
  </>
);

export default BookContainer;
