import React from "react";

const Form = ({ handleChange, handleSubmit, text }) => {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='text'>Todo</label>
      <input type="text" id="text" value={text} onChange={handleChange} />
      <button type="submit">Save</button>
    </form>
  );
};

export default Form;
