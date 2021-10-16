import { ADD_TODO, ADD_TODOS } from "../actions/actionTypes";

const initialState = [];

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case ADD_TODOS:
      return [...state].concat(action.payload);
    default:
      return state;
  }
};

export default todosReducer;
