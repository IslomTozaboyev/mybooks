import * as t from "../Types";

const initialState = {
  data: [],
  filterData: [],
};

const BooksReducer = (state = initialState, action) => {
  switch (action.type) {
    case t.BOOKS_DATA:
      return { ...state, data: action.payload };
    case t.BOOKS_DATA2:
      return { ...state, filterData: action.payload };
    case t.BOOKS_DATA3:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default BooksReducer;
