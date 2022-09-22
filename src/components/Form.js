import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/Books';

const AddBook = () => {
  const [state, setState] = useState('');

  const dispatch = useDispatch();

  const clickHandler = () => {
    const newBook = {
      id: uuid(),
      title: '',
      author: '',
    };
    dispatch(addBook(state, newBook));
    setState('');
  };

  const changeHandler = (e) => {
    const { value } = e.target;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };

  return (
    <>
      <h1>Add New Book</h1>
      <form onSubmit={clickHandler}>
        <input type="text" name="title" placeholder="Book title" onChange={changeHandler} value={state.title} />
        <input type="text" name="author" placeholder="Book author" onChange={changeHandler} value={state.author} />
        <input type="reset" />
        <button type="button" onClick={clickHandler}>Add Book</button>
      </form>
    </>
  );
};

export default AddBook;
