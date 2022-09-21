import React, { useState } from 'react';
// import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/Books';

const AddBook = () => {
  // const [value, setValue] = useState({
  //   id: uuidv4(),
  //   title: '',
  //   author: '',
  // });
  const [values, setValue] = useState('');

  const dispatch = useDispatch();

  const clickHandler = (e) => {
    setValue(e.target.value);
    dispatch(addBook(values));
  };

  // const clickHandler = (e) => {
  //   e.preventDefault();
  //   setValue({ id: uuidv4, title: '', author: '' });
  //   dispatch(addBook(value));
  // };

  const changeHandler = (e) => {
    const { name, values } = e.target;
    setValue((previousValue) => ({
      ...previousValue,
      [name]: values,
    }));
  };

  return (
    <>
      <h1>Add New Book</h1>
      <form onSubmit={clickHandler}>
        <input type="text" placeholder="Book title" onChange={changeHandler} value={values.title} />
        <input type="text" placeholder="Book author" onChange={changeHandler} value={values.author} />
        <button type="submit">Add Book</button>
      </form>
    </>
  );
};

export default AddBook;
