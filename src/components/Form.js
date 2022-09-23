import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBookStore } from '../redux/books/Books';

const AddBook = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState('');

  const changeHandler = (e) => {
    const { name } = e.target;
    const { value } = e.target;
    const category = 'book';
    setState({
      ...state,
      item_id: uuidv4(),
      [name]: value,
      category,
    });
  };

  const clickHandler = (e) => {
    e.preventDefault();
    dispatch(addBookStore(state));
    setState('');
  };

  return (
    <>
      <h1>Add New Book</h1>
      <form onSubmit={clickHandler}>
        <input type="text" name="title" placeholder="Book title" onChange={changeHandler} value={state.title || ''} />
        <input type="text" name="author" placeholder="Book author" onChange={changeHandler} value={state.author || ''} />
        <button type="submit">Add Book</button>
      </form>
    </>
  );
};

export default AddBook;
