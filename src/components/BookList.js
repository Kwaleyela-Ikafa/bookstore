import React from 'react';
import Book from './Book';

const BookList = () => {
  const bookObj = [{
    id: 1,
    author: 'JK Rowling',
    title: 'Harry Porter',
  },
  {
    id: 2,
    author: 'Frank Herbert',
    title: 'Dune',
  },
  {
    id: 3,
    author: 'Anne Rice',
    title: 'Interview with the Vampire',
  }];

  return (
    <ul>
      {bookObj.map((book) => (
        <Book
          key={book.id}
          title={book.title}
          author={book.author}
        />
      ))}
    </ul>
  );
};

export default BookList;
