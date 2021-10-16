import React, { useState, useEffect } from "react";
import axios from "axios";

import Form from "../components/Form";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, addTodos } from "../actions/todoActions";

const FormContainer = () => {
  const [text, setText] = useState("");
  const [completed, setCompleted] = useState(false);

  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

    useEffect(() => {
      const fetchTodos = async () => {
        const url = todos;
        // debugger
        let res = await axios.get(url);
        debugger
        const action = addTodos(res.data);
        console.log(action)
        dispatch(action);
      };

      fetchTodos();
    }, []);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("HANDLE SUBMIT");
    const nextId = todos.length ? todos[todos.length - 1].id + 1 : 1;
    console.log(nextId)

    // const todoBody = "Dummy post data";
    // const userId = 7;

    const action = addTodo({
      completed: false,
      id: nextId,
      text: text,
    });

    // console.log('ABOUT TO DISPATCH', action);
    dispatch(action);
    // console.log('ABOUT T ORESET')
    setText("");
    // define our post id based on the last post in the posts list
    // create a ternary that checks if there are posts in the array
    // if there ARE we grab the id of the last post (post[post.length -1].id) and add 1 to it
    // if there ARE NOT we set the id to 1
    // define dummy post body and userId (because we dont have inputs for these atm)
    // add a call to dispatch addPost and pass in our new post data (an object with our title, id, body, and  )
    // reset the local state to an empty string("") with setTitle
  };

  // typical handle submit
  // let res = await axios.post('/posts', postFromState);
  // // const action = addPost(res.data)
  // dispatch(addPost(res.data));
  // setTitle('');

  return (
    <Form handleChange={handleChange} handleSubmit={handleSubmit} text={text} />
  );
};

export default FormContainer;
