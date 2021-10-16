import React from "react";

const Form = ({ handleChange, handleSubmit, text }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Todo</label>
        <input type="text" id="title" value={text} onChange={handleChange} />
        <button type="submit">Save</button>
      </div>
    </form>
  );
};

export default Form;
