import { ADD_TODO, ADD_TODOS } from "./actionTypes";

export const addTodo = (payload) => {
  return { type: ADD_TODO, payload };
};

export const addTodos = (payload) => {
  return { type: ADD_TODOS, payload };
};
