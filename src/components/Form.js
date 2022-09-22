import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/Books';

const AddBook = () => {
  const [state, setState] = useState({
    title: '',
    author: '',
  });

  const dispatch = useDispatch();

  const clickHandler = (e) => {
    e.preventDefault();
    const newBook = {
      id: uuidv4(),
      ...state,
    };
    dispatch(addBook(newBook));
    setState({ title: '', author: '' });
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
        <button type="button" onClick={clickHandler}>Add Book</button>
      </form>
    </>
  );
};

export default AddBook;
