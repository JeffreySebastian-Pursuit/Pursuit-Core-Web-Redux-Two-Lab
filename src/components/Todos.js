import React from "react";
import { Link } from "react-router-dom";

const Todos = ({ todos, setCompleted }) => {

const toggleTodo = () => {
setCompleted(true)

}
  return (
    <ul>
      {todos.map((todo) => {
        return <li key={todo.id} onClick={toggleTodo}>{todo.text}</li>;
      })}
      <Link to="/todos/new">Add New Todo</Link>
    </ul>
  );
};

export default Todos;
