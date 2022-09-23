import axios from 'axios';

// These are Action Types
export const ADD_BOOK = 'books/Books/ADD_BOOK';
export const REMOVE_BOOK = 'books/Books/REMOVE_BOOK';
export const FETCH_BOOKS = 'books/Books/FETCH_BOOKS';
const apiUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/7qnAy9OgGZKc2cbpsMd1/books';

// Set Initial State
const initialState = [];

const successful = (books) => ({
  type: FETCH_BOOKS,
  payload: books,
});

export const fetchBook = () => async (dispatch) => {
  const response = await axios.get(apiUrl);
  const fetchedBooks = Object.entries(response.data).map((item) => {
    const {
      title, author, category,
    } = item[1][0];
    return {
      item_id: item[0],
      title,
      author,
      category,
    };
  });
  dispatch(successful(fetchedBooks));
};

// Actions
export const addBook = (book) => ({
  type: ADD_BOOK,
  payload: {
    item_id: book.item_id,
    title: book.title,
    author: book.author,
    category: book.category,
  },
});

export const addBookStore = (book) => async (dispatch) => {
  await axios.post(apiUrl, book, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  dispatch(addBook(book));
};

export const removeBook = (book) => ({
  type: REMOVE_BOOK,
  payload: {
    item_id: book,
  },
});

export const removeBookStore = (book) => async (dispatch) => {
  await axios.delete(`${apiUrl}/${book}`);
  dispatch(removeBook(book));
};

// Redducers
const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        action.payload,
      ];
    case REMOVE_BOOK:
      return [...state.filter((book) => book.id !== action.payload)];
    case FETCH_BOOKS: {
      return action.payload;
    }
    default:
      return state;
  }
};

export default bookReducer;
