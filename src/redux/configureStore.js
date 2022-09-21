import { combineReducers, configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/Books';
import categoryReducer from './categories/Category';

const reducer = combineReducers({
  book: bookReducer,
  categories: categoryReducer,
});

const store = configureStore({
  reducer,
});

export default store;
