import React from 'react';
import AddBook from './Form';
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
