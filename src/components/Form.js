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
      <div className="px-10 border-t border-t-slate-200 pt-5 mt-8">
        <h1 className="text-lg font-bold text-gray-400">Add New Book</h1>
      </div>
      <form className="px-10 mb-8" onSubmit={clickHandler}>
        <div className="md:flex">
          <div className="md:w-1/2 sm:w-full md:pr-8">
            <input
              type="text"
              name="title"
              placeholder="Book title"
              className="form-input mt-3 block w-full border-slate-500 rounded-sm border-gray-300 shadow-sm py-2 rounded"
              onChange={changeHandler}
              value={state.title || ''}
            />
          </div>
          <div className="md:w-1/3 sm:w-full md:pr-8 ">
            <input
              type="text"
              name="author"
              placeholder="Book author"
              className="form-input mt-3 border-slate-500 block w-full rounded-sm border-gray-300 shadow-sm py-2 rounded"
              onChange={changeHandler}
              value={state.author || ''}
            />
          </div>
          <div className="md:w-1/4 sm:w-full border-none ">
            <button type="submit" className="mt-3 px-12 py-2 bg-blue-500 border-none text-white rounded-xl">Add Book</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddBook;
