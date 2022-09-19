// These are Action Types
export const ADD_BOOK = 'books/Books/ADD_BOOK';
export const REMOVE_BOOK = 'books/Books/REMOVE_BOOK';

// Set Initial State
const initialState = [];

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

    default:
      return state;
  }
};

// Actions
export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

export default bookReducer;