import React from "react";
import { Link } from "react-router-dom";

const Todos = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo) => {
        return <li key={todo.id}>{todo.text}</li>;
      })}
      <Link to="/todos/new">Add New Todo</Link>
    </ul>
  );
};

export default Todos;
