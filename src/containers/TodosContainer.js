import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import { addTodos } from "../actions/todoActions";
import Todos from "../components/Todos";

const TodosContainer = () => {
  // replace placeholder array with our Redux posts state with useSelector
  // passing in a callback that takes in state and returns our posts slice of state
  const posts = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  // useEffect hook to fetch API data
  // useEffect(() => {
  //   const fetchTodos = async () => {
  // const url = "https://jsonplaceholder.typicode.com/todos";
  // let res = await axios.get(url);

  // const action = addTodos(res.data);
  //   dispatch(action);
  // };

  // fetchTodos();

  // create async function to:
  // 1. fetchPosts from  JSON Placeholder API("https://jsonplaceholder.typicode.com/posts") with axios.get
  // 2. dispatch our addPosts action creator with the res.data from our response as the argument

  // invoke our async function
  // }, []);

  return <Todos todos={todos} />;
};

export default TodosContainer;
