import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import { fetchBook } from '../redux/books/Books';

const BookList = () => {
  const books = useSelector((state) => state.book);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBook());
  }, []);

  return (
    <div>
      {books.length ? books.map((book) => <Book key={book.item_id} book={book} />)
        : <p>No Books available!</p>}
    </div>
  );
};

export default BookList;
