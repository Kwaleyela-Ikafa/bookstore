// Action types
const SHOW_STATUS = 'categories/Category/SHOW_STATUS';

const initialState = [];

// Reducers
const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_STATUS:
      return 'Under construction';
    default:
      return state;
  }
};

// Action creators
const checkStatus = () => ({ type: SHOW_STATUS });

export default { categoryReducer, checkStatus };
